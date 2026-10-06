// discord_app/modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx
import intl12 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import ForegroundServiceManagerDefault from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeMobileVoiceOverlayModule.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SpeakingStore from "../../../stores/SpeakingStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import MobileVoiceOverlayStore from "../../../stores/native/MobileVoiceOverlayStore.tsx";
import Constants from "../../../Constants.tsx";
import "AssetRegistry";
import AssetRegistry from "../../../../_runtime/12741_AssetRegistry.js";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let guildId, record, speaking, user;

let closure_14;
let closure_15;
let intl;
let intl10;
let intl11;
let intl2;
let intl3;
let intl4;
let intl5;
let intl6;
let intl7;
let intl8;
let intl9;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore.GUILD_VOCAL_CHANNELS_KEY;
({ AnalyticEvents: closure_14, Permissions: closure_15 } = Constants);
let items = [VoiceStateStore, RTCConnectionStore, MediaEngineStore];
const constants3 = {
  DISABLED: 0,
  [0]: "DISABLED",
  NOT_SHOWING: 1,
  [1]: "NOT_SHOWING",
  WAITING_FOR_SERVICE: 2,
  [2]: "WAITING_FOR_SERVICE",
  SHOWING: 3,
  [3]: "SHOWING",
};
let obj = {
  useSpeaker: intl.string(intl12.t.CVxXDM),
  mute: intl2.string(intl12.t.w4m945),
  disconnectFromVoice: intl3.string(intl12.t["/lEZpt"]),
  getInvite: intl4.string(intl12.t.JYzIWe),
  switchChannels: intl5.string(intl12.t.zJvWqU),
  openDiscord: intl6.string(intl12.t["G/Ez6p"]),
  inviteLinkCopied: intl7.string(intl12.t.OhctG7),
  channelSelect: intl8.string(intl12.t.r2ptsz),
  closeWindow: intl9.string(intl12.t.gaifwY),
  searchChannels: intl10.string(intl12.t.wM7uRI),
  noResults: intl11.string(intl12.t.wk3qsA),
};
intl = intl12.intl;
intl2 = intl12.intl;
intl3 = intl12.intl;
intl4 = intl12.intl;
intl5 = intl12.intl;
intl6 = intl12.intl;
intl7 = intl12.intl;
intl8 = intl12.intl;
intl9 = intl12.intl;
intl10 = intl12.intl;
intl11 = intl12.intl;
class MobileVoiceOverlayManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.currentVoiceChannelId = null;
    obj.trashedVoiceChannelId = null;
    obj.overlayState = constants3.DISABLED;
    obj.channelSelectorResults = [];
    obj.layoutTrashedSubscription = null;
    obj.channelQueryUpdateSubscription = null;
    obj.handleMobileVoiceOverlayStoreUpdate = function handleMobileVoiceOverlayStoreUpdate() {
      if (MobileVoiceOverlayStore.getEnabled()) {
        obj.handleOverlayEnable();
      } else {
        const result = obj.unsubscribeFromVoiceStateStoreUpdates();
        const result1 = obj.unsubscribeFromNativeEvents();
        obj.overlayState = constants.DISABLED;
        if (obj.isOverlayShowing()) {
          const obj2 = react_nativeDefault;
          if (obj2 != null) {
            obj2.hideOverlay();
          }
        }
      }
    };
    obj.handleOverlayEnable = function handleOverlayEnable() {
      obj = react_nativeDefault;
      if (obj != null) {
        const enableOverlayResult = obj.enableOverlay();
        const nextPromise = enableOverlayResult.then((result) => {
          const tmp = result;
          if (tmp) {
            result = closure_1_0.subscribeToVoiceStateStoreUpdates();
            const result1 = closure_1_0.subscribeToNativeEvents();
            closure_1_0.overlayState = constants.NOT_SHOWING;
          } else {
            obj = MobileVoiceOverlayActionCreatorsDefault;
            obj.setEnabled(false);
            closure_1_0.overlayState = constants.DISABLED;
          }
        });
        nextPromise.catch(() => {
          obj = MobileVoiceOverlayActionCreatorsDefault;
          obj.setEnabled(false);
          closure_1_0.overlayState = constants.DISABLED;
        });
      }
    };
    obj.subscribeToVoiceStateStoreUpdates = function subscribeToVoiceStateStoreUpdates() {
      if (!obj.isSubscribedToVoiceStateStoreUpdates()) {
        const item = items.forEach((addChangeListener) => {
          addChangeListener.addChangeListener(obj.handleOverlayUIStoreUpdate);
        });
      }
    };
    obj.unsubscribeFromVoiceStateStoreUpdates = function unsubscribeFromVoiceStateStoreUpdates() {
      if (obj.isSubscribedToVoiceStateStoreUpdates()) {
        const item = items.forEach((removeChangeListener) => {
          removeChangeListener.removeChangeListener(obj.handleOverlayUIStoreUpdate);
        });
      }
    };
    obj.isSubscribedToVoiceStateStoreUpdates = function isSubscribedToVoiceStateStoreUpdates() {
      return (
        null != items.find((_changeCallbacks) => _changeCallbacks._changeCallbacks.has(obj.handleOverlayUIStoreUpdate))
      );
    };
    obj.subscribeToNativeEvents = function subscribeToNativeEvents() {
      obj = react_nativeDefault;
      obj.layoutTrashedSubscription = obj.onLayoutTrashed(obj.handleLayoutTrashed);
      const obj2 = react_nativeDefault;
      obj.channelQueryUpdateSubscription = obj2.onChannelQueryUpdate(obj.handleChannelQueryUpdate);
    };
    obj.unsubscribeFromNativeEvents = function unsubscribeFromNativeEvents() {
      const layoutTrashedSubscription = obj.layoutTrashedSubscription;
      if (layoutTrashedSubscription != null) {
        layoutTrashedSubscription.remove();
      }
      const channelQueryUpdateSubscription = obj.channelQueryUpdateSubscription;
      if (channelQueryUpdateSubscription != null) {
        channelQueryUpdateSubscription.remove();
      }
    };
    obj.handleOverlayUIStoreUpdate = function handleOverlayUIStoreUpdate() {
      if (obj.overlayState !== constants.DISABLED) {
        const currentVoiceChannelId = obj.getVoiceConnectedGuildAndChannel().currentVoiceChannelId;
        if (currentVoiceChannelId !== obj.currentVoiceChannelId) {
          obj.currentVoiceChannelId = currentVoiceChannelId;
          obj.trashedVoiceChannelId = null;
        }
        if (null != currentVoiceChannelId) {
          if (currentVoiceChannelId !== obj.trashedVoiceChannelId) {
            const overlayState = obj.overlayState;
            if (constants.WAITING_FOR_SERVICE !== overlayState) {
              if (constants.NOT_SHOWING === overlayState) {
                const obj2 = ForegroundServiceManagerDefault;
                const result = obj2.isForegroundServiceRunning((arg0) => {
                  const tmp = arg0;
                  if (tmp) {
                    obj.showOverlay();
                  } else {
                    obj.overlayState = constants.NOT_SHOWING;
                  }
                });
                obj.overlayState = constants.WAITING_FOR_SERVICE;
              } else if (constants.SHOWING === overlayState) {
                obj.updateOverlayUI();
              } else {
                const overlayState2 = obj.overlayState;
              }
            }
          }
        }
        if (obj.isOverlayShowing()) {
          obj.hideOverlay();
        }
      }
    };
    obj.updateOverlayUI = function updateOverlayUI() {
      let currentGuildId;
      let currentVoiceChannelId;
      let obj5;
      let str2;
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (null != id) {
        const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
        ({ currentGuildId, currentVoiceChannelId } = voiceConnectedGuildAndChannel);
        const channel = ChannelStore.getChannel(currentVoiceChannelId);
        if (null != currentVoiceChannelId) {
          if (null != channel) {
            const overlayUser = obj.getOverlayUser(id);
            if (null != overlayUser) {
              const _Object = Object;
              const keys = Object.keys(VoiceStateStore.getVoiceStatesForChannel(currentVoiceChannelId));
              let tmp10 = null;
              if (overlayUser.speaking) {
                tmp10 = overlayUser;
              } else {
                for (const item10014 of keys) {
                  let overlayUser1 = obj.getOverlayUser(item10014);
                  speaking = undefined;
                  if (overlayUser1 != null) {
                    speaking = overlayUser1.speaking;
                  }
                  if (speaking) {
                    tmp10 = overlayUser1;
                    obj.return();
                    break;
                  }
                  break;
                }
              }
              if (null == tmp10) {
                tmp10 = overlayUser;
              }
              items = [tmp10];
              if (tmp10.userId !== overlayUser.userId) {
                items.push(overlayUser);
              }
              const iter = keys[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp19 = nextResult;
                if (nextResult !== id) {
                  let userId;
                  if (tmp10 != null) {
                    userId = tmp10.userId;
                  }
                  if (tmp19 !== userId) {
                    let overlayUser2 = obj.getOverlayUser(tmp19);
                    if (null != overlayUser2) {
                      let arr2 = items.push(tmp27);
                      if (items.length >= 3) {
                        iter.return();
                        break;
                      }
                      if (obj.overlayState !== constants.SHOWING) {
                        let str = "";
                        let result = obj.refreshChannelSelectorResults("");
                      }
                      obj.currentVoiceChannelId = currentVoiceChannelId;
                      let tmp38 = react_nativeDefault;
                      if (tmp38 != null) {
                        let obj4 = {
                          users: items,
                          channelName: obj5.computeChannelName(channel, UserStore, RelationshipStore),
                          guildName: str2,
                          guildId: currentGuildId,
                          channelId: currentVoiceChannelId,
                          extraUsers: keys.length - items.length,
                          deafened: MediaEngineStore.isSelfDeaf(),
                          muted: MediaEngineStore.isSelfMute(),
                          connectionQuality: RTCConnectionStore.getQuality(),
                          canGenerateInvite: PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel),
                          channelSelectorResults: obj.channelSelectorResults,
                        };
                        let setData = tmp38.setData;
                        obj5 = useChannelName;
                        let guild = GuildStore.getGuild(currentGuildId);
                        str2 = undefined;
                        if (guild != null) {
                          str2 = guild.name;
                        }
                        if (str2 == null) {
                          str2 = "";
                        }
                        let setDataResult = setData(obj4);
                      }
                    }
                  }
                }
                continue;
              }
            }
          }
        }
      }
    };
    obj.getVoiceConnectedGuildAndChannel = function getVoiceConnectedGuildAndChannel() {
      let channelId;
      obj = guildId;
      guildId = guildId.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      const obj2 = { currentGuildId: guildId, currentVoiceChannelId: channelId };
      channelId = obj.getChannelId();
      if (channelId == null) {
        channelId = null;
      }
      return obj2;
    };
    obj.refreshChannelSelectorResults = function refreshChannelSelectorResults(query) {
      let currentGuildId = null;
      if (0 === query.length) {
        currentGuildId = obj.getVoiceConnectedGuildAndChannel().currentGuildId;
      }
      obj = AutocompleteUtilsDefault;
      let obj2 = {
        query,
        guildId: currentGuildId,
        limit: 15,
        fuzzy: true,
        filter(id) {
          const tmp = id.id !== obj.currentVoiceChannelId && !id.isGuildStageVoice();
          return tmp;
        },
        type: GUILD_VOCAL_CHANNELS_KEY,
        allowEmptyQueries: true,
      };
      const queryChannelsResult = obj.queryChannels(obj2);
      obj.channelSelectorResults = queryChannelsResult.map((record) => {
        let obj2;
        let str;
        let str2;
        record = record.record;
        obj = {
          channelId: record.id,
          guildId: record.guild_id,
          channelName: obj2.computeChannelName(record, user, closure_1_9),
          guildName: str,
          categoryName: str2,
        };
        obj2 = closure_1_0(closure_1_2[25]);
        guild = guild.getGuild(record.guild_id);
        str = undefined;
        if (guild != null) {
          str = guild.name;
        }
        if (str == null) {
          str = "";
        }
        channel = channel.getChannel(record.parent_id);
        str2 = "";
        if (null != channel) {
          const tmpResult = closure_1_0(closure_1_2[25]);
          str2 = tmpResult.computeChannelName(channel, user, closure_1_9);
        }
        return obj;
      });
    };
    obj.showOverlay = function showOverlay() {
      const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
      const currentGuildId = voiceConnectedGuildAndChannel.currentGuildId;
      const channel = ChannelStore.getChannel(voiceConnectedGuildAndChannel.currentVoiceChannelId);
      const rTCConnectionId = RTCConnectionStore.getRTCConnectionId();
      const track = AnalyticsUtilsDefault.track;
      const MOBILE_OVERLAY_OPENED = constants.MOBILE_OVERLAY_OPENED;
      const obj2 = { type: "voice", rtc_connection_id: rTCConnectionId };
      AnalyticsUtilsDefault;
      const obj3 = AppAnalyticsUtils;
      const merged = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
      const obj4 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(currentGuildId));
      track(MOBILE_OVERLAY_OPENED, obj2);
      const obj5 = react_nativeDefault;
      if (obj5 != null) {
        obj5.showOverlay(obj);
      }
      obj.updateOverlayUI();
      obj.overlayState = constants.SHOWING;
    };
    obj.hideOverlay = function hideOverlay() {
      const rTCConnectionId = RTCConnectionStore.getRTCConnectionId();
      obj = AnalyticsUtilsDefault;
      obj.track(constants.MOBILE_OVERLAY_CLOSED, { type: "voice", rtc_connection_id: rTCConnectionId });
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants.MOBILE_OVERLAY_CLOSED, {});
      const obj3 = react_nativeDefault;
      if (obj3 != null) {
        obj3.hideOverlay();
      }
      obj.overlayState = constants.NOT_SHOWING;
    };
    obj.isOverlayShowing = function isOverlayShowing() {
      return obj.overlayState === constants.SHOWING || obj.overlayState === tmp.WAITING_FOR_SERVICE;
    };
    obj.getOverlayUser = function getOverlayUser(id) {
      user = user.getUser(id);
      if (null == user) {
        return null;
      } else {
        obj = { userId: id, avatar: user.avatar, speaking: speaking.isSpeaking(id), discriminator: user.discriminator };
        return obj;
      }
    };
    obj.handleLayoutTrashed = function handleLayoutTrashed() {
      obj.trashedVoiceChannelId = obj.currentVoiceChannelId;
      const result = obj.handleOverlayUIStoreUpdate();
    };
    obj.handleChannelQueryUpdate = function handleChannelQueryUpdate(query) {
      const result = obj.refreshChannelSelectorResults(query);
      const result1 = obj.handleOverlayUIStoreUpdate();
    };
    return obj;
  }
  initialize() {
    const self = this;
    if (MobileVoiceOverlayStore.getEnabled()) {
      self.handleOverlayEnable();
    }
    MobileVoiceOverlayStore.addChangeListener(self.handleMobileVoiceOverlayStoreUpdate);
  }
  terminate() {
    MobileVoiceOverlayStore.removeChangeListener(this.handleMobileVoiceOverlayStoreUpdate);
    const result = this.unsubscribeFromVoiceStateStoreUpdates();
    const result1 = this.unsubscribeFromNativeEvents();
  }
}
const prototype = MobileVoiceOverlayManager.prototype;
let closure_19 = new MobileVoiceOverlayManager();
class MobileVoiceOverlayLifecycleManager extends LifecycleManager {
  _initialize() {
    closure_19.initialize();
  }
  _terminate() {
    closure_19.terminate();
  }
}
const prototype2 = MobileVoiceOverlayLifecycleManager.prototype;
const mobileVoiceOverlayLifecycleManager = new MobileVoiceOverlayLifecycleManager();
let result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx");

export default mobileVoiceOverlayLifecycleManager;
