/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","c15f8d1a112d62a49ab2fdec65eefb13"],["/2023/05/19/树/index.html","b738bfc085297a3093f6eaa5361ac5cd"],["/2023/05/22/图/index.html","e36e163fc5b27b11ae0b55d71f6027c0"],["/2023/06/23/IO流/index.html","fe2a028a4e17b1c2285a09f6e29bd028"],["/2023/06/23/思想/index.html","7e4d58c0484928a5ab14220c820f1099"],["/2023/07/20/线性表/index.html","542faf964ea8ce7422f998c388ff574d"],["/2023/07/30/排序/index.html","6ae25a3fba90633315f7575205d3aa03"],["/2023/07/31/C++模板/index.html","6acd6562691edc31713056e9ba81068c"],["/2023/07/31/Java面向对象编程/index.html","688141d4e3b61a47efb870e7537634eb"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","779c59acd6006cd647a6b36750d0a2e7"],["/2023/08/08/查找(代码)/index.html","d67639bd36b9eb630efca7a21410c9bb"],["/2023/08/08/查找(全)/index.html","2d72cc62f535ef087588f56d65bacd60"],["/2023/08/15/代理模式/index.html","0f8c431faf80a41e268b33cb8051ab6f"],["/2023/08/18/Java网络/index.html","a975a70593441a3f020c0b30ff180529"],["/2023/08/20/MySQL/index.html","a9fdf406cf75eadb0c55f1c1048e3d79"],["/2023/09/09/JDBC/index.html","217837cceba848cf04aae31ad9070cc8"],["/2023/09/09/JavaWeb/index.html","33093a792252d5ca8654bf5b7b8b7552"],["/2023/09/13/Junit/index.html","bf04777311b389c43528edcfe77dc341"],["/2023/09/13/软件测试大赛/index.html","8e54a804f1b57f838e3123bebc70e081"],["/2023/09/21/web自动化测试/index.html","b0cc82b5d6d19d75a1b2467be3c9c2cc"],["/2023/09/22/HTML/index.html","2a94d0861276a57c4326c3b802cca882"],["/2023/09/22/JavaScript/index.html","3acfe4b57ddd4a4bce6c7a6e4f91c386"],["/2023/09/24/不会的练习题/index.html","527419f35fcab2b89399b1f1d50f604e"],["/2023/09/29/JMeter/index.html","c311bf492c504a28c7fefeab7451d0da"],["/about/index.html","b6d537844972efd472dff55d2b4e0378"],["/archives/2023/05/index.html","6dfcb9b9ef8b68b2353db9e6ceaf5320"],["/archives/2023/06/index.html","e5e968973b99bd69bbe524d5f66182bf"],["/archives/2023/07/index.html","c05558e503845522ea5c24c891ec5a14"],["/archives/2023/08/index.html","4f0732c810b4b9e4ed2fae6372430149"],["/archives/2023/09/index.html","18fc9646b168ee812a53431b11c1ef78"],["/archives/2023/index.html","f28ca76d442cb1450eb1f9dd459c2e4b"],["/archives/2023/page/2/index.html","301887e5ccb00d8fc7579d596534890d"],["/archives/2023/page/3/index.html","c9ac9cfc1a2955c91689d5992bda47ac"],["/archives/index.html","3e57d746011e2dda608cf7d376b1fc64"],["/archives/page/2/index.html","816f3746416b2fa87a60381ed6949d08"],["/archives/page/3/index.html","42933c595cfd3da0d85b3742857c8386"],["/categories/index.html","b33a555ea2726a3ee8a44f6c34c92cff"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","92559a2b0891db40eb93891eb6ea3819"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","ff8e819d07fd5a2c9b63a88c07fe4960"],["/music/index.html","b3c3dea55f1f216b44ec69afdb37d3dd"],["/page/2/index.html","8efbf53a2c1c46d9f61fa9b9c92368b9"],["/page/3/index.html","c801ffdff0bc3d3f1995a53402fd7021"],["/sw-register.js","4503520068d58b31abb4625426fb53fa"],["/tags/C/index.html","350620a1cd87efa07134b701b1f3cf2b"],["/tags/HTML/index.html","797dbe4e491f198d29911566c16e5bad"],["/tags/Hexo/index.html","edc07369407f2eef3e61a63506f92a57"],["/tags/Java/index.html","3a37e6f13ae4273f0cdb070bf4425c17"],["/tags/SQL/index.html","e9fd899d6b7ecec313c982ad479f51aa"],["/tags/index.html","6622e8109b187ee0ade055e01f180413"],["/tags/数据结构/index.html","133ebbc2b5f5ec4f1ec4d3c2d0caf221"],["/tags/设计思想/index.html","f9187e46dc954d91f371de4c19cac4ee"],["/tags/软件测试/index.html","d8d11c8f79bc30f2d5ce29dcae1cf958"],["/tags/软件测试、Web测试/index.html","5712fa53f33804c029b0e018efb5bb87"]];
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
