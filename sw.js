/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","0e898457358e13d82d5a2f186507f306"],["/2023/05/19/树/index.html","6b92190d6b6727ff1a1070b98feaf77d"],["/2023/05/22/图/index.html","6f56f291ab394716401c98c6b4cb1af3"],["/2023/06/23/IO流/index.html","5642501eed6ede40d234fc150968c6cb"],["/2023/06/23/思想/index.html","31af0b98e04f8b0b2f7a23b2baaa064e"],["/2023/07/20/线性表/index.html","c300d930480a7ce88dcb5b7d37b7a881"],["/2023/07/30/排序/index.html","2d75a9c872ab8d161a70a76bbd13b749"],["/2023/07/31/C++模板/index.html","f32b9e10c75e5c4e9f77b2fd129aebf2"],["/2023/07/31/Java面向对象编程/index.html","6dff1e50a4393020459930bdd098e5ec"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","6bc9b9a630ea167b0247fad8ee938f2c"],["/2023/08/08/查找(代码)/index.html","ffdd16dfd7521ee22f8b55b67b203804"],["/2023/08/08/查找(全)/index.html","b39611b81309932d3e1fc3bb202b992c"],["/2023/08/15/代理模式/index.html","a2df2861c1c27867304037c31bd9e4b5"],["/2023/08/18/Java网络/index.html","b2e82193d5fe1c60588f457143f2660c"],["/2023/08/20/MySQL/index.html","dab541805da43cd1fbf3b4f139aa7ae9"],["/2023/09/09/JDBC/index.html","b4167f0f6ddb782b4dfc790b9895fe47"],["/2023/09/09/JavaWeb/index.html","f1a9cc085870e3d64e4955b24f03875f"],["/2023/09/13/Junit/index.html","6b682edc9e218bc09e90298b26a931a8"],["/2023/09/13/软件测试大赛/index.html","34827e38634561014118c08f5116251f"],["/2023/09/22/HTML/index.html","23ac05ff6484ae42689b4227dbc51b31"],["/2023/09/22/JavaScript/index.html","5683cd765975bc2944d745b9a30f3c64"],["/2023/09/29/JMeter/index.html","6b8cfe082c1d05a8b30b3e5a2d3b93d3"],["/2023/10/24/Vue/index.html","a5328c35eb3040e1f4894415e2fb9b5d"],["/2023/12/04/HTML+CSS/index.html","3a6f404ce84af14b9dae04c58672bb22"],["/about/index.html","77d092987e0bad3988bc889e148c0c9e"],["/archives/2023/05/index.html","1c66e4091b931a75739fe30cede2df7d"],["/archives/2023/06/index.html","804784725dff2f189a62d1ba7ba69cdc"],["/archives/2023/07/index.html","a03c99029b49b5cdb863d4b5081ab05a"],["/archives/2023/08/index.html","bea0e801b0703db4892b4411ae290930"],["/archives/2023/09/index.html","96ea8ee2e57c50b69c62b1041231ccba"],["/archives/2023/10/index.html","a7ae9bfc527765b1a5488074e6e7994e"],["/archives/2023/12/index.html","4e2c5ae33663430b0923205efb9fc3ec"],["/archives/2023/index.html","97da4bb4f90290ce921822285f148325"],["/archives/2023/page/2/index.html","4325612ae52a580720f2db82dfc5ef77"],["/archives/2023/page/3/index.html","f1fc4f001512828abe4c8466ad2be921"],["/archives/index.html","5ff195c165456a618dbe48a8cb01e8f8"],["/archives/page/2/index.html","0ff452685d0aa9beb9ab5e47f2135415"],["/archives/page/3/index.html","e852b8e77806f3da7dfef37039d8a8fe"],["/categories/index.html","7d3636d9f7b453b4cb2cd9d4c4d821b3"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","f3267bd11b86034e6791e309eb67a8ea"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","002e74bfb1e867c92e169578988c765e"],["/music/index.html","11e6f23a784f825c95afc6ee00906269"],["/page/2/index.html","50843cd819bdfa793accc32a4dd0509a"],["/page/3/index.html","4eb054287ec71cd0d225258016807b23"],["/sw-register.js","71f239c7298ff301262374e57f86455e"],["/tags/C/index.html","3640db778558873ac93ed3328da094fb"],["/tags/HTML/index.html","54077a0b16dd3a7c29cbf0c620d55f76"],["/tags/Hexo/index.html","2535cc33871a5d7e2a1a2cd713a3e6da"],["/tags/Java/index.html","1f84538b7ce2ae79084499a1878de106"],["/tags/SQL/index.html","39892e557e78631c06a88cbcadd0769f"],["/tags/index.html","d361d7753d891e286d406a46130cd4ce"],["/tags/前端/index.html","ee3c9769a918a14e112d3c3c39829871"],["/tags/数据结构/index.html","ec3914a0fd96e0abaa952a045f759824"],["/tags/设计思想/index.html","8784692442692f9a5a24bf815b030c41"],["/tags/软件测试/index.html","f8a24f8c1df47e2bec5d1e6649007687"],["/tags/软件测试、Web测试/index.html","d89dc4f7cf19147df56d67d9f651c164"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
