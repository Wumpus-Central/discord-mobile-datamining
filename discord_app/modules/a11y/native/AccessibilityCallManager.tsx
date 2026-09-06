// discord_app/modules/a11y/native/AccessibilityCallManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

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
        let obj = set;
        if (!set.has(channelId)) {
          if (!obj2.isIOS()) {
            const channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              const channelName = tmp4(4713).computeChannelName(channel, UserStore, RelationshipStore);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = tmp4(4411).AccessibilityAnnouncer;
                const intl = tmp4(1114).intl;
                obj = { callLocation: channelName };
                AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1114).t["Bm0A/p"], obj), "assertive");
              }
              const tmp4Result = tmp4(4713);
            }
          } else {
            const NativePhoneIntegrationEnabled = tmp4(1935).NativePhoneIntegrationEnabled;
          }
          obj2 = PlatformUtils;
        }
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      channelId = channelId.channelId;
      const id = AuthenticationStore.getId();
      let obj = map;
      let flag = map.get(channelId);
      if (flag == null) {
        flag = false;
      }
      const result = obj.set(channelId, tmp2);
      if (!flag) {
        if (tmp2) {
          if (!set.has(channelId)) {
            if (!obj3.isIOS()) {
              const channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                const channelName = tmp4(4713).computeChannelName(channel, UserStore, RelationshipStore);
                if (null != channelName) {
                  obj2.add(channelId);
                  const AccessibilityAnnouncer = tmp4(4411).AccessibilityAnnouncer;
                  const intl = tmp4(1114).intl;
                  obj = { callLocation: channelName };
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1114).t["Bm0A/p"], obj), "assertive");
                }
                const tmp4Result = tmp4(4713);
              }
            } else {
              const NativePhoneIntegrationEnabled = tmp4(1935).NativePhoneIntegrationEnabled;
            }
            obj3 = PlatformUtils;
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
