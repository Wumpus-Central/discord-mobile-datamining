// === Module 16866: handleConnectionOpen ===

// Module 16866 (handleConnectionOpen)
import timestampDefault from "timestamp" /* 3 */;
import set from "set" /* 500 */;
import setDefault from "set" /* 687 */;
import keys from "keys" /* 691 */;
import initializeDefault from "initialize" /* 5454 */;
import okAsyncDefault from "okAsync" /* 7367 */;
import _writeCaches from "_writeCaches" /* 15136 */;
import closure_3 from "_handleConnectionOpen" /* 5189 */;
import closure_4 from "handleClearCaches" /* 7189 */;

require = arg1;
let closure_5 = new timestampDefault("CacheStore");
let closure_6 = 15 * setDefault.Millis.MINUTE;
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
  result.then((arg0) => {
    if (!arg0) {
      callback(table[6]).writeCaches();
      const obj = callback(table[6]);
    }
  });
};
prototype["handleConnectionClose"] = function handleConnectionClose() {
  return false;
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const obj = set;
  const tmp = require;
  const AppStates = keys.AppStates;
  let isConnectedResult = (set.isAndroid() ? AppStates.BACKGROUND : AppStates.INACTIVE) === state.state;
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
      const obj = _writeCaches;
    } else {
      closure_5.verbose("Not writing cache from window unfocus");
    }
  }
  return false;
};
const cacheManager = new CacheManager();
const tmp2 = new timestampDefault("CacheStore");
let result = require("set").fileFinishedImporting("modules/cache/CacheManager.native.tsx");

export default cacheManager;