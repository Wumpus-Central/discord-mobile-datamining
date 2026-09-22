// discord_app/modules/quests/lib/analytics/AnalyticsActions.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import SessionHeartbeatScheduler from "../../../analytics_sessions/SessionHeartbeatScheduler.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import SessionAdGenerator from "../../../analytics_sessions/SessionAdGenerator.tsx";
import utils_QuestUtils from "../../utils/QuestUtils.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import AnalyticsTypes from "AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import DevToolsSettingsStore from "../../../devtools/DevToolsSettingsStore.tsx";
import DeveloperOptionsStore from "../../../../stores/DeveloperOptionsStore.tsx";
import QuestStore from "../../QuestStore.tsx";

require = fn;
function trackQuestEvent(sourceQuestContent) {
  ({ event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  const quests = QuestStore.quests;
  value = quests.get(sourceQuestContent.questId);
  if (null != value) {
    obj = {
      quest_id: value.id,
      quest_type: utils_QuestUtils.getQuestType(value.config),
      application_ids: null,
      quest_status: null,
    };
    let allApplicationIds = QuestTaskUtils.getAllApplicationIds(value);
    if (allApplicationIds == null) {
      allApplicationIds = [];
    }
    obj.application_ids = allApplicationIds;
    obj.quest_status = AnalyticsTypes.getQuestStatus(value);
    const id = value.id;
    const QUEST = AdCreativeType.AdCreativeType.QUEST;
    const tmp24Result = AnalyticsTypes;
    let uuid = SessionAdGenerator.getOrRefreshAdSession(shouldExtendSession).uuid;
    const tmp24Result5 = SessionAdGenerator;
    const adDecisionData = QuestDataUtils.getAdDecisionData(id, sourceQuestContent);
    const obj2 = { client_ad_session_id: uuid, billing_session_id: null, ad_content_id: null };
    const tmp24Result6 = QuestDataUtils;
    if (!tmp24Result7.isBillableQuestContent(sourceQuestContent, QUEST)) {
      const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
      let uuid1;
      if (activeSessionUnsafe != null) {
        uuid1 = activeSessionUnsafe.uuid;
      }
      if (uuid1 == null) {
        uuid1 = null;
      }
      uuid = uuid1;
      const tmp24Result8 = SessionHeartbeatScheduler;
    }
    obj2.billing_session_id = uuid;
    obj2.ad_content_id = id;
    const merged = Object.assign(adDecisionData);
    let creative_type = adDecisionData.creative_type;
    if (creative_type == null) {
      creative_type = QUEST;
    }
    const obj3 = {};
    obj2.creative_type = creative_type;
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(properties);
    if (trackGuildAndChannelMetadata === undefined) {
      trackGuildAndChannelMetadata = false;
    }
    if (!DevToolsSettingsStore.displayTools) {
      const isLoggingAnalyticsEvents = DeveloperOptionsStore.isLoggingAnalyticsEvents;
      if (!value.preview) {
        const hasItem = set.has(event);
        if (trackGuildAndChannelMetadata) {
          AppAnalyticsUtilsDefault.trackWithMetadata(event, obj3, hasItem);
          const tmp21Result = AppAnalyticsUtilsDefault;
        } else {
          const obj4 = { flush: hasItem };
          AnalyticsUtilsDefault.track(event, obj3, obj4);
          const tmp21Result2 = AnalyticsUtilsDefault;
        }
      }
    }
    tmp24Result7 = QuestDataUtils;
  }
}
function captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, arg1, arg2) {
  if (obj.MAIN_CTA === overlaySurface) {
    const obj2 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK,
    };
    const merged = Object.assign(arg2);
    const merged1 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj2);
  } else if (tmp.RATING_STAT === overlaySurface) {
    obj = captureAdUserAction;
    const obj4 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA,
      questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS,
    };
    const merged2 = Object.assign(arg2);
    const merged3 = Object.assign(arg1);
    obj.captureAdUserAction(obj4);
  } else if (tmp.SEE_MORE === overlaySurface) {
    const obj6 = {
      type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
      questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND,
    };
    const merged4 = Object.assign(arg2);
    const merged5 = Object.assign(arg1);
    captureAdUserAction.captureAdUserAction(obj6);
  }
}
function trackAdContentEvent(sourceQuestContent) {
  ({
    adContentId,
    relatedQuestId,
    adCreativeType,
    event,
    properties,
    trackGuildAndChannelMetadata,
    shouldExtendSession,
  } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let quest = null;
  if (null != relatedQuestId) {
    quest = QuestStore.getQuest(relatedQuestId);
  }
  let uuid = SessionAdGenerator.getOrRefreshAdSession(shouldExtendSession).uuid;
  const adDecisionData = QuestDataUtils.getAdDecisionData(adContentId, sourceQuestContent);
  const obj3 = { client_ad_session_id: uuid, billing_session_id: null, ad_content_id: null };
  if (!obj4.isBillableQuestContent(sourceQuestContent, adCreativeType)) {
    const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
    let uuid1;
    if (activeSessionUnsafe != null) {
      uuid1 = activeSessionUnsafe.uuid;
    }
    if (uuid1 == null) {
      uuid1 = null;
    }
    uuid = uuid1;
    const tmp3Result = SessionHeartbeatScheduler;
  }
  obj3.billing_session_id = uuid;
  obj3.ad_content_id = adContentId;
  const merged = Object.assign(adDecisionData);
  let creative_type = adDecisionData.creative_type;
  if (creative_type == null) {
    creative_type = adCreativeType;
  }
  const obj5 = {};
  obj3.creative_type = creative_type;
  const merged1 = Object.assign(obj3);
  obj4 = QuestDataUtils;
  let adMetadataSealed = QuestDataUtils.getAdMetadataSealed(sourceQuestContent, adContentId);
  if (adMetadataSealed == null) {
    adMetadataSealed = null;
  }
  obj5.metadata_sealed = adMetadataSealed;
  const tmp3Result4 = QuestDataUtils;
  let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(sourceQuestContent, undefined, adContentId);
  if (adTrafficMetadataSealed == null) {
    adTrafficMetadataSealed = null;
  }
  obj5.traffic_metadata_sealed = adTrafficMetadataSealed;
  if (null != relatedQuestId) {
    const obj6 = { quest_id: relatedQuestId, quest_status: null };
    let questStatus = null;
    if (null != quest) {
      questStatus = AnalyticsTypes.getQuestStatus(quest);
      const tmp3Result6 = AnalyticsTypes;
    }
    obj6.quest_status = questStatus;
    let obj7 = obj6;
  } else {
    obj7 = {};
  }
  const obj8 = {};
  const merged2 = Object.assign(obj7);
  const merged3 = Object.assign(obj5);
  const merged4 = Object.assign(properties);
  if (trackGuildAndChannelMetadata === undefined) {
    trackGuildAndChannelMetadata = false;
  }
  if (!DevToolsSettingsStore.displayTools) {
    const isLoggingAnalyticsEvents = DeveloperOptionsStore.isLoggingAnalyticsEvents;
    const hasItem = set.has(event);
    if (trackGuildAndChannelMetadata) {
      AppAnalyticsUtilsDefault.trackWithMetadata(event, obj8, hasItem);
      const tmp20Result = AppAnalyticsUtilsDefault;
    } else {
      const obj9 = { flush: hasItem };
      AnalyticsUtilsDefault.track(event, obj8, obj9);
      const tmp20Result2 = AnalyticsUtilsDefault;
    }
  }
  const tmp3Result5 = QuestDataUtils;
}
function getCommonClickEventProperties() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _getCommonClickEventProperties(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          ({
            questContent: closure_130_0,
            questContentPosition: closure_130_1,
            questContentRowIndex: closure_130_2,
            questContentCTA: closure_130_3,
            impressionId: closure_130_4,
            clickId: closure_130_5,
          } = closure_0);
          closure_130_6 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const obj6 = closure_131_0(closure_131_2[18]);
          c4 = 2;
          c5 = 1;
          const obj9 = {
            value: obj6.getAdUser(closure_131_0(closure_131_2[10]).getQuestContentName(closure_130_0)),
            done: false,
          };
          return obj9;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_130_6 = value;
        const obj11 = {};
        const merged = Object.assign(
          closure_131_0(closure_131_2[10]).getContentProperties(closure_130_0, closure_130_1, closure_130_2),
        );
        const merged1 = Object.assign(closure_131_1(closure_131_2[19])());
        obj11.cta_name = closure_130_3;
        obj11.impression_id = closure_130_4;
        let advertisingId = null;
        if (null != closure_130_6) {
          advertisingId = null;
          if (obj.isIOS()) {
            advertisingId = closure_130_6.advertisingId;
          }
          obj = closure_131_0(closure_131_2[20]);
        }
        obj11.apple_advertising_id = advertisingId;
        let advertisingId1 = null;
        if (null != closure_130_6) {
          advertisingId1 = null;
          if (obj2.isAndroid()) {
            advertisingId1 = closure_130_6.advertisingId;
          }
          obj2 = closure_131_0(closure_131_2[20]);
        }
        obj11.android_advertising_id = advertisingId1;
        let click_id = closure_130_5;
        if (closure_130_5 == null) {
          click_id = closure_131_0(closure_131_2[21]).v4();
          const obj3 = closure_131_0(closure_131_2[21]);
        }
        obj11.click_id = click_id;
        c5 = 3;
        const obj12 = { value: obj11, done: true };
        return obj12;
      }
    } catch (tmp33) {
      c5 = tmp;
      throw tmp33;
    }
  }
};
function trackQuestContentClicked() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _trackQuestContentClicked() {
  const adTrafficMetadataSealed = closure_134_0(closure_134_2[7]).getAdTrafficMetadataSealed(
    closure_135_8,
    closure_135_0,
  );
  set = closure_134_9;
  const obj6 = { questId: closure_135_0, event: closure_134_7.QUEST_CONTENT_CLICKED };
  const properties = {};
  await closure_134_13({
    questContent: closure_135_1,
    questContentPosition: closure_135_3,
    questContentRowIndex: closure_135_4,
    questContentCTA: closure_135_2,
    impressionId: closure_135_5,
    clickId: closure_135_6,
  });
  const merged = Object.assign(value);
  const adMetadataSealed = closure_134_0(closure_134_2[7]).getAdMetadataSealed(closure_135_8);
  let metadata_sealed = adMetadataSealed;
  if (adMetadataSealed == null) {
    metadata_sealed = null;
  }
  properties.metadata_sealed = metadata_sealed;
  let traffic_metadata_sealed = adTrafficMetadataSealed;
  if (adTrafficMetadataSealed == null) {
    traffic_metadata_sealed = null;
  }
  properties.traffic_metadata_sealed = traffic_metadata_sealed;
  closure_134_0(closure_134_2[7]);
  const currentQuestHomeSearchSession = closure_134_0(closure_134_2[22]).getCurrentQuestHomeSearchSession();
  if (currentQuestHomeSearchSession != null) {
    const uuid = currentQuestHomeSearchSession.uuid;
  }
  let search_session_id = uuid;
  if (uuid == null) {
    search_session_id = null;
  }
  properties.search_session_id = search_session_id;
  obj6.properties = properties;
  obj6.trackGuildAndChannelMetadata = closure_135_7;
  closure_134_0(closure_134_2[22]);
  obj6.shouldExtendSession = closure_134_0(closure_134_2[7]).isBillableQuestContent(closure_135_1);
  obj6.sourceQuestContent = closure_135_8;
  set(obj6);
  await "HermesInternal";
  closure_7 = tmp2;
  ({
    questId: closure_135_0,
    questContent: closure_135_1,
    questContentCTA: closure_135_2,
    questContentPosition: closure_135_3,
    questContentRowIndex: closure_135_4,
    impressionId: closure_135_5,
    clickId: closure_135_6,
    trackGuildAndChannelMetadata: closure_135_7,
    sourceQuestContent: closure_135_8,
  } = closure_0);
  return "flex";
};
function trackAdContentClicked() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _trackAdContentClicked() {
  dependencyMap = closure_131_12;
  const obj5 = {
    adContentId: closure_132_0,
    relatedQuestId: closure_132_1,
    adCreativeType: closure_132_2,
    event: closure_131_7.QUEST_CONTENT_CLICKED,
  };
  await closure_131_13({
    questContent: closure_132_3,
    questContentPosition: closure_132_5,
    questContentRowIndex: closure_132_6,
    questContentCTA: closure_132_4,
    impressionId: closure_132_7,
  });
  obj5.properties = value;
  obj5.trackGuildAndChannelMetadata = closure_132_8;
  obj5.shouldExtendSession = closure_131_0(closure_131_2[7]).isBillableQuestContent(closure_132_3);
  obj5.sourceQuestContent = closure_132_9;
  dependencyMap(obj5);
  await "HermesInternal";
  closure_4 = tmp2;
  ({
    adContentId: closure_132_0,
    relatedQuestId: closure_132_1,
    adCreativeType: closure_132_2,
    questContent: closure_132_3,
    questContentCTA: closure_132_4,
    questContentPosition: closure_132_5,
    questContentRowIndex: closure_132_6,
    impressionId: closure_132_7,
    trackGuildAndChannelMetadata: closure_132_8,
    sourceQuestContent: closure_132_9,
  } = closure_0);
  return "flex";
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const items = [, ,];
({
  QUEST_CONTENT_VIEWED: arr[0],
  QUEST_CONTENT_ENGAGED_VIEWED: arr[1],
  QUEST_CONTENT_CLICKED: arr[2],
} = AnalyticEvents);
let set = new Set(items);
const AppStoreOverlaySurfaces = { MAIN_CTA: "main_cta", RATING_STAT: "rating_stat", SEE_MORE: "see_more" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsActions.tsx");

export { trackQuestEvent };
export const AppStoreOverlayVariant = { NATIVE: "native", CUSTOM: "custom" };
export { AppStoreOverlaySurfaces };
export const trackAppStoreOverlayEvent = function trackAppStoreOverlayEvent(arg0) {
  ({ quest, trackingCtx, event, timeSpentMs, overlaySurface } = arg0);
  const properties = {
    content_name: AnalyticsTypes.getQuestContentName(trackingCtx.content),
    cta_name: null,
    impression_id: null,
    source_content_name: null,
    app_id: null,
    content_position: null,
    overlay_variant: null,
  };
  ({ inlineStoreAppId, overlayVariant } = arg0);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = trackingCtx);
  properties.source_content_name = AnalyticsTypes.getQuestContentName(trackingCtx.sourceQuestContent);
  properties.app_id = inlineStoreAppId;
  properties.content_position = trackingCtx.position;
  properties.overlay_variant = overlayVariant;
  if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED === event) {
    const obj4 = { questId: quest.id, event, properties: null, sourceQuestContent: null };
    const obj5 = {};
    const merged = Object.assign(properties);
    if (timeSpentMs == null) {
      timeSpentMs = null;
    }
    obj5.time_spent_ms = timeSpentMs;
    obj4.properties = obj5;
    obj4.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackQuestEvent(obj4);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED === event) {
    const obj6 = { questId: quest.id, event, properties: null, sourceQuestContent: null };
    const obj7 = {};
    const merged1 = Object.assign(properties);
    let tmp16 = timeSpentMs;
    if (timeSpentMs == null) {
      tmp16 = null;
    }
    obj7.time_spent_ms = tmp16;
    if (overlaySurface == null) {
      overlaySurface = null;
    }
    obj7.overlay_surface = overlaySurface;
    obj6.properties = obj7;
    obj6.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackQuestEvent(obj6);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_BACKGROUNDED === event) {
    const obj8 = { questId: quest.id, event, properties: null, sourceQuestContent: null };
    const obj9 = {};
    const merged2 = Object.assign(properties);
    let tmp9 = overlaySurface;
    if (overlaySurface == null) {
      tmp9 = null;
    }
    obj9.overlay_surface = tmp9;
    obj8.properties = obj9;
    obj8.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackQuestEvent(obj8);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED === event) {
    const obj10 = { questId: quest.id, event, properties, sourceQuestContent: trackingCtx.sourceQuestContent };
    trackQuestEvent(obj10);
  }
};
export const trackAppStoreOverlaySurfaceClickedForQuest = function trackAppStoreOverlaySurfaceClickedForQuest(arg0) {
  ({ questId, trackingCtx, overlaySurface } = arg0);
  if (obj.MAIN_CTA === overlaySurface) {
    let EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (tmp.RATING_STAT === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (tmp.SEE_MORE === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.EXPAND;
  }
  obj = AdAnalyticsInterfaceExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "app_store_overlay_surface_click",
    )
  ) {
    const obj4 = {
      surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
    };
    ({
      sourceQuestContent: obj3.sourceQuestContent,
      position: obj3.questContentPosition,
      impressionId: obj3.impressionId,
    } = trackingCtx);
    const obj7 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj4, obj7);
  } else {
    const obj8 = {
      questId,
      questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY,
      questContentCTA: EXPAND,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    ({
      position: obj2.questContentPosition,
      impressionId: obj2.impressionId,
      sourceQuestContent: obj2.sourceQuestContent,
    } = trackingCtx);
    trackQuestContentClicked(obj8);
  }
};
export const AppStoreOverlayCarouselTypes = { MEDIA: "media", STATS: "stats" };
export const getAppStoreOverlayStoreAppIds = function getAppStoreOverlayStoreAppIds(appId) {
  appId = appId.appId;
  let tmp;
  if ("ios" === appId.platform) {
    tmp = appId;
  }
  obj = { iosAppId: tmp, androidAppId: null };
  let tmp2;
  if ("android" === appId.platform) {
    tmp2 = appId;
  }
  obj.androidAppId = tmp2;
  return obj;
};
export const trackAppStoreOverlayCarouselScroll = function trackAppStoreOverlayCarouselScroll(arg0) {
  ({ questId, adContentId, iosAppId, androidAppId } = arg0);
  ({ carouselType, scrollingDirection, carouselPosition, carouselSize } = arg0);
  if (questId == null) {
    questId = null;
  }
  const obj2 = {
    quest_id: questId,
    ad_content_id: null,
    ios_app_id: null,
    android_app_id: null,
    carousel_type: null,
    scrolling_direction: null,
    carousel_position: null,
    carousel_size: null,
  };
  if (adContentId == null) {
    adContentId = null;
  }
  obj2.ad_content_id = adContentId;
  if (iosAppId == null) {
    iosAppId = null;
  }
  obj2.ios_app_id = iosAppId;
  if (androidAppId == null) {
    androidAppId = null;
  }
  obj2.android_app_id = androidAppId;
  obj2.carousel_type = carouselType;
  obj2.scrolling_direction = scrollingDirection;
  obj2.carousel_position = carouselPosition;
  obj2.carousel_size = carouselSize;
  AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL, obj2);
};
export function createAppStoreOverlayCarouselScrollTracker(arg0, appId) {
  closure_0 = arg0;
  return (arg0) => {
    obj = {};
    const merged = Object.assign(closure_0);
    appId = appId.appId;
    let tmp3;
    if ("ios" === appId.platform) {
      tmp3 = appId;
    }
    const obj2 = { iosAppId: tmp3, androidAppId: null };
    let tmp4;
    if ("android" === appId.platform) {
      tmp4 = appId;
    }
    obj2.androidAppId = tmp4;
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(arg0);
    ({ questId, adContentId, iosAppId, androidAppId } = obj);
    ({ carouselType, scrollingDirection, carouselPosition, carouselSize } = obj);
    if (questId == null) {
      questId = null;
    }
    const obj4 = {
      quest_id: questId,
      ad_content_id: null,
      ios_app_id: null,
      android_app_id: null,
      carousel_type: null,
      scrolling_direction: null,
      carousel_position: null,
      carousel_size: null,
    };
    if (adContentId == null) {
      adContentId = null;
    }
    obj4.ad_content_id = adContentId;
    if (iosAppId == null) {
      iosAppId = null;
    }
    obj4.ios_app_id = iosAppId;
    if (androidAppId == null) {
      androidAppId = null;
    }
    obj4.android_app_id = androidAppId;
    obj4.carousel_type = carouselType;
    obj4.scrolling_direction = scrollingDirection;
    obj4.carousel_position = carouselPosition;
    obj4.carousel_size = carouselSize;
    AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_APP_STORE_OVERLAY_CAROUSEL_SCROLL, obj4);
  };
}
export const trackAppStoreOverlaySurfaceClickedForAdContent = function trackAppStoreOverlaySurfaceClickedForAdContent(
  relatedQuestId,
) {
  ({ adContentId, adCreativeType, trackingCtx, overlaySurface } = relatedQuestId);
  if (obj.MAIN_CTA === overlaySurface) {
    let EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (tmp.RATING_STAT === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (tmp.SEE_MORE === overlaySurface) {
    EXPAND = AnalyticsTypes.QuestContentCTA.EXPAND;
  }
  obj = AdAnalyticsInterfaceExperiment;
  if (
    obj.shouldMigrateToAdAnalyticsInterface(
      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL,
      "app_store_overlay_surface_click",
    )
  ) {
    const obj4 = {
      surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY,
      sourceQuestContent: null,
      questContentPosition: null,
      impressionId: null,
    };
    ({
      sourceQuestContent: obj3.sourceQuestContent,
      position: obj3.questContentPosition,
      impressionId: obj3.impressionId,
    } = trackingCtx);
    const obj7 = { adCreativeType, adCreativeId: adContentId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj4, obj7);
  } else {
    const obj8 = {
      adContentId,
      relatedQuestId: relatedQuestId.relatedQuestId,
      adCreativeType,
      questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY,
      questContentCTA: EXPAND,
      questContentPosition: null,
      impressionId: null,
      sourceQuestContent: null,
    };
    ({
      position: obj2.questContentPosition,
      impressionId: obj2.impressionId,
      sourceQuestContent: obj2.sourceQuestContent,
    } = trackingCtx);
    trackAdContentClicked(obj8);
  }
};
export const trackAdContentAppStoreOverlayEvent = function trackAdContentAppStoreOverlayEvent(arg0) {
  ({ adContentId, adCreativeType, trackingCtx, event, timeSpentMs, overlaySurface } = arg0);
  const properties = {
    content_name: AnalyticsTypes.getQuestContentName(trackingCtx.content),
    cta_name: null,
    impression_id: null,
    source_content_name: null,
    app_id: null,
    content_position: null,
    overlay_variant: null,
  };
  ({ inlineStoreAppId, overlayVariant } = arg0);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = trackingCtx);
  properties.source_content_name = AnalyticsTypes.getQuestContentName(trackingCtx.sourceQuestContent);
  properties.app_id = inlineStoreAppId;
  properties.content_position = trackingCtx.position;
  properties.overlay_variant = overlayVariant;
  if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED === event) {
    const obj4 = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
    const obj5 = {};
    const merged = Object.assign(properties);
    if (timeSpentMs == null) {
      timeSpentMs = null;
    }
    obj5.time_spent_ms = timeSpentMs;
    obj4.properties = obj5;
    obj4.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackAdContentEvent(obj4);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED === event) {
    const obj6 = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
    const obj7 = {};
    const merged1 = Object.assign(properties);
    let tmp16 = timeSpentMs;
    if (timeSpentMs == null) {
      tmp16 = null;
    }
    obj7.time_spent_ms = tmp16;
    if (overlaySurface == null) {
      overlaySurface = null;
    }
    obj7.overlay_surface = overlaySurface;
    obj6.properties = obj7;
    obj6.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackAdContentEvent(obj6);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_BACKGROUNDED === event) {
    const obj8 = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
    const obj9 = {};
    const merged2 = Object.assign(properties);
    let tmp9 = overlaySurface;
    if (overlaySurface == null) {
      tmp9 = null;
    }
    obj9.overlay_surface = tmp9;
    obj8.properties = obj9;
    obj8.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackAdContentEvent(obj8);
  } else if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED === event) {
    const obj10 = {
      adContentId,
      adCreativeType,
      event,
      properties,
      sourceQuestContent: trackingCtx.sourceQuestContent,
    };
    trackAdContentEvent(obj10);
  }
};
export { trackAdContentEvent };
export { getCommonClickEventProperties };
export { trackQuestContentClicked };
export { trackAdContentClicked };
export const trackQuestHomeOrbShopCarouselViewed = function trackQuestHomeOrbShopCarouselViewed(arg0) {
  ({ obtainableOrbRewards, carouselSize, isPlaceholderCarousel } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED, {
    obtainable_orb_rewards: obtainableOrbRewards,
    carousel_size: carouselSize,
    is_placeholder_carousel: isPlaceholderCarousel,
  });
};
export const trackQuestHomeOrbShopCarouselScroll = function trackQuestHomeOrbShopCarouselScroll(arg0) {
  ({ scrollingDirection, carouselPosition, carouselSize } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL, {
    scrolling_direction: scrollingDirection,
    carousel_position: carouselPosition,
    carousel_size: carouselSize,
  });
};
export const trackBountyCarouselEmptyStateViewed = function trackBountyCarouselEmptyStateViewed(reason) {
  let uuid = SessionAdGenerator.getOrRefreshAdSession().uuid;
  const obj3 = { client_ad_session_id: uuid, billing_session_id: null, reason: null };
  const obj2 = AnalyticsUtilsDefault;
  if (!obj4.isBillableQuestContent(QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE)) {
    const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
    let uuid1;
    if (activeSessionUnsafe != null) {
      uuid1 = activeSessionUnsafe.uuid;
    }
    if (uuid1 == null) {
      uuid1 = null;
    }
    uuid = uuid1;
    const tmpResult = SessionHeartbeatScheduler;
  }
  obj3.billing_session_id = uuid;
  obj3.reason = reason;
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED, obj3);
  obj4 = QuestDataUtils;
};
export const trackBountyVerticalScroll = function trackBountyVerticalScroll(result) {
  ({ scrollingType, scrollingDirection, verticalScrollingPosition, scrollSessionId, timeWatchedPreScrollMs } = result);
  obj = SessionAdGenerator;
  const obj3 = {
    client_ad_session_id: obj.getOrRefreshAdSession().uuid,
    billing_session_id: null,
    scrolling_type: null,
    scrolling_direction: null,
    vertical_scrolling_position: null,
    scroll_session_id: null,
    time_watched_pre_scroll_ms: null,
  };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj3.billing_session_id = uuid;
  obj3.scrolling_type = scrollingType;
  obj3.scrolling_direction = scrollingDirection;
  obj3.vertical_scrolling_position = verticalScrollingPosition;
  obj3.scroll_session_id = scrollSessionId;
  obj3.time_watched_pre_scroll_ms = timeWatchedPreScrollMs;
  obj2.track(AnalyticEvents.BOUNTY_VERTICAL_SCROLL, obj3);
};
export const trackQuestHomeCarouselScroll = function trackQuestHomeCarouselScroll(questContent) {
  questContent = questContent.questContent;
  ({ scrollingType, scrollingDirection, scrollWindowStartIndex, scrollWindowEndIndex, scrollWindowSize, carouselSize } =
    questContent);
  let uuid = SessionAdGenerator.getOrRefreshAdSession().uuid;
  const obj3 = {
    scrolling_type: scrollingType,
    client_ad_session_id: uuid,
    billing_session_id: null,
    scrolling_direction: null,
    scroll_window_start_index: null,
    scroll_window_end_index: null,
    scroll_window_size: null,
    content_name: null,
    content_id: null,
    carousel_size: null,
  };
  const obj2 = AnalyticsUtilsDefault;
  if (!obj4.isBillableQuestContent(questContent)) {
    const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
    let uuid1;
    if (activeSessionUnsafe != null) {
      uuid1 = activeSessionUnsafe.uuid;
    }
    if (uuid1 == null) {
      uuid1 = null;
    }
    uuid = uuid1;
    const tmpResult = SessionHeartbeatScheduler;
  }
  obj3.billing_session_id = uuid;
  obj3.scrolling_direction = scrollingDirection;
  obj3.scroll_window_start_index = scrollWindowStartIndex;
  obj3.scroll_window_end_index = scrollWindowEndIndex;
  obj3.scroll_window_size = scrollWindowSize;
  obj4 = QuestDataUtils;
  obj3.content_name = AnalyticsTypes.getQuestContentName(questContent);
  obj3.content_id = questContent;
  obj3.carousel_size = carouselSize;
  obj2.track(AnalyticEvents.QUEST_HOME_CAROUSEL_SCROLL, obj3);
  const tmpResult2 = AnalyticsTypes;
};
export const trackQuestHomeSearchEntered = function trackQuestHomeSearchEntered(searchSessionId) {
  obj = SessionAdGenerator;
  const obj3 = {
    client_ad_session_id: obj.getOrRefreshAdSession().uuid,
    billing_session_id: null,
    search_session_id: null,
  };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj3.billing_session_id = uuid;
  obj3.search_session_id = searchSessionId.searchSessionId;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_ENTERED, obj3);
};
export const trackQuestHomeSearchClosed = function trackQuestHomeSearchClosed(arg0) {
  ({ searchSessionId, searchSessionDurationMs } = arg0);
  obj = SessionAdGenerator;
  const obj3 = {
    client_ad_session_id: obj.getOrRefreshAdSession().uuid,
    billing_session_id: null,
    search_session_id: null,
    search_session_duration_ms: null,
  };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj3.billing_session_id = uuid;
  obj3.search_session_id = searchSessionId;
  obj3.search_session_duration_ms = searchSessionDurationMs;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_CLOSED, obj3);
};
export const trackQuestHomeSearchQuerySubmitted = function trackQuestHomeSearchQuerySubmitted(arg0) {
  ({ searchSessionId, searchQuery, searchQueryLength, resultsCount, hasResults } = arg0);
  obj = SessionAdGenerator;
  const obj3 = {
    client_ad_session_id: obj.getOrRefreshAdSession().uuid,
    billing_session_id: null,
    search_session_id: null,
    search_query: null,
    search_query_length: null,
    results_count: null,
    has_results: null,
  };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj3.billing_session_id = uuid;
  obj3.search_session_id = searchSessionId;
  obj3.search_query = searchQuery;
  obj3.search_query_length = searchQueryLength;
  obj3.results_count = resultsCount;
  obj3.has_results = hasResults;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_QUERY_SUBMITTED, obj3);
};
export const trackQuestContentQuestBarOrDockModeChange = function trackQuestContentQuestBarOrDockModeChange(arg0) {
  ({ questContent, sourceQuestContent, questId, mode, prevMode } = arg0);
  const contentProperties = AnalyticsTypes.getContentProperties(questContent);
  trackQuestEvent({
    questId,
    event: AnalyticEvents.QUEST_BAR_MODE_CHANGED,
    properties: {
      content_id: contentProperties.content_id,
      content_name: contentProperties.content_name,
      mode,
      previous_mode: prevMode,
    },
    sourceQuestContent,
  });
};
export const trackAdContentQuestBarOrDockModeChange = function trackAdContentQuestBarOrDockModeChange(arg0) {
  ({ adContentId, adCreativeType, questContent, sourceQuestContent, mode, prevMode } = arg0);
  const contentProperties = AnalyticsTypes.getContentProperties(questContent);
  trackAdContentEvent({
    adContentId,
    adCreativeType,
    event: AnalyticEvents.QUEST_BAR_MODE_CHANGED,
    properties: {
      content_id: contentProperties.content_id,
      content_name: contentProperties.content_name,
      mode,
      previous_mode: prevMode,
    },
    sourceQuestContent,
  });
};
export const trackQuestEmbedFallbackViewed = function trackQuestEmbedFallbackViewed(questId, EXCLUDED_QUEST) {
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.QUEST_EMBED_FALLBACK_VIEWED, {
    quest_id: questId,
    reason: EXCLUDED_QUEST,
  });
};
