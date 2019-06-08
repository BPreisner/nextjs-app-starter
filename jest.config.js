const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
   setupFiles: ['<rootDir>/jest.setup.js', 'react-app-polyfill/jsdom'],
   testRegex: TEST_REGEX,
   transform: {
      '^.+\\.tsx?$': 'babel-jest',
   },
   testEnvironment: 'jest-environment-jsdom-fourteen',
   testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
   collectCoverage: true,
   cacheDirectory: '<rootDir>/.jest-cache',
   coveragePathIgnorePatterns: [
      '<rootDir>/dist/',
      '<rootDir>/node_modules/',
      '/*.svg',
   ],
};
