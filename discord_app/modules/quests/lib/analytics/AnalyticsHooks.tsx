// === Module 11774: AnalyticsHooks ===

// Module 11774 (AnalyticsHooks)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import v1 from "v1" /* 1256 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7677 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 7734 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = function useTrackQuestEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(11486).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return noop.useCallback((properties) => {
    let obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackQuestEvent(obj);
  }, items);
};
export const useTrackQuestContentClickedWithImpression = function useTrackQuestContentClickedWithImpression() {
  const getQuestImpressionId = callback(11486).useGetQuestImpressionId();
  closure_129_0 = getQuestImpressionId;
  const items = [getQuestImpressionId];
  callback = noop.useCallback((properties) => {
    let obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackQuestEvent(obj);
  }, items);
  const items1 = [callback];
  return noop.useCallback((questId) => {
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    const adMetadataSealed = callback(7699).getAdMetadataSealed(sourceQuestContent);
    let obj = callback(7699);
    const adTrafficMetadataSealed = callback(7699).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    const obj2 = callback(7699);
    let obj3 = callback(7729);
    const adUser = obj3.getAdUser(callback(7728).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { questId, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
      obj = {};
      const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_3, closure_1_4));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj.cta_name = cta_name;
      const tmp = callback;
      const tmp4 = questContent;
      obj.click_id = v1.v4();
      advertisingId = null;
      if (null != advertisingId) {
        let tmp2Result = tmp2(1115);
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      obj.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        tmp2Result = tmp2(1115);
        advertisingId1 = null;
        if (tmp2Result.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      obj.android_advertising_id = advertisingId1;
      let tmp9 = null;
      if (null != closure_7) {
        tmp9 = closure_7;
      }
      obj.metadata_sealed = tmp9;
      let tmp10 = null;
      if (null != closure_8) {
        tmp10 = closure_8;
      }
      obj.traffic_metadata_sealed = tmp10;
      const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj.search_session_id = uuid;
      obj.properties = obj;
      obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      const tmp2Result1 = QuestHomeSearchSession;
      obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(tmp4);
      obj.sourceQuestContent = sourceQuestContent;
      tmp(obj);
    });
  }, items1);
};
export const useTrackAdContentEventWithImpression = function useTrackAdContentEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(11486).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return noop.useCallback((properties) => {
    let obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items);
};
export const useTrackAdContentClickedWithImpression = function useTrackAdContentClickedWithImpression() {
  const getQuestImpressionId = callback(11486).useGetQuestImpressionId();
  closure_129_0 = getQuestImpressionId;
  const items = [getQuestImpressionId];
  callback = noop.useCallback((properties) => {
    let obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items);
  const items1 = [callback];
  return noop.useCallback((arg0) => {
    ({ adContentId: callback, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let obj = callback(7729);
    const adUser = obj.getAdUser(callback(7728).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { adContentId, relatedQuestId, adCreativeType, event: AnalyticEvents.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
      obj = {};
      const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_5, closure_1_6));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj.cta_name = cta_name;
      const tmp = callback;
      const tmp4 = questContent;
      obj.click_id = v1.v4();
      advertisingId = null;
      if (null != advertisingId) {
        let tmp2Result = tmp2(1115);
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      obj.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        tmp2Result = tmp2(1115);
        advertisingId1 = null;
        if (tmp2Result.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      obj.android_advertising_id = advertisingId1;
      const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj.search_session_id = uuid;
      obj.properties = obj;
      obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      const tmp2Result1 = QuestHomeSearchSession;
      obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(tmp4);
      obj.sourceQuestContent = sourceQuestContent;
      tmp(obj);
    });
  }, items1);
};
export const useQuestsEmbedFallbackAnalytics = function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    const result = AnalyticsActions.trackQuestEmbedFallbackViewed(closure_1, closure_0);
  }, items);
};
export const useBountyCarouselEmptyStateAnalytics = function useBountyCarouselEmptyStateAnalytics(reason) {
  closure_0 = reason;
  const items = [reason];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const result = AnalyticsActions.trackBountyCarouselEmptyStateViewed(tmp);
    }
  }, items);
};
export const useQuestHomeEntrypointAnalyticsEvents = function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let memo;
  const QuestContent = questHomeHero(5447).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const contentProperties = AnalyticsTypes.getContentProperties(closure_2);
    delete tmp[tmp2];
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  const callback = memo.useCallback((event) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        let obj = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event, properties: memo, sourceQuestContent };
        AnalyticsActions.trackAdContentEvent(obj);
      }
    }
    obj = AnalyticsUtilsDefault;
    obj.track(event, memo);
  }, items1);
  const items2 = [callback];
  const callback1 = memo.useCallback(() => {
    callback(AnalyticEvents.QUEST_HOVER);
  }, items2);
  const items3 = [callback];
  const callback2 = memo.useCallback(() => {
    callback(AnalyticEvents.QUEST_HOVER_OFF);
  }, items3);
  const callback3 = memo.useCallback(() => {
    shouldShowQuestHomeHeroContent(sourceQuestContent[13]).track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  const callback4 = memo.useCallback(() => {
    let obj = { is_targeted: false };
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      obj = { ad_content_id: tmp2.id };
      let obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged1 = Object.assign(obj1);
    obj.track(AnalyticEvents.QUEST_CONTENT_CLICKED, obj);
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
};