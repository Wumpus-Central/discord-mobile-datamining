import ensureGuildLoaded from "ensureGuildLoaded";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import importDefaultResult from "_detectH265HardwareDecode";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import importDefaultResult1 from "createRTCConnection";
import upsertRelationship from "upsertRelationship";
import anyoneHasFlagInContext from "anyoneHasFlagInContext";
import mergeGuildAvatar from "mergeGuildAvatar";
import importDefaultResult2 from "updateVoiceState";
import getUserAgnosticState from "getUserAgnosticState";
import ME from "ME";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import registerAsset from "registerAsset";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import { intl as intl5 } from "getSystemLocale";
import { intl as intl6 } from "getSystemLocale";
import { intl as intl7 } from "getSystemLocale";
import { intl as intl8 } from "getSystemLocale";
import { intl as intl9 } from "getSystemLocale";
import { intl as intl10 } from "getSystemLocale";
import { intl as intl11 } from "getSystemLocale";
import "initialize";

let closure_14;
let closure_15;
const require = arg1;
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
    obj.overlayState = Permissions.DISABLED;
    obj.channelSelectorResults = [];
    obj.layoutTrashedSubscription = null;
    obj.channelQueryUpdateSubscription = null;
    obj.isBatchedBridgeInitialized = false;
    obj.handleMobileVoiceOverlayStoreUpdate = function handleMobileVoiceOverlayStoreUpdate() {
      if (outer1_13.getEnabled()) {
        obj.handleOverlayEnable();
      } else {
        const result = obj.unsubscribeFromVoiceStateStoreUpdates();
        const result1 = obj.unsubscribeFromNativeEvents();
        obj.overlayState = outer1_17.DISABLED;
        if (obj.isOverlayShowing()) {
          const obj2 = outer1_1(outer1_2[24]);
          if (obj2 != null) {
            obj2.hideOverlay();
          }
        }
      }
    };
    obj.handleOverlayEnable = function handleOverlayEnable() {
      let obj = outer1_1(outer1_2[24]);
      if (obj != null) {
        const enableOverlayResult = obj.enableOverlay();
        obj.enableOverlay().then((arg0) => {
          if (arg0) {
            const result = closure_0.subscribeToVoiceStateStoreUpdates();
            const result1 = closure_0.subscribeToNativeEvents();
            closure_0.overlayState = outer1_17.NOT_SHOWING;
          } else {
            outer1_1(outer1_2[25]).setEnabled(false);
            closure_0.overlayState = outer1_17.DISABLED;
            const obj = outer1_1(outer1_2[25]);
          }
        }).catch(() => {
          outer1_1(outer1_2[25]).setEnabled(false);
          closure_0.overlayState = outer1_17.DISABLED;
        });
        const nextPromise = obj.enableOverlay().then((arg0) => {
          if (arg0) {
            const result = closure_0.subscribeToVoiceStateStoreUpdates();
            const result1 = closure_0.subscribeToNativeEvents();
            closure_0.overlayState = outer1_17.NOT_SHOWING;
          } else {
            outer1_1(outer1_2[25]).setEnabled(false);
            closure_0.overlayState = outer1_17.DISABLED;
            const obj = outer1_1(outer1_2[25]);
          }
        });
      }
    };
    obj.subscribeToVoiceStateStoreUpdates = function subscribeToVoiceStateStoreUpdates() {
      if (!obj.isSubscribedToVoiceStateStoreUpdates()) {
        const item = outer1_16.forEach((addChangeListener) => {
          addChangeListener.addChangeListener(obj.handleOverlayUIStoreUpdate);
        });
      }
    };
    obj.unsubscribeFromVoiceStateStoreUpdates = function unsubscribeFromVoiceStateStoreUpdates() {
      if (obj.isSubscribedToVoiceStateStoreUpdates()) {
        const item = outer1_16.forEach((removeChangeListener) => {
          removeChangeListener.removeChangeListener(obj.handleOverlayUIStoreUpdate);
        });
      }
    };
    obj.isSubscribedToVoiceStateStoreUpdates = function isSubscribedToVoiceStateStoreUpdates() {
      return null != outer1_16.find((_changeCallbacks) => _changeCallbacks._changeCallbacks.has(obj.handleOverlayUIStoreUpdate));
    };
    obj.subscribeToNativeEvents = function subscribeToNativeEvents() {
      obj = obj(outer1_2[22]);
      if (obj.isFabric()) {
        obj.layoutTrashedSubscription = outer1_1(tmp[24]).onLayoutTrashed(obj.handleLayoutTrashed);
        const obj2 = outer1_1(tmp[24]);
        obj.channelQueryUpdateSubscription = outer1_1(tmp[24]).onChannelQueryUpdate(obj.handleChannelQueryUpdate);
        const obj3 = outer1_1(tmp[24]);
      }
    };
    obj.unsubscribeFromNativeEvents = function unsubscribeFromNativeEvents() {
      obj = obj(outer1_2[22]);
      if (obj.isFabric()) {
        const layoutTrashedSubscription = obj.layoutTrashedSubscription;
        if (layoutTrashedSubscription != null) {
          layoutTrashedSubscription.remove();
        }
        const channelQueryUpdateSubscription = obj.channelQueryUpdateSubscription;
        if (channelQueryUpdateSubscription != null) {
          channelQueryUpdateSubscription.remove();
        }
        const tmp = obj;
      }
    };
    obj.handleOverlayUIStoreUpdate = function handleOverlayUIStoreUpdate() {
      if (obj.overlayState !== outer1_17.DISABLED) {
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
                const result = outer1_1(outer1_2[26]).isForegroundServiceRunning((arg0) => {
                  if (arg0) {
                    obj.showOverlay();
                  } else {
                    obj.overlayState = outer1_17.NOT_SHOWING;
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
      let currentGuildId;
      let currentVoiceChannelId;
      let obj;
      const currentUser = outer1_11.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (null != id) {
        const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
        ({ currentGuildId, currentVoiceChannelId } = voiceConnectedGuildAndChannel);
        const channel = outer1_3.getChannel(currentVoiceChannelId);
        if (null != currentVoiceChannelId) {
          if (null != channel) {
            const overlayUser = obj4.getOverlayUser(id);
            if (null != overlayUser) {
              const _Object = Object;
              const keys = Object.keys(outer1_12.getVoiceStatesForChannel(currentVoiceChannelId));
              let tmp10 = null;
              if (overlayUser.speaking) {
                tmp10 = overlayUser;
              } else {
                for (const item10014 of keys) {
                  let tmp5 = obj;
                  let tmp6 = obj;
                  let overlayUser1 = obj.getOverlayUser(item10014);
                  let tmp8 = overlayUser1;
                  let speaking;
                  if (overlayUser1 != null) {
                    speaking = overlayUser1.speaking;
                  }
                  if (speaking) {
                    tmp10 = overlayUser1;
                    let tmp11 = obj;
                    obj.return();
                    break;
                  }
                  break;
                }
              }
              if (null == tmp10) {
                tmp10 = overlayUser;
              }
              const items = [tmp10];
              if (tmp10.userId !== overlayUser.userId) {
                items.push(overlayUser);
              }
              const iter = keys[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp19 = nextResult;
                if (nextResult !== id) {
                  let tmp20 = nextResult;
                  let tmp21 = tmp10;
                  let userId;
                  if (tmp10 != null) {
                    userId = tmp10.userId;
                  }
                  if (tmp19 !== userId) {
                    let tmp23 = obj;
                    let tmp24 = obj;
                    let tmp25 = nextResult;
                    let overlayUser2 = obj.getOverlayUser(tmp19);
                    if (null != overlayUser2) {
                      let tmp28 = overlayUser2;
                      let arr = items.push(tmp27);
                      if (items.length >= 3) {
                        let tmp30 = iter;
                        iter.return();
                        break;
                      }
                      let tmp31 = obj;
                      let obj2 = obj;
                      let tmp32 = outer1_17;
                      if (obj.overlayState !== outer1_17.SHOWING) {
                        let tmp33 = tmp31;
                        let str = "";
                        let result = obj2.refreshChannelSelectorResults("");
                      }
                      let tmp35 = tmp31;
                      obj2.currentVoiceChannelId = currentVoiceChannelId;
                      let tmp36 = outer1_1;
                      let tmp37 = outer1_2;
                      let obj3 = outer1_1(outer1_2[24]);
                      if (obj3 != null) {
                        obj = { users: null, channelName: null, guildName: null, guildId: null, channelId: null, extraUsers: null, deafened: null, muted: null, connectionQuality: null, canGenerateInvite: null, channelSelectorResults: null };
                        obj[0] = items;
                        let tmp51 = obj;
                        let obj6 = obj(tmp37[27]);
                        let tmp52 = outer1_11;
                        let tmp53 = outer1_9;
                        obj[1] = obj6.computeChannelName(channel, outer1_11, outer1_9);
                        let tmp54 = outer1_5;
                        let guild = outer1_5.getGuild(currentGuildId);
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
                        let tmp38 = outer1_6;
                        obj[6] = outer1_6.isSelfDeaf();
                        obj[7] = outer1_6.isSelfMute();
                        let tmp39 = outer1_8;
                        obj[8] = outer1_8.getQuality();
                        let tmp40 = outer1_7;
                        let tmp41 = outer1_15;
                        obj[9] = outer1_7.can(outer1_15.CREATE_INSTANT_INVITE, channel);
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
        const tmp43 = obj;
      }
    };
    obj.getVoiceConnectedGuildAndChannel = function getVoiceConnectedGuildAndChannel() {
      let obj = guildId;
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
      obj = outer1_1(outer1_2[28]);
      obj = {
        query,
        guildId: currentGuildId,
        limit: 15,
        fuzzy: true,
        filter(id) {
          return id.id !== lib.currentVoiceChannelId && !id.isGuildStageVoice();
        },
        type: outer1_4,
        allowEmptyQueries: true
      };
      obj.channelSelectorResults = obj.queryChannels(obj).map((record) => {
        record = record.record;
        const obj = { channelId: record.id, guildId: record.guild_id, channelName: null, guildName: null, categoryName: null };
        obj[2] = lib(table[27]).computeChannelName(record, mergeGuildAvatar, upsertRelationship);
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
          str2 = lib(table[27]).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
          const tmpResult = lib(table[27]);
        }
        obj[4] = str2;
        return obj;
      });
    };
    obj.showOverlay = function showOverlay(outer1_18) {
      const voiceConnectedGuildAndChannel = obj.getVoiceConnectedGuildAndChannel();
      const channel = outer1_3.getChannel(voiceConnectedGuildAndChannel.currentVoiceChannelId);
      const rTCConnectionId = outer1_8.getRTCConnectionId();
      obj = { type: "voice", rtc_connection_id: rTCConnectionId };
      const obj2 = outer1_1(outer1_2[29]);
      const merged = Object.assign(obj(outer1_2[30]).collectChannelAnalyticsMetadata(channel));
      const obj4 = obj(outer1_2[30]);
      const merged1 = Object.assign(obj(outer1_2[30]).collectGuildAnalyticsMetadata(voiceConnectedGuildAndChannel.currentGuildId));
      obj2.track(outer1_14.MOBILE_OVERLAY_OPENED, obj);
      const obj6 = outer1_1(outer1_2[24]);
      if (obj6 != null) {
        obj6.showOverlay(outer1_18);
      }
      obj.updateOverlayUI();
      obj.overlayState = outer1_17.SHOWING;
    };
    obj.hideOverlay = function hideOverlay() {
      const rTCConnectionId = outer1_8.getRTCConnectionId();
      const obj = outer1_1(outer1_2[29]);
      obj.track(outer1_14.MOBILE_OVERLAY_CLOSED, { type: "voice", rtc_connection_id: rTCConnectionId });
      outer1_1(outer1_2[29]).track(outer1_14.MOBILE_OVERLAY_CLOSED, {});
      const obj3 = outer1_1(outer1_2[24]);
      if (obj3 != null) {
        obj3.hideOverlay();
      }
      obj.overlayState = outer1_17.NOT_SHOWING;
    };
    obj.isOverlayShowing = function isOverlayShowing() {
      return obj.overlayState === outer1_17.SHOWING || obj.overlayState === tmp.WAITING_FOR_SERVICE;
    };
    obj.getOverlayUser = function getOverlayUser(id) {
      user = user.getUser(id);
      if (null == user) {
        return null;
      } else {
        const obj = { userId: null, avatar: null, speaking: null, discriminator: null };
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
    obj.handleChannelQueryUpdate = function handleChannelQueryUpdate(handleChannelQueryUpdate) {
      const result = obj.refreshChannelSelectorResults(handleChannelQueryUpdate);
      const result1 = obj.handleOverlayUIStoreUpdate();
    };
    return obj;
  }
}
const prototype = MobileVoiceOverlayManager.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  let obj = require(4149) /* isFabric */;
  if (!tmp2) {
    if (typeof NativeCallableInterface !== "find") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(NativeCallableInterface.prototype);
    obj.manager = self;
    const result = importDefault(39).registerCallableModule("MobileVoiceOverlayManager", obj);
    self.isBatchedBridgeInitialized = true;
    const obj2 = importDefault(39);
    const tmp4 = NativeCallableInterface;
  }
  if (getUserAgnosticState.getEnabled()) {
    self.handleOverlayEnable();
  }
  getUserAgnosticState.addChangeListener(self.handleMobileVoiceOverlayStoreUpdate);
};
prototype["terminate"] = function terminate() {
  getUserAgnosticState.removeChangeListener(this.handleMobileVoiceOverlayStoreUpdate);
  const result = this.unsubscribeFromVoiceStateStoreUpdates();
  const result1 = this.unsubscribeFromNativeEvents();
};
let closure_19 = new MobileVoiceOverlayManager();
class NativeCallableInterface {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.manager = global;
    return obj;
  }
}
const prototype2 = NativeCallableInterface.prototype;
prototype2["onLayoutTrashed"] = function onLayoutTrashed(handleLayoutTrashed) {
  const manager = this.manager;
  manager.handleLayoutTrashed();
};
prototype2["onChannelQueryUpdate"] = function onChannelQueryUpdate(handleChannelQueryUpdate) {
  const manager = this.manager;
  const result = manager.handleChannelQueryUpdate(handleChannelQueryUpdate);
};
class MobileVoiceOverlayLifecycleManager extends tmp15 {
}
const prototype3 = MobileVoiceOverlayLifecycleManager.prototype;
prototype3["_initialize"] = function _initialize() {
  closure_19.initialize();
};
prototype3["_terminate"] = function _terminate() {
  closure_19.terminate();
};
const mobileVoiceOverlayLifecycleManager = new MobileVoiceOverlayLifecycleManager();
let result = require("createGuildRecordFromRust").fileFinishedImporting("modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx");

export default mobileVoiceOverlayLifecycleManager;