import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPost } from '../actions/postActions';
import Loader from '../components/loader';
import Post from '../components/post';

function UploadPost() {
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const { post, error } = useSelector((state) => state.uploadPost);

  const submitPost = (e) => {
    e.preventDefault();
    if ((userId, title && body)) {
      console.log(title, body);
      let post = {
        userId,
        title,
        body,
      };
      dispatch(uploadPost(post));
    }
  };
  if (post) {
  }

  return (
    <>
      {error ? (
        <p>{JSON.stringify(error)}</p>
      ) : post ? (
        <Post post={post} />
      ) : (
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
            <form
              method='POST'
              onSubmit={submitPost}
              className='lg:w-3/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0'
            >
              <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
                Upload Post
              </h2>
              <div className='relative mb-4'>
                <label
                  htmlFor='user-id'
                  className='leading-7 text-sm text-gray-600'
                >
                  User ID
                </label>
                <input
                  type='text'
                  onChange={(e) => setUserId(e.target.value)}
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='title'
                  className='leading-7 text-sm text-gray-600'
                >
                  Title
                </label>
                <input
                  type='text'
                  onChange={(e) => setTitle(e.target.value)}
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='body'
                  className='leading-7 text-sm text-gray-600'
                >
                  Body
                </label>
                <textarea
                  onChange={(e) => setBody(e.target.value)}
                  rows='4'
                  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></textarea>
              </div>
              <button
                type='submit'
                className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              >
                Button
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default UploadPost;
