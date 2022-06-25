module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://100.2.171.143:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'fol',   //七牛云bucket
    AccessKey: 'ZkCzeZXDNUuWTvkxaybj5t0ylI9U44c4qWSvVu17',   //七牛云accessKey
    SecretKey: '7YvsPWJ6abb-YPxr42Oh6QUSW3L9zjvoS1zypoCZ',    //七牛云secretKey
    tencentkey: 'RHIBZ-MUFKI-EJ6G6-5LVJD-P3M35-XVFAU',        //腾讯位置secreKey
    tencentkey2: 'RHIBZ-MUFKI-EJ6G6-5LVJD-P3M35-XVFAU',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


