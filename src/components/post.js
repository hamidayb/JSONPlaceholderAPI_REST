import React from 'react';

export default function Post({ post }) {
  console.log('POST:', post);
  return (
    <div class='p-4 md:w-2/3 w-full' style={{ margin: 'auto' }}>
      <div class='h-full bg-gray-100 p-8 rounded'>
        <span class='flex-grow flex flex-col mb-3'>
          <span class='text-gray-500 text-sm'>
            <strong>User Id: </strong> {post.userId}
          </span>
          <span class='text-gray-500 text-sm'>
            <strong>Post ID: </strong> {post.id}
          </span>
        </span>
        <p class='leading-relaxed mb-2'>
          <strong>Title: </strong> {post.title}
        </p>
        <p class='leading-relaxed'>
          <strong>Body: </strong> {post.body}
        </p>
      </div>
    </div>
  );
}
