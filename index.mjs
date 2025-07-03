import cron from 'node-cron';
import fetch from 'node-fetch';

console.log('Cron job is starting...' + new Date().toISOString());

// Define the cron job to run at 8:55 AM every day
cron.schedule('55 8 * * *', async () => {
  try {
    const res = await fetch('https://birthday-ienx.onrender.com/health');
    const data = await res.text();
    console.log(`[${new Date().toISOString()}] API ping successful:`, data);
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] API ping failed:`,
      error.message
    );
  }
});
