Disclaimer
- This app was a fun project to build. A lot of the code is hacky and was generated by GenAI for fun while learning what AI tooling there is. The CSS is particularly bad.

# Using the app for reading

- Select a story from the dropdown
- Look at the translations on the right

# Using the app for creating new stories

## 1. Run the app
```
npm run start
```

## 2. Using Gen AI enabled services
a. Create a .env file in the root folder and add `REACT_APP_GEN_AI_API_KEY=<your api key>`
Replace `<your api key>` with a valid api key (e.g. open ai's). If using another service then you'll need to update the base url
b. If running locally, add this to your .env `REACT_APP_NODE_ENV=development`

## 3. Generating new stories
Follow the instructions from the Creator Studio (must have done the steps in #2 first)