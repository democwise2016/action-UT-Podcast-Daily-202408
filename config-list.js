const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: 'TODAY 看世界',
    feedID: 'today-everyday',
    homepageURL: 'https://www.youtube.com/channel/UCmMnzrvnsSnv-0u9M1Rxiqw',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min
    ],
    // options: {
    //   maxItems: 3
    // }
  },

  {
    title: '老鵝特搜',
    feedID: 'omgoosetw-news',
    thumbnailBorderColor: true,
    homepageURL: 'https://www.youtube.com/channel/UC_iwP8I13JnL54BypRCzldw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('｜老鵝特搜') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '攝徒日記Fun TV',
    feedID: 'funtv8964',
    homepageURL: 'https://www.youtube.com/channel/UCvTe3Z7TZsjGzUERx4Ce6zA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '公視中晝新聞',
    feedID: 'PNNPTS-noon-news',
    homepageURL: 'https://www.youtube.com/playlist?list=PLjjrV9IhkIpcIqZiUfkkxgKtoiD517Kdf',
    itemFilters: ItemFiltersPreset.between10minTo60Min,
    options: {
      maxItems: 1
    }
  },
  {
    title: 'SHIN LI信用卡優惠',
    feedID: 'SHINLI',
    homepageURL: 'https://www.youtube.com/channel/UCK-qc_POQZwWrMg-Pr-oYtg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    //maxItems: 2, // default 10
    options: {
      maxItems: 3
    }
  },
  {
    title: '志祺七七 X 圖文不符',
    feedID: 'shasha77',
    homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.endsWith('｜志祺七七')) }
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '玩家機密',
    feedID: 'GamerSecret',
    homepageURL: 'https://www.youtube.com/channel/UCmtmIF-u0ojej0y9i9STuIw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('【每週新聞】') === -1)) }
    ]
  },
  {
    title: '窮奢極欲',
    feedID: 'withmoney',
    homepageURL: 'https://www.youtube.com/channel/UCA0o60mhG0v2Eha8wSL3_Jw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '關我什麼事 財經政論',
    feedID: 'GUNaSHOW',
    homepageURL: 'https://www.youtube.com/channel/UCMpuxj_U02VaHfaPD5Jjx_Q',
    itemFilters: ItemFiltersPreset.between30minTo180Min,
    options: {
      maxItems: 1
    }
  },
  {
    title: '公子沈 評中國',
    feedID: 'gongzishen',
    homepageURL: 'https://www.youtube.com/channel/UCrGSFNEBmCN0rqhATZels2Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '萊斯 新Game報',
//     feedID: 'LiceMoo-GameNews',
//     homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
//     thumbnailBorderColor: true,
//     itemFilters: [
//       ItemFiltersPreset.between3minTo30Min,
//       // (item) => { return (item.title.indexOf('《新Game報') > -1) }
//     ],
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
