module.exports = function check(str, bracketsConfig) {
    let config = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        config[i] = bracketsConfig[i].join('');
      }
    
      for (let i = 0; i < config.length; i++) {
        while(str.includes(config[i])) {
            str = str.replace(config[i], "");
            i = 0;
        }
      }
      
      return str.length === 0 ? true : false;
    }
