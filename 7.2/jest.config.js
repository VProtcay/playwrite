module.exports = {
    verbose: true, //указывает на то, что каждый тест будет показан в отчете о процессе запуска 
     preset: "jest-puppeteer", //указываем, что будем использовать эту библиотеку
     testTimeout: 60000
 }
 {
    "collectCoverageFrom": [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**"
    ]
 }
 {
    "coverageThreshold":
        "branches": 100,
        "functions": 100,
        "lines": 100
 };
