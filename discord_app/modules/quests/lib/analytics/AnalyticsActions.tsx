import trackHeartbeat from "trackHeartbeat";
import initialize from "initialize";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import initializeState from "initializeState";
import { AnalyticEvents } from "ME";
import set from "refreshSourceMapCookie";

const require = arg1;
function trackQuestEvent(sourceQuestContent) {
  let event;
  let properties;
  let shouldExtendSession;
  let trackGuildAndChannelMetadata;
  ({ event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  const quests = quest.quests;
  const value = quests.get(sourceQuestContent.questId);
  if (null != value) {
    let obj = { quest_id: null, quest_type: null, application_ids: null, quest_status: null };
    obj[0] = value.id;
    obj[1] = require(7089) /* isSponsoredPlayQuest */.getQuestType(value.config);
    const obj12 = require(7089) /* isSponsoredPlayQuest */;
    let allApplicationIds = require(7091) /* getApplicationIdsByTaskTypes */.getAllApplicationIds(value);
    if (allApplicationIds == null) {
      allApplicationIds = [];
    }
    obj[2] = allApplicationIds;
    let tmp24Result = tmp24(7095);
    obj[3] = tmp24Result.getQuestStatus(value);
    const id = value.id;
    tmp24Result = tmp24(7088);
    let uuid = tmp24Result.getOrRefreshAdSession(shouldExtendSession).uuid;
    const obj13 = require(7091) /* getApplicationIdsByTaskTypes */;
    const adDecisionData = require(7066) /* getQuestDeliveryDataForPlacement */.getAdDecisionData(id, sourceQuestContent);
    obj = { client_ad_session_id: null, billing_session_id: null, ad_content_id: null };
    obj[0] = uuid;
    const tmp24Result1 = require(7066) /* getQuestDeliveryDataForPlacement */;
    if (!tmp24Result2.isBillableQuestContent(sourceQuestContent)) {
      const activeSessionUnsafe = tmp24(6820).getActiveSessionUnsafe();
      uuid = undefined;
      if (activeSessionUnsafe != null) {
        uuid = activeSessionUnsafe.uuid;
      }
      if (uuid == null) {
        uuid = null;
      }
      const tmp24Result3 = tmp24(6820);
    }
    obj[1] = uuid;
    obj[2] = id;
    const merged = Object.assign(adDecisionData);
    let QUEST = adDecisionData.creative_type;
    if (QUEST == null) {
      QUEST = tmp24(7096).AdCreativeType.QUEST;
    }
    const obj1 = {};
    obj.creative_type = QUEST;
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(properties);
    if (trackGuildAndChannelMetadata === undefined) {
      trackGuildAndChannelMetadata = false;
    }
    if (!initialize.displayTools) {
      const isLoggingAnalyticsEvents = refreshSourceMapCookie.isLoggingAnalyticsEvents;
      if (!value.preview) {
        const hasItem = set.has(event);
        if (trackGuildAndChannelMetadata) {
          let tmp21Result = tmp21(4450);
          tmp21Result.trackWithMetadata(event, obj1, hasItem);
        } else {
          tmp21Result = tmp21(698);
          const obj2 = { flush: null };
          obj2[0] = hasItem;
          tmp21Result.track(event, obj1, obj2);
        }
      }
    }
    tmp24Result2 = require(7066) /* getQuestDeliveryDataForPlacement */;
  }
}
function trackAdContentEvent(sourceQuestContent) {
  let adContentId;
  let event;
  let properties;
  let relatedQuestId;
  let shouldExtendSession;
  let trackGuildAndChannelMetadata;
  ({ adContentId, relatedQuestId, event, properties, trackGuildAndChannelMetadata, shouldExtendSession } = sourceQuestContent);
  if (shouldExtendSession === undefined) {
    shouldExtendSession = false;
  }
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let quest = null;
  if (null != relatedQuestId) {
    quest = quest.getQuest(relatedQuestId);
  }
  let obj = require(7088) /* getOrRefreshAdSession */;
  let uuid = obj.getOrRefreshAdSession(shouldExtendSession).uuid;
  let obj1 = require(7066) /* getQuestDeliveryDataForPlacement */;
  const adDecisionData = obj1.getAdDecisionData(adContentId, sourceQuestContent);
  obj = { client_ad_session_id: uuid, billing_session_id: null, ad_content_id: null };
  let obj3 = require(7066) /* getQuestDeliveryDataForPlacement */;
  if (!obj3.isBillableQuestContent(sourceQuestContent)) {
    let tmp3Result = tmp3(6820);
    const activeSessionUnsafe = tmp3Result.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
  }
  obj[1] = uuid;
  obj[2] = adContentId;
  const merged = Object.assign(adDecisionData);
  let adCreativeType = adDecisionData.creative_type;
  if (adCreativeType == null) {
    adCreativeType = sourceQuestContent.adCreativeType;
  }
  obj = { creative_type: adCreativeType };
  const merged1 = Object.assign(obj);
  tmp3Result = tmp3(7066);
  let adMetadataSealed = tmp3Result.getAdMetadataSealed(sourceQuestContent, adContentId);
  if (adMetadataSealed == null) {
    adMetadataSealed = null;
  }
  obj.metadata_sealed = adMetadataSealed;
  let adTrafficMetadataSealed = require(7066) /* getQuestDeliveryDataForPlacement */.getAdTrafficMetadataSealed(sourceQuestContent, undefined, adContentId);
  if (adTrafficMetadataSealed == null) {
    adTrafficMetadataSealed = null;
  }
  obj.traffic_metadata_sealed = adTrafficMetadataSealed;
  if (null != relatedQuestId) {
    obj1 = { quest_id: null, quest_status: null };
    obj1[0] = relatedQuestId;
    let questStatus = null;
    if (null != quest) {
      questStatus = tmp3(7095).getQuestStatus(quest);
      const tmp3Result2 = tmp3(7095);
    }
    obj1[1] = questStatus;
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
  if (!initialize.displayTools) {
    const isLoggingAnalyticsEvents = refreshSourceMapCookie.isLoggingAnalyticsEvents;
    const hasItem = set.has(event);
    if (trackGuildAndChannelMetadata) {
      let tmp20Result = tmp20(4450);
      tmp20Result.trackWithMetadata(event, obj3, hasItem);
    } else {
      tmp20Result = tmp20(698);
      const obj4 = { flush: null };
      obj4[0] = hasItem;
      tmp20Result.track(event, obj3, obj4);
    }
  }
}
function getCommonClickEventProperties(arg0) {
  const self = this;
  const apply = _getCommonClickEventProperties.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getCommonClickEventProperties() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c2;
      let c3;
      let c4;
      let c5;
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp5;
              let dependencyMap = tmp2;
              let callback;
              let callback2;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ questContent: c0, questContentPosition: closure_1, questContentRowIndex: c2, questContentCTA: c3, impressionId: c4, clickId: c5 } = callback);
              let initializeState;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj5 = callback(7097);
              c4 = 2;
              c5 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj5.getAdUser(callback(7095).getQuestContentName(callback));
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            initializeState = arg1;
            const obj4 = {};
            const merged = Object.assign(callback(7095).getContentProperties(callback, callback2, dependencyMap));
            const merged1 = Object.assign(callback2(7045)());
            obj4.cta_name = c3;
            obj4.impression_id = c4;
            let advertisingId = null;
            if (null != initializeState) {
              obj = callback(500);
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = initializeState.advertisingId;
              }
            }
            obj4.apple_advertising_id = advertisingId;
            let advertisingId1 = null;
            if (null != initializeState) {
              obj1 = callback(500);
              advertisingId1 = null;
              if (obj1.isAndroid()) {
                advertisingId1 = initializeState.advertisingId;
              }
            }
            obj4.android_advertising_id = advertisingId1;
            callback2 = c5;
            if (c5 == null) {
              obj2 = callback(514);
              callback2 = obj2.v4();
            }
            obj4.click_id = callback2;
            c5 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = obj4;
            return obj5;
          }
        } catch (tmp33) {
          c5 = tmp;
          throw tmp33;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getCommonClickEventProperties = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _trackQuestContentClicked() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c9 = 0;
    let c10 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c6;
      let c7;
      let initialize;
      let closure_8;
      let obj2;
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c10 = 2;
          if (0 === adTrafficMetadataSealed) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c6 = tmp5;
              let constants = tmp2;
              let callback;
              c1 = undefined;
              let dependencyMap;
              c3 = undefined;
              initialize = undefined;
              obj2 = undefined;
              c6 = undefined;
              constants = undefined;
              let callback2;
              ({ questId: c0, questContent: c1, questContentCTA: c2, questContentPosition: c3, questContentRowIndex: initialize, impressionId: obj2, clickId: c6, trackGuildAndChannelMetadata: c7, sourceQuestContent: closure_8 } = callback);
              adTrafficMetadataSealed = undefined;
              adTrafficMetadataSealed = 1;
              c10 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              adTrafficMetadataSealed = callback(7066).getAdTrafficMetadataSealed(callback2, callback);
              callback2 = adTrafficMetadataSealed;
              obj2 = { questId: callback, event: constants.QUEST_CONTENT_CLICKED };
              initialize = {};
              const obj3 = { questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, clickId: null };
              obj3[0] = c1;
              obj3[1] = c3;
              obj3[2] = initialize;
              obj3[3] = dependencyMap;
              obj3[4] = obj2;
              obj3[5] = c6;
              adTrafficMetadataSealed = 2;
              c10 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback3(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            const merged = Object.assign(arg1);
            const adMetadataSealed = callback(7066).getAdMetadataSealed(callback2);
            c1 = adMetadataSealed;
            if (adMetadataSealed == null) {
              c1 = null;
            }
            initialize.metadata_sealed = c1;
            dependencyMap = adTrafficMetadataSealed;
            if (adTrafficMetadataSealed == null) {
              dependencyMap = null;
            }
            initialize.traffic_metadata_sealed = dependencyMap;
            obj = callback(7102);
            const currentQuestHomeSearchSession = obj.getCurrentQuestHomeSearchSession();
            let uuid;
            if (currentQuestHomeSearchSession != null) {
              uuid = currentQuestHomeSearchSession.uuid;
            }
            c3 = uuid;
            if (uuid == null) {
              c3 = null;
            }
            initialize.search_session_id = c3;
            obj2.properties = initialize;
            obj2.trackGuildAndChannelMetadata = constants;
            obj1 = callback(7066);
            obj2.shouldExtendSession = obj1.isBillableQuestContent(c1);
            obj2.sourceQuestContent = callback2;
            callback2(obj2);
            c10 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          c10 = tmp;
          throw tmp29;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _trackQuestContentClicked = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _trackAdContentClicked() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, properties) {
      let c0;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let closure_2;
      let obj2;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw properties;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = properties;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw properties;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = properties;
              return obj;
            } else {
              c3 = tmp5;
              c4 = tmp2;
              let callback;
              obj2 = undefined;
              let dependencyMap;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              let constants;
              c8 = undefined;
              c9 = undefined;
              ({ adContentId: c0, relatedQuestId: obj2, adCreativeType: closure_2, questContent: c3, questContentCTA: c4, questContentPosition: c5, questContentRowIndex: c6, impressionId: c7, trackGuildAndChannelMetadata: c8, sourceQuestContent: c9 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw properties;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = properties;
              return obj1;
            } else {
              dependencyMap = closure_10;
              obj2 = { adContentId: callback };
              obj2.relatedQuestId = obj2;
              obj2.adCreativeType = dependencyMap;
              obj2.event = constants.QUEST_CONTENT_CLICKED;
              const obj3 = { questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null };
              obj3[0] = c3;
              obj3[1] = c5;
              obj3[2] = c6;
              obj3[3] = c4;
              obj3[4] = constants;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback2(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw properties;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = properties;
            return obj5;
          } else {
            obj2.properties = properties;
            obj2.trackGuildAndChannelMetadata = c8;
            obj = callback(7066);
            obj2.shouldExtendSession = obj.isBillableQuestContent(c3);
            obj2.sourceQuestContent = c9;
            dependencyMap(obj2);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c6 = tmp;
          throw tmp16;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _trackAdContentClicked = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const items = [, ];
({ QUEST_CONTENT_VIEWED: arr[0], QUEST_CONTENT_CLICKED: arr[1] } = AnalyticEvents);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/quests/lib/analytics/AnalyticsActions.tsx");

export { trackQuestEvent };
export const trackAppStoreOverlayEvent = function trackAppStoreOverlayEvent(f85433, closure_1, arg2, event, time_spent_ms) {
  let obj = { content_name: null, cta_name: null, impression_id: null, source_content_name: null, app_id: null, content_position: null };
  obj[0] = require(7095) /* getQuestContentName */.getQuestContentName(closure_1.content);
  ({ ctaContent: obj[1], impressionId: obj[2] } = closure_1);
  const obj2 = require(7095) /* getQuestContentName */;
  obj[3] = require(7095) /* getQuestContentName */.getQuestContentName(closure_1.sourceQuestContent);
  obj[4] = arg2;
  obj[5] = closure_1.position;
  let tmp = event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED || event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED;
  if (tmp) {
    tmp = undefined !== time_spent_ms;
  }
  obj = { questId: f85433.id, event, properties: null, sourceQuestContent: null };
  let tmp3 = obj;
  if (tmp) {
    obj = {};
    const merged = Object.assign(obj);
    obj.time_spent_ms = time_spent_ms;
    tmp3 = obj;
  }
  obj[2] = tmp3;
  obj[3] = closure_1.sourceQuestContent;
  trackQuestEvent(obj);
};
export const trackAdContentAppStoreOverlayEvent = function trackAdContentAppStoreOverlayEvent(arg0, closure_2, arg2, event, time_spent_ms) {
  let adContentId;
  let adCreativeType;
  let obj = { content_name: null, cta_name: null, impression_id: null, source_content_name: null, app_id: null, content_position: null };
  ({ adContentId, adCreativeType } = arg0);
  obj[0] = require(7095) /* getQuestContentName */.getQuestContentName(closure_2.content);
  ({ ctaContent: obj[1], impressionId: obj[2] } = closure_2);
  const obj2 = require(7095) /* getQuestContentName */;
  obj[3] = require(7095) /* getQuestContentName */.getQuestContentName(closure_2.sourceQuestContent);
  obj[4] = arg2;
  obj[5] = closure_2.position;
  obj = { adContentId, adCreativeType, event, properties: null, sourceQuestContent: null };
  if (event === AnalyticEvents.QUEST_APP_STORE_OVERLAY_CLOSED) {
    let tmp3 = obj;
    if (undefined !== time_spent_ms) {
      obj = {};
      const merged = Object.assign(obj);
      obj.time_spent_ms = time_spent_ms;
      tmp3 = obj;
    }
  } else {
    tmp3 = obj;
  }
  obj[3] = tmp3;
  obj[4] = closure_2.sourceQuestContent;
  trackAdContentEvent(obj);
};
export { trackAdContentEvent };
export { getCommonClickEventProperties };
export const trackQuestContentClicked = function trackQuestContentClicked(arg0) {
  const self = this;
  const apply = _trackQuestContentClicked.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackAdContentClicked = function trackAdContentClicked(arg0) {
  const self = this;
  const apply = _trackAdContentClicked.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const trackBountyCarouselScroll = function trackBountyCarouselScroll(result) {
  let carouselPosition;
  let scrollingDirection;
  let scrollingType;
  const questContent = result.questContent;
  ({ scrollingType, scrollingDirection, carouselPosition } = result);
  let obj = require(7088) /* getOrRefreshAdSession */;
  let uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: null, scrolling_type: null, scrolling_direction: null, carousel_position: null, content_name: null };
  const obj2 = importDefault(698);
  if (!obj4.isBillableQuestContent(questContent)) {
    let tmpResult = tmp(6820);
    const activeSessionUnsafe = tmpResult.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
  }
  obj[1] = uuid;
  obj[2] = scrollingType;
  obj[3] = scrollingDirection;
  obj[4] = carouselPosition;
  tmpResult = tmp(7095);
  obj[5] = tmpResult.getQuestContentName(questContent);
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeOrbShopCarouselViewed = function trackQuestHomeOrbShopCarouselViewed(arg0) {
  let carouselSize;
  let isPlaceholderCarousel;
  let obtainableOrbRewards;
  ({ obtainableOrbRewards, carouselSize, isPlaceholderCarousel } = arg0);
  importDefault(698).track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_VIEWED, { obtainable_orb_rewards: obtainableOrbRewards, carousel_size: carouselSize, is_placeholder_carousel: isPlaceholderCarousel });
};
export const trackQuestHomeOrbShopCarouselScroll = function trackQuestHomeOrbShopCarouselScroll(arg0) {
  let carouselPosition;
  let carouselSize;
  let scrollingDirection;
  ({ scrollingDirection, carouselPosition, carouselSize } = arg0);
  importDefault(698).track(AnalyticEvents.QUEST_HOME_ORB_SHOP_CAROUSEL_SCROLL, { scrolling_direction: scrollingDirection, carousel_position: carouselPosition, carousel_size: carouselSize });
};
export const trackBountyCarouselEmptyStateViewed = function trackBountyCarouselEmptyStateViewed(arg0) {
  let obj = require(7088) /* getOrRefreshAdSession */;
  let uuid = obj.getOrRefreshAdSession().uuid;
  obj = { client_ad_session_id: uuid, billing_session_id: null, reason: null };
  const obj2 = importDefault(698);
  const tmp = require;
  if (!obj4.isBillableQuestContent(require(5102) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_HOME_MOBILE_CAROUSEL)) {
    const activeSessionUnsafe = tmp(6820).getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
    const tmpResult = tmp(6820);
  }
  obj[1] = uuid;
  obj[2] = arg0;
  obj2.track(AnalyticEvents.BOUNTY_CAROUSEL_EMPTY_STATE_VIEWED, obj);
};
export const trackBountyVerticalScroll = function trackBountyVerticalScroll(result) {
  let scrollSessionId;
  let scrollingDirection;
  let scrollingType;
  let timeWatchedPreScrollMs;
  let verticalScrollingPosition;
  ({ scrollingType, scrollingDirection, verticalScrollingPosition, scrollSessionId, timeWatchedPreScrollMs } = result);
  let obj = require(7088) /* getOrRefreshAdSession */;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, scrolling_type: null, scrolling_direction: null, vertical_scrolling_position: null, scroll_session_id: null, time_watched_pre_scroll_ms: null };
  const obj2 = importDefault(698);
  const activeSessionUnsafe = require(6820) /* trackHeartbeat */.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj[1] = uuid;
  obj[2] = scrollingType;
  obj[3] = scrollingDirection;
  obj[4] = verticalScrollingPosition;
  obj[5] = scrollSessionId;
  obj[6] = timeWatchedPreScrollMs;
  obj2.track(AnalyticEvents.BOUNTY_VERTICAL_SCROLL, obj);
};
export const trackBountyAutoScrollDismissed = function trackBountyAutoScrollDismissed(arg0) {
  let scrollSessionId;
  let verticalScrollingPosition;
  ({ verticalScrollingPosition, scrollSessionId } = arg0);
  let obj = require(7088) /* getOrRefreshAdSession */;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, vertical_scrolling_position: null, scroll_session_id: null };
  const obj2 = importDefault(698);
  const activeSessionUnsafe = require(6820) /* trackHeartbeat */.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj[1] = uuid;
  obj[2] = verticalScrollingPosition;
  obj[3] = scrollSessionId;
  obj2.track(AnalyticEvents.BOUNTY_AUTO_SCROLL_DISMISSED, obj);
};
export const trackQuestHomeCarouselScroll = function trackQuestHomeCarouselScroll(questContent) {
  let carouselSize;
  let scrollWindowEndIndex;
  let scrollWindowSize;
  let scrollWindowStartIndex;
  let scrollingDirection;
  let scrollingType;
  questContent = questContent.questContent;
  ({ scrollingType, scrollingDirection, scrollWindowStartIndex, scrollWindowEndIndex, scrollWindowSize, carouselSize } = questContent);
  let obj = require(7088) /* getOrRefreshAdSession */;
  let uuid = obj.getOrRefreshAdSession().uuid;
  obj = { scrolling_type: scrollingType, client_ad_session_id: uuid, billing_session_id: null, scrolling_direction: null, scroll_window_start_index: null, scroll_window_end_index: null, scroll_window_size: null, content_name: null, content_id: null, carousel_size: null };
  const obj2 = importDefault(698);
  if (!obj4.isBillableQuestContent(questContent)) {
    let tmpResult = tmp(6820);
    const activeSessionUnsafe = tmpResult.getActiveSessionUnsafe();
    uuid = undefined;
    if (activeSessionUnsafe != null) {
      uuid = activeSessionUnsafe.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
  }
  obj[2] = uuid;
  obj[3] = scrollingDirection;
  obj[4] = scrollWindowStartIndex;
  obj[5] = scrollWindowEndIndex;
  obj[6] = scrollWindowSize;
  tmpResult = tmp(7095);
  obj[7] = tmpResult.getQuestContentName(questContent);
  obj[8] = questContent;
  obj[9] = carouselSize;
  obj2.track(AnalyticEvents.QUEST_HOME_CAROUSEL_SCROLL, obj);
};
export const trackQuestHomeSearchEntered = function trackQuestHomeSearchEntered(searchSessionId) {
  let obj = require(7088) /* getOrRefreshAdSession */;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, search_session_id: null };
  const obj2 = importDefault(698);
  const activeSessionUnsafe = require(6820) /* trackHeartbeat */.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj[1] = uuid;
  obj[2] = searchSessionId.searchSessionId;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_ENTERED, obj);
};
export const trackQuestHomeSearchClosed = function trackQuestHomeSearchClosed(arg0) {
  let searchSessionDurationMs;
  let searchSessionId;
  ({ searchSessionId, searchSessionDurationMs } = arg0);
  let obj = require(7088) /* getOrRefreshAdSession */;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, search_session_id: null, search_session_duration_ms: null };
  const obj2 = importDefault(698);
  const activeSessionUnsafe = require(6820) /* trackHeartbeat */.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj[1] = uuid;
  obj[2] = searchSessionId;
  obj[3] = searchSessionDurationMs;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_CLOSED, obj);
};
export const trackQuestHomeSearchQuerySubmitted = function trackQuestHomeSearchQuerySubmitted(arg0) {
  let hasResults;
  let resultsCount;
  let searchQuery;
  let searchQueryLength;
  let searchSessionId;
  ({ searchSessionId, searchQuery, searchQueryLength, resultsCount, hasResults } = arg0);
  let obj = require(7088) /* getOrRefreshAdSession */;
  obj = { client_ad_session_id: obj.getOrRefreshAdSession().uuid, billing_session_id: null, search_session_id: null, search_query: null, search_query_length: null, results_count: null, has_results: null };
  const obj2 = importDefault(698);
  const activeSessionUnsafe = require(6820) /* trackHeartbeat */.getActiveSessionUnsafe();
  let uuid;
  if (activeSessionUnsafe != null) {
    uuid = activeSessionUnsafe.uuid;
  }
  if (uuid == null) {
    uuid = null;
  }
  obj[1] = uuid;
  obj[2] = searchSessionId;
  obj[3] = searchQuery;
  obj[4] = searchQueryLength;
  obj[5] = resultsCount;
  obj[6] = hasResults;
  obj2.track(AnalyticEvents.QUEST_HOME_SEARCH_QUERY_SUBMITTED, obj);
};
export const trackQuestBarOrDockModeChange = function trackQuestBarOrDockModeChange(arg0) {
  let mode;
  let prevMode;
  let questContent;
  let questId;
  let sourceQuestContent;
  ({ questContent, sourceQuestContent, questId, mode, prevMode } = arg0);
  let obj = require(7095) /* getQuestContentName */;
  const contentProperties = obj.getContentProperties(questContent);
  obj = { questId, event: AnalyticEvents.QUEST_BAR_MODE_CHANGED, properties: obj, sourceQuestContent };
  obj = { content_id: contentProperties.content_id, content_name: contentProperties.content_name, mode, previous_mode: prevMode };
  trackQuestEvent(obj);
};
export const trackQuestEmbedFallbackViewed = function trackQuestEmbedFallbackViewed(questId, EXCLUDED_QUEST) {
  let obj = importDefault(4450);
  obj = { quest_id: questId, reason: EXCLUDED_QUEST };
  obj.trackWithMetadata(AnalyticEvents.QUEST_EMBED_FALLBACK_VIEWED, obj);
};