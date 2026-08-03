import _handleConnectionOpen from "_handleConnectionOpen";
import handleClearCaches from "handleClearCaches";
import "initialize";

let require = arg1;
let c5 = new require("set")("CacheStore");
let closure_6 = 15 * require("set").Millis.MINUTE;
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
  const result = importDefault(5944).doesDatabaseVersionMatchJsConstants();
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
  const obj = require(500) /* set */;
  const tmp = require;
  const AppStates = require(691) /* keys */.AppStates;
  let isConnectedResult = (require(500) /* set */.isAndroid() ? AppStates.BACKGROUND : AppStates.INACTIVE) === state.state;
  if (isConnectedResult) {
    isConnectedResult = connected.isConnected();
  }
  if (isConnectedResult) {
    tmp(14550).writeCaches();
    const tmpResult = tmp(14550);
  }
  return false;
};
prototype["handleWindowFocus"] = function handleWindowFocus(focused) {
  if (!focused.focused) {
    const _Date = Date;
    if (Date.now() - lastWriteTime.lastWriteTime > closure_6) {
      tmp2.verbose("Writing cache from window unfocus");
      require(14550) /* _writeCaches */.writeCaches();
      const obj = require(14550) /* _writeCaches */;
    } else {
      tmp2.verbose("Not writing cache from window unfocus");
    }
  }
  return false;
};
const cacheManager = new CacheManager();
const tmp2 = new require("set")("CacheStore");
let result = require("timestamp").fileFinishedImporting("modules/cache/CacheManager.native.tsx");

export default cacheManager;