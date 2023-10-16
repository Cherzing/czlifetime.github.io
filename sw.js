/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","b33dcf8dc6f992dc281ed64db4d6f170"],["/2023/05/19/树/index.html","a731e4e972123d83aff9ad55d07dec6d"],["/2023/05/22/图/index.html","29e846dede81fccd8e45e000fad8e89a"],["/2023/06/23/IO流/index.html","707cd3b63d2592145821a8c6d8e1d4f0"],["/2023/06/23/思想/index.html","ffaaca93f80571f6363f5d0de4345b28"],["/2023/07/20/线性表/index.html","5fc38a008e1ee090a45b183bfacfc07b"],["/2023/07/30/排序/index.html","85c515612dae5bccb3503f04ad59db12"],["/2023/07/31/C++模板/index.html","305a619f6816f1d32b2646d07ceaa021"],["/2023/07/31/Java面向对象编程/index.html","f1adb2bb674e2b9a5c640465a71f21a7"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","b86ed8e42ded4a92219927275399100f"],["/2023/08/08/查找(代码)/index.html","c58ddd4ef48783f4d3fe32a80c0dbf13"],["/2023/08/08/查找(全)/index.html","1d2df7714c1cf0749d9d200b2f39d890"],["/2023/08/15/代理模式/index.html","7cf4ce068d0e5b6fa9f585198656c649"],["/2023/08/18/Java网络/index.html","2cccb3e47c5be76870031c15a88cbc8c"],["/2023/08/20/MySQL/index.html","64e126d565a6d82f599ef90754ef60e4"],["/2023/09/09/JDBC/index.html","adbce03a751eb628e5501b9f17bd2623"],["/2023/09/09/JavaWeb/index.html","0ec030d7a4596b7904b2c5d1dc394fbf"],["/2023/09/13/Junit/index.html","4420690af7131f5f7c2713e360cdfca7"],["/2023/09/13/软件测试大赛/index.html","3dceee0ab9b027d568b119a745e1fbb1"],["/2023/09/21/web自动化测试/index.html","b5e221946dee5b2fe26413fcf714de6f"],["/2023/09/22/HTML/index.html","29701b206cdc82dc4424d7eed1ccaba8"],["/2023/09/22/JavaScript/index.html","781b89e42843547a6406dd0da5a8db83"],["/2023/09/29/JMeter/index.html","bc03536fd2794b3374b393defae72d40"],["/about/index.html","b6ddb154a46e08c05285e7e685a34a0f"],["/archives/2023/05/index.html","db59d068d838dd4e0e82f9d2791aab4f"],["/archives/2023/06/index.html","0cc53b76a299b07d8122279aed685fc9"],["/archives/2023/07/index.html","4ed76a3e78b094654808a3d44ed2e704"],["/archives/2023/08/index.html","78fbbdc939dda40cb6b6f5873a0bab5c"],["/archives/2023/09/index.html","cefdc4001b6b65ea78f5e91bb22d8ff0"],["/archives/2023/index.html","fcadf2fcfbf6953dc75a61e47fb1d06a"],["/archives/2023/page/2/index.html","7faebe7169cd7c7151333996aea486cf"],["/archives/2023/page/3/index.html","ae33fac392f7a401d468ebe16f403f95"],["/archives/index.html","a7c9f3cddb4acfe3bba0d06684f6c1e0"],["/archives/page/2/index.html","e297faf6afd02ab21efbea48c1205704"],["/archives/page/3/index.html","f3e1a941a9886ee60af77f5da9e7da62"],["/categories/index.html","e5774e1d6bc50b55ad03fbb9f47e6e23"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","6ffccf79acd0ca4bf34aa6b4d4821a63"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","23c0139c6ecec9000becff42f0a2f31b"],["/music/index.html","c61ea38e3969c58aa551143a6ebd9411"],["/page/2/index.html","7cc9d61bbd17e75cb723c450e1f12150"],["/page/3/index.html","42176d421757dcce232744b377e0089b"],["/sw-register.js","18d52e9d3d41ae4418da8f547ac37b81"],["/tags/C/index.html","5a15428d72aca6c872975c7491ffbf17"],["/tags/HTML/index.html","acbb2931570ae0364fc1321ab9bc62f5"],["/tags/Hexo/index.html","828e875a0857f0ae61d6ae18dd36704b"],["/tags/Java/index.html","1ad53d6d51ee0dafc5829d6fad8342cc"],["/tags/SQL/index.html","7f95ae247f36b24989be807f10da2370"],["/tags/index.html","33d911319c1f95bbabcb22ed9175debf"],["/tags/数据结构/index.html","0788a64e67709dd4c18941a6856bcb69"],["/tags/设计思想/index.html","fdd46700a7974b6043b819a9ceb686ca"],["/tags/软件测试/index.html","9a82e63167a41a3712fedcadb2b64179"],["/tags/软件测试、Web测试/index.html","6505eb9b5ee46d2894e0f55b4061abd3"]];
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
