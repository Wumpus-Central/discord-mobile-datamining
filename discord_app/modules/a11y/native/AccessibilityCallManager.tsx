// === Module 13818: set ===

// Module 13818 (set)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
const set = new Set();
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
              const channelName = callback(4984).computeChannelName(channel, closure_6, closure_5);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
                const intl = callback(1236).intl;
                obj = { callLocation: null };
                obj[0] = channelName;
                AccessibilityAnnouncer.announce(intl.formatToPlainString(callback(1236).t["Bm0A/p"], obj), "assertive");
              }
              const tmp4Result = callback(4984);
            }
          } else {
            const NativePhoneIntegrationEnabled = callback(4066).NativePhoneIntegrationEnabled;
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
                const channelName = callback(4984).computeChannelName(channel, closure_6, closure_5);
                if (null != channelName) {
                  set.add(channelId);
                  const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
                  const intl = callback(1236).intl;
                  obj = { callLocation: null };
                  obj[0] = channelName;
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(callback(1236).t["Bm0A/p"], obj), "assertive");
                }
                const tmp4Result = callback(4984);
              }
            } else {
              const NativePhoneIntegrationEnabled = callback(4066).NativePhoneIntegrationEnabled;
            }
            obj3 = callback(500);
          }
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
  const subscription1 = dispatcherDefault.subscribe("CALL_UPDATE", this.handleCallUpdate);
  const subscription2 = dispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const subscription3 = dispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("CALL_CREATE", this.handleCallCreate);
  dispatcherDefault.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
  dispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  dispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  map.clear();
  set.clear();
};
const accessibilityCallManager = new AccessibilityCallManager();
let result = require("obj132").fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;