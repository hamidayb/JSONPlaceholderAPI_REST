import { useState } from 'react';
import AllPosts from './screens/allPosts';
import UploadPost from './screens/uploadPost';

function App() {
  const [currentPage, setCurrentPage] = useState('uploadpost');

  return (
    <div id='root'>
      {/* Header */}
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>JSONPlaceHolder</span>
          </a>
          <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
            <a
              className='mr-5 hover:text-gray-900'
              onClick={() => setCurrentPage('allposts')}
            >
              All Posts
            </a>
            <a
              className='mr-5 hover:text-gray-900'
              onClick={() => setCurrentPage('uploadpost')}
            >
              Upload Post
            </a>
            <a
              className='mr-5 hover:text-gray-900'
              onClick={() => setCurrentPage('editpost')}
            >
              Edit Post
            </a>
            <a
              className='mr-5 hover:text-gray-900'
              onClick={() => setCurrentPage('deletepost')}
            >
              Delete Post
            </a>
          </nav>
        </div>
      </header>
      {/* End Header */}

      {currentPage === 'allposts' && <AllPosts />}
      {currentPage === 'uploadpost' && <UploadPost />}
    </div>
  );
}

export default App;
