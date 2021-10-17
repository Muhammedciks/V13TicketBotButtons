module.exports = {
  prefix: "!",
  status: {
    		name: "your tickets!",
    		type: "watching"
  },
  ExpressServer: true, //If you wanted to make the website run or not
  Port: 3000, //Which port website gonna be hosted
   emojis: {
        giveaway: "🎉",
        special: "🔴",
        general: "870914038933098517"
  },
  ticketembed: {
    title: "Tickets",
    description: "To create a ticket, click the button that suits your request!",
    footer: "By DNA#1466"
  },
token: process.env.TOKEN || "ODk0ODUxMTY2MDA4MTI3NDk5.YVwBFw.DfPq3Av34K29X7YDbWe0TWjryno",
mongo: process.env.MONGO || "mongodb+srv://Snzy:neji@webupt.vhkov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority "
};
