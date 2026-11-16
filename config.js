// Battlefield themes and weapon progression.
export const THEATRES={
 normandy:{name:'Normandy',date:'FRANCE · 1944',sub:'COUNTRYSIDE',ground:0x67735a,dirt:0x777061,road:0x68665e,building:0x918d80,roof:0x4e514c,foliage:0x526d43,sky:0x829aa1,fog:0x8a9da0,enemy:0x58614c,ally:0x637e6d,sun:0xe7d6b5},
 eastern:{name:'Eastern Front',date:'USSR · 1943',sub:'WINTER OFFENSIVE',ground:0xb2b3aa,dirt:0x8b8b85,road:0x82857d,building:0x777971,roof:0x484d4f,foliage:0x626e69,sky:0xb7c4c8,fog:0xc6cdd0,enemy:0x747665,ally:0x657a69,sun:0xffffff},
 africa:{name:'North Africa',date:'EGYPT · 1942',sub:'DESERT FRONT',ground:0xb59a69,dirt:0xa58862,road:0x9c815d,building:0xae976e,roof:0x806d57,foliage:0x7e8354,sky:0xc4b58c,fog:0xbca886,enemy:0x9c8a69,ally:0x9d9774,sun:0xffdb9b},
 pacific:{name:'Pacific',date:'ISLANDS · 1944',sub:'JUNGLE WARFARE',ground:0x547252,dirt:0x5e6e56,road:0x656a53,building:0x6d7666,roof:0x4a5044,foliage:0x35634b,sky:0x97b9b0,fog:0x789e8d,enemy:0x77754c,ally:0x638b72,sun:0xffe1b5},
 italy:{name:'Italian Front',date:'ITALY · 1944',sub:'HILL VILLAGE',ground:0x8d8a6a,dirt:0x89775f,road:0x73695a,building:0xb1a28c,roof:0x81554d,foliage:0x557249,sky:0x9daaa7,fog:0xb1b5a6,enemy:0x686a54,ally:0x77816a,sun:0xfbe0ad}
};
export const WEAPONS=[
 {id:'garand',name:'M1 Garand',nation:'United States',klass:'Rifle',cost:0,mag:8,stock:80,dmg:60,rpm:260,reload:1.7,spread:.008,auto:false},
 {id:'thompson',name:'Thompson M1A1',nation:'United States',klass:'SMG',cost:350,mag:30,stock:210,dmg:23,rpm:650,reload:2.1,spread:.027,auto:true},
 {id:'kar98',name:'Kar98k',nation:'Germany',klass:'Bolt-action',cost:450,mag:5,stock:65,dmg:94,rpm:68,reload:2.3,spread:.004,auto:false},
 {id:'sten',name:'Sten Mk II',nation:'Britain',klass:'SMG',cost:500,mag:32,stock:224,dmg:22,rpm:510,reload:2,spread:.03,auto:true},
 {id:'mosin',name:'Mosin-Nagant',nation:'Soviet Union',klass:'Bolt-action',cost:550,mag:5,stock:65,dmg:95,rpm:65,reload:2.4,spread:.004,auto:false},
 {id:'mp40',name:'MP 40',nation:'Germany',klass:'SMG',cost:650,mag:32,stock:224,dmg:28,rpm:490,reload:2,spread:.022,auto:true},
 {id:'arisaka',name:'Arisaka Type 99',nation:'Japan',klass:'Bolt-action',cost:700,mag:5,stock:65,dmg:97,rpm:70,reload:2.2,spread:.005,auto:false},
 {id:'carcano',name:'Carcano M91',nation:'Italy',klass:'Bolt-action',cost:750,mag:6,stock:72,dmg:87,rpm:75,reload:2.3,spread:.006,auto:false},
 {id:'bren',name:'Bren Mk I',nation:'Britain',klass:'LMG',cost:900,mag:30,stock:270,dmg:38,rpm:480,reload:3.2,spread:.022,auto:true},
 {id:'ppsh',name:'PPSh-41',nation:'Soviet Union',klass:'SMG',cost:1050,mag:71,stock:284,dmg:19,rpm:900,reload:2.7,spread:.038,auto:true},
 {id:'beretta',name:'Beretta M38',nation:'Italy',klass:'SMG',cost:1200,mag:40,stock:240,dmg:30,rpm:550,reload:2.3,spread:.02,auto:true},
 {id:'type100',name:'Type 100',nation:'Japan',klass:'SMG',cost:1250,mag:30,stock:210,dmg:25,rpm:450,reload:2.2,spread:.026,auto:true},
 {id:'bar',name:'Browning BAR',nation:'United States',klass:'Automatic rifle',cost:1500,mag:20,stock:180,dmg:42,rpm:520,reload:2.8,spread:.02,auto:true},
 {id:'stg44',name:'StG 44',nation:'Germany',klass:'Assault rifle',cost:1750,mag:30,stock:240,dmg:34,rpm:530,reload:2.3,spread:.018,auto:true},
 {id:'mg42',name:'MG 42',nation:'Germany',klass:'Machine gun',cost:2300,mag:75,stock:300,dmg:30,rpm:1100,reload:4.2,spread:.048,auto:true},
];
