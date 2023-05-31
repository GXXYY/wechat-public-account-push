/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8340eadb2cd0b141',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'aaf75cf9117b5f46cb4819cf896a6fd7',

  PROVINCE: '江西',
  CITY: '上饶',

  IS_SHOW_COLOR: false,
  USERS: [
    {
      // 想要发送的人的名字
      name: '小管',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO9Oe6V96_iEHMiRGGICLJdcp0q0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3RP785snLeBM6214R7XM9rdQZ973-XQFGYjSt5gDVLQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-03',
      horoscopeDateType: '今日',
      horoscope: true,
      birthdayMessage: true,
      holidaytts: true,
      earthyLoveWords: true,
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '瑶瑶', year: '2002', date: '09-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '瑶瑶', year: '2002', date: '10-13',
        },
        {
          type: '*节日', name: '相识纪念日', year: '2022', date: '02-17',
        },
      ],
      FESTIVALS_LIMIT: 0,
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-15' },
        // 相识纪念日
        { keyword: 'know_day', date: '2022-02-17' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '可爱瑶瑶',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO9Oe6fYa08bR4hXbcPlJxtL_0Ks',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3RP785snLeBM6214R7XM9rdQZ973-XQFGYjSt5gDVLQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-03',
      horoscopeDateType: '今日',
      horoscope: true,
      birthdayMessage: true,
      holidaytts: true,
      earthyLoveWords: true,
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '瑶瑶', year: '2002', date: '09-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '瑶瑶', year: '2002', date: '10-13',
        },
        {
          type: '*节日', name: '相识纪念日', year: '2022', date: '02-17',
        },
      ],
      FESTIVALS_LIMIT: 0,
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-15' },
        // 相识纪念日
        { keyword: 'know_day', date: '2022-02-17' },
      ],
    },
  ],
  
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '6Tz15_XncaEtz3sWlPGTd_x7qBLtD1ReZtFxF92HX-8',

  CALLBACK_USERS: [
    {
      name: '小管',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oO9Oe6V96_iEHMiRGGICLJdcp0q0',
    }
  ],

}

module.exports = USER_CONFIG

