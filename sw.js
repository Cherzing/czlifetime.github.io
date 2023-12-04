/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","0e898457358e13d82d5a2f186507f306"],["/2023/05/19/树/index.html","7bea7d30244bd4bc35150ae646b9ab30"],["/2023/05/22/图/index.html","db8f99c9ceb9cbe8402bcd0393719998"],["/2023/06/23/IO流/index.html","8f824f84c1aa04b8798ae869f70e979a"],["/2023/06/23/思想/index.html","31af0b98e04f8b0b2f7a23b2baaa064e"],["/2023/07/20/线性表/index.html","4fa7d402de44a2cd7b1025739e5578c5"],["/2023/07/30/排序/index.html","2bd1d46468fb26a3191d4797407e0858"],["/2023/07/31/C++模板/index.html","f32b9e10c75e5c4e9f77b2fd129aebf2"],["/2023/07/31/Java面向对象编程/index.html","44712e9140262ffe2010529ef2e6d587"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","6bc9b9a630ea167b0247fad8ee938f2c"],["/2023/08/08/查找(代码)/index.html","e25557a393069ae5525108ffe0639b6b"],["/2023/08/08/查找(全)/index.html","dd6586e1682d98704547ef357768e443"],["/2023/08/15/代理模式/index.html","f2881cf3392268a715433aec182fac68"],["/2023/08/18/Java网络/index.html","b2e82193d5fe1c60588f457143f2660c"],["/2023/08/20/MySQL/index.html","dab541805da43cd1fbf3b4f139aa7ae9"],["/2023/09/09/JDBC/index.html","dd14d765288a64923997dbfca3536945"],["/2023/09/09/JavaWeb/index.html","fbdc376cfb7aa4738338d26ebcfd977d"],["/2023/09/13/Junit/index.html","6b682edc9e218bc09e90298b26a931a8"],["/2023/09/13/软件测试大赛/index.html","34827e38634561014118c08f5116251f"],["/2023/09/22/HTML/index.html","23ac05ff6484ae42689b4227dbc51b31"],["/2023/09/22/JavaScript/index.html","5683cd765975bc2944d745b9a30f3c64"],["/2023/09/29/JMeter/index.html","6b8cfe082c1d05a8b30b3e5a2d3b93d3"],["/2023/10/24/Vue/index.html","a5328c35eb3040e1f4894415e2fb9b5d"],["/2023/12/04/HTML+CSS/index.html","840c01b32ad463c7fcd28822f36a108c"],["/about/index.html","13261742e5149923a444a058da6a3334"],["/archives/2023/05/index.html","8bb280017b8229e53924531cfba6b909"],["/archives/2023/06/index.html","df97809aabdc0711ef1a9ff574e4ac85"],["/archives/2023/07/index.html","ef36754f695575e30b415bed41a4224b"],["/archives/2023/08/index.html","966d105d18a31cbb80d8529c2443d26e"],["/archives/2023/09/index.html","56be5aaba796cff246167a507167a4ad"],["/archives/2023/10/index.html","ff1c23e9b19856e7c4dc0c1292520cb3"],["/archives/2023/12/index.html","abe5b4bdbbf1b4f484f28578dd5b5de7"],["/archives/2023/index.html","d46529141ee838cdc489e581dd94c981"],["/archives/2023/page/2/index.html","8e58e69157878e724b6ec383212f472b"],["/archives/2023/page/3/index.html","4ce38b1eb9b43809266c4cdf7a1695f4"],["/archives/index.html","75668530bde52c0d808a7514d0ea5e1e"],["/archives/page/2/index.html","0970336ac6f61ad70a80637afac297c8"],["/archives/page/3/index.html","6a5fc961c306fa4cd07a82d073c85aef"],["/categories/index.html","1f1afc9017b9ed902d6646cf05ba4b69"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","08e20d7e91f7078197aa9583f56dde88"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","b8cf4e97b140ef279d048e7d0126d7eb"],["/music/index.html","6b3384d90d152869f2bce47db2672763"],["/page/2/index.html","1e8087fb23caee231e97772b0c1af46a"],["/page/3/index.html","427d084aae5d9d47fe0e90f5e117fcbf"],["/sw-register.js","9867689ba53645014317a7851554467a"],["/tags/C/index.html","22b10c70753b9a90576c5b969dffb6ac"],["/tags/HTML/index.html","b184da9acbbd29e8dada535c6bf300bf"],["/tags/Hexo/index.html","6360b5561a9b171d59e182184633f316"],["/tags/Java/index.html","a80ac86981387ede5b2d9c877dac4274"],["/tags/SQL/index.html","83d2fbd6de6f15622dddb41336460344"],["/tags/index.html","d2be6c76a6d2e84424c48407cb38273a"],["/tags/前端/index.html","40749e6c9b2e9b455073e4d9b80482a4"],["/tags/数据结构/index.html","b0927098c415163f4bf665158f21bd9f"],["/tags/设计思想/index.html","ba81b59056b83e39f59dc3179ef6d873"],["/tags/软件测试/index.html","e63abbd4205258026ee5b23f07f387fb"],["/tags/软件测试、Web测试/index.html","efd1e9d597df332f144e2e6ccf25fa2a"]];
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
