const PORT = 7777;
const MONGO_URL = "mongodb://localhost:27017/";
const DB_NAME = "onlinejudge";
// const DB_URL = MONGO_URL + DB_NAME;
const DB_URL =
  "mongodb+srv://OnlineJudge:OnlineJudge@cluster0.iltfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = { PORT, DB_URL };
