// === Module 11276: QuestActionCreators ===

// Module 11276 (QuestActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 7461 */;
import QuestDataUtils from "QuestDataUtils" /* 7699 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11192 */;
import captureAdUserAction from "captureAdUserAction" /* 11193 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11197 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 11280 */;
import QuestDecisionRoundtripTrackerDefault from "QuestDecisionRoundtripTracker" /* 11281 */;
import EarnedDecisionRoundtripTrackerDefault from "EarnedDecisionRoundtripTracker" /* 11301 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7700 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 5439 */;
import NetworkStore from "NetworkStore" /* 4609 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import QuestStore from "QuestStore" /* 7703 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7705 */;

require = fn;
let closure_15 = async function _manuallyStartConsoleQuest(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[10]).HTTP;
          const request = { url: closure_132_14.QUEST_ON_CONSOLE_START(closure_131_0), query: null, failImmediatelyWhenRateLimited: true, rejectWithError: false };
          let tmp48;
          if (closure_131_1) {
            const obj2 = { preview: closure_131_1 };
            tmp48 = obj2;
          }
          request.query = tmp48;
          c7 = 3;
          c8 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_5 = closure_5;
        const tmp25 = new closure_132_1(closure_132_2[12])(closure_131_5);
        closure_131_3 = tmp25;
        if (429 === closure_131_3.status) {
          const obj4 = { errorHints: null };
          const obj5 = { type: closure_132_0(closure_132_2[13]).QuestConsoleStartErrorLocal.RATE_LIMITED, message: null, connected_account_id: "", connected_account_type: "" };
          const intl2 = closure_132_0(closure_132_2[14]).intl;
          obj5.message = intl2.string(closure_132_0(closure_132_2[14]).t.Whhv4w);
          const items = [obj5];
          obj4.errorHints = items;
          c8 = 3;
          const obj6 = { value: obj4, done: true };
          return obj6;
        } else {
          const anyErrorMessage = closure_131_3.getAnyErrorMessage();
          closure_2 = anyErrorMessage;
          if (anyErrorMessage == null) {
            const intl = closure_132_0(closure_132_2[14]).intl;
            closure_2 = intl.string(closure_132_0(closure_132_2[14]).t.xSCvBf);
          }
          closure_131_4 = closure_2;
          const obj7 = { errorHints: null };
          const obj8 = { type: closure_132_0(closure_132_2[13]).QuestConsoleStartErrorLocal.GENERIC, message: closure_131_4, connected_account_id: "", connected_account_type: "" };
          const items1 = [obj8];
          obj7.errorHints = items1;
          c8 = 3;
          const obj9 = { value: obj7, done: true };
          return obj9;
        }
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
        if (null != body.quest_user_status) {
          obj1 = closure_132_1(closure_132_2[11]);
          const obj11 = { type: "QUESTS_USER_STATUS_UPDATE", user_status: body.quest_user_status };
          obj1.dispatch(obj11);
        } else if (null != body.error_hints_v2) {
          if (body.error_hints_v2.length > 0) {
            const obj12 = { errorHints: null };
            const error_hints_v2 = body.error_hints_v2;
            obj12.errorHints = error_hints_v2.slice(0, 5);
            c6 = 0;
            c8 = 3;
            obj = { value: obj12, done: true };
            return obj;
          }
        }
        c6 = 0;
        const obj13 = { errorHints: [] };
        c8 = 3;
        const obj14 = { value: obj13, done: true };
        return obj14;
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
let closure_16 = async function _manualStopConsoleQuest(arg0) {
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
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: value.QUEST_ON_CONSOLE_STOP(closure_0), rejectWithError: false };
          c2 = 1;
          c1 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
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
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
let closure_17 = async function _resetRecentQuestCompletions() {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: constants.QUESTS_RESET_RECENT_QUEST_COMPLETIONS, rejectWithError: false };
          c1 = 1;
          c0 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
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
let closure_18 = async function _fetchCurrentQuests() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
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
            let obj3 = DispatcherDefault;
            obj3.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            let obj1 = { url: constants.QUESTS_CURRENT_QUESTS, rejectWithError: false };
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.get(obj1), done: false };
            return obj2;
          }
        }
      } else {
        if (1 === tmp8) {
          c4 = 0;
          closure_129_14 = closure_3;
          obj1 = closure_130_1(closure_130_2[11]);
          obj3 = { type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: null };
          const tmp20 = new closure_130_1(closure_130_2[12])(closure_129_14);
          obj3.error = tmp20;
          obj1.dispatch(obj3);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          quests2 = closure_129_1.body.quests;
          const found = quests2.filter((item) => closure_1_0(7710).isQuestWithKnownConfigVersion(item));
          closure_129_3 = found.map((item) => closure_1_0(7710).questWithUserStatusFromServer(item));
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
          const obj4 = { category: "quests.fetch", message: "fetchCurrentQuests completed", data: null };
          const obj5 = { rawCount: closure_129_7.length, rawIds: closure_129_7, validCount: closure_129_10.length, validIds: closure_129_10, prevQuestIds: closure_129_0, droppedByConfigVersion: closure_129_9, droppedByPlatformFilter: closure_129_11, removedFromStore: closure_129_12 };
          obj4.data = obj5;
          closure_130_1(closure_130_2[16]).addBreadcrumb(obj4);
          const excluded_quests = closure_129_1.body.excluded_quests;
          closure_129_13 = excluded_quests.map((item) => closure_1_0(7710).excludedQuestFromServer(item));
          const obj9 = closure_130_1(closure_130_2[16]);
          const obj6 = { type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", quests: closure_129_6, excludedQuests: closure_129_13, questEnrollmentBlockedUntil: closure_129_4, questAccessSuspendedUntil: closure_129_5 };
          closure_130_1(closure_130_2[11]).dispatch(obj6);
          c4 = 0;
          const obj12 = closure_130_1(closure_130_2[11]);
        }
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
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
let closure_19 = async function _sendHeartbeat(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c5 = 1;
          const request = { url: closure_131_14.QUESTS_HEARTBEAT(closure_130_0), body: null, trackedActionData: null, rejectWithError: false };
          let obj2 = { stream_key: closure_130_1, application_id: closure_130_2, terminal: closure_130_3, executable_path: closure_130_4, executable_fingerprint: closure_130_5 };
          request.body = obj2;
          const obj3 = { event: closure_131_0(closure_131_2[18]).NetworkActionNames.QUEST_HEARTBEAT, properties: null };
          let obj4 = { quest_id: closure_130_0, application_id: closure_130_2, terminal: closure_130_3, is_overlay: false, stack_trace: null, is_playtime_eligible: true };
          const _Error = Error;
          const error = new Error();
          const stack = error.stack;
          let stack_trace = stack;
          if (stack == null) {
            stack_trace = "";
          }
          obj4.stack_trace = stack_trace;
          obj3.properties = obj4;
          request.trackedActionData = obj3;
          c6 = 3;
          c7 = 1;
          const obj5 = { value: closure_131_1(closure_131_2[17]).post(request), done: false };
          return obj5;
        }
      } else {
        if (2 === tmp7) {
          c5 = 0;
          closure_130_7 = closure_4;
          obj4 = closure_131_1(closure_131_2[11]);
          const obj6 = { type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: null, questId: null, streamKey: null };
          const tmp29 = new closure_131_1(closure_131_2[12])(closure_130_7);
          obj6.error = tmp29;
          obj6.questId = closure_130_0;
          obj6.streamKey = closure_130_1;
          obj4.dispatch(obj6);
          c7 = 3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_6 = value;
          obj = closure_131_1(closure_131_2[11]);
          const obj7 = { type: "QUESTS_SEND_HEARTBEAT_SUCCESS", userStatus: null, questId: null, streamKey: null };
          obj2 = closure_131_0(closure_131_2[15]);
          obj7.userStatus = obj2.questUserStatusFromServer(closure_130_6.body);
          obj7.questId = closure_130_0;
          obj7.streamKey = closure_130_1;
          obj.dispatch(obj7);
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        const obj8 = { value, done: true };
        return obj8;
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
let closure_21 = async function _enrollInQuest(arg0, arg1) {
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
        let obj = { value, done: true };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = questId;
            closure_130_1 = undefined;
            if (null != questContentCTA.questContentCTA) {
              questContentCTA = tmp68.questContentCTA;
              if (obj27.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")) {
                let tmp73Result = captureAdUserAction;
                const obj1 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA, surfaceId: null, sourceQuestContent: null, questContentPosition: null, questContentRowIndex: null };
                ({ questContent: obj9.surfaceId, sourceQuestContent: obj9.sourceQuestContent, questContentPosition: obj9.questContentPosition, questContentRowIndex: obj9.questContentRowIndex } = tmp68);
                tmp73Result.captureAdUserAction(obj1);
              } else {
                tmp73Result = AnalyticsActions;
                let obj2 = { questId, questContent: tmp68.questContent, questContentCTA, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null };
                ({ questContentPosition: obj7.questContentPosition, questContentRowIndex: obj7.questContentRowIndex, sourceQuestContent: obj7.sourceQuestContent } = tmp68);
                const result = tmp73Result.trackQuestContentClicked(obj2);
              }
              obj27 = AdAnalyticsInterfaceExperiment;
            }
            if (questId === ORBS_INTRO_QUEST_ID) {
              let obj9 = VirtualCurrencyUtils;
              const result1 = obj9.dismissOrbsOnboardingExperience();
            }
            if (enrolling.isEnrolling(questId)) {
              const obj3 = { type: constants.PREVIOUS_IN_FLIGHT_REQUEST };
              c7 = 3;
              const obj4 = { value: obj3, done: true };
              return obj4;
            } else {
              let obj10 = DispatcherDefault;
              const obj5 = { type: "QUESTS_ENROLL_BEGIN", questId };
              obj10.dispatch(obj5);
              c5 = 1;
              let obj12 = QuestDataUtils;
              const adMetadataSealed = obj12.getAdMetadataSealed(tmp68.questContent);
              const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(tmp68.questContent, questId);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_14.QUESTS_ENROLL(questId), body: null, rejectWithError: true };
              const obj6 = { location: tmp68.questContent };
              const merged = Object.assign(QuestDataUtils.getAdDecisionData(questId, tmp68.questContent));
              let tmp47 = null;
              if (null != adMetadataSealed) {
                tmp47 = adMetadataSealed;
              }
              obj6.metadata_sealed = tmp47;
              let tmp48 = null;
              if (null != adTrafficMetadataSealed) {
                tmp48 = adTrafficMetadataSealed;
              }
              obj6.traffic_metadata_sealed = tmp48;
              request.body = obj6;
              c6 = 2;
              c7 = 1;
              const obj7 = { value: HTTP.post(request), done: false };
              return obj7;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          obj2 = closure_131_1(closure_131_2[11]);
          const obj8 = { type: "QUESTS_ENROLL_FAILURE", questId: closure_130_0 };
          obj2.dispatch(obj8);
          obj9 = { type: null };
          let CAPTCHA_FAILED = closure_131_20;
          if ((function isCaptchaError(status) {
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
          })(closure_130_2)) {
            CAPTCHA_FAILED = CAPTCHA_FAILED.CAPTCHA_FAILED;
            obj9.type = CAPTCHA_FAILED;
          } else {
            obj9.type = CAPTCHA_FAILED.UNKNOWN_ERROR;
          }
          c7 = 3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_1 = value;
          const obj11 = { type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: null };
          const obj23 = closure_131_1(closure_131_2[11]);
          obj11.enrolledQuestUserStatus = closure_131_0(closure_131_2[15]).questUserStatusFromServer(closure_130_1.body);
          obj23.dispatch(obj11);
          obj12 = { type: closure_131_20.SUCCESS };
          c5 = 0;
          c7 = 3;
          obj = { value: obj12, done: true };
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
let closure_22 = async function _claimQuestReward() {
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
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = questId;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            if (claimingReward.isClaimingReward(questId)) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              let obj7 = DispatcherDefault;
              const obj1 = { type: "QUESTS_CLAIM_REWARD_BEGIN", questId };
              obj7.dispatch(obj1);
              c6 = 1;
              const adMetadataSealed = QuestDataUtils.getAdMetadataSealed(_location);
              const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(_location, questId);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_14.QUESTS_CLAIM_REWARD(questId), body: null, rejectWithError: false };
              let obj2 = { platform, location: _location };
              const merged = Object.assign(QuestDataUtils.getAdDecisionData(questId, _location));
              let tmp56 = null;
              if (null != adMetadataSealed) {
                tmp56 = adMetadataSealed;
              }
              obj2.metadata_sealed = tmp56;
              let tmp57 = null;
              if (null != adTrafficMetadataSealed) {
                tmp57 = adTrafficMetadataSealed;
              }
              obj2.traffic_metadata_sealed = tmp57;
              request.body = obj2;
              c7 = 2;
              c8 = 1;
              const obj3 = { value: HTTP.post(request), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_3 = closure_5;
          let obj5 = closure_132_1(closure_132_2[11]);
          const obj4 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: null, questId: null };
          const tmp35 = new closure_132_1(closure_132_2[12])(closure_131_3);
          obj4.error = tmp35;
          obj4.questId = closure_131_0;
          obj5.dispatch(obj4);
          throw closure_131_3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          closure_131_1 = value;
          closure_131_2 = closure_132_0(closure_132_2[15]).questsEntitlementsFromServer(closure_131_1.body);
          if (0 === closure_131_2.errors.length) {
            obj2 = closure_132_1(closure_132_2[11]);
            const obj6 = { type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: closure_131_0, entitlements: closure_131_2 };
            obj2.dispatch(obj6);
          } else {
            obj = closure_132_1(closure_132_2[11]);
            obj7 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: closure_131_2.errors, questId: closure_131_0 };
            obj.dispatch(obj7);
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
let closure_23 = async function _fetchQuestRewardCode() {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = questId;
            closure_129_1 = undefined;
            if (fetchingRewardCode.isFetchingRewardCode(questId)) {
              c6 = 3;
            } else {
              let obj6 = DispatcherDefault;
              const obj1 = { type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId };
              obj6.dispatch(obj1);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              let obj2 = { url: closure_2_14.QUESTS_REWARD_CODE(questId), rejectWithError: false };
              c5 = 2;
              c6 = 1;
              const obj3 = { value: HTTP.get(obj2), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          let obj4 = closure_130_1(closure_130_2[11]);
          obj4 = { type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: null, questId: null };
          const tmp28 = new closure_130_1(closure_130_2[12])(closure_129_2);
          obj4.error = tmp28;
          obj4.questId = closure_129_0;
          obj4.dispatch(obj4);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          obj = closure_130_1(closure_130_2[11]);
          const obj5 = { type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: closure_129_0, rewardCode: null };
          obj2 = closure_130_0(closure_130_2[15]);
          obj5.rewardCode = obj2.questsRewardCodeFromServer(closure_129_1.body);
          obj.dispatch(obj5);
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        obj6 = { value, done: true };
        return obj6;
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
let closure_24 = async function _dismissQuestContent() {
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
        let obj = { value, done: true };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = questId;
            closure_130_1 = undefined;
            const isDismissingContentResult = dismissingContent.isDismissingContent(questId);
            if (!isDismissingContentResult) {
              if (obj16.isDismissible(content)) {
                let obj6 = DispatcherDefault;
                const obj1 = { type: "QUESTS_DISMISS_CONTENT_BEGIN", questId, content };
                obj6.dispatch(obj1);
                c5 = 1;
                const adTrafficMetadataSealed = QuestDataUtils.getAdTrafficMetadataSealed(content, questId);
                const HTTP = HTTPUtils.HTTP;
                const request = { url: closure_2_14.QUESTS_DISMISS_CONTENT(questId, content), body: null, rejectWithError: false };
                let obj2 = {};
                const merged = Object.assign(QuestDataUtils.getAdDecisionData(questId, content));
                let tmp44 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp44 = adTrafficMetadataSealed;
                }
                obj2.traffic_metadata_sealed = tmp44;
                request.body = obj2;
                c6 = 2;
                c7 = 1;
                const obj3 = { value: HTTP.post(request), done: false };
                return obj3;
              }
            }
            obj16 = QuestDataUtils;
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_2 = closure_4;
            let obj4 = closure_131_1(closure_131_2[11]);
            obj4 = { type: "QUESTS_DISMISS_CONTENT_FAILURE", error: null, questId: null };
            const tmp27 = new closure_131_1(closure_131_2[12])(closure_130_2);
            obj4.error = tmp27;
            obj4.questId = closure_130_0;
            obj4.dispatch(obj4);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_1 = value;
            obj = closure_131_1(closure_131_2[11]);
            const obj5 = { type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: null };
            obj2 = closure_131_0(closure_131_2[15]);
            obj5.dismissedQuestUserStatus = obj2.questUserStatusFromServer(closure_130_1.body);
            obj.dispatch(obj5);
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          obj6 = { value, done: true };
          return obj6;
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
let closure_25 = async function _completeQuestPreview(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[10]).HTTP;
          const request = { url: closure_131_14.QUESTS_PREVIEW_COMPLETE(closure_130_0), body: null, rejectWithError: false };
          let obj2 = { percent: closure_130_1 };
          request.body = obj2;
          c6 = 3;
          c7 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else {
        if (2 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          let obj4 = closure_131_1(closure_131_2[11]);
          obj4 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
          const tmp27 = new closure_131_1(closure_131_2[12])(closure_130_3);
          obj4.error = tmp27;
          obj4.questId = closure_130_0;
          obj4.dispatch(obj4);
          c7 = 3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_2 = value;
          obj = closure_131_1(closure_131_2[11]);
          const obj5 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
          obj2 = closure_131_0(closure_131_2[15]);
          obj5.previewQuestUserStatus = obj2.questUserStatusFromServer(closure_130_2.body);
          obj.dispatch(obj5);
          c5 = 0;
        }
        c5 = 0;
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
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
let closure_26 = async function _resetQuestPreviewStatus(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: value.QUESTS_PREVIEW_STATUS(closure_0), body: {}, rejectWithError: false };
  await HTTP.del(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_2 = closure_3;
    let obj2 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
    obj2.error = new closure_130_1(closure_130_2[12])(closure_129_2);
    obj2.questId = closure_129_0;
    closure_130_1(closure_130_2[11]).dispatch(obj2);
    c6 = 3;
    new closure_130_1(closure_130_2[12])(closure_129_2);
    const obj4 = closure_130_1(closure_130_2[11]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    const obj3 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
    obj2 = closure_130_0(closure_130_2[15]);
    obj3.previewQuestUserStatus = obj2.questUserStatusFromServer(closure_129_1.body);
    closure_130_1(closure_130_2[11]).dispatch(obj3);
    c4 = 0;
    closure_130_1(closure_130_2[11]);
  }
  return value;
};
let closure_27 = async function _resetQuestDismissibilityStatus(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  DispatcherDefault.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: value.QUESTS_PREVIEW_DISMISSIBILITY(closure_0), body: {}, rejectWithError: false };
  await HTTP.del(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_2 = closure_3;
    let obj2 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
    obj2.error = new closure_130_1(closure_130_2[12])(closure_129_2);
    obj2.questId = closure_129_0;
    closure_130_1(closure_130_2[11]).dispatch(obj2);
    c6 = 3;
    new closure_130_1(closure_130_2[12])(closure_129_2);
    const obj4 = closure_130_1(closure_130_2[11]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    const obj3 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
    obj2 = closure_130_0(closure_130_2[15]);
    obj3.previewQuestUserStatus = obj2.questUserStatusFromServer(closure_129_1.body);
    closure_130_1(closure_130_2[11]).dispatch(obj3);
    c4 = 0;
    closure_130_1(closure_130_2[11]);
  }
  return value;
};
let closure_28 = async function _fetchClaimedQuests() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          if (!QuestStore.isFetchingClaimedQuests) {
            let obj5 = DispatcherDefault;
            obj5.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj1 = { url: constants.QUESTS_CLAIMED_QUESTS, rejectWithError: false };
            c4 = 2;
            c5 = 1;
            const obj2 = { value: HTTP.get(obj1), done: false };
            return obj2;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = closure_2;
          let obj3 = closure_129_1(closure_129_2[11]);
          obj3 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: null };
          const tmp25 = new closure_129_1(closure_129_2[12])(closure_128_1);
          obj3.error = tmp25;
          obj3.dispatch(obj3);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const quests = value.body.quests;
          closure_128_0 = quests.map((item) => closure_1_0(closure_1_2[15]).getClaimedQuestWithUserStatusFromServer(item));
          obj = closure_129_1(closure_129_2[11]);
          const obj4 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: closure_128_0 };
          obj.dispatch(obj4);
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        obj5 = { value, done: true };
        return obj5;
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
let closure_29 = async function _fetchQuestToDeliver() {
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
            const result = QuestDecisionRoundtripTrackerDefault.recordQuestRequestAttempt("/quests/decision", closure_1, placement);
            const obj1 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement };
            DispatcherDefault.dispatch(obj1);
            c6 = 1;
            c7 = 2;
            c8 = 1;
            let obj2 = { value: SessionHeartbeatScheduler.getSession(), done: false };
            return obj2;
          }
        } else {
          if (1 === tmp8) {
            c6 = 0;
            closure_131_18 = closure_5;
            const obj3 = { wasSuccessful: false, currentFetchedAt: closure_131_2 };
            const result1 = closure_132_1(closure_132_2[27]).recordQuestRequestApiResponse("/quests/decision", obj3);
            const obj22 = closure_132_1(closure_132_2[27]);
            let obj4 = {};
            const merged = Object.assign(closure_132_1(closure_132_2[36])());
            let message;
            if (closure_131_18 != null) {
              message = closure_131_18.message;
            }
            reason = message;
            if (message == null) {
              reason = null;
            }
            obj4.reason = reason;
            const obj26 = new closure_132_1(closure_132_2[12])(closure_131_18);
            obj4.api_error = obj26.getAnyErrorMessage();
            obj4.caller_source = closure_131_1;
            closure_132_1(closure_132_2[35]).track(closure_132_13.QUEST_DECISION_ROUNDTRIP_ERROR, obj4);
            const obj24 = closure_132_1(closure_132_2[35]);
            const obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: null, placement: null };
            const tmp188 = new closure_132_1(closure_132_2[12])(closure_131_18);
            obj5.error = tmp188;
            obj5.placement = closure_131_0;
            closure_132_1(closure_132_2[11]).dispatch(obj5);
            c8 = 3;
            const obj27 = closure_132_1(closure_132_2[11]);
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_131_3 = value;
              let obj18 = closure_132_0(closure_132_2[29]);
              c7 = 3;
              c8 = 1;
              let obj7 = { value: obj18.getOrRefreshAdSession(), done: false };
              return obj7;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_131_4 = value;
              const LessPersonalizedAdsExperiment = closure_132_0(closure_132_2[30]).LessPersonalizedAdsExperiment;
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
                obj = closure_0(c2[31]);
              });
              closure_131_9 = found.slice(0, 50);
              let tmp118;
              if (config.enabled) {
                tmp118 = closure_131_9;
              }
              closure_131_10 = tmp118;
              const _URLSearchParams = URLSearchParams;
              let obj9 = { placement: null };
              const _String3 = String;
              obj9.placement = String(closure_131_0);
              const uRLSearchParams = new URLSearchParams(obj9);
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
              const HTTP = closure_132_0(closure_132_2[10]).HTTP;
              let obj10 = { url: null, rejectWithError: false, context: null };
              const _HermesInternal = HermesInternal;
              obj10.url = "" + closure_132_14.QUEST_FETCH_QUEST_TO_DELIVER + "?" + closure_131_11.toString();
              const obj11 = { connection_type: closure_132_7.getType() };
              obj10.context = obj11;
              c7 = 4;
              c8 = 1;
              const obj12 = { value: HTTP.get(obj10), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            body = value.body;
            let creative = body.creative;
            let creative_type;
            if (creative != null) {
              creative_type = creative.creative_type;
            }
            if (creative_type !== closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY) {
              creative = body.creative;
            } else {
              const BountiesMobileQuestBarExperiment = closure_132_0(closure_132_2[32]).BountiesMobileQuestBarExperiment;
              creative = null;
            }
            closure_131_14 = creative;
            closure_131_15 = null;
            if (null != closure_131_14) {
              creative_type = closure_131_14.creative_type;
              if (closure_132_0(closure_132_2[23]).AdCreativeType.QUEST === creative_type) {
                obj2 = closure_132_0(closure_132_2[15]);
                closure_131_12 = obj2.questConfigFromServer(closure_131_14.creative_content);
                const obj14 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST, questId: closure_131_12.id };
                closure_131_15 = obj14;
              } else if (closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY === creative_type) {
                obj = closure_132_0(closure_132_2[33]);
                closure_131_16 = obj.bountyFromServer(closure_131_14.creative_content);
                const obj15 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY, bounty: closure_131_16 };
                closure_131_15 = obj15;
              } else {
                const NO_FILL = closure_132_0(closure_132_2[23]).AdCreativeType.NO_FILL;
              }
            } else {
              quest = body.quest;
              if (null != quest) {
                closure_131_12 = closure_132_0(closure_132_2[15]).questConfigFromServer(quest);
                const obj16 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST, questId: closure_131_12.id };
                closure_131_15 = obj16;
                const obj32 = closure_132_0(closure_132_2[15]);
              }
            }
            obj4 = closure_132_1(closure_132_2[11]);
            const obj17 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", quest: closure_131_12, creative: closure_131_15, isNoFill: null, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
            let creative_type1;
            if (closure_131_14 != null) {
              creative_type1 = closure_131_14.creative_type;
            }
            obj17.isNoFill = creative_type1 === closure_132_0(closure_132_2[23]).AdCreativeType.NO_FILL;
            const ad_identifiers = body.ad_identifiers;
            let ad_id;
            if (ad_identifiers != null) {
              ad_id = ad_identifiers.ad_id;
            }
            obj18 = { ad_id, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
            const ad_identifiers2 = body.ad_identifiers;
            let adset_id;
            if (ad_identifiers2 != null) {
              adset_id = ad_identifiers2.adset_id;
            }
            obj18.adset_id = adset_id;
            const ad_identifiers3 = body.ad_identifiers;
            let ad_set_id;
            if (ad_identifiers3 != null) {
              ad_set_id = ad_identifiers3.ad_set_id;
            }
            obj18.ad_set_id = ad_set_id;
            const ad_identifiers4 = body.ad_identifiers;
            let campaign_id;
            if (ad_identifiers4 != null) {
              campaign_id = ad_identifiers4.campaign_id;
            }
            obj18.campaign_id = campaign_id;
            const ad_identifiers5 = body.ad_identifiers;
            let creative_id;
            if (ad_identifiers5 != null) {
              creative_id = ad_identifiers5.creative_id;
            }
            obj18.creative_id = creative_id;
            const ad_identifiers6 = body.ad_identifiers;
            let creative_type2;
            if (ad_identifiers6 != null) {
              creative_type2 = ad_identifiers6.creative_type;
            }
            obj18.creative_type = creative_type2;
            obj18.decision_id = body.request_id;
            obj18.is_targeted = null != body.ad_identifiers;
            obj17.adDecisionData = obj18;
            obj17.metadataSealed = body.metadata_sealed;
            obj17.trafficMetadataSealed = body.traffic_metadata_sealed;
            obj17.provenanceMetadataSealed = body.provenance_metadata_sealed;
            obj17.adContext = body.ad_context;
            obj17.responseTtlSeconds = body.response_ttl_seconds;
            obj17.placement = closure_131_0;
            obj17.fetchedAt = closure_131_2;
            obj4.dispatch(obj17);
            obj7 = closure_132_1(closure_132_2[27]);
            const obj19 = { wasSuccessful: true, adRequestId: null, currentCreative: null, currentFetchedAt: null };
            const _String = String;
            obj19.adRequestId = String(body.request_id);
            obj19.currentCreative = closure_131_15;
            obj19.currentFetchedAt = closure_131_2;
            const result2 = obj7.recordQuestRequestApiResponse("/quests/decision", obj19);
            if (null != closure_131_12) {
              if (closure_131_0 === closure_132_0(closure_132_2[13]).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                obj9 = closure_132_1(closure_132_2[34]);
                obj9.startTracking(closure_131_12.id);
              }
              obj10 = closure_132_1(closure_132_2[35]);
              const obj20 = {};
              const merged1 = Object.assign(closure_132_1(closure_132_2[36])());
              obj20.quest_id = closure_131_12.id;
              obj20.caller_source = closure_131_1;
              const _String2 = String;
              obj20.ad_request_id = String(body.request_id);
              obj10.track(closure_132_13.QUEST_DECISION_RECEIVED, obj20);
              c6 = 0;
            }
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
let closure_30 = async function _fetchEarnedQuestToDeliver(arg0) {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
                return !closure_0(7699).earnedDecisionIsValid(value);
              });
              closure_132_2 = found;
              if (0 !== found.length) {
                const _Date = Date;
                closure_132_3 = Date.now();
                const result = EarnedDecisionRoundtripTrackerDefault.recordEarnedRequestAttempt(content, dependencyMap);
                const obj1 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content };
                DispatcherDefault.dispatch(obj1);
                c7 = 1;
                c8 = 2;
                c9 = 1;
                const obj2 = { value: SessionHeartbeatScheduler.getSession(), done: false };
                return obj2;
              }
            }
          }
        } else {
          if (1 === tmp8) {
            c7 = 0;
            closure_132_10 = closure_6;
            let obj5 = closure_133_1(closure_133_2[37]);
            const obj3 = { wasSuccessful: false, fetchedAt: closure_132_3 };
            const result1 = obj5.recordEarnedRequestApiResponse(closure_132_0, obj3);
            let obj7 = closure_133_1(closure_133_2[11]);
            const obj4 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: null, content: null };
            const tmp30 = new closure_133_1(closure_133_2[12])(closure_132_10);
            obj4.error = tmp30;
            obj4.content = closure_132_0;
            obj7.dispatch(obj4);
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              closure_132_4 = value;
              closure_132_5 = closure_132_2.join(",");
              const HTTP = closure_133_0(closure_133_2[10]).HTTP;
              let uuid;
              if (closure_132_4 != null) {
                uuid = closure_132_4.uuid;
              }
              const obj6 = { url: closure_133_14.QUEST_EARNED_DECISION(closure_132_5, closure_132_0, uuid), rejectWithError: false };
              c8 = 3;
              c9 = 1;
              obj7 = { value: HTTP.get(obj6), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_6 = value;
            quests = closure_132_6.body.quests;
            response_ttl_seconds = closure_132_6.body.response_ttl_seconds;
            const _Map = Map;
            const map = new Map(closure_132_2.map((item) => {
              let tmp;
              if (closure_1_7 != null) {
                tmp = closure_1_7[item];
              }
              const items = [item, ];
              let tmp2 = null;
              if (null != tmp) {
                tmp2 = null;
                if (obj.isQuestWithKnownConfigVersion(tmp)) {
                  tmp2 = tmp;
                }
                obj = closure_0(7710);
              }
              items[1] = tmp2;
              return items;
            }));
            closure_132_9 = map;
            const obj8 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS", serverQuests: closure_132_9, content: closure_132_0, fetchedAt: closure_132_3, responseTtlSeconds: response_ttl_seconds };
            closure_133_1(closure_133_2[11]).dispatch(obj8);
            const obj13 = closure_133_1(closure_133_2[11]);
            const request_id = closure_132_6.body.request_id;
            requestId = request_id;
            if (request_id == null) {
              requestId = null;
            }
            obj = { wasSuccessful: true, requestId, fetchedAt: closure_132_3 };
            const result2 = closure_133_1(closure_133_2[37]).recordEarnedRequestApiResponse(closure_132_0, obj);
            c7 = 0;
            const obj15 = closure_133_1(closure_133_2[37]);
          }
          c7 = 0;
          c9 = 3;
          const obj9 = { value, done: true };
          return obj9;
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
let closure_31 = async function _updateVideoProgress() {
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
          } else {
            let obj4 = TrackedHTTPUtilsDefault;
            const request = { url: closure_2_14.QUESTS_VIDEO_PROGRESS(quest_id), body: null, trackedActionData: null, rejectWithError: false };
            const obj1 = { timestamp };
            request.body = obj1;
            const obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.QUEST_VIDEO_PROGRESS, properties: null };
            const obj3 = { quest_id, timestamp_sec: timestamp.toString(), stack_trace: null };
            const _Error = Error;
            const error = new Error();
            const stack = error.stack;
            stack_trace = stack;
            if (stack == null) {
              stack_trace = "";
            }
            obj3.stack_trace = stack_trace;
            obj2.properties = obj3;
            request.trackedActionData = obj2;
            c4 = 1;
            c3 = 1;
            obj4 = { value: null, done: false };
            obj4.value = obj4.post(request);
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
let closure_32 = async function _fetchVideoTranscript(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            const obj15 = closure_131_0(closure_131_2[38]);
            questAsset = obj15.getQuestAsset(closure_130_0, closure_131_0(closure_131_2[38]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, closure_130_1);
            if (null != questAsset) {
              const state = closure_131_10.getState();
              const obj2 = { questId: closure_130_0.id, fetchStatus: closure_131_11.FETCHING };
              state.setTranscriptAsset(obj2);
              c5 = 1;
              const HTTP = closure_131_0(closure_131_2[10]).HTTP;
              const obj3 = { url: questAsset.url, rejectWithError: true };
              c6 = 3;
              c7 = 1;
              const obj4 = { value: HTTP.get(obj3), done: false };
              return obj4;
            } else {
              const state1 = closure_131_10.getState();
              const obj5 = { questId: closure_130_0.id, fetchStatus: closure_131_11.FAILURE };
              state1.setTranscriptAsset(obj5);
            }
          }
        } else {
          if (2 === tmp7) {
            c5 = 0;
            const state2 = closure_131_10.getState();
            const obj6 = { questId: closure_130_0.id, fetchStatus: closure_131_11.FAILURE };
            state2.setTranscriptAsset(obj6);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_3 = value;
            const state3 = closure_131_10.getState();
            const obj7 = { questId: closure_130_0.id, fetchStatus: closure_131_11.SUCCESS, text: closure_130_3.text, url: questAsset.url };
            state3.setTranscriptAsset(obj7);
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
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
let closure_33 = async function _fetchQuest() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_14.QUEST(closure_0), rejectWithError: false });
  closure_129_0 = value;
  { url: value.QUEST(closure_0), rejectWithError: false };
  return closure_130_0(closure_130_2[15]).questConfigFromServer(closure_129_0.body);
};
let closure_34 = async function _fetchQuestPreview() {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = questId;
            closure_129_1 = undefined;
            if (fetchingQuestPreview.isFetchingQuestPreview(questId)) {
              c6 = 3;
            } else {
              let obj6 = DispatcherDefault;
              const obj1 = { type: "QUESTS_FETCH_PREVIEW_BEGIN", questId };
              obj6.dispatch(obj1);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              let obj2 = { url: closure_2_14.QUEST_PREVIEW(questId), rejectWithError: false };
              c5 = 2;
              c6 = 1;
              const obj3 = { value: HTTP.get(obj2), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          let obj4 = closure_130_1(closure_130_2[11]);
          obj4 = { type: "QUESTS_FETCH_PREVIEW_FAILURE", error: null, questId: null };
          const tmp28 = new closure_130_1(closure_130_2[12])(closure_129_2);
          obj4.error = tmp28;
          obj4.questId = closure_129_0;
          obj4.dispatch(obj4);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          obj = closure_130_1(closure_130_2[11]);
          const obj5 = { type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: closure_129_0, quest: null };
          obj2 = closure_130_0(closure_130_2[15]);
          obj5.quest = obj2.questWithUserStatusFromServer(closure_129_1.body);
          obj.dispatch(obj5);
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        obj6 = { value, done: true };
        return obj6;
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
let closure_36 = async function _fetchQuestHomeHero() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
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
            let obj1 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: QUEST_HOME_BANNER_DESKTOP };
            DispatcherDefault.dispatch(obj1);
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj2 = { value: SessionHeartbeatScheduler.getSession(), done: false };
            return obj2;
          }
          c7 = 3;
        }
      } else if (1 === tmp8) {
        c5 = 0;
        closure_130_9 = closure_4;
        let obj12 = closure_131_1(closure_131_2[11]);
        const obj3 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
        const tmp91 = new closure_131_1(closure_131_2[12])(closure_130_9);
        obj3.error = tmp91;
        obj3.placement = closure_130_0;
        obj12.dispatch(obj3);
        throw closure_130_9;
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_2 = value;
          let obj9 = closure_131_0(closure_131_2[29]);
          c6 = 3;
          c7 = 1;
          const obj5 = { value: obj9.getOrRefreshAdSession(), done: false };
          return obj5;
        }
      } else if (3 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_3 = value;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { placement: null, num_decisions_requested: "1" };
          const _String = String;
          obj7.placement = String(closure_130_0);
          const uRLSearchParams = new URLSearchParams(obj7);
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
          const HTTP = closure_131_0(closure_131_2[10]).HTTP;
          const obj8 = { url: null, rejectWithError: false, context: null };
          const _HermesInternal = HermesInternal;
          obj8.url = "" + closure_131_14.QUESTS_GET_DECISIONS + "?" + closure_130_4.toString();
          obj9 = { connection_type: closure_131_7.getType() };
          obj8.context = obj9;
          c6 = 4;
          c7 = 1;
          const obj10 = { value: HTTP.get(obj8), done: false };
          return obj10;
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
          obj = closure_131_0(closure_131_2[40]);
          closure_130_8 = obj.questHomeHeroFromServer(closure_130_7);
        }
        obj1 = closure_131_1(closure_131_2[11]);
        const obj11 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: closure_130_8, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
        let ad_id;
        if (closure_130_6 != null) {
          let ad_identifiers = closure_130_6.ad_identifiers;
          if (ad_identifiers != null) {
            ad_id = ad_identifiers.ad_id;
          }
        }
        obj12 = { ad_id, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
        let ad_set_id;
        if (closure_130_6 != null) {
          const ad_identifiers2 = closure_130_6.ad_identifiers;
          if (ad_identifiers2 != null) {
            ad_set_id = ad_identifiers2.ad_set_id;
          }
        }
        obj12.ad_set_id = ad_set_id;
        let campaign_id;
        if (closure_130_6 != null) {
          const ad_identifiers3 = closure_130_6.ad_identifiers;
          if (ad_identifiers3 != null) {
            campaign_id = ad_identifiers3.campaign_id;
          }
        }
        obj12.campaign_id = campaign_id;
        let creative_id;
        if (closure_130_6 != null) {
          const ad_identifiers4 = closure_130_6.ad_identifiers;
          if (ad_identifiers4 != null) {
            creative_id = ad_identifiers4.creative_id;
          }
        }
        obj12.creative_id = creative_id;
        let creative_type;
        if (closure_130_6 != null) {
          const ad_identifiers5 = closure_130_6.ad_identifiers;
          if (ad_identifiers5 != null) {
            creative_type = ad_identifiers5.creative_type;
          }
        }
        obj12.creative_type = creative_type;
        obj12.decision_id = body.request_id;
        ad_identifiers = undefined;
        if (closure_130_6 != null) {
          ad_identifiers = closure_130_6.ad_identifiers;
        }
        obj12.is_targeted = null != ad_identifiers;
        obj11.adDecisionData = obj12;
        let metadata_sealed;
        if (closure_130_6 != null) {
          metadata_sealed = closure_130_6.metadata_sealed;
        }
        obj11.metadataSealed = metadata_sealed;
        let prop;
        if (closure_130_6 != null) {
          prop = closure_130_6.traffic_metadata_sealed;
        }
        obj11.trafficMetadataSealed = prop;
        let prop1;
        if (closure_130_6 != null) {
          prop1 = closure_130_6.provenance_metadata_sealed;
        }
        obj11.provenanceMetadataSealed = prop1;
        let ad_context;
        if (closure_130_6 != null) {
          ad_context = closure_130_6.ad_context;
        }
        obj11.adContext = ad_context;
        let response_ttl_seconds;
        if (closure_130_6 != null) {
          response_ttl_seconds = closure_130_6.response_ttl_seconds;
        }
        obj11.responseTtlSeconds = response_ttl_seconds;
        obj11.placement = closure_130_0;
        obj11.fetchedAt = closure_130_1;
        obj1.dispatch(obj11);
        c5 = 0;
      }
      c5 = 0;
      c7 = 3;
      const obj13 = { value, done: true };
      return obj13;
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
let closure_37 = async function _fetchQuestHomeHeroPreview(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          let obj1 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: QUEST_HOME_BANNER_DESKTOP };
          DispatcherDefault.dispatch(obj1);
          c6 = 1;
          const _URLSearchParams = URLSearchParams;
          const items = ["ad_creative_ids", closure_0];
          const items1 = [items, ];
          const _String = String;
          const items2 = ["placement", String(QUEST_HOME_BANNER_DESKTOP)];
          items1[1] = items2;
          const str4 = new URLSearchParams(items1);
          const HTTP = HTTPUtils.HTTP;
          const obj2 = { url: null, rejectWithError: false };
          const _HermesInternal = HermesInternal;
          obj2.url = "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str4.toString();
          c7 = 2;
          c8 = 1;
          const obj3 = { value: HTTP.get(obj2), done: false };
          return obj3;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        closure_131_6 = closure_5;
        let obj5 = closure_132_1(closure_132_2[11]);
        const obj4 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
        const tmp69 = new closure_132_1(closure_132_2[12])(closure_131_6);
        obj4.error = tmp69;
        obj4.placement = closure_131_0;
        obj5.dispatch(obj4);
        throw closure_131_6;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        obj5 = { value, done: true };
        return obj5;
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
          obj = closure_132_0(closure_132_2[40]);
          closure_131_5 = obj.questHomeHeroFromServer(closure_131_4);
        }
        obj1 = closure_132_1(closure_132_2[11]);
        const obj6 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: closure_131_5, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
        let ad_id;
        if (closure_131_3 != null) {
          let ad_identifiers = closure_131_3.ad_identifiers;
          if (ad_identifiers != null) {
            ad_id = ad_identifiers.ad_id;
          }
        }
        const obj7 = { ad_id, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
        let ad_set_id;
        if (closure_131_3 != null) {
          const ad_identifiers2 = closure_131_3.ad_identifiers;
          if (ad_identifiers2 != null) {
            ad_set_id = ad_identifiers2.ad_set_id;
          }
        }
        obj7.ad_set_id = ad_set_id;
        let campaign_id;
        if (closure_131_3 != null) {
          const ad_identifiers3 = closure_131_3.ad_identifiers;
          if (ad_identifiers3 != null) {
            campaign_id = ad_identifiers3.campaign_id;
          }
        }
        obj7.campaign_id = campaign_id;
        let creative_id;
        if (closure_131_3 != null) {
          const ad_identifiers4 = closure_131_3.ad_identifiers;
          if (ad_identifiers4 != null) {
            creative_id = ad_identifiers4.creative_id;
          }
        }
        obj7.creative_id = creative_id;
        let creative_type;
        if (closure_131_3 != null) {
          const ad_identifiers5 = closure_131_3.ad_identifiers;
          if (ad_identifiers5 != null) {
            creative_type = ad_identifiers5.creative_type;
          }
        }
        obj7.creative_type = creative_type;
        obj7.decision_id = body.request_id;
        ad_identifiers = undefined;
        if (closure_131_3 != null) {
          ad_identifiers = closure_131_3.ad_identifiers;
        }
        obj7.is_targeted = null != ad_identifiers;
        obj6.adDecisionData = obj7;
        let metadata_sealed;
        if (closure_131_3 != null) {
          metadata_sealed = closure_131_3.metadata_sealed;
        }
        obj6.metadataSealed = metadata_sealed;
        let prop;
        if (closure_131_3 != null) {
          prop = closure_131_3.traffic_metadata_sealed;
        }
        obj6.trafficMetadataSealed = prop;
        let prop1;
        if (closure_131_3 != null) {
          prop1 = closure_131_3.provenance_metadata_sealed;
        }
        obj6.provenanceMetadataSealed = prop1;
        let ad_context;
        if (closure_131_3 != null) {
          ad_context = closure_131_3.ad_context;
        }
        obj6.adContext = ad_context;
        let response_ttl_seconds;
        if (closure_131_3 != null) {
          response_ttl_seconds = closure_131_3.response_ttl_seconds;
        }
        obj6.responseTtlSeconds = response_ttl_seconds;
        obj6.placement = closure_131_0;
        obj6.fetchedAt = closure_131_1;
        obj1.dispatch(obj6);
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
const getVisibleGuildIdsMethod = fn(11195).getVisibleGuildIdsMethod;
const FetchStatus = fn(7705).FetchStatus;
const ORBS_INTRO_QUEST_ID = fn(5444).ORBS_INTRO_QUEST_ID;
const Constants = fn(1074);
({ AnalyticEvents: map1, Endpoints: closure_14 } = Constants);
const QuestEnrollmentResultType = { SUCCESS: "success", CAPTCHA_FAILED: "captcha_failed", UNKNOWN_ERROR: "unknown_error", PREVIOUS_IN_FLIGHT_REQUEST: "previous_in_flight_request" };
let closure_35 = 5 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

export const manuallyStartConsoleQuest = function manuallyStartConsoleQuest() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const manualStopConsoleQuest = function manualStopConsoleQuest() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetRecentQuestCompletions = function resetRecentQuestCompletions() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCurrentQuests = function fetchCurrentQuests() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendHeartbeat = function sendHeartbeat() {
  const self = this;
  const apply = closure_19.apply;
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
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const claimQuestReward = function claimQuestReward() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestRewardCode = function fetchQuestRewardCode() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissQuestContent = function dismissQuestContent() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissProgressTrackingFailureNotice = function dismissProgressTrackingFailureNotice(streamKey) {
  const obj = { type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey };
  obj.dispatch(obj);
};
export const completeQuestPreview = function completeQuestPreview() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetQuestPreviewStatus = function resetQuestPreviewStatus() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetQuestDismissibilityStatus = function resetQuestDismissibilityStatus() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const overrideQuestForPlacement = function overrideQuestForPlacement(placement, questId) {
  const obj = { type: "QUESTS_PREVIEW_OVERRIDE", placement, questId };
  obj.dispatch(obj);
};
export const selectTaskPlatform = function selectTaskPlatform(questId, platform) {
  const obj = { type: "QUESTS_SELECT_TASK_PLATFORM", questId, platform };
  obj.dispatch(obj);
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  const action = { type: "QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED", payload };
  DispatcherDefault.dispatch(action);
};
export const fetchClaimedQuests = function fetchClaimedQuests() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateOptimisticProgress = function updateOptimisticProgress(id, taskType, currentTime) {
  const obj = { type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: id, taskEventName: taskType, progress: currentTime };
  obj.dispatch(obj);
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  const obj = { type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId };
  obj.dispatch(obj);
};
export const fetchQuestToDeliver = function fetchQuestToDeliver() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearQuestAdDecision = function clearQuestAdDecision(placement, ttlMillis) {
  const obj = { type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, fetchedAt: Date.now(), responseTtlSeconds: ttlMillis / 1000 };
  obj.dispatch(obj);
};
export const fetchEarnedQuestToDeliver = function fetchEarnedQuestToDeliver() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updatePrevRestingQuestDockMode = function updatePrevRestingQuestDockMode(mode) {
  const obj = { type: "QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE", mode };
  obj.dispatch(obj);
};
export const updateVideoProgress = function updateVideoProgress() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchVideoTranscript = function fetchVideoTranscript() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateQuestDockVisibilityEligibility = function updateQuestDockVisibilityEligibility(isEligibleToBeVisible) {
  DispatcherDefault.dispatch({ type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE", isEligibleToBeVisible: isEligibleToBeVisible.isEligibleToBeVisible });
};
export const fetchQuest = function fetchQuest() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestPreview = function fetchQuestPreview() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestHomeHero = function fetchQuestHomeHero() {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestHomeHeroPreview = function fetchQuestHomeHeroPreview() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissQuestActivityModal = function dismissQuestActivityModal(id) {
  const obj = { type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id };
  obj.dispatch(obj);
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  const obj = { type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll };
  obj.dispatch(obj);
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  const obj = { type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  const obj = { type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  const obj = { type: "QUESTS_MARK_DISCOVERED", questId };
  obj.dispatch(obj);
};