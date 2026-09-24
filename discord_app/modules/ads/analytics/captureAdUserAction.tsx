// === Module 8052: captureAdUserAction ===

// Module 8052 (captureAdUserAction)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import v1 from "v1" /* 1255 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AdCreativeType from "AdCreativeType" /* 5756 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 8000 */;
import QuestDataUtils from "QuestDataUtils" /* 8022 */;
import getQuestLogger from "getQuestLogger" /* 8032 */;
import AnalyticsActions from "AnalyticsActions" /* 8041 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8051 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 8053 */;
import BrandSafetyContext from "BrandSafetyContext" /* 8054 */;
import AdDataUtils from "AdDataUtils" /* 8057 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 8062 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import QuestStore from "QuestStore" /* 8026 */;

require = fn;
function emitClickEventWithCreative() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _emitClickEventWithCreative(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj5 = { value, done: true };
      return obj5;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_6 = tmp5;
          closure_5 = tmp2;
          closure_133_0 = closure_0;
          closure_133_1 = undefined;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          closure_133_5 = undefined;
          let adCreativeId;
          ({ adCreativeType: closure_133_1, surfaceId } = closure_0);
          closure_133_2 = surfaceId;
          ({ sourceQuestContent: closure_133_3, trackGuildAndChannelMetadata: closure_133_4 } = closure_0);
          ({ questContentCTA, impressionId, clickId, questContentPosition, questContentRowIndex } = closure_0);
          const obj9 = { questContent: surfaceId, questContentPosition, questContentRowIndex, questContentCTA, impressionId, clickId };
          c7 = 1;
          c8 = 1;
          const obj10 = { value: AnalyticsActions.getCommonClickEventProperties(obj9), done: false };
          return obj10;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        closure_133_5 = value;
        if (closure_133_1 !== closure_134_0(closure_134_2[3]).AdCreativeType.QUEST) {
          const obj12 = { adContentId: closure_133_0.adCreativeId, relatedQuestId: closure_133_0.relatedQuestId, adCreativeType: closure_133_1, event: closure_134_5.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
          const obj14 = {};
          const merged = Object.assign(closure_133_5);
          const obj4 = closure_134_0(closure_134_2[4]);
          const currentQuestHomeSearchSession = closure_134_0(closure_134_2[7]).getCurrentQuestHomeSearchSession();
          let uuid;
          if (currentQuestHomeSearchSession != null) {
            uuid = currentQuestHomeSearchSession.uuid;
          }
          let search_session_id = uuid;
          if (uuid == null) {
            search_session_id = null;
          }
          obj14.search_session_id = search_session_id;
          obj12.properties = obj14;
          obj12.trackGuildAndChannelMetadata = closure_133_4;
          const obj7 = closure_134_0(closure_134_2[7]);
          obj12.shouldExtendSession = closure_134_0(closure_134_2[5]).isBillableQuestContent(closure_133_2);
          obj12.sourceQuestContent = closure_133_3;
          obj4.trackAdContentEvent(obj12);
          const obj8 = closure_134_0(closure_134_2[5]);
        } else {
          adCreativeId = closure_133_0.adCreativeId;
          const obj15 = { questId: adCreativeId, event: closure_134_5.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
          const obj18 = {};
          const merged1 = Object.assign(closure_133_5);
          const obj13 = closure_134_0(closure_134_2[4]);
          const adMetadataSealed = closure_134_0(closure_134_2[5]).getAdMetadataSealed(closure_133_3, adCreativeId);
          let metadata_sealed = adMetadataSealed;
          if (adMetadataSealed == null) {
            metadata_sealed = null;
          }
          obj18.metadata_sealed = metadata_sealed;
          const obj16 = closure_134_0(closure_134_2[5]);
          const adTrafficMetadataSealed = closure_134_0(closure_134_2[5]).getAdTrafficMetadataSealed(closure_133_3, adCreativeId);
          let traffic_metadata_sealed = adTrafficMetadataSealed;
          if (adTrafficMetadataSealed == null) {
            traffic_metadata_sealed = null;
          }
          obj18.traffic_metadata_sealed = traffic_metadata_sealed;
          const obj = closure_134_0(closure_134_2[5]);
          const currentQuestHomeSearchSession1 = closure_134_0(closure_134_2[7]).getCurrentQuestHomeSearchSession();
          let uuid1;
          if (currentQuestHomeSearchSession1 != null) {
            uuid1 = currentQuestHomeSearchSession1.uuid;
          }
          let search_session_id2 = uuid1;
          if (uuid1 == null) {
            search_session_id2 = null;
          }
          obj18.search_session_id = search_session_id2;
          obj15.properties = obj18;
          obj15.trackGuildAndChannelMetadata = closure_133_4;
          const obj2 = closure_134_0(closure_134_2[7]);
          obj15.shouldExtendSession = closure_134_0(closure_134_2[5]).isBillableQuestContent(closure_133_2);
          obj15.sourceQuestContent = closure_133_3;
          obj13.trackQuestEvent(obj15);
          const obj3 = closure_134_0(closure_134_2[5]);
        }
        c8 = 3;
      }
    } catch (tmp54) {
      c8 = tmp;
      throw tmp54;
    }
  }
};
let closure_8 = async function _handleClickInternalAction(arg0) {
  let adCreativeType = arg0;
  c4 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (null != adCreativeType.adCreativeType) {
            c4 = 1;
            c3 = 1;
            const obj4 = { value: emitClickEventWithCreative(adCreativeType), done: false };
            return obj4;
          } else {
            const clickId = adCreativeType.clickId;
            ({ surfaceId, questContentCTA, questContentPosition, questContentRowIndex } = adCreativeType);
            const contentProperties = AnalyticsTypes.getContentProperties(surfaceId, questContentPosition, questContentRowIndex);
            const obj5 = { cta_name: questContentCTA, click_id: null, is_targeted: null, content_id: null, content_name: null, content_position: null, row_index: null, ad_content_id: null, quest_id: null };
            click_id = clickId;
            if (clickId == null) {
              click_id = v1.v4();
              const tmp16Result = v1;
            }
            obj5.click_id = click_id;
            const isTargeted = adCreativeType.isTargeted;
            is_targeted = isTargeted;
            if (isTargeted == null) {
              is_targeted = false;
            }
            obj5.is_targeted = is_targeted;
            ({ content_id: obj8.content_id, content_name: obj8.content_name, content_position: obj8.content_position, row_index: obj8.row_index } = contentProperties);
            ({ adContentId: obj8.ad_content_id, relatedQuestId: obj8.quest_id } = adCreativeType);
            AnalyticsUtilsDefault.track(constants.QUEST_CONTENT_CLICKED, obj5);
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c3 = tmp;
        throw tmp9;
      }
    }
  })();
};
let closure_9 = async function _handleClickExternalAdvertiserCtaAction(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 1;
          c1 = 1;
          const obj4 = { value: emitClickEventWithCreative(closure_0), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
function handleViewImpression(minViewTimeSeconds) {
  ({ surfaceId, sourceQuestContent, shouldExtendSession, adUser, trackGuildAndChannelMetadata } = minViewTimeSeconds);
  const obj = { min_view_time_seconds: minViewTimeSeconds.minViewTimeSeconds, min_viewport_percentage: minViewTimeSeconds.minViewportPercentage, triggered_by_status_change: minViewTimeSeconds.triggeredByStatusChange, apple_advertising_id: null, android_advertising_id: null };
  let advertisingId = null;
  ({ impressionId, isQuestEnrollmentBlocked, questContentPosition, questContentRowIndex } = minViewTimeSeconds);
  if (null != adUser) {
    advertisingId = null;
    if (obj2.isIOS()) {
      advertisingId = adUser.advertisingId;
    }
    obj2 = PlatformUtils;
  }
  obj.apple_advertising_id = advertisingId;
  let advertisingId1 = null;
  if (null != adUser) {
    advertisingId1 = null;
    if (obj3.isAndroid()) {
      advertisingId1 = adUser.advertisingId;
    }
    obj3 = PlatformUtils;
  }
  obj.android_advertising_id = advertisingId1;
  const merged = Object.assign(getDeviceMetadataDefault());
  const merged1 = Object.assign(BrandSafetyContext.getBrandSafetyContext(surfaceId));
  obj.impression_id = impressionId;
  obj.is_quest_enrollment_blocked = isQuestEnrollmentBlocked;
  const merged2 = Object.assign(AnalyticsTypes.getContentProperties(surfaceId, questContentPosition, questContentRowIndex));
  if (minViewTimeSeconds.adCreativeType !== AdCreativeType.AdCreativeType.QUEST) {
    const obj6 = { event: AnalyticEvents.QUEST_CONTENT_VIEWED, adContentId: null, relatedQuestId: null, adCreativeType: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null, properties: null };
    ({ adCreativeId: obj9.adContentId, relatedQuestId: obj9.relatedQuestId, adCreativeType: obj9.adCreativeType } = minViewTimeSeconds);
    obj6.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj6.shouldExtendSession = shouldExtendSession;
    obj6.sourceQuestContent = sourceQuestContent;
    const obj7 = {};
    const merged3 = Object.assign(obj);
    obj6.properties = obj7;
    AnalyticsActions.trackAdContentEvent(obj6);
    const tmp9Result = AnalyticsActions;
  } else {
    const adCreativeId = minViewTimeSeconds.adCreativeId;
    const obj8 = { event: AnalyticEvents.QUEST_CONTENT_VIEWED, questId: adCreativeId, trackGuildAndChannelMetadata, shouldExtendSession, sourceQuestContent, properties: null };
    const obj10 = {};
    const merged4 = Object.assign(obj);
    const tmp9Result5 = AnalyticsActions;
    let adMetadataSealed = QuestDataUtils.getAdMetadataSealed(sourceQuestContent, adCreativeId);
    if (adMetadataSealed == null) {
      adMetadataSealed = null;
    }
    obj10.metadata_sealed = adMetadataSealed;
    const tmp9Result6 = QuestDataUtils;
    const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
    let uuid;
    if (currentQuestHomeSearchSession != null) {
      uuid = currentQuestHomeSearchSession.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
    obj10.search_session_id = uuid;
    const tmp9Result7 = QuestHomeSearchSession;
    let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId);
    if (adTrafficMetadataSealed == null) {
      adTrafficMetadataSealed = null;
    }
    obj10.traffic_metadata_sealed = adTrafficMetadataSealed;
    obj8.properties = obj10;
    tmp9Result5.trackQuestEvent(obj8);
    const tmp9Result8 = QuestDataUtils;
  }
}
let closure_11 = async function _handleViewInternalSurfaceImpressionAction(arg0) {
  let adCreativeType = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            closure_130_0 = adCreativeType;
            closure_130_1 = undefined;
            if (null != adCreativeType.adCreativeType) {
              handleViewImpression(adCreativeType);
              c5 = 3;
            } else {
              const obj4 = AdDataUtils;
              c4 = 1;
              c5 = 1;
              const obj7 = { value: obj4.getAdUser(AnalyticsTypes.getQuestContentName(adCreativeType.surfaceId)), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_1 = value;
          const obj8 = {};
          const obj9 = closure_131_1(closure_131_2[8]);
          const merged = Object.assign(closure_131_0(closure_131_2[6]).getContentProperties(closure_130_0.surfaceId));
          let advertisingId = null;
          if (null != closure_130_1) {
            advertisingId = null;
            if (obj.isIOS()) {
              advertisingId = closure_130_1.advertisingId;
            }
            obj = closure_131_0(closure_131_2[10]);
          }
          obj8.apple_advertising_id = advertisingId;
          let advertisingId1 = null;
          if (null != closure_130_1) {
            advertisingId1 = null;
            if (obj2.isAndroid()) {
              advertisingId1 = closure_130_1.advertisingId;
            }
            obj2 = closure_131_0(closure_131_2[10]);
          }
          obj8.android_advertising_id = advertisingId1;
          const isTargeted = closure_130_0.isTargeted;
          is_targeted = isTargeted;
          if (isTargeted == null) {
            is_targeted = false;
          }
          obj8.is_targeted = is_targeted;
          obj9.track(closure_131_5.QUEST_CONTENT_VIEWED, obj8);
          const obj11 = closure_131_0(closure_131_2[6]);
        }
        c5 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } catch (tmp30) {
        c5 = tmp;
        throw tmp30;
      }
    }
  })();
};
function reportCaptureAdUserActionError(arg0) {
  const questLogger = getQuestLogger.getQuestLogger();
  questLogger.error("captureAdUserAction failed to report an ad user action", arg0);
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/analytics/captureAdUserAction.tsx");

export const captureAdUserAction = function captureAdUserAction(captureAdUserActionResult1) {
  try {
    const type = captureAdUserActionResult1.type;
    if (captureAdUserActionTypes.AdUserActionType.END_CONTENT_LOAD === type) {
      (function handleEndContentLoadAction(adCreativeType) {
        if (adCreativeType.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
          const adCreativeId = adCreativeType.adCreativeId;
          const obj = { event: constants.QUEST_CONTENT_LOADED, questId: adCreativeId, trackGuildAndChannelMetadata: null, sourceQuestContent: null, properties: null };
          ({ trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, sourceQuestContent: obj2.sourceQuestContent } = adCreativeType);
          const obj4 = { triggered_by_status_change: adCreativeType.triggeredByStatusChange, metadata_sealed: null, traffic_metadata_sealed: null, impression_id: null, is_quest_enrollment_blocked: null, content_id: null, content_name: null, content_position: null, row_index: null };
          const tmp2Result = AnalyticsActions;
          let adMetadataSealed = QuestDataUtils.getAdMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj4.metadata_sealed = adMetadataSealed;
          const tmp2Result6 = QuestDataUtils;
          let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          obj4.traffic_metadata_sealed = adTrafficMetadataSealed;
          obj4.impression_id = adCreativeType.impressionId;
          obj4.is_quest_enrollment_blocked = tmp;
          obj4.content_id = adCreativeType.surfaceId;
          const tmp2Result7 = QuestDataUtils;
          obj4.content_name = AnalyticsTypes.getQuestContentName(adCreativeType.surfaceId);
          ({ questContentPosition: obj3.content_position, questContentRowIndex: obj3.row_index } = adCreativeType);
          obj.properties = obj4;
          tmp2Result.trackQuestEvent(obj);
          const tmp2Result8 = AnalyticsTypes;
        } else {
          const obj5 = { event: constants.QUEST_CONTENT_LOADED, adContentId: null, relatedQuestId: null, adCreativeType: null, trackGuildAndChannelMetadata: null, sourceQuestContent: null, properties: null };
          ({ adCreativeId: obj8.adContentId, relatedQuestId: obj8.relatedQuestId, adCreativeType: obj8.adCreativeType, trackGuildAndChannelMetadata: obj8.trackGuildAndChannelMetadata, sourceQuestContent: obj8.sourceQuestContent } = adCreativeType);
          const obj6 = { triggered_by_status_change: null, impression_id: null, is_quest_enrollment_blocked: null, content_id: null, content_name: null, content_position: null, row_index: null };
          ({ triggeredByStatusChange: obj9.triggered_by_status_change, impressionId: obj9.impression_id } = adCreativeType);
          obj6.is_quest_enrollment_blocked = tmp;
          obj6.content_id = adCreativeType.surfaceId;
          const tmp2Result9 = AnalyticsActions;
          obj6.content_name = AnalyticsTypes.getQuestContentName(adCreativeType.surfaceId);
          ({ questContentPosition: obj9.content_position, questContentRowIndex: obj9.row_index } = adCreativeType);
          obj5.properties = obj6;
          tmp2Result9.trackAdContentEvent(obj5);
          const tmp2Result10 = AnalyticsTypes;
        }
      })(captureAdUserActionResult1);
    } else if (captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL === type) {
      (function handleClickInternalAction() {
        const self = this;
        const apply = closure_1_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(captureAdUserActionResult1).catch(reportCaptureAdUserActionError);
      const promise3 = (function handleClickInternalAction() {
        const self = this;
        const apply = closure_1_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(captureAdUserActionResult1);
    } else if (captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA === type) {
      (function handleClickExternalAdvertiserCtaAction() {
        const self = this;
        const apply = closure_1_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(captureAdUserActionResult1).catch(reportCaptureAdUserActionError);
      const promise2 = (function handleClickExternalAdvertiserCtaAction() {
        const self = this;
        const apply = closure_1_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(captureAdUserActionResult1);
    } else if (captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION === type) {
      (function handleViewInternalSurfaceImpressionAction() {
        const self = this;
        const apply = closure_1_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(captureAdUserActionResult1).catch(reportCaptureAdUserActionError);
      const promise = (function handleViewInternalSurfaceImpressionAction() {
        const self = this;
        const apply = closure_1_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(captureAdUserActionResult1);
    } else if (captureAdUserActionTypes.AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION === type) {
      handleViewImpression(captureAdUserActionResult1);
    }
  } catch (tmp13) {
    reportCaptureAdUserActionError(tmp13);
  }
};