// ping.js
import fetch from 'node-fetch';

(async () => {
  try {
    const res = await fetch('https://birthday-ienx.onrender.com/api');
    const text = await res.text();
    console.log('Pinged API:', text);
  } catch (err) {
    console.error('Ping failed:', err);
  }
})();
