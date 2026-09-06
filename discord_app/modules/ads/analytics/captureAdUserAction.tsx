// === Module 11193: captureAdUserAction ===

// Module 11193 (captureAdUserAction)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import v1 from "v1" /* 1256 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7677 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import getQuestLogger from "getQuestLogger" /* 7709 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import AdDataUtils from "AdDataUtils" /* 7729 */;
import QuestHomeSearchSession from "QuestHomeSearchSession" /* 7734 */;
import BrandSafetyContext from "BrandSafetyContext" /* 11194 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11197 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import QuestStore from "QuestStore" /* 7703 */;

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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          let obj1 = { questContent: surfaceId, questContentPosition, questContentRowIndex, questContentCTA, impressionId, clickId };
          c7 = 1;
          c8 = 1;
          let obj2 = { value: AnalyticsActions.getCommonClickEventProperties(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        let obj3 = { value, done: true };
        return obj3;
      } else {
        closure_133_5 = value;
        if (closure_133_1 !== closure_134_0(closure_134_2[3]).AdCreativeType.QUEST) {
          obj3 = closure_134_0(closure_134_2[4]);
          const obj4 = { adContentId: closure_133_0.adCreativeId, relatedQuestId: closure_133_0.relatedQuestId, adCreativeType: closure_133_1, event: closure_134_5.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
          const obj5 = {};
          const merged = Object.assign(closure_133_5);
          let obj6 = closure_134_0(closure_134_2[7]);
          const currentQuestHomeSearchSession = obj6.getCurrentQuestHomeSearchSession();
          let uuid;
          if (currentQuestHomeSearchSession != null) {
            uuid = currentQuestHomeSearchSession.uuid;
          }
          let search_session_id = uuid;
          if (uuid == null) {
            search_session_id = null;
          }
          obj5.search_session_id = search_session_id;
          obj4.properties = obj5;
          obj4.trackGuildAndChannelMetadata = closure_133_4;
          let obj7 = closure_134_0(closure_134_2[5]);
          obj4.shouldExtendSession = obj7.isBillableQuestContent(closure_133_2);
          obj4.sourceQuestContent = closure_133_3;
          obj3.trackAdContentEvent(obj4);
        } else {
          adCreativeId = closure_133_0.adCreativeId;
          obj6 = { questId: adCreativeId, event: closure_134_5.QUEST_CONTENT_CLICKED, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
          obj7 = {};
          const merged1 = Object.assign(closure_133_5);
          const obj13 = closure_134_0(closure_134_2[4]);
          const adMetadataSealed = closure_134_0(closure_134_2[5]).getAdMetadataSealed(closure_133_3, adCreativeId);
          let metadata_sealed = adMetadataSealed;
          if (adMetadataSealed == null) {
            metadata_sealed = null;
          }
          obj7.metadata_sealed = metadata_sealed;
          obj = closure_134_0(closure_134_2[5]);
          const adTrafficMetadataSealed = obj.getAdTrafficMetadataSealed(closure_133_3, adCreativeId);
          let traffic_metadata_sealed = adTrafficMetadataSealed;
          if (adTrafficMetadataSealed == null) {
            traffic_metadata_sealed = null;
          }
          obj7.traffic_metadata_sealed = traffic_metadata_sealed;
          obj1 = closure_134_0(closure_134_2[7]);
          const currentQuestHomeSearchSession1 = obj1.getCurrentQuestHomeSearchSession();
          let uuid1;
          if (currentQuestHomeSearchSession1 != null) {
            uuid1 = currentQuestHomeSearchSession1.uuid;
          }
          let search_session_id2 = uuid1;
          if (uuid1 == null) {
            search_session_id2 = null;
          }
          obj7.search_session_id = search_session_id2;
          obj6.properties = obj7;
          obj6.trackGuildAndChannelMetadata = closure_133_4;
          obj2 = closure_134_0(closure_134_2[5]);
          obj6.shouldExtendSession = obj2.isBillableQuestContent(closure_133_2);
          obj6.sourceQuestContent = closure_133_3;
          obj13.trackQuestEvent(obj6);
          const obj16 = closure_134_0(closure_134_2[5]);
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else if (null != adCreativeType.adCreativeType) {
            c4 = 1;
            c3 = 1;
            const obj1 = { value: emitClickEventWithCreative(adCreativeType), done: false };
            return obj1;
          } else {
            const clickId = adCreativeType.clickId;
            ({ surfaceId, questContentCTA, questContentPosition, questContentRowIndex } = adCreativeType);
            const contentProperties = AnalyticsTypes.getContentProperties(surfaceId, questContentPosition, questContentRowIndex);
            const obj2 = { cta_name: questContentCTA, click_id: null, is_targeted: null, content_id: null, content_name: null, content_position: null, row_index: null, ad_content_id: null, quest_id: null };
            click_id = clickId;
            if (clickId == null) {
              click_id = v1.v4();
              const tmp16Result = v1;
            }
            obj2.click_id = click_id;
            const isTargeted = adCreativeType.isTargeted;
            is_targeted = isTargeted;
            if (isTargeted == null) {
              is_targeted = false;
            }
            obj2.is_targeted = is_targeted;
            ({ content_id: obj8.content_id, content_name: obj8.content_name, content_position: obj8.content_position, row_index: obj8.row_index } = contentProperties);
            ({ adContentId: obj8.ad_content_id, relatedQuestId: obj8.quest_id } = adCreativeType);
            AnalyticsUtilsDefault.track(constants.QUEST_CONTENT_CLICKED, obj2);
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 1;
          c1 = 1;
          const obj1 = { value: emitClickEventWithCreative(closure_0), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
  let obj = { min_view_time_seconds: minViewTimeSeconds.minViewTimeSeconds, min_viewport_percentage: minViewTimeSeconds.minViewportPercentage, triggered_by_status_change: minViewTimeSeconds.triggeredByStatusChange, apple_advertising_id: null, android_advertising_id: null };
  let advertisingId = null;
  ({ impressionId, isQuestEnrollmentBlocked, questContentPosition, questContentRowIndex } = minViewTimeSeconds);
  if (null != adUser) {
    let obj1 = PlatformUtils;
    advertisingId = null;
    if (obj1.isIOS()) {
      advertisingId = adUser.advertisingId;
    }
  }
  obj.apple_advertising_id = advertisingId;
  let advertisingId1 = null;
  if (null != adUser) {
    let obj2 = PlatformUtils;
    advertisingId1 = null;
    if (obj2.isAndroid()) {
      advertisingId1 = adUser.advertisingId;
    }
  }
  obj.android_advertising_id = advertisingId1;
  const merged = Object.assign(getDeviceMetadataDefault());
  const merged1 = Object.assign(BrandSafetyContext.getBrandSafetyContext(surfaceId));
  obj.impression_id = impressionId;
  obj.is_quest_enrollment_blocked = isQuestEnrollmentBlocked;
  const merged2 = Object.assign(AnalyticsTypes.getContentProperties(surfaceId, questContentPosition, questContentRowIndex));
  if (minViewTimeSeconds.adCreativeType !== AdCreativeType.AdCreativeType.QUEST) {
    let tmp9Result = AnalyticsActions;
    obj = { event: AnalyticEvents.QUEST_CONTENT_VIEWED, adContentId: null, relatedQuestId: null, adCreativeType: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null, properties: null };
    ({ adCreativeId: obj9.adContentId, relatedQuestId: obj9.relatedQuestId, adCreativeType: obj9.adCreativeType } = minViewTimeSeconds);
    obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj.shouldExtendSession = shouldExtendSession;
    obj.sourceQuestContent = sourceQuestContent;
    obj = {};
    const merged3 = Object.assign(obj);
    obj.properties = obj;
    tmp9Result.trackAdContentEvent(obj);
  } else {
    const adCreativeId = minViewTimeSeconds.adCreativeId;
    tmp9Result = AnalyticsActions;
    obj1 = { event: AnalyticEvents.QUEST_CONTENT_VIEWED, questId: adCreativeId, trackGuildAndChannelMetadata, shouldExtendSession, sourceQuestContent, properties: null };
    obj2 = {};
    const merged4 = Object.assign(obj);
    let adMetadataSealed = QuestDataUtils.getAdMetadataSealed(sourceQuestContent, adCreativeId);
    if (adMetadataSealed == null) {
      adMetadataSealed = null;
    }
    obj2.metadata_sealed = adMetadataSealed;
    const tmp9Result1 = QuestDataUtils;
    const currentQuestHomeSearchSession = QuestHomeSearchSession.getCurrentQuestHomeSearchSession();
    let uuid;
    if (currentQuestHomeSearchSession != null) {
      uuid = currentQuestHomeSearchSession.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
    obj2.search_session_id = uuid;
    const tmp9Result2 = QuestHomeSearchSession;
    let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId);
    if (adTrafficMetadataSealed == null) {
      adTrafficMetadataSealed = null;
    }
    obj2.traffic_metadata_sealed = adTrafficMetadataSealed;
    obj1.properties = obj2;
    tmp9Result.trackQuestEvent(obj1);
    const tmp9Result3 = QuestDataUtils;
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
            closure_130_0 = adCreativeType;
            closure_130_1 = undefined;
            if (null != adCreativeType.adCreativeType) {
              handleViewImpression(adCreativeType);
              c5 = 3;
            } else {
              let obj3 = AdDataUtils;
              c4 = 1;
              c5 = 1;
              let obj1 = { value: obj3.getAdUser(AnalyticsTypes.getQuestContentName(adCreativeType.surfaceId)), done: false };
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_1 = value;
          const obj2 = {};
          const obj9 = closure_131_1(closure_131_2[8]);
          const merged = Object.assign(closure_131_0(closure_131_2[6]).getContentProperties(closure_130_0.surfaceId));
          let advertisingId = null;
          if (null != closure_130_1) {
            obj = closure_131_0(closure_131_2[10]);
            advertisingId = null;
            if (obj.isIOS()) {
              advertisingId = closure_130_1.advertisingId;
            }
          }
          obj2.apple_advertising_id = advertisingId;
          let advertisingId1 = null;
          if (null != closure_130_1) {
            obj1 = closure_131_0(closure_131_2[10]);
            advertisingId1 = null;
            if (obj1.isAndroid()) {
              advertisingId1 = closure_130_1.advertisingId;
            }
          }
          obj2.android_advertising_id = advertisingId1;
          const isTargeted = closure_130_0.isTargeted;
          is_targeted = isTargeted;
          if (isTargeted == null) {
            is_targeted = false;
          }
          obj2.is_targeted = is_targeted;
          obj9.track(closure_131_5.QUEST_CONTENT_VIEWED, obj2);
          const obj11 = closure_131_0(closure_131_2[6]);
        }
        c5 = 3;
        obj3 = { value, done: true };
        return obj3;
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
          let obj = { event: constants.QUEST_CONTENT_LOADED, questId: adCreativeId, trackGuildAndChannelMetadata: null, sourceQuestContent: null, properties: null };
          ({ trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, sourceQuestContent: obj2.sourceQuestContent } = adCreativeType);
          obj = { triggered_by_status_change: adCreativeType.triggeredByStatusChange, metadata_sealed: null, traffic_metadata_sealed: null, impression_id: null, is_quest_enrollment_blocked: null, content_id: null, content_name: null, content_position: null, row_index: null };
          const tmp2Result = QuestDataUtils;
          let adMetadataSealed = tmp2Result.getAdMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj.metadata_sealed = adMetadataSealed;
          let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          obj.traffic_metadata_sealed = adTrafficMetadataSealed;
          obj.impression_id = adCreativeType.impressionId;
          obj.is_quest_enrollment_blocked = tmp;
          obj.content_id = adCreativeType.surfaceId;
          const tmp2Result1 = QuestDataUtils;
          obj.content_name = AnalyticsTypes.getQuestContentName(adCreativeType.surfaceId);
          ({ questContentPosition: obj3.content_position, questContentRowIndex: obj3.row_index } = adCreativeType);
          obj.properties = obj;
          tmp2Result.trackQuestEvent(obj);
          const tmp2Result2 = AnalyticsTypes;
        } else {
          const obj1 = { event: constants.QUEST_CONTENT_LOADED, adContentId: null, relatedQuestId: null, adCreativeType: null, trackGuildAndChannelMetadata: null, sourceQuestContent: null, properties: null };
          ({ adCreativeId: obj8.adContentId, relatedQuestId: obj8.relatedQuestId, adCreativeType: obj8.adCreativeType, trackGuildAndChannelMetadata: obj8.trackGuildAndChannelMetadata, sourceQuestContent: obj8.sourceQuestContent } = adCreativeType);
          const obj2 = { triggered_by_status_change: null, impression_id: null, is_quest_enrollment_blocked: null, content_id: null, content_name: null, content_position: null, row_index: null };
          ({ triggeredByStatusChange: obj9.triggered_by_status_change, impressionId: obj9.impression_id } = adCreativeType);
          obj2.is_quest_enrollment_blocked = tmp;
          obj2.content_id = adCreativeType.surfaceId;
          const tmp2Result3 = AnalyticsActions;
          obj2.content_name = AnalyticsTypes.getQuestContentName(adCreativeType.surfaceId);
          ({ questContentPosition: obj9.content_position, questContentRowIndex: obj9.row_index } = adCreativeType);
          obj1.properties = obj2;
          tmp2Result3.trackAdContentEvent(obj1);
          const tmp2Result4 = AnalyticsTypes;
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