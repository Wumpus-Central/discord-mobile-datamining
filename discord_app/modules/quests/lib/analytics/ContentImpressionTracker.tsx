// discord_app/modules/quests/lib/analytics/ContentImpressionTracker.tsx
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import QuestDataUtils from "../../utils/QuestDataUtils.tsx";
import getQuestLogger from "../getQuestLogger.tsx";
import AnalyticsActions from "AnalyticsActions.tsx";
import AnalyticsTypes from "AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import IosAttributionEligibility from "../../../ads/ios_attribution/IosAttributionEligibility.tsx";
import IosAttributionNativeModule from "../../../ads/ios_attribution/IosAttributionNativeModule.tsx";
import IosAttributionMetrics from "../../../ads/ios_attribution/IosAttributionMetrics.tsx";
import IosAttributionImpressionRegistry from "../../../ads/ios_attribution/IosAttributionImpressionRegistry.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

require = fn;
const ContentImpressionTrackerConstants = fn(11196);
({
  HEARTBEAT_SECONDS: metroRequire,
  MIN_QUEST_VIEW_TIME_SECONDS: closure_7,
  MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: closure_8,
} = ContentImpressionTrackerConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const set = new Set();
let QuestContentImpression;
class QuestContentImpression {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.isRunning = false;
    obj.iosAttributionRegistered = false;
    obj.trackViewedPlacement = function trackViewedPlacement(item) {
      const obj = QuestDataUtils;
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        result = QuestDataUtils.isBillableQuestContent(tmp3.questContent, tmp3.entity.adCreativeType);
        const tmpResult = QuestDataUtils;
      }
      if (result) {
        const _HermesInternal = HermesInternal;
        set.add("" + item + "_" + questPlacementFromQuestContent);
      }
    };
    obj.shouldExtendSession = function shouldExtendSession(item) {
      const obj = QuestDataUtils;
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const _HermesInternal = HermesInternal;
        result = !set.has("" + item + "_" + questPlacementFromQuestContent);
      }
      if (result) {
        result = QuestDataUtils.isBillableQuestContent(tmp3.questContent, tmp3.entity.adCreativeType);
        const tmpResult = QuestDataUtils;
      }
      return result;
    };
    obj.maybeRegisterIosAttributionImpression = function maybeRegisterIosAttributionImpression(
      item,
      adProvenanceMetadataSealed,
    ) {
      if (!obj.iosAttributionRegistered) {
        obj = IosAttributionEligibility;
        if (obj.isIosAttributionEligible()) {
          let tmp2Result = IosAttributionNativeModule;
          const activeIosAttributionFramework = tmp2Result.getActiveIosAttributionFramework();
          if (null != activeIosAttributionFramework) {
            if (null != adProvenanceMetadataSealed) {
              tmp2Result = IosAttributionEligibility;
              if (tmp2Result.isCampaignIosAttributionEnabled(tmp.sourceQuestContent, item)) {
                obj = {
                  impressionId: tmp.id,
                  metadataSealed: adProvenanceMetadataSealed,
                  framework: activeIosAttributionFramework,
                };
                const result = IosAttributionImpressionRegistry.registerViewThroughImpression(obj);
                tmp.iosAttributionRegistered = true;
                const tmp2Result1 = IosAttributionImpressionRegistry;
              } else {
                const result1 = IosAttributionMetrics.trackIosAttributionImpression(
                  IosAttributionMetrics.IosAttributionImpressionResult.NOT_SKAN_ENABLED,
                  activeIosAttributionFramework,
                  tmp.id,
                );
                const tmp2Result2 = IosAttributionMetrics;
              }
            } else {
              const result2 = IosAttributionMetrics.trackIosAttributionImpression(
                IosAttributionMetrics.IosAttributionImpressionResult.NO_METADATA,
                activeIosAttributionFramework,
                tmp.id,
              );
              const tmp2Result3 = IosAttributionMetrics;
            }
          } else {
            const result3 = IosAttributionMetrics.trackIosAttributionImpression(
              IosAttributionMetrics.IosAttributionImpressionResult.NO_FRAMEWORK,
              activeIosAttributionFramework,
              tmp.id,
            );
            const tmp2Result4 = IosAttributionMetrics;
          }
        }
      }
    };
    closure_129_0 = obj;
    obj.onMinViewTimeReached = closure_3(async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              const obj10 = tmp2(7729);
              dependencyMap = 1;
              c3 = 1;
              let obj1 = { value: obj10.getAdUser(tmp2(7728).getQuestContentName(obj.questContent)), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            let obj3 = {
              trackGuildAndChannelMetadata: closure_129_0.trackGuildAndChannelMetadata,
              sourceQuestContent: closure_129_0.sourceQuestContent,
            };
            closure_128_1 = obj3;
            let obj4 = {
              min_view_time_seconds: closure_129_0.minViewTimeSeconds,
              min_viewport_percentage: closure_129_0.minViewportPercentage,
              triggered_by_status_change: closure_129_0.triggeredByStatusChange,
              apple_advertising_id: null,
              android_advertising_id: null,
            };
            let advertisingId = null;
            if (null != closure_128_0) {
              obj = tmp2(1115);
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = closure_128_0.advertisingId;
              }
            }
            obj4.apple_advertising_id = advertisingId;
            let advertisingId1 = null;
            if (null != closure_128_0) {
              obj1 = tmp2(1115);
              advertisingId1 = null;
              if (obj1.isAndroid()) {
                advertisingId1 = closure_128_0.advertisingId;
              }
            }
            obj4.android_advertising_id = advertisingId1;
            let merged = Object.assign(tmp5(7677)());
            obj2 = tmp2(11194);
            let merged1 = Object.assign(obj2.getBrandSafetyContext(closure_129_0.questContent));
            closure_128_2 = obj4;
            const adContentIds = closure_129_0.entity.adContentIds;
            const item = adContentIds.forEach((item, index) => {
              obj = obj(7699);
              let obj1 = adUser;
              let adMetadataSealed = obj.getAdMetadataSealed(adUser.sourceQuestContent, item);
              const shouldExtendSessionResult = adUser.shouldExtendSession(item);
              adUser.trackViewedPlacement(item);
              const adCreativeType = adUser.entity.adCreativeType;
              const QUEST = obj(5451).AdCreativeType.QUEST;
              if (adUser.migrateQuestContentViewedToCaptureAdUserAction) {
                if (adCreativeType === QUEST) {
                  const quest = QuestStore.getQuest(tmp30);
                  let isQuestExpiredResult = null == quest;
                  if (!isQuestExpiredResult) {
                    let tmpResult = tmp(7699);
                    isQuestExpiredResult = tmpResult.isQuestExpired(quest);
                  }
                  if (!isQuestExpiredResult) {
                    tmpResult = tmp(11276);
                    const items = [tmp30];
                    tmpResult.markAdContentSeen(tmp(5451).AdCreativeType.QUEST, items);
                  }
                }
                const result = tmp(7699).isBillableQuestContent(obj1.questContent, obj1.entity.adCreativeType);
                const AdUserActionType = tmp(11197).AdUserActionType;
                obj = {
                  type: result
                    ? AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
                    : AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                  surfaceId: null,
                  sourceQuestContent: null,
                  impressionId: null,
                  triggeredByStatusChange: null,
                  minViewTimeSeconds: null,
                  minViewportPercentage: null,
                  isQuestEnrollmentBlocked: null,
                  shouldExtendSession: null,
                  adUser: null,
                  questContentPosition: null,
                  questContentRowIndex: null,
                  trackGuildAndChannelMetadata: null,
                };
                ({
                  questContent: obj17.surfaceId,
                  sourceQuestContent: obj17.sourceQuestContent,
                  id: obj17.impressionId,
                  triggeredByStatusChange: obj17.triggeredByStatusChange,
                  minViewTimeSeconds: obj17.minViewTimeSeconds,
                  minViewportPercentage: obj17.minViewportPercentage,
                  isQuestEnrollmentBlocked: obj17.isQuestEnrollmentBlocked,
                } = obj1);
                obj.shouldExtendSession = shouldExtendSessionResult;
                obj.adUser = adUser;
                ({
                  questContentPosition: obj17.questContentPosition,
                  questContentRowIndex: obj17.questContentRowIndex,
                  trackGuildAndChannelMetadata: obj17.trackGuildAndChannelMetadata,
                } = obj1);
                if (obj1.entity.adCreativeType === tmp(5451).AdCreativeType.QUEST) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj.adCreativeType = obj1.entity.adCreativeType;
                  obj.adCreativeId = obj1.entity.adContentIds[index];
                  tmp(11193).captureAdUserAction(obj);
                  const tmpResult2 = tmp(11193);
                } else if (null != obj1.entity.relatedQuestId) {
                  obj1 = {};
                  const merged1 = Object.assign(obj);
                  obj1.adCreativeType = obj1.entity.adCreativeType;
                  obj1.adCreativeId = obj1.entity.adContentIds[index];
                  obj1.relatedQuestId = obj1.entity.relatedQuestId;
                  tmp(11193).captureAdUserAction(obj1);
                  const tmpResult3 = tmp(11193);
                } else {
                  const obj2 = {};
                  const merged2 = Object.assign(obj);
                  obj2.adCreativeType = obj1.entity.adCreativeType;
                  obj2.adCreativeId = obj1.entity.adContentIds[index];
                  tmp(11193).captureAdUserAction(obj2);
                  const tmpResult4 = tmp(11193);
                }
                const tmpResult1 = tmp(7699);
                const questLogger = tmp(7709).getQuestLogger();
                const tmpResult5 = tmp(7709);
                const _HermesInternal2 = HermesInternal;
                const obj3 = { impressionId: obj1.id };
                questLogger.info(
                  "" +
                    item +
                    " ad content viewed for at least " +
                    obj1.minViewTimeSeconds +
                    "s at " +
                    tmp(7728).getQuestContentName(obj1.questContent),
                  obj3,
                );
                const tmpResult6 = tmp(7728);
              } else if (adCreativeType === QUEST) {
                const quest1 = QuestStore.getQuest(tmp6);
                let isQuestExpiredResult1 = null == quest1;
                if (!isQuestExpiredResult1) {
                  isQuestExpiredResult1 = tmp(7699).isQuestExpired(quest1);
                  const tmpResult7 = tmp(7699);
                }
                if (!isQuestExpiredResult1) {
                  const items1 = [tmp6];
                  tmp(11276).markAdContentSeen(tmp(5451).AdCreativeType.QUEST, items1);
                  const tmpResult8 = tmp(11276);
                }
                const questLogger1 = tmp(7709).getQuestLogger();
                let questName;
                if (quest1 != null) {
                  questName = quest1.config.messages.questName;
                }
                if (questName == null) {
                  questName = tmp6;
                }
                const tmpResult9 = tmp(7709);
                const _HermesInternal = HermesInternal;
                const obj4 = { impressionId: obj1.id };
                questLogger1.info(
                  "" +
                    questName +
                    " Quest viewed for at least " +
                    obj1.minViewTimeSeconds +
                    "s at " +
                    tmp(7728).getQuestContentName(obj1.questContent),
                  obj4,
                );
                const tmpResult10 = tmp(7728);
                const obj5 = {};
                const merged3 = Object.assign(closure_1_1);
                obj5.shouldExtendSession = shouldExtendSessionResult;
                obj5.questId = obj1.entity.adContentIds[index];
                obj5.event = constants.QUEST_CONTENT_VIEWED;
                const obj6 = {};
                const merged4 = Object.assign(dependencyMap);
                const merged5 = Object.assign(obj1.commonProperties());
                if (adMetadataSealed == null) {
                  adMetadataSealed = null;
                }
                obj6.metadata_sealed = adMetadataSealed;
                const tmpResult11 = tmp(7718);
                const currentQuestHomeSearchSession = tmp(7734).getCurrentQuestHomeSearchSession();
                let uuid;
                if (currentQuestHomeSearchSession != null) {
                  uuid = currentQuestHomeSearchSession.uuid;
                }
                if (uuid == null) {
                  uuid = null;
                }
                obj6.search_session_id = uuid;
                const tmpResult12 = tmp(7734);
                let id;
                if (quest1 != null) {
                  id = quest1.id;
                }
                let adTrafficMetadataSealed = tmp(7699).getAdTrafficMetadataSealed(obj1.sourceQuestContent, id);
                if (adTrafficMetadataSealed == null) {
                  adTrafficMetadataSealed = null;
                }
                obj6.traffic_metadata_sealed = adTrafficMetadataSealed;
                obj5.properties = obj6;
                tmpResult11.trackQuestEvent(obj5);
                const tmpResult13 = tmp(7699);
              } else {
                const questLogger2 = tmp(7709).getQuestLogger();
                const tmpResult14 = tmp(7709);
                const _HermesInternal3 = HermesInternal;
                const obj7 = { impressionId: obj1.id };
                questLogger2.info(
                  "" +
                    obj1.entity.adContentIds[index] +
                    " ad content viewed for at least " +
                    obj1.minViewTimeSeconds +
                    "s at " +
                    tmp(7728).getQuestContentName(obj1.questContent),
                  obj7,
                );
                const tmpResult15 = tmp(7728);
                const obj8 = {};
                const merged6 = Object.assign(closure_1_1);
                obj8.shouldExtendSession = shouldExtendSessionResult;
                obj8.adContentId = obj1.entity.adContentIds[index];
                obj8.relatedQuestId = obj1.entity.relatedQuestId;
                obj8.adCreativeType = obj1.entity.adCreativeType;
                obj8.event = constants.QUEST_CONTENT_VIEWED;
                const obj9 = {};
                const merged7 = Object.assign(dependencyMap);
                const merged8 = Object.assign(obj1.commonProperties());
                obj8.properties = obj9;
                tmp(7718).trackAdContentEvent(obj8);
                const tmpResult16 = tmp(7718);
              }
            });
            if (closure_129_0.onImpressionCallback != null) {
              onImpressionCallback();
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
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
      let obj;
      if (null != flag.lastBeatTime) {
        const _Math = Math;
        const _Date = Date;
        rounded = Math.round(Date.now() - tmp.lastBeatTime);
        obj = { trackGuildAndChannelMetadata: null, sourceQuestContent: null };
        ({
          trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata,
          sourceQuestContent: obj.sourceQuestContent,
        } = tmp);
        obj = {
          is_termination_beat: flag,
          viewed_time_ms: rounded,
          triggered_by_status_change: tmp.triggeredByStatusChange,
        };
        const adContentIds = tmp.entity.adContentIds;
        const item = adContentIds.forEach((item, index) => {
          if (obj.entity.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
            const quest = QuestStore.getQuest(tmp18);
            let tmpResult = getQuestLogger;
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
            obj.impressionId = obj.id;
            questLogger.info(
              "" + questName + " Quest impression " + str7 + "heartbeat: " + rounded + "ms since last heartbeat",
              obj,
            );
            tmpResult = AnalyticsActions;
            obj = {};
            const merged = Object.assign(obj);
            obj.questId = obj.entity.adContentIds[index];
            obj.event = AnalyticEvents.QUEST_CONTENT_VIEW_TIME;
            const obj1 = {};
            const merged1 = Object.assign(obj);
            const merged2 = Object.assign(obj.commonProperties());
            obj.properties = obj1;
            tmpResult.trackQuestEvent(obj);
          } else {
            const questLogger1 = getQuestLogger.getQuestLogger();
            let str = "";
            if (flag) {
              str = "terminal ";
            }
            const _HermesInternal = HermesInternal;
            const obj2 = { impressionId: obj.id };
            questLogger1.info(
              "" +
                obj.entity.adContentIds[index] +
                " ad content impression " +
                str +
                "heartbeat: " +
                rounded +
                "ms since last heartbeat",
              obj2,
            );
            const tmpResult1 = getQuestLogger;
            const obj3 = {};
            const merged3 = Object.assign(obj);
            obj3.adContentId = obj.entity.adContentIds[index];
            obj3.relatedQuestId = obj.entity.relatedQuestId;
            obj3.adCreativeType = obj.entity.adCreativeType;
            obj3.event = AnalyticEvents.QUEST_CONTENT_VIEW_TIME;
            const obj4 = {};
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj.commonProperties());
            obj3.properties = obj4;
            AnalyticsActions.trackAdContentEvent(obj3);
            const tmpResult2 = AnalyticsActions;
          }
        });
      }
      flag.lastBeatTime = Date.now();
    };
    obj.commonProperties = function commonProperties() {
      obj = { impression_id: obj.id, is_quest_enrollment_blocked: obj.isQuestEnrollmentBlocked };
      const merged = Object.assign(
        AnalyticsTypes.getContentProperties(obj.questContent, obj.questContentPosition, obj.questContentRowIndex),
      );
      return obj;
    };
    obj.clone = function clone(triggeredByStatusChange) {
      obj.stop();
      obj = {
        questContent: obj.questContent,
        questContentRowIndex: obj.questContentRowIndex,
        questContentPosition: obj.questContentPosition,
        trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata,
        triggeredByStatusChange: triggeredByStatusChange.triggeredByStatusChange,
        isQuestEnrollmentBlocked: obj.isQuestEnrollmentBlocked,
        onImpression: obj.onImpressionCallback,
        sourceQuestContent: obj.sourceQuestContent,
      };
      const merged = Object.assign(obj.entity);
      return new QuestContentImpression(obj);
    };
    obj.start = function start() {
      entity.stop(false);
      entity.lastBeatTime = Date.now();
      entity.heartbeatTimeoutId = window.setInterval(() => closure_0.beat(), 1000 * closure_1_6);
      entity.minViewTimeReachedTimeoutId = window.setTimeout(
        entity.onMinViewTimeReached,
        1000 * entity.minViewTimeSeconds,
      );
      entity = {
        trackGuildAndChannelMetadata: entity.trackGuildAndChannelMetadata,
        sourceQuestContent: entity.sourceQuestContent,
      };
      closure_1 = { triggered_by_status_change: entity.triggeredByStatusChange };
      const adContentIds = entity.entity.adContentIds;
      const item = adContentIds.forEach((item, index) => {
        let tmpResult = index;
        questContentPosition = dependencyMap;
        let obj1 = QuestDataUtils;
        let questContentRowIndex = obj;
        let adMetadataSealed = obj1.getAdMetadataSealed(obj.sourceQuestContent, item);
        let obj2 = QuestDataUtils;
        const result = obj.maybeRegisterIosAttributionImpression(
          item,
          obj2.getAdProvenanceMetadataSealed(obj.sourceQuestContent, item),
        );
        const adCreativeType = obj.entity.adCreativeType;
        const QUEST = AdCreativeType.AdCreativeType.QUEST;
        if (obj.migrateQuestContentLoadedToCaptureAdUserAction) {
          if (adCreativeType === QUEST) {
            obj = {
              adCreativeType: questContentRowIndex.entity.adCreativeType,
              adCreativeId: questContentRowIndex.entity.adContentIds[tmpResult],
            };
          } else {
            obj = {
              adCreativeType: questContentRowIndex.entity.adCreativeType,
              adCreativeId: questContentRowIndex.entity.adContentIds[tmpResult],
              relatedQuestId: questContentRowIndex.entity.relatedQuestId,
            };
          }
          tmpResult = captureAdUserAction;
          obj1 = {
            type: captureAdUserActionTypes.AdUserActionType.END_CONTENT_LOAD,
            surfaceId: null,
            sourceQuestContent: null,
            impressionId: null,
            triggeredByStatusChange: null,
            trackGuildAndChannelMetadata: null,
            questContentPosition: null,
            questContentRowIndex: null,
          };
          ({
            questContent: obj14.surfaceId,
            sourceQuestContent: obj14.sourceQuestContent,
            id: obj14.impressionId,
            triggeredByStatusChange: obj14.triggeredByStatusChange,
            trackGuildAndChannelMetadata: obj14.trackGuildAndChannelMetadata,
            questContentPosition,
          } = questContentRowIndex);
          obj1.questContentPosition = questContentPosition;
          questContentRowIndex = questContentRowIndex.questContentRowIndex;
          obj1.questContentRowIndex = questContentRowIndex;
          const merged = Object.assign(obj);
          tmpResult.captureAdUserAction(obj1);
        } else if (adCreativeType === QUEST) {
          const quest = QuestStore.getQuest(tmp4);
          tmpResult = getQuestLogger;
          const questLogger = tmpResult.getQuestLogger();
          let questName;
          if (quest != null) {
            questName = quest.config.messages.questName;
          }
          if (questName == null) {
            questName = tmp4;
          }
          const _HermesInternal = HermesInternal;
          obj2 = { impressionId: questContentRowIndex.id };
          questLogger.info(
            "" +
              questName +
              " Quest became visible at " +
              AnalyticsTypes.getQuestContentName(questContentRowIndex.questContent),
            obj2,
          );
          const tmpResult1 = AnalyticsTypes;
          const obj3 = {};
          const merged1 = Object.assign(closure_0);
          obj3.questId = questContentRowIndex.entity.adContentIds[tmpResult];
          obj3.event = AnalyticEvents.QUEST_CONTENT_LOADED;
          const obj4 = {};
          const merged2 = Object.assign(closure_1);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj4.metadata_sealed = adMetadataSealed;
          const merged3 = Object.assign(questContentRowIndex.commonProperties());
          const tmpResult2 = AnalyticsActions;
          let id;
          if (quest != null) {
            id = quest.id;
          }
          let adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(
            questContentRowIndex.sourceQuestContent,
            id,
          );
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          obj4.traffic_metadata_sealed = adTrafficMetadataSealed;
          obj3.properties = obj4;
          tmpResult2.trackQuestEvent(obj3);
          const tmpResult3 = QuestDataUtils;
        } else {
          const questLogger1 = getQuestLogger.getQuestLogger();
          const tmpResult4 = getQuestLogger;
          const _HermesInternal2 = HermesInternal;
          const obj5 = { impressionId: questContentRowIndex.id };
          questLogger1.info(
            "" +
              questContentRowIndex.entity.adContentIds[tmpResult] +
              " ad content became visible at " +
              AnalyticsTypes.getQuestContentName(questContentRowIndex.questContent),
            obj5,
          );
          const tmpResult5 = AnalyticsTypes;
          const obj6 = {};
          const merged4 = Object.assign(closure_0);
          obj6.adContentId = questContentRowIndex.entity.adContentIds[tmpResult];
          obj6.relatedQuestId = questContentRowIndex.entity.relatedQuestId;
          obj6.adCreativeType = questContentRowIndex.entity.adCreativeType;
          obj6.event = AnalyticEvents.QUEST_CONTENT_LOADED;
          const obj7 = {};
          const merged5 = Object.assign(closure_1);
          const merged6 = Object.assign(questContentRowIndex.commonProperties());
          obj6.properties = obj7;
          AnalyticsActions.trackAdContentEvent(obj6);
          const tmpResult6 = AnalyticsActions;
        }
      });
      let obj = MonitoringAgentDefault;
      obj = { name: obj(7607).MetricEvents.QUEST_CONTENT_IMPRESSION, tags: null };
      const items = ["quest_content:" + obj(7728).getQuestContentName(entity.questContent)];
      obj.tags = items;
      obj.increment(obj);
      entity.isRunning = true;
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
      obj = IosAttributionImpressionRegistry;
      obj.endImpression(obj.id);
    };
    ({
      adContentIds,
      adCreativeType,
      questContent,
      minViewTimeSeconds,
      relatedQuestId,
      triggeredByStatusChange,
      trackGuildAndChannelMetadata,
      questContentPosition,
      questContentRowIndex,
    } = global);
    if (undefined === minViewTimeSeconds) {
      minViewTimeSeconds = closure_7;
    }
    ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = global);
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[6]);
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
    obj2 = closure_0(closure_2[7]);
    obj.migrateQuestContentLoadedToCaptureAdUserAction = obj2.shouldMigrateToAdAnalyticsInterface(
      closure_0(closure_2[7]).AdAnalyticsInterfaceExperimentStep.STEP_1_LOADED,
      "quest_content_impression",
    );
    obj3 = closure_0(closure_2[7]);
    obj4 = closure_0(closure_2[8]);
    result = obj4.isBillableQuestContent(questContent, adCreativeType);
    AdAnalyticsInterfaceExperimentStep = closure_0(closure_2[7]).AdAnalyticsInterfaceExperimentStep;
    obj.migrateQuestContentViewedToCaptureAdUserAction = obj3.shouldMigrateToAdAnalyticsInterface(
      result
        ? AdAnalyticsInterfaceExperimentStep.STEP_5_VIEWED_IMPRESSION
        : AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
      "quest_content_impression",
    );
    if (adCreativeType === tmp2(tmp3[9]).AdCreativeType.QUEST) {
      obj1 = { adContentIds: null, adCreativeType: null };
      obj1.adContentIds = adContentIds;
      obj1.adCreativeType = adCreativeType;
      obj.entity = obj1;
    } else {
      obj2 = { adContentIds: null, adCreativeType: null, relatedQuestId: null };
      obj2.adContentIds = adContentIds;
      obj2.adCreativeType = adCreativeType;
      obj2.relatedQuestId = relatedQuestId;
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
const context = noop.createContext(undefined);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export { QuestContentImpression };
export const QuestImpressionContext = context;
export const QuestContentImpressionTracker = function QuestContentImpressionTracker(visible) {
  _require = visible;
  visible = visible.visible;
  const visibleChanged = visible.visibleChanged;
  const focused = visible.focused;
  const focusedChanged = visible.focusedChanged;
  const sourceQuestContent = visible.sourceQuestContent;
  let obj = require("ContentImpressionTrackerHooks");
  const questStatusChanged = obj.useQuestStatusChanged(visible);
  let relatedQuestId;
  if (visible.adCreativeType !== require("AdCreativeType").AdCreativeType.QUEST) {
    relatedQuestId = visible.relatedQuestId;
  }
  const ref = focusedChanged.useRef(null);
  const items = [sourceQuestContent];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => null != sourceQuestContent.questEnrollmentBlockedUntil,
    [],
  );
  visible(visibleChanged[29])(() => () => {
    if (null != ref.current) {
      const current = ref.current;
      current.stop();
    }
  });
  const items1 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , ,];
  ({
    adContentIds: arr2[4],
    onImpression: arr2[5],
    questContent: arr2[6],
    questContentPosition: arr2[7],
    questContentRowIndex: arr2[8],
    trackGuildAndChannelMetadata: arr2[9],
  } = visible);
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
      let adContentIds = {
        isQuestEnrollmentBlocked: stateFromStores,
        minViewTimeSeconds: null,
        onImpression: null,
        questContent: null,
        questContentPosition: null,
        questContentRowIndex: null,
        sourceQuestContent: null,
        trackGuildAndChannelMetadata: null,
        triggeredByStatusChange: null,
      };
      let tmp10 = visible;
      ({
        minViewTimeSeconds: obj.minViewTimeSeconds,
        onImpression: obj.onImpression,
        questContent: obj.questContent,
        questContentPosition: obj.questContentPosition,
        questContentRowIndex: obj.questContentRowIndex,
      } = visible);
      adContentIds.sourceQuestContent = sourceQuestContent;
      adContentIds.trackGuildAndChannelMetadata = visible.trackGuildAndChannelMetadata;
      adContentIds.triggeredByStatusChange = questStatusChanged;
      if (visible.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
        let obj = {};
        const merged = Object.assign(adContentIds);
        adContentIds = tmp10.adContentIds;
        obj.adContentIds = adContentIds;
        obj.adCreativeType = tmp10.adCreativeType;
        tmp10 = new.target;
        ref.current = new QuestContentImpression(obj);
        let tmp15 = ref;
      } else {
        tmp15 = ref;
        obj = {};
        const merged1 = Object.assign(adContentIds);
        ({ adContentIds: obj2.adContentIds, adCreativeType: obj2.adCreativeType } = tmp10);
        obj.relatedQuestId = relatedQuestId;
        ref.current = new QuestContentImpression(obj);
      }
      const current2 = tmp15.current;
      current2.start();
    }
  }, items1);
  obj = { value: ref, children: visible.children(visible.reference, ref) };
  return <context.Provider value={ref}>{visible.children(visible.reference, ref)}</context.Provider>;
};
