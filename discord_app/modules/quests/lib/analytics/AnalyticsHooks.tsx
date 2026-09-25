// discord_app/modules/quests/lib/analytics/AnalyticsHooks.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import v1 from "../../../../../_runtime/01255_v1.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import getDeviceMetadataDefault from "../../../device/getDeviceMetadata.native.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import AnalyticsActions from "AnalyticsActions.tsx";
import AnalyticsTypes from "AnalyticsTypes.tsx";
import QuestHomeSearchSession from "QuestHomeSearchSession.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsHooks.tsx");

export const useTrackQuestEventWithImpression = function useTrackQuestEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(10698).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return noop.useCallback((properties) => {
    const obj2 = {};
    const merged = Object.assign(properties);
    const obj3 = {};
    const merged1 = Object.assign(properties.properties);
    obj3.impression_id = callback();
    obj2.properties = obj3;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items);
};
export const useTrackQuestContentClickedWithImpression = function useTrackQuestContentClickedWithImpression() {
  const getQuestImpressionId = callback(10698).useGetQuestImpressionId();
  closure_129_0 = getQuestImpressionId;
  const items = [getQuestImpressionId];
  callback = noop.useCallback((properties) => {
    const obj2 = {};
    const merged = Object.assign(properties);
    const obj3 = {};
    const merged1 = Object.assign(properties.properties);
    obj3.impression_id = callback();
    obj2.properties = obj3;
    AnalyticsActions.trackQuestEvent(obj2);
  }, items);
  const items1 = [callback];
  return noop.useCallback((questId) => {
    questId = questId.questId;
    const questContent = questId.questContent;
    ({
      questContentCTA: closure_2,
      questContentPosition: closure_3,
      questContentRowIndex: closure_4,
      trackGuildAndChannelMetadata: closure_5,
      sourceQuestContent,
    } = questId);
    const adMetadataSealed = callback(7107).getAdMetadataSealed(sourceQuestContent);
    let obj = callback(7107);
    const adTrafficMetadataSealed = callback(7107).getAdTrafficMetadataSealed(sourceQuestContent, questId);
    let obj2 = callback(7107);
    let obj3 = callback(7142);
    const adUser = obj3.getAdUser(callback(7136).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      const obj = {
        questId,
        event: AnalyticEvents.QUEST_CONTENT_CLICKED,
        properties: null,
        trackGuildAndChannelMetadata: null,
        shouldExtendSession: null,
        sourceQuestContent: null,
      };
      const obj2 = {};
      const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_3, closure_1_4));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj2.cta_name = cta_name;
      obj2.click_id = v1.v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        tmp2Result = PlatformUtils;
      }
      obj2.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        tmp2Result4 = PlatformUtils;
      }
      obj2.android_advertising_id = advertisingId1;
      let tmp9 = null;
      if (null != closure_7) {
        tmp9 = closure_7;
      }
      obj2.metadata_sealed = tmp9;
      let tmp10 = null;
      if (null != closure_8) {
        tmp10 = closure_8;
      }
      obj2.traffic_metadata_sealed = tmp10;
      const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj2.search_session_id = uuid;
      obj.properties = obj2;
      obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      const tmp2Result5 = QuestHomeSearchSession;
      obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(questContent);
      obj.sourceQuestContent = sourceQuestContent;
      callback(obj);
      const tmp2Result6 = QuestDataUtils;
    });
  }, items1);
};
export const useTrackAdContentEventWithImpression = function useTrackAdContentEventWithImpression() {
  getQuestImpressionId = getQuestImpressionId(10698).useGetQuestImpressionId();
  const items = [getQuestImpressionId];
  return noop.useCallback((properties) => {
    const obj2 = {};
    const merged = Object.assign(properties);
    const obj3 = {};
    const merged1 = Object.assign(properties.properties);
    obj3.impression_id = callback();
    obj2.properties = obj3;
    AnalyticsActions.trackAdContentEvent(obj2);
  }, items);
};
export const useTrackAdContentClickedWithImpression = function useTrackAdContentClickedWithImpression() {
  const getQuestImpressionId = callback(10698).useGetQuestImpressionId();
  closure_129_0 = getQuestImpressionId;
  const items = [getQuestImpressionId];
  callback = noop.useCallback((properties) => {
    const obj2 = {};
    const merged = Object.assign(properties);
    const obj3 = {};
    const merged1 = Object.assign(properties.properties);
    obj3.impression_id = callback();
    obj2.properties = obj3;
    AnalyticsActions.trackAdContentEvent(obj2);
  }, items);
  const items1 = [callback];
  return noop.useCallback((arg0) => {
    ({ adContentId: callback, relatedQuestId: closure_1, adCreativeType: closure_2, questContent } = arg0);
    ({
      questContentCTA: closure_4,
      questContentPosition: closure_5,
      questContentRowIndex: closure_6,
      trackGuildAndChannelMetadata: closure_7,
      sourceQuestContent: closure_8,
    } = arg0);
    let obj = callback(7142);
    const adUser = obj.getAdUser(callback(7136).getQuestContentName(questContent));
    adUser.then((advertisingId) => {
      const obj = {
        adContentId,
        relatedQuestId,
        adCreativeType,
        event: AnalyticEvents.QUEST_CONTENT_CLICKED,
        properties: null,
        trackGuildAndChannelMetadata: null,
        shouldExtendSession: null,
        sourceQuestContent: null,
      };
      const obj2 = {};
      const merged = Object.assign(AnalyticsTypes.getContentProperties(questContent, closure_1_5, closure_1_6));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj2.cta_name = cta_name;
      obj2.click_id = v1.v4();
      advertisingId = null;
      if (null != advertisingId) {
        advertisingId = null;
        if (tmp2Result.isIOS()) {
          advertisingId = advertisingId.advertisingId;
        }
        tmp2Result = PlatformUtils;
      }
      obj2.apple_advertising_id = advertisingId;
      let advertisingId1 = null;
      if (null != advertisingId) {
        advertisingId1 = null;
        if (tmp2Result4.isAndroid()) {
          advertisingId1 = advertisingId.advertisingId;
        }
        tmp2Result4 = PlatformUtils;
      }
      obj2.android_advertising_id = advertisingId1;
      const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
      let uuid;
      if (currentQuestHomeSearchSession != null) {
        uuid = currentQuestHomeSearchSession.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      obj2.search_session_id = uuid;
      obj.properties = obj2;
      obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
      const tmp2Result5 = QuestHomeSearchSession;
      obj.shouldExtendSession = QuestDataUtils.isBillableQuestContent(questContent);
      obj.sourceQuestContent = sourceQuestContent;
      callback(obj);
      const tmp2Result6 = QuestDataUtils;
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
export const useBountyCarouselEmptyStateAnalytics = function useBountyCarouselEmptyStateAnalytics(arg0) {
  closure_0 = arg0;
  const items = [arg0];
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
  const QuestContent = questHomeHero(5754).QuestContent;
  const tmp = shouldShowQuestHomeHeroContent
    ? QuestContent.QUEST_HOME_ENTRYPOINT_THEMED
    : QuestContent.QUEST_HOME_ENTRYPOINT;
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
        const obj3 = {
          adContentId: tmp.id,
          adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO,
          event,
          properties: memo,
          sourceQuestContent,
        };
        AnalyticsActions.trackAdContentEvent(obj3);
      }
    }
    AnalyticsUtilsDefault.track(event, memo);
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
    const merged = Object.assign(memo);
    if (null != questHomeHero) {
      const obj3 = { ad_content_id: tmp2.id };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged1 = Object.assign(obj4);
    AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_CONTENT_CLICKED, { is_targeted: false });
  }, items4);
  const items5 = [callback1, callback2, callback3, callback4];
  return memo.useMemo(
    () => ({
      handleMouseEnter: callback1,
      handleMouseLeave: callback2,
      handleOnboardingPopoutRender: callback3,
      handleEntrypointClick: callback4,
    }),
    items5,
  );
};
