var slack = require('slack');
var bot = slack.rtm.client();
var token = "your_slack_token";

bot.team_join(function(obj) {
  console.log("Team join triggered");
  slack.chat.postMessage(
      {
          token: token,
          channel: obj.user.id,
          text: "Hello and welcome to the BWS Community!"
      },
      function(err, data) {
          // Handle errors here
      })
  ;
});

bot.listen({token: token});
