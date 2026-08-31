// discord_app/modules/quests/lib/analytics/ContentImpressionTracker.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../QuestStore.tsx";
import MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN from "ContentImpressionTrackerConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../../../_runtime/00002_set.js";

const require = arg1;
let c4 = importAllResult;
({ HEARTBEAT_SECONDS: closure_6, MIN_QUEST_VIEW_TIME_SECONDS: error, MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: closure_8 } = MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN);
let set = new Set();
let QuestContentImpression;
class QuestContentImpression {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.isRunning = false;
    obj.iosAttributionRegistered = false;
    obj.trackViewedPlacement = function trackViewedPlacement(adCreativeId) {
      obj = obj(closure_1_2[8]);
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        result = obj(closure_1_2[8]).isBillableQuestContent(obj.questContent);
        const tmpResult = obj(closure_1_2[8]);
      }
      if (result) {
        const _HermesInternal = HermesInternal;
        closure_1_11.add("" + adCreativeId + "_" + questPlacementFromQuestContent);
      }
    };
    obj.shouldExtendSession = function shouldExtendSession(adCreativeId) {
      obj = obj(closure_1_2[8]);
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const _HermesInternal = HermesInternal;
        result = !closure_1_11.has("" + adCreativeId + "_" + questPlacementFromQuestContent);
      }
      if (result) {
        result = obj(closure_1_2[8]).isBillableQuestContent(obj.questContent);
        const tmpResult = obj(closure_1_2[8]);
      }
      return result;
    };
    obj.maybeRegisterIosAttributionImpression = function maybeRegisterIosAttributionImpression(adContentId, adProvenanceMetadataSealed) {
      if (!obj.iosAttributionRegistered) {
        obj = obj(closure_1_2[10]);
        if (obj.isIosAttributionEligible()) {
          let tmp2Result = tmp2(tmp3[11]);
          const activeIosAttributionFramework = tmp2Result.getActiveIosAttributionFramework();
          if (null != activeIosAttributionFramework) {
            if (null != adProvenanceMetadataSealed) {
              tmp2Result = tmp2(tmp3[10]);
              if (tmp2Result.isCampaignIosAttributionEnabled(tmp.sourceQuestContent, adContentId)) {
                obj = { impressionId: null, metadataSealed: null, framework: null };
                obj[0] = tmp.id;
                obj[1] = adProvenanceMetadataSealed;
                obj[2] = activeIosAttributionFramework;
                const result = tmp2(tmp3[13]).registerViewThroughImpression(obj);
                tmp.iosAttributionRegistered = true;
                const tmp2Result1 = tmp2(tmp3[13]);
              } else {
                const result1 = tmp2(tmp3[12]).trackIosAttributionImpression(tmp2(tmp3[12]).IosAttributionImpressionResult.NOT_SKAN_ENABLED, activeIosAttributionFramework, tmp.id);
                const tmp2Result2 = tmp2(tmp3[12]);
              }
            } else {
              const result2 = tmp2(tmp3[12]).trackIosAttributionImpression(tmp2(tmp3[12]).IosAttributionImpressionResult.NO_METADATA, activeIosAttributionFramework, tmp.id);
              const tmp2Result3 = tmp2(tmp3[12]);
            }
          } else {
            const result3 = tmp2(tmp3[12]).trackIosAttributionImpression(tmp2(tmp3[12]).IosAttributionImpressionResult.NO_FRAMEWORK, activeIosAttributionFramework, tmp.id);
            const tmp2Result4 = tmp2(tmp3[12]);
          }
        }
      }
    };
    closure_0 = obj;
    obj.onMinViewTimeReached = closure_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === obj4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj3 = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              obj3 = undefined;
              obj4 = undefined;
              const obj10 = closure_1_0(7442);
              obj4 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj10.getAdUser(closure_1_0(7441).getQuestContentName(closure_1_0.questContent));
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            obj3 = { trackGuildAndChannelMetadata: null, sourceQuestContent: null };
            obj3[0] = closure_0.trackGuildAndChannelMetadata;
            obj3[1] = closure_0.sourceQuestContent;
            obj4 = { min_view_time_seconds: null, min_viewport_percentage: null, triggered_by_status_change: null, apple_advertising_id: null, android_advertising_id: null };
            obj4[0] = closure_0.minViewTimeSeconds;
            obj4[1] = closure_0.minViewportPercentage;
            obj4[2] = closure_0.triggeredByStatusChange;
            let advertisingId = null;
            if (null != closure_0) {
              obj = closure_1_0(500);
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = closure_1_0.advertisingId;
              }
            }
            obj4[3] = advertisingId;
            let advertisingId1 = null;
            if (null != closure_1_0) {
              obj1 = closure_1_0(500);
              advertisingId1 = null;
              if (obj1.isAndroid()) {
                advertisingId1 = closure_1_0.advertisingId;
              }
            }
            obj4[4] = advertisingId1;
            let merged = Object.assign(closure_1_1(7390)());
            obj2 = closure_1_0(8963);
            let merged1 = Object.assign(obj2.getBrandSafetyContext(closure_1_0.questContent));
            const adContentIds = closure_1_0.entity.adContentIds;
            const item = adContentIds.forEach((adCreativeId) => {
              obj = closure_2_0(obj4[8]);
              obj1 = closure_0;
              let adMetadataSealed = obj.getAdMetadataSealed(closure_0.sourceQuestContent, adCreativeId);
              const shouldExtendSessionResult = closure_0.shouldExtendSession(adCreativeId);
              closure_0.trackViewedPlacement(adCreativeId);
              const adCreativeType = closure_0.entity.adCreativeType;
              const QUEST = closure_2_0(obj4[9]).AdCreativeType.QUEST;
              if (closure_0.migrateQuestContentViewedToCaptureAdUserAction) {
                if (adCreativeType === QUEST) {
                  const quest = closure_2_5.getQuest(tmp30);
                  let isQuestExpiredResult = null == quest;
                  if (!isQuestExpiredResult) {
                    let tmpResult = tmp(tmp2[8]);
                    isQuestExpiredResult = tmpResult.isQuestExpired(quest);
                  }
                  if (!isQuestExpiredResult) {
                    tmpResult = tmp(tmp2[19]);
                    const items = [tmp30];
                    tmpResult.markAdContentSeen(tmp(tmp2[9]).AdCreativeType.QUEST, items);
                  }
                }
                const result = tmp(tmp2[8]).isBillableQuestContent(obj1.questContent);
                const AdUserActionType = tmp(tmp2[20]).AdUserActionType;
                obj = { type: null, surfaceId: null, sourceQuestContent: null, impressionId: null, triggeredByStatusChange: null, minViewTimeSeconds: null, minViewportPercentage: null, isQuestEnrollmentBlocked: null, shouldExtendSession: null, adUser: null, questContentPosition: null, questContentRowIndex: null, trackGuildAndChannelMetadata: null };
                obj[0] = result ? AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION : AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
                ({ questContent: obj17[1], sourceQuestContent: obj17[2], id: obj17[3], triggeredByStatusChange: obj17[4], minViewTimeSeconds: obj17[5], minViewportPercentage: obj17[6], isQuestEnrollmentBlocked: obj17[7] } = obj1);
                obj[8] = shouldExtendSessionResult;
                obj[9] = closure_0;
                ({ questContentPosition: obj17[10], questContentRowIndex: obj17[11], trackGuildAndChannelMetadata: obj17[12] } = obj1);
                if (obj1.entity.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.adCreativeType = obj1.entity.adCreativeType;
                  obj.adCreativeId = obj1.entity.adContentIds[arg1];
                  tmp(tmp2[21]).captureAdUserAction(obj);
                  const tmpResult2 = tmp(tmp2[21]);
                } else if (null != obj1.entity.relatedQuestId) {
                  obj1 = {};
                  const merged1 = Object.assign(obj);
                  obj1.adCreativeType = obj1.entity.adCreativeType;
                  obj1.adCreativeId = obj1.entity.adContentIds[arg1];
                  obj1.relatedQuestId = obj1.entity.relatedQuestId;
                  tmp(tmp2[21]).captureAdUserAction(obj1);
                  const tmpResult3 = tmp(tmp2[21]);
                } else {
                  const obj2 = {};
                  const merged2 = Object.assign(obj);
                  obj2.adCreativeType = obj1.entity.adCreativeType;
                  obj2.adCreativeId = obj1.entity.adContentIds[arg1];
                  tmp(tmp2[21]).captureAdUserAction(obj2);
                  const tmpResult4 = tmp(tmp2[21]);
                }
                const tmpResult1 = tmp(tmp2[8]);
                const questLogger = tmp(tmp2[22]).getQuestLogger();
                const tmpResult5 = tmp(tmp2[22]);
                const _HermesInternal2 = HermesInternal;
                obj3 = { impressionId: null };
                obj3[0] = obj1.id;
                questLogger.info("" + adCreativeId + " ad content viewed for at least " + obj1.minViewTimeSeconds + "s at " + tmp(tmp2[15]).getQuestContentName(obj1.questContent), obj3);
              } else if (adCreativeType === QUEST) {
                const quest1 = closure_2_5.getQuest(tmp6);
                let isQuestExpiredResult1 = null == quest1;
                if (!isQuestExpiredResult1) {
                  isQuestExpiredResult1 = tmp(tmp2[8]).isQuestExpired(quest1);
                  const tmpResult7 = tmp(tmp2[8]);
                }
                if (!isQuestExpiredResult1) {
                  const items1 = [tmp6];
                  tmp(tmp2[19]).markAdContentSeen(tmp(tmp2[9]).AdCreativeType.QUEST, items1);
                  const tmpResult8 = tmp(tmp2[19]);
                }
                const questLogger1 = tmp(tmp2[22]).getQuestLogger();
                let questName;
                if (quest1 != null) {
                  questName = quest1.config.messages.questName;
                }
                if (questName == null) {
                  questName = tmp6;
                }
                const tmpResult9 = tmp(tmp2[22]);
                const _HermesInternal = HermesInternal;
                obj4 = { impressionId: null };
                obj4[0] = obj1.id;
                questLogger1.info("" + questName + " Quest viewed for at least " + obj1.minViewTimeSeconds + "s at " + tmp(tmp2[15]).getQuestContentName(obj1.questContent), obj4);
                const tmpResult10 = tmp(tmp2[15]);
                const obj5 = {};
                const merged3 = Object.assign(obj3);
                obj5.shouldExtendSession = shouldExtendSessionResult;
                obj5.questId = obj1.entity.adContentIds[arg1];
                obj5.event = closure_2_9.QUEST_CONTENT_VIEWED;
                const obj6 = {};
                const merged4 = Object.assign(obj4);
                const merged5 = Object.assign(obj1.commonProperties());
                if (adMetadataSealed == null) {
                  adMetadataSealed = null;
                }
                obj6.metadata_sealed = adMetadataSealed;
                const tmpResult11 = tmp(tmp2[23]);
                const currentQuestHomeSearchSession = tmp(tmp2[24]).getCurrentQuestHomeSearchSession();
                let uuid;
                if (currentQuestHomeSearchSession != null) {
                  uuid = currentQuestHomeSearchSession.uuid;
                }
                if (uuid == null) {
                  uuid = null;
                }
                obj6.search_session_id = uuid;
                const tmpResult12 = tmp(tmp2[24]);
                let id;
                if (quest1 != null) {
                  id = quest1.id;
                }
                let adTrafficMetadataSealed = tmp(tmp2[8]).getAdTrafficMetadataSealed(obj1.sourceQuestContent, id);
                if (adTrafficMetadataSealed == null) {
                  adTrafficMetadataSealed = null;
                }
                obj6.traffic_metadata_sealed = adTrafficMetadataSealed;
                obj5.properties = obj6;
                tmpResult11.trackQuestEvent(obj5);
                const tmpResult13 = tmp(tmp2[8]);
              } else {
                const questLogger2 = tmp(tmp2[22]).getQuestLogger();
                const tmpResult14 = tmp(tmp2[22]);
                const _HermesInternal3 = HermesInternal;
                const obj7 = { impressionId: null };
                obj7[0] = obj1.id;
                questLogger2.info("" + obj1.entity.adContentIds[arg1] + " ad content viewed for at least " + obj1.minViewTimeSeconds + "s at " + tmp(tmp2[15]).getQuestContentName(obj1.questContent), obj7);
                const tmpResult15 = tmp(tmp2[15]);
                const obj8 = {};
                const merged6 = Object.assign(obj3);
                obj8.shouldExtendSession = shouldExtendSessionResult;
                obj8.adContentId = obj1.entity.adContentIds[arg1];
                obj8.relatedQuestId = obj1.entity.relatedQuestId;
                obj8.adCreativeType = obj1.entity.adCreativeType;
                obj8.event = closure_2_9.QUEST_CONTENT_VIEWED;
                const obj9 = {};
                const merged7 = Object.assign(obj4);
                const merged8 = Object.assign(obj1.commonProperties());
                obj8.properties = obj9;
                tmp(tmp2[23]).trackAdContentEvent(obj8);
                const tmpResult16 = tmp(tmp2[23]);
              }
            });
            if (closure_1_0.onImpressionCallback != null) {
              onImpressionCallback();
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp34) {
          c3 = tmp;
          throw tmp34;
        }
      }
    });
    obj.beat = function beat(arg0) {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let rounded;
      obj = undefined;
      obj = undefined;
      if (null != flag.lastBeatTime) {
        const _Math = Math;
        const _Date = Date;
        rounded = Math.round(Date.now() - tmp.lastBeatTime);
        obj = { trackGuildAndChannelMetadata: null, sourceQuestContent: null };
        ({ trackGuildAndChannelMetadata: obj[0], sourceQuestContent: obj[1] } = tmp);
        obj = { is_termination_beat: null, viewed_time_ms: null, triggered_by_status_change: null };
        obj[0] = flag;
        obj[1] = rounded;
        obj[2] = tmp.triggeredByStatusChange;
        const adContentIds = tmp.entity.adContentIds;
        const item = adContentIds.forEach((arg0, arg1) => {
          obj = flag;
          if (flag.entity.adCreativeType === obj(closure_2_2[9]).AdCreativeType.QUEST) {
            const quest = closure_2_5.getQuest(tmp18);
            let tmpResult = tmp(tmp2[22]);
            const questLogger = tmpResult.getQuestLogger();
            let questName;
            if (quest != null) {
              questName = quest.config.messages.questName;
            }
            if (questName == null) {
              questName = tmp18;
            }
            let str7 = "";
            if (flag) {
              str7 = "terminal ";
            }
            const _HermesInternal2 = HermesInternal;
            obj = { impressionId: null };
            obj[0] = obj.id;
            questLogger.info("" + questName + " Quest impression " + str7 + "heartbeat: " + rounded + "ms since last heartbeat", obj);
            tmpResult = tmp(tmp2[23]);
            obj = {};
            const merged = Object.assign(obj);
            obj.questId = obj.entity.adContentIds[arg1];
            obj.event = closure_2_9.QUEST_CONTENT_VIEW_TIME;
            obj1 = {};
            const merged1 = Object.assign(obj);
            const merged2 = Object.assign(obj.commonProperties());
            obj.properties = obj1;
            tmpResult.trackQuestEvent(obj);
          } else {
            const questLogger1 = tmp(tmp2[22]).getQuestLogger();
            let str = "";
            if (flag) {
              str = "terminal ";
            }
            const _HermesInternal = HermesInternal;
            const obj2 = { impressionId: null };
            obj2[0] = obj.id;
            questLogger1.info("" + obj.entity.adContentIds[arg1] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj2);
            const tmpResult1 = tmp(tmp2[22]);
            const obj3 = {};
            const merged3 = Object.assign(obj);
            obj3.adContentId = obj.entity.adContentIds[arg1];
            obj3.relatedQuestId = obj.entity.relatedQuestId;
            obj3.adCreativeType = obj.entity.adCreativeType;
            obj3.event = closure_2_9.QUEST_CONTENT_VIEW_TIME;
            const obj4 = {};
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj.commonProperties());
            obj3.properties = obj4;
            tmp(tmp2[23]).trackAdContentEvent(obj3);
            const tmpResult2 = tmp(tmp2[23]);
          }
        });
      }
      flag.lastBeatTime = Date.now();
    };
    obj.commonProperties = function commonProperties() {
      obj = { impression_id: obj.id, is_quest_enrollment_blocked: obj.isQuestEnrollmentBlocked };
      const merged = Object.assign(obj(closure_1_2[15]).getContentProperties(obj.questContent, obj.questContentPosition, obj.questContentRowIndex));
      return obj;
    };
    obj.clone = function clone(triggeredByStatusChange) {
      obj.stop();
      obj = { questContent: obj.questContent, questContentRowIndex: obj.questContentRowIndex, questContentPosition: obj.questContentPosition, trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, triggeredByStatusChange: triggeredByStatusChange.triggeredByStatusChange, isQuestEnrollmentBlocked: obj.isQuestEnrollmentBlocked, onImpression: obj.onImpressionCallback, sourceQuestContent: obj.sourceQuestContent };
      const merged = Object.assign(obj.entity);
      return new closure_1_14(obj);
    };
    obj.start = function start() {
      obj.stop(false);
      obj.lastBeatTime = Date.now();
      obj.heartbeatTimeoutId = window.setInterval(() => closure_0.beat(), 1000 * closure_1_6);
      obj.minViewTimeReachedTimeoutId = window.setTimeout(obj.onMinViewTimeReached, 1000 * obj.minViewTimeSeconds);
      obj = { trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent };
      closure_1 = { triggered_by_status_change: obj.triggeredByStatusChange };
      const adContentIds = obj.entity.adContentIds;
      const item = adContentIds.forEach((adCreativeId) => {
        let tmpResult = arg1;
        questContentPosition = closure_2_2;
        obj1 = obj(closure_2_2[8]);
        let questContentRowIndex = closure_0;
        let adMetadataSealed = obj1.getAdMetadataSealed(closure_0.sourceQuestContent, adCreativeId);
        let obj2 = obj(closure_2_2[8]);
        const result = closure_0.maybeRegisterIosAttributionImpression(adCreativeId, obj2.getAdProvenanceMetadataSealed(closure_0.sourceQuestContent, adCreativeId));
        const adCreativeType = closure_0.entity.adCreativeType;
        const QUEST = obj(closure_2_2[9]).AdCreativeType.QUEST;
        if (closure_0.migrateQuestContentLoadedToCaptureAdUserAction) {
          if (adCreativeType === QUEST) {
            obj = { adCreativeType: null, adCreativeId: null };
            obj[0] = questContentRowIndex.entity.adCreativeType;
            obj[1] = questContentRowIndex.entity.adContentIds[tmpResult];
          } else {
            obj = { adCreativeType: null, adCreativeId: null, relatedQuestId: null };
            obj[0] = questContentRowIndex.entity.adCreativeType;
            obj[1] = questContentRowIndex.entity.adContentIds[tmpResult];
            obj[2] = questContentRowIndex.entity.relatedQuestId;
          }
          tmpResult = tmp(questContentPosition[21]);
          obj1 = { type: null, surfaceId: null, sourceQuestContent: null, impressionId: null, triggeredByStatusChange: null, trackGuildAndChannelMetadata: null, questContentPosition: null, questContentRowIndex: null };
          obj1[0] = tmp(questContentPosition[20]).AdUserActionType.END_CONTENT_LOAD;
          ({ questContent: obj14[1], sourceQuestContent: obj14[2], id: obj14[3], triggeredByStatusChange: obj14[4], trackGuildAndChannelMetadata: obj14[5], questContentPosition } = questContentRowIndex);
          obj1[6] = questContentPosition;
          questContentRowIndex = questContentRowIndex.questContentRowIndex;
          obj1[7] = questContentRowIndex;
          const merged = Object.assign(obj);
          tmpResult.captureAdUserAction(obj1);
        } else if (adCreativeType === QUEST) {
          const quest = closure_2_5.getQuest(tmp4);
          tmpResult = tmp(questContentPosition[22]);
          const questLogger = tmpResult.getQuestLogger();
          let questName;
          if (quest != null) {
            questName = quest.config.messages.questName;
          }
          if (questName == null) {
            questName = tmp4;
          }
          const _HermesInternal = HermesInternal;
          obj2 = { impressionId: null };
          obj2[0] = questContentRowIndex.id;
          questLogger.info("" + questName + " Quest became visible at " + tmp(questContentPosition[15]).getQuestContentName(questContentRowIndex.questContent), obj2);
          const tmpResult1 = tmp(questContentPosition[15]);
          const obj3 = {};
          const merged1 = Object.assign(closure_0);
          obj3.questId = questContentRowIndex.entity.adContentIds[tmpResult];
          obj3.event = closure_2_9.QUEST_CONTENT_LOADED;
          const obj4 = {};
          const merged2 = Object.assign(closure_1);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj4.metadata_sealed = adMetadataSealed;
          const merged3 = Object.assign(questContentRowIndex.commonProperties());
          const tmpResult2 = tmp(questContentPosition[23]);
          let id;
          if (quest != null) {
            id = quest.id;
          }
          let adTrafficMetadataSealed = tmp(questContentPosition[8]).getAdTrafficMetadataSealed(questContentRowIndex.sourceQuestContent, id);
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          obj4.traffic_metadata_sealed = adTrafficMetadataSealed;
          obj3.properties = obj4;
          tmpResult2.trackQuestEvent(obj3);
          const tmpResult3 = tmp(questContentPosition[8]);
        } else {
          const questLogger1 = tmp(questContentPosition[22]).getQuestLogger();
          const tmpResult4 = tmp(questContentPosition[22]);
          const _HermesInternal2 = HermesInternal;
          const obj5 = { impressionId: null };
          obj5[0] = questContentRowIndex.id;
          questLogger1.info("" + questContentRowIndex.entity.adContentIds[tmpResult] + " ad content became visible at " + tmp(questContentPosition[15]).getQuestContentName(questContentRowIndex.questContent), obj5);
          const tmpResult5 = tmp(questContentPosition[15]);
          const obj6 = {};
          const merged4 = Object.assign(closure_0);
          obj6.adContentId = questContentRowIndex.entity.adContentIds[tmpResult];
          obj6.relatedQuestId = questContentRowIndex.entity.relatedQuestId;
          obj6.adCreativeType = questContentRowIndex.entity.adCreativeType;
          obj6.event = closure_2_9.QUEST_CONTENT_LOADED;
          const obj7 = {};
          const merged5 = Object.assign(closure_1);
          const merged6 = Object.assign(questContentRowIndex.commonProperties());
          obj6.properties = obj7;
          tmp(questContentPosition[23]).trackAdContentEvent(obj6);
          const tmpResult6 = tmp(questContentPosition[23]);
        }
      });
      obj = closure_1_1(closure_1_2[25]);
      obj = { name: obj(closure_1_2[26]).MetricEvents.QUEST_CONTENT_IMPRESSION, tags: null };
      const items = ["quest_content:" + obj(closure_1_2[15]).getQuestContentName(obj.questContent)];
      obj[1] = items;
      obj.increment(obj);
      obj.isRunning = true;
    };
    obj.stop = function stop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        obj.beat(true);
      }
      obj.lastBeatTime = undefined;
      clearInterval(obj.heartbeatTimeoutId);
      clearTimeout(obj.minViewTimeReachedTimeoutId);
      obj.isRunning = false;
      obj = obj(closure_1_2[13]);
      obj.endImpression(obj.id);
    };
    ({ adContentIds, adCreativeType, questContent, minViewTimeSeconds, relatedQuestId, triggeredByStatusChange, trackGuildAndChannelMetadata, questContentPosition, questContentRowIndex } = global);
    if (undefined === minViewTimeSeconds) {
      minViewTimeSeconds = closure_7;
    }
    ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = global);
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = require("v1");
    obj.id = obj.v4();
    obj.questContent = questContent;
    obj.questContentPosition = questContentPosition;
    obj.minViewTimeSeconds = minViewTimeSeconds;
    obj.minViewportPercentage = closure_8;
    obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj.triggeredByStatusChange = triggeredByStatusChange;
    obj.questContentRowIndex = questContentRowIndex;
    obj.isQuestEnrollmentBlocked = isQuestEnrollmentBlocked;
    obj.onImpressionCallback = onImpression;
    obj.sourceQuestContent = sourceQuestContent;
    obj2 = require("apexExperiment");
    obj.migrateQuestContentLoadedToCaptureAdUserAction = obj2.shouldMigrateToAdAnalyticsInterface(require("apexExperiment").AdAnalyticsInterfaceExperimentStep.STEP_1_LOADED, "quest_content_impression");
    obj3 = require("apexExperiment");
    obj4 = require("getQuestDeliveryDataForPlacement");
    result = obj4.isBillableQuestContent(questContent);
    AdAnalyticsInterfaceExperimentStep = require("apexExperiment").AdAnalyticsInterfaceExperimentStep;
    obj.migrateQuestContentViewedToCaptureAdUserAction = obj3.shouldMigrateToAdAnalyticsInterface(result ? AdAnalyticsInterfaceExperimentStep.STEP_5_VIEWED_IMPRESSION : AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_content_impression");
    if (adCreativeType === require("AdCreativeType").AdCreativeType.QUEST) {
      obj1 = { adContentIds: null, adCreativeType: null };
      obj1[0] = adContentIds;
      obj1[1] = adCreativeType;
      obj.entity = obj1;
    } else {
      obj2 = { adContentIds: null, adCreativeType: null, relatedQuestId: null };
      obj2[0] = adContentIds;
      obj2[1] = adCreativeType;
      obj2[2] = relatedQuestId;
      obj.entity = obj2;
    }
    return obj;
  }
}
const prototype = QuestContentImpression.prototype;
prototype["getId"] = function getId() {
  return this.id;
};
prototype["getQuestContentPosition"] = function getQuestContentPosition() {
  return this.questContentPosition;
};
const context = importAllResult.createContext(undefined);
let result = set.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export { QuestContentImpression };
export const QuestImpressionContext = context;
export const QuestContentImpressionTracker = function QuestContentImpressionTracker(visible) {
  const _require = visible;
  visible = visible.visible;
  const visibleChanged = visible.visibleChanged;
  const focused = visible.focused;
  const focusedChanged = visible.focusedChanged;
  const sourceQuestContent = visible.sourceQuestContent;
  let obj = _require(visibleChanged[27]);
  const questStatusChanged = obj.useQuestStatusChanged(visible);
  let relatedQuestId;
  if (visible.adCreativeType !== _require(visibleChanged[9]).AdCreativeType.QUEST) {
    relatedQuestId = visible.relatedQuestId;
  }
  const ref = focusedChanged.useRef(null);
  const items = [sourceQuestContent];
  const stateFromStores = _require(visibleChanged[28]).useStateFromStores(items, () => null != sourceQuestContent.questEnrollmentBlockedUntil, []);
  visible(visibleChanged[29])(() => () => {
    if (null != ref.current) {
      const current = ref.current;
      current.stop();
    }
  });
  const items1 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , , ];
  ({ adContentIds: arr2[4], onImpression: arr2[5], questContent: arr2[6], questContentPosition: arr2[7], questContentRowIndex: arr2[8], trackGuildAndChannelMetadata: arr2[9] } = visible);
  items1[10] = questStatusChanged;
  items1[11] = visible.minViewTimeSeconds;
  items1[12] = stateFromStores;
  items1[13] = sourceQuestContent;
  items1[14] = visible.adCreativeType;
  items1[15] = relatedQuestId;
  const effect = focusedChanged.useEffect(() => {
    let tmp = focused;
    if (focused) {
      tmp = visible;
    }
    let tmp2 = visibleChanged;
    let tmp3 = visibleChanged;
    if (!visibleChanged) {
      tmp3 = focusedChanged;
    }
    if (!tmp3) {
      tmp3 = questStatusChanged;
    }
    if (tmp3) {
      tmp3 = tmp;
    }
    let tmp4 = tmp3;
    if (!tmp3) {
      if (!tmp2) {
        tmp2 = focusedChanged;
      }
      if (tmp2) {
        tmp2 = !tmp;
      }
      tmp4 = tmp2;
    }
    if (!tmp4) {
      tmp4 = questStatusChanged;
    }
    if (tmp4) {
      tmp4 = null != ref.current;
    }
    if (tmp4) {
      const current = ref.current;
      current.stop();
    }
    if (tmp3) {
      let adContentIds = { isQuestEnrollmentBlocked: null, minViewTimeSeconds: null, onImpression: null, questContent: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null, trackGuildAndChannelMetadata: null, triggeredByStatusChange: null };
      adContentIds[0] = stateFromStores;
      let tmp10 = visible;
      ({ minViewTimeSeconds: obj[1], onImpression: obj[2], questContent: obj[3], questContentPosition: obj[4], questContentRowIndex: obj[5] } = visible);
      adContentIds[6] = sourceQuestContent;
      adContentIds[7] = visible.trackGuildAndChannelMetadata;
      adContentIds[8] = questStatusChanged;
      if (visible.adCreativeType === visible(visibleChanged[9]).AdCreativeType.QUEST) {
        let obj = {};
        const merged = Object.assign(adContentIds);
        adContentIds = tmp10.adContentIds;
        obj.adContentIds = adContentIds;
        obj.adCreativeType = tmp10.adCreativeType;
        tmp10 = new.target;
        ref.current = new closure_1_12(obj);
        let tmp15 = ref;
      } else {
        tmp15 = ref;
        obj = {};
        const merged1 = Object.assign(adContentIds);
        ({ adContentIds: obj2.adContentIds, adCreativeType: obj2.adCreativeType } = tmp10);
        obj.relatedQuestId = relatedQuestId;
        ref.current = new closure_1_12(obj);
      }
      const current2 = tmp15.current;
      current2.start();
    }
  }, items1);
  obj = { value: ref, children: visible.children(visible.reference, ref) };
  return <context.Provider value={ref}>{arg0.children(arg0.reference, ref)}</context.Provider>;
};