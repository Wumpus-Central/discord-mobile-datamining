// discord_app/modules/ads/analytics/captureAdUserAction.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import getDeviceMetadataDefault from "../../device/getDeviceMetadata.native.tsx";
import QuestDataUtils from "../../quests/utils/QuestDataUtils.tsx";
import getQuestLogger from "../../quests/lib/getQuestLogger.tsx";
import AnalyticsActions from "../../quests/lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../quests/lib/analytics/AnalyticsTypes.tsx";
import QuestHomeSearchSession from "../../quests/lib/analytics/QuestHomeSearchSession.tsx";
import BrandSafetyContext from "../../quests/lib/analytics/BrandSafetyContext.tsx";
import AdDataUtils from "../utils/AdDataUtils.android.tsx";
import captureAdUserActionTypes from "captureAdUserActionTypes.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import QuestStore from "../../quests/QuestStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2, c5, c7, c8, click_id;

function emitClickEventWithCreative() {
  return obj(...arguments);
}
let obj = function _emitClickEventWithCreative() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c3;
    let c4;
    let clickId;
    let impressionId;
    let metadata_sealed;
    let obj12;
    let obj15;
    let obj16;
    let obj3;
    let obj7;
    let questContentCTA;
    let questContentPosition;
    let questContentRowIndex;
    let surfaceId;
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let _null;
        let _null2;
        let _null3;
        let closure_5;
        let adCreativeId;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_6 = tmp4;
            _null = undefined;
            surfaceId = undefined;
            _null2 = undefined;
            _null3 = undefined;
            closure_5 = undefined;
            adCreativeId = undefined;
            ({ adCreativeType: c1, surfaceId } = closure_0);
            ({ sourceQuestContent: c3, trackGuildAndChannelMetadata: c4 } = closure_0);
            ({ questContentCTA, impressionId, clickId, questContentPosition, questContentRowIndex } = closure_0);
            const obj8 = {
              questContent: surfaceId,
              questContentPosition,
              questContentRowIndex,
              questContentCTA,
              impressionId,
              clickId,
            };
            c7 = 1;
            c8 = 1;
            const obj9 = { value: obj15.getCommonClickEventProperties(obj8), done: false };
            obj15 = AnalyticsActions;
            return obj9;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_5 = value;
          if (_null !== closure_134_0(closure_134_2[3]).AdCreativeType.QUEST) {
            const obj11 = {
              adContentId: closure_0.adCreativeId,
              relatedQuestId: closure_0.relatedQuestId,
              adCreativeType: _null,
              event: closure_134_5.QUEST_CONTENT_CLICKED,
              properties: obj12,
              trackGuildAndChannelMetadata: _null3,
              shouldExtendSession: obj7.isBillableQuestContent(surfaceId),
              sourceQuestContent: _null2,
            };
            obj12 = { search_session_id: _null };
            const trackAdContentEvent = closure_134_0(closure_134_2[4]).trackAdContentEvent;
            const tmp32 = closure_134_0(closure_134_2[4]);
            const merged = Object.assign(closure_5);
            const obj6 = closure_134_0(closure_134_2[7]);
            const currentQuestHomeSearchSession = obj6.getCurrentQuestHomeSearchSession();
            let uuid;
            if (currentQuestHomeSearchSession != null) {
              uuid = currentQuestHomeSearchSession.uuid;
            }
            _null = uuid;
            if (uuid == null) {
              _null = null;
            }
            obj7 = closure_134_0(closure_134_2[5]);
            trackAdContentEvent(obj11);
          } else {
            adCreativeId = closure_0.adCreativeId;
            const obj13 = {
              questId: adCreativeId,
              event: closure_134_5.QUEST_CONTENT_CLICKED,
              properties: obj16,
              trackGuildAndChannelMetadata: _null3,
              shouldExtendSession: obj3.isBillableQuestContent(surfaceId),
              sourceQuestContent: _null2,
            };
            obj16 = { metadata_sealed, traffic_metadata_sealed: _null2, search_session_id: _null3 };
            const trackQuestEvent = closure_134_0(closure_134_2[4]).trackQuestEvent;
            const tmp68 = closure_134_0(closure_134_2[4]);
            const merged1 = Object.assign(closure_5);
            const obj14 = closure_134_0(closure_134_2[5]);
            const adMetadataSealed = obj14.getAdMetadataSealed(_null2, adCreativeId);
            metadata_sealed = adMetadataSealed;
            if (adMetadataSealed == null) {
              metadata_sealed = null;
            }
            obj = closure_134_0(closure_134_2[5]);
            const adTrafficMetadataSealed = obj.getAdTrafficMetadataSealed(_null2, adCreativeId);
            _null2 = adTrafficMetadataSealed;
            if (adTrafficMetadataSealed == null) {
              _null2 = null;
            }
            const obj2 = closure_134_0(closure_134_2[7]);
            const currentQuestHomeSearchSession1 = obj2.getCurrentQuestHomeSearchSession();
            let uuid1;
            if (currentQuestHomeSearchSession1 != null) {
              uuid1 = currentQuestHomeSearchSession1.uuid;
            }
            _null3 = uuid1;
            if (uuid1 == null) {
              _null3 = null;
            }
            obj3 = closure_134_0(closure_134_2[5]);
            trackQuestEvent(obj13);
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp54) {
        c8 = 3;
        throw tmp54;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleClickInternalAction() {
  obj = _asyncToGenerator(async (arg0) => {
    const adCreativeType = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let questContentCTA;
      let questContentPosition;
      let questContentRowIndex;
      let surfaceId;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else if (null != adCreativeType.adCreativeType) {
              c4 = 1;
              c3 = 1;
              const obj4 = { value: emitClickEventWithCreative(adCreativeType), done: false };
              return obj4;
            } else {
              const clickId = adCreativeType.clickId;
              ({ surfaceId, questContentCTA, questContentPosition, questContentRowIndex } = adCreativeType);
              const obj6 = AnalyticsTypes;
              const contentProperties = obj6.getContentProperties(
                surfaceId,
                questContentPosition,
                questContentRowIndex,
              );
              const obj5 = {
                cta_name: questContentCTA,
                click_id,
                is_targeted,
                content_id: null,
                content_name: null,
                content_position: null,
                row_index: null,
                ad_content_id: null,
                quest_id: null,
              };
              click_id = clickId;
              const track = AnalyticsUtilsDefault.track;
              const QUEST_CONTENT_CLICKED = constants.QUEST_CONTENT_CLICKED;
              AnalyticsUtilsDefault;
              if (clickId == null) {
                const tmp14Result = v1;
                click_id = tmp14Result.v4();
              }
              const isTargeted = adCreativeType.isTargeted;
              is_targeted = isTargeted;
              if (isTargeted == null) {
                is_targeted = false;
              }
              ({
                content_id: obj7.content_id,
                content_name: obj7.content_name,
                content_position: obj7.content_position,
                row_index: obj7.row_index,
              } = contentProperties);
              ({ adContentId: obj7.ad_content_id, relatedQuestId: obj7.quest_id } = adCreativeType);
              track(QUEST_CONTENT_CLICKED, obj5);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp8) {
          c3 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleClickExternalAdvertiserCtaAction() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
function handleViewImpression(minViewTimeSeconds) {
  let adMetadataSealed;
  let adTrafficMetadataSealed;
  let adUser;
  let advertisingId;
  let advertisingId1;
  let impressionId;
  let isQuestEnrollmentBlocked;
  let obj10;
  let obj7;
  let questContentPosition;
  let questContentRowIndex;
  let shouldExtendSession;
  let sourceQuestContent;
  let surfaceId;
  let trackGuildAndChannelMetadata;
  let uuid;
  ({ surfaceId, sourceQuestContent, shouldExtendSession, adUser, trackGuildAndChannelMetadata } = minViewTimeSeconds);
  obj = {
    min_view_time_seconds: minViewTimeSeconds.minViewTimeSeconds,
    min_viewport_percentage: minViewTimeSeconds.minViewportPercentage,
    triggered_by_status_change: minViewTimeSeconds.triggeredByStatusChange,
    apple_advertising_id: advertisingId,
    android_advertising_id: advertisingId1,
    impression_id: impressionId,
    is_quest_enrollment_blocked: isQuestEnrollmentBlocked,
  };
  advertisingId = null;
  ({ impressionId, isQuestEnrollmentBlocked, questContentPosition, questContentRowIndex } = minViewTimeSeconds);
  if (null != adUser) {
    advertisingId = null;
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      advertisingId = adUser.advertisingId;
    }
  }
  advertisingId1 = null;
  if (null != adUser) {
    advertisingId1 = null;
    const obj3 = PlatformUtils;
    if (obj3.isAndroid()) {
      advertisingId1 = adUser.advertisingId;
    }
  }
  const merged = Object.assign(getDeviceMetadataDefault());
  const obj4 = BrandSafetyContext;
  const merged1 = Object.assign(obj4.getBrandSafetyContext(surfaceId));
  const obj5 = AnalyticsTypes;
  const merged2 = Object.assign(obj5.getContentProperties(surfaceId, questContentPosition, questContentRowIndex));
  if (minViewTimeSeconds.adCreativeType !== AdCreativeType.AdCreativeType.QUEST) {
    const obj6 = {
      event: AnalyticEvents.QUEST_CONTENT_VIEWED,
      adContentId: null,
      relatedQuestId: null,
      adCreativeType: null,
      trackGuildAndChannelMetadata,
      shouldExtendSession,
      sourceQuestContent,
      properties: obj7,
    };
    ({
      adCreativeId: obj8.adContentId,
      relatedQuestId: obj8.relatedQuestId,
      adCreativeType: obj8.adCreativeType,
    } = minViewTimeSeconds);
    obj7 = {};
    const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
    AnalyticsActions;
    const merged3 = Object.assign(obj);
    trackAdContentEvent(obj6);
  } else {
    const adCreativeId = minViewTimeSeconds.adCreativeId;
    const obj9 = {
      event: AnalyticEvents.QUEST_CONTENT_VIEWED,
      questId: adCreativeId,
      trackGuildAndChannelMetadata,
      shouldExtendSession,
      sourceQuestContent,
      properties: obj10,
    };
    obj10 = {
      metadata_sealed: adMetadataSealed,
      search_session_id: uuid,
      traffic_metadata_sealed: adTrafficMetadataSealed,
    };
    const trackQuestEvent = AnalyticsActions.trackQuestEvent;
    AnalyticsActions;
    const merged4 = Object.assign(obj);
    const tmp9Result6 = QuestDataUtils;
    adMetadataSealed = tmp9Result6.getAdMetadataSealed(sourceQuestContent, adCreativeId);
    if (adMetadataSealed == null) {
      adMetadataSealed = null;
    }
    const tmp9Result7 = QuestHomeSearchSession;
    const currentQuestHomeSearchSession = tmp9Result7.getCurrentQuestHomeSearchSession();
    uuid = undefined;
    if (currentQuestHomeSearchSession != null) {
      uuid = currentQuestHomeSearchSession.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
    const tmp9Result8 = QuestDataUtils;
    adTrafficMetadataSealed = tmp9Result8.getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId);
    if (adTrafficMetadataSealed == null) {
      adTrafficMetadataSealed = null;
    }
    trackQuestEvent(obj9);
  }
}
obj = function _handleViewInternalSurfaceImpressionAction() {
  obj = _asyncToGenerator(async (arg0) => {
    let advertisingId;
    let advertisingId1;
    let obj4;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let is_targeted;
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
            let closure_3 = tmp4;
            let closure_2 = tmp;
            is_targeted = undefined;
            if (null != closure_0.adCreativeType) {
              handleViewImpression(closure_0);
            } else {
              const getAdUser = AdDataUtils.getAdUser;
              c4 = 1;
              c5 = 1;
              const obj6 = { value: getAdUser(obj4.getQuestContentName(closure_0.surfaceId)), done: false };
              obj4 = AnalyticsTypes;
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          is_targeted = value;
          const obj8 = { apple_advertising_id: advertisingId, android_advertising_id: advertisingId1, is_targeted };
          const track = closure_131_1(closure_131_2[8]).track;
          const QUEST_CONTENT_VIEWED = closure_131_5.QUEST_CONTENT_VIEWED;
          const tmp38 = closure_131_1(closure_131_2[8]);
          const obj9 = closure_131_0(closure_131_2[6]);
          const merged = Object.assign(obj9.getContentProperties(closure_0.surfaceId));
          advertisingId = null;
          if (null != is_targeted) {
            advertisingId = null;
            obj = closure_131_0(closure_131_2[10]);
            if (obj.isIOS()) {
              advertisingId = is_targeted.advertisingId;
            }
          }
          advertisingId1 = null;
          if (null != is_targeted) {
            advertisingId1 = null;
            const obj2 = closure_131_0(closure_131_2[10]);
            if (obj2.isAndroid()) {
              advertisingId1 = is_targeted.advertisingId;
            }
          }
          const isTargeted = closure_0.isTargeted;
          is_targeted = isTargeted;
          if (isTargeted == null) {
            is_targeted = false;
          }
          track(QUEST_CONTENT_VIEWED, obj8);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp30) {
        c5 = 3;
        throw tmp30;
      }
    }
  });
  return obj(...arguments);
};
function reportCaptureAdUserActionError(arg0) {
  obj = getQuestLogger;
  const questLogger = obj.getQuestLogger();
  questLogger.error("captureAdUserAction failed to report an ad user action", arg0);
}
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/ads/analytics/captureAdUserAction.tsx");

export const captureAdUserAction = function captureAdUserAction(type) {
  function handleEndContentLoadAction(adCreativeType) {
    let adMetadataSealed;
    let adTrafficMetadataSealed;
    let obj3;
    let obj5;
    let tmp2Result10;
    let tmp2Result8;
    if (adCreativeType.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
      const adCreativeId = adCreativeType.adCreativeId;
      obj = {
        event: constants.QUEST_CONTENT_LOADED,
        questId: adCreativeId,
        trackGuildAndChannelMetadata: null,
        sourceQuestContent: null,
        properties: obj3,
      };
      ({ trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent } =
        adCreativeType);
      obj3 = {
        triggered_by_status_change: adCreativeType.triggeredByStatusChange,
        metadata_sealed: adMetadataSealed,
        traffic_metadata_sealed: adTrafficMetadataSealed,
        impression_id: adCreativeType.impressionId,
        is_quest_enrollment_blocked: null != QuestStore.questEnrollmentBlockedUntil,
        content_id: adCreativeType.surfaceId,
        content_name: tmp2Result8.getQuestContentName(adCreativeType.surfaceId),
        content_position: null,
        row_index: null,
      };
      const trackQuestEvent = AnalyticsActions.trackQuestEvent;
      AnalyticsActions;
      const tmp2Result6 = QuestDataUtils;
      adMetadataSealed = tmp2Result6.getAdMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
      if (adMetadataSealed == null) {
        adMetadataSealed = null;
      }
      const tmp2Result7 = QuestDataUtils;
      adTrafficMetadataSealed = tmp2Result7.getAdTrafficMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
      if (adTrafficMetadataSealed == null) {
        adTrafficMetadataSealed = null;
      }
      ({ questContentPosition: obj2.content_position, questContentRowIndex: obj2.row_index } = adCreativeType);
      tmp2Result8 = AnalyticsTypes;
      trackQuestEvent(obj);
    } else {
      const obj4 = {
        event: constants.QUEST_CONTENT_LOADED,
        adContentId: null,
        relatedQuestId: null,
        adCreativeType: null,
        trackGuildAndChannelMetadata: null,
        sourceQuestContent: null,
        properties: obj5,
      };
      ({
        adCreativeId: obj6.adContentId,
        relatedQuestId: obj6.relatedQuestId,
        adCreativeType: obj6.adCreativeType,
        trackGuildAndChannelMetadata: obj6.trackGuildAndChannelMetadata,
        sourceQuestContent: obj6.sourceQuestContent,
      } = adCreativeType);
      ({ triggeredByStatusChange: obj7.triggered_by_status_change, impressionId: obj7.impression_id } = adCreativeType);
      obj5 = {
        triggered_by_status_change: null,
        impression_id: null,
        is_quest_enrollment_blocked: null != QuestStore.questEnrollmentBlockedUntil,
        content_id: adCreativeType.surfaceId,
        content_name: tmp2Result10.getQuestContentName(adCreativeType.surfaceId),
        content_position: null,
        row_index: null,
      };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      ({ questContentPosition: obj7.content_position, questContentRowIndex: obj7.row_index } = adCreativeType);
      tmp2Result10 = AnalyticsTypes;
      trackAdContentEvent(obj4);
    }
  }
  function handleClickInternalAction() {
    return obj(...arguments);
  }
  function handleClickExternalAdvertiserCtaAction() {
    return obj(...arguments);
  }
  function handleViewInternalSurfaceImpressionAction() {
    return obj(...arguments);
  }
  try {
    type = type.type;
    if (captureAdUserActionTypes.AdUserActionType.END_CONTENT_LOAD === type) {
      handleEndContentLoadAction(type);
    } else if (captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL === type) {
      const promise3 = handleClickInternalAction(type);
      promise3.catch(reportCaptureAdUserActionError);
    } else if (captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA === type) {
      const promise2 = handleClickExternalAdvertiserCtaAction(type);
      promise2.catch(reportCaptureAdUserActionError);
    } else if (captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION === type) {
      const promise = handleViewInternalSurfaceImpressionAction(type);
      promise.catch(reportCaptureAdUserActionError);
    } else if (captureAdUserActionTypes.AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION === type) {
      handleViewImpression(type);
    }
  } catch (tmp13) {
    reportCaptureAdUserActionError(tmp13);
  }
};
