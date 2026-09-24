// discord_app/modules/quests/QuestActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import QuestTypes from "QuestTypes.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import SessionHeartbeatScheduler from "../analytics_sessions/SessionHeartbeatScheduler.tsx";
import QuestDataUtils from "utils/QuestDataUtils.tsx";
import AnalyticsActions from "lib/analytics/AnalyticsActions.tsx";
import captureAdUserAction from "../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "experiments/AdAnalyticsInterfaceExperiment.tsx";
import VirtualCurrencyUtils from "../virtual_currency/VirtualCurrencyUtils.tsx";
import QuestDecisionRoundtripTrackerDefault from "QuestDecisionRoundtripTracker.tsx";
import EarnedDecisionRoundtripTrackerDefault from "EarnedDecisionRoundtripTracker.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import ExpandedGuildFolderStore from "../../stores/ExpandedGuildFolderStore.tsx";
import NetworkStore from "../../stores/NetworkStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import QuestStore from "QuestStore.tsx";
import VideoQuestUIStore from "VideoQuestUIStore.tsx";

require = fn;
let closure_16 = async function _manuallyStartConsoleQuest(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_131_1 = flag;
          let body;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[11]).HTTP;
          const request = {
            url: closure_132_14.QUEST_ON_CONSOLE_START(closure_131_0),
            query: null,
            failImmediatelyWhenRateLimited: true,
            rejectWithError: false,
          };
          let tmp48;
          if (closure_131_1) {
            const obj6 = { preview: closure_131_1 };
            tmp48 = obj6;
          }
          request.query = tmp48;
          c7 = 3;
          c8 = 1;
          const obj7 = { value: HTTP.post(request), done: false };
          return obj7;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_5 = closure_5;
        const tmp25 = new closure_132_1(closure_132_2[13])(closure_131_5);
        closure_131_3 = tmp25;
        if (429 === closure_131_3.status) {
          const obj8 = { errorHints: null };
          const obj9 = {
            type: closure_132_0(closure_132_2[10]).QuestConsoleStartErrorLocal.RATE_LIMITED,
            message: null,
            connected_account_id: "",
            connected_account_type: "",
          };
          const intl2 = closure_132_0(closure_132_2[14]).intl;
          obj9.message = intl2.string(closure_132_0(closure_132_2[14]).t.Whhv4w);
          const items = [obj9];
          obj8.errorHints = items;
          c8 = 3;
          const obj10 = { value: obj8, done: true };
          return obj10;
        } else {
          const anyErrorMessage = closure_131_3.getAnyErrorMessage();
          closure_2 = anyErrorMessage;
          if (anyErrorMessage == null) {
            const intl = closure_132_0(closure_132_2[14]).intl;
            closure_2 = intl.string(closure_132_0(closure_132_2[14]).t.xSCvBf);
          }
          closure_131_4 = closure_2;
          const obj11 = { errorHints: null };
          const obj12 = {
            type: closure_132_0(closure_132_2[10]).QuestConsoleStartErrorLocal.GENERIC,
            message: closure_131_4,
            connected_account_id: "",
            connected_account_type: "",
          };
          const items1 = [obj12];
          obj11.errorHints = items1;
          c8 = 3;
          const obj13 = { value: obj11, done: true };
          return obj13;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        body = value.body;
        if (null != body.quest_user_status) {
          const obj15 = { type: "QUESTS_USER_STATUS_UPDATE", user_status: body.quest_user_status };
          closure_132_1(closure_132_2[12]).dispatch(obj15);
          const obj2 = closure_132_1(closure_132_2[12]);
        } else if (null != body.error_hints_v2) {
          if (body.error_hints_v2.length > 0) {
            const obj16 = { errorHints: null };
            const error_hints_v2 = body.error_hints_v2;
            obj16.errorHints = error_hints_v2.slice(0, 5);
            c6 = 0;
            c8 = 3;
            const obj = { value: obj16, done: true };
            return obj;
          }
        }
        c6 = 0;
        const obj17 = { errorHints: [] };
        c8 = 3;
        const obj18 = { value: obj17, done: true };
        return obj18;
      }
    } catch (tmp50) {
      closure_5 = tmp50;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp50;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_17 = async function _manualStopConsoleQuest(arg0) {
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
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: value.QUEST_ON_CONSOLE_STOP(closure_0), rejectWithError: false };
          c2 = 1;
          c1 = 1;
          const obj5 = { value: HTTP.post(obj4), done: false };
          return obj5;
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
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
let closure_18 = async function _resetRecentQuestCompletions() {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: constants.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: false };
          c1 = 1;
          c0 = 1;
          const obj5 = { value: HTTP.del(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
let closure_19 = async function _fetchCurrentQuests() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          dependencyMap = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          let quests2;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          if (!QuestStore.isFetchingCurrentQuests) {
            closure_0 = 0;
            const quests = tmp70.quests;
            const items = [];
            closure_0 = HermesBuiltin.arraySpread(quests.keys(), closure_0);
            closure_129_0 = items;
            DispatcherDefault.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: constants.QUESTS_CURRENT_QUESTS, rejectWithError: false };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        }
      } else {
        if (1 === tmp8) {
          c4 = 0;
          closure_129_14 = closure_3;
          const obj8 = { type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: null };
          const tmp20 = new closure_130_1(closure_130_2[13])(closure_129_14);
          obj8.error = tmp20;
          closure_130_1(closure_130_2[12]).dispatch(obj8);
          const obj2 = closure_130_1(closure_130_2[12]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          quests2 = closure_129_1.body.quests;
          const found = quests2.filter((item) => closure_1_0(8033).isQuestWithKnownConfigVersion(item));
          closure_129_3 = found.map((item) => closure_1_0(8033).questWithUserStatusFromServer(item));
          closure_129_4 = closure_129_1.body.quest_enrollment_blocked_until;
          closure_129_5 = closure_129_1.body.quest_access_suspended_until;
          closure_129_6 = closure_129_3.filter((userStatus) => {
            userStatus = userStatus.userStatus;
            let claimedAt;
            if (userStatus != null) {
              claimedAt = userStatus.claimedAt;
            }
            let tmp2 = null != claimedAt;
            if (!tmp2) {
              tmp2 = userStatus.config.rewardsConfig.platforms.length > 0;
            }
            return tmp2;
          });
          closure_129_7 = quests2.map((id) => id.id);
          closure_129_8 = closure_129_3.map((id) => id.id);
          closure_129_9 = closure_129_7.filter((item) => !closure_1_8.includes(item));
          closure_129_10 = closure_129_6.map((id) => id.id);
          closure_129_11 = closure_129_8.filter((item) => !closure_1_10.includes(item));
          closure_129_12 = closure_129_0.filter((item) => !closure_1_10.includes(item));
          const obj10 = { category: "quests.fetch", message: "fetchCurrentQuests completed", data: null };
          const obj11 = {
            rawCount: closure_129_7.length,
            rawIds: closure_129_7,
            validCount: closure_129_10.length,
            validIds: closure_129_10,
            prevQuestIds: closure_129_0,
            droppedByConfigVersion: closure_129_9,
            droppedByPlatformFilter: closure_129_11,
            removedFromStore: closure_129_12,
          };
          obj10.data = obj11;
          closure_130_1(closure_130_2[16]).addBreadcrumb(obj10);
          const excluded_quests = closure_129_1.body.excluded_quests;
          closure_129_13 = excluded_quests.map((item) => closure_1_0(8033).excludedQuestFromServer(item));
          const obj9 = closure_130_1(closure_130_2[16]);
          const obj13 = {
            type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
            quests: closure_129_6,
            excludedQuests: closure_129_13,
            questEnrollmentBlockedUntil: closure_129_4,
            questAccessSuspendedUntil: closure_129_5,
          };
          closure_130_1(closure_130_2[12]).dispatch(obj13);
          c4 = 0;
          const obj12 = closure_130_1(closure_130_2[12]);
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c6 = 3;
    } catch (tmp31) {
      closure_3 = tmp31;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp31;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_20 = async function _sendHeartbeat(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          ({ questId: closure_130_0, streamKey: closure_130_1, applicationId: closure_130_2, terminal } = closure_0);
          if (terminal === undefined) {
            terminal = false;
          }
          closure_130_3 = terminal;
          ({ executablePath: closure_130_4, executableFingerprint: closure_130_5 } = closure_0);
          closure_130_6 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 1;
          const request = {
            url: closure_131_14.QUESTS_HEARTBEAT(closure_130_0),
            body: null,
            trackedActionData: null,
            rejectWithError: false,
          };
          const obj7 = {
            stream_key: closure_130_1,
            application_id: closure_130_2,
            terminal: closure_130_3,
            executable_path: closure_130_4,
            executable_fingerprint: closure_130_5,
          };
          request.body = obj7;
          const obj8 = { event: closure_131_0(closure_131_2[18]).NetworkActionNames.QUEST_HEARTBEAT, properties: null };
          const obj9 = {
            quest_id: closure_130_0,
            application_id: closure_130_2,
            terminal: closure_130_3,
            is_overlay: false,
            stack_trace: null,
            is_playtime_eligible: true,
          };
          const _Error = Error;
          const error = new Error();
          const stack = error.stack;
          let stack_trace = stack;
          if (stack == null) {
            stack_trace = "";
          }
          obj9.stack_trace = stack_trace;
          obj8.properties = obj9;
          request.trackedActionData = obj8;
          c6 = 3;
          c7 = 1;
          const obj10 = { value: closure_131_1(closure_131_2[17]).post(request), done: false };
          return obj10;
        }
      } else {
        if (2 === tmp7) {
          c5 = 0;
          closure_130_7 = closure_4;
          const obj12 = { type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: null, questId: null, streamKey: null };
          const tmp29 = new closure_131_1(closure_131_2[13])(closure_130_7);
          obj12.error = tmp29;
          obj12.questId = closure_130_0;
          obj12.streamKey = closure_130_1;
          closure_131_1(closure_131_2[12]).dispatch(obj12);
          c7 = 3;
          const obj5 = closure_131_1(closure_131_2[12]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_6 = value;
          const obj13 = { type: "QUESTS_SEND_HEARTBEAT_SUCCESS", userStatus: null, questId: null, streamKey: null };
          const obj = closure_131_1(closure_131_2[12]);
          obj13.userStatus = closure_131_0(closure_131_2[15]).questUserStatusFromServer(closure_130_6.body);
          obj13.questId = closure_130_0;
          obj13.streamKey = closure_130_1;
          obj.dispatch(obj13);
          c5 = 0;
          const obj3 = closure_131_0(closure_131_2[15]);
        }
        c5 = 0;
        c7 = 3;
        const obj14 = { value, done: true };
        return obj14;
      }
    } catch (tmp35) {
      closure_4 = tmp35;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp35;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_22 = async function _enrollInQuest(arg0, arg1) {
  closure_0 = arg0;
  let questContentCTA = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = questId;
            closure_130_1 = undefined;
            if (null != questContentCTA.questContentCTA) {
              questContentCTA = tmp68.questContentCTA;
              if (
                obj27.shouldMigrateToAdAnalyticsInterface(
                  AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                  "enroll_in_quest",
                )
              ) {
                const obj5 = {
                  type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
                  adCreativeType: AdCreativeType.AdCreativeType.QUEST,
                  adCreativeId: questId,
                  questContentCTA,
                  surfaceId: null,
                  sourceQuestContent: null,
                  questContentPosition: null,
                  questContentRowIndex: null,
                };
                ({
                  questContent: obj9.surfaceId,
                  sourceQuestContent: obj9.sourceQuestContent,
                  questContentPosition: obj9.questContentPosition,
                  questContentRowIndex: obj9.questContentRowIndex,
                } = tmp68);
                captureAdUserAction.captureAdUserAction(obj5);
                const tmp73Result = captureAdUserAction;
              } else {
                const obj6 = {
                  questId,
                  questContent: tmp68.questContent,
                  questContentCTA,
                  questContentPosition: null,
                  questContentRowIndex: null,
                  sourceQuestContent: null,
                };
                ({
                  questContentPosition: obj7.questContentPosition,
                  questContentRowIndex: obj7.questContentRowIndex,
                  sourceQuestContent: obj7.sourceQuestContent,
                } = tmp68);
                const result = AnalyticsActions.trackQuestContentClicked(obj6);
                const tmp73Result2 = AnalyticsActions;
              }
              obj27 = AdAnalyticsInterfaceExperiment;
            }
            if (questId === ORBS_INTRO_QUEST_ID) {
              const result1 = VirtualCurrencyUtils.dismissOrbsOnboardingExperience();
            }
            if (enrolling.isEnrolling(questId)) {
              const obj8 = { type: constants.PREVIOUS_IN_FLIGHT_REQUEST };
              c7 = 3;
              const obj12 = { value: obj8, done: true };
              return obj12;
            } else {
              const obj15 = { type: "QUESTS_ENROLL_BEGIN", questId };
              DispatcherDefault.dispatch(obj15);
              c5 = 1;
              const adMetadataSealed = QuestDataUtils.getAdMetadataSealed(tmp68.questContent);
              const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(tmp68.questContent, questId);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_14.QUESTS_ENROLL(questId), body: null, rejectWithError: true };
              const obj16 = { location: tmp68.questContent };
              const merged = Object.assign(QuestDataUtils.getAdDecisionData(questId, tmp68.questContent));
              let tmp47 = null;
              if (null != adMetadataSealed) {
                tmp47 = adMetadataSealed;
              }
              obj16.metadata_sealed = tmp47;
              let tmp48 = null;
              if (null != adTrafficMetadataSealed) {
                tmp48 = adTrafficMetadataSealed;
              }
              obj16.traffic_metadata_sealed = tmp48;
              request.body = obj16;
              c6 = 2;
              c7 = 1;
              const obj18 = { value: HTTP.post(request), done: false };
              return obj18;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          const obj19 = { type: "QUESTS_ENROLL_FAILURE", questId: closure_130_0 };
          closure_131_1(closure_131_2[12]).dispatch(obj19);
          const obj20 = { type: null };
          let CAPTCHA_FAILED = closure_131_21;
          if (
            (function isCaptchaError(status) {
              let tmp = status instanceof closure_1_0(closure_1_2[19]).CaptchaCancelError;
              if (!tmp) {
                let tmp3 = null != status && typeof status === "object";
                if (tmp3) {
                  let tmp4 = 400 === status.status;
                  if (tmp4) {
                    const body = status.body;
                    let captcha_key;
                    if (body != null) {
                      captcha_key = body.captcha_key;
                    }
                    tmp4 = null != captcha_key;
                  }
                  if (!tmp4) {
                    let tmp6 = null != status.captchaFields;
                    if (tmp6) {
                      const _Object = Object;
                      tmp6 = Object.keys(status.captchaFields).length > 0;
                    }
                    tmp4 = tmp6;
                  }
                  if (!tmp4) {
                    const fields = status.fields;
                    let captcha_key1;
                    if (fields != null) {
                      captcha_key1 = fields.captcha_key;
                    }
                    tmp4 = null != captcha_key1;
                  }
                  tmp3 = tmp4;
                }
                tmp = tmp3;
              }
              return tmp;
            })(closure_130_2)
          ) {
            CAPTCHA_FAILED = CAPTCHA_FAILED.CAPTCHA_FAILED;
            obj20.type = CAPTCHA_FAILED;
          } else {
            obj20.type = CAPTCHA_FAILED.UNKNOWN_ERROR;
          }
          c7 = 3;
          const obj3 = closure_131_1(closure_131_2[12]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj21 = { value, done: true };
          return obj21;
        } else {
          closure_130_1 = value;
          const obj22 = { type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: null };
          const obj23 = closure_131_1(closure_131_2[12]);
          obj22.enrolledQuestUserStatus = closure_131_0(closure_131_2[15]).questUserStatusFromServer(
            closure_130_1.body,
          );
          obj23.dispatch(obj22);
          const obj24 = { type: closure_131_21.SUCCESS };
          c5 = 0;
          c7 = 3;
          const obj = { value: obj24, done: true };
          return obj;
        }
      } catch (tmp50) {
        closure_4 = tmp50;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp50;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_23 = async function _claimQuestReward() {
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = questId;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            if (claimingReward.isClaimingReward(questId)) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const obj5 = { type: "QUESTS_CLAIM_REWARD_BEGIN", questId };
              DispatcherDefault.dispatch(obj5);
              c6 = 1;
              const adMetadataSealed = QuestDataUtils.getAdMetadataSealed(_location);
              const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(_location, questId);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_14.QUESTS_CLAIM_REWARD(questId), body: null, rejectWithError: false };
              const obj7 = { platform, location: _location };
              const merged = Object.assign(QuestDataUtils.getAdDecisionData(questId, _location));
              let tmp56 = null;
              if (null != adMetadataSealed) {
                tmp56 = adMetadataSealed;
              }
              obj7.metadata_sealed = tmp56;
              let tmp57 = null;
              if (null != adTrafficMetadataSealed) {
                tmp57 = adTrafficMetadataSealed;
              }
              obj7.traffic_metadata_sealed = tmp57;
              request.body = obj7;
              c7 = 2;
              c8 = 1;
              const obj9 = { value: HTTP.post(request), done: false };
              return obj9;
            }
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_3 = closure_5;
          const obj12 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: null, questId: null };
          const tmp35 = new closure_132_1(closure_132_2[13])(closure_131_3);
          obj12.error = tmp35;
          obj12.questId = closure_131_0;
          closure_132_1(closure_132_2[12]).dispatch(obj12);
          throw closure_131_3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_131_1 = value;
          closure_131_2 = closure_132_0(closure_132_2[15]).questsEntitlementsFromServer(closure_131_1.body);
          if (0 === closure_131_2.errors.length) {
            const obj15 = { type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: closure_131_0, entitlements: closure_131_2 };
            closure_132_1(closure_132_2[12]).dispatch(obj15);
            const obj3 = closure_132_1(closure_132_2[12]);
          } else {
            const obj16 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: closure_131_2.errors, questId: closure_131_0 };
            closure_132_1(closure_132_2[12]).dispatch(obj16);
            const obj = closure_132_1(closure_132_2[12]);
          }
          c6 = 0;
          c8 = 3;
          const obj18 = closure_132_0(closure_132_2[15]);
        }
      } catch (tmp58) {
        closure_5 = tmp58;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp58;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_24 = async function _fetchQuestRewardCode() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = questId;
            closure_129_1 = undefined;
            if (fetchingRewardCode.isFetchingRewardCode(questId)) {
              c6 = 3;
            } else {
              const obj6 = { type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId };
              DispatcherDefault.dispatch(obj6);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj8 = { url: closure_2_14.QUESTS_REWARD_CODE(questId), rejectWithError: false };
              c5 = 2;
              c6 = 1;
              const obj9 = { value: HTTP.get(obj8), done: false };
              return obj9;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          const obj10 = { type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: null, questId: null };
          const tmp28 = new closure_130_1(closure_130_2[13])(closure_129_2);
          obj10.error = tmp28;
          obj10.questId = closure_129_0;
          closure_130_1(closure_130_2[12]).dispatch(obj10);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          const obj11 = { type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: closure_129_0, rewardCode: null };
          const obj = closure_130_1(closure_130_2[12]);
          obj11.rewardCode = closure_130_0(closure_130_2[15]).questsRewardCodeFromServer(closure_129_1.body);
          obj.dispatch(obj11);
          c4 = 0;
          const obj3 = closure_130_0(closure_130_2[15]);
        }
        c4 = 0;
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } catch (tmp39) {
        closure_3 = tmp39;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp39;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_25 = async function _dismissQuestContent() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = questId;
            closure_130_1 = content;
            closure_130_2 = undefined;
            const isDismissingContentResult = dismissingContent.isDismissingContent(questId);
            if (!isDismissingContentResult) {
              if (obj18.isDismissible(content)) {
                const obj5 = { type: "QUESTS_DISMISS_CONTENT_BEGIN", questId, content };
                DispatcherDefault.dispatch(obj5);
                c5 = 1;
                const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(content, questId);
                const HTTP = HTTPUtils.HTTP;
                const request = {
                  url: closure_2_14.QUESTS_DISMISS_CONTENT(questId, content),
                  body: null,
                  rejectWithError: false,
                };
                const obj7 = {};
                const merged = Object.assign(QuestDataUtils.getAdDecisionData(questId, content));
                let tmp44 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp44 = adTrafficMetadataSealed;
                }
                obj7.traffic_metadata_sealed = tmp44;
                request.body = obj7;
                c6 = 2;
                c7 = 1;
                const obj9 = { value: HTTP.post(request), done: false };
                return obj9;
              }
            }
            obj18 = QuestDataUtils;
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_3 = closure_4;
            const obj10 = { type: "QUESTS_DISMISS_CONTENT_FAILURE", error: null, questId: null };
            const tmp27 = new closure_131_1(closure_131_2[13])(closure_130_3);
            obj10.error = tmp27;
            obj10.questId = closure_130_0;
            closure_131_1(closure_131_2[12]).dispatch(obj10);
            const obj4 = closure_131_1(closure_131_2[12]);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_2 = value;
            const obj12 = { type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: null };
            const obj15 = closure_131_1(closure_131_2[12]);
            obj12.dismissedQuestUserStatus = closure_131_0(closure_131_2[15]).questUserStatusFromServer(
              closure_130_2.body,
            );
            obj15.dispatch(obj12);
            if (closure_131_15.has(closure_130_1)) {
              const obj13 = { quest_id: closure_130_0 };
              closure_131_0(closure_131_2[27]).fireSurveyAction(
                closure_131_0(closure_131_2[28]).SurveyActionTypes.QUEST_DISMISSED,
                obj13,
              );
              const obj = closure_131_0(closure_131_2[27]);
            }
            c5 = 0;
            const obj17 = closure_131_0(closure_131_2[15]);
          }
          c5 = 0;
          c7 = 3;
          const obj14 = { value, done: true };
          return obj14;
        }
        c7 = 3;
      } catch (tmp45) {
        closure_4 = tmp45;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp45;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_26 = async function _completeQuestPreview(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let num7 = closure_1;
          if (closure_1 === undefined) {
            num7 = 1;
          }
          closure_130_1 = num7;
          closure_130_2 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[11]).HTTP;
          const request = {
            url: closure_131_14.QUESTS_PREVIEW_COMPLETE(closure_130_0),
            body: null,
            rejectWithError: false,
          };
          const obj7 = { percent: closure_130_1 };
          request.body = obj7;
          c6 = 3;
          c7 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else {
        if (2 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          const obj9 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
          const tmp27 = new closure_131_1(closure_131_2[13])(closure_130_3);
          obj9.error = tmp27;
          obj9.questId = closure_130_0;
          closure_131_1(closure_131_2[12]).dispatch(obj9);
          c7 = 3;
          const obj5 = closure_131_1(closure_131_2[12]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_2 = value;
          const obj10 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
          const obj = closure_131_1(closure_131_2[12]);
          obj10.previewQuestUserStatus = closure_131_0(closure_131_2[15]).questUserStatusFromServer(closure_130_2.body);
          obj.dispatch(obj10);
          c5 = 0;
          const obj3 = closure_131_0(closure_131_2[15]);
        }
        c5 = 0;
        c7 = 3;
        const obj11 = { value, done: true };
        return obj11;
      }
    } catch (tmp32) {
      closure_4 = tmp32;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp32;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_27 = async function _resetQuestPreviewStatus(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: value.QUESTS_PREVIEW_STATUS(closure_0), body: {}, rejectWithError: false };
  await HTTP.del(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_2 = closure_3;
    const obj7 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
    obj7.error = new closure_130_1(closure_130_2[13])(closure_129_2);
    obj7.questId = closure_129_0;
    closure_130_1(closure_130_2[12]).dispatch(obj7);
    c6 = 3;
    closure_130_1(closure_130_2[12]);
    new closure_130_1(closure_130_2[13])(closure_129_2);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    const obj8 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
    obj8.previewQuestUserStatus = closure_130_0(closure_130_2[15]).questUserStatusFromServer(closure_129_1.body);
    closure_130_1(closure_130_2[12]).dispatch(obj8);
    c4 = 0;
    closure_130_0(closure_130_2[15]);
    closure_130_1(closure_130_2[12]);
  }
  return value;
};
let closure_28 = async function _resetQuestDismissibilityStatus(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  DispatcherDefault.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: value.QUESTS_PREVIEW_DISMISSIBILITY(closure_0), body: {}, rejectWithError: false };
  await HTTP.del(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_2 = closure_3;
    const obj7 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
    obj7.error = new closure_130_1(closure_130_2[13])(closure_129_2);
    obj7.questId = closure_129_0;
    closure_130_1(closure_130_2[12]).dispatch(obj7);
    c6 = 3;
    closure_130_1(closure_130_2[12]);
    new closure_130_1(closure_130_2[13])(closure_129_2);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    const obj8 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
    obj8.previewQuestUserStatus = closure_130_0(closure_130_2[15]).questUserStatusFromServer(closure_129_1.body);
    closure_130_1(closure_130_2[12]).dispatch(obj8);
    c4 = 0;
    closure_130_0(closure_130_2[15]);
    closure_130_1(closure_130_2[12]);
  }
  return value;
};
let closure_29 = async function _fetchClaimedQuests() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          if (!QuestStore.isFetchingClaimedQuests) {
            DispatcherDefault.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.QUESTS_CLAIMED_QUESTS, rejectWithError: false };
            c4 = 2;
            c5 = 1;
            const obj7 = { value: HTTP.get(obj5), done: false };
            return obj7;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = closure_2;
          const obj8 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: null };
          const tmp25 = new closure_129_1(closure_129_2[13])(closure_128_1);
          obj8.error = tmp25;
          closure_129_1(closure_129_2[12]).dispatch(obj8);
          const obj4 = closure_129_1(closure_129_2[12]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const quests = value.body.quests;
          closure_128_0 = quests.map((item) =>
            closure_1_0(closure_1_2[15]).getClaimedQuestWithUserStatusFromServer(item),
          );
          const obj9 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: closure_128_0 };
          closure_129_1(closure_129_2[12]).dispatch(obj9);
          c3 = 0;
          const obj = closure_129_1(closure_129_2[12]);
        }
        c3 = 0;
        c5 = 3;
        const obj10 = { value, done: true };
        return obj10;
      }
      c5 = 3;
    } catch (tmp34) {
      closure_2 = tmp34;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp34;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_30 = async function _fetchQuestToDeliver() {
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            closure_131_0 = placement;
            closure_131_1 = closure_1;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            let config;
            closure_131_6 = undefined;
            closure_131_7 = undefined;
            let guildsTree;
            closure_131_9 = undefined;
            closure_131_10 = undefined;
            closure_131_11 = undefined;
            closure_131_12 = undefined;
            let body;
            closure_131_14 = undefined;
            closure_131_15 = undefined;
            closure_131_16 = undefined;
            let quest;
            const _Date = Date;
            closure_131_2 = Date.now();
            const result = QuestDecisionRoundtripTrackerDefault.recordQuestRequestAttempt(
              "/quests/decision",
              closure_1,
              placement,
            );
            const obj6 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement };
            DispatcherDefault.dispatch(obj6);
            c6 = 1;
            c7 = 2;
            c8 = 1;
            const obj7 = { value: SessionHeartbeatScheduler.getSession(), done: false };
            return obj7;
          }
        } else {
          if (1 === tmp8) {
            c6 = 0;
            closure_131_18 = closure_5;
            const obj9 = { wasSuccessful: false, currentFetchedAt: closure_131_2 };
            const result1 = closure_132_1(closure_132_2[29]).recordQuestRequestApiResponse("/quests/decision", obj9);
            const obj22 = closure_132_1(closure_132_2[29]);
            const obj12 = {};
            const merged = Object.assign(closure_132_1(closure_132_2[38])());
            let message;
            if (closure_131_18 != null) {
              message = closure_131_18.message;
            }
            reason = message;
            if (message == null) {
              reason = null;
            }
            obj12.reason = reason;
            const obj26 = new closure_132_1(closure_132_2[13])(closure_131_18);
            obj12.api_error = obj26.getAnyErrorMessage();
            obj12.caller_source = closure_131_1;
            closure_132_1(closure_132_2[37]).track(closure_132_13.QUEST_DECISION_ROUNDTRIP_ERROR, obj12);
            const obj24 = closure_132_1(closure_132_2[37]);
            const obj13 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: null, placement: null };
            const tmp188 = new closure_132_1(closure_132_2[13])(closure_131_18);
            obj13.error = tmp188;
            obj13.placement = closure_131_0;
            closure_132_1(closure_132_2[12]).dispatch(obj13);
            c8 = 3;
            const obj27 = closure_132_1(closure_132_2[12]);
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              closure_131_3 = value;
              c7 = 3;
              c8 = 1;
              const obj15 = { value: closure_132_0(closure_132_2[31]).getOrRefreshAdSession(), done: false };
              return obj15;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              closure_131_4 = value;
              const LessPersonalizedAdsExperiment = closure_132_0(closure_132_2[32]).LessPersonalizedAdsExperiment;
              config = LessPersonalizedAdsExperiment.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" });
              closure_131_6 = closure_132_5();
              if (null != closure_131_6) {
                let items = closure_131_6();
              } else {
                items = [];
              }
              closure_131_7 = items;
              guildsTree = closure_132_8.getGuildsTree();
              const found = closure_131_7.filter((item) => {
                if (obj.isPseudoGuildId(item)) {
                  return false;
                } else {
                  node = node.getNode(item);
                  let parentId;
                  if (node != null) {
                    parentId = node.parentId;
                  }
                  let isFolderExpandedResult = null == parentId;
                  if (!isFolderExpandedResult) {
                    isFolderExpandedResult = folderExpanded.isFolderExpanded(node.parentId);
                  }
                  return isFolderExpandedResult;
                }
                obj = closure_0(c2[33]);
              });
              closure_131_9 = found.slice(0, 50);
              let tmp118;
              if (config.enabled) {
                tmp118 = closure_131_9;
              }
              closure_131_10 = tmp118;
              const _URLSearchParams = URLSearchParams;
              const obj17 = { placement: null };
              const _String3 = String;
              obj17.placement = String(closure_131_0);
              const uRLSearchParams = new URLSearchParams(obj17);
              closure_131_11 = uRLSearchParams;
              let uuid;
              if (closure_131_3 != null) {
                uuid = closure_131_3.uuid;
              }
              if (null != uuid) {
                closure_131_11.append("client_heartbeat_session_id", closure_131_3.uuid);
              }
              if (null != closure_131_4.uuid) {
                closure_131_11.append("client_ad_session_id", closure_131_4.uuid);
              }
              if (null != closure_131_10) {
                const item = closure_131_10.forEach((item) => closure_1_11.append("visible_guild_ids", item));
              }
              const HTTP = closure_132_0(closure_132_2[11]).HTTP;
              const obj18 = { url: null, rejectWithError: false, context: null };
              const _HermesInternal = HermesInternal;
              obj18.url = "" + closure_132_14.QUEST_FETCH_QUEST_TO_DELIVER + "?" + closure_131_11.toString();
              const obj20 = { connection_type: closure_132_7.getType() };
              obj18.context = obj20;
              c7 = 4;
              c8 = 1;
              const obj21 = { value: HTTP.get(obj18), done: false };
              return obj21;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj23 = { value, done: true };
            return obj23;
          } else {
            body = value.body;
            const creative = body.creative;
            let creative_type1;
            if (creative != null) {
              creative_type1 = creative.creative_type;
            }
            if (creative_type1 !== closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY) {
              let creative1 = body.creative;
            } else {
              const BountiesMobileQuestBarExperiment = closure_132_0(
                closure_132_2[34],
              ).BountiesMobileQuestBarExperiment;
              creative1 = null;
            }
            closure_131_14 = creative1;
            closure_131_15 = null;
            if (null != closure_131_14) {
              const creative_type = closure_131_14.creative_type;
              if (closure_132_0(closure_132_2[23]).AdCreativeType.QUEST === creative_type) {
                closure_131_12 = closure_132_0(closure_132_2[15]).questConfigFromServer(
                  closure_131_14.creative_content,
                );
                const obj25 = {
                  type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST,
                  questId: closure_131_12.id,
                };
                closure_131_15 = obj25;
                const obj3 = closure_132_0(closure_132_2[15]);
              } else if (closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY === creative_type) {
                closure_131_16 = closure_132_0(closure_132_2[35]).bountyFromServer(closure_131_14.creative_content);
                const obj28 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY, bounty: closure_131_16 };
                closure_131_15 = obj28;
                let obj = closure_132_0(closure_132_2[35]);
              } else {
                const NO_FILL = closure_132_0(closure_132_2[23]).AdCreativeType.NO_FILL;
              }
            } else {
              quest = body.quest;
              if (null != quest) {
                closure_131_12 = closure_132_0(closure_132_2[15]).questConfigFromServer(quest);
                const obj29 = {
                  type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST,
                  questId: closure_131_12.id,
                };
                closure_131_15 = obj29;
                const obj32 = closure_132_0(closure_132_2[15]);
              }
            }
            const obj30 = {
              type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
              quest: closure_131_12,
              creative: closure_131_15,
              isNoFill: null,
              adDecisionData: null,
              metadataSealed: null,
              trafficMetadataSealed: null,
              provenanceMetadataSealed: null,
              adContext: null,
              responseTtlSeconds: null,
              placement: null,
              fetchedAt: null,
            };
            let creative_type2;
            if (closure_131_14 != null) {
              creative_type2 = closure_131_14.creative_type;
            }
            obj30.isNoFill = creative_type2 === closure_132_0(closure_132_2[23]).AdCreativeType.NO_FILL;
            const ad_identifiers = body.ad_identifiers;
            let ad_id;
            if (ad_identifiers != null) {
              ad_id = ad_identifiers.ad_id;
            }
            const obj31 = {
              ad_id,
              adset_id: null,
              ad_set_id: null,
              campaign_id: null,
              creative_id: null,
              creative_type: null,
              decision_id: null,
              is_targeted: null,
            };
            const ad_identifiers2 = body.ad_identifiers;
            let adset_id;
            if (ad_identifiers2 != null) {
              adset_id = ad_identifiers2.adset_id;
            }
            obj31.adset_id = adset_id;
            const ad_identifiers3 = body.ad_identifiers;
            let ad_set_id;
            if (ad_identifiers3 != null) {
              ad_set_id = ad_identifiers3.ad_set_id;
            }
            obj31.ad_set_id = ad_set_id;
            const ad_identifiers4 = body.ad_identifiers;
            let campaign_id;
            if (ad_identifiers4 != null) {
              campaign_id = ad_identifiers4.campaign_id;
            }
            obj31.campaign_id = campaign_id;
            const ad_identifiers5 = body.ad_identifiers;
            let creative_id;
            if (ad_identifiers5 != null) {
              creative_id = ad_identifiers5.creative_id;
            }
            obj31.creative_id = creative_id;
            const ad_identifiers6 = body.ad_identifiers;
            let creative_type3;
            if (ad_identifiers6 != null) {
              creative_type3 = ad_identifiers6.creative_type;
            }
            obj31.creative_type = creative_type3;
            obj31.decision_id = body.request_id;
            obj31.is_targeted = null != body.ad_identifiers;
            obj30.adDecisionData = obj31;
            obj30.metadataSealed = body.metadata_sealed;
            obj30.trafficMetadataSealed = body.traffic_metadata_sealed;
            obj30.provenanceMetadataSealed = body.provenance_metadata_sealed;
            obj30.adContext = body.ad_context;
            obj30.responseTtlSeconds = body.response_ttl_seconds;
            obj30.placement = closure_131_0;
            obj30.fetchedAt = closure_131_2;
            closure_132_1(closure_132_2[12]).dispatch(obj30);
            const obj5 = closure_132_1(closure_132_2[12]);
            const obj33 = { wasSuccessful: true, adRequestId: null, currentCreative: null, currentFetchedAt: null };
            const _String = String;
            obj33.adRequestId = String(body.request_id);
            obj33.currentCreative = closure_131_15;
            obj33.currentFetchedAt = closure_131_2;
            const result2 = closure_132_1(closure_132_2[29]).recordQuestRequestApiResponse("/quests/decision", obj33);
            if (null != closure_131_12) {
              if (closure_131_0 === closure_132_0(closure_132_2[10]).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                closure_132_1(closure_132_2[36]).startTracking(closure_131_12.id);
                const obj10 = closure_132_1(closure_132_2[36]);
              }
              const obj36 = {};
              const merged1 = Object.assign(closure_132_1(closure_132_2[38])());
              obj36.quest_id = closure_131_12.id;
              obj36.caller_source = closure_131_1;
              const _String2 = String;
              obj36.ad_request_id = String(body.request_id);
              closure_132_1(closure_132_2[37]).track(closure_132_13.QUEST_DECISION_RECEIVED, obj36);
              c6 = 0;
              const obj11 = closure_132_1(closure_132_2[37]);
            }
            const obj8 = closure_132_1(closure_132_2[29]);
          }
          c6 = 0;
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp192) {
        closure_5 = tmp192;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp192;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_31 = async function _fetchEarnedQuestToDeliver(arg0) {
  closure_0 = arg0;
  closure_2 = arg2;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = content;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            let quests;
            let response_ttl_seconds;
            closure_132_9 = undefined;
            if (!fetchingEarnedQuestToDeliverByPlacement.isFetchingEarnedQuestToDeliverByPlacement(content)) {
              const earnedQuestForPlacement = fetchingEarnedQuestToDeliverByPlacement.earnedQuestForPlacement;
              value = earnedQuestForPlacement.get(content);
              let prop;
              if (value != null) {
                prop = value.earnedDecisionByQuestId;
              }
              closure_132_1 = prop;
              const found = closure_0.filter((item) => {
                value = undefined;
                if (content != null) {
                  value = content.get(item);
                }
                return !closure_0(8022).earnedDecisionIsValid(value);
              });
              closure_132_2 = found;
              if (0 !== found.length) {
                const _Date = Date;
                closure_132_3 = Date.now();
                const result = EarnedDecisionRoundtripTrackerDefault.recordEarnedRequestAttempt(content, dependencyMap);
                const obj4 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content };
                DispatcherDefault.dispatch(obj4);
                c7 = 1;
                c8 = 2;
                c9 = 1;
                const obj5 = { value: SessionHeartbeatScheduler.getSession(), done: false };
                return obj5;
              }
            }
          }
        } else {
          if (1 === tmp8) {
            c7 = 0;
            closure_132_10 = closure_6;
            const obj7 = { wasSuccessful: false, fetchedAt: closure_132_3 };
            const result1 = closure_133_1(closure_133_2[39]).recordEarnedRequestApiResponse(closure_132_0, obj7);
            const obj6 = closure_133_1(closure_133_2[39]);
            const obj9 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: null, content: null };
            const tmp30 = new closure_133_1(closure_133_2[13])(closure_132_10);
            obj9.error = tmp30;
            obj9.content = closure_132_0;
            closure_133_1(closure_133_2[12]).dispatch(obj9);
            const obj8 = closure_133_1(closure_133_2[12]);
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_132_4 = value;
              closure_132_5 = closure_132_2.join(",");
              const HTTP = closure_133_0(closure_133_2[11]).HTTP;
              let uuid;
              if (closure_132_4 != null) {
                uuid = closure_132_4.uuid;
              }
              const obj11 = {
                url: closure_133_14.QUEST_EARNED_DECISION(closure_132_5, closure_132_0, uuid),
                rejectWithError: false,
              };
              c8 = 3;
              c9 = 1;
              const obj12 = { value: HTTP.get(obj11), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_6 = value;
            quests = closure_132_6.body.quests;
            response_ttl_seconds = closure_132_6.body.response_ttl_seconds;
            const _Map = Map;
            const map = new Map(
              closure_132_2.map((item) => {
                let tmp;
                if (closure_1_7 != null) {
                  tmp = closure_1_7[item];
                }
                const items = [item];
                let tmp2 = null;
                if (null != tmp) {
                  tmp2 = null;
                  if (obj.isQuestWithKnownConfigVersion(tmp)) {
                    tmp2 = tmp;
                  }
                  obj = closure_0(8033);
                }
                items[1] = tmp2;
                return items;
              }),
            );
            closure_132_9 = map;
            const obj14 = {
              type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
              serverQuests: closure_132_9,
              content: closure_132_0,
              fetchedAt: closure_132_3,
              responseTtlSeconds: response_ttl_seconds,
            };
            closure_133_1(closure_133_2[12]).dispatch(obj14);
            const obj13 = closure_133_1(closure_133_2[12]);
            const request_id = closure_132_6.body.request_id;
            requestId = request_id;
            if (request_id == null) {
              requestId = null;
            }
            let obj = { wasSuccessful: true, requestId, fetchedAt: closure_132_3 };
            const result2 = closure_133_1(closure_133_2[39]).recordEarnedRequestApiResponse(closure_132_0, obj);
            c7 = 0;
            const obj15 = closure_133_1(closure_133_2[39]);
          }
          c7 = 0;
          c9 = 3;
          const obj18 = { value, done: true };
          return obj18;
        }
        c9 = 3;
      } catch (tmp36) {
        closure_6 = tmp36;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp36;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
let closure_32 = async function _updateVideoProgress() {
  c4 = 0;
  c3 = 0;
  return (async (arg0, value) => {
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
          } else {
            const request = {
              url: closure_2_14.QUESTS_VIDEO_PROGRESS(quest_id),
              body: null,
              trackedActionData: null,
              rejectWithError: false,
            };
            const obj4 = { timestamp };
            request.body = obj4;
            const obj6 = {
              event: discord_common_AnalyticsUtils.NetworkActionNames.QUEST_VIDEO_PROGRESS,
              properties: null,
            };
            const obj7 = { quest_id, timestamp_sec: timestamp.toString(), stack_trace: null };
            const _Error = Error;
            const error = new Error();
            const stack = error.stack;
            stack_trace = stack;
            if (stack == null) {
              stack_trace = "";
            }
            obj7.stack_trace = stack_trace;
            obj6.properties = obj7;
            request.trackedActionData = obj6;
            c4 = 1;
            c3 = 1;
            const obj8 = { value: TrackedHTTPUtilsDefault.post(request), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c3 = tmp;
        throw tmp6;
      }
    }
  })();
};
let closure_33 = async function _fetchVideoTranscript(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_130_1 = flag;
          let questAsset;
          closure_130_3 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj15 = closure_131_0(closure_131_2[40]);
            questAsset = obj15.getQuestAsset(
              closure_130_0,
              closure_131_0(closure_131_2[40]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT,
              undefined,
              closure_130_1,
            );
            if (null != questAsset) {
              const state = closure_131_10.getState();
              const obj4 = { questId: closure_130_0.id, fetchStatus: closure_131_11.FETCHING };
              state.setTranscriptAsset(obj4);
              c5 = 1;
              const HTTP = closure_131_0(closure_131_2[11]).HTTP;
              const obj5 = { url: questAsset.url, rejectWithError: true };
              c6 = 3;
              c7 = 1;
              const obj6 = { value: HTTP.get(obj5), done: false };
              return obj6;
            } else {
              const state1 = closure_131_10.getState();
              const obj7 = { questId: closure_130_0.id, fetchStatus: closure_131_11.FAILURE };
              state1.setTranscriptAsset(obj7);
            }
          }
        } else {
          if (2 === tmp7) {
            c5 = 0;
            const state2 = closure_131_10.getState();
            const obj8 = { questId: closure_130_0.id, fetchStatus: closure_131_11.FAILURE };
            state2.setTranscriptAsset(obj8);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_3 = value;
            const state3 = closure_131_10.getState();
            const obj9 = {
              questId: closure_130_0.id,
              fetchStatus: closure_131_11.SUCCESS,
              text: closure_130_3.text,
              url: questAsset.url,
            };
            state3.setTranscriptAsset(obj9);
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
        c7 = 3;
      }
    } catch (tmp41) {
      closure_4 = tmp41;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp41;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_34 = async function _fetchQuest() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_14.QUEST(closure_0), rejectWithError: false });
  closure_129_0 = value;
  return closure_130_0(closure_130_2[15]).questConfigFromServer(closure_129_0.body);
};
let closure_35 = async function _fetchQuestPreview() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = questId;
            closure_129_1 = undefined;
            if (fetchingQuestPreview.isFetchingQuestPreview(questId)) {
              c6 = 3;
            } else {
              const obj6 = { type: "QUESTS_FETCH_PREVIEW_BEGIN", questId };
              DispatcherDefault.dispatch(obj6);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj8 = { url: closure_2_14.QUEST_PREVIEW(questId), rejectWithError: false };
              c5 = 2;
              c6 = 1;
              const obj9 = { value: HTTP.get(obj8), done: false };
              return obj9;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          const obj10 = { type: "QUESTS_FETCH_PREVIEW_FAILURE", error: null, questId: null };
          const tmp28 = new closure_130_1(closure_130_2[13])(closure_129_2);
          obj10.error = tmp28;
          obj10.questId = closure_129_0;
          closure_130_1(closure_130_2[12]).dispatch(obj10);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          const obj11 = { type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: closure_129_0, quest: null };
          const obj = closure_130_1(closure_130_2[12]);
          obj11.quest = closure_130_0(closure_130_2[15]).questWithUserStatusFromServer(closure_129_1.body);
          obj.dispatch(obj11);
          c4 = 0;
          const obj3 = closure_130_0(closure_130_2[15]);
        }
        c4 = 0;
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } catch (tmp39) {
        closure_3 = tmp39;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp39;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_37 = async function _fetchQuestHomeHero() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          let body;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          const QUEST_HOME_BANNER_DESKTOP = QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
          closure_130_0 = QUEST_HOME_BANNER_DESKTOP;
          if (!fetchingAdToDeliverByPlacement.isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
            const lastFetchedQuestHomeHero = fetchingAdToDeliverByPlacement.getLastFetchedQuestHomeHero();
            if (null != lastFetchedQuestHomeHero) {
              const _Date = Date;
            }
            const _Date2 = Date;
            closure_130_1 = Date.now();
            const obj5 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: QUEST_HOME_BANNER_DESKTOP };
            DispatcherDefault.dispatch(obj5);
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: SessionHeartbeatScheduler.getSession(), done: false };
            return obj6;
          }
          c7 = 3;
        }
      } else if (1 === tmp8) {
        c5 = 0;
        closure_130_9 = closure_4;
        const obj7 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
        const tmp91 = new closure_131_1(closure_131_2[13])(closure_130_9);
        obj7.error = tmp91;
        obj7.placement = closure_130_0;
        closure_131_1(closure_131_2[12]).dispatch(obj7);
        throw closure_130_9;
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_2 = value;
          c6 = 3;
          c7 = 1;
          const obj9 = { value: closure_131_0(closure_131_2[31]).getOrRefreshAdSession(), done: false };
          return obj9;
        }
      } else if (3 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_130_3 = value;
          const _URLSearchParams = URLSearchParams;
          const obj12 = { placement: null, num_decisions_requested: "1" };
          const _String = String;
          obj12.placement = String(closure_130_0);
          const uRLSearchParams = new URLSearchParams(obj12);
          closure_130_4 = uRLSearchParams;
          let uuid;
          if (closure_130_2 != null) {
            uuid = closure_130_2.uuid;
          }
          if (null != uuid) {
            closure_130_4.append("client_heartbeat_session_id", closure_130_2.uuid);
          }
          if (null != closure_130_3.uuid) {
            closure_130_4.append("client_ad_session_id", closure_130_3.uuid);
          }
          const HTTP = closure_131_0(closure_131_2[11]).HTTP;
          const obj14 = { url: null, rejectWithError: false, context: null };
          const _HermesInternal = HermesInternal;
          obj14.url = "" + closure_131_14.QUESTS_GET_DECISIONS + "?" + closure_130_4.toString();
          const obj16 = { connection_type: closure_131_7.getType() };
          obj14.context = obj16;
          c6 = 4;
          c7 = 1;
          const obj18 = { value: HTTP.get(obj14), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        body = value.body;
        const decisions = body.decisions;
        let first;
        if (decisions != null) {
          first = decisions[0];
        }
        c0 = first;
        if (first == null) {
          c0 = null;
        }
        closure_130_6 = c0;
        let creative;
        if (closure_130_6 != null) {
          creative = closure_130_6.creative;
        }
        c1 = creative;
        if (creative == null) {
          c1 = null;
        }
        closure_130_7 = c1;
        closure_130_8 = null;
        let tmp16 = null != closure_130_7;
        if (tmp16) {
          tmp16 = closure_130_7.creative_type === closure_131_0(closure_131_2[23]).AdCreativeType.QUEST_HOME_HERO;
        }
        if (tmp16) {
          closure_130_8 = closure_131_0(closure_131_2[42]).questHomeHeroFromServer(closure_130_7);
          const obj = closure_131_0(closure_131_2[42]);
        }
        const obj19 = {
          type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
          questHomeHero: closure_130_8,
          adDecisionData: null,
          metadataSealed: null,
          trafficMetadataSealed: null,
          provenanceMetadataSealed: null,
          adContext: null,
          responseTtlSeconds: null,
          placement: null,
          fetchedAt: null,
        };
        let ad_id;
        if (closure_130_6 != null) {
          const ad_identifiers = closure_130_6.ad_identifiers;
          if (ad_identifiers != null) {
            ad_id = ad_identifiers.ad_id;
          }
        }
        const obj20 = {
          ad_id,
          ad_set_id: null,
          campaign_id: null,
          creative_id: null,
          creative_type: null,
          decision_id: null,
          is_targeted: null,
        };
        let ad_set_id;
        if (closure_130_6 != null) {
          const ad_identifiers2 = closure_130_6.ad_identifiers;
          if (ad_identifiers2 != null) {
            ad_set_id = ad_identifiers2.ad_set_id;
          }
        }
        obj20.ad_set_id = ad_set_id;
        let campaign_id;
        if (closure_130_6 != null) {
          const ad_identifiers3 = closure_130_6.ad_identifiers;
          if (ad_identifiers3 != null) {
            campaign_id = ad_identifiers3.campaign_id;
          }
        }
        obj20.campaign_id = campaign_id;
        let creative_id;
        if (closure_130_6 != null) {
          const ad_identifiers4 = closure_130_6.ad_identifiers;
          if (ad_identifiers4 != null) {
            creative_id = ad_identifiers4.creative_id;
          }
        }
        obj20.creative_id = creative_id;
        let creative_type;
        if (closure_130_6 != null) {
          const ad_identifiers5 = closure_130_6.ad_identifiers;
          if (ad_identifiers5 != null) {
            creative_type = ad_identifiers5.creative_type;
          }
        }
        obj20.creative_type = creative_type;
        obj20.decision_id = body.request_id;
        let ad_identifiers1;
        if (closure_130_6 != null) {
          ad_identifiers1 = closure_130_6.ad_identifiers;
        }
        obj20.is_targeted = null != ad_identifiers1;
        obj19.adDecisionData = obj20;
        let metadata_sealed;
        if (closure_130_6 != null) {
          metadata_sealed = closure_130_6.metadata_sealed;
        }
        obj19.metadataSealed = metadata_sealed;
        let prop;
        if (closure_130_6 != null) {
          prop = closure_130_6.traffic_metadata_sealed;
        }
        obj19.trafficMetadataSealed = prop;
        let prop1;
        if (closure_130_6 != null) {
          prop1 = closure_130_6.provenance_metadata_sealed;
        }
        obj19.provenanceMetadataSealed = prop1;
        let ad_context;
        if (closure_130_6 != null) {
          ad_context = closure_130_6.ad_context;
        }
        obj19.adContext = ad_context;
        let response_ttl_seconds;
        if (closure_130_6 != null) {
          response_ttl_seconds = closure_130_6.response_ttl_seconds;
        }
        obj19.responseTtlSeconds = response_ttl_seconds;
        obj19.placement = closure_130_0;
        obj19.fetchedAt = closure_130_1;
        closure_131_1(closure_131_2[12]).dispatch(obj19);
        c5 = 0;
        const obj2 = closure_131_1(closure_131_2[12]);
      }
      c5 = 0;
      c7 = 3;
      const obj21 = { value, done: true };
      return obj21;
    } catch (tmp103) {
      closure_4 = tmp103;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp103;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_38 = async function _fetchQuestHomeHeroPreview(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          let body;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          const QUEST_HOME_BANNER_DESKTOP = QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
          closure_131_0 = QUEST_HOME_BANNER_DESKTOP;
          const _Date = Date;
          closure_131_1 = Date.now();
          const obj5 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: QUEST_HOME_BANNER_DESKTOP };
          DispatcherDefault.dispatch(obj5);
          c6 = 1;
          const _URLSearchParams = URLSearchParams;
          const items = ["ad_creative_ids", closure_0];
          const items1 = [items];
          const _String = String;
          const items2 = ["placement", String(QUEST_HOME_BANNER_DESKTOP)];
          items1[1] = items2;
          const str4 = new URLSearchParams(items1);
          const HTTP = HTTPUtils.HTTP;
          const obj7 = { url: null, rejectWithError: false };
          const _HermesInternal = HermesInternal;
          obj7.url = "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str4.toString();
          c7 = 2;
          c8 = 1;
          const obj8 = { value: HTTP.get(obj7), done: false };
          return obj8;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        closure_131_6 = closure_5;
        const obj9 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
        const tmp69 = new closure_132_1(closure_132_2[13])(closure_131_6);
        obj9.error = tmp69;
        obj9.placement = closure_131_0;
        closure_132_1(closure_132_2[12]).dispatch(obj9);
        throw closure_131_6;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        body = value.body;
        const decisions = body.decisions;
        let first;
        if (decisions != null) {
          first = decisions[0];
        }
        c1 = first;
        if (first == null) {
          c1 = null;
        }
        closure_131_3 = c1;
        let creative;
        if (closure_131_3 != null) {
          creative = closure_131_3.creative;
        }
        c2 = creative;
        if (creative == null) {
          c2 = null;
        }
        closure_131_4 = c2;
        closure_131_5 = null;
        let tmp16 = null != closure_131_4;
        if (tmp16) {
          tmp16 = closure_131_4.creative_type === closure_132_0(closure_132_2[23]).AdCreativeType.QUEST_HOME_HERO;
        }
        if (tmp16) {
          closure_131_5 = closure_132_0(closure_132_2[42]).questHomeHeroFromServer(closure_131_4);
          const obj = closure_132_0(closure_132_2[42]);
        }
        const obj12 = {
          type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS",
          questHomeHero: closure_131_5,
          adDecisionData: null,
          metadataSealed: null,
          trafficMetadataSealed: null,
          provenanceMetadataSealed: null,
          adContext: null,
          responseTtlSeconds: null,
          placement: null,
          fetchedAt: null,
        };
        let ad_id;
        if (closure_131_3 != null) {
          const ad_identifiers = closure_131_3.ad_identifiers;
          if (ad_identifiers != null) {
            ad_id = ad_identifiers.ad_id;
          }
        }
        const obj13 = {
          ad_id,
          ad_set_id: null,
          campaign_id: null,
          creative_id: null,
          creative_type: null,
          decision_id: null,
          is_targeted: null,
        };
        let ad_set_id;
        if (closure_131_3 != null) {
          const ad_identifiers2 = closure_131_3.ad_identifiers;
          if (ad_identifiers2 != null) {
            ad_set_id = ad_identifiers2.ad_set_id;
          }
        }
        obj13.ad_set_id = ad_set_id;
        let campaign_id;
        if (closure_131_3 != null) {
          const ad_identifiers3 = closure_131_3.ad_identifiers;
          if (ad_identifiers3 != null) {
            campaign_id = ad_identifiers3.campaign_id;
          }
        }
        obj13.campaign_id = campaign_id;
        let creative_id;
        if (closure_131_3 != null) {
          const ad_identifiers4 = closure_131_3.ad_identifiers;
          if (ad_identifiers4 != null) {
            creative_id = ad_identifiers4.creative_id;
          }
        }
        obj13.creative_id = creative_id;
        let creative_type;
        if (closure_131_3 != null) {
          const ad_identifiers5 = closure_131_3.ad_identifiers;
          if (ad_identifiers5 != null) {
            creative_type = ad_identifiers5.creative_type;
          }
        }
        obj13.creative_type = creative_type;
        obj13.decision_id = body.request_id;
        let ad_identifiers1;
        if (closure_131_3 != null) {
          ad_identifiers1 = closure_131_3.ad_identifiers;
        }
        obj13.is_targeted = null != ad_identifiers1;
        obj12.adDecisionData = obj13;
        let metadata_sealed;
        if (closure_131_3 != null) {
          metadata_sealed = closure_131_3.metadata_sealed;
        }
        obj12.metadataSealed = metadata_sealed;
        let prop;
        if (closure_131_3 != null) {
          prop = closure_131_3.traffic_metadata_sealed;
        }
        obj12.trafficMetadataSealed = prop;
        let prop1;
        if (closure_131_3 != null) {
          prop1 = closure_131_3.provenance_metadata_sealed;
        }
        obj12.provenanceMetadataSealed = prop1;
        let ad_context;
        if (closure_131_3 != null) {
          ad_context = closure_131_3.ad_context;
        }
        obj12.adContext = ad_context;
        let response_ttl_seconds;
        if (closure_131_3 != null) {
          response_ttl_seconds = closure_131_3.response_ttl_seconds;
        }
        obj12.responseTtlSeconds = response_ttl_seconds;
        obj12.placement = closure_131_0;
        obj12.fetchedAt = closure_131_1;
        closure_132_1(closure_132_2[12]).dispatch(obj12);
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp74) {
      closure_5 = tmp74;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp74;
      } else {
        c7 = tmp;
      }
    }
  }
};
const getVisibleGuildIdsMethod = fn(8055).getVisibleGuildIdsMethod;
const FetchStatus = fn(8028).FetchStatus;
const ORBS_INTRO_QUEST_ID = fn(5749).ORBS_INTRO_QUEST_ID;
const Constants = fn(1074);
({ AnalyticEvents: map1, Endpoints: closure_14 } = Constants);
let items = [
  fn(5752).QuestContent.QUEST_BAR,
  fn(5752).QuestContent.QUEST_BAR_V2,
  fn(5752).QuestContent.QUEST_BAR_MOBILE,
];
const set = new Set(items);
const QuestEnrollmentResultType = {
  SUCCESS: "success",
  CAPTCHA_FAILED: "captcha_failed",
  UNKNOWN_ERROR: "unknown_error",
  PREVIOUS_IN_FLIGHT_REQUEST: "previous_in_flight_request",
};
let closure_36 = 5 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

export const manuallyStartConsoleQuest = function manuallyStartConsoleQuest() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const manualStopConsoleQuest = function manualStopConsoleQuest() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetRecentQuestCompletions = function resetRecentQuestCompletions() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCurrentQuests = function fetchCurrentQuests() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendHeartbeat = function sendHeartbeat() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { QuestEnrollmentResultType };
export const enrollInQuest = function enrollInQuest() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const claimQuestReward = function claimQuestReward() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestRewardCode = function fetchQuestRewardCode() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissQuestContent = function dismissQuestContent() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissProgressTrackingFailureNotice = function dismissProgressTrackingFailureNotice(streamKey) {
  DispatcherDefault.dispatch({ type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey });
};
export const completeQuestPreview = function completeQuestPreview() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetQuestPreviewStatus = function resetQuestPreviewStatus() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetQuestDismissibilityStatus = function resetQuestDismissibilityStatus() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const overrideQuestForPlacement = function overrideQuestForPlacement(placement, questId) {
  DispatcherDefault.dispatch({ type: "QUESTS_PREVIEW_OVERRIDE", placement, questId });
};
export const selectTaskPlatform = function selectTaskPlatform(questId, platform) {
  DispatcherDefault.dispatch({ type: "QUESTS_SELECT_TASK_PLATFORM", questId, platform });
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  const action = { type: "QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED", payload };
  DispatcherDefault.dispatch(action);
};
export const fetchClaimedQuests = function fetchClaimedQuests() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateOptimisticProgress = function updateOptimisticProgress(id, taskType, currentTime) {
  DispatcherDefault.dispatch({
    type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
    questId: id,
    taskEventName: taskType,
    progress: currentTime,
  });
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  DispatcherDefault.dispatch({ type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId });
};
export const fetchQuestToDeliver = function fetchQuestToDeliver() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearQuestAdDecision = function clearQuestAdDecision(placement, ttlMillis) {
  const obj = DispatcherDefault;
  obj.dispatch({
    type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
    placement,
    fetchedAt: Date.now(),
    responseTtlSeconds: ttlMillis / 1000,
  });
};
export const fetchEarnedQuestToDeliver = function fetchEarnedQuestToDeliver() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updatePrevRestingQuestDockMode = function updatePrevRestingQuestDockMode(mode) {
  DispatcherDefault.dispatch({ type: "QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE", mode });
};
export const updateVideoProgress = function updateVideoProgress() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchVideoTranscript = function fetchVideoTranscript() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateQuestDockVisibilityEligibility = function updateQuestDockVisibilityEligibility(
  isEligibleToBeVisible,
) {
  DispatcherDefault.dispatch({
    type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE",
    isEligibleToBeVisible: isEligibleToBeVisible.isEligibleToBeVisible,
  });
};
export const fetchQuest = function fetchQuest() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestPreview = function fetchQuestPreview() {
  const self = this;
  const apply = closure_35.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestHomeHero = function fetchQuestHomeHero() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestHomeHeroPreview = function fetchQuestHomeHeroPreview() {
  const self = this;
  const apply = closure_38.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissQuestActivityModal = function dismissQuestActivityModal(id) {
  DispatcherDefault.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id });
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  DispatcherDefault.dispatch({ type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll });
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  DispatcherDefault.dispatch({ type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items });
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  DispatcherDefault.dispatch({ type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items });
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  DispatcherDefault.dispatch({ type: "QUESTS_MARK_DISCOVERED", questId });
};
