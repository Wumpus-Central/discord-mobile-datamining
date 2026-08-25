// discord_app/modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx
import privDefault from "../../../../_runtime/01405_priv.js";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import useAlertStore2 from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import getQuestLogger from "../lib/getQuestLogger.tsx";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../action_sheet/native/ActionSheetStore.tsx";
import closure_6 from "../../calls/ChannelRTCStore.tsx";
import useChannelDetailsStore from "../../main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx";
import closure_9 from "../../voice_panel/VoicePanelStore.tsx";
import { isTextChannel } from "../../../records/ChannelRecord.tsx";
import closure_11 from "../../../stores/ChannelStore.tsx";
import closure_12 from "../../../stores/SelectedChannelStore.tsx";
import closure_13 from "../../../stores/native/AlertStore.tsx";
import closure_14 from "../../../stores/native/AppStateStore.tsx";
import closure_15 from "../QuestStore.tsx";
import { MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE as closure_16 } from "../lib/analytics/ContentImpressionTrackerConstants.tsx";
import { MessageStates } from "../../../Constants.tsx";

require = arg1;
({ useChannelDetailsStore: error, getIsChannelDetailsSearchActive: closure_8 } = useChannelDetailsStore);
function log() {
  if (questLogger == null) {
    questLogger = getQuestLogger.getQuestLogger({ location: "QuestMobileEmbedVisibilityManager" });
    const obj = getQuestLogger;
  }
}
initializeDefault;
class QuestMobileEmbedVisibilityManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = new require("priv")({ max: 50 });
    applyArgumentsResult.impressionCache = tmp3;
    applyArgumentsResult.questStatuses = {};
    applyArgumentsResult.chatChannelId = undefined;
    applyArgumentsResult.previousChatChannelId = undefined;
    set = new Set();
    applyArgumentsResult.channelsWithChatOpen = set;
    applyArgumentsResult.handleVisibleMessagesChanged = function handleVisibleMessagesChanged(payload) {
      ({ visibleMessages, source } = payload.payload);
      closure_1_18();
      const items = [];
      const iter = visibleMessages[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let message = nextResult.message;
        let tmp3 = message;
        ({ percentVisible, state } = nextResult);
        let hasItem = message.codedLinks.length <= 0;
        if (!hasItem) {
          let tmp5 = closure_1_17;
          let items1 = [, ];
          ({ SENDING: arr2[0], SEND_FAILED: arr2[1] } = closure_1_17);
          let tmp6 = state;
          hasItem = items1.includes(state);
        }
        if (!hasItem) {
          let tmp7 = closure_1_18;
          let tmp8 = message;
          ({ id, content } = tmp3);
          let _Math = Math;
          let tmp9 = percentVisible;
          let tmp10 = closure_1_18(Math.round(100 * percentVisible));
          let tmp11 = closure_1_16;
          if (percentVisible > closure_1_16) {
            let push = items.push;
            let tmp12 = applyArgumentsResult;
            let tmp13 = message;
            let items2 = [];
            let tmp14 = items2;
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(applyArgumentsResult.findQuestEmbedsInMessage(tmp3), 0);
            let tmp16 = push;
            let tmp17 = items2;
            let tmp18 = items;
            let applyResult = HermesBuiltin.apply(items2, items);
          }
        }
        continue;
      }
      const result = applyArgumentsResult.updateImpressionsForVisibleEmbeds({ visibleEmbeds: items });
    };
    applyArgumentsResult.findQuestEmbedsInMessage = function findQuestEmbedsInMessage(codedLinks) {
      closure_0 = codedLinks;
      const items = [];
      const set = new Set();
      codedLinks = codedLinks.codedLinks;
      const item = codedLinks.forEach((type) => {
        if (type.type === codedLinks(set[16]).CodedLinkType.QUESTS_EMBED) {
          const code = type.code;
          let obj = set;
          if (!set.has(code)) {
            obj = { questId: null, questContentPosition: null, messageId: null, channelId: null };
            obj[0] = code;
            obj[1] = arg1;
            ({ id: obj2[2], channel_id: obj2[3] } = codedLinks);
            items.push(obj);
            obj.add(code);
          }
        }
      });
      return items;
    };
    applyArgumentsResult.updateImpressionsForVisibleEmbeds = function updateImpressionsForVisibleEmbeds(visibleEmbeds) {
      visibleEmbeds = visibleEmbeds.visibleEmbeds;
      const iter = visibleEmbeds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ questContentPosition, messageId, channelId } = nextResult);
        let tmp2 = closure_1_15;
        let quest = closure_1_15.getQuest(nextResult.questId);
        let tmp4 = quest;
        if (null != quest) {
          let tmp6 = applyArgumentsResult;
          let obj = { quest: null, questContent: null, triggeredByStatusChange: false, questContentPosition: null, channelId: null, messageId: null, questId: null, isQuestEnrollmentBlocked: null, sourceQuestContent: null, adCreativeType: null };
          let tmp7 = quest;
          obj[0] = tmp4;
          let tmp8 = applyArgumentsResult;
          let tmp9 = closure_1_2;
          obj[1] = applyArgumentsResult(closure_1_2[17]).QuestContent.QUEST_EMBED_MOBILE;
          let tmp10 = questContentPosition;
          obj[3] = questContentPosition;
          let tmp11 = channelId;
          obj[4] = channelId;
          let tmp12 = messageId;
          obj[5] = messageId;
          obj[6] = tmp4.id;
          obj[7] = null != tmp2.questEnrollmentBlockedUntil;
          obj[8] = applyArgumentsResult(closure_1_2[17]).QuestContent.QUEST_EMBED_MOBILE;
          obj[9] = applyArgumentsResult(closure_1_2[18]).AdCreativeType.QUEST;
          let ensureImpressionResult = applyArgumentsResult.ensureImpression(obj);
        }
        continue;
      }
      applyArgumentsResult.stopMany({ visibleEmbeds, shouldDeleteHiddenEmbeds: true });
    };
    applyArgumentsResult.ensureImpression = function ensureImpression(quest) {
      const merged = Object.assign(quest, Object.create(null));
      const cacheKey = applyArgumentsResult.getCacheKey(merged);
      const impressionCache = applyArgumentsResult.impressionCache;
      const value = impressionCache.get(cacheKey);
      let tmp4 = null != value;
      if (tmp4) {
        let isRunning;
        if (value != null) {
          isRunning = value.isRunning;
        }
        tmp4 = isRunning;
      }
      if (!tmp4) {
        let cloneResult = value;
        if (null != value) {
          let obj = { triggeredByStatusChange: null };
          obj[0] = merged.triggeredByStatusChange;
          cloneResult = value.clone(obj);
        }
        if (cloneResult == null) {
          obj = { adContentIds: null };
          const items = [quest.quest.id];
          obj[0] = items;
          const merged1 = Object.assign(merged);
          cloneResult = new applyArgumentsResult(closure_1_2[19]).QuestContentImpression(obj);
        }
        if (tmp14) {
          cloneResult.start();
        }
        const impressionCache2 = tmp2.impressionCache;
        const result = impressionCache2.set(cacheKey, cloneResult);
        tmp14 = tmp2.isChatViewable && !cloneResult.isRunning;
      }
    };
    applyArgumentsResult.stopOne = function stopOne(key) {
      const impressionCache = applyArgumentsResult.impressionCache;
      const value = impressionCache.get(key);
      let flag;
      if (value != null) {
        flag = value.isRunning;
      }
      if (flag == null) {
        flag = false;
      }
      if (value != null) {
        value.stop();
      }
      if (key.shouldDelete) {
        closure_1_18();
        const impressionCache2 = applyArgumentsResult.impressionCache;
        impressionCache2.del(key);
      }
      return flag;
    };
    applyArgumentsResult.stopMany = function stopMany(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        let obj = { visibleEmbeds: null, shouldDeleteHiddenEmbeds: false };
        obj[0] = [];
        tmp = obj;
      }
      let visibleEmbeds = tmp.visibleEmbeds;
      if (visibleEmbeds === undefined) {
        visibleEmbeds = [];
      }
      let flag = tmp.shouldDeleteHiddenEmbeds;
      if (flag === undefined) {
        flag = false;
      }
      const impressionCache = applyArgumentsResult.impressionCache;
      const keys = impressionCache.keys();
      for (const item10023 of keys) {
        let tmp3 = item10023;
        if (!set.has(item10023)) {
          let tmp4 = applyArgumentsResult;
          obj = { key: null, shouldDelete: null };
          let tmp5 = item10023;
          obj[0] = tmp3;
          obj[1] = flag;
          let stopOneResult = applyArgumentsResult.stopOne(obj);
        }
        continue;
      }
    };
    applyArgumentsResult.getCacheKey = function getCacheKey(merged) {
      return merged.channelId + ":" + merged.messageId + ":" + merged.questId;
    };
    applyArgumentsResult.parseCacheKey = function parseCacheKey(nextResult) {
      const tmp = callback(nextResult.split(":"), 3);
      return { channelId: tmp[0], messageId: tmp[1], questId: tmp[2] };
    };
    applyArgumentsResult.isOnChannelNavigationRoute = function isOnChannelNavigationRoute() {
      let isChannelFocusedResult = applyArgumentsResult(9918).isChannelFocused();
      applyArgumentsResult(4234);
      if (isChannelFocusedResult) {
        isChannelFocusedResult = "channel" === tmp3;
      }
      return isChannelFocusedResult;
    };
    applyArgumentsResult.isSearchShowing = function isSearchShowing() {
      let tmp2 = null != applyArgumentsResult.chatChannelId;
      if (tmp2) {
        tmp2 = closure_1_8(tmp.chatChannelId);
      }
      return tmp2;
    };
    applyArgumentsResult.getIsChatViewable = function getIsChatViewable() {
      if (null == applyArgumentsResult.chatChannelId) {
        closure_1_18();
        return false;
      } else if (closure_1_5.isOpen()) {
        closure_1_18();
        return false;
      } else {
        const state = closure_1_14.getState();
        if (state !== applyArgumentsResult(closure_1_2[22]).AppStates.ACTIVE) {
          closure_1_18();
          return false;
        } else {
          const channel = closure_1_11.getChannel(obj.chatChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          const chatOpen = closure_1_6.getChatOpen(obj.chatChannelId);
          const tmp8 = type === tmp3(tmp4[23]).ChannelTypes.GUILD_STAGE_VOICE && chatOpen;
          const openModalKey = tmp3(tmp4[21]).getOpenModalKey();
          const _HermesInternal = HermesInternal;
          if (null != openModalKey) {
            if (openModalKey !== "voice-channel-" + obj.chatChannelId) {
              closure_1_18();
              return false;
            }
          }
          if (obj.isSearchShowing()) {
            closure_1_18();
            return false;
          } else {
            if (null == closure_1_13.getAlert()) {
              const useAlertStore = tmp3(tmp4[24]).useAlertStore;
              if (useAlertStore.getState().alerts.length <= 0) {
                const tmp14 = type === tmp3(tmp4[23]).ChannelTypes.GUILD_VOICE && chatOpen;
                let result = null != type;
                if (result) {
                  result = closure_1_10(type);
                }
                const state1 = closure_1_9.getState();
                if (result) {
                  result = obj.isOnChannelNavigationRoute();
                }
                if (result) {
                  result = !isAnyVoicePanelOpenResult;
                }
                if (result) {
                  result = !tmp8;
                }
                if (result) {
                  result = !tmp14;
                }
                if (!result) {
                  result = tmp8;
                }
                if (!result) {
                  result = tmp14;
                }
                closure_1_18(obj.chatChannelId);
                return result;
              }
            }
            closure_1_18();
            return false;
          }
          const tmp3Result = tmp3(tmp4[21]);
        }
      }
    };
    applyArgumentsResult.updateImpressionsForChatBecameViewable = function updateImpressionsForChatBecameViewable() {
      closure_1_18();
      const impressionCache = applyArgumentsResult.impressionCache;
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = applyArgumentsResult;
        let obj = applyArgumentsResult;
        let impressionCache2 = applyArgumentsResult.impressionCache;
        let value = impressionCache2.get(nextResult);
        let obj2 = value;
        if (null != value) {
          let tmp21 = tmp5;
          let tmp22 = nextResult;
          let channelId = obj.parseCacheKey(tmp4).channelId;
          let tmp23 = value;
          if (obj2.isRunning) {
            let tmp7 = closure_1_18;
            let tmp8 = tmp5;
            let tmp9 = closure_1_18(obj.chatChannelId);
            obj = { key: null, shouldDelete: false };
            let tmp10 = nextResult;
            obj[0] = tmp4;
            let stopOneResult = obj.stopOne(obj);
          }
          let tmp12 = channelId;
          let tmp13 = tmp5;
          if (channelId === obj.chatChannelId) {
            let tmp14 = closure_1_18;
            let tmp15 = tmp5;
            let tmp16 = closure_1_18(obj.chatChannelId);
            let tmp17 = value;
            let cloneResult = obj2.clone({ triggeredByStatusChange: false });
            let startResult = cloneResult.start();
            let impressionCache3 = obj.impressionCache;
            let tmp19 = nextResult;
            let result = impressionCache3.set(tmp4, cloneResult);
          }
        }
        continue;
      }
    };
    applyArgumentsResult.refreshImpressions = function refreshImpressions() {
      if (applyArgumentsResult.isChatViewable) {
        const result = obj.updateImpressionsForChatBecameViewable();
      } else {
        closure_1_18();
        obj.stopMany();
      }
    };
    applyArgumentsResult.checkChatViewable = function checkChatViewable() {
      const isChatViewable = applyArgumentsResult.getIsChatViewable();
      let flag = isChatViewable !== applyArgumentsResult.isChatViewable;
      if (flag) {
        closure_1_18();
        obj.isChatViewable = isChatViewable;
        obj.refreshImpressions();
        flag = true;
      }
      return flag;
    };
    applyArgumentsResult.checkIsOnChannelNavigationRoute = function checkIsOnChannelNavigationRoute() {
      const result = applyArgumentsResult.isOnChannelNavigationRoute();
      if (result !== applyArgumentsResult.wasOnChannelNavigationRoute) {
        closure_1_18();
        obj.checkChatViewable();
        obj.wasOnChannelNavigationRoute = result;
      }
    };
    applyArgumentsResult.checkSearchShowing = function checkSearchShowing() {
      const isSearchShowingResult = applyArgumentsResult.isSearchShowing();
      if (isSearchShowingResult !== applyArgumentsResult.wasSearchShowing) {
        closure_1_18();
        obj.checkChatViewable();
        obj.wasSearchShowing = isSearchShowingResult;
      }
    };
    applyArgumentsResult.onChannelChanged = function onChannelChanged(channelId) {
      applyArgumentsResult.previousChatChannelId = applyArgumentsResult.chatChannelId;
      applyArgumentsResult.chatChannelId = channelId;
      closure_1_18(applyArgumentsResult.chatChannelId);
      applyArgumentsResult.stopMany({ shouldDeleteHiddenEmbeds: true });
      if (!applyArgumentsResult.checkChatViewable()) {
        applyArgumentsResult.refreshImpressions();
      }
    };
    applyArgumentsResult.checkOpenModalKey = function checkOpenModalKey() {
      const openModalKey = applyArgumentsResult(closure_1_2[21]).getOpenModalKey();
      if (openModalKey !== applyArgumentsResult.previouslyOpenModalKey) {
        closure_1_18(obj2.previouslyOpenModalKey);
        obj2.checkChatViewable();
        obj2.previouslyOpenModalKey = openModalKey;
      }
    };
    applyArgumentsResult.handleQuestStoreChanged = function handleQuestStoreChanged() {
      closure_1_18();
      const quests = closure_1_15.quests;
      const impressionCache = applyArgumentsResult.impressionCache;
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = applyArgumentsResult;
        let obj2 = applyArgumentsResult;
        let parseCacheKeyResult = applyArgumentsResult.parseCacheKey(nextResult);
        let tmp7 = parseCacheKeyResult;
        if (set.has(parseCacheKeyResult.questId)) {
          let tmp8 = parseCacheKeyResult;
          let value = quests.get(tmp7.questId);
          let tmp10 = value;
          let tmp11 = tmp5;
          let tmp12 = obj2.questStatuses[tmp7.questId];
          let questStatus = null;
          if (null != value) {
            let tmp14 = applyArgumentsResult;
            let tmp15 = closure_1_2;
            let obj3 = applyArgumentsResult(closure_1_2[25]);
            let tmp16 = value;
            questStatus = obj3.getQuestStatus(tmp10);
          }
          let tmp18 = tmp12;
          if (questStatus !== tmp12) {
            let tmp32 = tmp5;
            let tmp33 = parseCacheKeyResult;
            let tmp34 = questStatus;
            obj2.questStatuses[tmp7.questId] = tmp17;
            if (obj2.isChatViewable) {
              let tmp19 = tmp5;
              let impressionCache2 = obj2.impressionCache;
              let tmp20 = nextResult;
              value = impressionCache2.get(tmp4);
              let obj4 = value;
              let isRunning;
              if (value != null) {
                isRunning = value.isRunning;
              }
              if (true === isRunning) {
                let tmp23 = value;
                if (null != tmp10) {
                  let tmp27 = value;
                  let cloneResult = obj4.clone({ triggeredByStatusChange: true });
                  let startResult = cloneResult.start();
                  let tmp29 = tmp5;
                  let impressionCache3 = obj2.impressionCache;
                  let tmp30 = nextResult;
                  let result = impressionCache3.set(tmp4, cloneResult);
                } else {
                  let tmp24 = tmp5;
                  let obj = { key: null, shouldDelete: true };
                  let tmp25 = nextResult;
                  obj[0] = tmp4;
                  let stopOneResult = obj2.stopOne(obj);
                }
              }
            }
          }
        }
        continue;
      }
    };
    applyArgumentsResult.handleSelectedChannelStoreChanged = function handleSelectedChannelStoreChanged() {
      closure_1_18();
      const channelId = closure_1_12.getChannelId();
      if (channelId !== applyArgumentsResult.chatChannelId) {
        const channel = closure_1_11.getChannel(obj.chatChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let hasItem = null != type;
        if (hasItem) {
          const items = [applyArgumentsResult(closure_1_2[23]).ChannelTypes.GUILD_STAGE_VOICE, applyArgumentsResult(closure_1_2[23]).ChannelTypes.GUILD_VOICE];
          let type1;
          if (channel != null) {
            type1 = channel.type;
          }
          hasItem = items.includes(type1);
        }
        if (!tmp9) {
          closure_1_18(obj.chatChannelId);
          obj.onChannelChanged(channelId);
        }
        tmp9 = null != obj.chatChannelId && hasItem;
      }
    };
    applyArgumentsResult.handleActionSheetStoreChanged = function handleActionSheetStoreChanged() {
      closure_1_18();
      const isOpenResult = closure_1_5.isOpen();
      if (isOpenResult !== applyArgumentsResult.wasActionSheetOpen) {
        closure_1_18();
        obj.checkChatViewable();
        obj.wasActionSheetOpen = isOpenResult;
      }
    };
    applyArgumentsResult.handleAppStateStoreChanged = function handleAppStateStoreChanged() {
      closure_1_18();
      const state = closure_1_14.getState();
      const tmp4 = state === applyArgumentsResult(closure_1_2[22]).AppStates.ACTIVE;
      if (applyArgumentsResult.wasAppActive !== tmp4) {
        closure_1_18();
        obj.checkChatViewable();
        obj.wasAppActive = tmp4;
      }
    };
    applyArgumentsResult.handleVoicePanelStoreChanged = function handleVoicePanelStoreChanged() {
      closure_1_18();
      const state = closure_1_9.getState();
      const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
      if (isAnyVoicePanelOpenResult !== applyArgumentsResult.wasAnyVoicePanelOpen) {
        closure_1_18();
        obj2.checkChatViewable();
        obj2.wasAnyVoicePanelOpen = isAnyVoicePanelOpenResult;
      }
    };
    applyArgumentsResult.handleChannelDetailsStoreChanged = function handleChannelDetailsStoreChanged() {
      applyArgumentsResult.checkSearchShowing();
    };
    applyArgumentsResult.handleChannelRTCStoreChanged = function handleChannelRTCStoreChanged() {
      closure_1_18();
      const openChatChannelIds = closure_1_6.getOpenChatChannelIds();
      const items = [...openChatChannelIds];
      const iter = new Set(items)[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let tmp5 = closure_1_11;
        let channel = closure_1_11.getChannel(nextResult);
        let tmp7 = channel;
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (null != type) {
          let tmp35 = applyArgumentsResult;
          let tmp36 = closure_1_2;
          let items1 = [applyArgumentsResult(closure_1_2[23]).ChannelTypes.GUILD_STAGE_VOICE, applyArgumentsResult(closure_1_2[23]).ChannelTypes.GUILD_VOICE];
          let tmp37 = channel;
          let type1;
          if (tmp7 != null) {
            type1 = tmp7.type;
          }
          if (items1.includes(type1)) {
            let tmp10 = applyArgumentsResult;
            let obj2 = applyArgumentsResult;
            let channelsWithChatOpen = applyArgumentsResult.channelsWithChatOpen;
            let tmp11 = nextResult;
            let hasItem = channelsWithChatOpen.has(tmp4);
            let hasItem1 = openChatChannelIds.has(tmp4);
            if (hasItem !== hasItem1) {
              let tmp15 = hasItem1;
              if (tmp14) {
                let tmp16 = nextResult;
                let tmp17 = tmp10;
                if (tmp4 !== obj2.chatChannelId) {
                  let tmp25 = tmp10;
                  let onChannelChangedResult = obj2.onChannelChanged(nextResult);
                  let tmp27 = iter;
                  iter.return();
                  break;
                }
                break;
              }
              if (!hasItem1) {
                let tmp18 = tmp10;
                if (obj2.previousChatChannelId !== obj2.chatChannelId) {
                  let tmp19 = tmp10;
                  let onChannelChangedResult1 = obj2.onChannelChanged(obj2.previousChatChannelId);
                  let tmp21 = iter;
                  iter.return();
                  break;
                }
                break;
              }
              let tmp22 = tmp10;
              let checkChatViewableResult = obj2.checkChatViewable();
              let tmp24 = iter;
              iter.return();
              break;
            }
            let tmp28 = applyArgumentsResult;
            let tmp29 = applyArgumentsResult;
            let _Set = Set;
            let tmp30 = new.target;
            let tmp31 = new.target;
            let tmp32 = openChatChannelIds;
            let set1 = new Set(openChatChannelIds);
            let tmp34 = set1;
            applyArgumentsResult.channelsWithChatOpen = set1;
          }
        }
        continue;
      }
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      closure_1_18();
      const result = applyArgumentsResult.checkIsOnChannelNavigationRoute();
      applyArgumentsResult.checkOpenModalKey();
    };
    applyArgumentsResult.handleAlertStoreChanged = function handleAlertStoreChanged() {
      let tmp = null != closure_1_13.getAlert();
      if (!tmp) {
        const useAlertStore = applyArgumentsResult(closure_1_2[24]).useAlertStore;
        tmp = useAlertStore.getState().alerts.length > 0;
      }
      if (tmp !== applyArgumentsResult.wasAlertOpen) {
        closure_1_18();
        obj.checkChatViewable();
        obj.wasAlertOpen = tmp;
      }
    };
    applyArgumentsResult.unsubscribeFromVoicePanelStore = function unsubscribeFromVoicePanelStore() {

    };
    applyArgumentsResult.unsubscribeFromChannelDetailsStore = function unsubscribeFromChannelDetailsStore() {

    };
    applyArgumentsResult.unsubscribeFromAlertStore = function unsubscribeFromAlertStore() {

    };
    map = new Map();
    result = map.set(closure_15, applyArgumentsResult.handleQuestStoreChanged);
    result1 = result.set(closure_12, applyArgumentsResult.handleSelectedChannelStoreChanged);
    result2 = result1.set(closure_5, applyArgumentsResult.handleActionSheetStoreChanged);
    result3 = result2.set(closure_14, applyArgumentsResult.handleAppStateStoreChanged);
    result4 = result3.set(closure_6, applyArgumentsResult.handleChannelRTCStoreChanged);
    applyArgumentsResult.stores = result4.set(closure_13, applyArgumentsResult.handleAlertStoreChanged);
    applyArgumentsResult.actions = { QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED: applyArgumentsResult.handleVisibleMessagesChanged };
    return applyArgumentsResult;
  }
  _initialize() {
    self = this;
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("getRootNavigationRef");
    rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      str = "state";
      addListenerResult = rootNavigationRef.addListener("state", self.handleNavigationStateChanged);
    }
    self.unsubscribeFromVoicePanelStore = closure_9.subscribe(self.handleVoicePanelStoreChanged);
    self.unsubscribeFromChannelDetailsStore = useChannelDetailsStore.subscribe(self.handleChannelDetailsStoreChanged);
    useAlertStore = require("useAlertStore").useAlertStore;
    self.unsubscribeFromAlertStore = useAlertStore.subscribe(self.handleAlertStoreChanged);
    _initializeResult = super._initialize();
    return;
  }
  _terminate() {
    self = this;
    obj = require("getRootNavigationRef");
    rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      str = "state";
      removeListenerResult = rootNavigationRef.removeListener("state", self.handleNavigationStateChanged);
    }
    result = self.unsubscribeFromVoicePanelStore();
    result1 = self.unsubscribeFromChannelDetailsStore();
    result2 = self.unsubscribeFromAlertStore();
    _terminateResult = super._terminate();
    return;
  }
}
let closure_19 = QuestMobileEmbedVisibilityManager.prototype;
const questMobileEmbedVisibilityManager = new QuestMobileEmbedVisibilityManager();
let result = require("set").fileFinishedImporting("modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx");

export default questMobileEmbedVisibilityManager;