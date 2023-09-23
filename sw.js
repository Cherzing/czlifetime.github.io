/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","f4380945f49ebdb70550b6ca920f87cd"],["/2023/05/19/树/index.html","991b94073cde2f68b8f332e381b0a0a3"],["/2023/05/22/图/index.html","fb3c97f12c9618a1e86827050f26db9d"],["/2023/06/23/IO流/index.html","198865600c4f8d7eb44df25648af8231"],["/2023/06/23/思想/index.html","f6c52f5be8813d0d4c179f2a2067f1b5"],["/2023/07/20/线性表/index.html","945a56511937d5c84caf3612db00ed69"],["/2023/07/30/排序/index.html","dcda5e58a1e62a0173ce0525b7cef488"],["/2023/07/31/C++模板/index.html","26081eb2280ea38ef90d8c0af8116609"],["/2023/07/31/Java面向对象编程/index.html","f7d39db04ef67097d8cd5623ed6f9fc4"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","7efb99bfe23158106b231cee0a776e7b"],["/2023/08/08/查找(代码)/index.html","9d03cdd8efde60d6d3652dd9289d719d"],["/2023/08/08/查找(全)/index.html","b5aa9d1b93ff60f93e468084000647f4"],["/2023/08/15/代理模式/index.html","2e594d6781486ae17f963e313e336a4a"],["/2023/08/18/Java网络/index.html","f8eac7da87332eae682d32bbab3f9bdf"],["/2023/08/20/MySQL/index.html","5ef996bae1b9740cc9c008f64074ab5d"],["/2023/09/09/JDBC/index.html","f5e31bed287b1d808521857a29dab5ca"],["/2023/09/09/JavaWeb/index.html","97c016978b8416e8b46d4ed298b02c8d"],["/2023/09/13/Junit/index.html","512f1cf882746aac6368fa9123d4fa27"],["/2023/09/13/软件测试大赛/index.html","604077c9f26b147579ca10cef124caaf"],["/2023/09/21/web自动化测试/index.html","1d186c5e8fb8c3dd42590d8fe5154763"],["/2023/09/22/HTML/index.html","0f36867502716c96fab7f76a5a044279"],["/2023/09/22/JavaScript/index.html","18bc947afcdf6b3889af07441a9ee636"],["/about/index.html","f83e6b78c39656c0bde4e640613c78dd"],["/archives/2023/05/index.html","63c108949eb486dd83893855bf6e1f53"],["/archives/2023/06/index.html","4bb4e5af7aac0447fbff89ec47819553"],["/archives/2023/07/index.html","f4e2ccc6b5583a68cfe5064f86219c94"],["/archives/2023/08/index.html","362dc905600e960ab93ee1bed519755e"],["/archives/2023/09/index.html","768317954f686d6e25235e8a870f6eff"],["/archives/2023/index.html","e3d52d2762fb3ca7f915cd7f01bacc0f"],["/archives/2023/page/2/index.html","3674c246c2f54b94e42ebaedb661abe2"],["/archives/2023/page/3/index.html","fd37bf118ac354bc077bc9ae61c14cc1"],["/archives/index.html","b54d28709a770bd193c858470fe29e44"],["/archives/page/2/index.html","019a7a6cafac929324717289c3066ad4"],["/archives/page/3/index.html","baea965533431e272ec406378a4650db"],["/categories/index.html","223d500307b72a5df26fa534ceddba8f"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","541a7c1dede605e60ee158fe58e7b870"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","d97505943767d9a399e796b95a7e0208"],["/music/index.html","5f2d1e69802755b2ea01a2ea8a027839"],["/page/2/index.html","1a473c80aa7cf44880d588fc4f39bca4"],["/page/3/index.html","b6c9292a09ec63f9d65780a3e0ec6c94"],["/sw-register.js","65ddb6a0567177dbc3505725b889d374"],["/tags/C/index.html","9726d800572c018d4829eeb43b494e92"],["/tags/HTML/index.html","956735911eb1b9b0780b5dd8b1983c75"],["/tags/Hexo/index.html","952e9bc54891182a1612d57835ec29c4"],["/tags/Java/index.html","fd059936e2ad404d362d4a8788a9931d"],["/tags/SQL/index.html","6a5de8820aaabe719a7b1c457429a77c"],["/tags/index.html","4e4423a2b07f1a6562b4702e55103d02"],["/tags/数据结构/index.html","2480eaf0e7c63d0016b4a079f6e764ad"],["/tags/设计思想/index.html","6724d82911261b95f415bbb480ce18a6"],["/tags/软件测试/index.html","91f4f2fd82acd5a4a4bf757e53294c63"],["/tags/软件测试、Web测试/index.html","bc36dc513c7758b813f3eaf30c10dea2"]];
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
