// === Module 9078: SocialSdkApplicationStore ===

// Module 9078 (SocialSdkApplicationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _slicedToArray from "module_32" /* 32 */;

const dependencyMap = {};
let c4 = 0;
const dependencyMap2 = {};
const dependencyMap3 = {};
const Store = initializeDefault.Store;
class SocialSdkApplicationStore extends Store {
}
SocialSdkApplicationStore.prototype["getApplicationIdForPID"] = function getApplicationIdForPID(pid) {
  const entries = Object.entries(closure_3);
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let tmp7 = _slicedToArray(tmp5[1], 2);
    if (tmp7[0] === pid) {
      obj.return();
      return tmp8;
    }
    continue;
  }
  tmp = dependencyMap3[pid];
};
SocialSdkApplicationStore.displayName = "SocialSdkApplicationStore";
const socialSdkApplicationStore = new SocialSdkApplicationStore(DispatcherDefault, {
  START_SESSION: function handleStartSession() {
    closure_3 = {};
    c4 = 0;
    closure_5 = {};
    closure_6 = {};
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    ({ socketId, pid, applicationId } = arg0);
    importDefault = undefined;
    let tmp = dependencyMap2[socketId];
    if (null == tmp) {
      const sum = c4 + 1;
      c4 = sum;
      dependencyMap2[socketId] = sum;
      tmp = sum;
    }
    let flag = false;
    if (null != pid) {
      importDefault = tmp6;
      let someResult = null != tmp6;
      if (someResult) {
        const _Object = Object;
        const keys = Object.keys(dependencyMap);
        someResult = keys.some((item) => closure_5[item] === closure_0);
      }
      flag = false;
      if (tmp10) {
        flag = tmp !== tmp6;
        dependencyMap3[pid] = tmp;
      }
      tmp10 = null == dependencyMap3[pid] || tmp >= dependencyMap3[pid] || !someResult;
    }
    if (null == applicationId) {
      if (!flag) {
        return false;
      }
    } else {
      const items = [pid, applicationId];
    }
    if (null != applicationId) {
      const items1 = [pid, applicationId];
      dependencyMap[socketId] = items1;
    }
  },
  RPC_APP_CONNECTED: function handleRPCAppConnected(socketId) {
    const sum = c4 + 1;
    c4 = sum;
    closure_5[socketId.socketId] = sum;
    return false;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(arg0) {
    if (null == dependencyMap[arg0.socketId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_detection/SocialSdkApplicationStore.tsx");

export default socialSdkApplicationStore;