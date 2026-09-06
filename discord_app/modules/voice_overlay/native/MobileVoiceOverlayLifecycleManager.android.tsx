// discord_app/modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import ForegroundServiceManagerDefault from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators.tsx";
import NativeMobileVoiceOverlayModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeMobileVoiceOverlayModule.tsx";
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
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, Permissions: closure_15 } = Constants);
fn(14529);
fn(14530);
fn(14531);
fn(14532);
fn(6992);
fn(13787);
fn(14533);
fn(14534);
const registerAsset = fn(8623);
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
  useSpeaker: null,
  mute: null,
  disconnectFromVoice: null,
  getInvite: null,
  switchChannels: null,
  openDiscord: null,
  inviteLinkCopied: null,
  channelSelect: null,
  closeWindow: null,
  searchChannels: null,
  noResults: null,
};
const intl = fn(1114).intl;
obj.useSpeaker = intl.string(fn(1114).t.CVxXDM);
const intl2 = fn(1114).intl;
obj.mute = intl2.string(fn(1114).t.w4m945);
const intl3 = fn(1114).intl;
obj.disconnectFromVoice = intl3.string(fn(1114).t["/lEZpt"]);
const intl4 = fn(1114).intl;
obj.getInvite = intl4.string(fn(1114).t.JYzIWe);
const intl5 = fn(1114).intl;
obj.switchChannels = intl5.string(fn(1114).t.zJvWqU);
const intl6 = fn(1114).intl;
obj.openDiscord = intl6.string(fn(1114).t["G/Ez6p"]);
const intl7 = fn(1114).intl;
obj.inviteLinkCopied = intl7.string(fn(1114).t.OhctG7);
const intl8 = fn(1114).intl;
obj.channelSelect = intl8.string(fn(1114).t.r2ptsz);
const intl9 = fn(1114).intl;
obj.closeWindow = intl9.string(fn(1114).t.gaifwY);
const intl10 = fn(1114).intl;
obj.searchChannels = intl10.string(fn(1114).t.wM7uRI);
const intl11 = fn(1114).intl;
obj.noResults = intl11.string(fn(1114).t.wk3qsA);
class MobileVoiceOverlayManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.currentVoiceChannelId = null;
    obj.trashedVoiceChannelId = null;
    obj.overlayState = closure_17.DISABLED;
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
          const obj2 = NativeMobileVoiceOverlayModuleDefault;
          if (obj2 != null) {
            obj2.hideOverlay();
          }
        }
      }
    };
    obj.handleOverlayEnable = function handleOverlayEnable() {
      obj = NativeMobileVoiceOverlayModuleDefault;
      if (obj != null) {
        const enableOverlayResult = obj.enableOverlay();
        obj
          .enableOverlay()
          .then((result) => {
            if (result) {
              result = obj.subscribeToVoiceStateStoreUpdates();
              const result1 = obj.subscribeToNativeEvents();
              obj.overlayState = constants.NOT_SHOWING;
            } else {
              MobileVoiceOverlayActionCreatorsDefault.setEnabled(false);
              obj.overlayState = constants.DISABLED;
              obj = MobileVoiceOverlayActionCreatorsDefault;
            }
          })
          .catch(() => {
            MobileVoiceOverlayActionCreatorsDefault.setEnabled(false);
            obj.overlayState = constants.DISABLED;
          });
        const nextPromise = obj.enableOverlay().then((result) => {
          if (result) {
            result = obj.subscribeToVoiceStateStoreUpdates();
            const result1 = obj.subscribeToNativeEvents();
            obj.overlayState = constants.NOT_SHOWING;
          } else {
            MobileVoiceOverlayActionCreatorsDefault.setEnabled(false);
            obj.overlayState = constants.DISABLED;
            obj = MobileVoiceOverlayActionCreatorsDefault;
          }
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
      obj = NativeMobileVoiceOverlayModuleDefault;
      obj.layoutTrashedSubscription = obj.onLayoutTrashed(obj.handleLayoutTrashed);
      obj.channelQueryUpdateSubscription = NativeMobileVoiceOverlayModuleDefault.onChannelQueryUpdate(
        obj.handleChannelQueryUpdate,
      );
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
            if (tmp.WAITING_FOR_SERVICE !== overlayState) {
              if (tmp.NOT_SHOWING === overlayState) {
                const result = ForegroundServiceManagerDefault.isForegroundServiceRunning((arg0) => {
                  if (arg0) {
                    obj.showOverlay();
                  } else {
                    obj.overlayState = constants.NOT_SHOWING;
                  }
                });
                obj.overlayState = tmp.WAITING_FOR_SERVICE;
              } else if (tmp.SHOWING === overlayState) {
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
            const overlayUser = obj4.getOverlayUser(id);
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
                      let arr = items.push(tmp27);
                      if (items.length >= 3) {
                        iter.return();
                        break;
                      }
                      let tmp31 = obj;
                      let obj2 = obj;
                      if (obj.overlayState !== constants.SHOWING) {
                        let str = "";
                        let result = obj2.refreshChannelSelectorResults("");
                      }
                      obj2.currentVoiceChannelId = currentVoiceChannelId;
                      let obj3 = NativeMobileVoiceOverlayModuleDefault;
                      if (obj3 != null) {
                        obj = {
                          users: items,
                          channelName: null,
                          guildName: null,
                          guildId: null,
                          channelId: null,
                          extraUsers: null,
                          deafened: null,
                          muted: null,
                          connectionQuality: null,
                          canGenerateInvite: null,
                          channelSelectorResults: null,
                        };
                        let obj6 = useChannelName;
                        obj.channelName = obj6.computeChannelName(channel, UserStore, RelationshipStore);
                        let guild = GuildStore.getGuild(currentGuildId);
                        let str2;
                        if (guild != null) {
                          str2 = guild.name;
                        }
                        if (str2 == null) {
                          str2 = "";
                        }
                        obj.guildName = str2;
                        obj.guildId = currentGuildId;
                        obj.channelId = currentVoiceChannelId;
                        obj.extraUsers = keys.length - items.length;
                        obj.deafened = MediaEngineStore.isSelfDeaf();
                        obj.muted = MediaEngineStore.isSelfMute();
                        obj.connectionQuality = RTCConnectionStore.getQuality();
                        obj.canGenerateInvite = PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel);
                        obj.channelSelectorResults = tmp31.channelSelectorResults;
                        let setDataResult = obj3.setData(obj);
                      }
                    }
                  }
                }
                continue;
              }
            }
          }
        }
        obj4 = obj;
      }
    };
    obj.getVoiceConnectedGuildAndChannel = function getVoiceConnectedGuildAndChannel() {
      obj = guildId;
      guildId = guildId.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      obj = { currentGuildId: guildId, currentVoiceChannelId: null };
      let channelId = obj.getChannelId();
      if (channelId == null) {
        channelId = null;
      }
      obj.currentVoiceChannelId = channelId;
      return obj;
    };
    obj.refreshChannelSelectorResults = function refreshChannelSelectorResults(query) {
      let currentGuildId = null;
      if (0 === query.length) {
        currentGuildId = obj.getVoiceConnectedGuildAndChannel().currentGuildId;
      }
      obj = {
        query,
        guildId: currentGuildId,
        limit: 15,
        fuzzy: true,
        filter(id) {
          return id.id !== obj.currentVoiceChannelId && !id.isGuildStageVoice();
        },
        type: GUILD_VOCAL_CHANNELS_KEY,
        allowEmptyQueries: true,
      };
      obj.channelSelectorResults = obj.queryChannels(obj).map((record) => {
        record = record.record;
        obj = {
          channelId: record.id,
          guildId: record.guild_id,
          channelName: closure_1_0(dependencyMap[25]).computeChannelName(record, user, closure_1_9),
          guildName: null,
          categoryName: null,
        };
        guild = guild.getGuild(record.guild_id);
        let str;
        if (guild != null) {
          str = guild.name;
        }
        if (str == null) {
          str = "";
        }
        obj.guildName = str;
        channel = channel.getChannel(record.parent_id);
        let str2 = "";
        if (null != channel) {
          str2 = closure_1_0(dependencyMap[25]).computeChannelName(channel, user, closure_1_9);
          const tmpResult = closure_1_0(dependencyMap[25]);
        }
        obj.categoryName = str2;
        return obj;
      });
    };
    obj.showOverlay = function showOverlay() {
      const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
      const channel = ChannelStore.getChannel(voiceConnectedGuildAndChannel.currentVoiceChannelId);
      const rTCConnectionId = RTCConnectionStore.getRTCConnectionId();
      obj = { type: "voice", rtc_connection_id: rTCConnectionId };
      const obj2 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
      const merged1 = Object.assign(
        AppAnalyticsUtils.collectGuildAnalyticsMetadata(voiceConnectedGuildAndChannel.currentGuildId),
      );
      obj2.track(constants.MOBILE_OVERLAY_OPENED, obj);
      const obj6 = NativeMobileVoiceOverlayModuleDefault;
      if (obj6 != null) {
        obj6.showOverlay(obj);
      }
      obj.updateOverlayUI();
      obj.overlayState = constants.SHOWING;
    };
    obj.hideOverlay = function hideOverlay() {
      const rTCConnectionId = RTCConnectionStore.getRTCConnectionId();
      obj = AnalyticsUtilsDefault;
      obj.track(constants.MOBILE_OVERLAY_CLOSED, { type: "voice", rtc_connection_id: rTCConnectionId });
      AnalyticsUtilsDefault.track(constants.MOBILE_OVERLAY_CLOSED, {});
      const obj3 = NativeMobileVoiceOverlayModuleDefault;
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
}
const prototype = MobileVoiceOverlayManager.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  if (MobileVoiceOverlayStore.getEnabled()) {
    self.handleOverlayEnable();
  }
  MobileVoiceOverlayStore.addChangeListener(self.handleMobileVoiceOverlayStoreUpdate);
};
prototype["terminate"] = function terminate() {
  MobileVoiceOverlayStore.removeChangeListener(this.handleMobileVoiceOverlayStoreUpdate);
  const result = this.unsubscribeFromVoiceStateStoreUpdates();
  const result1 = this.unsubscribeFromNativeEvents();
};
let closure_19 = new MobileVoiceOverlayManager();
class MobileVoiceOverlayLifecycleManager extends tmp15 {}
const prototype2 = MobileVoiceOverlayLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  closure_19.initialize();
};
prototype2["_terminate"] = function _terminate() {
  closure_19.terminate();
};
const mobileVoiceOverlayLifecycleManager = new MobileVoiceOverlayLifecycleManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx");

export default mobileVoiceOverlayLifecycleManager;
