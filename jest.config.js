module.exports = {
  collectCoverage: true,
  coverageReporters: ["text", "html"],
  collectCoverageFrom: ["./src/**"],
  modulePaths: ["src"],
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
