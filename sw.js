/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","b33dcf8dc6f992dc281ed64db4d6f170"],["/2023/05/19/树/index.html","a731e4e972123d83aff9ad55d07dec6d"],["/2023/05/22/图/index.html","29e846dede81fccd8e45e000fad8e89a"],["/2023/06/23/IO流/index.html","707cd3b63d2592145821a8c6d8e1d4f0"],["/2023/06/23/思想/index.html","ffaaca93f80571f6363f5d0de4345b28"],["/2023/07/20/线性表/index.html","5fc38a008e1ee090a45b183bfacfc07b"],["/2023/07/30/排序/index.html","85c515612dae5bccb3503f04ad59db12"],["/2023/07/31/C++模板/index.html","2a6275dd074eb4b1cdf709e4a1a1bc6b"],["/2023/07/31/Java面向对象编程/index.html","8171941536e90dda5c5be598c6fdc5e5"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","b86ed8e42ded4a92219927275399100f"],["/2023/08/08/查找(代码)/index.html","c58ddd4ef48783f4d3fe32a80c0dbf13"],["/2023/08/08/查找(全)/index.html","1d2df7714c1cf0749d9d200b2f39d890"],["/2023/08/15/代理模式/index.html","c9d51774c783c6bb30b9879488630913"],["/2023/08/18/Java网络/index.html","835796e06431ed27fcb625b71aaf6296"],["/2023/08/20/MySQL/index.html","b0a52b5a0f920aeb765d7db277fbc052"],["/2023/09/09/JDBC/index.html","adbce03a751eb628e5501b9f17bd2623"],["/2023/09/09/JavaWeb/index.html","8de92823026321bea9d7ee36f1ec5e73"],["/2023/09/13/Junit/index.html","b123dfc3860a788f14b7ff58bcab913c"],["/2023/09/13/软件测试大赛/index.html","3dceee0ab9b027d568b119a745e1fbb1"],["/2023/09/22/HTML/index.html","90cd9e238b9245bf96ea03e8ee8a863c"],["/2023/09/22/JavaScript/index.html","62bcdfa08d68dbd534bedb9a0f0336f4"],["/2023/09/29/JMeter/index.html","a8d8ab6e3fbd2419c2b63e62c0720afe"],["/2023/10/24/Vue/index.html","e4a4b96b27223444b570a174db4b50cd"],["/about/index.html","f07a6d4ea44dbf6a59590d164e6e8f19"],["/archives/2023/05/index.html","5448849a1fbeec34ca55681762274031"],["/archives/2023/06/index.html","8df6de3162ea33a67f06aac4a4c107b9"],["/archives/2023/07/index.html","b8e8127be9b622d507111652d6cb60e6"],["/archives/2023/08/index.html","7f0302213336ca52d10f62e7cfb8c74e"],["/archives/2023/09/index.html","e75e8af0af19995bab6aa543b002fc18"],["/archives/2023/10/index.html","38600021f98156ebd36dd8aaa6e8dc27"],["/archives/2023/index.html","f67443f2fd51efc8f213946722fbaa3c"],["/archives/2023/page/2/index.html","d762cd251dc159fcb36068b4f4c8b8bf"],["/archives/2023/page/3/index.html","b5be963a3c79e7faecea1feb15288ff7"],["/archives/index.html","03cdc754e9bbec0f7e5bd4dc30577628"],["/archives/page/2/index.html","f586621d82acc88c89a5233b3970f880"],["/archives/page/3/index.html","ab1f2aefd42dc5b7f4fd41579b34a83e"],["/categories/index.html","fc392e96e8e5bc2491aff333bd5b7c7b"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","70420f67583616a2114406f8fbbb1b57"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","06930368ab09943b5d6d6f581d32bb82"],["/music/index.html","3d238a5b7bea351e0f5ac4b4e403c3d7"],["/page/2/index.html","734f6323b59031e717768215c0564d27"],["/page/3/index.html","e79542dc1013dff1ecb0ba8a35236488"],["/sw-register.js","8e9cd27ffc94c05df2482f2510ca1d22"],["/tags/C/index.html","b42c8e983807506db5f3d1a974b45a90"],["/tags/HTML/index.html","5bd527d5a01adb874dafbfe2ed847e40"],["/tags/Hexo/index.html","c08e1d7d81f8dd2b5731b569d5e9f10e"],["/tags/Java/index.html","2b3cdb8e8199b2dc04fd497d0d6d22c9"],["/tags/SQL/index.html","37dae493bd6cb7a561246872ce8a5e37"],["/tags/index.html","d4a7a1e2f9add859281029e5dec38e83"],["/tags/数据结构/index.html","d96366a33c004ae93a112a66e920ee77"],["/tags/设计思想/index.html","80b6792766bcec7cd4ffa9883f6e8ce3"],["/tags/软件测试/index.html","af9544db69e0a5d994cb67cbd0dd3844"],["/tags/软件测试、Web测试/index.html","34071db7ac41d39778caa92f47d73345"]];
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
