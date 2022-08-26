import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../actions/postActions';
import Loader from '../components/loader';
import Post from '../components/post';

const AllPosts = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { loading, posts, error } = allPosts;

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts &&
        posts.reverse().map((post, index) => <Post key={index} post={post} />)
      )}
    </>
  );
};

export default AllPosts;
