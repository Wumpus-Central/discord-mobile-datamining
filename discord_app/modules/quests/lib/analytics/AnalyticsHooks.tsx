// discord_app/modules/quests/lib/analytics/AnalyticsHooks.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("useAdContentImpressionTrackerProps").fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = function useTrackQuestEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(10467).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return React.useCallback((properties) => {
    let obj = callback(outer1_2[3]);
    obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackQuestEvent(obj);
  }, items);
};
export const useTrackQuestContentClickedWithImpression = function useTrackQuestContentClickedWithImpression() {
  const getQuestImpressionId = callback(10467).useGetQuestImpressionId();
  callback = getQuestImpressionId;
  const items = [getQuestImpressionId];
  callback = React.useCallback((properties) => {
    let obj = callback(outer1_2[3]);
    obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackQuestEvent(obj);
  }, items);
  const items1 = [callback];
  return React.useCallback((questId) => {
    let closure_2;
    let noop;
    let closure_4;
    let closure_5;
    let sourceQuestContent;
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: noop, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    let adMetadataSealed;
    let adTrafficMetadataSealed;
    adMetadataSealed = callback(outer1_2[4]).getAdMetadataSealed(sourceQuestContent);
    let obj = callback(outer1_2[4]);
    adTrafficMetadataSealed = callback(outer1_2[4]).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    const obj2 = callback(outer1_2[4]);
    let obj3 = callback(outer1_2[5]);
    const adUser = obj3.getAdUser(callback(outer1_2[6]).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { questId, event: outer2_4.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
      obj = {};
      const merged = Object.assign(callback(outer2_2[6]).getContentProperties(questContent, noop, closure_4));
      const merged1 = Object.assign(outer2_1(outer2_2[7])());
      obj.cta_name = closure_2;
      const obj3 = callback(outer2_2[6]);
      const tmp = questId;
      const tmp4 = questContent;
      obj.click_id = callback(outer2_2[8]).v4();
      advertisingId = null;
      if (null != advertisingId) {
        let tmp2Result = tmp2(tmp3[9]);
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      obj.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        tmp2Result = tmp2(tmp3[9]);
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
      const obj4 = callback(outer2_2[8]);
      const currentQuestHomeSearchSession = callback(outer2_2[10]).getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj.search_session_id = uuid;
      obj[2] = obj;
      obj[3] = closure_5;
      const tmp2Result1 = callback(outer2_2[10]);
      obj[4] = callback(outer2_2[4]).isBillableQuestContent(tmp4);
      obj[5] = sourceQuestContent;
      tmp(obj);
    });
  }, items1);
};
export const useTrackAdContentEventWithImpression = function useTrackAdContentEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(10467).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return React.useCallback((properties) => {
    let obj = callback(outer1_2[3]);
    obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items);
};
export const useTrackAdContentClickedWithImpression = function useTrackAdContentClickedWithImpression() {
  const getQuestImpressionId = callback(10467).useGetQuestImpressionId();
  callback = getQuestImpressionId;
  const items = [getQuestImpressionId];
  callback = React.useCallback((properties) => {
    let obj = callback(outer1_2[3]);
    obj = {};
    const merged = Object.assign(properties);
    obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items);
  const items1 = [callback];
  return React.useCallback((arg0) => {
    let callback;
    let closure_1;
    let closure_2;
    let closure_4;
    let closure_5;
    let closure_6;
    let closure_7;
    let closure_8;
    let questContent;
    ({ adContentId: callback, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let obj = callback(outer1_2[5]);
    const adUser = obj.getAdUser(callback(outer1_2[6]).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      let obj = { adContentId: closure_0, relatedQuestId: closure_1, adCreativeType: closure_2, event: outer2_4.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
      obj = {};
      const merged = Object.assign(callback(outer2_2[6]).getContentProperties(questContent, closure_5, closure_6));
      const merged1 = Object.assign(outer2_1(outer2_2[7])());
      obj.cta_name = closure_4;
      const obj3 = callback(outer2_2[6]);
      const tmp = outer1_0;
      const tmp4 = questContent;
      obj.click_id = callback(outer2_2[8]).v4();
      advertisingId = null;
      if (null != advertisingId) {
        let tmp2Result = tmp2(tmp3[9]);
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
      }
      obj.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        tmp2Result = tmp2(tmp3[9]);
        advertisingId1 = null;
        if (tmp2Result.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
      }
      obj.android_advertising_id = advertisingId1;
      const obj4 = callback(outer2_2[8]);
      const currentQuestHomeSearchSession = callback(outer2_2[10]).getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj.search_session_id = uuid;
      obj[4] = obj;
      obj[5] = closure_7;
      const tmp2Result1 = callback(outer2_2[10]);
      obj[6] = callback(outer2_2[4]).isBillableQuestContent(tmp4);
      obj[7] = closure_8;
      tmp(obj);
    });
  }, items1);
};
export const useQuestsEmbedFallbackAnalytics = function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const result = callback(outer1_2[3]).trackQuestEmbedFallbackViewed(closure_1, callback);
  }, items);
};
export const useBountyCarouselEmptyStateAnalytics = function useBountyCarouselEmptyStateAnalytics(reason) {
  let closure_0 = reason;
  const items = [reason];
  const effect = React.useEffect(() => {
    if (null != callback) {
      const result = callback(outer1_2[3]).trackBountyCarouselEmptyStateViewed(tmp);
      const obj = callback(outer1_2[3]);
    }
  }, items);
};
export const useQuestHomeEntrypointAnalyticsEvents = function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let dependencyMap;
  let memo;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  const QuestContent = questHomeHero(5226).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const contentProperties = questHomeHero(_undefined[6]).getContentProperties(_undefined);
    delete tmp[tmp2];
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  callback = memo.useCallback((arg0) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        let obj = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
        obj[0] = tmp.id;
        obj[1] = questHomeHero(_undefined[12]).AdCreativeType.QUEST_HOME_HERO;
        obj[2] = arg0;
        obj[3] = memo;
        obj[4] = _undefined;
        questHomeHero(_undefined[3]).trackAdContentEvent(obj);
        const obj2 = questHomeHero(_undefined[3]);
      }
    }
    obj = shouldShowQuestHomeHeroContent(_undefined[13]);
    obj.track(arg0, memo);
  }, items1);
  const items2 = [callback];
  callback1 = memo.useCallback(() => {
    callback(callback.QUEST_HOVER);
  }, items2);
  const items3 = [callback];
  callback2 = memo.useCallback(() => {
    callback(callback.QUEST_HOVER_OFF);
  }, items3);
  callback3 = memo.useCallback(() => {
    shouldShowQuestHomeHeroContent(_undefined[13]).track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  callback4 = memo.useCallback(() => {
    let obj = shouldShowQuestHomeHeroContent(_undefined[13]);
    obj = { is_targeted: false };
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      obj = { ad_content_id: null };
      obj[0] = tmp2.id;
      let obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged1 = Object.assign(obj1);
    obj.track(callback.QUEST_CONTENT_CLICKED, obj);
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
};