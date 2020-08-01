var loadScriptCache = {};

function loadScript(url) {
    if (!loadScriptCache[url]){
        loadScriptCache[url] = new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = url;
            script.onload = function() {
                resolve();
            }
            script.onerror = function() {
                reject();
            };
            document.body.appendChild(script);
        });
    }
    return loadScriptCache[url];
}

if (typeof window !== 'undefined') window.loadScript = loadScript;
if (typeof self !== 'undefined') self.loadScript = loadScript;
if (typeof global !== 'undefined') global.loadScript = loadScript;
if (typeof module !== 'undefined') module.exports = loadScript;

