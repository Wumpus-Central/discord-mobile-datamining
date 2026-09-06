// === Module 17815: QuestMobileEmbedVisibilityManager ===

// Module 17815 (QuestMobileEmbedVisibilityManager)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import ChannelTypes from "ChannelTypes" /* 1094 */;
import privDefault from "priv" /* 1437 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import useAlertStore2 from "useAlertStore" /* 4906 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import getQuestLogger from "getQuestLogger" /* 7709 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import ContentImpressionTracker from "ContentImpressionTracker" /* 11487 */;
import _slicedToArray from "module_32" /* 32 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import VoicePanelStore from "VoicePanelStore" /* 4768 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import AlertStore from "AlertStore" /* 11545 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import QuestStore from "QuestStore" /* 7703 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const ChannelDetailsStore = fn(7876);
({ useChannelDetailsStore: closure_7, getIsChannelDetailsSearchActive: closure_8 } = ChannelDetailsStore);
const isTextChannel = fn(1961).isTextChannel;
let closure_16 = fn(11196).MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const MessageStates = fn(1074).MessageStates;
function log() {
  if (questLogger == null) {
    questLogger = getQuestLogger.getQuestLogger({ location: "QuestMobileEmbedVisibilityManager" });
  }
}
class QuestMobileEmbedVisibilityManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = new closure_1(closure_2[15])({ max: 50 });
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
          if (percentVisible > closure_16) {
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
      const item = codedLinks.forEach((type, questContentPosition) => {
        if (type.type === applyArgumentsResult(4548).CodedLinkType.QUESTS_EMBED) {
          const code = type.code;
          let obj = set;
          if (!set.has(code)) {
            obj = { questId: code, questContentPosition, messageId: null, channelId: null };
            ({ id: obj2.messageId, channel_id: obj2.channelId } = closure_0);
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
        let tmp2 = QuestStore;
        let quest = QuestStore.getQuest(nextResult.questId);
        let tmp4 = quest;
        if (null != quest) {
          let obj = { quest: null, questContent: null, triggeredByStatusChange: false, questContentPosition: null, channelId: null, messageId: null, questId: null, isQuestEnrollmentBlocked: null, sourceQuestContent: null, adCreativeType: null };
          obj.quest = tmp4;
          obj.questContent = QuestTypes.QuestContent.QUEST_EMBED_MOBILE;
          obj.questContentPosition = questContentPosition;
          obj.channelId = channelId;
          obj.messageId = messageId;
          obj.questId = tmp4.id;
          obj.isQuestEnrollmentBlocked = null != tmp2.questEnrollmentBlockedUntil;
          obj.sourceQuestContent = QuestTypes.QuestContent.QUEST_EMBED_MOBILE;
          obj.adCreativeType = AdCreativeType.AdCreativeType.QUEST;
          let ensureImpressionResult = applyArgumentsResult.ensureImpression(obj);
        }
        continue;
      }
      applyArgumentsResult.stopMany({ visibleEmbeds, shouldDeleteHiddenEmbeds: true });
    };
    applyArgumentsResult.ensureImpression = function ensureImpression(quest) {
      const merged = Object.assign(quest, Object.assign({ quest: 0 }));
      const cacheKey = applyArgumentsResult.getCacheKey(merged);
      const impressionCache = applyArgumentsResult.impressionCache;
      value = impressionCache.get(cacheKey);
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
          let obj = { triggeredByStatusChange: merged.triggeredByStatusChange };
          cloneResult = value.clone(obj);
        }
        if (cloneResult == null) {
          obj = { adContentIds: null };
          const items = [quest.quest.id];
          obj.adContentIds = items;
          const merged1 = Object.assign(merged);
          cloneResult = new ContentImpressionTracker.QuestContentImpression(obj);
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
      value = impressionCache.get(key);
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
        log();
        const impressionCache2 = applyArgumentsResult.impressionCache;
        impressionCache2.del(key);
      }
      return flag;
    };
    applyArgumentsResult.stopMany = function stopMany(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        let obj = { visibleEmbeds: [], shouldDeleteHiddenEmbeds: false };
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
          obj = { key: null, shouldDelete: null };
          obj.key = tmp3;
          obj.shouldDelete = flag;
          let stopOneResult = applyArgumentsResult.stopOne(obj);
        }
        continue;
      }
    };
    applyArgumentsResult.getCacheKey = function getCacheKey(merged) {
      return merged.channelId + ":" + merged.messageId + ":" + merged.questId;
    };
    applyArgumentsResult.parseCacheKey = function parseCacheKey(nextResult) {
      const tmp = _slicedToArray(nextResult.split(":"), 3);
      return { channelId: tmp[0], messageId: tmp[1], questId: tmp[2] };
    };
    applyArgumentsResult.isOnChannelNavigationRoute = function isOnChannelNavigationRoute() {
      let isChannelFocusedResult = applyArgumentsResult(10089).isChannelFocused();
      applyArgumentsResult(4417);
      if (isChannelFocusedResult) {
        isChannelFocusedResult = "channel" === tmp3;
      }
      return isChannelFocusedResult;
    };
    applyArgumentsResult.isSearchShowing = function isSearchShowing() {
      let tmp2 = null != applyArgumentsResult.chatChannelId;
      if (tmp2) {
        tmp2 = React6(tmp.chatChannelId);
      }
      return tmp2;
    };
    applyArgumentsResult.getIsChatViewable = function getIsChatViewable() {
      if (null == applyArgumentsResult.chatChannelId) {
        log();
        return false;
      } else if (ActionSheetStore.isOpen()) {
        log();
        return false;
      } else {
        const state = AppStateStore.getState();
        if (state !== ConstantsIOS.AppStates.ACTIVE) {
          log();
          return false;
        } else {
          const channel = ChannelStore.getChannel(obj.chatChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          const chatOpen = ChannelRTCStore.getChatOpen(obj.chatChannelId);
          const tmp8 = type === tmp3(1094).ChannelTypes.GUILD_STAGE_VOICE && chatOpen;
          const openModalKey = tmp3(4417).getOpenModalKey();
          const _HermesInternal = HermesInternal;
          if (null != openModalKey) {
            if (openModalKey !== "voice-channel-" + obj.chatChannelId) {
              log();
              return false;
            }
          }
          if (obj.isSearchShowing()) {
            log();
            return false;
          } else {
            if (null == AlertStore.getAlert()) {
              const useAlertStore = tmp3(4906).useAlertStore;
              if (useAlertStore.getState().alerts.length <= 0) {
                const tmp14 = type === tmp3(1094).ChannelTypes.GUILD_VOICE && chatOpen;
                let result = null != type;
                if (result) {
                  result = isTextChannel(type);
                }
                const state1 = VoicePanelStore.getState();
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
                log(obj.chatChannelId);
                return result;
              }
            }
            log();
            return false;
          }
          const tmp3Result = tmp3(4417);
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
        value = impressionCache2.get(nextResult);
        let obj2 = value;
        if (null != value) {
          let channelId = obj.parseCacheKey(tmp4).channelId;
          if (obj2.isRunning) {
            let tmp9 = log(obj.chatChannelId);
            obj = { key: null, shouldDelete: false };
            obj.key = tmp4;
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
        const result = obj.updateImpressionsForChatBecameViewable();
      } else {
        log();
        obj.stopMany();
      }
    };
    applyArgumentsResult.checkChatViewable = function checkChatViewable() {
      const isChatViewable = applyArgumentsResult.getIsChatViewable();
      let flag = isChatViewable !== applyArgumentsResult.isChatViewable;
      if (flag) {
        log();
        obj.isChatViewable = isChatViewable;
        obj.refreshImpressions();
        flag = true;
      }
      return flag;
    };
    applyArgumentsResult.checkIsOnChannelNavigationRoute = function checkIsOnChannelNavigationRoute() {
      const result = applyArgumentsResult.isOnChannelNavigationRoute();
      if (result !== applyArgumentsResult.wasOnChannelNavigationRoute) {
        log();
        obj.checkChatViewable();
        obj.wasOnChannelNavigationRoute = result;
      }
    };
    applyArgumentsResult.checkSearchShowing = function checkSearchShowing() {
      const isSearchShowingResult = applyArgumentsResult.isSearchShowing();
      if (isSearchShowingResult !== applyArgumentsResult.wasSearchShowing) {
        log();
        obj.checkChatViewable();
        obj.wasSearchShowing = isSearchShowingResult;
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
      const openModalKey = NavigationRouteUtils.getOpenModalKey();
      if (openModalKey !== applyArgumentsResult.previouslyOpenModalKey) {
        log(obj2.previouslyOpenModalKey);
        obj2.checkChatViewable();
        obj2.previouslyOpenModalKey = openModalKey;
      }
    };
    applyArgumentsResult.handleQuestStoreChanged = function handleQuestStoreChanged() {
      log();
      const quests = QuestStore.quests;
      const impressionCache = applyArgumentsResult.impressionCache;
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let obj2 = applyArgumentsResult;
        let parseCacheKeyResult = applyArgumentsResult.parseCacheKey(nextResult);
        let tmp7 = parseCacheKeyResult;
        if (set.has(parseCacheKeyResult.questId)) {
          value = quests.get(tmp7.questId);
          let tmp10 = value;
          let tmp12 = obj2.questStatuses[tmp7.questId];
          let questStatus = null;
          if (null != value) {
            let obj3 = AnalyticsTypes;
            questStatus = obj3.getQuestStatus(tmp10);
          }
          if (questStatus !== tmp12) {
            obj2.questStatuses[tmp7.questId] = tmp17;
            if (obj2.isChatViewable) {
              let impressionCache2 = obj2.impressionCache;
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
                  let impressionCache3 = obj2.impressionCache;
                  let result = impressionCache3.set(tmp4, cloneResult);
                } else {
                  let obj = { key: null, shouldDelete: true };
                  obj.key = tmp4;
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
      log();
      const channelId = SelectedChannelStore.getChannelId();
      if (channelId !== applyArgumentsResult.chatChannelId) {
        const channel = ChannelStore.getChannel(obj.chatChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let hasItem = null != type;
        if (hasItem) {
          const items = [ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE, ChannelTypes.ChannelTypes.GUILD_VOICE];
          let type1;
          if (channel != null) {
            type1 = channel.type;
          }
          hasItem = items.includes(type1);
        }
        if (!tmp9) {
          log(obj.chatChannelId);
          obj.onChannelChanged(channelId);
        }
        tmp9 = null != obj.chatChannelId && hasItem;
      }
    };
    applyArgumentsResult.handleActionSheetStoreChanged = function handleActionSheetStoreChanged() {
      log();
      const isOpenResult = ActionSheetStore.isOpen();
      if (isOpenResult !== applyArgumentsResult.wasActionSheetOpen) {
        log();
        obj.checkChatViewable();
        obj.wasActionSheetOpen = isOpenResult;
      }
    };
    applyArgumentsResult.handleAppStateStoreChanged = function handleAppStateStoreChanged() {
      log();
      const state = AppStateStore.getState();
      const tmp4 = state === ConstantsIOS.AppStates.ACTIVE;
      if (applyArgumentsResult.wasAppActive !== tmp4) {
        log();
        obj.checkChatViewable();
        obj.wasAppActive = tmp4;
      }
    };
    applyArgumentsResult.handleVoicePanelStoreChanged = function handleVoicePanelStoreChanged() {
      log();
      const state = VoicePanelStore.getState();
      const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
      if (isAnyVoicePanelOpenResult !== applyArgumentsResult.wasAnyVoicePanelOpen) {
        log();
        obj2.checkChatViewable();
        obj2.wasAnyVoicePanelOpen = isAnyVoicePanelOpenResult;
      }
    };
    applyArgumentsResult.handleChannelDetailsStoreChanged = function handleChannelDetailsStoreChanged() {
      applyArgumentsResult.checkSearchShowing();
    };
    applyArgumentsResult.handleChannelRTCStoreChanged = function handleChannelRTCStoreChanged() {
      log();
      const openChatChannelIds = ChannelRTCStore.getOpenChatChannelIds();
      const items = [...openChatChannelIds];
      const iter = new Set(items)[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let tmp7 = channel;
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (null != type) {
          let items1 = [ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE, ChannelTypes.ChannelTypes.GUILD_VOICE];
          let type1;
          if (tmp7 != null) {
            type1 = tmp7.type;
          }
          if (items1.includes(type1)) {
            let obj2 = applyArgumentsResult;
            let channelsWithChatOpen = applyArgumentsResult.channelsWithChatOpen;
            let hasItem = channelsWithChatOpen.has(tmp4);
            let hasItem1 = openChatChannelIds.has(tmp4);
            if (hasItem !== hasItem1) {
              if (tmp14) {
                if (tmp4 !== obj2.chatChannelId) {
                  let onChannelChangedResult = obj2.onChannelChanged(nextResult);
                  iter.return();
                  break;
                }
                break;
              }
              if (!hasItem1) {
                if (obj2.previousChatChannelId !== obj2.chatChannelId) {
                  let onChannelChangedResult1 = obj2.onChannelChanged(obj2.previousChatChannelId);
                  iter.return();
                  break;
                }
                break;
              }
              let checkChatViewableResult = obj2.checkChatViewable();
              iter.return();
              break;
            }
            let _Set = Set;
            let tmp30 = new.target;
            let tmp31 = new.target;
            let set1 = new Set(openChatChannelIds);
            applyArgumentsResult.channelsWithChatOpen = set1;
          }
        }
        continue;
      }
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      log();
      const result = applyArgumentsResult.checkIsOnChannelNavigationRoute();
      applyArgumentsResult.checkOpenModalKey();
    };
    applyArgumentsResult.handleAlertStoreChanged = function handleAlertStoreChanged() {
      let tmp = null != AlertStore.getAlert();
      if (!tmp) {
        const useAlertStore = useAlertStore2.useAlertStore;
        tmp = useAlertStore.getState().alerts.length > 0;
      }
      if (tmp !== applyArgumentsResult.wasAlertOpen) {
        log();
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
    obj = closure_0(closure_2[26]);
    rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      str = "state";
      addListenerResult = rootNavigationRef.addListener("state", self.handleNavigationStateChanged);
    }
    self.unsubscribeFromVoicePanelStore = closure_9.subscribe(self.handleVoicePanelStoreChanged);
    self.unsubscribeFromChannelDetailsStore = useChannelDetailsStore.subscribe(self.handleChannelDetailsStoreChanged);
    useAlertStore = tmp(tmp2[24]).useAlertStore;
    self.unsubscribeFromAlertStore = useAlertStore.subscribe(self.handleAlertStoreChanged);
    _initializeResult = super._initialize();
    return;
  }
  _terminate() {
    self = this;
    obj = closure_0(closure_2[26]);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx");

export default questMobileEmbedVisibilityManager;