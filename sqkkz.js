/*
安卓：中青看点看看赚
请勿外传，发现立马失效

不需要捉看看赚body，只需要用到zqkdCookie
目前只能在青龙上使用，需要依赖crypto-js，报错找不到依赖的自行安装
docker exec -it qinglong bash -c "npm install -g crypto-js"
本脚本没有设置重写，请自己复制zq_cookie到青龙环境下使用，多账号用@隔开
例子： export zqkdCookie='uid=xxx&zqkey=yyy&zqkey_id=zzz@uid=aaa&zqkey=bbb&zqkey_id=ccc@uid=qqq&zqkey=sss&zqkey_id=ttt'
*/

const _0x23d337=_0x1088;(function(_0x4f61f2,_0x576392){const _0x39b3b3=_0x1088,_0x2da7dc=_0x4f61f2();while(!![]){try{const _0xf071b3=parseInt(_0x39b3b3(0x15a))/0x1+-parseInt(_0x39b3b3(0x119))/0x2*(-parseInt(_0x39b3b3(0x18a))/0x3)+-parseInt(_0x39b3b3(0xda))/0x4+parseInt(_0x39b3b3(0x176))/0x5*(-parseInt(_0x39b3b3(0x110))/0x6)+-parseInt(_0x39b3b3(0x10b))/0x7+-parseInt(_0x39b3b3(0x19c))/0x8*(-parseInt(_0x39b3b3(0x135))/0x9)+parseInt(_0x39b3b3(0xd1))/0xa;if(_0xf071b3===_0x576392)break;else _0x2da7dc['push'](_0x2da7dc['shift']());}catch(_0x2fb90c){_0x2da7dc['push'](_0x2da7dc['shift']());}}}(_0x5e79,0xee4ce));function _0x1088(_0x44c23f,_0x3ff711){const _0x5e7948=_0x5e79();return _0x1088=function(_0x108836,_0x52a7f0){_0x108836=_0x108836-0xbb;let _0x1f778c=_0x5e7948[_0x108836];return _0x1f778c;},_0x1088(_0x44c23f,_0x3ff711);}const jsname=_0x23d337(0x171),$=Env(jsname),notifyFlag=0x1,logDebug=0x0;let notifyStr='',rndtime='',httpResult,CryptoJS=require(_0x23d337(0x125)),userCookie=($[_0x23d337(0x197)]()?process[_0x23d337(0xbd)][_0x23d337(0xfb)]:$[_0x23d337(0x189)](_0x23d337(0xfb)))||'',userCookieArr=[],bodyArr=[],userIdx=0x0,allCompFlag=0x0,restNum=0x0,codeName=_0x23d337(0x188),validCode=![],idStart=0xb54,idEnd=0x1388,idRunList=[],extraList=[0x49e,0x83f],validList=[],validStr='',rewardCount=[],preBody=_0x23d337(0x18c),bodyTemplate=_0x23d337(0x130),fakeSign=_0x23d337(0xc7),a=_0x23d337(0x137),b='jS',c=_0x23d337(0xe6),key=a+b+c;!(async()=>{const _0xefb89e=_0x23d337;if(typeof $request!==_0xefb89e(0xe7))$[_0xefb89e(0xdf)](jsname+_0xefb89e(0xd9));else{await isValidCode();if(validCode==![])return;if(!await checkEnv())return;await initAccountInfo(),await runLookStart(),await getBox(),await getStat();}})()[_0x23d337(0x145)](_0x2fb042=>$[_0x23d337(0x14f)](_0x2fb042))[_0x23d337(0x160)](()=>$[_0x23d337(0x141)]());async function showmsg(){const _0x53aeb8=_0x23d337;notifyBody=jsname+_0x53aeb8(0xeb)+notifyStr,notifyFlag!=0x1&&console['log'](notifyBody),notifyFlag==0x1&&$[_0x53aeb8(0xdf)](notifyBody);}async function checkEnv(){const _0x2ccbce=_0x23d337;if(userCookie){if(userCookie[_0x2ccbce(0xf9)]('@')>-0x1){let _0x24b98e=userCookie[_0x2ccbce(0xe5)]('@');for(let _0x58d850=0x0;_0x58d850<_0x24b98e[_0x2ccbce(0xde)];_0x58d850++){userCookieArr['push'](replaceCookie(_0x24b98e[_0x58d850]));}}else userCookieArr['push'](replaceCookie(userCookie));}else return console[_0x2ccbce(0x14c)](_0x2ccbce(0x12e)),![];if(userCookieArr[_0x2ccbce(0xde)]==0x0)return console[_0x2ccbce(0x14c)](_0x2ccbce(0xdb)),![];for(let _0x444575=0x0;_0x444575<extraList[_0x2ccbce(0xde)];_0x444575++){idRunList[_0x2ccbce(0x12f)](extraList[_0x444575]);}for(let _0x3ff5c3=idStart;_0x3ff5c3<idEnd;_0x3ff5c3++){idRunList[_0x2ccbce(0x12f)](_0x3ff5c3);}return console[_0x2ccbce(0x14c)](_0x2ccbce(0x16d)+userCookieArr[_0x2ccbce(0xde)]+_0x2ccbce(0xd8)+idRunList[_0x2ccbce(0xde)]+_0x2ccbce(0x184)),!![];}async function initAccountInfo(){const _0x18b1be=_0x23d337;for(userIdx=0x0;userIdx<userCookieArr[_0x18b1be(0xde)];userIdx++){rewardCount[_0x18b1be(0x12f)](0x0);}}function replaceCookie(_0x1ce009){const _0x9cf31a=_0x23d337;let _0x46d82f='',_0x4b0390='',_0x4a9de4='';if(_0x1ce009[_0x9cf31a(0xf9)](_0x9cf31a(0x12a))>-0x1)_0x4b0390=_0x1ce009[_0x9cf31a(0x181)](/zqkey=([\w-]+)/)[0x1];else _0x1ce009[_0x9cf31a(0xf9)](_0x9cf31a(0x16e))>-0x1&&(_0x4b0390=_0x1ce009[_0x9cf31a(0x181)](/cookie=([\w-]+)/)[0x1]);if(_0x1ce009['indexOf'](_0x9cf31a(0xce))>-0x1)_0x4a9de4=_0x1ce009[_0x9cf31a(0x181)](/zqkey_id=([\w-]+)/)[0x1];else _0x1ce009[_0x9cf31a(0xf9)](_0x9cf31a(0x10a))>-0x1&&(_0x4a9de4=_0x1ce009[_0x9cf31a(0x181)](/cookie_id=([\w-]+)/)[0x1]);return _0x1ce009[_0x9cf31a(0xf9)](_0x9cf31a(0x14e))>-0x1&&(uid=_0x1ce009[_0x9cf31a(0x181)](/uid=([\w-]+)/)[0x1]),_0x46d82f=_0x9cf31a(0x14e)+uid+_0x9cf31a(0x167)+_0x4b0390+_0x9cf31a(0x194)+_0x4a9de4,_0x46d82f;}async function isValidCode(){const _0x380f1f=_0x23d337;let _0x50c306=printCaller(),_0x42a08f={'url':_0x380f1f(0xf3),'headers':''};return new Promise(_0x3bab73=>{const _0x7331bb=_0x380f1f;$[_0x7331bb(0x19a)](_0x42a08f,async(_0x4c56c6,_0x3fdb36,_0x64fc36)=>{const _0x472ca7=_0x7331bb;try{if(_0x4c56c6)console[_0x472ca7(0x14c)](_0x50c306+_0x472ca7(0x131)),console['log'](JSON[_0x472ca7(0x17f)](_0x4c56c6)),$[_0x472ca7(0x14f)](_0x4c56c6);else try{let _0x12e531=JSON['parse'](_0x64fc36);if(logDebug)console[_0x472ca7(0x14c)](_0x12e531);_0x12e531[''+codeName]&&_0x12e531[''+codeName]==0x1?(validCode=!![],console[_0x472ca7(0x14c)](_0x12e531[_0x472ca7(0xdf)])):console[_0x472ca7(0x14c)](_0x12e531[_0x472ca7(0x104)]);}catch(_0x32e9ea){$[_0x472ca7(0x14f)](_0x32e9ea,_0x3fdb36);}finally{_0x3bab73();}}catch(_0x1953c0){$[_0x472ca7(0x14f)](_0x1953c0,_0x3fdb36);}finally{_0x3bab73();}});});}async function encodeUserBody(_0x20b351,_0x1f7602){const _0x2a2fda=_0x23d337;return replacedStr=bodyTemplate+(_0x2a2fda(0x11d)+_0x1f7602+'&')+userCookieArr[_0x20b351]+fakeSign,encodeBody=EncFunc(replacedStr),hexBody=CryptoJS[_0x2a2fda(0x16c)][_0x2a2fda(0xf5)][_0x2a2fda(0x108)](encodeBody),base64Body=CryptoJS['enc'][_0x2a2fda(0xc1)][_0x2a2fda(0x17f)](hexBody),replaceBody3=base64Body[_0x2a2fda(0x112)](/\+/g,'-'),replaceBody4=replaceBody3[_0x2a2fda(0x112)](/\//g,'_'),finalBody=encodeURIComponent(replaceBody4),finalBody=preBody+finalBody+randomString(0x1),finalBody;}async function runLookStart(){const _0x404b9b=_0x23d337;for(let _0x134a51=0x0;_0x134a51<idRunList[_0x404b9b(0xde)];_0x134a51++){let _0x34f1b8=idRunList[_0x134a51];if(_0x134a51%0x14==0x0)console[_0x404b9b(0x14c)](_0x404b9b(0x174));allCompFlag=0x1,restNum=0x0,bodyArr=[],compArr=[];for(userIdx=0x0;userIdx<userCookieArr[_0x404b9b(0xde)];userIdx++){let _0x2408c2=await encodeUserBody(userIdx,_0x34f1b8),_0x5b867c=await adlickstart(_0x2408c2,_0x34f1b8);if(userIdx==0x0&&_0x5b867c)validList[_0x404b9b(0x12f)](_0x34f1b8);if(userIdx==0x0&&!_0x5b867c)allCompFlag=0x1;bodyArr[_0x404b9b(0x12f)](_0x2408c2);}if(allCompFlag==0x1)continue;console[_0x404b9b(0x14c)](_0x404b9b(0x10e)+_0x34f1b8+_0x404b9b(0x166)+restNum+'次');for(let _0x5c1d7f=0x0;_0x5c1d7f<restNum;_0x5c1d7f++){for(userIdx=0x0;userIdx<userCookieArr[_0x404b9b(0xde)];userIdx++){if(compArr[userIdx]==0x1)await readLookStartArt(bodyArr[userIdx],_0x5c1d7f);}if(_0x5c1d7f==restNum-0x1)console[_0x404b9b(0x14c)](_0x404b9b(0x100));else{let _0x520d06=Math[_0x404b9b(0xff)](Math['random']()*0x7d0)+0x1770;console[_0x404b9b(0x14c)](_0x404b9b(0xed)+(_0x5c1d7f+0x1)+_0x404b9b(0xf4)+_0x520d06+'ms'),await $[_0x404b9b(0x163)](_0x520d06);}}for(userIdx=0x0;userIdx<userCookieArr[_0x404b9b(0xde)];userIdx++){if(compArr[userIdx]==0x1)await adlickend(bodyArr[userIdx]);}}}async function getStat(){const _0x391a2d=_0x23d337;console[_0x391a2d(0x14c)](_0x391a2d(0x101));for(userIdx=0x0;userIdx<userCookieArr[_0x391a2d(0xde)];userIdx++){console[_0x391a2d(0x14c)]('账号'+(userIdx+0x1)+_0x391a2d(0x161)+rewardCount[userIdx]+'金币');}console[_0x391a2d(0x14c)](_0x391a2d(0x101));for(let _0x2fcd43=0x0;_0x2fcd43<validList[_0x391a2d(0xde)];_0x2fcd43++){validStr+=validList[_0x2fcd43]+'\x20';}console['log']('查询到'+validList[_0x391a2d(0xde)]+_0x391a2d(0x11e)),console[_0x391a2d(0x14c)](validStr);}async function adlickstart(_0x974371,_0x30d694){const _0x16d5fe=_0x23d337;let _0x18d570=printCaller(),_0x8a153e=_0x16d5fe(0x134),_0x9a270f=populatePostUrl(_0x8a153e,_0x974371);await httpPost(_0x9a270f,_0x18d570);let _0xb912b=httpResult;if(!_0xb912b)return compArr[_0x16d5fe(0x12f)](0x0),![];if(_0xb912b[_0x16d5fe(0x10c)]==!![]){if(_0xb912b[_0x16d5fe(0x18d)][_0x16d5fe(0x143)]==0x0){allCompFlag=0x0,compArr[_0x16d5fe(0x12f)](0x1);let _0x480eec=_0xb912b[_0x16d5fe(0x18d)][_0x16d5fe(0x11a)]-_0xb912b[_0x16d5fe(0x18d)][_0x16d5fe(0xbe)];if(_0x480eec==0x0)_0x480eec=0x1;restNum=_0x480eec>restNum?_0x480eec:restNum,console[_0x16d5fe(0x14c)]('用户'+(userIdx+0x1)+_0x16d5fe(0xcb)+_0x30d694+_0x16d5fe(0x173)+_0x480eec+'次');}else compArr[_0x16d5fe(0x12f)](0x0),console[_0x16d5fe(0x14c)]('用户'+(userIdx+0x1)+_0x16d5fe(0xe4)+_0x30d694+']');}else{compArr[_0x16d5fe(0x12f)](0x0);if(_0xb912b[_0x16d5fe(0xdc)]==0x30d41)console[_0x16d5fe(0x14c)](_0x16d5fe(0xe8)+(userIdx+0x1)+_0x16d5fe(0x172));return![];}return!![];}function _0x5e79(){const _0x1171c3=['isSurge','kandian.wkandian.com','.$1','media-url','&sign=53e45deadd5cb9b037dbb7dab097405c','timeout','ckjar','mediaUrl','未完成看看赚[id:','object','==============📣系统通知📣==============','zqkey_id=','getMonth','Cookie','28976940CXsiDK','valueForKey','获取看看赚宝箱状态失败：','isArray','name','mode','post','个用户，本次运行将查询',':\x20此脚本不做重写，请检查重写设置','4342448ciLYSU','未找到有效的userCookie','error_code','logs','length','msg','startTime','got','concat','getHours','已完成看看赚[id:','split','ZFH','undefined','非法请求，请检查用户','http','Function\x20','运行通知\x0a\x0a','substr','--完成第','qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM','getMinutes','cron','exports','getDate','https://dd552552.coding.net/p/zq/d/zq/git/raw/master/code.json','轮阅读，随机等待','Hex','阅读看看赚文章失败：',':\x20get请求失败','call','indexOf',':\x20服务器访问数据为空，请检查自身设备网络情况','zqkdCookie','device_type=android&','readFileSync','cktough','floor','--完成最后一轮阅读','============================','assign','VOG-AL10','errorMsg','opts','method',',\x20开始!','parse','lodash_set','cookie_id=','5533143lZzVbz','success','keep-alive','所有用户开始一起做看看赚任务[id:','Pkcs7','54lRnOMB','resolve','replace','read','DES','dataFile','redirect','reduce','cwd','64ojYFEr','see_num','setjson','join','&task_id=','个有效看看赚任务','@chavy_boxjs_userCfgs.httpapi','toObj','trim','tough-cookie','slice','existsSync','crypto-js','Utf8','then','*/*','http://','zqkey=','body','application/x-www-form-urlencoded','writeFileSync','未找到userCookie','push','app_name=zqkd_app&app_version=3.5.5&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1031&device_brand=OPPO&device_id=56805603&device_model=OPPO+R9tm&device_platform=android&device_type=android&dpi=480&inner_version=202108181534&language=zh-CN&memory=3&mi=0&mobile_type=1&net_type=1&network_type=WIFI&openudid=8cd3b52d8fd6dd9b&os_api=22&os_version=R9tm_11_A.53_191217&request_time=1637250670&resolution=1080x1920&rom_version=R9tm_11_A.53_191217&s_ad=O2JgR8oZr6IU%3DC_rQb0PVGILJXAXRqCK-8mMH6bi0gkt_&s_im=BYFg4QJ5A6eY%3DNy7jQqHtxpkJHJ7qLLev8g%3D%3D&sm_device_id=202111182157042fe759e829fd55d80ca5b5be0858ba1001d4f22d5ae158d7&storage=54.84&',':\x20post请求失败','null','random','https://kandian.wkandian.com/v5/nameless/adlickstart.json','207kWvUng','isMute','6HP','runScript',':\x20未知错误','完成看看赚任务失败：','box.dat','https://kandian.wkandian.com/v5/nameless/adlickend.json','isQuanX','string','POST','@chavy_boxjs_userCfgs.httpapi_timeout','done','/v1/scripting/evaluate','comtele_state','Referer','catch','send','map','test','CBC','https://kandian.wkandian.com/v5/nameless/bannerstatus.json','GET','log','Content-Length','uid=','logErr','pad','fetch','--用户','path','完成看看赚[id:','http://kandian.wkandian.com/h5/20190527watchMoney/?','time',',\x20错误!','writedata',']任务，获得','233276TEBAyO','statusCode','data','status',',\x20结束!\x20🕛\x20','getjson','finally','本轮共获得了','领取看看赚宝箱失败：','wait','initGotEnv','getTime',']，阅读','&version_code=63&zqkey=','setdata','decrypt','getval','banner_id','enc','共找到','cookie=','getFullYear','========================================================','中青看点看看赚','的ck',']，还需阅读','正在查询任务，请耐心等待...','abs','1039985GgoAyO','isLoon','http://kandian.wkandian.com/WebApi/Nameless/getBoxRewardConf?','score','getScript','list','encrypt','打开第','cookieJar','stringify','getSeconds','match','charAt','toString','个看看赚任务ID','loaddata','toStr','getMilliseconds','zqkd_kkz_pro_jz','getdata','117561Sbiztj','setval','p=ecTMBiVxDAfc%3D','items','http://kandian.wkandian.com/WebApi/Nameless/getBoxReward?id=','ciphertext','logSeparator','exec','isNeedRewrite','Content-Type','&zqkey_id=','个看看赚宝箱获得：','lodash_get','isNode','CookieJar','setCookieSync','get','url','117968LmBAxF','open-url','android','stack','message','env','read_num','openUrl','set-cookie','Base64','headers'];_0x5e79=function(){return _0x1171c3;};return _0x5e79();}async function readLookStartArt(_0x1e5ac4){const _0x321fe1=_0x23d337;let _0x1f5814=printCaller(),_0x4b1eed=_0x321fe1(0x14a),_0x1bb5e3=populatePostUrl(_0x4b1eed,_0x1e5ac4);await httpPost(_0x1bb5e3,_0x1f5814);let _0x469b54=httpResult;if(!_0x469b54)return;_0x469b54[_0x321fe1(0x10c)]!=!![]&&console[_0x321fe1(0x14c)](_0x321fe1(0x152)+(userIdx+0x1)+_0x321fe1(0xf6)+_0x469b54[_0x321fe1(0xbc)]);}async function adlickend(_0x3a1f34){const _0x9f3b30=_0x23d337;let _0x54c7c0=printCaller(),_0x3cdf4b=_0x9f3b30(0x13c),_0x5a52cd=populatePostUrl(_0x3cdf4b,_0x3a1f34);await httpPost(_0x5a52cd,_0x54c7c0);let _0x10327c=httpResult;if(!_0x10327c)return;_0x10327c[_0x9f3b30(0x10c)]==!![]?(console[_0x9f3b30(0x14c)]('用户'+(userIdx+0x1)+_0x9f3b30(0x154)+_0x10327c[_0x9f3b30(0x18d)][_0x9f3b30(0x16b)]+_0x9f3b30(0x159)+_0x10327c[_0x9f3b30(0x18d)][_0x9f3b30(0x179)]+'金币'),rewardCount[userIdx]+=parseInt(_0x10327c[_0x9f3b30(0x18d)][_0x9f3b30(0x179)])):console[_0x9f3b30(0x14c)]('用户'+(userIdx+0x1)+_0x9f3b30(0x13a)+_0x10327c[_0x9f3b30(0xbc)]);}async function getBox(){const _0x19e743=_0x23d337;console[_0x19e743(0x14c)](_0x19e743(0x170));for(userIdx=0x0;userIdx<userCookieArr['length'];userIdx++){console[_0x19e743(0x14c)]('账号'+(userIdx+0x1)+'查询看看赚宝箱状态中...'),await getBoxRewardConf();}}async function getBoxRewardConf(){const _0x54cc87=_0x23d337;let _0x5f323f=printCaller(),_0x864169=_0x54cc87(0xfc)+userCookieArr[userIdx],_0x4bef65=_0x54cc87(0x178)+_0x864169,_0x1914b0=populateGetUrl(_0x4bef65);_0x1914b0[_0x54cc87(0xc2)][_0x54cc87(0x144)]=_0x54cc87(0x155)+_0x864169,await httpGet(_0x1914b0,_0x5f323f);let _0x22f896=httpResult;if(!_0x22f896)return;if(_0x22f896[_0x54cc87(0x15d)]==0x1){if(_0x22f896[_0x54cc87(0x15c)]&&_0x22f896[_0x54cc87(0x15c)][_0x54cc87(0x17b)]&&Array[_0x54cc87(0xd4)](_0x22f896[_0x54cc87(0x15c)]['list']))for(let _0x254760=0x0;_0x254760<_0x22f896[_0x54cc87(0x15c)][_0x54cc87(0x17b)]['length'];_0x254760++){let _0x272f32=_0x22f896['data'][_0x54cc87(0x17b)][_0x254760];_0x272f32[_0x54cc87(0x15d)]==0x1&&(await $['wait'](Math[_0x54cc87(0xff)](Math[_0x54cc87(0x133)]()*0x7d0)+0x7d00),await getBoxReward(_0x272f32['id']));}}else console[_0x54cc87(0x14c)](_0x54cc87(0xd3)+_0x22f896[_0x54cc87(0xbc)]);}async function getBoxReward(_0x4695e7){const _0x491119=_0x23d337;let _0x17bf57=printCaller(),_0x2c162f=_0x491119(0xfc)+userCookieArr[userIdx],_0x37f843=_0x491119(0x18e)+_0x4695e7+'&'+_0x2c162f,_0x544e0c=populateGetUrl(_0x37f843);_0x544e0c[_0x491119(0xc2)][_0x491119(0x144)]=_0x491119(0x155)+_0x2c162f,await httpGet(_0x544e0c,_0x17bf57);let _0x450cd1=httpResult;if(!_0x450cd1)return;_0x450cd1[_0x491119(0x15d)]==0x1?(console[_0x491119(0x14c)](_0x491119(0x17d)+(_0x4695e7+0x1)+_0x491119(0x195)+_0x450cd1[_0x491119(0x15c)]+'金币'),rewardCount[userIdx]+=parseInt(_0x450cd1[_0x491119(0x15c)])):console[_0x491119(0x14c)](_0x491119(0x162)+_0x450cd1[_0x491119(0xbc)]);}function populatePostUrl(_0x4bb8b2,_0x1f77a0){const _0x57ae3e=_0x23d337;let _0x216cd1=Math[_0x57ae3e(0xff)](new Date()[_0x57ae3e(0x165)]()/0x3e8),_0x567f1f={'url':_0x4bb8b2,'headers':{'request_time':_0x216cd1,'Host':_0x57ae3e(0xc4),'device-model':_0x57ae3e(0x103),'device-platform':_0x57ae3e(0x19e),'Connection':_0x57ae3e(0x10d)},'body':_0x1f77a0};return _0x567f1f;}function populateGetUrl(_0x5e01b7){const _0x2f947d=_0x23d337;let _0x3c9c70=Math[_0x2f947d(0xff)](new Date()[_0x2f947d(0x165)]()/0x3e8),_0x48ab38={'url':_0x5e01b7,'headers':{'request_time':_0x3c9c70,'Host':_0x2f947d(0xc4),'device-model':_0x2f947d(0x103),'device-platform':_0x2f947d(0x19e),'Connection':_0x2f947d(0x10d)}};return _0x48ab38;}async function httpPost(_0x42d482,_0x18d377){return httpResult=null,new Promise(_0x2d9ffd=>{const _0x2aaff3=_0x1088;$[_0x2aaff3(0xd7)](_0x42d482,async(_0x518faf,_0x4fc5cd,_0x1e9774)=>{const _0x392752=_0x2aaff3;try{if(_0x518faf)console[_0x392752(0x14c)](_0x18d377+_0x392752(0x131)),console[_0x392752(0x14c)](JSON[_0x392752(0x17f)](_0x518faf)),$[_0x392752(0x14f)](_0x518faf);else{if(safeGet(_0x1e9774)){httpResult=JSON[_0x392752(0x108)](_0x1e9774);if(logDebug)console[_0x392752(0x14c)](httpResult);}}}catch(_0x46eee4){$[_0x392752(0x14f)](_0x46eee4,_0x4fc5cd);}finally{_0x2d9ffd();}});});}async function httpGet(_0x2484c,_0x211ac8){return httpResult=null,new Promise(_0x2878d5=>{const _0x584ddf=_0x1088;$[_0x584ddf(0x19a)](_0x2484c,async(_0x447b67,_0x47e115,_0x585471)=>{const _0x36196d=_0x584ddf;try{if(_0x447b67)console[_0x36196d(0x14c)](_0x211ac8+_0x36196d(0xf7)),console[_0x36196d(0x14c)](JSON[_0x36196d(0x17f)](_0x447b67)),$[_0x36196d(0x14f)](_0x447b67);else{if(safeGet(_0x585471,_0x211ac8)){httpResult=JSON[_0x36196d(0x108)](_0x585471);if(logDebug)console[_0x36196d(0x14c)](httpResult);}}}catch(_0x469fd2){$[_0x36196d(0x14f)](_0x469fd2,_0x47e115);}finally{_0x2878d5();}});});}function safeGet(_0x2d565b,_0x5c7fe4){const _0x164211=_0x23d337;try{if(typeof JSON[_0x164211(0x108)](_0x2d565b)==_0x164211(0xcc))return!![];else console[_0x164211(0x14c)](_0x164211(0xea)+_0x5c7fe4+_0x164211(0x139)),console[_0x164211(0x14c)](_0x2d565b);}catch(_0x51adf2){return console[_0x164211(0x14c)](_0x51adf2),console[_0x164211(0x14c)](_0x164211(0xea)+_0x5c7fe4+_0x164211(0xfa)),![];}}function printCaller(){const _0x3a5d90=_0x23d337;return new Error()['stack'][_0x3a5d90(0xe5)]('\x0a')[0x2][_0x3a5d90(0x121)]()['split']('\x20')[0x1];}function EncFunc(_0x1202e3){const _0x4e1ae7=_0x23d337;var _0x47fb0d=CryptoJS[_0x4e1ae7(0x16c)][_0x4e1ae7(0x126)][_0x4e1ae7(0x108)](key),_0x498f5b=CryptoJS[_0x4e1ae7(0x16c)][_0x4e1ae7(0x126)][_0x4e1ae7(0x108)](key),_0x678079=CryptoJS[_0x4e1ae7(0x16c)][_0x4e1ae7(0x126)][_0x4e1ae7(0x108)](_0x1202e3);return encrypted=CryptoJS[_0x4e1ae7(0x114)][_0x4e1ae7(0x17c)](_0x678079,_0x47fb0d,{'iv':_0x498f5b,'mode':CryptoJS[_0x4e1ae7(0xd6)][_0x4e1ae7(0x149)],'padding':CryptoJS[_0x4e1ae7(0x150)][_0x4e1ae7(0x10f)]}),encrypted[_0x4e1ae7(0x18f)][_0x4e1ae7(0x183)]();}function DecFunc(_0x223504){const _0x115017=_0x23d337;var _0x31f63d=CryptoJS[_0x115017(0x16c)][_0x115017(0x126)][_0x115017(0x108)](key),_0x5a040b=CryptoJS[_0x115017(0x16c)][_0x115017(0x126)][_0x115017(0x108)](key),_0x1c94c6=CryptoJS[_0x115017(0x114)][_0x115017(0x169)]({'ciphertext':CryptoJS[_0x115017(0x16c)][_0x115017(0xc1)][_0x115017(0x108)](_0x223504)},_0x31f63d,{'iv':_0x5a040b,'mode':CryptoJS[_0x115017(0xd6)][_0x115017(0x149)],'padding':CryptoJS[_0x115017(0x150)][_0x115017(0x10f)]});return _0x1c94c6[_0x115017(0x183)](CryptoJS[_0x115017(0x16c)][_0x115017(0x126)]);}function randomString(_0x18d176=0xc){const _0x3f5953=_0x23d337;let _0x32dc8e=_0x3f5953(0xee),_0x2a3298=_0x32dc8e[_0x3f5953(0xde)],_0x244f1a='';for(i=0x0;i<_0x18d176;i++){_0x244f1a+=_0x32dc8e[_0x3f5953(0x182)](Math[_0x3f5953(0xff)](Math[_0x3f5953(0x133)]()*_0x2a3298));}return _0x244f1a;}function Env(_0x46ced6,_0x430e8a){const _0x3ca231=_0x23d337;class _0x301b7b{constructor(_0x4657fe){const _0x4af494=_0x1088;this[_0x4af494(0xbd)]=_0x4657fe;}['send'](_0x41cc8f,_0x51815f=_0x3ca231(0x14b)){const _0x48f8e9=_0x3ca231;_0x41cc8f=_0x48f8e9(0x13e)==typeof _0x41cc8f?{'url':_0x41cc8f}:_0x41cc8f;let _0x4cf870=this[_0x48f8e9(0x19a)];return _0x48f8e9(0x13f)===_0x51815f&&(_0x4cf870=this[_0x48f8e9(0xd7)]),new Promise((_0x39e840,_0x4050d2)=>{const _0x2da4b7=_0x48f8e9;_0x4cf870[_0x2da4b7(0xf8)](this,_0x41cc8f,(_0x29f4ec,_0x20ac96,_0x58fa8f)=>{_0x29f4ec?_0x4050d2(_0x29f4ec):_0x39e840(_0x20ac96);});});}[_0x3ca231(0x19a)](_0x46875c){const _0x49bfd9=_0x3ca231;return this[_0x49bfd9(0x146)][_0x49bfd9(0xf8)](this[_0x49bfd9(0xbd)],_0x46875c);}[_0x3ca231(0xd7)](_0x231e9f){const _0x3bbcc3=_0x3ca231;return this[_0x3bbcc3(0x146)][_0x3bbcc3(0xf8)](this[_0x3bbcc3(0xbd)],_0x231e9f,_0x3bbcc3(0x13f));}}return new class{constructor(_0x243e76,_0x39fbf5){const _0x2932ab=_0x3ca231;this[_0x2932ab(0xd5)]=_0x243e76,this[_0x2932ab(0xe9)]=new _0x301b7b(this),this[_0x2932ab(0x15c)]=null,this[_0x2932ab(0x115)]=_0x2932ab(0x13b),this[_0x2932ab(0xdd)]=[],this[_0x2932ab(0x136)]=!0x1,this[_0x2932ab(0x192)]=!0x1,this[_0x2932ab(0x190)]='\x0a',this[_0x2932ab(0xe0)]=new Date()[_0x2932ab(0x165)](),Object[_0x2932ab(0x102)](this,_0x39fbf5),this[_0x2932ab(0x14c)]('','🔔'+this[_0x2932ab(0xd5)]+_0x2932ab(0x107));}[_0x3ca231(0x197)](){const _0x554519=_0x3ca231;return _0x554519(0xe7)!=typeof module&&!!module[_0x554519(0xf1)];}[_0x3ca231(0x13d)](){const _0x11e541=_0x3ca231;return _0x11e541(0xe7)!=typeof $task;}[_0x3ca231(0xc3)](){const _0x43d69a=_0x3ca231;return _0x43d69a(0xe7)!=typeof $httpClient&&_0x43d69a(0xe7)==typeof $loon;}[_0x3ca231(0x177)](){const _0x2ddcc7=_0x3ca231;return _0x2ddcc7(0xe7)!=typeof $loon;}[_0x3ca231(0x120)](_0x256e56,_0x4043fb=null){const _0x5e1f36=_0x3ca231;try{return JSON[_0x5e1f36(0x108)](_0x256e56);}catch{return _0x4043fb;}}[_0x3ca231(0x186)](_0x4b37ca,_0x4a6cd4=null){const _0x323e9a=_0x3ca231;try{return JSON[_0x323e9a(0x17f)](_0x4b37ca);}catch{return _0x4a6cd4;}}[_0x3ca231(0x15f)](_0x3a8d99,_0x5c08a1){const _0x503458=_0x3ca231;let _0x183426=_0x5c08a1;const _0x12bd42=this[_0x503458(0x189)](_0x3a8d99);if(_0x12bd42)try{_0x183426=JSON[_0x503458(0x108)](this[_0x503458(0x189)](_0x3a8d99));}catch{}return _0x183426;}[_0x3ca231(0x11b)](_0x4ce505,_0x1e8b04){const _0x413afd=_0x3ca231;try{return this[_0x413afd(0x168)](JSON[_0x413afd(0x17f)](_0x4ce505),_0x1e8b04);}catch{return!0x1;}}[_0x3ca231(0x17a)](_0x822726){return new Promise(_0x546783=>{const _0x5f47de=_0x1088;this[_0x5f47de(0x19a)]({'url':_0x822726},(_0x1a446d,_0x11ad64,_0x5c0930)=>_0x546783(_0x5c0930));});}[_0x3ca231(0x138)](_0x3fa3e6,_0x38a94f){const _0x1c8ef5=_0x3ca231;return new Promise(_0x6f48be=>{const _0x383042=_0x1088;let _0x51525a=this[_0x383042(0x189)](_0x383042(0x11f));_0x51525a=_0x51525a?_0x51525a[_0x383042(0x112)](/\n/g,'')[_0x383042(0x121)]():_0x51525a;let _0xabc8f6=this[_0x383042(0x189)](_0x383042(0x140));_0xabc8f6=_0xabc8f6?0x1*_0xabc8f6:0x14,_0xabc8f6=_0x38a94f&&_0x38a94f[_0x383042(0xc8)]?_0x38a94f[_0x383042(0xc8)]:_0xabc8f6;const [_0x4c0d37,_0x5b4ecb]=_0x51525a[_0x383042(0xe5)]('@'),_0x4b1e3e={'url':_0x383042(0x129)+_0x5b4ecb+_0x383042(0x142),'body':{'script_text':_0x3fa3e6,'mock_type':_0x383042(0xf0),'timeout':_0xabc8f6},'headers':{'X-Key':_0x4c0d37,'Accept':_0x383042(0x128)}};this[_0x383042(0xd7)](_0x4b1e3e,(_0x54a72a,_0x23c280,_0x17bdbe)=>_0x6f48be(_0x17bdbe));})[_0x1c8ef5(0x145)](_0x17fde4=>this[_0x1c8ef5(0x14f)](_0x17fde4));}[_0x3ca231(0x185)](){const _0x185546=_0x3ca231;if(!this[_0x185546(0x197)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x185546(0x153)]=this[_0x185546(0x153)]?this[_0x185546(0x153)]:require(_0x185546(0x153));const _0x3136bb=this[_0x185546(0x153)]['resolve'](this[_0x185546(0x115)]),_0x20b4c0=this[_0x185546(0x153)][_0x185546(0x111)](process[_0x185546(0x118)](),this[_0x185546(0x115)]),_0x2fc8ca=this['fs'][_0x185546(0x124)](_0x3136bb),_0x1420d=!_0x2fc8ca&&this['fs'][_0x185546(0x124)](_0x20b4c0);if(!_0x2fc8ca&&!_0x1420d)return{};{const _0x2885cb=_0x2fc8ca?_0x3136bb:_0x20b4c0;try{return JSON[_0x185546(0x108)](this['fs'][_0x185546(0xfd)](_0x2885cb));}catch(_0x41593e){return{};}}}}[_0x3ca231(0x158)](){const _0x4c63e8=_0x3ca231;if(this[_0x4c63e8(0x197)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x4c63e8(0x153)]=this[_0x4c63e8(0x153)]?this[_0x4c63e8(0x153)]:require(_0x4c63e8(0x153));const _0x230915=this[_0x4c63e8(0x153)][_0x4c63e8(0x111)](this[_0x4c63e8(0x115)]),_0xfa2b6b=this[_0x4c63e8(0x153)][_0x4c63e8(0x111)](process[_0x4c63e8(0x118)](),this['dataFile']),_0x512c42=this['fs'][_0x4c63e8(0x124)](_0x230915),_0x66dd8e=!_0x512c42&&this['fs'][_0x4c63e8(0x124)](_0xfa2b6b),_0x5c33ef=JSON[_0x4c63e8(0x17f)](this[_0x4c63e8(0x15c)]);_0x512c42?this['fs'][_0x4c63e8(0x12d)](_0x230915,_0x5c33ef):_0x66dd8e?this['fs'][_0x4c63e8(0x12d)](_0xfa2b6b,_0x5c33ef):this['fs']['writeFileSync'](_0x230915,_0x5c33ef);}}[_0x3ca231(0x196)](_0x57ee5a,_0x3440ca,_0xbb0893){const _0x5158f8=_0x3ca231,_0x27f77b=_0x3440ca[_0x5158f8(0x112)](/\[(\d+)\]/g,_0x5158f8(0xc5))[_0x5158f8(0xe5)]('.');let _0x2e74f4=_0x57ee5a;for(const _0xf72ab of _0x27f77b)if(_0x2e74f4=Object(_0x2e74f4)[_0xf72ab],void 0x0===_0x2e74f4)return _0xbb0893;return _0x2e74f4;}[_0x3ca231(0x109)](_0x51018b,_0x3de25b,_0x38f7c1){const _0x287364=_0x3ca231;return Object(_0x51018b)!==_0x51018b?_0x51018b:(Array[_0x287364(0xd4)](_0x3de25b)||(_0x3de25b=_0x3de25b[_0x287364(0x183)]()[_0x287364(0x181)](/[^.[\]]+/g)||[]),_0x3de25b[_0x287364(0x123)](0x0,-0x1)[_0x287364(0x117)]((_0x3d2650,_0x4c7619,_0x9dd8c3)=>Object(_0x3d2650[_0x4c7619])===_0x3d2650[_0x4c7619]?_0x3d2650[_0x4c7619]:_0x3d2650[_0x4c7619]=Math[_0x287364(0x175)](_0x3de25b[_0x9dd8c3+0x1])>>0x0==+_0x3de25b[_0x9dd8c3+0x1]?[]:{},_0x51018b)[_0x3de25b[_0x3de25b[_0x287364(0xde)]-0x1]]=_0x38f7c1,_0x51018b);}['getdata'](_0x4778f8){const _0x5c5d96=_0x3ca231;let _0x32823d=this[_0x5c5d96(0x16a)](_0x4778f8);if(/^@/[_0x5c5d96(0x148)](_0x4778f8)){const [,_0x436143,_0x2680da]=/^@(.*?)\.(.*?)$/[_0x5c5d96(0x191)](_0x4778f8),_0x24b8c8=_0x436143?this[_0x5c5d96(0x16a)](_0x436143):'';if(_0x24b8c8)try{const _0x1684cf=JSON[_0x5c5d96(0x108)](_0x24b8c8);_0x32823d=_0x1684cf?this[_0x5c5d96(0x196)](_0x1684cf,_0x2680da,''):_0x32823d;}catch(_0x592612){_0x32823d='';}}return _0x32823d;}[_0x3ca231(0x168)](_0x52f8af,_0x3fa5e9){const _0xa38dff=_0x3ca231;let _0x3605fe=!0x1;if(/^@/[_0xa38dff(0x148)](_0x3fa5e9)){const [,_0x29c6e9,_0x1ab6e1]=/^@(.*?)\.(.*?)$/[_0xa38dff(0x191)](_0x3fa5e9),_0x29b5c8=this[_0xa38dff(0x16a)](_0x29c6e9),_0x3231c2=_0x29c6e9?_0xa38dff(0x132)===_0x29b5c8?null:_0x29b5c8||'{}':'{}';try{const _0x34e023=JSON[_0xa38dff(0x108)](_0x3231c2);this[_0xa38dff(0x109)](_0x34e023,_0x1ab6e1,_0x52f8af),_0x3605fe=this['setval'](JSON['stringify'](_0x34e023),_0x29c6e9);}catch(_0x4d2578){const _0x27f228={};this[_0xa38dff(0x109)](_0x27f228,_0x1ab6e1,_0x52f8af),_0x3605fe=this[_0xa38dff(0x18b)](JSON[_0xa38dff(0x17f)](_0x27f228),_0x29c6e9);}}else _0x3605fe=this[_0xa38dff(0x18b)](_0x52f8af,_0x3fa5e9);return _0x3605fe;}[_0x3ca231(0x16a)](_0x12bb4a){const _0x4b0537=_0x3ca231;return this[_0x4b0537(0xc3)]()||this[_0x4b0537(0x177)]()?$persistentStore[_0x4b0537(0x113)](_0x12bb4a):this[_0x4b0537(0x13d)]()?$prefs[_0x4b0537(0xd2)](_0x12bb4a):this[_0x4b0537(0x197)]()?(this[_0x4b0537(0x15c)]=this[_0x4b0537(0x185)](),this[_0x4b0537(0x15c)][_0x12bb4a]):this[_0x4b0537(0x15c)]&&this[_0x4b0537(0x15c)][_0x12bb4a]||null;}[_0x3ca231(0x18b)](_0x124e56,_0xe36b2f){const _0x2c73bb=_0x3ca231;return this[_0x2c73bb(0xc3)]()||this[_0x2c73bb(0x177)]()?$persistentStore['write'](_0x124e56,_0xe36b2f):this[_0x2c73bb(0x13d)]()?$prefs['setValueForKey'](_0x124e56,_0xe36b2f):this[_0x2c73bb(0x197)]()?(this[_0x2c73bb(0x15c)]=this[_0x2c73bb(0x185)](),this[_0x2c73bb(0x15c)][_0xe36b2f]=_0x124e56,this[_0x2c73bb(0x158)](),!0x0):this['data']&&this[_0x2c73bb(0x15c)][_0xe36b2f]||null;}[_0x3ca231(0x164)](_0x250967){const _0x1f5c33=_0x3ca231;this['got']=this[_0x1f5c33(0xe1)]?this[_0x1f5c33(0xe1)]:require('got'),this[_0x1f5c33(0xfe)]=this['cktough']?this[_0x1f5c33(0xfe)]:require(_0x1f5c33(0x122)),this[_0x1f5c33(0xc9)]=this[_0x1f5c33(0xc9)]?this[_0x1f5c33(0xc9)]:new this[(_0x1f5c33(0xfe))][(_0x1f5c33(0x198))](),_0x250967&&(_0x250967[_0x1f5c33(0xc2)]=_0x250967[_0x1f5c33(0xc2)]?_0x250967[_0x1f5c33(0xc2)]:{},void 0x0===_0x250967[_0x1f5c33(0xc2)][_0x1f5c33(0xd0)]&&void 0x0===_0x250967[_0x1f5c33(0x17e)]&&(_0x250967[_0x1f5c33(0x17e)]=this[_0x1f5c33(0xc9)]));}[_0x3ca231(0x19a)](_0x419853,_0x38d842=()=>{}){const _0x388c8b=_0x3ca231;_0x419853[_0x388c8b(0xc2)]&&(delete _0x419853[_0x388c8b(0xc2)][_0x388c8b(0x193)],delete _0x419853[_0x388c8b(0xc2)][_0x388c8b(0x14d)]),this[_0x388c8b(0xc3)]()||this[_0x388c8b(0x177)]()?(this[_0x388c8b(0xc3)]()&&this[_0x388c8b(0x192)]&&(_0x419853[_0x388c8b(0xc2)]=_0x419853[_0x388c8b(0xc2)]||{},Object[_0x388c8b(0x102)](_0x419853[_0x388c8b(0xc2)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x388c8b(0x19a)](_0x419853,(_0x53adf7,_0x4e200b,_0x3b2b07)=>{const _0x93f2f3=_0x388c8b;!_0x53adf7&&_0x4e200b&&(_0x4e200b[_0x93f2f3(0x12b)]=_0x3b2b07,_0x4e200b[_0x93f2f3(0x15b)]=_0x4e200b[_0x93f2f3(0x15d)]),_0x38d842(_0x53adf7,_0x4e200b,_0x3b2b07);})):this[_0x388c8b(0x13d)]()?(this[_0x388c8b(0x192)]&&(_0x419853[_0x388c8b(0x105)]=_0x419853[_0x388c8b(0x105)]||{},Object[_0x388c8b(0x102)](_0x419853[_0x388c8b(0x105)],{'hints':!0x1})),$task[_0x388c8b(0x151)](_0x419853)[_0x388c8b(0x127)](_0x32b0d7=>{const {statusCode:_0x31bbb1,statusCode:_0x3f9a8d,headers:_0x5b0a47,body:_0x3488dc}=_0x32b0d7;_0x38d842(null,{'status':_0x31bbb1,'statusCode':_0x3f9a8d,'headers':_0x5b0a47,'body':_0x3488dc},_0x3488dc);},_0x2e3667=>_0x38d842(_0x2e3667))):this[_0x388c8b(0x197)]()&&(this[_0x388c8b(0x164)](_0x419853),this[_0x388c8b(0xe1)](_0x419853)['on'](_0x388c8b(0x116),(_0x3f1788,_0x12ede4)=>{const _0x16ec81=_0x388c8b;try{if(_0x3f1788['headers'][_0x16ec81(0xc0)]){const _0xa3dcca=_0x3f1788[_0x16ec81(0xc2)][_0x16ec81(0xc0)][_0x16ec81(0x147)](this[_0x16ec81(0xfe)][_0x16ec81(0xd0)][_0x16ec81(0x108)])[_0x16ec81(0x183)]();this[_0x16ec81(0xc9)][_0x16ec81(0x199)](_0xa3dcca,null),_0x12ede4[_0x16ec81(0x17e)]=this[_0x16ec81(0xc9)];}}catch(_0x4c215f){this[_0x16ec81(0x14f)](_0x4c215f);}})[_0x388c8b(0x127)](_0x5e0496=>{const {statusCode:_0x4c7990,statusCode:_0x3a1fb6,headers:_0x185d9a,body:_0xe82571}=_0x5e0496;_0x38d842(null,{'status':_0x4c7990,'statusCode':_0x3a1fb6,'headers':_0x185d9a,'body':_0xe82571},_0xe82571);},_0x1ad42d=>{const _0x160230=_0x388c8b,{message:_0x17e30f,response:_0xb0a196}=_0x1ad42d;_0x38d842(_0x17e30f,_0xb0a196,_0xb0a196&&_0xb0a196[_0x160230(0x12b)]);}));}[_0x3ca231(0xd7)](_0x3fc9ed,_0x244253=()=>{}){const _0xd9bb16=_0x3ca231;if(_0x3fc9ed[_0xd9bb16(0x12b)]&&_0x3fc9ed[_0xd9bb16(0xc2)]&&!_0x3fc9ed[_0xd9bb16(0xc2)][_0xd9bb16(0x193)]&&(_0x3fc9ed[_0xd9bb16(0xc2)][_0xd9bb16(0x193)]=_0xd9bb16(0x12c)),_0x3fc9ed[_0xd9bb16(0xc2)]&&delete _0x3fc9ed[_0xd9bb16(0xc2)][_0xd9bb16(0x14d)],this[_0xd9bb16(0xc3)]()||this[_0xd9bb16(0x177)]())this[_0xd9bb16(0xc3)]()&&this[_0xd9bb16(0x192)]&&(_0x3fc9ed[_0xd9bb16(0xc2)]=_0x3fc9ed[_0xd9bb16(0xc2)]||{},Object[_0xd9bb16(0x102)](_0x3fc9ed[_0xd9bb16(0xc2)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0xd9bb16(0xd7)](_0x3fc9ed,(_0x279469,_0x251614,_0x2cd8bf)=>{const _0x348248=_0xd9bb16;!_0x279469&&_0x251614&&(_0x251614[_0x348248(0x12b)]=_0x2cd8bf,_0x251614[_0x348248(0x15b)]=_0x251614[_0x348248(0x15d)]),_0x244253(_0x279469,_0x251614,_0x2cd8bf);});else{if(this[_0xd9bb16(0x13d)]())_0x3fc9ed[_0xd9bb16(0x106)]=_0xd9bb16(0x13f),this[_0xd9bb16(0x192)]&&(_0x3fc9ed[_0xd9bb16(0x105)]=_0x3fc9ed[_0xd9bb16(0x105)]||{},Object[_0xd9bb16(0x102)](_0x3fc9ed[_0xd9bb16(0x105)],{'hints':!0x1})),$task[_0xd9bb16(0x151)](_0x3fc9ed)[_0xd9bb16(0x127)](_0x1007b7=>{const {statusCode:_0x189764,statusCode:_0x39846b,headers:_0x17d4c9,body:_0x1470a0}=_0x1007b7;_0x244253(null,{'status':_0x189764,'statusCode':_0x39846b,'headers':_0x17d4c9,'body':_0x1470a0},_0x1470a0);},_0x5bdee6=>_0x244253(_0x5bdee6));else{if(this[_0xd9bb16(0x197)]()){this[_0xd9bb16(0x164)](_0x3fc9ed);const {url:_0x3ed70b,..._0x2933d1}=_0x3fc9ed;this[_0xd9bb16(0xe1)][_0xd9bb16(0xd7)](_0x3ed70b,_0x2933d1)[_0xd9bb16(0x127)](_0x24cf09=>{const {statusCode:_0x5df6bf,statusCode:_0x59f147,headers:_0xce0c37,body:_0x3d5c46}=_0x24cf09;_0x244253(null,{'status':_0x5df6bf,'statusCode':_0x59f147,'headers':_0xce0c37,'body':_0x3d5c46},_0x3d5c46);},_0x5c98fc=>{const _0x331050=_0xd9bb16,{message:_0xfa5097,response:_0x2135f7}=_0x5c98fc;_0x244253(_0xfa5097,_0x2135f7,_0x2135f7&&_0x2135f7[_0x331050(0x12b)]);});}}}}[_0x3ca231(0x156)](_0x48bb31){const _0x5e4eaa=_0x3ca231;let _0x4fc39d={'M+':new Date()[_0x5e4eaa(0xcf)]()+0x1,'d+':new Date()[_0x5e4eaa(0xf2)](),'H+':new Date()[_0x5e4eaa(0xe3)](),'m+':new Date()[_0x5e4eaa(0xef)](),'s+':new Date()[_0x5e4eaa(0x180)](),'q+':Math[_0x5e4eaa(0xff)]((new Date()[_0x5e4eaa(0xcf)]()+0x3)/0x3),'S':new Date()[_0x5e4eaa(0x187)]()};/(y+)/[_0x5e4eaa(0x148)](_0x48bb31)&&(_0x48bb31=_0x48bb31[_0x5e4eaa(0x112)](RegExp['$1'],(new Date()[_0x5e4eaa(0x16f)]()+'')[_0x5e4eaa(0xec)](0x4-RegExp['$1'][_0x5e4eaa(0xde)])));for(let _0x2d1589 in _0x4fc39d)new RegExp('('+_0x2d1589+')')[_0x5e4eaa(0x148)](_0x48bb31)&&(_0x48bb31=_0x48bb31[_0x5e4eaa(0x112)](RegExp['$1'],0x1==RegExp['$1'][_0x5e4eaa(0xde)]?_0x4fc39d[_0x2d1589]:('00'+_0x4fc39d[_0x2d1589])[_0x5e4eaa(0xec)]((''+_0x4fc39d[_0x2d1589])[_0x5e4eaa(0xde)])));return _0x48bb31;}['msg'](_0x4102c4=_0x46ced6,_0x925279='',_0x5f5a06='',_0x3f0a65){const _0x43b349=_0x3ca231,_0x1e845c=_0x15aec8=>{const _0x241e51=_0x1088;if(!_0x15aec8)return _0x15aec8;if(_0x241e51(0x13e)==typeof _0x15aec8)return this[_0x241e51(0x177)]()?_0x15aec8:this[_0x241e51(0x13d)]()?{'open-url':_0x15aec8}:this[_0x241e51(0xc3)]()?{'url':_0x15aec8}:void 0x0;if(_0x241e51(0xcc)==typeof _0x15aec8){if(this[_0x241e51(0x177)]()){let _0x2863f5=_0x15aec8[_0x241e51(0xbf)]||_0x15aec8[_0x241e51(0x19b)]||_0x15aec8[_0x241e51(0x19d)],_0x602d9e=_0x15aec8[_0x241e51(0xca)]||_0x15aec8[_0x241e51(0xc6)];return{'openUrl':_0x2863f5,'mediaUrl':_0x602d9e};}if(this[_0x241e51(0x13d)]()){let _0x3f71b1=_0x15aec8[_0x241e51(0x19d)]||_0x15aec8[_0x241e51(0x19b)]||_0x15aec8[_0x241e51(0xbf)],_0x3f25a6=_0x15aec8[_0x241e51(0xc6)]||_0x15aec8[_0x241e51(0xca)];return{'open-url':_0x3f71b1,'media-url':_0x3f25a6};}if(this[_0x241e51(0xc3)]()){let _0x184b8a=_0x15aec8['url']||_0x15aec8[_0x241e51(0xbf)]||_0x15aec8['open-url'];return{'url':_0x184b8a};}}};this[_0x43b349(0x136)]||(this[_0x43b349(0xc3)]()||this[_0x43b349(0x177)]()?$notification[_0x43b349(0xd7)](_0x4102c4,_0x925279,_0x5f5a06,_0x1e845c(_0x3f0a65)):this[_0x43b349(0x13d)]()&&$notify(_0x4102c4,_0x925279,_0x5f5a06,_0x1e845c(_0x3f0a65)));let _0x5eb2f=['',_0x43b349(0xcd)];_0x5eb2f[_0x43b349(0x12f)](_0x4102c4),_0x925279&&_0x5eb2f[_0x43b349(0x12f)](_0x925279),_0x5f5a06&&_0x5eb2f[_0x43b349(0x12f)](_0x5f5a06),console[_0x43b349(0x14c)](_0x5eb2f[_0x43b349(0x11c)]('\x0a')),this[_0x43b349(0xdd)]=this[_0x43b349(0xdd)][_0x43b349(0xe2)](_0x5eb2f);}[_0x3ca231(0x14c)](..._0x6e14a3){const _0x1c53bb=_0x3ca231;_0x6e14a3[_0x1c53bb(0xde)]>0x0&&(this[_0x1c53bb(0xdd)]=[...this[_0x1c53bb(0xdd)],..._0x6e14a3]),console[_0x1c53bb(0x14c)](_0x6e14a3[_0x1c53bb(0x11c)](this[_0x1c53bb(0x190)]));}[_0x3ca231(0x14f)](_0x216965,_0x5f5ab5){const _0x1123dc=_0x3ca231,_0x23cff9=!this[_0x1123dc(0xc3)]()&&!this[_0x1123dc(0x13d)]()&&!this[_0x1123dc(0x177)]();_0x23cff9?this[_0x1123dc(0x14c)]('','❗️'+this[_0x1123dc(0xd5)]+',\x20错误!',_0x216965[_0x1123dc(0xbb)]):this[_0x1123dc(0x14c)]('','❗️'+this[_0x1123dc(0xd5)]+_0x1123dc(0x157),_0x216965);}[_0x3ca231(0x163)](_0x338405){return new Promise(_0x3d3680=>setTimeout(_0x3d3680,_0x338405));}[_0x3ca231(0x141)](_0x493a04={}){const _0x38ec52=_0x3ca231,_0x4edc14=new Date()[_0x38ec52(0x165)](),_0x2ff71f=(_0x4edc14-this[_0x38ec52(0xe0)])/0x3e8;this[_0x38ec52(0x14c)]('','🔔'+this[_0x38ec52(0xd5)]+_0x38ec52(0x15e)+_0x2ff71f+'\x20秒'),this[_0x38ec52(0x14c)](),(this[_0x38ec52(0xc3)]()||this[_0x38ec52(0x13d)]()||this[_0x38ec52(0x177)]())&&$done(_0x493a04);}}(_0x46ced6,_0x430e8a);}