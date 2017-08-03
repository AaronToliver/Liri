console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: 'PPayjRPDresRx9QFEXvTcX5fB',
  consumer_secret: 'sQBCOrRabgJdWB5F47yllgpIS6QtI7IoAj6UDxKr2E8FajJATu',
  access_token_key: '892138017426747392-PgxCHZhXYy4C3c0U4wPFq92oJE86dCZ',
  access_token_secret: 'rx0tJ3uA2aGMh0razfKoveKLTkbiKRzQYjhE83WoSEkf5',
}

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});