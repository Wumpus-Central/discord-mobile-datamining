// === Module 13984: set ===

// Module 13984 (set)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4626 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "markAllUserIdListsStale" /* 4098 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import set from "set" /* 2 */;

const require = arg1;
let set = new Set();
const map = new Map();
initializeDefault;
class AccessibilityCallManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      const id = store.getId();
      const result = store3.set(channelId, tmp2);
      if (null != id && id in channelId.ongoingRings) {
        let obj = set;
        if (!set.has(channelId)) {
          if (!obj2.isIOS()) {
            const channel = store2.getChannel(channelId);
            if (null != channel) {
              const channelName = tmp4(4638).computeChannelName(channel, closure_6, closure_5);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = tmp4(1363).AccessibilityAnnouncer;
                const intl = tmp4(1236).intl;
                obj = { callLocation: null };
                obj[0] = channelName;
                AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1236).t["Bm0A/p"], obj), "assertive");
              }
              const tmp4Result = tmp4(4638);
            }
          } else {
            const NativePhoneIntegrationEnabled = tmp4(4134).NativePhoneIntegrationEnabled;
          }
          obj2 = callback(500);
        }
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      channelId = channelId.channelId;
      const id = store.getId();
      let obj = store3;
      let flag = store3.get(channelId);
      if (flag == null) {
        flag = false;
      }
      const result = obj.set(channelId, tmp2);
      if (!flag) {
        if (tmp2) {
          if (!set.has(channelId)) {
            if (!obj3.isIOS()) {
              const channel = store2.getChannel(channelId);
              if (null != channel) {
                const channelName = tmp4(4638).computeChannelName(channel, closure_6, closure_5);
                if (null != channelName) {
                  obj2.add(channelId);
                  const AccessibilityAnnouncer = tmp4(1363).AccessibilityAnnouncer;
                  const intl = tmp4(1236).intl;
                  obj = { callLocation: null };
                  obj[0] = channelName;
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1236).t["Bm0A/p"], obj), "assertive");
                }
                const tmp4Result = tmp4(4638);
              }
            } else {
              const NativePhoneIntegrationEnabled = tmp4(4134).NativePhoneIntegrationEnabled;
            }
            obj3 = callback(500);
          }
          obj2 = set;
        }
      }
      if (flag) {
        flag = !tmp2;
      }
      if (flag) {
        set.delete(channelId);
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      channelId = channelId.channelId;
      store3.delete(channelId);
      set.delete(channelId);
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      store3.clear();
      set.clear();
    };
    return applyArgumentsResult;
  }
}
const prototype = AccessibilityCallManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("CALL_CREATE", this.handleCallCreate);
  const obj = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("CALL_UPDATE", this.handleCallUpdate);
  const obj2 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const obj3 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("CALL_CREATE", this.handleCallCreate);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  map.clear();
  set.clear();
};
const accessibilityCallManager = new AccessibilityCallManager();
let result = set.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;