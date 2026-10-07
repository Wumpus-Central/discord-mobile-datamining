// discord_app/modules/cache/CacheManager.native.tsx
import LoggerDefault from "../debug/Logger.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import KvCacheVersionDefault from "../app_database/modules/KvCacheVersion.tsx";
import CacheActionCreators from "CacheActionCreators.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import CacheStore from "CacheStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
let closure_5 = new LoggerDefault("CacheStore");
let closure_6 = 15 * DurationsDefault.Millis.MINUTE;
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
      },
    };
    return applyArgumentsResult;
  }
}
const prototype = CacheManager.prototype;
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const result = KvCacheVersionDefault.doesDatabaseVersionMatchJsConstants();
  result.then((result) => {
    if (!result) {
      CacheActionCreators.writeCaches();
    }
  });
};
prototype["handleConnectionClose"] = function handleConnectionClose() {
  return false;
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const AppStates = ConstantsIOS.AppStates;
  let isConnectedResult = (PlatformUtils.isAndroid() ? AppStates.BACKGROUND : AppStates.INACTIVE) === state.state;
  if (isConnectedResult) {
    isConnectedResult = GatewayConnectionStore.isConnected();
  }
  if (isConnectedResult) {
    CacheActionCreators.writeCaches();
    const tmpResult = CacheActionCreators;
  }
  return false;
};
prototype["handleWindowFocus"] = function handleWindowFocus(focused) {
  if (!focused.focused) {
    const _Date = Date;
    if (Date.now() - CacheStore.lastWriteTime > closure_6) {
      closure_5.verbose("Writing cache from window unfocus");
      CacheActionCreators.writeCaches();
    } else {
      closure_5.verbose("Not writing cache from window unfocus");
    }
  }
  return false;
};
const cacheManager = new CacheManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/cache/CacheManager.native.tsx");

export default cacheManager;
