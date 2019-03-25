var exports = module.exports = {};
exports.API_KEY = ''; //your youtube API key goes here
exports.T_SERIES_CHANNELID = 'UCq-Fj5jknLsUf-MWSy4_brA';
exports.PEWDIEPIE_CHANNELID = 'UC-lHJZR3Gqxm24_Vd_AJ5Yw';
exports.URL = (channelId, key) => 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+channelId+'&fields=items/statistics/subscriberCount&key='+key;
