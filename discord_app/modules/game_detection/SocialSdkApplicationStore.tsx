// discord_app/modules/game_detection/SocialSdkApplicationStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_5, closure_6, importDefault;

let closure_3 = {};
let sum = 0;
const hasOwnProperty = {};
const metroRequire = {};
const Store = get_initializedDefault.Store;
class SocialSdkApplicationStore extends Store {
  getApplicationIdForPID(pid) {
    const tmp = closure_6[pid];
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
  }
}
const prototype = SocialSdkApplicationStore.prototype;
SocialSdkApplicationStore.displayName = "SocialSdkApplicationStore";
let obj = {
  START_SESSION: function handleStartSession() {
    closure_3 = {};
    sum = 0;
    closure_5 = {};
    closure_6 = {};
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(arg0) {
    let applicationId;
    let closure_0;
    let pid;
    let socketId;
    ({ socketId, pid, applicationId } = arg0);
    importDefault = undefined;
    let tmp = closure_5[socketId];
    if (null == tmp) {
      sum = sum + 1;
      closure_5[socketId] = sum;
      tmp = sum;
    }
    let flag = false;
    if (null != pid) {
      importDefault = tmp6;
      let someResult = null != tmp6;
      if (someResult) {
        const _Object = Object;
        const keys = Object.keys(closure_3);
        someResult = keys.some((item) => closure_5[item] === closure_0);
      }
      flag = false;
      const tmp10 = null == closure_6[pid] || tmp >= closure_6[pid] || !someResult;
      if (tmp10) {
        flag = tmp !== tmp6;
        closure_6[pid] = tmp;
      }
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
      closure_3[socketId] = items1;
    }
  },
  RPC_APP_CONNECTED: function handleRPCAppConnected(socketId) {
    sum = sum + 1;
    closure_5[socketId.socketId] = sum;
    return false;
  },
  RPC_APP_DISCONNECTED: function handleRPCAppDisconnected(socketId) {
    socketId = socketId.socketId;
    if (null == closure_3[socketId]) {
      return false;
    } else {
      delete closure_3[socketId];
    }
  },
};
const socialSdkApplicationStore = new SocialSdkApplicationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_detection/SocialSdkApplicationStore.tsx");

export default socialSdkApplicationStore;
