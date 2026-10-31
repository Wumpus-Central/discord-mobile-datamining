// === Module 14686: ContentImpressionTracker ===

// Module 14686 (ContentImpressionTracker)
import MonitoringAgentDefault from "MonitoringAgent" /* 6540 */;
import MetricEvents from "MetricEvents" /* 6545 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import QuestDataUtils from "QuestDataUtils" /* 7842 */;
import getQuestLogger from "getQuestLogger" /* 7853 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import IosAttributionEligibility from "IosAttributionEligibility" /* 14663 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 14664 */;
import IosAttributionImpressionRegistry from "IosAttributionImpressionRegistry" /* 14666 */;
import IosAttributionMetrics from "IosAttributionMetrics" /* 14668 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7846 */;

const require = globalThis.__r;

require = fn;
const ContentImpressionTrackerConstants = fn(9686);
({ HEARTBEAT_SECONDS: metroRequire, MIN_QUEST_VIEW_TIME_SECONDS: closure_7, MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: closure_8 } = ContentImpressionTrackerConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
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
      const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(obj2.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        result = QuestDataUtils.isBillableQuestContent(obj2.questContent, obj2.entity.adCreativeType);
        const tmpResult = QuestDataUtils;
      }
      if (result) {
        const _HermesInternal = HermesInternal;
        set.add("" + item + "_" + questPlacementFromQuestContent);
      }
    };
    obj1.shouldExtendSession = function shouldExtendSession(item) {
      const questPlacementFromQuestContent = QuestDataUtils.getQuestPlacementFromQuestContent(obj2.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const _HermesInternal = HermesInternal;
        result = !set.has("" + item + "_" + questPlacementFromQuestContent);
      }
      if (result) {
        result = QuestDataUtils.isBillableQuestContent(obj2.questContent, obj2.entity.adCreativeType);
        const tmpResult = QuestDataUtils;
      }
      return result;
    };
    obj1.maybeRegisterIosAttributionImpression = function maybeRegisterIosAttributionImpression(item, adProvenanceMetadataSealed) {
      if (!obj2.iosAttributionRegistered) {
        if (obj.isIosAttributionEligible()) {
          const activeIosAttributionFramework = IosAttributionNativeModule.getActiveIosAttributionFramework();
          if (null != activeIosAttributionFramework) {
            if (null != adProvenanceMetadataSealed) {
              if (tmp2Result6.isCampaignIosAttributionEnabled(tmp.sourceQuestContent, item)) {
                obj2 = { impressionId: tmp.id, metadataSealed: adProvenanceMetadataSealed, framework: activeIosAttributionFramework };
                const result = IosAttributionImpressionRegistry.registerViewThroughImpression(obj2);
                tmp.iosAttributionRegistered = true;
                const tmp2Result7 = IosAttributionImpressionRegistry;
              } else {
                const result1 = IosAttributionMetrics.trackIosAttributionImpression(IosAttributionMetrics.IosAttributionImpressionResult.NOT_SKAN_ENABLED, activeIosAttributionFramework, tmp.id);
                const tmp2Result8 = IosAttributionMetrics;
              }
              tmp2Result6 = IosAttributionEligibility;
            } else {
              const result2 = IosAttributionMetrics.trackIosAttributionImpression(IosAttributionMetrics.IosAttributionImpressionResult.NO_METADATA, activeIosAttributionFramework, tmp.id);
              const tmp2Result9 = IosAttributionMetrics;
            }
          } else {
            const result3 = IosAttributionMetrics.trackIosAttributionImpression(IosAttributionMetrics.IosAttributionImpressionResult.NO_FRAMEWORK, activeIosAttributionFramework, tmp.id);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              obj2 = tmp2(7872);
              dependencyMap = 1;
              c3 = 1;
              let obj6 = { value: obj2.getAdUser(tmp2(7871).getQuestContentName(obj2.questContent)), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            const adContentIds = closure_129_0.entity.adContentIds;
            const item = adContentIds.forEach((item, index) => {
              adUser.trackViewedPlacement(item);
              if (adUser.entity.adCreativeType === obj2(6788).AdCreativeType.QUEST) {
                quest = quest.getQuest(tmp6);
                let isQuestExpiredResult = null == quest;
                if (!isQuestExpiredResult) {
                  isQuestExpiredResult = tmp4(7852).isQuestExpired(quest);
                  const tmp4Result = tmp4(7852);
                }
                if (!isQuestExpiredResult) {
                  const items = [tmp6];
                  tmp4(9682).markAdContentSeen(tmp4(6788).AdCreativeType.QUEST, items);
                  const tmp4Result8 = tmp4(9682);
                }
              }
              const shouldExtendSessionResult = adUser.shouldExtendSession(item);
              const obj = { type: null };
              const result = obj2(7842).isBillableQuestContent(adUser.questContent, adUser.entity.adCreativeType);
              const AdUserActionType = tmp4(9687).AdUserActionType;
              if (result) {
                obj.type = AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION;
                let tmp13 = obj;
              } else {
                obj.type = AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
                tmp13 = obj;
              }
              obj2 = {};
              const merged = Object.assign(tmp13);
              ({ questContent: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, id: obj5.impressionId, triggeredByStatusChange: obj5.triggeredByStatusChange, minViewTimeSeconds: obj5.minViewTimeSeconds, minViewportPercentage: obj5.minViewportPercentage, isQuestEnrollmentBlocked: obj5.isQuestEnrollmentBlocked } = adUser);
              obj2.shouldExtendSession = shouldExtendSessionResult;
              obj2.adUser = adUser;
              ({ questContentPosition: obj5.questContentPosition, questContentRowIndex: obj5.questContentRowIndex, trackGuildAndChannelMetadata: obj5.trackGuildAndChannelMetadata } = adUser);
              if (adUser.entity.adCreativeType === obj2(6788).AdCreativeType.QUEST) {
                const obj3 = {};
                const merged1 = Object.assign(obj2);
                obj3.adCreativeType = adUser.entity.adCreativeType;
                obj3.adCreativeId = adUser.entity.adContentIds[index];
                tmp4(9684).captureAdUserAction(obj3);
                const tmp4Result10 = tmp4(9684);
              } else if (null != adUser.entity.relatedQuestId) {
                const obj4 = {};
                const merged2 = Object.assign(obj2);
                obj4.adCreativeType = adUser.entity.adCreativeType;
                obj4.adCreativeId = adUser.entity.adContentIds[index];
                obj4.relatedQuestId = adUser.entity.relatedQuestId;
                tmp4(9684).captureAdUserAction(obj4);
                const tmp4Result11 = tmp4(9684);
              } else {
                const obj6 = {};
                const merged3 = Object.assign(obj2);
                obj6.adCreativeType = adUser.entity.adCreativeType;
                obj6.adCreativeId = adUser.entity.adContentIds[index];
                if (null != adUser.entity.noFillDecision) {
                  const obj7 = { noFillDecision: adUser.entity.noFillDecision };
                  let obj8 = obj7;
                } else {
                  obj8 = {};
                }
                const merged4 = Object.assign(obj8);
                tmp4(9684).captureAdUserAction(obj6);
                const tmp4Result12 = tmp4(9684);
              }
              const tmp4Result9 = obj2(7842);
              const questLogger = obj2(7853).getQuestLogger();
              const tmp4Result13 = obj2(7853);
              questLogger.info("" + item + " ad content viewed for at least " + adUser.minViewTimeSeconds + "s at " + obj2(7871).getQuestContentName(adUser.questContent), { impressionId: adUser.id });
              const obj9 = { impressionId: adUser.id };
              const tmp4Result14 = obj2(7871);
            });
            if (closure_129_0.onImpressionCallback != null) {
              onImpressionCallback();
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp15) {
          c3 = tmp;
          throw tmp15;
        }
      }
    });
    obj1.beat = function beat() {
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
        ({ trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent } = tmp);
        obj2 = { is_termination_beat: flag, viewed_time_ms: rounded, triggered_by_status_change: tmp.triggeredByStatusChange };
        const adContentIds = tmp.entity.adContentIds;
        const item = adContentIds.forEach((item, index) => {
          if (obj2.entity.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
            quest = QuestStore.getQuest(tmp18);
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
            questLogger.info("" + questName + " Quest impression " + str7 + "heartbeat: " + rounded + "ms since last heartbeat", obj2);
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
            const obj5 = { impressionId: obj.id };
            questLogger1.info("" + obj.entity.adContentIds[index] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj5);
            const tmpResult5 = getQuestLogger;
            const obj6 = {};
            const merged3 = Object.assign(obj);
            obj6.adContentId = obj.entity.adContentIds[index];
            obj6.relatedQuestId = obj.entity.relatedQuestId;
            obj6.noFillDecision = obj.entity.noFillDecision;
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
      obj2 = AnalyticsTypes;
      const merged = Object.assign(obj2.getContentProperties(obj2.questContent, obj2.questContentPosition, obj2.questContentRowIndex));
      return { impression_id: obj2.id, is_quest_enrollment_blocked: obj2.isQuestEnrollmentBlocked };
    };
    obj1.clone = function clone(triggeredByStatusChange) {
      obj2.stop();
      const merged = Object.assign(obj2.entity);
      return new QuestContentImpression({ questContent: obj2.questContent, questContentRowIndex: obj2.questContentRowIndex, questContentPosition: obj2.questContentPosition, trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, triggeredByStatusChange: triggeredByStatusChange.triggeredByStatusChange, isQuestEnrollmentBlocked: obj2.isQuestEnrollmentBlocked, onImpression: obj2.onImpressionCallback, sourceQuestContent: obj2.sourceQuestContent });
    };
    obj1.start = function start() {
      obj2.stop(false);
      obj2.lastBeatTime = Date.now();
      obj2.heartbeatTimeoutId = window.setInterval(() => obj2.beat(), 1000 * timestampProducer);
      obj2.minViewTimeReachedTimeoutId = window.setTimeout(obj2.onMinViewTimeReached, 1000 * obj2.minViewTimeSeconds);
      const adContentIds = obj2.entity.adContentIds;
      const item = adContentIds.forEach((item, index) => {
        const result = closure_1_0.maybeRegisterIosAttributionImpression(item, obj2(7842).getAdProvenanceMetadataSealed(closure_1_0.sourceQuestContent, item));
        if (closure_1_0.entity.adCreativeType === obj2(6788).AdCreativeType.QUEST) {
          obj2 = { adCreativeType: closure_1_0.entity.adCreativeType, adCreativeId: closure_1_0.entity.adContentIds[index] };
          let obj3 = obj2;
        } else {
          obj3 = { adCreativeType: closure_1_0.entity.adCreativeType, adCreativeId: closure_1_0.entity.adContentIds[index], relatedQuestId: closure_1_0.entity.relatedQuestId, noFillDecision: closure_1_0.entity.noFillDecision };
        }
        const obj = obj2(7842);
        const tmpResult = obj2(9684);
        const merged = Object.assign(obj3);
        tmpResult.captureAdUserAction({ type: obj2(9687).AdUserActionType.END_CONTENT_LOAD, surfaceId: closure_1_0.questContent, sourceQuestContent: closure_1_0.sourceQuestContent, impressionId: closure_1_0.id, triggeredByStatusChange: closure_1_0.triggeredByStatusChange, trackGuildAndChannelMetadata: closure_1_0.trackGuildAndChannelMetadata, questContentPosition: closure_1_0.questContentPosition, questContentRowIndex: closure_1_0.questContentRowIndex });
        const obj4 = { type: obj2(9687).AdUserActionType.END_CONTENT_LOAD, surfaceId: closure_1_0.questContent, sourceQuestContent: closure_1_0.sourceQuestContent, impressionId: closure_1_0.id, triggeredByStatusChange: closure_1_0.triggeredByStatusChange, trackGuildAndChannelMetadata: closure_1_0.trackGuildAndChannelMetadata, questContentPosition: closure_1_0.questContentPosition, questContentRowIndex: closure_1_0.questContentRowIndex };
      });
      obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_IMPRESSION, tags: null };
      let obj = MonitoringAgentDefault;
      const items = ["quest_content:" + AnalyticsTypes.getQuestContentName(obj2.questContent)];
      obj2.tags = items;
      obj.increment(obj2);
      obj2.isRunning = true;
    };
    obj1.stop = function stop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      if (flag) {
        obj2.beat(true);
      }
      obj2.lastBeatTime = undefined;
      clearInterval(obj2.heartbeatTimeoutId);
      clearTimeout(obj2.minViewTimeReachedTimeoutId);
      obj2.isRunning = false;
      IosAttributionImpressionRegistry.endImpression(obj2.id);
    };
    ({ adContentIds, adCreativeType, minViewTimeSeconds, relatedQuestId, noFillDecision, questContent, triggeredByStatusChange, trackGuildAndChannelMetadata, questContentPosition, questContentRowIndex } = global);
    if (undefined === minViewTimeSeconds) {
      minViewTimeSeconds = closure_7;
    }
    ({ isQuestEnrollmentBlocked, onImpression, sourceQuestContent } = global);
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
    if (adCreativeType === closure_0(closure_2[7]).AdCreativeType.QUEST) {
      obj4 = { adContentIds: null, adCreativeType: null };
      obj4.adContentIds = adContentIds;
      obj4.adCreativeType = adCreativeType;
      obj1.entity = obj4;
    } else {
      obj5 = { adContentIds: null, adCreativeType: null, relatedQuestId: null, noFillDecision: null };
      obj5.adContentIds = adContentIds;
      obj5.adCreativeType = adCreativeType;
      obj5.relatedQuestId = relatedQuestId;
      obj5.noFillDecision = noFillDecision;
      obj1.entity = obj5;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/lib/analytics/ContentImpressionTracker.tsx");

export { QuestContentImpression };
export function QuestContentImpressionTracker(visible) {
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
  let noFillDecision;
  if (visible.adCreativeType !== require("AdCreativeType").AdCreativeType.QUEST) {
    noFillDecision = visible.noFillDecision;
  }
  const ref = focusedChanged.useRef(null);
  const obj = require("ContentImpressionTrackerHooks");
  const items = [sourceQuestContent];
  const stateFromStores = require("initialize").useStateFromStores(items, () => null != sourceQuestContent.questEnrollmentBlockedUntil, []);
  visible(visibleChanged[25])(() => () => {
    if (null != ref.current) {
      const current = ref.current;
      current.stop();
    }
  });
  const items1 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , , , ];
  ({ adContentIds: arr2[4], onImpression: arr2[5], questContent: arr2[6], questContentPosition: arr2[7], questContentRowIndex: arr2[8], trackGuildAndChannelMetadata: arr2[9] } = visible);
  items1[10] = questStatusChanged;
  items1[11] = visible.minViewTimeSeconds;
  items1[12] = stateFromStores;
  items1[13] = sourceQuestContent;
  items1[14] = visible.adCreativeType;
  items1[15] = relatedQuestId;
  items1[16] = noFillDecision;
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
      let adContentIds = { isQuestEnrollmentBlocked: stateFromStores, minViewTimeSeconds: null, onImpression: null, questContent: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null, trackGuildAndChannelMetadata: null, triggeredByStatusChange: null };
      let tmp10 = visible;
      ({ minViewTimeSeconds: obj.minViewTimeSeconds, onImpression: obj.onImpression, questContent: obj.questContent, questContentPosition: obj.questContentPosition, questContentRowIndex: obj.questContentRowIndex } = visible);
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
        obj5.noFillDecision = noFillDecision;
        ref.current = new QuestContentImpression(obj5);
      }
      const current2 = tmp15.current;
      current2.start();
    }
  }, items1);
  const tmpResult = require("initialize");
  return stateFromStores(require("QuestImpressionContext").QuestImpressionContext.Provider, { value: ref, children: visible.children(visible.reference, ref) });
}