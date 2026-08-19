// === Module 16537: handleConnectionOpen ===

// Module 16537 (handleConnectionOpen)
import timestampDefault from "timestamp" /* 3 */;
import obj132 from "obj132" /* 500 */;
import obj132Default from "obj132" /* 687 */;
import keys from "keys" /* 691 */;
import initializeDefault from "initialize" /* 5038 */;
import okAsyncDefault from "okAsync" /* 5402 */;
import _writeCaches from "_writeCaches" /* 14878 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import handleClearCaches from "handleClearCaches" /* 5067 */;

require = fn;
let closure_5 = new timestampDefault("CacheStore");
let closure_6 = 15 * obj132Default.Millis.MINUTE;
initializeDefault;
class CacheManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen,
      CONNECTION_CLOSED: applyArgumentsResult.handleConnectionClose,
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      WINDOW_FOCUS(arg0) {
            return applyArgumentsResult.handleWindowFocus(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = CacheManager.prototype;
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const result = okAsyncDefault.doesDatabaseVersionMatchJsConstants();
  result.then((result) => {
    if (!result) {
      callback(table[6]).writeCaches();
      const obj = callback(table[6]);
    }
  });
};
prototype["handleConnectionClose"] = function handleConnectionClose() {
  return false;
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const AppStates = keys.AppStates;
  let isConnectedResult = (obj132.isAndroid() ? AppStates.BACKGROUND : AppStates.INACTIVE) === state.state;
  if (isConnectedResult) {
    isConnectedResult = connected.isConnected();
  }
  if (isConnectedResult) {
    _writeCaches.writeCaches();
    const tmpResult = _writeCaches;
  }
  return false;
};
prototype["handleWindowFocus"] = function handleWindowFocus(focused) {
  if (!focused.focused) {
    const _Date = Date;
    if (Date.now() - lastWriteTime.lastWriteTime > closure_6) {
      closure_5.verbose("Writing cache from window unfocus");
      _writeCaches.writeCaches();
    } else {
      closure_5.verbose("Not writing cache from window unfocus");
    }
  }
  return false;
};
const cacheManager = new CacheManager();
const tmp2 = new timestampDefault("CacheStore");
let result = require("obj132").fileFinishedImporting("modules/cache/CacheManager.native.tsx");

export default cacheManager;