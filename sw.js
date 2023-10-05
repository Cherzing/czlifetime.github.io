/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/05/19/从零开始搭建个人博客/index.html","c15f8d1a112d62a49ab2fdec65eefb13"],["/2023/05/19/树/index.html","7d7887ae8d4508220bb869bfada49772"],["/2023/05/22/图/index.html","af2c7a1401b4a87dc2297a6b9e92e103"],["/2023/06/23/IO流/index.html","e4d435881393f002489145ff3aa39ddb"],["/2023/06/23/思想/index.html","7e4d58c0484928a5ab14220c820f1099"],["/2023/07/20/线性表/index.html","c32e613d22660c69e9248fcc27125304"],["/2023/07/30/排序/index.html","1374777b32c79607bbec4b2ceda00d47"],["/2023/07/31/C++模板/index.html","6acd6562691edc31713056e9ba81068c"],["/2023/07/31/Java面向对象编程/index.html","a84a2597e2070b3a46b2ff21ef589d5c"],["/2023/07/31/取值运算符和地址运算符的区别/index.html","779c59acd6006cd647a6b36750d0a2e7"],["/2023/08/08/查找(代码)/index.html","8ba39ed0aff438c7e2e186c25489cdfc"],["/2023/08/08/查找(全)/index.html","3f4e89a5799530fdcb9b069897f26ab1"],["/2023/08/15/代理模式/index.html","c4d124a33026a192dc6c8290683d8160"],["/2023/08/18/Java网络/index.html","a975a70593441a3f020c0b30ff180529"],["/2023/08/20/MySQL/index.html","a9fdf406cf75eadb0c55f1c1048e3d79"],["/2023/09/09/JDBC/index.html","62bdd5cff2a46fbb9159e0d81781eef5"],["/2023/09/09/JavaWeb/index.html","33093a792252d5ca8654bf5b7b8b7552"],["/2023/09/13/Junit/index.html","bf04777311b389c43528edcfe77dc341"],["/2023/09/13/软件测试大赛/index.html","a4f4eb5d7ffa545c95838c7fbe42bc52"],["/2023/09/21/web自动化测试/index.html","b0cc82b5d6d19d75a1b2467be3c9c2cc"],["/2023/09/22/HTML/index.html","2a94d0861276a57c4326c3b802cca882"],["/2023/09/22/JavaScript/index.html","e9c7e4b5d3a4223698ceaba22d212b37"],["/2023/09/24/不会的练习题/index.html","77b128a1d3e1321fe5a28547b9d788ad"],["/2023/09/29/JMeter/index.html","c311bf492c504a28c7fefeab7451d0da"],["/about/index.html","a5da3883ed753dc5cff685796ea89182"],["/archives/2023/05/index.html","4754331d9da8a0283a592ec30b6f9cfe"],["/archives/2023/06/index.html","4b9d0f4eb7d46c5d5e47a284f0f788aa"],["/archives/2023/07/index.html","6d724197d240eb1b2e10fe415fe3011a"],["/archives/2023/08/index.html","0f380e61b16efdf43cd5a27c5a2b95eb"],["/archives/2023/09/index.html","301649ce9f896836bd9a52377c11e3d6"],["/archives/2023/index.html","5631e9b9780100489af4e176f5883ce0"],["/archives/2023/page/2/index.html","aa41e6bf880974ce80c177b0234dc6aa"],["/archives/2023/page/3/index.html","ce91a5363d423ee94b90cf40b1a99477"],["/archives/index.html","d2bd1eb58ec1114069c689191a14ce90"],["/archives/page/2/index.html","cddcb503b4821467c736c7c83a5d1bca"],["/archives/page/3/index.html","d2d337b89437312670b1a1b81d677937"],["/categories/index.html","aa00b9bc72b636d689f9e0bcfc166e80"],["/css/index.css","e4f15b72267f9ac6ea54049bf64f41ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","cf2cb88db985ead43e89128e62917dc1"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","d6b47aca6c700e412ad249c31b1d129f"],["/index.html","f4231911e871a36b3e9a43e3e4643d38"],["/js/main.js","4802a927bf0b57f3859b3be8ed0b0351"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","a0c72193c089d7ef2c3d5359379c4516"],["/movies/index.html","b505c582abb8aa62c98c08d0ef54ae1f"],["/music/index.html","35a69d63d43cef1798f59ed7ffedfb1b"],["/page/2/index.html","728090e2c9b7b6f5466313ff9446fe43"],["/page/3/index.html","ab53b728418f5fc2648f2f6d726fe562"],["/sw-register.js","b1033e58dd1d212e894c10a0faee056a"],["/tags/C/index.html","8ca90d4ef79f81591a97471b643a6a57"],["/tags/HTML/index.html","1b66218a5bcea8e792b1bc75ff764da0"],["/tags/Hexo/index.html","9d5078517e126ba3953ec2748f5de219"],["/tags/Java/index.html","0a3dd90ab16b4b3ea8e86edeadf2797a"],["/tags/SQL/index.html","0dcbcfbfe39664be6eb952e96d4fb196"],["/tags/index.html","24de2343da095284ab4d3430f8fd4f9c"],["/tags/数据结构/index.html","60858e047885a236794d21d45e5c5c71"],["/tags/设计思想/index.html","abaa42bf745b2ef2e9d78d7b49bbf327"],["/tags/软件测试/index.html","f3e9ece3bd55b670233d5b81b49b3ff6"],["/tags/软件测试、Web测试/index.html","c40ddc61ee2d00908c1a2ad71f5e0c4e"]];
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
