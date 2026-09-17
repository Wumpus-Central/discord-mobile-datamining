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

const require = globalThis.__r;

require = fn;
const ContentImpressionTrackerConstants = fn(7848);
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
    obj1 = Object.create(new.target.prototype);
    closure_0 = obj1;
    obj1.isRunning = false;
    obj1.iosAttributionRegistered = false;
    obj1.trackViewedPlacement = function trackViewedPlacement(item) {
      const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(obj5.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        result = QuestDataUtils.isBillableQuestContent(obj5.questContent, obj5.entity.adCreativeType);
        const tmpResult = QuestDataUtils;
      }
      if (result) {
        const _HermesInternal = HermesInternal;
        set.add("" + item + "_" + questPlacementFromQuestContent);
      }
    };
    obj1.shouldExtendSession = function shouldExtendSession(item) {
      const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(obj5.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const _HermesInternal = HermesInternal;
        result = !set.has("" + item + "_" + questPlacementFromQuestContent);
      }
      if (result) {
        result = QuestDataUtils.isBillableQuestContent(obj5.questContent, obj5.entity.adCreativeType);
        const tmpResult = QuestDataUtils;
      }
      return result;
    };
    obj1.maybeRegisterIosAttributionImpression = function maybeRegisterIosAttributionImpression(
      item,
      adProvenanceMetadataSealed,
    ) {
      if (!obj5.iosAttributionRegistered) {
        if (obj.isIosAttributionEligible()) {
          const activeIosAttributionFramework = IosAttributionNativeModule.getActiveIosAttributionFramework();
          if (null != activeIosAttributionFramework) {
            if (null != adProvenanceMetadataSealed) {
              if (tmp2Result6.isCampaignIosAttributionEnabled(obj5.sourceQuestContent, item)) {
                const obj2 = {
                  impressionId: obj5.id,
                  metadataSealed: adProvenanceMetadataSealed,
                  framework: activeIosAttributionFramework,
                };
                const result = IosAttributionImpressionRegistry.registerViewThroughImpression(obj2);
                obj5.iosAttributionRegistered = true;
                const tmp2Result7 = IosAttributionImpressionRegistry;
              } else {
                const result1 = IosAttributionMetrics.trackIosAttributionImpression(
                  IosAttributionMetrics.IosAttributionImpressionResult.NOT_SKAN_ENABLED,
                  activeIosAttributionFramework,
                  obj5.id,
                );
                const tmp2Result8 = IosAttributionMetrics;
              }
              tmp2Result6 = IosAttributionEligibility;
            } else {
              const result2 = IosAttributionMetrics.trackIosAttributionImpression(
                IosAttributionMetrics.IosAttributionImpressionResult.NO_METADATA,
                activeIosAttributionFramework,
                obj5.id,
              );
              const tmp2Result9 = IosAttributionMetrics;
            }
          } else {
            const result3 = IosAttributionMetrics.trackIosAttributionImpression(
              IosAttributionMetrics.IosAttributionImpressionResult.NO_FRAMEWORK,
              activeIosAttributionFramework,
              obj5.id,
            );
            const tmp2Result10 = IosAttributionMetrics;
          }
          const tmp2Result = IosAttributionNativeModule;
        }
        obj = IosAttributionEligibility;
      }
    };
    closure_129_0 = obj1;
    obj1.onMinViewTimeReached = closure_3(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj4 = { value, done: true };
          return obj4;
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
              obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              let obj10 = tmp2(7849);
              dependencyMap = 1;
              c3 = 1;
              let obj6 = { value: obj10.getAdUser(tmp2(7842).getQuestContentName(obj5.questContent)), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = value;
            let obj8 = {
              trackGuildAndChannelMetadata: closure_129_0.trackGuildAndChannelMetadata,
              sourceQuestContent: closure_129_0.sourceQuestContent,
            };
            closure_128_1 = obj8;
            let obj9 = {
              min_view_time_seconds: closure_129_0.minViewTimeSeconds,
              min_viewport_percentage: closure_129_0.minViewportPercentage,
              triggered_by_status_change: closure_129_0.triggeredByStatusChange,
              apple_advertising_id: null,
              android_advertising_id: null,
            };
            let advertisingId = null;
            if (null != closure_128_0) {
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = closure_128_0.advertisingId;
              }
              obj = tmp2(1364);
            }
            obj9.apple_advertising_id = advertisingId;
            let advertisingId1 = null;
            if (null != closure_128_0) {
              advertisingId1 = null;
              if (obj2.isAndroid()) {
                advertisingId1 = closure_128_0.advertisingId;
              }
              obj2 = tmp2(1364);
            }
            obj9.android_advertising_id = advertisingId1;
            let merged = Object.assign(tmp5(7791)());
            let merged1 = Object.assign(tmp2(7846).getBrandSafetyContext(closure_129_0.questContent));
            closure_128_2 = obj9;
            const adContentIds = closure_129_0.entity.adContentIds;
            const item = adContentIds.forEach((item, index) => {
              let adMetadataSealed = obj5(7813).getAdMetadataSealed(adUser.sourceQuestContent, item);
              const shouldExtendSessionResult = adUser.shouldExtendSession(item);
              adUser.trackViewedPlacement(item);
              const adCreativeType = adUser.entity.adCreativeType;
              const QUEST = obj5(5539).AdCreativeType.QUEST;
              if (adUser.migrateQuestContentViewedToCaptureAdUserAction) {
                if (adCreativeType === QUEST) {
                  const quest = QuestStore.getQuest(tmp30);
                  let isQuestExpiredResult = null == quest;
                  if (!isQuestExpiredResult) {
                    isQuestExpiredResult = tmp(7813).isQuestExpired(quest);
                    const tmpResult = tmp(7813);
                  }
                  if (!isQuestExpiredResult) {
                    const items = [tmp30];
                    tmp(11430).markAdContentSeen(tmp(5539).AdCreativeType.QUEST, items);
                    const tmpResult18 = tmp(11430);
                  }
                }
                const result = tmp(7813).isBillableQuestContent(adUser.questContent, adUser.entity.adCreativeType);
                const AdUserActionType = tmp(7854).AdUserActionType;
                const obj3 = {
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
                } = adUser);
                obj3.shouldExtendSession = shouldExtendSessionResult;
                obj3.adUser = adUser;
                ({
                  questContentPosition: obj17.questContentPosition,
                  questContentRowIndex: obj17.questContentRowIndex,
                  trackGuildAndChannelMetadata: obj17.trackGuildAndChannelMetadata,
                } = adUser);
                if (adUser.entity.adCreativeType === tmp(5539).AdCreativeType.QUEST) {
                  const obj4 = {};
                  const merged = Object.assign(obj3);
                  obj4.adCreativeType = adUser.entity.adCreativeType;
                  obj4.adCreativeId = adUser.entity.adContentIds[index];
                  tmp(7844).captureAdUserAction(obj4);
                  const tmpResult20 = tmp(7844);
                } else if (null != adUser.entity.relatedQuestId) {
                  obj5 = {};
                  const merged1 = Object.assign(obj3);
                  obj5.adCreativeType = adUser.entity.adCreativeType;
                  obj5.adCreativeId = adUser.entity.adContentIds[index];
                  obj5.relatedQuestId = adUser.entity.relatedQuestId;
                  tmp(7844).captureAdUserAction(obj5);
                  const tmpResult21 = tmp(7844);
                } else {
                  const obj6 = {};
                  const merged2 = Object.assign(obj3);
                  obj6.adCreativeType = adUser.entity.adCreativeType;
                  obj6.adCreativeId = adUser.entity.adContentIds[index];
                  tmp(7844).captureAdUserAction(obj6);
                  const tmpResult22 = tmp(7844);
                }
                const tmpResult19 = tmp(7813);
                const questLogger = tmp(7823).getQuestLogger();
                const tmpResult23 = tmp(7823);
                const _HermesInternal2 = HermesInternal;
                const obj7 = { impressionId: adUser.id };
                questLogger.info(
                  "" +
                    item +
                    " ad content viewed for at least " +
                    adUser.minViewTimeSeconds +
                    "s at " +
                    tmp(7842).getQuestContentName(adUser.questContent),
                  obj7,
                );
                const tmpResult24 = tmp(7842);
              } else if (adCreativeType === QUEST) {
                const quest1 = QuestStore.getQuest(tmp6);
                let isQuestExpiredResult1 = null == quest1;
                if (!isQuestExpiredResult1) {
                  isQuestExpiredResult1 = tmp(7813).isQuestExpired(quest1);
                  const tmpResult25 = tmp(7813);
                }
                if (!isQuestExpiredResult1) {
                  const items1 = [tmp6];
                  tmp(11430).markAdContentSeen(tmp(5539).AdCreativeType.QUEST, items1);
                  const tmpResult26 = tmp(11430);
                }
                const questLogger1 = tmp(7823).getQuestLogger();
                let questName;
                if (quest1 != null) {
                  questName = quest1.config.messages.questName;
                }
                if (questName == null) {
                  questName = tmp6;
                }
                const tmpResult27 = tmp(7823);
                const _HermesInternal = HermesInternal;
                const obj8 = { impressionId: adUser.id };
                questLogger1.info(
                  "" +
                    questName +
                    " Quest viewed for at least " +
                    adUser.minViewTimeSeconds +
                    "s at " +
                    tmp(7842).getQuestContentName(adUser.questContent),
                  obj8,
                );
                const tmpResult28 = tmp(7842);
                const obj9 = {};
                const merged3 = Object.assign(closure_1_1);
                obj9.shouldExtendSession = shouldExtendSessionResult;
                obj9.questId = adUser.entity.adContentIds[index];
                obj9.event = constants.QUEST_CONTENT_VIEWED;
                const obj10 = {};
                const merged4 = Object.assign(dependencyMap);
                const merged5 = Object.assign(adUser.commonProperties());
                if (adMetadataSealed == null) {
                  adMetadataSealed = null;
                }
                obj10.metadata_sealed = adMetadataSealed;
                const tmpResult29 = tmp(7832);
                const currentQuestHomeSearchSession = tmp(7845).getCurrentQuestHomeSearchSession();
                let uuid;
                if (currentQuestHomeSearchSession != null) {
                  uuid = currentQuestHomeSearchSession.uuid;
                }
                if (uuid == null) {
                  uuid = null;
                }
                obj10.search_session_id = uuid;
                const tmpResult30 = tmp(7845);
                let id;
                if (quest1 != null) {
                  id = quest1.id;
                }
                let adTrafficMetadataSealed = tmp(7813).getAdTrafficMetadataSealed(adUser.sourceQuestContent, id);
                if (adTrafficMetadataSealed == null) {
                  adTrafficMetadataSealed = null;
                }
                obj10.traffic_metadata_sealed = adTrafficMetadataSealed;
                obj9.properties = obj10;
                tmpResult29.trackQuestEvent(obj9);
                const tmpResult31 = tmp(7813);
              } else {
                const questLogger2 = tmp(7823).getQuestLogger();
                const tmpResult32 = tmp(7823);
                const _HermesInternal3 = HermesInternal;
                const obj11 = { impressionId: adUser.id };
                questLogger2.info(
                  "" +
                    adUser.entity.adContentIds[index] +
                    " ad content viewed for at least " +
                    adUser.minViewTimeSeconds +
                    "s at " +
                    tmp(7842).getQuestContentName(adUser.questContent),
                  obj11,
                );
                const tmpResult33 = tmp(7842);
                const obj12 = {};
                const merged6 = Object.assign(closure_1_1);
                obj12.shouldExtendSession = shouldExtendSessionResult;
                obj12.adContentId = adUser.entity.adContentIds[index];
                obj12.relatedQuestId = adUser.entity.relatedQuestId;
                obj12.adCreativeType = adUser.entity.adCreativeType;
                obj12.event = constants.QUEST_CONTENT_VIEWED;
                const obj13 = {};
                const merged7 = Object.assign(dependencyMap);
                const merged8 = Object.assign(adUser.commonProperties());
                obj12.properties = obj13;
                tmp(7832).trackAdContentEvent(obj12);
                const tmpResult34 = tmp(7832);
              }
              const obj = obj5(7813);
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
    obj1.beat = function beat(arg0) {
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
        let obj2 = {
          is_termination_beat: flag,
          viewed_time_ms: rounded,
          triggered_by_status_change: tmp.triggeredByStatusChange,
        };
        const adContentIds = tmp.entity.adContentIds;
        const item = adContentIds.forEach((item, index) => {
          if (obj5.entity.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
            const quest = QuestStore.getQuest(tmp18);
            const questLogger = getQuestLogger.getQuestLogger();
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
            obj2 = { impressionId: obj.id };
            questLogger.info(
              "" + questName + " Quest impression " + str7 + "heartbeat: " + rounded + "ms since last heartbeat",
              obj2,
            );
            const tmpResult = getQuestLogger;
            const obj3 = {};
            const merged = Object.assign(obj);
            obj3.questId = obj.entity.adContentIds[index];
            obj3.event = AnalyticEvents.QUEST_CONTENT_VIEW_TIME;
            const obj4 = {};
            const merged1 = Object.assign(obj2);
            const merged2 = Object.assign(obj.commonProperties());
            obj3.properties = obj4;
            AnalyticsActions.trackQuestEvent(obj3);
            const tmpResult4 = AnalyticsActions;
          } else {
            const questLogger1 = getQuestLogger.getQuestLogger();
            let str = "";
            if (flag) {
              str = "terminal ";
            }
            const _HermesInternal = HermesInternal;
            obj5 = { impressionId: obj.id };
            questLogger1.info(
              "" +
                obj.entity.adContentIds[index] +
                " ad content impression " +
                str +
                "heartbeat: " +
                rounded +
                "ms since last heartbeat",
              obj5,
            );
            const tmpResult5 = getQuestLogger;
            const obj6 = {};
            const merged3 = Object.assign(obj);
            obj6.adContentId = obj.entity.adContentIds[index];
            obj6.relatedQuestId = obj.entity.relatedQuestId;
            obj6.adCreativeType = obj.entity.adCreativeType;
            obj6.event = AnalyticEvents.QUEST_CONTENT_VIEW_TIME;
            const obj7 = {};
            const merged4 = Object.assign(obj2);
            const merged5 = Object.assign(obj.commonProperties());
            obj6.properties = obj7;
            AnalyticsActions.trackAdContentEvent(obj6);
            const tmpResult6 = AnalyticsActions;
          }
        });
      }
      flag.lastBeatTime = Date.now();
    };
    obj1.commonProperties = function commonProperties() {
      const merged = Object.assign(
        AnalyticsTypes.getContentProperties(obj5.questContent, obj5.questContentPosition, obj5.questContentRowIndex),
      );
      return { impression_id: obj5.id, is_quest_enrollment_blocked: obj5.isQuestEnrollmentBlocked };
    };
    obj1.clone = function clone(triggeredByStatusChange) {
      obj5.stop();
      const merged = Object.assign(obj5.entity);
      return new QuestContentImpression({
        questContent: obj5.questContent,
        questContentRowIndex: obj5.questContentRowIndex,
        questContentPosition: obj5.questContentPosition,
        trackGuildAndChannelMetadata: obj5.trackGuildAndChannelMetadata,
        triggeredByStatusChange: triggeredByStatusChange.triggeredByStatusChange,
        isQuestEnrollmentBlocked: obj5.isQuestEnrollmentBlocked,
        onImpression: obj5.onImpressionCallback,
        sourceQuestContent: obj5.sourceQuestContent,
      });
    };
    obj1.start = function start() {
      obj5.stop(false);
      obj5.lastBeatTime = Date.now();
      obj5.heartbeatTimeoutId = window.setInterval(() => closure_0.beat(), 1000 * closure_1_6);
      obj5.minViewTimeReachedTimeoutId = window.setTimeout(obj5.onMinViewTimeReached, 1000 * obj5.minViewTimeSeconds);
      obj5 = {
        trackGuildAndChannelMetadata: obj5.trackGuildAndChannelMetadata,
        sourceQuestContent: obj5.sourceQuestContent,
      };
      closure_1 = { triggered_by_status_change: obj5.triggeredByStatusChange };
      const adContentIds = obj5.entity.adContentIds;
      const item = adContentIds.forEach((item, index) => {
        let tmpResult = index;
        questContentPosition = dependencyMap;
        let questContentRowIndex = obj5;
        let adMetadataSealed = QuestDataUtils.getAdMetadataSealed(obj5.sourceQuestContent, item);
        const result = obj5.maybeRegisterIosAttributionImpression(
          item,
          QuestDataUtils.getAdProvenanceMetadataSealed(obj5.sourceQuestContent, item),
        );
        const adCreativeType = obj5.entity.adCreativeType;
        const QUEST = AdCreativeType.AdCreativeType.QUEST;
        if (obj5.migrateQuestContentLoadedToCaptureAdUserAction) {
          if (adCreativeType === QUEST) {
            const obj = {
              adCreativeType: questContentRowIndex.entity.adCreativeType,
              adCreativeId: questContentRowIndex.entity.adContentIds[tmpResult],
            };
            let obj4 = obj;
          } else {
            obj4 = {
              adCreativeType: questContentRowIndex.entity.adCreativeType,
              adCreativeId: questContentRowIndex.entity.adContentIds[tmpResult],
              relatedQuestId: questContentRowIndex.entity.relatedQuestId,
            };
          }
          tmpResult = captureAdUserAction;
          obj5 = {
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
          obj5.questContentPosition = questContentPosition;
          questContentRowIndex = questContentRowIndex.questContentRowIndex;
          obj5.questContentRowIndex = questContentRowIndex;
          const merged = Object.assign(obj4);
          tmpResult.captureAdUserAction(obj5);
        } else if (adCreativeType === QUEST) {
          const quest = QuestStore.getQuest(tmp4);
          const questLogger = getQuestLogger.getQuestLogger();
          let questName;
          if (quest != null) {
            questName = quest.config.messages.questName;
          }
          if (questName == null) {
            questName = tmp4;
          }
          const tmpResult8 = getQuestLogger;
          const _HermesInternal = HermesInternal;
          const obj6 = { impressionId: questContentRowIndex.id };
          questLogger.info(
            "" +
              questName +
              " Quest became visible at " +
              AnalyticsTypes.getQuestContentName(questContentRowIndex.questContent),
            obj6,
          );
          const tmpResult9 = AnalyticsTypes;
          const obj7 = {};
          const merged1 = Object.assign(closure_0);
          obj7.questId = questContentRowIndex.entity.adContentIds[tmpResult];
          obj7.event = AnalyticEvents.QUEST_CONTENT_LOADED;
          const obj8 = {};
          const merged2 = Object.assign(closure_1);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj8.metadata_sealed = adMetadataSealed;
          const merged3 = Object.assign(questContentRowIndex.commonProperties());
          const tmpResult10 = AnalyticsActions;
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
          obj8.traffic_metadata_sealed = adTrafficMetadataSealed;
          obj7.properties = obj8;
          tmpResult10.trackQuestEvent(obj7);
          const tmpResult11 = QuestDataUtils;
        } else {
          const questLogger1 = getQuestLogger.getQuestLogger();
          const tmpResult12 = getQuestLogger;
          const _HermesInternal2 = HermesInternal;
          const obj9 = { impressionId: questContentRowIndex.id };
          questLogger1.info(
            "" +
              questContentRowIndex.entity.adContentIds[tmpResult] +
              " ad content became visible at " +
              AnalyticsTypes.getQuestContentName(questContentRowIndex.questContent),
            obj9,
          );
          const tmpResult13 = AnalyticsTypes;
          const obj10 = {};
          const merged4 = Object.assign(closure_0);
          obj10.adContentId = questContentRowIndex.entity.adContentIds[tmpResult];
          obj10.relatedQuestId = questContentRowIndex.entity.relatedQuestId;
          obj10.adCreativeType = questContentRowIndex.entity.adCreativeType;
          obj10.event = AnalyticEvents.QUEST_CONTENT_LOADED;
          const obj11 = {};
          const merged5 = Object.assign(closure_1);
          const merged6 = Object.assign(questContentRowIndex.commonProperties());
          obj10.properties = obj11;
          AnalyticsActions.trackAdContentEvent(obj10);
          const tmpResult14 = AnalyticsActions;
        }
      });
      let obj2 = { name: obj5(7721).MetricEvents.QUEST_CONTENT_IMPRESSION, tags: null };
      let obj = MonitoringAgentDefault;
      const items = ["quest_content:" + obj5(7842).getQuestContentName(obj5.questContent)];
      obj2.tags = items;
      obj.increment(obj2);
      obj5.isRunning = true;
    };
    obj1.stop = function stop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        obj5.beat(true);
      }
      obj5.lastBeatTime = undefined;
      clearInterval(obj5.heartbeatTimeoutId);
      clearTimeout(obj5.minViewTimeReachedTimeoutId);
      obj5.isRunning = false;
      IosAttributionImpressionRegistry.endImpression(obj5.id);
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
    obj1.id = obj.v4();
    obj1.questContent = questContent;
    obj1.questContentPosition = questContentPosition;
    obj1.minViewTimeSeconds = minViewTimeSeconds;
    obj1.minViewportPercentage = closure_8;
    obj1.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj1.triggeredByStatusChange = triggeredByStatusChange;
    obj1.questContentRowIndex = questContentRowIndex;
    obj1.isQuestEnrollmentBlocked = isQuestEnrollmentBlocked;
    obj1.onImpressionCallback = onImpression;
    obj1.sourceQuestContent = sourceQuestContent;
    obj2 = closure_0(closure_2[7]);
    obj1.migrateQuestContentLoadedToCaptureAdUserAction = obj2.shouldMigrateToAdAnalyticsInterface(
      closure_0(closure_2[7]).AdAnalyticsInterfaceExperimentStep.STEP_1_LOADED,
      "quest_content_impression",
    );
    obj3 = closure_0(closure_2[7]);
    obj4 = closure_0(closure_2[8]);
    result = obj4.isBillableQuestContent(questContent, adCreativeType);
    AdAnalyticsInterfaceExperimentStep = closure_0(closure_2[7]).AdAnalyticsInterfaceExperimentStep;
    obj1.migrateQuestContentViewedToCaptureAdUserAction = obj3.shouldMigrateToAdAnalyticsInterface(
      result
        ? AdAnalyticsInterfaceExperimentStep.STEP_5_VIEWED_IMPRESSION
        : AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
      "quest_content_impression",
    );
    if (adCreativeType === tmp2(tmp3[9]).AdCreativeType.QUEST) {
      obj7 = { adContentIds: null, adCreativeType: null };
      obj7.adContentIds = adContentIds;
      obj7.adCreativeType = adCreativeType;
      obj1.entity = obj7;
    } else {
      obj8 = { adContentIds: null, adCreativeType: null, relatedQuestId: null };
      obj8.adContentIds = adContentIds;
      obj8.adCreativeType = adCreativeType;
      obj8.relatedQuestId = relatedQuestId;
      obj1.entity = obj8;
    }
    return obj1;
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
  const questStatusChanged = require("ContentImpressionTrackerHooks").useQuestStatusChanged(visible);
  let relatedQuestId;
  if (visible.adCreativeType !== require("AdCreativeType").AdCreativeType.QUEST) {
    relatedQuestId = visible.relatedQuestId;
  }
  const ref = focusedChanged.useRef(null);
  const obj = require("ContentImpressionTrackerHooks");
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
        const obj3 = {};
        const merged = Object.assign(adContentIds);
        adContentIds = tmp10.adContentIds;
        obj3.adContentIds = adContentIds;
        obj3.adCreativeType = tmp10.adCreativeType;
        tmp10 = new.target;
        ref.current = new QuestContentImpression(obj3);
        let tmp15 = ref;
      } else {
        tmp15 = ref;
        const obj5 = {};
        const merged1 = Object.assign(adContentIds);
        ({ adContentIds: obj2.adContentIds, adCreativeType: obj2.adCreativeType } = tmp10);
        obj5.relatedQuestId = relatedQuestId;
        ref.current = new QuestContentImpression(obj5);
      }
      const current2 = tmp15.current;
      current2.start();
    }
  }, items1);
  const tmpResult = require("initialize");
  return <context.Provider value={ref}>{visible.children(visible.reference, ref)}</context.Provider>;
};
