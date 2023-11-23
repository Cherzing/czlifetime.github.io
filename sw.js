/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","b33dcf8dc6f992dc281ed64db4d6f170"],["/2023/05/19/树/index.html","a731e4e972123d83aff9ad55d07dec6d"],["/2023/05/22/图/index.html","f13312e5c794fb2c91e88944ce12b30b"],["/2023/06/23/IO流/index.html","707cd3b63d2592145821a8c6d8e1d4f0"],["/2023/06/23/思想/index.html","ffaaca93f80571f6363f5d0de4345b28"],["/2023/07/20/线性表/index.html","5fc38a008e1ee090a45b183bfacfc07b"],["/2023/07/30/排序/index.html","257a13101bd558de012614774c345e87"],["/2023/07/31/C++模板/index.html","2a6275dd074eb4b1cdf709e4a1a1bc6b"],["/2023/07/31/Java面向对象编程/index.html","341307ed8881e79012e4572ea2f43066"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","b86ed8e42ded4a92219927275399100f"],["/2023/08/08/查找(代码)/index.html","70a51a556418161264db54cfcb25598c"],["/2023/08/08/查找(全)/index.html","148c5139f32d7e62d4383430a733c330"],["/2023/08/15/代理模式/index.html","b9a0772ae7e6a956dc02d3aa5ca7b83e"],["/2023/08/18/Java网络/index.html","774690888942360d385b9b29c0491f39"],["/2023/08/20/MySQL/index.html","b0a52b5a0f920aeb765d7db277fbc052"],["/2023/09/09/JDBC/index.html","9f4cd89cd98ba0055b867fc2ad996802"],["/2023/09/09/JavaWeb/index.html","38512dc1699fcc53f362d8367e1befa9"],["/2023/09/13/Junit/index.html","b123dfc3860a788f14b7ff58bcab913c"],["/2023/09/13/软件测试大赛/index.html","3dceee0ab9b027d568b119a745e1fbb1"],["/2023/09/22/HTML/index.html","90cd9e238b9245bf96ea03e8ee8a863c"],["/2023/09/22/JavaScript/index.html","d55fdfc4b991561a7035885f7b5ba498"],["/2023/09/29/JMeter/index.html","a8d8ab6e3fbd2419c2b63e62c0720afe"],["/2023/10/24/Vue/index.html","f45d343823b68f28363aa0901011b39b"],["/about/index.html","b7db013b655e67da364d5d567b2523fa"],["/archives/2023/05/index.html","2538e26824ee95e55d0935129458e232"],["/archives/2023/06/index.html","af4a370d86482b058d9d0b8d335ca985"],["/archives/2023/07/index.html","6673e99c2f9fcbf0e47dc7b1f5b96673"],["/archives/2023/08/index.html","26ffd3e826427924ff6bf1e9d5c3777f"],["/archives/2023/09/index.html","985a833c5613694024030ec323debfca"],["/archives/2023/10/index.html","11b7441d88a4cfdb026ebe7f2b9505a6"],["/archives/2023/index.html","ecd52fea73c736ba51daf2d8d7d979da"],["/archives/2023/page/2/index.html","3b310bcab2f23e223e658305fce8c0c1"],["/archives/2023/page/3/index.html","15d55da87d9fd310ee7b095eb0a6a6c5"],["/archives/index.html","1bcb715bc8827f00a819d5dd11ef16ae"],["/archives/page/2/index.html","3d5f5c4a924dd0d5c54922eb0f7c7af8"],["/archives/page/3/index.html","7850d69abbc403fdc4b1e47b22aee3de"],["/categories/index.html","48969cf47373d79a40dd56b14165e50a"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","9b68bfebdf7894e74040e4c43db6e091"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","bd739ddca6b26e9ff86d8543b6e0a799"],["/music/index.html","4b08263ca4fc1c0f780aad16a641b296"],["/page/2/index.html","ed3a20f957595bcb3dfbf980560d28b0"],["/page/3/index.html","f7329ad36a5fe20d7fd6e8b4a87ab343"],["/sw-register.js","83604a3c599a5e3f392a634768acffff"],["/tags/C/index.html","287c85c15405bfe0a3627f5eb79b27e2"],["/tags/HTML/index.html","da66d483e813cff04bd5e6a6d702ca84"],["/tags/Hexo/index.html","fc01719ee746f9c0872099d9c5904357"],["/tags/Java/index.html","6e9023e65476ca5a04579f5544554c4a"],["/tags/SQL/index.html","8ed2b45d5858326e54221e718eff4fb0"],["/tags/index.html","70ab9d4529a1240c367ff78d88a944bb"],["/tags/数据结构/index.html","b684b8be4ae6df593856b32201dc104f"],["/tags/设计思想/index.html","37f60dd36fdca9511d708ba758ff2a80"],["/tags/软件测试/index.html","ee0ddb96c8aaa2c19e457aaba9002aff"],["/tags/软件测试、Web测试/index.html","70d5d9133918469d16930a2e313d97b5"]];
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
