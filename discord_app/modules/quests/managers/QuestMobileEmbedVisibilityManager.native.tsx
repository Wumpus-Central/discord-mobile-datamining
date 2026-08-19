// === Module 17036: log ===

// Module 17036 (log)
import privDefault from "priv" /* 1405 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import useAlertStore2 from "useAlertStore" /* 4657 */;
import initializeDefault from "initialize" /* 5038 */;
import getQuestLogger from "getQuestLogger" /* 7459 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import setContent from "setContent" /* 4086 */;
import getParticipants from "getParticipants" /* 4773 */;
import useChannelDetailsStore from "useChannelDetailsStore" /* 8505 */;
import withEqualityFn from "withEqualityFn" /* 8664 */;
import { isTextChannel } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import getAlert from "getAlert" /* 10737 */;
import getState from "getState" /* 7383 */;
import initializeState from "initializeState" /* 7453 */;
import { MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE as closure_16 } from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN" /* 9506 */;
import { MessageStates } from "ME" /* 676 */;

require = fn;
({ useChannelDetailsStore: error, getIsChannelDetailsSearchActive: closure_8 } = useChannelDetailsStore);
function log() {
  if (questLogger == null) {
    questLogger = getQuestLogger.getQuestLogger({ location: "QuestMobileEmbedVisibilityManager" });
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
      log();
      const items = [];
      const iter = visibleMessages[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let message = nextResult.message;
        let tmp3 = message;
        ({ percentVisible, state } = nextResult);
        let hasItem = message.codedLinks.length <= 0;
        if (!hasItem) {
          let items1 = [, ];
          ({ SENDING: arr2[0], SEND_FAILED: arr2[1] } = MessageStates);
          hasItem = items1.includes(state);
        }
        if (!hasItem) {
          ({ id, content } = tmp3);
          let _Math = Math;
          let tmp10 = log(Math.round(100 * percentVisible));
          if (percentVisible > closure_1_16) {
            let push = items.push;
            let items2 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(applyArgumentsResult.findQuestEmbedsInMessage(tmp3), 0);
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
      const item = codedLinks.forEach((item, index) => {
        if (item.type === codedLinks(set[16]).CodedLinkType.QUESTS_EMBED) {
          const code = item.code;
          let obj = set;
          if (!set.has(code)) {
            obj = { questId: null, questContentPosition: null, messageId: null, channelId: null };
            obj[0] = code;
            obj[1] = index;
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
        let quest = closure_1_15.getQuest(nextResult.questId);
        let tmp4 = quest;
        if (null != quest) {
          let obj = { quest: null, questContent: null, triggeredByStatusChange: false, questContentPosition: null, channelId: null, messageId: null, questId: null, isQuestEnrollmentBlocked: null, sourceQuestContent: null, adCreativeType: null };
          obj[0] = tmp4;
          obj[1] = applyArgumentsResult(dependencyMap[17]).QuestContent.QUEST_EMBED_MOBILE;
          obj[3] = questContentPosition;
          obj[4] = channelId;
          obj[5] = messageId;
          obj[6] = tmp4.id;
          obj[7] = null != closure_1_15.questEnrollmentBlockedUntil;
          obj[8] = applyArgumentsResult(dependencyMap[17]).QuestContent.QUEST_EMBED_MOBILE;
          obj[9] = applyArgumentsResult(dependencyMap[18]).AdCreativeType.QUEST;
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
          cloneResult = new applyArgumentsResult(dependencyMap[19]).QuestContentImpression(obj);
        }
        if (tmp14) {
          cloneResult.start();
        }
        const impressionCache2 = applyArgumentsResult.impressionCache;
        const result = impressionCache2.set(cacheKey, cloneResult);
        tmp14 = applyArgumentsResult.isChatViewable && !cloneResult.isRunning;
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
      if (key.key.shouldDelete) {
        log();
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
        if (!set.has(item10023)) {
          obj = { key: null, shouldDelete: null };
          obj[0] = item10023;
          obj[1] = flag;
          let stopOneResult = applyArgumentsResult.stopOne(obj);
        }
        continue;
      }
      const set = new Set(visibleEmbeds.map((item, index) => cacheKey.getCacheKey(item)));
    };
    applyArgumentsResult.getCacheKey = function getCacheKey(merged) {
      return merged.channelId + ":" + merged.messageId + ":" + merged.questId;
    };
    applyArgumentsResult.parseCacheKey = function parseCacheKey(nextResult) {
      const tmp = callback(nextResult.split(":"), 3);
      return { channelId: tmp[0], messageId: tmp[1], questId: tmp[2] };
    };
    applyArgumentsResult.isOnChannelNavigationRoute = function isOnChannelNavigationRoute() {
      let isChannelFocusedResult = applyArgumentsResult(10023).isChannelFocused();
      applyArgumentsResult(4229);
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
        log();
        return false;
      } else if (closure_1_5.isOpen()) {
        log();
        return false;
      } else {
        const state = closure_1_14.getState();
        if (state !== applyArgumentsResult(dependencyMap[22]).AppStates.ACTIVE) {
          log();
          return false;
        } else {
          const channel = closure_1_11.getChannel(applyArgumentsResult.chatChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          const chatOpen = closure_1_6.getChatOpen(applyArgumentsResult.chatChannelId);
          const tmp8 = type === applyArgumentsResult(dependencyMap[23]).ChannelTypes.GUILD_STAGE_VOICE && chatOpen;
          const openModalKey = applyArgumentsResult(dependencyMap[21]).getOpenModalKey();
          const _HermesInternal = HermesInternal;
          if (null != openModalKey) {
            if (openModalKey !== "voice-channel-" + applyArgumentsResult.chatChannelId) {
              log();
              return false;
            }
          }
          if (applyArgumentsResult.isSearchShowing()) {
            log();
            return false;
          } else {
            if (null == closure_1_13.getAlert()) {
              const useAlertStore = applyArgumentsResult(dependencyMap[24]).useAlertStore;
              if (useAlertStore.getState().alerts.length <= 0) {
                const tmp14 = type === applyArgumentsResult(dependencyMap[23]).ChannelTypes.GUILD_VOICE && chatOpen;
                let result = null != type;
                if (result) {
                  result = isTextChannel(type);
                }
                const state1 = closure_1_9.getState();
                if (result) {
                  result = applyArgumentsResult.isOnChannelNavigationRoute();
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
                log(applyArgumentsResult.chatChannelId);
                return result;
              }
            }
            log();
            return false;
          }
          const tmp3Result = applyArgumentsResult(dependencyMap[21]);
        }
      }
    };
    applyArgumentsResult.updateImpressionsForChatBecameViewable = function updateImpressionsForChatBecameViewable() {
      log();
      const impressionCache = applyArgumentsResult.impressionCache;
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let obj = applyArgumentsResult;
        let impressionCache2 = applyArgumentsResult.impressionCache;
        let value = impressionCache2.get(nextResult);
        let obj2 = value;
        if (null != value) {
          let channelId = obj.parseCacheKey(tmp4).channelId;
          if (obj2.isRunning) {
            let tmp9 = log(obj.chatChannelId);
            obj = { key: null, shouldDelete: false };
            obj[0] = tmp4;
            let stopOneResult = obj.stopOne(obj);
          }
          if (channelId === obj.chatChannelId) {
            let tmp16 = log(obj.chatChannelId);
            let cloneResult = obj2.clone({ triggeredByStatusChange: false });
            let startResult = cloneResult.start();
            let impressionCache3 = obj.impressionCache;
            let result = impressionCache3.set(tmp4, cloneResult);
          }
        }
        continue;
      }
    };
    applyArgumentsResult.refreshImpressions = function refreshImpressions() {
      if (applyArgumentsResult.isChatViewable) {
        const result = applyArgumentsResult.updateImpressionsForChatBecameViewable();
      } else {
        log();
        applyArgumentsResult.stopMany();
      }
    };
    applyArgumentsResult.checkChatViewable = function checkChatViewable() {
      const isChatViewable = applyArgumentsResult.getIsChatViewable();
      let flag = isChatViewable !== applyArgumentsResult.isChatViewable;
      if (flag) {
        log();
        applyArgumentsResult.isChatViewable = isChatViewable;
        applyArgumentsResult.refreshImpressions();
        flag = true;
      }
      return flag;
    };
    applyArgumentsResult.checkIsOnChannelNavigationRoute = function checkIsOnChannelNavigationRoute() {
      const result = applyArgumentsResult.isOnChannelNavigationRoute();
      if (result !== applyArgumentsResult.wasOnChannelNavigationRoute) {
        log();
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.wasOnChannelNavigationRoute = result;
      }
    };
    applyArgumentsResult.checkSearchShowing = function checkSearchShowing() {
      const isSearchShowingResult = applyArgumentsResult.isSearchShowing();
      if (isSearchShowingResult !== applyArgumentsResult.wasSearchShowing) {
        log();
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.wasSearchShowing = isSearchShowingResult;
      }
    };
    applyArgumentsResult.onChannelChanged = function onChannelChanged(channelId) {
      applyArgumentsResult.previousChatChannelId = applyArgumentsResult.chatChannelId;
      applyArgumentsResult.chatChannelId = channelId;
      log(applyArgumentsResult.chatChannelId);
      applyArgumentsResult.stopMany({ shouldDeleteHiddenEmbeds: true });
      if (!applyArgumentsResult.checkChatViewable()) {
        applyArgumentsResult.refreshImpressions();
      }
    };
    applyArgumentsResult.checkOpenModalKey = function checkOpenModalKey() {
      const openModalKey = applyArgumentsResult(dependencyMap[21]).getOpenModalKey();
      if (openModalKey !== applyArgumentsResult.previouslyOpenModalKey) {
        log(applyArgumentsResult.previouslyOpenModalKey);
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.previouslyOpenModalKey = openModalKey;
      }
      const obj = applyArgumentsResult(dependencyMap[21]);
    };
    applyArgumentsResult.handleQuestStoreChanged = function handleQuestStoreChanged() {
      log();
      const quests = closure_1_15.quests;
      const impressionCache = applyArgumentsResult.impressionCache;
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let parseCacheKeyResult = applyArgumentsResult.parseCacheKey(nextResult);
        let tmp7 = parseCacheKeyResult;
        if (set.has(parseCacheKeyResult.questId)) {
          let value = quests.get(tmp7.questId);
          let tmp10 = value;
          let tmp12 = applyArgumentsResult.questStatuses[tmp7.questId];
          let questStatus = null;
          if (null != value) {
            let obj3 = applyArgumentsResult(dependencyMap[25]);
            questStatus = obj3.getQuestStatus(tmp10);
          }
          if (questStatus !== tmp12) {
            applyArgumentsResult.questStatuses[tmp7.questId] = tmp17;
            if (applyArgumentsResult.isChatViewable) {
              let impressionCache2 = applyArgumentsResult.impressionCache;
              value = impressionCache2.get(tmp4);
              let obj4 = value;
              let isRunning;
              if (value != null) {
                isRunning = value.isRunning;
              }
              if (true === isRunning) {
                if (null != tmp10) {
                  let cloneResult = obj4.clone({ triggeredByStatusChange: true });
                  let startResult = cloneResult.start();
                  let impressionCache3 = applyArgumentsResult.impressionCache;
                  let result = impressionCache3.set(tmp4, cloneResult);
                } else {
                  let obj = { key: null, shouldDelete: true };
                  obj[0] = tmp4;
                  let stopOneResult = applyArgumentsResult.stopOne(obj);
                }
              }
            }
          }
        }
        continue;
      }
      set = new Set(quests.keys());
    };
    applyArgumentsResult.handleSelectedChannelStoreChanged = function handleSelectedChannelStoreChanged() {
      log();
      const channelId = closure_1_12.getChannelId();
      if (channelId !== applyArgumentsResult.chatChannelId) {
        const channel = closure_1_11.getChannel(applyArgumentsResult.chatChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let hasItem = null != type;
        if (hasItem) {
          const items = [applyArgumentsResult(dependencyMap[23]).ChannelTypes.GUILD_STAGE_VOICE, applyArgumentsResult(dependencyMap[23]).ChannelTypes.GUILD_VOICE];
          let type1;
          if (channel != null) {
            type1 = channel.type;
          }
          hasItem = items.includes(type1);
        }
        if (!tmp9) {
          log(applyArgumentsResult.chatChannelId);
          applyArgumentsResult.onChannelChanged(channelId);
        }
        tmp9 = null != applyArgumentsResult.chatChannelId && hasItem;
      }
    };
    applyArgumentsResult.handleActionSheetStoreChanged = function handleActionSheetStoreChanged() {
      log();
      const isOpenResult = closure_1_5.isOpen();
      if (isOpenResult !== applyArgumentsResult.wasActionSheetOpen) {
        log();
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.wasActionSheetOpen = isOpenResult;
      }
    };
    applyArgumentsResult.handleAppStateStoreChanged = function handleAppStateStoreChanged() {
      log();
      const state = closure_1_14.getState();
      const tmp4 = state === applyArgumentsResult(dependencyMap[22]).AppStates.ACTIVE;
      if (applyArgumentsResult.wasAppActive !== tmp4) {
        log();
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.wasAppActive = tmp4;
      }
    };
    applyArgumentsResult.handleVoicePanelStoreChanged = function handleVoicePanelStoreChanged() {
      log();
      const state = closure_1_9.getState();
      const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
      if (isAnyVoicePanelOpenResult !== applyArgumentsResult.wasAnyVoicePanelOpen) {
        log();
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.wasAnyVoicePanelOpen = isAnyVoicePanelOpenResult;
      }
    };
    applyArgumentsResult.handleChannelDetailsStoreChanged = function handleChannelDetailsStoreChanged() {
      applyArgumentsResult.checkSearchShowing();
    };
    applyArgumentsResult.handleChannelRTCStoreChanged = function handleChannelRTCStoreChanged() {
      log();
      const openChatChannelIds = closure_1_6.getOpenChatChannelIds();
      const items = [...openChatChannelIds];
      const iter = new Set(items)[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = closure_1_11.getChannel(nextResult);
        let tmp7 = channel;
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (null != type) {
          let items1 = [applyArgumentsResult(dependencyMap[23]).ChannelTypes.GUILD_STAGE_VOICE, applyArgumentsResult(dependencyMap[23]).ChannelTypes.GUILD_VOICE];
          let type1;
          if (tmp7 != null) {
            type1 = tmp7.type;
          }
          if (items1.includes(type1)) {
            let channelsWithChatOpen = applyArgumentsResult.channelsWithChatOpen;
            let hasItem = channelsWithChatOpen.has(tmp4);
            let hasItem1 = openChatChannelIds.has(tmp4);
            if (hasItem !== hasItem1) {
              if (tmp14) {
                if (tmp4 !== applyArgumentsResult.chatChannelId) {
                  let onChannelChangedResult = applyArgumentsResult.onChannelChanged(nextResult);
                  iter.return();
                  break;
                }
                break;
              }
              if (!hasItem1) {
                if (applyArgumentsResult.previousChatChannelId !== applyArgumentsResult.chatChannelId) {
                  let onChannelChangedResult1 = applyArgumentsResult.onChannelChanged(applyArgumentsResult.previousChatChannelId);
                  iter.return();
                  break;
                }
                break;
              }
              let checkChatViewableResult = applyArgumentsResult.checkChatViewable();
              iter.return();
              break;
            }
            let _Set = Set;
            let set1 = new Set(openChatChannelIds);
            applyArgumentsResult.channelsWithChatOpen = set1;
          }
        }
        continue;
      }
      const set = new Set(items);
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      log();
      const result = applyArgumentsResult.checkIsOnChannelNavigationRoute();
      applyArgumentsResult.checkOpenModalKey();
    };
    applyArgumentsResult.handleAlertStoreChanged = function handleAlertStoreChanged() {
      let tmp = null != closure_1_13.getAlert();
      if (!tmp) {
        const useAlertStore = applyArgumentsResult(dependencyMap[24]).useAlertStore;
        tmp = useAlertStore.getState().alerts.length > 0;
      }
      if (tmp !== applyArgumentsResult.wasAlertOpen) {
        log();
        applyArgumentsResult.checkChatViewable();
        applyArgumentsResult.wasAlertOpen = tmp;
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
let result = require("obj132").fileFinishedImporting("modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx");

export default questMobileEmbedVisibilityManager;