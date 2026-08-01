// === Module 10509: set ===

// Module 10509 (set)
import jsxProd from "jsxProd";
import importAllResult from "trackQuestEvent";
import initializeState from "initializeState";
import MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";
import { AnalyticEvents } from "ME";
import { jsx } from "set";
import set from "initializeState";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ HEARTBEAT_SECONDS: closure_6, MIN_QUEST_VIEW_TIME_SECONDS: error, MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE: metroImportAll } = MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN);
let set = new Set();
let QuestContentImpression;
class QuestContentImpression {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.isRunning = false;
    obj.trackViewedPlacement = function trackViewedPlacement(adCreativeId) {
      obj = obj(outer1_2[8]);
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        result = obj(outer1_2[8]).isBillableQuestContent(obj.questContent);
        const tmpResult = obj(outer1_2[8]);
      }
      if (result) {
        const _HermesInternal = HermesInternal;
        outer1_11.add("" + adCreativeId + "_" + questPlacementFromQuestContent);
      }
    };
    obj.shouldExtendSession = function shouldExtendSession(adCreativeId) {
      obj = obj(outer1_2[8]);
      const questPlacementFromQuestContent = obj.getQuestPlacementFromQuestContent(obj.questContent);
      let result = null != questPlacementFromQuestContent;
      if (result) {
        const _HermesInternal = HermesInternal;
        result = !outer1_11.has("" + adCreativeId + "_" + questPlacementFromQuestContent);
      }
      if (result) {
        result = obj(outer1_2[8]).isBillableQuestContent(obj.questContent);
        const tmpResult = obj(outer1_2[8]);
      }
      return result;
    };
    closure_0 = obj;
    obj.onMinViewTimeReached = jsxProd(function*() {
      if (c3 === 2) {
        c3 = 3;
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
              let closure_0 = tmp2;
              closure_0 = undefined;
              obj3 = undefined;
              obj4 = undefined;
              const obj10 = outer1_0(6018);
              obj4 = 1;
              c3 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = obj10.getAdUser(outer1_0(6016).getQuestContentName(outer1_0.questContent));
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
              obj = outer1_0(500);
              advertisingId = null;
              if (obj.isIOS()) {
                advertisingId = outer1_0.advertisingId;
              }
            }
            obj4[3] = advertisingId;
            let advertisingId1 = null;
            if (null != outer1_0) {
              obj1 = outer1_0(500);
              advertisingId1 = null;
              if (obj1.isAndroid()) {
                advertisingId1 = outer1_0.advertisingId;
              }
            }
            obj4[4] = advertisingId1;
            let merged = Object.assign(outer1_1(5966)());
            obj2 = outer1_0(8457);
            let merged1 = Object.assign(obj2.getBrandSafetyContext(outer1_0.questContent));
            const adContentIds = outer1_0.entity.adContentIds;
            const item = adContentIds.forEach((adCreativeId) => {
              let obj = outer2_0(obj4[8]);
              let obj1 = closure_0;
              let adMetadataSealed = obj.getAdMetadataSealed(closure_0.sourceQuestContent, adCreativeId);
              const shouldExtendSessionResult = closure_0.shouldExtendSession(adCreativeId);
              closure_0.trackViewedPlacement(adCreativeId);
              const adCreativeType = closure_0.entity.adCreativeType;
              const QUEST = outer2_0(obj4[9]).AdCreativeType.QUEST;
              if (closure_0.migrateQuestContentViewedToCaptureAdUserAction) {
                if (adCreativeType === QUEST) {
                  const quest = outer2_5.getQuest(tmp30);
                  let isQuestExpiredResult = null == quest;
                  if (!isQuestExpiredResult) {
                    let tmpResult = tmp(tmp2[8]);
                    isQuestExpiredResult = tmpResult.isQuestExpired(quest);
                  }
                  if (!isQuestExpiredResult) {
                    tmpResult = tmp(tmp2[15]);
                    const items = [tmp30];
                    tmpResult.markAdContentSeen(tmp(tmp2[9]).AdCreativeType.QUEST, items);
                  }
                }
                const adCreativeType2 = obj1.entity.adCreativeType;
                const QUEST2 = tmp(tmp2[9]).AdCreativeType.QUEST;
                obj = { adCreativeType: null, adCreativeId: null };
                obj[0] = obj1.entity.adCreativeType;
                obj[1] = obj1.entity.adContentIds[arg1];
                const tmpResult1 = tmp(tmp2[16]);
                const result = tmp(tmp2[8]).isBillableQuestContent(obj1.questContent);
                const AdUserActionType = tmp(tmp2[17]).AdUserActionType;
                obj = { type: null, surfaceId: null, sourceQuestContent: null, impressionId: null, triggeredByStatusChange: null, minViewTimeSeconds: null, minViewportPercentage: null, isQuestEnrollmentBlocked: null, shouldExtendSession: null, adUser: null, questContentPosition: null, questContentRowIndex: null, trackGuildAndChannelMetadata: null };
                obj[0] = result ? AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION : AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
                ({ questContent: obj19[1], sourceQuestContent: obj19[2], id: obj19[3], triggeredByStatusChange: obj19[4], minViewTimeSeconds: obj19[5], minViewportPercentage: obj19[6], isQuestEnrollmentBlocked: obj19[7] } = obj1);
                obj[8] = shouldExtendSessionResult;
                obj[9] = closure_0;
                ({ questContentPosition: obj19[10], questContentRowIndex: obj19[11], trackGuildAndChannelMetadata: obj19[12] } = obj1);
                const merged = Object.assign(obj);
                tmpResult1.captureAdUserAction(obj);
                const tmpResult2 = tmp(tmp2[8]);
                const questLogger = tmp(tmp2[18]).getQuestLogger();
                const tmpResult3 = tmp(tmp2[18]);
                const _HermesInternal2 = HermesInternal;
                obj1 = { impressionId: null };
                obj1[0] = obj1.id;
                questLogger.info("" + adCreativeId + " ad content viewed for at least " + obj1.minViewTimeSeconds + "s at " + tmp(tmp2[11]).getQuestContentName(obj1.questContent), obj1);
              } else if (adCreativeType === QUEST) {
                const quest1 = outer2_5.getQuest(tmp6);
                let isQuestExpiredResult1 = null == quest1;
                if (!isQuestExpiredResult1) {
                  isQuestExpiredResult1 = tmp(tmp2[8]).isQuestExpired(quest1);
                  const tmpResult5 = tmp(tmp2[8]);
                }
                if (!isQuestExpiredResult1) {
                  const items1 = [tmp6];
                  tmp(tmp2[15]).markAdContentSeen(tmp(tmp2[9]).AdCreativeType.QUEST, items1);
                  const tmpResult6 = tmp(tmp2[15]);
                }
                const questLogger1 = tmp(tmp2[18]).getQuestLogger();
                let questName;
                if (quest1 != null) {
                  questName = quest1.config.messages.questName;
                }
                if (questName == null) {
                  questName = tmp6;
                }
                const tmpResult7 = tmp(tmp2[18]);
                const _HermesInternal = HermesInternal;
                const obj2 = { impressionId: null };
                obj2[0] = obj1.id;
                questLogger1.info("" + questName + " Quest viewed for at least " + obj1.minViewTimeSeconds + "s at " + tmp(tmp2[11]).getQuestContentName(obj1.questContent), obj2);
                const tmpResult8 = tmp(tmp2[11]);
                const obj3 = {};
                const merged1 = Object.assign(obj3);
                obj3.shouldExtendSession = shouldExtendSessionResult;
                obj3.questId = obj1.entity.adContentIds[arg1];
                obj3.event = outer2_9.QUEST_CONTENT_VIEWED;
                obj4 = {};
                const merged2 = Object.assign(obj4);
                const merged3 = Object.assign(obj1.commonProperties());
                if (adMetadataSealed == null) {
                  adMetadataSealed = null;
                }
                obj4.metadata_sealed = adMetadataSealed;
                const tmpResult9 = tmp(tmp2[19]);
                const currentQuestHomeSearchSession = tmp(tmp2[20]).getCurrentQuestHomeSearchSession();
                let uuid;
                if (currentQuestHomeSearchSession != null) {
                  uuid = currentQuestHomeSearchSession.uuid;
                }
                if (uuid == null) {
                  uuid = null;
                }
                obj4.search_session_id = uuid;
                const tmpResult10 = tmp(tmp2[20]);
                let id;
                if (quest1 != null) {
                  id = quest1.id;
                }
                let adTrafficMetadataSealed = tmp(tmp2[8]).getAdTrafficMetadataSealed(obj1.sourceQuestContent, id);
                if (adTrafficMetadataSealed == null) {
                  adTrafficMetadataSealed = null;
                }
                obj4.traffic_metadata_sealed = adTrafficMetadataSealed;
                obj3.properties = obj4;
                tmpResult9.trackQuestEvent(obj3);
                const tmpResult11 = tmp(tmp2[8]);
              } else {
                const questLogger2 = tmp(tmp2[18]).getQuestLogger();
                const tmpResult12 = tmp(tmp2[18]);
                const _HermesInternal3 = HermesInternal;
                const obj5 = { impressionId: null };
                obj5[0] = obj1.id;
                questLogger2.info("" + obj1.entity.adContentIds[arg1] + " ad content viewed for at least " + obj1.minViewTimeSeconds + "s at " + tmp(tmp2[11]).getQuestContentName(obj1.questContent), obj5);
                const tmpResult13 = tmp(tmp2[11]);
                const obj6 = {};
                const merged4 = Object.assign(obj3);
                obj6.shouldExtendSession = shouldExtendSessionResult;
                obj6.adContentId = obj1.entity.adContentIds[arg1];
                obj6.adCreativeType = obj1.entity.adCreativeType;
                obj6.event = outer2_9.QUEST_CONTENT_VIEWED;
                const obj7 = {};
                const merged5 = Object.assign(obj4);
                const merged6 = Object.assign(obj1.commonProperties());
                obj6.properties = obj7;
                tmp(tmp2[19]).trackAdContentEvent(obj6);
                const tmpResult14 = tmp(tmp2[19]);
              }
            });
            if (outer1_0.onImpressionCallback != null) {
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
          let obj = flag;
          if (flag.entity.adCreativeType === obj(outer2_2[9]).AdCreativeType.QUEST) {
            const quest = outer2_5.getQuest(tmp18);
            let tmpResult = tmp(tmp2[18]);
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
            tmpResult = tmp(tmp2[19]);
            obj = {};
            const merged = Object.assign(obj);
            obj.questId = obj.entity.adContentIds[arg1];
            obj.event = outer2_9.QUEST_CONTENT_VIEW_TIME;
            const obj1 = {};
            const merged1 = Object.assign(obj);
            const merged2 = Object.assign(obj.commonProperties());
            obj.properties = obj1;
            tmpResult.trackQuestEvent(obj);
          } else {
            const questLogger1 = tmp(tmp2[18]).getQuestLogger();
            let str = "";
            if (flag) {
              str = "terminal ";
            }
            const _HermesInternal = HermesInternal;
            const obj2 = { impressionId: null };
            obj2[0] = obj.id;
            questLogger1.info("" + obj.entity.adContentIds[arg1] + " ad content impression " + str + "heartbeat: " + rounded + "ms since last heartbeat", obj2);
            const tmpResult1 = tmp(tmp2[18]);
            const obj3 = {};
            const merged3 = Object.assign(obj);
            obj3.adContentId = obj.entity.adContentIds[arg1];
            obj3.adCreativeType = obj.entity.adCreativeType;
            obj3.event = outer2_9.QUEST_CONTENT_VIEW_TIME;
            const obj4 = {};
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj.commonProperties());
            obj3.properties = obj4;
            tmp(tmp2[19]).trackAdContentEvent(obj3);
            const tmpResult2 = tmp(tmp2[19]);
          }
        });
      }
      flag.lastBeatTime = Date.now();
    };
    obj.commonProperties = function commonProperties() {
      obj = { impression_id: obj.id, is_quest_enrollment_blocked: obj.isQuestEnrollmentBlocked };
      const merged = Object.assign(obj(outer1_2[11]).getContentProperties(obj.questContent, obj.questContentPosition, obj.questContentRowIndex));
      return obj;
    };
    obj.clone = function clone(triggeredByStatusChange) {
      obj.stop();
      obj = { questContent: obj.questContent, questContentRowIndex: obj.questContentRowIndex, questContentPosition: obj.questContentPosition, trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, triggeredByStatusChange: triggeredByStatusChange.triggeredByStatusChange, isQuestEnrollmentBlocked: obj.isQuestEnrollmentBlocked, onImpression: obj.onImpressionCallback, sourceQuestContent: obj.sourceQuestContent };
      const merged = Object.assign(obj.entity);
      return new outer1_14(obj);
    };
    obj.start = function start() {
      obj.stop(false);
      obj.lastBeatTime = Date.now();
      obj.heartbeatTimeoutId = window.setInterval(() => closure_0.beat(), 1000 * outer1_6);
      obj.minViewTimeReachedTimeoutId = window.setTimeout(obj.onMinViewTimeReached, 1000 * obj.minViewTimeSeconds);
      obj = { trackGuildAndChannelMetadata: obj.trackGuildAndChannelMetadata, sourceQuestContent: obj.sourceQuestContent };
      let closure_1 = { triggered_by_status_change: obj.triggeredByStatusChange };
      const adContentIds = obj.entity.adContentIds;
      const item = adContentIds.forEach((adCreativeId) => {
        obj = obj(outer2_2[8]);
        let obj1 = closure_0;
        let adMetadataSealed = obj.getAdMetadataSealed(closure_0.sourceQuestContent, adCreativeId);
        if (closure_0.migrateQuestContentLoadedToCaptureAdUserAction) {
          obj = { adCreativeType: null, adCreativeId: null };
          obj[0] = obj1.entity.adCreativeType;
          obj[1] = obj1.entity.adContentIds[arg1];
          let tmpResult = tmp(tmp2[16]);
          obj = { type: null, surfaceId: null, sourceQuestContent: null, impressionId: null, triggeredByStatusChange: null, trackGuildAndChannelMetadata: null, questContentPosition: null, questContentRowIndex: null };
          obj[0] = tmp(tmp2[17]).AdUserActionType.END_CONTENT_LOAD;
          ({ questContent: obj13[1], sourceQuestContent: obj13[2], id: obj13[3], triggeredByStatusChange: obj13[4], trackGuildAndChannelMetadata: obj13[5], questContentPosition: obj13[6], questContentRowIndex: obj13[7] } = obj1);
          const merged = Object.assign(obj);
          tmpResult.captureAdUserAction(obj);
        } else if (closure_0.entity.adCreativeType === tmp4) {
          const quest = outer2_5.getQuest(tmp5);
          tmpResult = tmp(tmp2[18]);
          const questLogger = tmpResult.getQuestLogger();
          let questName;
          if (quest != null) {
            questName = quest.config.messages.questName;
          }
          if (questName == null) {
            questName = tmp5;
          }
          const _HermesInternal = HermesInternal;
          obj1 = { impressionId: null };
          obj1[0] = obj1.id;
          questLogger.info("" + questName + " Quest became visible at " + tmp(tmp2[11]).getQuestContentName(obj1.questContent), obj1);
          const tmpResult1 = tmp(tmp2[11]);
          const obj2 = {};
          const merged1 = Object.assign(closure_0);
          obj2.questId = obj1.entity.adContentIds[arg1];
          obj2.event = outer2_9.QUEST_CONTENT_LOADED;
          const obj3 = {};
          const merged2 = Object.assign(closure_1);
          if (adMetadataSealed == null) {
            adMetadataSealed = null;
          }
          obj3.metadata_sealed = adMetadataSealed;
          const merged3 = Object.assign(obj1.commonProperties());
          const tmpResult2 = tmp(tmp2[19]);
          let id;
          if (quest != null) {
            id = quest.id;
          }
          let adTrafficMetadataSealed = tmp(tmp2[8]).getAdTrafficMetadataSealed(obj1.sourceQuestContent, id);
          if (adTrafficMetadataSealed == null) {
            adTrafficMetadataSealed = null;
          }
          obj3.traffic_metadata_sealed = adTrafficMetadataSealed;
          obj2.properties = obj3;
          tmpResult2.trackQuestEvent(obj2);
          const tmpResult3 = tmp(tmp2[8]);
        } else {
          const questLogger1 = tmp(tmp2[18]).getQuestLogger();
          const tmpResult4 = tmp(tmp2[18]);
          const _HermesInternal2 = HermesInternal;
          const obj4 = { impressionId: null };
          obj4[0] = obj1.id;
          questLogger1.info("" + obj1.entity.adContentIds[arg1] + " ad content became visible at " + tmp(tmp2[11]).getQuestContentName(obj1.questContent), obj4);
          const tmpResult5 = tmp(tmp2[11]);
          const obj5 = {};
          const merged4 = Object.assign(closure_0);
          obj5.adContentId = obj1.entity.adContentIds[arg1];
          obj5.adCreativeType = obj1.entity.adCreativeType;
          obj5.event = outer2_9.QUEST_CONTENT_LOADED;
          const obj6 = {};
          const merged5 = Object.assign(closure_1);
          const merged6 = Object.assign(obj1.commonProperties());
          obj5.properties = obj6;
          tmp(tmp2[19]).trackAdContentEvent(obj5);
          const tmpResult6 = tmp(tmp2[19]);
        }
      });
      obj = outer1_1(outer1_2[21]);
      obj = { name: obj(outer1_2[22]).MetricEvents.QUEST_CONTENT_IMPRESSION, tags: null };
      const items = ["quest_content:" + obj(outer1_2[11]).getQuestContentName(obj.questContent)];
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
    };
    ({ questContent, minViewTimeSeconds, adContentIds, adCreativeType, triggeredByStatusChange, trackGuildAndChannelMetadata, questContentPosition, questContentRowIndex } = global);
    if (undefined === minViewTimeSeconds) {
      minViewTimeSeconds = HEARTBEAT_SECONDS;
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
    QUEST = require("AdCreativeType").AdCreativeType.QUEST;
    obj.entity = { adContentIds, adCreativeType };
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
  let obj = _require(visibleChanged[23]);
  const questStatusChanged = obj.useQuestStatusChanged(visible);
  const ref = focusedChanged.useRef(null);
  const items = [sourceQuestContent];
  const stateFromStores = _require(visibleChanged[24]).useStateFromStores(items, () => null != sourceQuestContent.questEnrollmentBlockedUntil, []);
  visible(visibleChanged[25])(() => () => {
    if (null != ref.current) {
      const current = ref.current;
      current.stop();
    }
  });
  const items1 = [focused, visible, focusedChanged, visibleChanged, , , , , , , , , , , ];
  ({ adContentIds: arr2[4], onImpression: arr2[5], questContent: arr2[6], questContentPosition: arr2[7], questContentRowIndex: arr2[8], trackGuildAndChannelMetadata: arr2[9] } = visible);
  items1[10] = questStatusChanged;
  items1[11] = visible.minViewTimeSeconds;
  items1[12] = stateFromStores;
  items1[13] = sourceQuestContent;
  items1[14] = visible.adCreativeType;
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
      let obj = { isQuestEnrollmentBlocked: null, minViewTimeSeconds: null, onImpression: null, questContent: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null, trackGuildAndChannelMetadata: null, triggeredByStatusChange: null };
      obj[0] = stateFromStores;
      ({ minViewTimeSeconds: obj[1], onImpression: obj[2], questContent: obj[3], questContentPosition: obj[4], questContentRowIndex: obj[5] } = visible);
      obj[6] = sourceQuestContent;
      obj[7] = visible.trackGuildAndChannelMetadata;
      obj[8] = questStatusChanged;
      const adCreativeType = visible.adCreativeType;
      const QUEST = visible(visibleChanged[9]).AdCreativeType.QUEST;
      obj = {};
      const merged = Object.assign(obj);
      ({ adContentIds: obj2.adContentIds, adCreativeType: obj2.adCreativeType } = visible);
      ref.current = new outer1_12(obj);
      const current2 = ref.current;
      current2.start();
    }
  }, items1);
  obj = { value: ref, children: visible.children(visible.reference, ref) };
  return <context.Provider value={ref}>{arg0.children(arg0.reference, ref)}</context.Provider>;
};