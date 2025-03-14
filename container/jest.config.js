module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'jsdom',
    roots: ['test'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,mjs,ts,svelte}', '!**/node_modules/**', '!**/vendor/**', '!**/*.spec.{js,ts}'],
    coverageReporters: ['clover', 'json', 'json-summary', 'lcov', 'text'],
    coverageDirectory: 'coverage'
  };
};
