/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","c15f8d1a112d62a49ab2fdec65eefb13"],["/2023/05/19/树/index.html","49ca06bcb519a79c32989160ac0b2a51"],["/2023/05/22/图/index.html","9e41810adac8c06ec3ba89502859f2fc"],["/2023/06/23/IO流/index.html","2d6ced6107371c52070b1f05294c112c"],["/2023/06/23/思想/index.html","7e4d58c0484928a5ab14220c820f1099"],["/2023/07/20/线性表/index.html","9399c431b91c700e54ea4e820257d51d"],["/2023/07/30/排序/index.html","2dd4738d43495dd3b7a71e247cec0b52"],["/2023/07/31/C++模板/index.html","6acd6562691edc31713056e9ba81068c"],["/2023/07/31/Java面向对象编程/index.html","688141d4e3b61a47efb870e7537634eb"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","779c59acd6006cd647a6b36750d0a2e7"],["/2023/08/08/查找(代码)/index.html","d67639bd36b9eb630efca7a21410c9bb"],["/2023/08/08/查找(全)/index.html","2d72cc62f535ef087588f56d65bacd60"],["/2023/08/15/代理模式/index.html","6bc0721aea4a3603beff92270637df69"],["/2023/08/18/Java网络/index.html","a975a70593441a3f020c0b30ff180529"],["/2023/08/20/MySQL/index.html","a9fdf406cf75eadb0c55f1c1048e3d79"],["/2023/09/09/JDBC/index.html","d0479f8d19e1181104f81fb03186556e"],["/2023/09/09/JavaWeb/index.html","36667843b32a8290ef5ded4df1e4cb82"],["/2023/09/13/Junit/index.html","bf04777311b389c43528edcfe77dc341"],["/2023/09/13/软件测试大赛/index.html","8e54a804f1b57f838e3123bebc70e081"],["/2023/09/21/web自动化测试/index.html","b0cc82b5d6d19d75a1b2467be3c9c2cc"],["/2023/09/22/HTML/index.html","2a94d0861276a57c4326c3b802cca882"],["/2023/09/22/JavaScript/index.html","e9c7e4b5d3a4223698ceaba22d212b37"],["/2023/09/24/不会的练习题/index.html","77b128a1d3e1321fe5a28547b9d788ad"],["/2023/09/29/JMeter/index.html","c311bf492c504a28c7fefeab7451d0da"],["/about/index.html","6f968b85de5e525127a1729b244a91cc"],["/archives/2023/05/index.html","72844e7b68bc0cb6a33f7fdc88157bcc"],["/archives/2023/06/index.html","dcd679b94e72bc75b5cde33684312782"],["/archives/2023/07/index.html","c4a24ebabf5d275fd21922bc4be21283"],["/archives/2023/08/index.html","7599c23233aa2b192b0e78e4bd00b904"],["/archives/2023/09/index.html","bbc3361cf486771f4cee35516548fac1"],["/archives/2023/index.html","16c5123195091c6046fdbc15caaece04"],["/archives/2023/page/2/index.html","2480c7802c5e6e003789ae1ea667b58b"],["/archives/2023/page/3/index.html","2af7e7e760714da03364affe8fedc70f"],["/archives/index.html","835f1d65600fc56f74d7b5be4ccac7ba"],["/archives/page/2/index.html","e15d80e33c3fac4cd7ad706e827e58ab"],["/archives/page/3/index.html","e27b1ccd894a760bfeedc6f93d440bb8"],["/categories/index.html","937e1b8c10c5c6d2dd6e5bd574ff5191"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","a22c5b17503c91f96ba68d8508f0939d"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","30f09527cfe24868c087c4e2d826aa9d"],["/music/index.html","2474082a3a5a8f9ebdfff9ba9dc57d0a"],["/page/2/index.html","7f6a198d4ea224697717a3d409ae8463"],["/page/3/index.html","bdd23c4afb74b53ecb32faa3b5b2ba68"],["/sw-register.js","165020fb32bb269c4f866a7c6b39039d"],["/tags/C/index.html","67aa7a12d64191c148b2f2ba0b16cce5"],["/tags/HTML/index.html","6b83945a0d04764a85a19e15451bd523"],["/tags/Hexo/index.html","9a11792c2e4d19e887950c07c5269163"],["/tags/Java/index.html","8bd4a24b016f5cf1f95b14332887c3ce"],["/tags/SQL/index.html","fed17ba47384b08d1042e6f3303bb9ed"],["/tags/index.html","7d9a8f95f1ebb30b58b866a59ff68093"],["/tags/数据结构/index.html","cdd493f3d08c0ab8ec9b05725743ee81"],["/tags/设计思想/index.html","dd9ab0e3be6c3dfcd319af77a82d0f2d"],["/tags/软件测试/index.html","7d96e4f9ce8846743f8255fea64ddc8c"],["/tags/软件测试、Web测试/index.html","59bf01a53d5ee53a29484647b3064523"]];
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
