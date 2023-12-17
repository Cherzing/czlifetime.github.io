/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","dc9900f640bf38c0dbbea7210b69df90"],["/2023/05/19/树/index.html","6763cfa533ab94773dbb9546fe0aefd5"],["/2023/05/22/图/index.html","e4c28bf6e1041c40b4df0de694df5d52"],["/2023/06/23/IO流/index.html","739f112c4fcce883020dbe0aab7e2b5c"],["/2023/06/23/思想/index.html","56163456d0e332f92a28df50153e1583"],["/2023/07/20/线性表/index.html","07fc171ca6d2e97c35f653d58a96d3c8"],["/2023/07/30/排序/index.html","625aff40bc5535f6ea52f83d61629d11"],["/2023/07/31/C++模板/index.html","af20ef089c68efc807a1e483d2c2e76d"],["/2023/07/31/Java面向对象编程/index.html","2c21d11f92035c5596c8dfabc11a8f9d"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","029e2c6c1a5973e4aea668785c9e799d"],["/2023/08/08/查找(代码)/index.html","c4bc7dd7747944e9dd1aa675938d19ec"],["/2023/08/08/查找(全)/index.html","8af2214ede59b1f825cc2b6760cb6eaf"],["/2023/08/15/代理模式/index.html","e1934c5b80921382afbd8c0b042b7caf"],["/2023/08/18/Java网络/index.html","6eae2cb8133a43e4a3c6e13e78ad0dee"],["/2023/08/20/MySQL/index.html","878ba34741005be220f1d6cd220206ca"],["/2023/09/09/JDBC/index.html","72bc044e6fe00dbb5a309a342f69deba"],["/2023/09/09/JavaWeb/index.html","918cd7f7c5413b22c9c192b24f3aebcf"],["/2023/09/13/Junit/index.html","9b99e2fd5b8a9d5d50125905f0c9e70f"],["/2023/09/13/软件测试大赛/index.html","3ef85181ed63e557f12d005ec3ac9649"],["/2023/09/22/HTML/index.html","b3b699ecbbe038f11ac52e180ba6d6b0"],["/2023/09/22/JavaScript/index.html","978423c5592a6cf48ff47e70055ce228"],["/2023/09/29/JMeter/index.html","4b099c07bb471cf8a960f58efddd3820"],["/2023/10/24/Vue/index.html","5060b032ab20f949152ca8c465e4cd44"],["/2023/12/04/HTML+CSS/index.html","8772b19a671814fa893d49146c00e215"],["/2023/12/17/Linux/index.html","053d94420c3fd96262a3cc8a081227bc"],["/2023/12/17/Linux课程笔记/index.html","1c3c15927a2ff248f7eef762a32476ad"],["/2023/12/17/网络连接的三种模式/index.html","f91e1666aea634551f765ba7b2d99d4b"],["/about/index.html","69862aee5bc9c037adb8a800e1686adc"],["/archives/2023/05/index.html","2b12a4876dbe1e887a78863ce492fb39"],["/archives/2023/06/index.html","5c0e002a966f4832390f5dc16c40d2c8"],["/archives/2023/07/index.html","b3773995a69317160c33aac2763951ab"],["/archives/2023/08/index.html","a22ba63cfd2a34573964c84ecddf6578"],["/archives/2023/09/index.html","7a1a1875eea80884aaae113ff9eca44a"],["/archives/2023/10/index.html","67338f9f15823d3c55d498b7b76c65a3"],["/archives/2023/12/index.html","676d409ddca4db95618e342f731921cb"],["/archives/2023/index.html","9f7f22633c945530d8e79caed9cdb67a"],["/archives/2023/page/2/index.html","0797c358ee189de91379df9334ba3f37"],["/archives/2023/page/3/index.html","09142675d71a0b396eaa68914b407416"],["/archives/index.html","af890de6e3c8888f5d6466bbaba9342f"],["/archives/page/2/index.html","4d7f225df3575590ab8a3d48ada27e05"],["/archives/page/3/index.html","f5bada1985c349d0004ce48c5e8201fd"],["/categories/index.html","6e1e6df38beb85cbbf5e972d0b481fa5"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","9f07038752d23cb6a907402fd4809dac"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","5b4234230e19f9ce6e009741c95373a7"],["/music/index.html","cf7a36959ac10b21f048ef8b19116afa"],["/page/2/index.html","f50ca203a52dbe524ef17bbaf0c4b677"],["/page/3/index.html","df2f97a8dd0a39062c7fe1bd9d6b2ae3"],["/sw-register.js","1e6d3a91a0d6f4dd0a18547401cbc61e"],["/tags/C/index.html","ab831adececc471bd9519f2522709195"],["/tags/HTML/index.html","fd830ce09f4f28ebd7696185fb713396"],["/tags/Hexo/index.html","c2f054107d4b1f90538697adf9e604b7"],["/tags/Java/index.html","f3dfc75183991970ac1fdd97d8ded218"],["/tags/Linux/index.html","761919366d636d3c2590f1069ad64693"],["/tags/SQL/index.html","e0b02a0d1a7119519bbb192a05f94d67"],["/tags/index.html","3b22e3749cd080f9cb6396ba4e66580f"],["/tags/前端/index.html","788d32e5b8391673670c14a27742c2ca"],["/tags/数据结构/index.html","2ef9e71225fe256cf5c63d5476bdcd67"],["/tags/网络安全/index.html","82fd879555e2137cb768e6d0e1d38fb2"],["/tags/设计思想/index.html","1f4b29a85fc2847c4c66cb011d2c87e9"],["/tags/软件测试/index.html","a1720b99da84b4e84936ff115dd38639"],["/tags/软件测试、Web测试/index.html","e67140bf5a9d3bc96859bd6cb2ff5e51"]];
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
