// discord_app/modules/a11y/native/AccessibilityCallManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import intl2 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import shared from "../../../design/shared.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const set = new Set();
const map = new Map();
class AccessibilityCallManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      const ongoingRings = channelId.ongoingRings;
      const id = AuthenticationStore.getId();
      const result = map.set(channelId, tmp2);
      if (null != id && id in ongoingRings) {
        if (!set.has(channelId)) {
          const obj2 = PlatformUtils;
          if (!obj2.isIOS()) {
            const channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              const tmp4Result = useChannelName;
              const channelName = tmp4Result.computeChannelName(channel, UserStore, RelationshipStore);
              if (null != channelName) {
                set.add(channelId);
                const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = intl2.intl;
                const obj3 = { callLocation: channelName };
                announce(intl.formatToPlainString(intl2.t["Bm0A/p"], obj3), "assertive");
              }
            }
          } else {
            const NativePhoneIntegrationEnabled = UserSettings.NativePhoneIntegrationEnabled;
          }
        }
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      channelId = channelId.channelId;
      const ongoingRings = channelId.ongoingRings;
      const id = AuthenticationStore.getId();
      let flag = map.get(channelId);
      if (flag == null) {
        flag = false;
      }
      const result = map.set(channelId, tmp2);
      if (!flag) {
        if (null != id && id in ongoingRings) {
          if (!set.has(channelId)) {
            const obj3 = PlatformUtils;
            if (!obj3.isIOS()) {
              const channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                const tmp4Result = useChannelName;
                const channelName = tmp4Result.computeChannelName(channel, UserStore, RelationshipStore);
                if (null != channelName) {
                  set.add(channelId);
                  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = intl2.intl;
                  const obj4 = { callLocation: channelName };
                  announce(intl.formatToPlainString(intl2.t["Bm0A/p"], obj4), "assertive");
                }
              }
            } else {
              const NativePhoneIntegrationEnabled = UserSettings.NativePhoneIntegrationEnabled;
            }
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
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CALL_CREATE", this.handleCallCreate);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("CALL_UPDATE", this.handleCallUpdate);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("CALL_DELETE", this.handleCallDelete);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CALL_CREATE", this.handleCallCreate);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("CALL_DELETE", this.handleCallDelete);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    map.clear();
    set.clear();
  }
}
const prototype = AccessibilityCallManager.prototype;
const accessibilityCallManager = new AccessibilityCallManager();
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;
