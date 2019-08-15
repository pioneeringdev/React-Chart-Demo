# Simple Chart Application
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
![Project Demo](./demo.png?raw=true "Project Demo")
## Dependencies

### Chart
apexcharts, react-apexchart
### Alert
react-s-alert


## Server Setup
1. run socket server(follow the instruction in server project).
2. create .env file
3. add environment variable `REACT_APP_API_ENDPOINT` to .env for the socket server. (ie: REACT_APP_API_ENDPOINT=http://localhost:3000) Look at .env.example
4. yarn install
5. yarn start