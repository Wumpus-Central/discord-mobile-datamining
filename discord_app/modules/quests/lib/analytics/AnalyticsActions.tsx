// === Module 7718: AnalyticsActions ===

// Module 7718 (AnalyticsActions)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import SessionAdGenerator from "SessionAdGenerator" /* 7721 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7722 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7719 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;
import QuestStore from "QuestStore" /* 7703 */;

const SessionHeartbeatScheduler = tmp(7461);
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
    let obj = { quest_id: value.id, quest_type: utils_QuestUtils.getQuestType(value.config), application_ids: null, quest_status: null };
    let allApplicationIds = QuestTaskUtils.getAllApplicationIds(value);
    if (allApplicationIds == null) {
      allApplicationIds = [];
    }
    obj.application_ids = allApplicationIds;
    let tmp24Result = tmp24(7728);
    obj.quest_status = tmp24Result.getQuestStatus(value);
    const id = value.id;
    const QUEST = tmp24(5451).AdCreativeType.QUEST;
    tmp24Result = tmp24(7721);
    let uuid = tmp24Result.getOrRefreshAdSession(shouldExtendSession).uuid;
    const adDecisionData = QuestDataUtils.getAdDecisionData(id, sourceQuestContent);
    obj = { client_ad_session_id: uuid, billing_session_id: null, ad_content_id: null };
    const tmp24Result1 = QuestDataUtils;
    if (!tmp24Result2.isBillableQuestContent(sourceQuestContent, QUEST)) {
      const activeSessionUnsafe = tmp24(7461).getActiveSessionUnsafe();
      uuid = undefined;
      if (activeSessionUnsafe != null) {
        uuid = activeSessionUnsafe.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      const tmp24Result3 = tmp24(7461);
    }
    obj.billing_session_id = uuid;
    obj.ad_content_id = id;
    const merged = Object.assign(adDecisionData);
    let creative_type = adDecisionData.creative_type;
    if (creative_type == null) {
      creative_type = QUEST;
    }
    const obj1 = {};
    obj.creative_type = creative_type;
    const merged1 = Object.assign(obj);
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
          let tmp21Result = tmp21(4740);
          tmp21Result.trackWithMetadata(event, obj1, hasItem);
        } else {
          tmp21Result = tmp21(1242);
          const obj2 = { flush: hasItem };
          tmp21Result.track(event, obj1, obj2);
        }
      }
    }
    tmp24Result2 = QuestDataUtils;
  }
}
function trackAdContentEvent(sourceQuestContent) {
  ({ adContentId, relatedQuestId, adCreativeType, event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let quest = null;
  if (null != relatedQuestId) {
    quest = QuestStore.getQuest(relatedQuestId);
  }
  let obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession(shouldExtendSession).uuid;
  let obj1 = QuestDataUtils;
  const adDecisionData = obj1.getAdDecisionData(adContentId, sourceQuestContent);
  obj = { client_ad_session_id: uuid, billing_session_id: null, ad_content_id: null };
  let obj3 = QuestDataUtils;
  if (!obj3.isBillableQuestContent(sourceQuestContent, adCreativeType)) {
    let tmp3Result = tmp3(7461);
    const activeSessionUnsafe = tmp3Result.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
  }
  obj.billing_session_id = uuid;
  obj.ad_content_id = adContentId;
  const merged = Object.assign(adDecisionData);
  let creative_type = adDecisionData.creative_type;
  if (creative_type == null) {
    creative_type = adCreativeType;
  }
  obj = { creative_type };
  const merged1 = Object.assign(obj);
  tmp3Result = tmp3(7699);
  let adMetadataSealed = tmp3Result.getAdMetadataSealed(sourceQuestContent, adContentId);
  if (adMetadataSealed == null) {
    adMetadataSealed = null;
  }
  obj.metadata_sealed = adMetadataSealed;
  let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(sourceQuestContent, undefined, adContentId);
  if (adTrafficMetadataSealed == null) {
    adTrafficMetadataSealed = null;
  }
  obj.traffic_metadata_sealed = adTrafficMetadataSealed;
  if (null != relatedQuestId) {
    obj1 = { quest_id: relatedQuestId, quest_status: null };
    let questStatus = null;
    if (null != quest) {
      questStatus = tmp3(7728).getQuestStatus(quest);
      const tmp3Result2 = tmp3(7728);
    }
    obj1.quest_status = questStatus;
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  obj3 = {};
  const merged2 = Object.assign(obj2);
  const merged3 = Object.assign(obj);
  const merged4 = Object.assign(properties);
  if (trackGuildAndChannelMetadata === undefined) {
    trackGuildAndChannelMetadata = false;
  }
  if (!DevToolsSettingsStore.displayTools) {
    const isLoggingAnalyticsEvents = DeveloperOptionsStore.isLoggingAnalyticsEvents;
    const hasItem = set.has(event);
    if (trackGuildAndChannelMetadata) {
      let tmp20Result = tmp20(4740);
      tmp20Result.trackWithMetadata(event, obj3, hasItem);
    } else {
      tmp20Result = tmp20(1242);
      const obj4 = { flush: hasItem };
      tmp20Result.track(event, obj3, obj4);
    }
  }
}
function getCommonClickEventProperties() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _getCommonClickEventProperties(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          ({ questContent: closure_130_0, questContentPosition: closure_130_1, questContentRowIndex: closure_130_2, questContentCTA: closure_130_3, impressionId: closure_130_4, clickId: closure_130_5 } = closure_0);
          closure_130_6 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          let obj5 = closure_131_0(closure_131_2[14]);
          c4 = 2;
          c5 = 1;
          let obj2 = { value: obj5.getAdUser(closure_131_0(closure_131_2[10]).getQuestContentName(closure_130_0)), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_130_6 = value;
        const obj4 = {};
        const merged = Object.assign(closure_131_0(closure_131_2[10]).getContentProperties(closure_130_0, closure_130_1, closure_130_2));
        const merged1 = Object.assign(closure_131_1(closure_131_2[15])());
        obj4.cta_name = closure_130_3;
        obj4.impression_id = closure_130_4;
        let advertisingId = null;
        if (null != closure_130_6) {
          obj = closure_131_0(closure_131_2[16]);
          advertisingId = null;
          if (obj.isIOS()) {
            advertisingId = closure_130_6.advertisingId;
          }
        }
        obj4.apple_advertising_id = advertisingId;
        let advertisingId1 = null;
        if (null != closure_130_6) {
          obj1 = closure_131_0(closure_131_2[16]);
          advertisingId1 = null;
          if (obj1.isAndroid()) {
            advertisingId1 = closure_130_6.advertisingId;
          }
        }
        obj4.android_advertising_id = advertisingId1;
        let click_id = closure_130_5;
        if (closure_130_5 == null) {
          obj2 = closure_131_0(closure_131_2[17]);
          click_id = obj2.v4();
        }
        obj4.click_id = click_id;
        c5 = 3;
        obj5 = { value: obj4, done: true };
        return obj5;
      }
    } catch (tmp33) {
      c5 = tmp;
      throw tmp33;
    }
  }
};
let closure_13 = async function _trackQuestContentClicked() {
  const adTrafficMetadataSealed = closure_134_0(closure_134_2[7]).getAdTrafficMetadataSealed(closure_135_8, closure_135_0);
  set = closure_134_9;
  const obj2 = { questId: closure_135_0, event: closure_134_7.QUEST_CONTENT_CLICKED };
  const properties = {};
  await closure_134_11({ questContent: closure_135_1, questContentPosition: closure_135_3, questContentRowIndex: closure_135_4, questContentCTA: closure_135_2, impressionId: closure_135_5, clickId: closure_135_6 });
  const merged = Object.assign(arg1);
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
  const currentQuestHomeSearchSession = closure_134_0(closure_134_2[18]).getCurrentQuestHomeSearchSession();
  if (currentQuestHomeSearchSession != null) {
    const uuid = currentQuestHomeSearchSession.uuid;
  }
  let search_session_id = uuid;
  if (uuid == null) {
    search_session_id = null;
  }
  properties.search_session_id = search_session_id;
  obj2.properties = properties;
  obj2.trackGuildAndChannelMetadata = closure_135_7;
  closure_134_0(closure_134_2[18]);
  obj2.shouldExtendSession = closure_134_0(closure_134_2[7]).isBillableQuestContent(closure_135_1);
  obj2.sourceQuestContent = closure_135_8;
  set(obj2);
  await "HermesInternal";
  closure_7 = tmp2;
  ({ questId: closure_135_0, questContent: closure_135_1, questContentCTA: closure_135_2, questContentPosition: closure_135_3, questContentRowIndex: closure_135_4, impressionId: closure_135_5, clickId: closure_135_6, trackGuildAndChannelMetadata: closure_135_7, sourceQuestContent: closure_135_8 } = closure_0);
  return "PX_16";
};
let closure_14 = async function _trackAdContentClicked() {
  dependencyMap = closure_131_10;
  const obj2 = { adContentId: closure_132_0, relatedQuestId: closure_132_1, adCreativeType: closure_132_2, event: closure_131_7.QUEST_CONTENT_CLICKED };
  obj2.properties = await closure_131_11({ questContent: closure_132_3, questContentPosition: closure_132_5, questContentRowIndex: closure_132_6, questContentCTA: closure_132_4, impressionId: closure_132_7 });
  obj2.trackGuildAndChannelMetadata = closure_132_8;
  obj2.shouldExtendSession = closure_131_0(closure_131_2[7]).isBillableQuestContent(closure_132_3);
  obj2.sourceQuestContent = closure_132_9;
  dependencyMap(obj2);
  await "HermesInternal";
  closure_4 = tmp2;
  ({ adContentId: closure_132_0, relatedQuestId: closure_132_1, adCreativeType: closure_132_2, questContent: closure_132_3, questContentCTA: closure_132_4, questContentPosition: closure_132_5, questContentRowIndex: closure_132_6, impressionId: closure_132_7, trackGuildAndChannelMetadata: closure_132_8, sourceQuestContent: closure_132_9 } = closure_0);
  return "PX_16";
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const items = [, ];
({ QUEST_CONTENT_VIEWED: arr[0], QUEST_CONTENT_CLICKED: arr[1] } = AnalyticEvents);
let set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsActions.tsx");

export { trackQuestEvent };
export const AppStoreOverlayVariant = { NATIVE: "native", CUSTOM: "custom" };
export const AppStoreOverlaySurfaces = { MAIN_CTA: "main_cta", RATING_STAT: "rating_stat" };
export const trackAppStoreOverlayEvent = function trackAppStoreOverlayEvent(arg0) {
  ({ quest, trackingCtx, event, timeSpentMs, overlaySurface } = arg0);
  let obj = { content_name: null, cta_name: null, impression_id: null, source_content_name: null, app_id: null, content_position: null, overlay_variant: null };
  ({ inlineStoreAppId, overlayVariant } = arg0);
  let obj1 = AnalyticsTypes;
  obj.content_name = obj1.getQuestContentName(trackingCtx.content);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = trackingCtx);
  let obj2 = AnalyticsTypes;
  obj.source_content_name = obj2.getQuestContentName(trackingCtx.sourceQuestContent);
  obj.app_id = inlineStoreAppId;
  obj.content_position = trackingCtx.position;
  obj.overlay_variant = overlayVariant;
  if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED === event) {
    obj = { questId: quest.id, event, properties: null, sourceQuestContent: null };
    obj = {};
    const merged = Object.assign(obj);
    if (timeSpentMs == null) {
      timeSpentMs = null;
    }
    obj.time_spent_ms = timeSpentMs;
    obj.properties = obj;
    obj.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackQuestEvent(obj);
  } else if (tmp.QUEST_APP_STORE_OVERLAY_RETURNED === event) {
    obj1 = { questId: quest.id, event, properties: null, sourceQuestContent: null };
    obj2 = {};
    const merged1 = Object.assign(obj);
    let tmp16 = timeSpentMs;
    if (timeSpentMs == null) {
      tmp16 = null;
    }
    obj2.time_spent_ms = tmp16;
    if (overlaySurface == null) {
      overlaySurface = null;
    }
    obj2.overlay_surface = overlaySurface;
    obj1.properties = obj2;
    obj1.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackQuestEvent(obj1);
  } else if (tmp.QUEST_APP_STORE_OVERLAY_BACKGROUNDED === event) {
    const obj3 = { questId: quest.id, event, properties: null, sourceQuestContent: null };
    const obj4 = {};
    const merged2 = Object.assign(obj);
    let tmp9 = overlaySurface;
    if (overlaySurface == null) {
      tmp9 = null;
    }
    obj4.overlay_surface = tmp9;
    obj3.properties = obj4;
    obj3.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackQuestEvent(obj3);
  } else if (tmp.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED === event) {
    const obj5 = { questId: quest.id, event, properties: obj, sourceQuestContent: trackingCtx.sourceQuestContent };
    trackQuestEvent(obj5);
  }
};
export const trackAdContentAppStoreOverlayEvent = function trackAdContentAppStoreOverlayEvent(arg0) {
  ({ adContentId, adCreativeType, trackingCtx, event, timeSpentMs, overlaySurface } = arg0);
  let obj = { content_name: null, cta_name: null, impression_id: null, source_content_name: null, app_id: null, content_position: null, overlay_variant: null };
  ({ inlineStoreAppId, overlayVariant } = arg0);
  let obj1 = AnalyticsTypes;
  obj.content_name = obj1.getQuestContentName(trackingCtx.content);
  ({ ctaContent: obj.cta_name, impressionId: obj.impression_id } = trackingCtx);
  let obj2 = AnalyticsTypes;
  obj.source_content_name = obj2.getQuestContentName(trackingCtx.sourceQuestContent);
  obj.app_id = inlineStoreAppId;
  obj.content_position = trackingCtx.position;
  obj.overlay_variant = overlayVariant;
  if (AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED === event) {
    obj = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
    obj = {};
    const merged = Object.assign(obj);
    if (timeSpentMs == null) {
      timeSpentMs = null;
    }
    obj.time_spent_ms = timeSpentMs;
    obj.properties = obj;
    obj.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackAdContentEvent(obj);
  } else if (tmp.QUEST_APP_STORE_OVERLAY_RETURNED === event) {
    obj1 = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
    obj2 = {};
    const merged1 = Object.assign(obj);
    let tmp16 = timeSpentMs;
    if (timeSpentMs == null) {
      tmp16 = null;
    }
    obj2.time_spent_ms = tmp16;
    if (overlaySurface == null) {
      overlaySurface = null;
    }
    obj2.overlay_surface = overlaySurface;
    obj1.properties = obj2;
    obj1.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackAdContentEvent(obj1);
  } else if (tmp.QUEST_APP_STORE_OVERLAY_BACKGROUNDED === event) {
    const obj3 = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
    const obj4 = {};
    const merged2 = Object.assign(obj);
    let tmp9 = overlaySurface;
    if (overlaySurface == null) {
      tmp9 = null;
    }
    obj4.overlay_surface = tmp9;
    obj3.properties = obj4;
    obj3.sourceQuestContent = trackingCtx.sourceQuestContent;
    trackAdContentEvent(obj3);
  } else if (tmp.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED === event) {
    const obj5 = { adContentId, adCreativeType, event, properties: obj, sourceQuestContent: trackingCtx.sourceQuestContent };
    trackAdContentEvent(obj5);
  }
};
export { trackAdContentEvent };
export { getCommonClickEventProperties };
export const trackQuestContentClicked = function trackQuestContentClicked() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackAdContentClicked = function trackAdContentClicked() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackBountyCarouselScroll = function trackBountyCarouselScroll(questContent) {
  questContent = questContent.questContent;
  ({ scrollingType, scrollingDirection, carouselPosition } = questContent);
  let obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: null, scrolling_type: null, scrolling_direction: null, carousel_position: null, content_name: null };
  const obj2 = AnalyticsUtilsDefault;
  if (!obj4.isBillableQuestContent(questContent)) {
    let tmpResult = tmp(7461);
    const activeSessionUnsafe = tmpResult.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
  }
  obj.billing_session_id = uuid;
  obj.scrolling_type = scrollingType;
  obj.scrolling_direction = scrollingDirection;
  obj.carousel_position = carouselPosition;
  tmpResult = tmp(7728);
  obj.content_name = tmpResult.getQuestContentName(questContent);
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeOrbShopCarouselViewed = function trackQuestHomeOrbShopCarouselViewed(arg0) {
  ({ obtainableOrbRewards, carouselSize, isPlaceholderCarousel } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED, { obtainable_orb_rewards: obtainableOrbRewards, carousel_size: carouselSize, is_placeholder_carousel: isPlaceholderCarousel });
};
export const trackQuestHomeOrbShopCarouselScroll = function trackQuestHomeOrbShopCarouselScroll(arg0) {
  ({ scrollingDirection, carouselPosition, carouselSize } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL, { scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize });
};
export const trackBountyCarouselEmptyStateViewed = function trackBountyCarouselEmptyStateViewed(reason) {
  let obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: null, reason: null };
  const obj2 = AnalyticsUtilsDefault;
  if (!obj4.isBillableQuestContent(QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL)) {
    const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
    const tmpResult = SessionHeartbeatScheduler;
  }
  obj.billing_session_id = uuid;
  obj.reason = reason;
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED, obj);
};
export const trackBountyVerticalScroll = function trackBountyVerticalScroll(result) {
  ({ scrollingType, scrollingDirection, verticalScrollingPosition, scrollSessionId, timeWatchedPreScrollMs } = result);
  let obj = SessionAdGenerator;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, scrolling_type: null, scrolling_direction: null, vertical_scrolling_position: null, scroll_session_id: null, time_watched_pre_scroll_ms: null };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj.billing_session_id = uuid;
  obj.scrolling_type = scrollingType;
  obj.scrolling_direction = scrollingDirection;
  obj.vertical_scrolling_position = verticalScrollingPosition;
  obj.scroll_session_id = scrollSessionId;
  obj.time_watched_pre_scroll_ms = timeWatchedPreScrollMs;
  obj2.track(AnalyticEvents.BOUNTY_VERTICAL_SCROLL, obj);
};
export const trackBountyAutoScrollDismissed = function trackBountyAutoScrollDismissed(arg0) {
  ({ verticalScrollingPosition, scrollSessionId } = arg0);
  let obj = SessionAdGenerator;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, vertical_scrolling_position: null, scroll_session_id: null };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj.billing_session_id = uuid;
  obj.vertical_scrolling_position = verticalScrollingPosition;
  obj.scroll_session_id = scrollSessionId;
  obj2.track(AnalyticEvents.BOUNTY_AUTO_SCROLL_DISMISSED, obj);
};
export const trackQuestHomeCarouselScroll = function trackQuestHomeCarouselScroll(questContent) {
  questContent = questContent.questContent;
  ({ scrollingType, scrollingDirection, scrollWindowStartIndex, scrollWindowEndIndex, scrollWindowSize, carouselSize } = questContent);
  let obj = SessionAdGenerator;
  let uuid = obj.getOrRefreshAdSession().uuid;
  obj = { scrolling_type: scrollingType, client_ad_session_id: uuid, billing_session_id: null, scrolling_direction: null, scroll_window_start_index: null, scroll_window_end_index: null, scroll_window_size: null, content_name: null, content_id: null, carousel_size: null };
  const obj2 = AnalyticsUtilsDefault;
  if (!obj4.isBillableQuestContent(questContent)) {
    let tmpResult = tmp(7461);
    const activeSessionUnsafe = tmpResult.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
  }
  obj.billing_session_id = uuid;
  obj.scrolling_direction = scrollingDirection;
  obj.scroll_window_start_index = scrollWindowStartIndex;
  obj.scroll_window_end_index = scrollWindowEndIndex;
  obj.scroll_window_size = scrollWindowSize;
  tmpResult = tmp(7728);
  obj.content_name = tmpResult.getQuestContentName(questContent);
  obj.content_id = questContent;
  obj.carousel_size = carouselSize;
  obj2.track(AnalyticEvents.QUEST_HOME_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeSearchEntered = function trackQuestHomeSearchEntered(searchSessionId) {
  let obj = SessionAdGenerator;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, search_session_id: null };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj.billing_session_id = uuid;
  obj.search_session_id = searchSessionId.searchSessionId;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_ENTERED, obj);
};
export const trackQuestHomeSearchClosed = function trackQuestHomeSearchClosed(arg0) {
  ({ searchSessionId, searchSessionDurationMs } = arg0);
  let obj = SessionAdGenerator;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, search_session_id: null, search_session_duration_ms: null };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj.billing_session_id = uuid;
  obj.search_session_id = searchSessionId;
  obj.search_session_duration_ms = searchSessionDurationMs;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_CLOSED, obj);
};
export const trackQuestHomeSearchQuerySubmitted = function trackQuestHomeSearchQuerySubmitted(arg0) {
  ({ searchSessionId, searchQuery, searchQueryLength, resultsCount, hasResults } = arg0);
  let obj = SessionAdGenerator;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, search_session_id: null, search_query: null, search_query_length: null, results_count: null, has_results: null };
  const obj2 = AnalyticsUtilsDefault;
  const activeSessionUnsafe = SessionHeartbeatScheduler.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj.billing_session_id = uuid;
  obj.search_session_id = searchSessionId;
  obj.search_query = searchQuery;
  obj.search_query_length = searchQueryLength;
  obj.results_count = resultsCount;
  obj.has_results = hasResults;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_QUERY_SUBMITTED, obj);
};
export const trackQuestContentQuestBarOrDockModeChange = function trackQuestContentQuestBarOrDockModeChange(arg0) {
  ({ questContent, sourceQuestContent, questId, mode, prevMode } = arg0);
  let obj = AnalyticsTypes;
  const contentProperties = obj.getContentProperties(questContent);
  obj = { questId, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode }, sourceQuestContent };
  trackQuestEvent(obj);
};
export const trackAdContentQuestBarOrDockModeChange = function trackAdContentQuestBarOrDockModeChange(arg0) {
  ({ adContentId, adCreativeType, questContent, sourceQuestContent, mode, prevMode } = arg0);
  let obj = AnalyticsTypes;
  const contentProperties = obj.getContentProperties(questContent);
  obj = { adContentId, adCreativeType, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode }, sourceQuestContent };
  trackAdContentEvent(obj);
};
export const trackQuestEmbedFallbackViewed = function trackQuestEmbedFallbackViewed(questId, EXCLUDED_QUEST) {
  const obj = { quest_id: questId, reason: EXCLUDED_QUEST };
  obj.trackWithMetadata(AnalyticEvents.QUEST_EMBED_FALLBACK_VIEWED, obj);
};