// discord_app/modules/a11y/native/AccessibilityCallManager.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import "initialize";
import set from "markAllUserIdListsStale";
import { dispatcher } from "../../../Dispatcher.tsx";

const require = arg1;
let set = new Set();
const map = new Map();
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
              const channelName = tmp4(4534).computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = tmp4(1363).AccessibilityAnnouncer;
                const intl = tmp4(1236).intl;
                obj = { callLocation: null };
                obj[0] = channelName;
                AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1236).t["Bm0A/p"], obj), "assertive");
              }
              const tmp4Result = tmp4(4534);
            }
          } else {
            const NativePhoneIntegrationEnabled = tmp4(4034).NativePhoneIntegrationEnabled;
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
                const channelName = tmp4(4534).computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
                if (null != channelName) {
                  obj2.add(channelId);
                  const AccessibilityAnnouncer = tmp4(1363).AccessibilityAnnouncer;
                  const intl = tmp4(1236).intl;
                  obj = { callLocation: null };
                  obj[0] = channelName;
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1236).t["Bm0A/p"], obj), "assertive");
                }
                const tmp4Result = tmp4(4534);
              }
            } else {
              const NativePhoneIntegrationEnabled = tmp4(4034).NativePhoneIntegrationEnabled;
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
  const subscription = dispatcher.subscribe("CALL_CREATE", this.handleCallCreate);
  const obj = dispatcher;
  const subscription1 = dispatcher.subscribe("CALL_UPDATE", this.handleCallUpdate);
  const obj2 = dispatcher;
  const subscription2 = dispatcher.subscribe("CALL_DELETE", this.handleCallDelete);
  const obj3 = dispatcher;
  const subscription3 = dispatcher.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcher.unsubscribe("CALL_CREATE", this.handleCallCreate);
  const obj = dispatcher;
  dispatcher.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
  const obj2 = dispatcher;
  dispatcher.unsubscribe("CALL_DELETE", this.handleCallDelete);
  const obj3 = dispatcher;
  dispatcher.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  map.clear();
  set.clear();
};
const accessibilityCallManager = new AccessibilityCallManager();
let result = set.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;