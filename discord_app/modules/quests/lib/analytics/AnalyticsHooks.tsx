// discord_app/modules/quests/lib/analytics/AnalyticsHooks.tsx
import getDeviceMetadataDefault from "../../../device/getDeviceMetadata.native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = function useTrackQuestEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(10687).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return React.useCallback((properties) => {
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    const obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackQuestEvent(obj);
  }, items);
};
export const useTrackQuestContentClickedWithImpression = function useTrackQuestContentClickedWithImpression() {
  const getQuestImpressionId = callback(10687).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  callback = React.useCallback((properties) => {
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    const obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackQuestEvent(obj);
  }, items);
  const items1 = [callback];
  return React.useCallback((questId) => {
    questId = questId.questId;
    const questContent = questId.questContent;
    ({ questContentCTA: closure_2, questContentPosition: closure_3, questContentRowIndex: closure_4, trackGuildAndChannelMetadata: closure_5, sourceQuestContent } = questId);
    const adMetadataSealed = callback(dependencyMap[4]).getAdMetadataSealed(sourceQuestContent);
    let obj = callback(dependencyMap[4]);
    const adTrafficMetadataSealed = callback(dependencyMap[4]).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    const obj2 = callback(dependencyMap[4]);
    let obj3 = callback(dependencyMap[5]);
    const adUser = obj3.getAdUser(callback(dependencyMap[6]).getQuestContentName(questContent));
    adUser.then((result) => {
      const obj = {};
      const merged = Object.assign(callback(dependencyMap[6]).getContentProperties(questContent, closure_3, closure_4));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj.cta_name = closure_2;
      const obj3 = callback(dependencyMap[6]);
      obj.click_id = callback(dependencyMap[8]).v4();
      let advertisingId = null;
      if (null != result) {
        let tmp2Result = callback(dependencyMap[9]);
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = result.advertisingId;
        }
      }
      obj.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != result) {
        tmp2Result = callback(dependencyMap[9]);
        advertisingId1 = null;
        if (tmp2Result.isAndroid()) {
          advertisingId1 = result.advertisingId;
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
      const obj4 = callback(dependencyMap[8]);
      const currentQuestHomeSearchSession = callback(dependencyMap[10]).getCurrentQuestHomeSearchSession();
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
      const tmp2Result1 = callback(dependencyMap[10]);
      obj[4] = callback(dependencyMap[4]).isBillableQuestContent(questContent);
      obj[5] = sourceQuestContent;
      questId(obj);
      const tmp2Result2 = callback(dependencyMap[4]);
    });
  }, items1);
};
export const useTrackAdContentEventWithImpression = function useTrackAdContentEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(10687).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return React.useCallback((properties) => {
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    const obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items);
};
export const useTrackAdContentClickedWithImpression = function useTrackAdContentClickedWithImpression() {
  const getQuestImpressionId = callback(10687).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  callback = React.useCallback((properties) => {
    callback(dependencyMap[3]);
    const merged = Object.assign(properties);
    const obj = {};
    const merged1 = Object.assign(properties.properties);
    obj.impression_id = callback();
    obj.properties = obj;
    obj.trackAdContentEvent(obj);
  }, items);
  const items1 = [callback];
  return React.useCallback((arg0) => {
    ({ adContentId: callback, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({ questContentCTA: closure_4, questContentPosition: closure_5, questContentRowIndex: closure_6, trackGuildAndChannelMetadata: closure_7, sourceQuestContent: closure_8 } = arg0);
    let obj = callback(dependencyMap[5]);
    const adUser = obj.getAdUser(callback(dependencyMap[6]).getQuestContentName(questContent));
    adUser.then((result) => {
      const obj = {};
      const merged = Object.assign(callback(dependencyMap[6]).getContentProperties(questContent, closure_5, closure_6));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj.cta_name = closure_4;
      const obj3 = callback(dependencyMap[6]);
      obj.click_id = callback(dependencyMap[8]).v4();
      let advertisingId = null;
      if (null != result) {
        let tmp2Result = callback(dependencyMap[9]);
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = result.advertisingId;
        }
      }
      obj.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != result) {
        tmp2Result = callback(dependencyMap[9]);
        advertisingId1 = null;
        if (tmp2Result.isAndroid()) {
          advertisingId1 = result.advertisingId;
        }
      }
      obj.android_advertising_id = advertisingId1;
      const obj4 = callback(dependencyMap[8]);
      const currentQuestHomeSearchSession = callback(dependencyMap[10]).getCurrentQuestHomeSearchSession();
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
      const tmp2Result1 = callback(dependencyMap[10]);
      obj[6] = callback(dependencyMap[4]).isBillableQuestContent(questContent);
      obj[7] = closure_8;
      closure_1_0(obj);
      const tmp2Result2 = callback(dependencyMap[4]);
    });
  }, items1);
};
export const useQuestsEmbedFallbackAnalytics = function useQuestsEmbedFallbackAnalytics(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const result = callback(dependencyMap[3]).trackQuestEmbedFallbackViewed(closure_1, callback);
  }, items);
};
export const useBountyCarouselEmptyStateAnalytics = function useBountyCarouselEmptyStateAnalytics(reason) {
  closure_0 = reason;
  const items = [reason];
  const effect = React.useEffect(() => {
    if (null != callback) {
      const result = callback(dependencyMap[3]).trackBountyCarouselEmptyStateViewed(tmp);
      const obj = callback(dependencyMap[3]);
    }
  }, items);
};
export const useQuestHomeEntrypointAnalyticsEvents = function useQuestHomeEntrypointAnalyticsEvents(questHomeHero) {
  questHomeHero = questHomeHero.questHomeHero;
  const shouldShowQuestHomeHeroContent = questHomeHero.shouldShowQuestHomeHeroContent;
  let memo;
  const QuestContent = questHomeHero(6719).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED : QuestContent.QUEST_HOME_ENTRYPOINT;
  dependencyMap = tmp;
  const items = [tmp];
  memo = memo.useMemo(() => {
    const contentProperties = questHomeHero(7480).getContentProperties(dependencyMap);
    delete tmp[tmp2];
    return contentProperties;
  }, items);
  const items1 = [questHomeHero, shouldShowQuestHomeHeroContent, tmp, memo];
  const callback = memo.useCallback((arg0) => {
    if (null != questHomeHero) {
      if (shouldShowQuestHomeHeroContent) {
        let obj = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
        obj[0] = tmp.id;
        obj[1] = questHomeHero(7469).AdCreativeType.QUEST_HOME_HERO;
        obj[2] = arg0;
        obj[3] = memo;
        obj[4] = dependencyMap;
        questHomeHero(7470).trackAdContentEvent(obj);
        const obj2 = questHomeHero(7470);
      }
    }
    obj = shouldShowQuestHomeHeroContent(698);
    obj.track(arg0, memo);
  }, items1);
  const items2 = [callback];
  const callback1 = memo.useCallback(() => {
    callback(callback.QUEST_HOVER);
  }, items2);
  const items3 = [callback];
  const callback2 = memo.useCallback(() => {
    callback(callback.QUEST_HOVER_OFF);
  }, items3);
  const callback3 = memo.useCallback(() => {
    shouldShowQuestHomeHeroContent(698).track(callback.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
  }, []);
  const items4 = [memo, questHomeHero];
  const callback4 = memo.useCallback(() => {
    shouldShowQuestHomeHeroContent(698);
    let obj = { is_targeted: false };
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      obj = { ad_content_id: null };
      obj[0] = tmp2.id;
      obj1 = obj;
    } else {
      obj1 = {};
    }
    const merged1 = Object.assign(obj1);
    obj.track(callback.QUEST_CONTENT_CLICKED, obj);
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(() => ({ handleMouseEnter: callback1, handleMouseLeave: callback2, handleOnboardingPopoutRender: callback3, handleEntrypointClick: callback4 }), items5);
};