// discord_app/modules/ads/analytics/captureAdUserAction.tsx
import set from "../../../utils/PlatformUtils.tsx";
import getDeviceMetadataDefault from "../../device/getDeviceMetadata.native.tsx";
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import getQuestLogger from "../../quests/lib/getQuestLogger.tsx";
import getQuestContentName from "../../quests/lib/analytics/AnalyticsTypes.tsx";
import getBrandSafetyContext from "../../quests/lib/analytics/BrandSafetyContext.tsx";
import AdUserActionType from "captureAdUserActionTypes.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../quests/QuestStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = arg1;
function emitClickEventWithCreative() {
  const self = this;
  const apply = _emitClickEventWithCreative.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _emitClickEventWithCreative() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let adCreativeId = tmp5;
              let constants = tmp2;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              constants = undefined;
              adCreativeId = undefined;
              ({ adCreativeType: c1, surfaceId } = lib);
              dependencyMap = surfaceId;
              ({ sourceQuestContent: c3, trackGuildAndChannelMetadata: c4 } = lib);
              ({ questContentCTA, impressionId, clickId, questContentPosition, questContentRowIndex } = lib);
              obj1 = { questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, clickId: null };
              obj1[0] = surfaceId;
              obj1[1] = questContentPosition;
              obj1[2] = questContentRowIndex;
              obj1[3] = questContentCTA;
              obj1[4] = impressionId;
              obj1[5] = clickId;
              c7 = 1;
              c8 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = lib(closure_1_2[4]).getCommonClickEventProperties(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            constants = arg1;
            if (c1 !== lib(7379).AdCreativeType.QUEST) {
              obj3 = lib(7396);
              const obj4 = { adContentId: null, relatedQuestId: null, adCreativeType: null, event: null, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
              obj4[0] = lib.adCreativeId;
              obj4[1] = lib.relatedQuestId;
              obj4[2] = c1;
              obj4[3] = constants.QUEST_CONTENT_CLICKED;
              const obj5 = {};
              const merged = Object.assign(constants);
              let obj6 = lib(7412);
              const currentQuestHomeSearchSession = obj6.getCurrentQuestHomeSearchSession();
              let uuid;
              if (currentQuestHomeSearchSession != null) {
                uuid = currentQuestHomeSearchSession.uuid;
              }
              c1 = uuid;
              if (uuid == null) {
                c1 = null;
              }
              obj5.search_session_id = c1;
              obj4[4] = obj5;
              obj4[5] = c4;
              let obj7 = lib(7376);
              obj4[6] = obj7.isBillableQuestContent(dependencyMap);
              obj4[7] = c3;
              obj3.trackAdContentEvent(obj4);
            } else {
              adCreativeId = lib.adCreativeId;
              obj6 = { questId: null, event: null, properties: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null };
              obj6[0] = adCreativeId;
              obj6[1] = constants.QUEST_CONTENT_CLICKED;
              obj7 = {};
              const merged1 = Object.assign(constants);
              const obj13 = lib(7396);
              const adMetadataSealed = lib(7376).getAdMetadataSealed(c3, adCreativeId);
              dependencyMap = adMetadataSealed;
              if (adMetadataSealed == null) {
                dependencyMap = null;
              }
              obj7.metadata_sealed = dependencyMap;
              obj = lib(7376);
              const adTrafficMetadataSealed = obj.getAdTrafficMetadataSealed(c3, adCreativeId);
              c3 = adTrafficMetadataSealed;
              if (adTrafficMetadataSealed == null) {
                c3 = null;
              }
              obj7.traffic_metadata_sealed = c3;
              obj1 = lib(7412);
              const currentQuestHomeSearchSession1 = obj1.getCurrentQuestHomeSearchSession();
              let uuid1;
              if (currentQuestHomeSearchSession1 != null) {
                uuid1 = currentQuestHomeSearchSession1.uuid;
              }
              c4 = uuid1;
              if (uuid1 == null) {
                c4 = null;
              }
              obj7.search_session_id = c4;
              obj6[2] = obj7;
              obj6[3] = c4;
              obj2 = lib(7376);
              obj6[4] = obj2.isBillableQuestContent(dependencyMap);
              obj6[5] = c3;
              obj13.trackQuestEvent(obj6);
              const obj16 = lib(7376);
            }
            c8 = 3;
          }
        } catch (tmp54) {
          c8 = tmp;
          throw tmp54;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleClickInternalAction() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (null != lib.adCreativeType) {
              c4 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_6(tmp15);
              return obj1;
            } else {
              const clickId = tmp15.clickId;
              ({ surfaceId, questContentCTA, questContentPosition, questContentRowIndex } = tmp15);
              const contentProperties = lib(closure_1_2[6]).getContentProperties(surfaceId, questContentPosition, questContentRowIndex);
              const obj6 = lib(closure_1_2[6]);
              const tmp17 = lib;
              const tmp18 = closure_1_2;
              const obj2 = { cta_name: null, click_id: null, is_targeted: null, content_id: null, content_name: null, content_position: null, row_index: null, ad_content_id: null, quest_id: null };
              obj2[0] = questContentCTA;
              closure_1 = clickId;
              if (clickId == null) {
                closure_1 = tmp17(tmp18[9]).v4();
                const tmp17Result = tmp17(tmp18[9]);
              }
              obj2[1] = closure_1;
              const isTargeted = tmp15.isTargeted;
              c2 = isTargeted;
              if (isTargeted == null) {
                c2 = false;
              }
              obj2[2] = c2;
              ({ content_id: obj8[3], content_name: obj8[4], content_position: obj8[5], row_index: obj8[6] } = contentProperties);
              ({ adContentId: obj8[7], relatedQuestId: obj8[8] } = tmp15);
              closure_1_1(closure_1_2[8]).track(closure_1_5.QUEST_CONTENT_CLICKED, obj2);
              const obj7 = closure_1_1(closure_1_2[8]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleClickExternalAdvertiserCtaAction() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_6(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleViewImpression(minViewTimeSeconds) {
  ({ surfaceId, sourceQuestContent, shouldExtendSession, adUser, trackGuildAndChannelMetadata } = minViewTimeSeconds);
  let obj = { min_view_time_seconds: minViewTimeSeconds.minViewTimeSeconds, min_viewport_percentage: minViewTimeSeconds.minViewportPercentage, triggered_by_status_change: minViewTimeSeconds.triggeredByStatusChange, apple_advertising_id: null, android_advertising_id: null };
  let advertisingId = null;
  ({ impressionId, isQuestEnrollmentBlocked, questContentPosition, questContentRowIndex } = minViewTimeSeconds);
  if (null != adUser) {
    obj1 = set;
    advertisingId = null;
    if (obj1.isIOS()) {
      advertisingId = adUser.advertisingId;
    }
  }
  obj[3] = advertisingId;
  let advertisingId1 = null;
  if (null != adUser) {
    let obj2 = set;
    advertisingId1 = null;
    if (obj2.isAndroid()) {
      advertisingId1 = adUser.advertisingId;
    }
  }
  obj[4] = advertisingId1;
  const merged = Object.assign(getDeviceMetadataDefault());
  const merged1 = Object.assign(getBrandSafetyContext.getBrandSafetyContext(surfaceId));
  obj.impression_id = impressionId;
  obj.is_quest_enrollment_blocked = isQuestEnrollmentBlocked;
  const obj4 = getBrandSafetyContext;
  const merged2 = Object.assign(getQuestContentName.getContentProperties(surfaceId, questContentPosition, questContentRowIndex));
  if (minViewTimeSeconds.adCreativeType !== AdCreativeType.AdCreativeType.QUEST) {
    let tmp9Result = tmp9(7396);
    obj = { event: null, adContentId: null, adCreativeType: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null, properties: null };
    obj[0] = AnalyticEvents.QUEST_CONTENT_VIEWED;
    ({ adCreativeId: obj9[1], adCreativeType: obj9[2] } = minViewTimeSeconds);
    obj[3] = trackGuildAndChannelMetadata;
    obj[4] = shouldExtendSession;
    obj[5] = sourceQuestContent;
    obj = {};
    const merged3 = Object.assign(obj);
    obj[6] = obj;
    tmp9Result.trackAdContentEvent(obj);
  } else {
    const adCreativeId = minViewTimeSeconds.adCreativeId;
    tmp9Result = tmp9(7396);
    obj1 = { event: null, questId: null, trackGuildAndChannelMetadata: null, shouldExtendSession: null, sourceQuestContent: null, properties: null };
    obj1[0] = AnalyticEvents.QUEST_CONTENT_VIEWED;
    obj1[1] = adCreativeId;
    obj1[2] = trackGuildAndChannelMetadata;
    obj1[3] = shouldExtendSession;
    obj1[4] = sourceQuestContent;
    obj2 = {};
    const merged4 = Object.assign(obj);
    let adMetadataSealed = tmp9(7376).getAdMetadataSealed(sourceQuestContent, adCreativeId);
    if (adMetadataSealed == null) {
      adMetadataSealed = null;
    }
    obj2.metadata_sealed = adMetadataSealed;
    const tmp9Result1 = tmp9(7376);
    const currentQuestHomeSearchSession = tmp9(7412).getCurrentQuestHomeSearchSession();
    let uuid;
    if (currentQuestHomeSearchSession != null) {
      uuid = currentQuestHomeSearchSession.uuid;
    }
    if (uuid == null) {
      uuid = null;
    }
    obj2.search_session_id = uuid;
    const tmp9Result2 = tmp9(7412);
    let adTrafficMetadataSealed = tmp9(7376).getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId);
    if (adTrafficMetadataSealed == null) {
      adTrafficMetadataSealed = null;
    }
    obj2.traffic_metadata_sealed = adTrafficMetadataSealed;
    obj1[5] = obj2;
    tmp9Result.trackQuestEvent(obj1);
    const tmp9Result3 = tmp9(7376);
  }
}
function _handleViewInternalSurfaceImpressionAction() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp5;
              dependencyMap = tmp2;
              let lib2;
              if (null != lib.adCreativeType) {
                closure_1_10(tmp48);
                constants = 3;
              } else {
                let obj3 = lib(closure_1_2[13]);
                c4 = 1;
                constants = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj3.getAdUser(lib(closure_1_2[6]).getQuestContentName(tmp48.surfaceId));
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib2 = arg1;
            const obj2 = {};
            const obj9 = lib2(698);
            const merged = Object.assign(lib(7406).getContentProperties(lib.surfaceId));
            let advertisingId = null;
            if (null != lib2) {
              obj = lib(500);
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = lib2.advertisingId;
              }
            }
            obj2.apple_advertising_id = advertisingId;
            let advertisingId1 = null;
            if (null != lib2) {
              obj1 = lib(500);
              advertisingId1 = null;
              if (obj1.isAndroid()) {
                advertisingId1 = lib2.advertisingId;
              }
            }
            obj2.android_advertising_id = advertisingId1;
            const isTargeted = lib.isTargeted;
            lib2 = isTargeted;
            if (isTargeted == null) {
              lib2 = false;
            }
            obj2.is_targeted = lib2;
            obj9.track(constants.QUEST_CONTENT_VIEWED, obj2);
            const obj11 = lib(7406);
          }
          constants = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } catch (tmp30) {
          constants = tmp;
          throw tmp30;
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function reportCaptureAdUserActionError(arg0) {
  const questLogger = getQuestLogger.getQuestLogger();
  questLogger.error("captureAdUserAction failed to report an ad user action", arg0);
}
const result = require("set").fileFinishedImporting("modules/ads/analytics/captureAdUserAction.tsx");

export const captureAdUserAction = function captureAdUserAction(type) {
  try {
    type = type.type;
    if (AdUserActionType.AdUserActionType.END_CONTENT_LOAD === type) {
      (function handleEndContentLoadAction(adCreativeType) {
        if (adCreativeType.adCreativeType === callback(table[3]).AdCreativeType.QUEST) {
          const adCreativeId = adCreativeType.adCreativeId;
          let tmp2Result = tmp2(tmp3[4]);
          let obj = { event: null, questId: null, trackGuildAndChannelMetadata: null, sourceQuestContent: null, properties: null };
          obj[0] = constants.QUEST_CONTENT_LOADED;
          obj[1] = adCreativeId;
          ({ trackGuildAndChannelMetadata: obj2[2], sourceQuestContent: obj2[3] } = adCreativeType);
          obj = { triggered_by_status_change: null, metadata_sealed: null, traffic_metadata_sealed: null, impression_id: null, is_quest_enrollment_blocked: null, content_id: null, content_name: null, content_position: null, row_index: null };
          obj[0] = adCreativeType.triggeredByStatusChange;
          tmp2Result = tmp2(tmp3[5]);
          let adMetadataSealed = tmp2Result.getAdMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj[1] = adMetadataSealed;
          let adTrafficMetadataSealed = tmp2(tmp3[5]).getAdTrafficMetadataSealed(adCreativeType.sourceQuestContent, adCreativeId);
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          obj[2] = adTrafficMetadataSealed;
          obj[3] = adCreativeType.impressionId;
          obj[4] = tmp;
          obj[5] = adCreativeType.surfaceId;
          const tmp2Result1 = tmp2(tmp3[5]);
          obj[6] = tmp2(tmp3[6]).getQuestContentName(adCreativeType.surfaceId);
          ({ questContentPosition: obj3[7], questContentRowIndex: obj3[8] } = adCreativeType);
          obj[4] = obj;
          tmp2Result.trackQuestEvent(obj);
          const tmp2Result2 = tmp2(tmp3[6]);
        } else {
          obj1 = { event: null, adContentId: null, adCreativeType: null, trackGuildAndChannelMetadata: null, sourceQuestContent: null, properties: null };
          obj1[0] = constants.QUEST_CONTENT_LOADED;
          ({ adCreativeId: obj8[1], adCreativeType: obj8[2], trackGuildAndChannelMetadata: obj8[3], sourceQuestContent: obj8[4] } = adCreativeType);
          const obj2 = { triggered_by_status_change: null, impression_id: null, is_quest_enrollment_blocked: null, content_id: null, content_name: null, content_position: null, row_index: null };
          ({ triggeredByStatusChange: obj9[0], impressionId: obj9[1] } = adCreativeType);
          obj2[2] = tmp;
          obj2[3] = adCreativeType.surfaceId;
          const tmp2Result3 = tmp2(tmp3[4]);
          obj2[4] = tmp2(tmp3[6]).getQuestContentName(adCreativeType.surfaceId);
          ({ questContentPosition: obj9[5], questContentRowIndex: obj9[6] } = adCreativeType);
          obj1[5] = obj2;
          tmp2Result3.trackAdContentEvent(obj1);
          const tmp2Result4 = tmp2(tmp3[6]);
        }
      })(type);
    } else if (tmp2(8925).AdUserActionType.CLICK_INTERNAL === type) {
      (function handleClickInternalAction(type) {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(type).catch(reportCaptureAdUserActionError);
      const promise3 = (function handleClickInternalAction(type) {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(type);
    } else if (tmp2(8925).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA === type) {
      (function handleClickExternalAdvertiserCtaAction(type) {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(type).catch(reportCaptureAdUserActionError);
      const promise2 = (function handleClickExternalAdvertiserCtaAction(type) {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(type);
    } else if (tmp2(8925).AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION === type) {
      (function handleViewInternalSurfaceImpressionAction(type) {
        const self = this;
        const apply = closure_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(type).catch(reportCaptureAdUserActionError);
      const promise = (function handleViewInternalSurfaceImpressionAction(type) {
        const self = this;
        const apply = closure_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(type);
    } else if (tmp2(8925).AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION === type) {
      handleViewImpression(type);
    }
  } catch (tmp13) {
    reportCaptureAdUserActionError(tmp13);
  }
};