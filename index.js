var loadScriptCache = {};

function loadScript(url, options) {
    var debug = options && options.debug || false;
    if (debug) console.log("[easy-script-loader] starting to load", url);
    if (!loadScriptCache[url]){
        loadScriptCache[url] = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = url;
            script.onload = function() {
                if (debug) console.log("[easy-script-loader] successfully loaded", url);
                resolve();
            }
            script.onerror = function() {
                if (debug) console.error("[easy-script-loader] failed to load", url);
                reject();
            };
            if (document.body) {
                document.body.appendChild(script);
            } else {
                document.head.appendChild(script);
            }
        });
    }
    return loadScriptCache[url];
}

if (typeof window !== 'undefined') window.loadScript = loadScript;
if (typeof self !== 'undefined') self.loadScript = loadScript;
if (typeof global !== 'undefined') global.loadScript = loadScript;
if (typeof module !== 'undefined') module.exports = loadScript;

