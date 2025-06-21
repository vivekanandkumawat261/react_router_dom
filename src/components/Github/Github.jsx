import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData()

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://api.github.com/users/vivekanandkumawat261')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//       .catch(error => {
//         console.error("Error fetching GitHub data:", error);
//       });
//   }, []);

  if (!data) {
    return <div className='text-center text-xl p-4'>Loading GitHub data...</div>;
  }

  return (
<div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105">
  <div className="flex flex-col items-center p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
    <img
      src={data.avatar_url}
      alt="GitHub avatar"
      className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
    />
    <h2 className="text-2xl font-semibold">{data.name || data.login}</h2>
    <p className="text-sm text-gray-300">{data.bio || 'GitHub user'}</p>
    <div className="mt-4 flex gap-6 text-lg">
      <div className="text-center">
        <p className="font-bold">{data.public_repos}</p>
        <p className="text-gray-300">Repos</p>
      </div>
      <div className="text-center">
        <p className="font-bold">{data.followers}</p>
        <p className="text-gray-300">Followers</p>
      </div>
      <div className="text-center">
        <p className="font-bold">{data.following}</p>
        <p className="text-gray-300">Following</p>
      </div>
    </div>
    <a
      href={data.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block bg-white text-gray-800 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition"
    >
      Visit GitHub
    </a>
  </div>
</div>

  );
};

export default Github;


export const gihubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vivekanandkumawat261')
    return response.json()
}