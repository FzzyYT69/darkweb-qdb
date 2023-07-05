module.exports = {
  "statusType": "LISTENING", // WATCHING, PLAYING, LISTENING, STREAMING
  "bowner": ["672027578181353473"], // bot owner id here
  "logChannel": "1023161555296206878", // for logs
  "darkwebChannel": "1023189738615742545",  //  for the main channel where the main posts will be sent
  "darkwebRole": "1023193952855269496",  //  role id which will give the users access to use the dark web bot
  "serverid": "970325246009810944",  // discord server id
  "embedColour": "#000001", // embed line colour
  "TOKEN": "NzQ2MzY4MzQxNDA4NDgxMzMw.GQmEk7.PCg71tN-8Sc22kQ92tp6ch3h7kMzyJ8f3LqjAI" || process.env.TOKEN,// here goes the bot token which we can find in the discord dev portal.
  "prefix": "x", // perfix for the bot here to run all the commands
  "syndicate": "971333414290595860", // role id for creed posts
  "racers": "977310434975682570", // role id for racing posts
  "webid": "1124054434775846912" || process.env.webid, //  these are the wobhooks syndicate messages
  "webtoken": "cHfMTfoFylO79cZsVWpCwSl_wudm4Mv_ez6iXQQOtcsf4jtnhzRvaZPFVko7nFH0Nm0H" || process.env.webtoken, //  these are the wobhooks syndicate messages
  "errid": "1023185092920741980" || process.env.errid, // webhook id for errors
  "errtoken": "qmYHbS6M1DGM_TxuYchy6Bty-d4LGqzqkmKS3G3py2AsDBk-8kqujSqyXJbsmOLCk11f" || process.env.errtoken, // webhook token for errors
  "accountlog": "1023188376108666880", // for account creation logs
  "adminrole": "1023193952855269496", // for commands that are used by admins only
  "wdlog": "1023638420632899634", // for warn and delete logs of messages
  "dwpic": "https://cdn.discordapp.com/avatars/1022239365201657926/dc02f86914bdf7cbfae5765de93a51bf.webp?size=2048", // dark web icon
  "mid": { // for racing dark web 
    "id": "1124054434775846912", // webhook id
    "token": "cHfMTfoFylO79cZsVWpCwSl_wudm4Mv_ez6iXQQOtcsf4jtnhzRvaZPFVko7nFH0Nm0H" // webhook token
  },
  'cooldown': 60000 // set to 100 if you dont want users to get a cooldown
};