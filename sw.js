/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","0e898457358e13d82d5a2f186507f306"],["/2023/05/19/树/index.html","734df3ec8a3980f9e72754248b074db0"],["/2023/05/22/图/index.html","6cd8c180635a46ff236f3a83445e0371"],["/2023/06/23/IO流/index.html","1c9e6b79b75c9a748875e9bf30ca5944"],["/2023/06/23/思想/index.html","31af0b98e04f8b0b2f7a23b2baaa064e"],["/2023/07/20/线性表/index.html","845cbe51659e355c92376b236f190c0b"],["/2023/07/30/排序/index.html","bfce7b27ce641d2fa84eb2a1813fe6e8"],["/2023/07/31/C++模板/index.html","f32b9e10c75e5c4e9f77b2fd129aebf2"],["/2023/07/31/Java面向对象编程/index.html","b1a47cb8f5305f99cb6fe2d43ab161a8"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","6bc9b9a630ea167b0247fad8ee938f2c"],["/2023/08/08/查找(代码)/index.html","e25557a393069ae5525108ffe0639b6b"],["/2023/08/08/查找(全)/index.html","198671a5bfdcd139999d1cd29a449aa7"],["/2023/08/15/代理模式/index.html","29922a29fc812b09351627fa98c7cd62"],["/2023/08/18/Java网络/index.html","02e949427a0043a0fc464d2c417d9d96"],["/2023/08/20/MySQL/index.html","dab541805da43cd1fbf3b4f139aa7ae9"],["/2023/09/09/JDBC/index.html","430a7eb664f102cfbc8d67f212290bcf"],["/2023/09/09/JavaWeb/index.html","efa68584f925507b4110addd36c4480a"],["/2023/09/13/Junit/index.html","6b682edc9e218bc09e90298b26a931a8"],["/2023/09/13/软件测试大赛/index.html","34827e38634561014118c08f5116251f"],["/2023/09/22/HTML/index.html","23ac05ff6484ae42689b4227dbc51b31"],["/2023/09/22/JavaScript/index.html","5683cd765975bc2944d745b9a30f3c64"],["/2023/09/29/JMeter/index.html","6b8cfe082c1d05a8b30b3e5a2d3b93d3"],["/2023/10/24/Vue/index.html","a5328c35eb3040e1f4894415e2fb9b5d"],["/2023/12/04/HTML+CSS/index.html","05ca50d9f44c36293d2c2bbfec76e715"],["/about/index.html","9f399daf15fe2a14c6c829073a1bfeec"],["/archives/2023/05/index.html","7ee96d6fdcf8a50145ec5b8c9f18f5c6"],["/archives/2023/06/index.html","86e3b2b8721fceb8ade1e606b1548399"],["/archives/2023/07/index.html","e34af68018b5e2c0b8a761831159216b"],["/archives/2023/08/index.html","497858c353ba8e2d7cafc8c04e01aabb"],["/archives/2023/09/index.html","3751ee44257e532e055ffc89dcb6e74d"],["/archives/2023/10/index.html","67d7d2b3c6753340005cc5bf8cc8ef66"],["/archives/2023/12/index.html","3fa4e4c8d872cb5d78eaef752b73027c"],["/archives/2023/index.html","eb84660cb171a4a62941ebc7b91fc34e"],["/archives/2023/page/2/index.html","523baa25c22f30409836672249a28e71"],["/archives/2023/page/3/index.html","45928e555642c1e64ded599153e32ffa"],["/archives/index.html","5929fb4d1f375390fbb8fac327f2f719"],["/archives/page/2/index.html","6b90bf0f7821c2967220a614e6580a24"],["/archives/page/3/index.html","7fde672b98a8aad5be928cebeafb7625"],["/categories/index.html","fe090707a1296176008e827a969a5f5d"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","391b22c8dac988a2d9174d22de3d148f"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","75784234ab20ded8a05d6515fdabcf73"],["/music/index.html","0f5040603ef9102ed01aa66a91626ba7"],["/page/2/index.html","933cdd19634ea5c12e53326e0ec72dec"],["/page/3/index.html","265a8b9a3481bc9bd25fac278abbe404"],["/sw-register.js","43fad7e9d1a566df5005451d3f486c2f"],["/tags/C/index.html","5e09275c16ae66043c169cd1e7b2cb8e"],["/tags/HTML/index.html","446d98c7fdbfddaa0a2ce033d7433964"],["/tags/Hexo/index.html","12ec4bd44c779ba16f1b6c4aec28acaa"],["/tags/Java/index.html","f9d543012f9527fcad36a31682c20c09"],["/tags/SQL/index.html","87b62c73e755510fa59eb1d69f3ef4e9"],["/tags/index.html","99970f6ab3a6de59d0408a5b61d5d9ca"],["/tags/前端/index.html","7443f3df95d9c5acb9a5e6b456b89a37"],["/tags/数据结构/index.html","0c2b428b82439ac2cd94dcef30a64f97"],["/tags/设计思想/index.html","2fac97fcfd0f43de41c0520318c219df"],["/tags/软件测试/index.html","0af0dd0cbec7cc865a786bad35ea5b3e"],["/tags/软件测试、Web测试/index.html","0072e2ed9ce42f7a937d6c3d743f9424"]];
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
