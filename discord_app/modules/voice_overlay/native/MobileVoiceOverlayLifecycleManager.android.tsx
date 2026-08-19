// discord_app/modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import initializeDefault from "../../../lib/LifecycleManager.tsx";
import NOOPDefault from "../../../utils/AutocompleteUtils.tsx";
import initializeDefault2 from "../../foreground_service/mobile/ForegroundServiceManager.android.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeMobileVoiceOverlayModule.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import { GUILD_VOCAL_CHANNELS_KEY } from "../../../stores/GuildChannelStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import importDefaultResult from "../../../stores/MediaEngineStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import importDefaultResult1 from "../../../stores/RTCConnectionStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import anyoneHasFlagInContext from "../../../stores/SpeakingStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import importDefaultResult2 from "../../../stores/VoiceStateStore.tsx";
import getUserAgnosticState from "../../../stores/native/MobileVoiceOverlayStore.tsx";
import ME from "../../../Constants.tsx";
import "registerAsset";
import registerAsset from "../../../../_runtime/08130_registerAsset.js";
import { intl, intl as intl2, intl as intl3, intl as intl4, intl as intl5, intl as intl6, intl as intl7, intl as intl8, intl as intl9, intl as intl10, intl as intl11 } from "../../../intl/index.native.tsx";

const require = fn;
({ AnalyticEvents: closure_14, Permissions: closure_15 } = ME);
let items = [importDefaultResult2, importDefaultResult1, importDefaultResult];
let closure_17 = { DISABLED: 0, [0]: "DISABLED", NOT_SHOWING: 1, [1]: "NOT_SHOWING", WAITING_FOR_SERVICE: 2, [2]: "WAITING_FOR_SERVICE", SHOWING: 3, [3]: "SHOWING" };
let obj = { useSpeaker: null, mute: null, disconnectFromVoice: null, getInvite: null, switchChannels: null, openDiscord: null, inviteLinkCopied: null, channelSelect: null, closeWindow: null, searchChannels: null, noResults: null };
obj[0] = intl.string(require("getSystemLocale").t.CVxXDM);
obj[1] = intl2.string(require("getSystemLocale").t.w4m945);
obj[2] = intl3.string(require("getSystemLocale").t["/lEZpt"]);
obj[3] = intl4.string(require("getSystemLocale").t.JYzIWe);
obj[4] = intl5.string(require("getSystemLocale").t.zJvWqU);
obj[5] = intl6.string(require("getSystemLocale").t["G/Ez6p"]);
obj[6] = intl7.string(require("getSystemLocale").t.OhctG7);
obj[7] = intl8.string(require("getSystemLocale").t.r2ptsz);
obj[8] = intl9.string(require("getSystemLocale").t.gaifwY);
obj[9] = intl10.string(require("getSystemLocale").t.wM7uRI);
obj[10] = intl11.string(require("getSystemLocale").t.wk3qsA);
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
      if (closure_1_13.getEnabled()) {
        obj.handleOverlayEnable();
      } else {
        const result = obj.unsubscribeFromVoiceStateStoreUpdates();
        const result1 = obj.unsubscribeFromNativeEvents();
        obj.overlayState = closure_1_17.DISABLED;
        if (obj.isOverlayShowing()) {
          const obj2 = enforcingDefault;
          if (obj2 != null) {
            obj2.hideOverlay();
          }
        }
      }
    };
    obj.handleOverlayEnable = function handleOverlayEnable() {
      obj = enforcingDefault;
      if (obj != null) {
        const enableOverlayResult = obj.enableOverlay();
        obj.enableOverlay().then((result) => {
          if (result) {
            result = closure_0.subscribeToVoiceStateStoreUpdates();
            const result1 = closure_0.subscribeToNativeEvents();
            closure_0.overlayState = closure_1_17.NOT_SHOWING;
          } else {
            closure_1_1(closure_1_2[23]).setEnabled(false);
            closure_0.overlayState = closure_1_17.DISABLED;
            obj = closure_1_1(closure_1_2[23]);
          }
        }).catch((error) => {
          closure_1_1(closure_1_2[23]).setEnabled(false);
          closure_0.overlayState = closure_1_17.DISABLED;
        });
        const nextPromise = obj.enableOverlay().then((result) => {
          if (result) {
            result = closure_0.subscribeToVoiceStateStoreUpdates();
            const result1 = closure_0.subscribeToNativeEvents();
            closure_0.overlayState = closure_1_17.NOT_SHOWING;
          } else {
            closure_1_1(closure_1_2[23]).setEnabled(false);
            closure_0.overlayState = closure_1_17.DISABLED;
            obj = closure_1_1(closure_1_2[23]);
          }
        });
      }
    };
    obj.subscribeToVoiceStateStoreUpdates = function subscribeToVoiceStateStoreUpdates() {
      if (!obj.isSubscribedToVoiceStateStoreUpdates()) {
        const item = items.forEach((item, index) => {
          item.addChangeListener(obj.handleOverlayUIStoreUpdate);
        });
      }
    };
    obj.unsubscribeFromVoiceStateStoreUpdates = function unsubscribeFromVoiceStateStoreUpdates() {
      if (obj.isSubscribedToVoiceStateStoreUpdates()) {
        const item = items.forEach((item, index) => {
          item.removeChangeListener(obj.handleOverlayUIStoreUpdate);
        });
      }
    };
    obj.isSubscribedToVoiceStateStoreUpdates = function isSubscribedToVoiceStateStoreUpdates() {
      return null != items.find((item, index) => item._changeCallbacks.has(obj.handleOverlayUIStoreUpdate));
    };
    obj.subscribeToNativeEvents = function subscribeToNativeEvents() {
      obj = enforcingDefault;
      obj.layoutTrashedSubscription = obj.onLayoutTrashed(obj.handleLayoutTrashed);
      obj.channelQueryUpdateSubscription = enforcingDefault.onChannelQueryUpdate(obj.handleChannelQueryUpdate);
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
      if (obj.overlayState !== closure_1_17.DISABLED) {
        const currentVoiceChannelId = obj.getVoiceConnectedGuildAndChannel().currentVoiceChannelId;
        if (currentVoiceChannelId !== obj.currentVoiceChannelId) {
          obj.currentVoiceChannelId = currentVoiceChannelId;
          obj.trashedVoiceChannelId = null;
        }
        if (null != currentVoiceChannelId) {
          if (currentVoiceChannelId !== obj.trashedVoiceChannelId) {
            const overlayState = obj.overlayState;
            if (closure_1_17.WAITING_FOR_SERVICE !== overlayState) {
              if (closure_1_17.NOT_SHOWING === overlayState) {
                const result = initializeDefault2.isForegroundServiceRunning((arg0) => {
                  if (arg0) {
                    closure_0.showOverlay();
                  } else {
                    closure_0.overlayState = closure_1_17.NOT_SHOWING;
                  }
                });
                obj.overlayState = closure_1_17.WAITING_FOR_SERVICE;
              } else if (closure_1_17.SHOWING === overlayState) {
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
      const currentUser = closure_1_11.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (null != id) {
        const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
        ({ currentGuildId, currentVoiceChannelId } = voiceConnectedGuildAndChannel);
        const channel = closure_1_3.getChannel(currentVoiceChannelId);
        if (null != currentVoiceChannelId) {
          if (null != channel) {
            const overlayUser = obj4.getOverlayUser(id);
            if (null != overlayUser) {
              const _Object = Object;
              const keys = Object.keys(importDefaultResult2.getVoiceStatesForChannel(currentVoiceChannelId));
              let tmp10 = null;
              if (overlayUser.speaking) {
                tmp10 = overlayUser;
              } else {
                for (const item10014 of keys) {
                  let overlayUser1 = obj.getOverlayUser(item10014);
                  let speaking;
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
                      if (obj.overlayState !== closure_1_17.SHOWING) {
                        let result = obj2.refreshChannelSelectorResults("");
                      }
                      obj2.currentVoiceChannelId = currentVoiceChannelId;
                      let obj3 = enforcingDefault;
                      if (obj3 != null) {
                        obj = { users: null, channelName: null, guildName: null, guildId: null, channelId: null, extraUsers: null, deafened: null, muted: null, connectionQuality: null, canGenerateInvite: null, channelSelectorResults: null };
                        obj[0] = items;
                        let obj6 = obj(dependencyMap[25]);
                        obj[1] = obj6.computeChannelName(channel, closure_1_11, closure_1_9);
                        let guild = closure_1_5.getGuild(currentGuildId);
                        let str2;
                        if (guild != null) {
                          str2 = guild.name;
                        }
                        if (str2 == null) {
                          str2 = "";
                        }
                        obj[2] = str2;
                        obj[3] = currentGuildId;
                        obj[4] = currentVoiceChannelId;
                        obj[5] = keys.length - items.length;
                        obj[6] = closure_1_6.isSelfDeaf();
                        obj[7] = closure_1_6.isSelfMute();
                        obj[8] = importDefaultResult1.getQuality();
                        obj[9] = closure_1_7.can(closure_1_15.CREATE_INSTANT_INVITE, channel);
                        obj[10] = tmp31.channelSelectorResults;
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
      obj[1] = channelId;
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
          return id.id !== lib.currentVoiceChannelId && !id.isGuildStageVoice();
        },
        type: GUILD_VOCAL_CHANNELS_KEY,
        allowEmptyQueries: true
      };
      obj.channelSelectorResults = obj.queryChannels(obj).map((item, index) => {
        const record = item.record;
        obj = { channelId: record.id, guildId: record.guild_id, channelName: lib(table[25]).computeChannelName(record, closure_11, closure_9), guildName: null, categoryName: null };
        guild = guild.getGuild(record.guild_id);
        let str;
        if (guild != null) {
          str = guild.name;
        }
        if (str == null) {
          str = "";
        }
        obj[3] = str;
        channel = channel.getChannel(record.parent_id);
        let str2 = "";
        if (null != channel) {
          str2 = lib(table[25]).computeChannelName(channel, closure_11, closure_9);
          const tmpResult = lib(table[25]);
        }
        obj[4] = str2;
        return obj;
      });
    };
    obj.showOverlay = function showOverlay(closure_1_18) {
      const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
      const channel = closure_1_3.getChannel(voiceConnectedGuildAndChannel.currentVoiceChannelId);
      const rTCConnectionId = importDefaultResult1.getRTCConnectionId();
      obj = { type: "voice", rtc_connection_id: rTCConnectionId };
      const obj2 = expandEventPropertiesDefault;
      const merged = Object.assign(obj(dependencyMap[28]).collectChannelAnalyticsMetadata(channel));
      const obj4 = obj(dependencyMap[28]);
      const merged1 = Object.assign(obj(dependencyMap[28]).collectGuildAnalyticsMetadata(voiceConnectedGuildAndChannel.currentGuildId));
      obj2.track(closure_1_14.MOBILE_OVERLAY_OPENED, obj);
      const obj6 = enforcingDefault;
      if (obj6 != null) {
        obj6.showOverlay(closure_1_18);
      }
      obj.updateOverlayUI();
      obj.overlayState = closure_1_17.SHOWING;
      const obj5 = obj(dependencyMap[28]);
    };
    obj.hideOverlay = function hideOverlay() {
      const rTCConnectionId = importDefaultResult1.getRTCConnectionId();
      obj = expandEventPropertiesDefault;
      obj.track(closure_1_14.MOBILE_OVERLAY_CLOSED, { type: "voice", rtc_connection_id: rTCConnectionId });
      expandEventPropertiesDefault.track(closure_1_14.MOBILE_OVERLAY_CLOSED, {});
      const obj3 = enforcingDefault;
      if (obj3 != null) {
        obj3.hideOverlay();
      }
      obj.overlayState = closure_1_17.NOT_SHOWING;
    };
    obj.isOverlayShowing = function isOverlayShowing() {
      return obj.overlayState === closure_1_17.SHOWING || obj.overlayState === tmp.WAITING_FOR_SERVICE;
    };
    obj.getOverlayUser = function getOverlayUser(id) {
      user = user.getUser(id);
      if (null == user) {
        return null;
      } else {
        obj = { userId: null, avatar: null, speaking: null, discriminator: null };
        obj[0] = id;
        obj[1] = user.avatar;
        obj[2] = speaking.isSpeaking(id);
        obj[3] = user.discriminator;
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
  if (closure_13.getEnabled()) {
    self.handleOverlayEnable();
  }
  closure_13.addChangeListener(self.handleMobileVoiceOverlayStoreUpdate);
};
prototype["terminate"] = function terminate() {
  closure_13.removeChangeListener(this.handleMobileVoiceOverlayStoreUpdate);
  const result = this.unsubscribeFromVoiceStateStoreUpdates();
  const result1 = this.unsubscribeFromNativeEvents();
};
let closure_19 = new MobileVoiceOverlayManager();
initializeDefault;
class MobileVoiceOverlayLifecycleManager extends tmp15 {
}
const prototype2 = MobileVoiceOverlayLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  closure_19.initialize();
};
prototype2["_terminate"] = function _terminate() {
  closure_19.terminate();
};
const mobileVoiceOverlayLifecycleManager = new MobileVoiceOverlayLifecycleManager();
let result = require("obj132").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx");

export default mobileVoiceOverlayLifecycleManager;