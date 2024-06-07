require('dotenv').config();
const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');

const createNewPost = async () => {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.INSTAGRAM_USER);
  await ig.account.login(process.env.INSTAGRAM_USER, process.env.INSTAGRAM_PSW);

  const imageBuffer = await get({
    url: 'https://scontent.cdninstagram.com/v/t51.2885-15/408719409_989250996203192_5639304343952881315_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=ee23oSaL4xkAX9AF9RW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MjYxMjE3MDEwNDU3MjA5MA%3D%3D.2-ccb7-5&oh=00_AfCZPgoiCGxkwuActdVqTvLaDtwCNkJScGnFutroHNG0vg&oe=6578F059&_nc_sid=10d13b',
    encoding: null,
  });

  await ig.publish.photo({
    file: imageBuffer,
    caption: 'Vendo blusa color violeta de excelente calidad y a un muy buen precio!',
  });

  console.log('post done!');
};

createNewPost();

