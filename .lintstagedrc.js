module.exports = {
  "packages/nextjs/**/*.{ts,tsx}": ["yarn web:format", "yarn web:lint"],
  "packages/contract/**/*.sol": ["yarn contract:format"],
};
