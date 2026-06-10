const fetch = require('node-fetch');
const COUPON_URL = 'https://aiflowchat.com/?via=amine';

(async () => {
  try {
    const res = await fetch(COUPON_URL, { method: 'HEAD', redirect: 'manual' });
    console.log(`Deal page status: ${res.status}`);
    const loc = res.headers.get('location');
    if (loc) console.log(`Redirect: ${loc}`);
  } catch (e) {
    console.log('Deal page check skipped (expected redirect).');
  }

  console.log('\n--- AIFlowChat API Simulation ---');
  console.log('Use cases: prompt chaining, multi-model workflows, SEO automation');
  if (process.env.AIFLOWCHAT_API_KEY) {
    console.log('API key detected. Ready for workflow execution.');
  } else {
    console.log('Set AIFLOWCHAT_API_KEY env var to enable live API calls.');
  }
})();
