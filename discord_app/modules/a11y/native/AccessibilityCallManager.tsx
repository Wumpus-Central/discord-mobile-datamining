// === Module 14540: AccessibilityCallManager ===

// Module 14540 (AccessibilityCallManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import UserSettings from "UserSettings" /* 1936 */;
import shared from "shared" /* 4491 */;
import useChannelName from "useChannelName" /* 4792 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;
import LifecycleManager from "LifecycleManager" /* 1899 */;

require = fn;
const set = new Set();
const map = new Map();
class AccessibilityCallManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      const id = AuthenticationStore.getId();
      const result = map.set(channelId, tmp2);
      if (null != id && id in channelId.ongoingRings) {
        if (!set.has(channelId)) {
          if (!obj2.isIOS()) {
            const channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
              if (null != channelName) {
                set.add(channelId);
                const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                const intl = util.intl;
                const obj3 = { callLocation: channelName };
                AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["Bm0A/p"], obj3), "assertive");
              }
              const tmp4Result = useChannelName;
            }
          } else {
            const NativePhoneIntegrationEnabled = UserSettings.NativePhoneIntegrationEnabled;
          }
          obj2 = PlatformUtils;
        }
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      channelId = channelId.channelId;
      const id = AuthenticationStore.getId();
      let flag = map.get(channelId);
      if (flag == null) {
        flag = false;
      }
      const result = map.set(channelId, tmp2);
      if (!flag) {
        if (tmp2) {
          if (!set.has(channelId)) {
            if (!obj3.isIOS()) {
              const channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
                if (null != channelName) {
                  set.add(channelId);
                  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                  const intl = util.intl;
                  const obj4 = { callLocation: channelName };
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["Bm0A/p"], obj4), "assertive");
                }
                const tmp4Result = useChannelName;
              }
            } else {
              const NativePhoneIntegrationEnabled = UserSettings.NativePhoneIntegrationEnabled;
            }
            obj3 = PlatformUtils;
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
      map.delete(channelId);
      set.delete(channelId);
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      map.clear();
      set.clear();
    };
    return applyArgumentsResult;
  }
}
const prototype = AccessibilityCallManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("CALL_CREATE", this.handleCallCreate);
  const subscription1 = DispatcherDefault.subscribe("CALL_UPDATE", this.handleCallUpdate);
  const subscription2 = DispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const subscription3 = DispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CALL_CREATE", this.handleCallCreate);
  DispatcherDefault.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
  DispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  map.clear();
  set.clear();
};
const accessibilityCallManager = new AccessibilityCallManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;