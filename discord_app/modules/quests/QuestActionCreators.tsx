// === Module 9994: QuestActionCreators ===

// Module 9994 (QuestActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5083 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import SessionHeartbeatScheduler from "SessionHeartbeatScheduler" /* 6970 */;
import QuestDataUtils from "QuestDataUtils" /* 7183 */;
import VideoQuestUIStore2 from "VideoQuestUIStore" /* 7189 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import captureAdUserAction2 from "captureAdUserAction" /* 7213 */;
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore" /* 7216 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7223 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7224 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 9995 */;
import QuestDecisionRoundtripTrackerDefault from "QuestDecisionRoundtripTracker" /* 9996 */;
import EarnedDecisionRoundtripTrackerDefault from "EarnedDecisionRoundtripTracker" /* 10016 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7184 */;
import ExpandedGuildFolderStore from "ExpandedGuildFolderStore" /* 5617 */;
import NetworkStore from "NetworkStore" /* 4939 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import QuestStore from "QuestStore" /* 7187 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let _null, bounty, closure_5, enabled, map, quest, stack_trace, text, userStatus;

let closure_14;
let map1;
let obj = function _manuallyStartConsoleQuest() {
  obj = _asyncToGenerator(async function(arg0) {
    let error_hints_v2;
    let intl2;
    let items;
    let items1;
    let tmp43;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let message;
        let anyErrorMessage;
        let flag;
        let body;
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
            message = tmp;
            anyErrorMessage = tmp4;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            body = undefined;
            anyErrorMessage = undefined;
            message = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
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
            const request = { url: closure_132_14.QUEST_ON_CONSOLE_START(closure_0), query: tmp43, failImmediatelyWhenRateLimited: true, rejectWithError: false };
            const post = HTTP.post;
            tmp43 = undefined;
            if (flag) {
              const obj6 = { preview: flag };
              tmp43 = obj6;
            }
            c7 = 3;
            c8 = 1;
            const obj7 = { value: post(request), done: false };
            return obj7;
          }
        } else if (2 === c7) {
          c6 = 0;
          const self = this;
          const self2 = this;
          const tmp20 = new closure_132_1(closure_132_2[13])(closure_5);
          anyErrorMessage = tmp20;
          if (429 === anyErrorMessage.status) {
            const obj8 = { errorHints: items };
            const obj9 = { type: closure_132_0(closure_132_2[10]).QuestConsoleStartErrorLocal.RATE_LIMITED, message: intl2.string(closure_132_0(closure_132_2[14]).t.Whhv4w), connected_account_id: "", connected_account_type: "" };
            intl2 = closure_132_0(closure_132_2[14]).intl;
            items = [obj9];
            c8 = 3;
            const obj10 = { value: obj8, done: true };
            return obj10;
          } else {
            anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
            let closure_2 = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl = closure_132_0(closure_132_2[14]).intl;
              closure_2 = intl.string(closure_132_0(closure_132_2[14]).t.xSCvBf);
            }
            message = closure_2;
            const obj11 = { errorHints: items1 };
            const obj12 = { type: closure_132_0(closure_132_2[10]).QuestConsoleStartErrorLocal.GENERIC, message, connected_account_id: "", connected_account_type: "" };
            items1 = [obj12];
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
            const obj2 = closure_132_1(closure_132_2[12]);
            obj2.dispatch(obj15);
          } else if (null != body.error_hints_v2) {
            if (body.error_hints_v2.length > 0) {
              const obj16 = { errorHints: error_hints_v2.slice(0, 5) };
              error_hints_v2 = body.error_hints_v2;
              c6 = 0;
              c8 = 3;
              obj = { value: obj16, done: true };
              return obj;
            }
          }
          c6 = 0;
          const obj17 = { errorHints: [] };
          c8 = 3;
          const obj18 = { value: obj17, done: true };
          return obj18;
        }
      } catch (tmp45) {
        closure_5 = tmp45;
        if (0 === c6) {
          c8 = 3;
          throw tmp45;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _manualStopConsoleQuest() {
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
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: authStore2.QUEST_ON_CONSOLE_STOP(closure_0), rejectWithError: false };
            const post = HTTP.post;
            c2 = 1;
            c1 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
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
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _resetRecentQuestCompletions() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
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
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchCurrentQuests() {
  obj = _asyncToGenerator(async function() {
    let closure_3;
    let obj10;
    let tmp15;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tmp26;
      let c4;
      try {
        let items;
        let dispatch;
        let quests2;
        let questEnrollmentBlockedUntil;
        let questAccessSuspendedUntil;
        let quests;
        let rawIds;
        let closure_8;
        let droppedByConfigVersion;
        let validIds;
        let droppedByPlatformFilter;
        let removedFromStore;
        let excludedQuests;
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
            let closure_2 = tmp;
            items = undefined;
            dispatch = undefined;
            quests2 = undefined;
            tmp26 = undefined;
            questEnrollmentBlockedUntil = undefined;
            questAccessSuspendedUntil = undefined;
            quests = undefined;
            rawIds = undefined;
            closure_8 = undefined;
            droppedByConfigVersion = undefined;
            validIds = undefined;
            droppedByPlatformFilter = undefined;
            removedFromStore = undefined;
            excludedQuests = undefined;
            if (!QuestStore.isFetchingCurrentQuests) {
              let closure_0 = 0;
              quests = tmp64.quests;
              items = [];
              closure_0 = HermesBuiltin.arraySpread(items, quests.keys(), closure_0);
              const obj3 = DispatcherDefault;
              obj3.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj5 = { url: constants.QUESTS_CURRENT_QUESTS, rejectWithError: false };
              dispatch = HTTP.get(obj5);
              c5 = 2;
              c6 = 1;
              const obj6 = { value: dispatch, done: false };
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          let closure_14 = tmp26;
          dispatch = closure_130_1(closure_130_2[12]).dispatch;
          const obj7 = { type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: tmp15 };
          const self2 = this;
          const self = this;
          const tmp11 = closure_130_1(closure_130_2[12]);
          tmp15 = new closure_130_1(closure_130_2[13])(closure_14);
          dispatch(obj7);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dispatch = value;
          quests2 = dispatch.body.quests;
          const found = quests2.filter((item) => {
            obj = closure_1_0(closure_1_2[15]);
            return obj.isQuestWithKnownConfigVersion(item);
          });
          tmp26 = found.map((item) => {
            obj = closure_1_0(closure_1_2[15]);
            return obj.questWithUserStatusFromServer(item);
          });
          questEnrollmentBlockedUntil = dispatch.body.quest_enrollment_blocked_until;
          questAccessSuspendedUntil = dispatch.body.quest_access_suspended_until;
          quests = tmp26.filter((userStatus) => {
            userStatus = userStatus.userStatus;
            let claimedAt;
            if (userStatus != null) {
              claimedAt = userStatus.claimedAt;
            }
            return null != claimedAt || userStatus.config.rewardsConfig.platforms.length > 0;
          });
          rawIds = quests2.map((id) => id.id);
          closure_8 = tmp26.map((id) => id.id);
          droppedByConfigVersion = rawIds.filter((item) => !closure_1_8.includes(item));
          validIds = quests.map((id) => id.id);
          droppedByPlatformFilter = closure_8.filter((item) => !validIds.includes(item));
          removedFromStore = items.filter((item) => !validIds.includes(item));
          const obj9 = { category: "quests.fetch", message: "fetchCurrentQuests completed", data: obj10 };
          obj10 = { rawCount: rawIds.length, rawIds, validCount: validIds.length, validIds, prevQuestIds: items, droppedByConfigVersion, droppedByPlatformFilter, removedFromStore };
          const obj8 = closure_130_1(closure_130_2[16]);
          obj8.addBreadcrumb(obj9);
          const excluded_quests = dispatch.body.excluded_quests;
          excludedQuests = excluded_quests.map((item) => {
            obj = closure_1_0(closure_1_2[15]);
            return obj.excludedQuestFromServer(item);
          });
          const obj12 = { type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", quests, excludedQuests, questEnrollmentBlockedUntil, questAccessSuspendedUntil };
          const obj11 = closure_130_1(closure_130_2[12]);
          obj11.dispatch(obj12);
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp26) {
        if (0 === c4) {
          c6 = 3;
          throw tmp26;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendHeartbeat() {
  obj = _asyncToGenerator(async function(arg0) {
    let _var;
    let c0;
    let c1;
    let c2;
    let c4;
    let c5;
    let closure_3;
    let executable_fingerprint;
    let obj2;
    let obj6;
    let obj7;
    let obj8;
    let terminal;
    let tmp26;
    let closure_0 = arg0;
    const request = { url: closure_131_14.QUESTS_HEARTBEAT(questId), body: obj6, trackedActionData: obj7, rejectWithError: false };
    const post = closure_131_1(closure_131_2[17]).post;
    const tmp44 = closure_131_1(closure_131_2[17]);
    obj6 = { stream_key: _var, application_id, terminal, executable_path, executable_fingerprint };
    obj7 = { event: closure_131_0(closure_131_2[18]).NetworkActionNames.QUEST_HEARTBEAT, properties: obj8 };
    obj8 = { quest_id: questId, application_id, terminal, is_overlay: false, stack_trace: _var, is_playtime_eligible: true };
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error();
    const stack = error.stack;
    _var = stack;
    if (stack == null) {
      _var = "";
    }
    await post(request);
    if (2 === c6) {
      executable_fingerprint = 0;
      let closure_7 = closure_4;
      const obj10 = { type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: tmp26, questId, streamKey: _var };
      const dispatch2 = closure_131_1(closure_131_2[12]).dispatch;
      const self = this;
      const self2 = this;
      const tmp22 = closure_131_1(closure_131_2[12]);
      tmp26 = new closure_131_1(closure_131_2[13])(closure_7);
      dispatch2(obj10);
    } else if (arg0 === 1) {
      let c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      executable_fingerprint = 0;
      c7 = 3;
      const obj11 = { value, done: true };
      return obj11;
    } else {
      const body = value;
      obj = { type: "QUESTS_SEND_HEARTBEAT_SUCCESS", userStatus: obj2.questUserStatusFromServer(body.body), questId, streamKey: _var };
      const dispatch = closure_131_1(closure_131_2[12]).dispatch;
      const tmp9 = closure_131_1(closure_131_2[12]);
      obj2 = closure_131_0(closure_131_2[15]);
      dispatch(obj);
      executable_fingerprint = 0;
    }
    await "IconComponent";
    ({ questId: c0, streamKey: c1, applicationId: c2, terminal } = closure_0);
    if (terminal === undefined) {
      terminal = false;
    }
    ({ executablePath: c4, executableFingerprint: c5 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
obj = function _enrollInQuest() {
  let enrolling;
  obj = _asyncToGenerator(async (questId, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj16;
      let obj24;
      let tmp;
      let tmp3;
      let tmp45;
      let tmp46;
      function isCaptchaError(status) {
        let tmp = status instanceof questId(closure_1_2[19]).CaptchaCancelError;
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
      }
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          let tmp4 = c6;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              closure_1 = undefined;
              if (null != closure_1.questContentCTA) {
                const questContentCTA = tmp66.questContentCTA;
                const obj26 = AdAnalyticsInterfaceExperiment;
                if (obj26.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")) {
                  const obj5 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId, questContentCTA, surfaceId: null, sourceQuestContent: null, questContentPosition: null, questContentRowIndex: null };
                  const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
                  captureAdUserAction2;
                  ({ questContent: obj9.surfaceId, sourceQuestContent: obj9.sourceQuestContent, questContentPosition: obj9.questContentPosition, questContentRowIndex: obj9.questContentRowIndex } = closure_1);
                  captureAdUserAction(obj5);
                } else {
                  const obj6 = { questId, questContent: closure_1.questContent, questContentCTA, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null };
                  ({ questContentPosition: obj8.questContentPosition, questContentRowIndex: obj8.questContentRowIndex, sourceQuestContent: obj8.sourceQuestContent } = closure_1);
                  const tmp71Result2 = AnalyticsActions;
                  const result = tmp71Result2.trackQuestContentClicked(obj6);
                }
              }
              if (questId === ORBS_INTRO_QUEST_ID) {
                const obj10 = VirtualCurrencyUtils;
                const result1 = obj10.dismissOrbsOnboardingExperience();
              }
              if (enrolling.isEnrolling(questId)) {
                c7 = 3;
                return { value: { type: constants.PREVIOUS_IN_FLIGHT_REQUEST }, done: true };
              } else {
                const obj15 = { type: "QUESTS_ENROLL_BEGIN", questId };
                const obj11 = DispatcherDefault;
                obj11.dispatch(obj15);
                c5 = 1;
                const obj13 = QuestDataUtils;
                const adMetadataSealed = obj13.getAdMetadataSealed(tmp66.questContent);
                const obj14 = QuestDataUtils;
                const adTrafficMetadataSealed = obj14.getAdTrafficMetadataSealed(tmp66.questContent, questId);
                const HTTP = HTTPUtils.HTTP;
                const request = { url: closure_2_14.QUESTS_ENROLL(questId), body: obj16, rejectWithError: true };
                const post = HTTP.post;
                obj16 = { location: closure_1.questContent, metadata_sealed: tmp45, traffic_metadata_sealed: tmp46 };
                const obj17 = QuestDataUtils;
                const merged = Object.assign(obj17.getAdDecisionData(questId, tmp66.questContent));
                tmp45 = null;
                if (null != adMetadataSealed) {
                  tmp45 = adMetadataSealed;
                }
                tmp46 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp46 = adTrafficMetadataSealed;
                }
                c6 = 2;
                c7 = 1;
                const obj18 = { value: post(request), done: false };
                return obj18;
              }
            }
          } else if (1 === tmp4) {
            let tmp16;
            let tmp6 = closure_3;
            c5 = 0;
            closure_2 = closure_4;
            const obj19 = { type: "QUESTS_ENROLL_FAILURE", questId };
            const obj3 = closure_131_1(closure_131_2[12]);
            obj3.dispatch(obj19);
            const obj20 = { type: null };
            if (isCaptchaError(closure_2)) {
              obj20.type = closure_131_21.CAPTCHA_FAILED;
              tmp16 = obj20;
            } else {
              obj20.type = closure_131_21.UNKNOWN_ERROR;
              tmp16 = obj20;
            }
            c7 = 3;
            return { value: tmp16, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            const obj23 = { type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: obj24.questUserStatusFromServer(closure_1.body) };
            const dispatch = closure_131_1(closure_131_2[12]).dispatch;
            closure_131_1(closure_131_2[12]);
            obj24 = closure_131_0(closure_131_2[15]);
            dispatch(obj23);
            c5 = 0;
            c7 = 3;
            return { value: { type: closure_131_21.SUCCESS }, done: true };
          }
        } catch (tmp48) {
          closure_4 = tmp48;
          if (0 === c5) {
            c7 = 3;
            throw tmp48;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _claimQuestReward() {
  let claimingReward;
  obj = _asyncToGenerator(async (questId, arg1, arg2) => {
    let body = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj6;
      let tmp30;
      let tmp51;
      let tmp52;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              body = undefined;
              value = undefined;
              const tmp67 = body;
              if (claimingReward.isClaimingReward(questId)) {
                c8 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const obj5 = { type: "QUESTS_CLAIM_REWARD_BEGIN", questId };
                const obj8 = DispatcherDefault;
                obj8.dispatch(obj5);
                c6 = 1;
                const obj10 = QuestDataUtils;
                const adMetadataSealed = obj10.getAdMetadataSealed(tmp68);
                const obj11 = QuestDataUtils;
                const adTrafficMetadataSealed = obj11.getAdTrafficMetadataSealed(tmp68, questId);
                const HTTP = HTTPUtils.HTTP;
                const request = { url: closure_2_14.QUESTS_CLAIM_REWARD(questId), body: obj6, rejectWithError: false };
                const post = HTTP.post;
                obj6 = { platform: tmp67, location: value, metadata_sealed: tmp51, traffic_metadata_sealed: tmp52 };
                const obj14 = QuestDataUtils;
                const merged = Object.assign(obj14.getAdDecisionData(questId, tmp68));
                tmp51 = null;
                if (null != adMetadataSealed) {
                  tmp51 = adMetadataSealed;
                }
                tmp52 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp52 = adTrafficMetadataSealed;
                }
                c7 = 2;
                c8 = 1;
                const obj7 = { value: post(request), done: false };
                return obj7;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_3 = closure_5;
            const obj9 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: tmp30, questId };
            const dispatch = closure_132_1(closure_132_2[12]).dispatch;
            const self = this;
            const self2 = this;
            closure_132_1(closure_132_2[12]);
            tmp30 = new closure_132_1(closure_132_2[13])(closure_3);
            dispatch(obj9);
            throw closure_3;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj18 = closure_132_0(closure_132_2[15]);
            value = obj18.questsEntitlementsFromServer(body.body);
            if (0 === value.errors.length) {
              const obj13 = { type: "QUESTS_CLAIM_REWARD_SUCCESS", questId, entitlements: value };
              const obj3 = closure_132_1(closure_132_2[12]);
              obj3.dispatch(obj13);
            } else {
              const obj15 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: value.errors, questId };
              obj = closure_132_1(closure_132_2[12]);
              obj.dispatch(obj15);
            }
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
        } catch (tmp53) {
          closure_5 = tmp53;
          if (0 === c6) {
            c8 = 3;
            throw tmp53;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchQuestRewardCode() {
  let fetchingRewardCode;
  obj = _asyncToGenerator(async (questId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj2;
      let tmp25;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              body = undefined;
              if (!fetchingRewardCode.isFetchingRewardCode(questId)) {
                const obj6 = { type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId };
                const obj5 = DispatcherDefault;
                obj5.dispatch(obj6);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c5 = 2;
                c6 = 1;
                const obj7 = { url: closure_2_14.QUESTS_REWARD_CODE(questId), rejectWithError: false };
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj9 = { type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: tmp25, questId };
            const dispatch2 = closure_130_1(closure_130_2[12]).dispatch;
            const self = this;
            const self2 = this;
            closure_130_1(closure_130_2[12]);
            tmp25 = new closure_130_1(closure_130_2[13])(closure_2);
            dispatch2(obj9);
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            obj = { type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId, rewardCode: obj2.questsRewardCodeFromServer(body.body) };
            const dispatch = closure_130_1(closure_130_2[12]).dispatch;
            closure_130_1(closure_130_2[12]);
            obj2 = closure_130_0(closure_130_2[15]);
            dispatch(obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp36) {
          closure_3 = tmp36;
          if (0 === c4) {
            c6 = 3;
            throw tmp36;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _dismissQuestContent() {
  let dismissingContent;
  obj = _asyncToGenerator(async (arg0, content) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj15;
      let obj6;
      let tmp23;
      let tmp40;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              body = undefined;
              const isDismissingContentResult = dismissingContent.isDismissingContent(quest_id);
              const obj16 = QuestDataUtils;
              if (!isDismissingContentResult) {
                if (obj16.isDismissible(content)) {
                  const obj4 = { type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: quest_id, content };
                  const obj5 = DispatcherDefault;
                  obj5.dispatch(obj4);
                  c5 = 1;
                  const obj7 = QuestDataUtils;
                  const adTrafficMetadataSealed = obj7.getAdTrafficMetadataSealed(content, quest_id);
                  const HTTP = HTTPUtils.HTTP;
                  const request = { url: closure_2_14.QUESTS_DISMISS_CONTENT(quest_id, content), body: obj6, rejectWithError: false };
                  const post = HTTP.post;
                  obj6 = { traffic_metadata_sealed: tmp40 };
                  const obj10 = QuestDataUtils;
                  const merged = Object.assign(obj10.getAdDecisionData(quest_id, content));
                  tmp40 = null;
                  if (null != adTrafficMetadataSealed) {
                    tmp40 = adTrafficMetadataSealed;
                  }
                  c6 = 2;
                  c7 = 1;
                  const obj8 = { value: post(request), done: false };
                  return obj8;
                }
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_3 = closure_4;
            const obj9 = { type: "QUESTS_DISMISS_CONTENT_FAILURE", error: tmp23, questId: quest_id };
            const dispatch = closure_131_1(closure_131_2[12]).dispatch;
            const self = this;
            const self2 = this;
            closure_131_1(closure_131_2[12]);
            tmp23 = new closure_131_1(closure_131_2[13])(closure_3);
            dispatch(obj9);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj12 = { type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: obj15.questUserStatusFromServer(body.body) };
            const dispatch2 = closure_131_1(closure_131_2[12]).dispatch;
            closure_131_1(closure_131_2[12]);
            obj15 = closure_131_0(closure_131_2[15]);
            dispatch2(obj12);
            if (closure_131_15.has(content)) {
              const obj13 = { quest_id };
              obj = closure_131_0(closure_131_2[27]);
              obj.fireSurveyAction(closure_131_0(closure_131_2[28]).SurveyActionTypes.QUEST_DISMISSED, obj13);
            }
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp41) {
          closure_4 = tmp41;
          if (0 === c5) {
            c7 = 3;
            throw tmp41;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _completeQuestPreview() {
  obj = _asyncToGenerator(async function(questId) {
    let num7;
    let obj2;
    let obj6;
    let tmp24;
    let closure_1 = arg1;
    const HTTP = closure_131_0(closure_131_2[11]).HTTP;
    const request = { url: closure_131_14.QUESTS_PREVIEW_COMPLETE(questId), body: obj6, rejectWithError: false };
    const post = HTTP.post;
    obj6 = { percent: num7 };
    await post(request);
    if (2 === c6) {
      let c5 = 0;
      let closure_3 = closure_4;
      const obj8 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: tmp24, questId };
      const dispatch2 = closure_131_1(closure_131_2[12]).dispatch;
      const self = this;
      const self2 = this;
      const tmp20 = closure_131_1(closure_131_2[12]);
      tmp24 = new closure_131_1(closure_131_2[13])(closure_3);
      dispatch2(obj8);
    } else if (questId === 1) {
      let c7 = 3;
      throw value;
    } else if (questId === 2) {
      c5 = 0;
      c7 = 3;
      const obj9 = { value, done: true };
      return obj9;
    } else {
      let body = value;
      obj = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: obj2.questUserStatusFromServer(body.body) };
      const dispatch = closure_131_1(closure_131_2[12]).dispatch;
      const tmp9 = closure_131_1(closure_131_2[12]);
      obj2 = closure_131_0(closure_131_2[15]);
      dispatch(obj);
      c5 = 0;
    }
    await "IconComponent";
    closure_3 = tmp;
    body = tmp4;
    num7 = closure_1;
    if (closure_1 === undefined) {
      num7 = 1;
    }
    return "Set";
  });
  return obj(...arguments);
};
obj = function _resetQuestPreviewStatus() {
  obj = _asyncToGenerator(async (questId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj2;
      let tmp24;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_14.QUESTS_PREVIEW_STATUS(questId), body: {}, rejectWithError: false };
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: del(request), done: false };
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_2 = closure_3;
              const obj6 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: tmp24, questId };
              const dispatch2 = closure_130_1(closure_130_2[12]).dispatch;
              const self = this;
              const self2 = this;
              closure_130_1(closure_130_2[12]);
              tmp24 = new closure_130_1(closure_130_2[13])(closure_2);
              dispatch2(obj6);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value;
              obj = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: obj2.questUserStatusFromServer(body.body) };
              const dispatch = closure_130_1(closure_130_2[12]).dispatch;
              closure_130_1(closure_130_2[12]);
              obj2 = closure_130_0(closure_130_2[15]);
              dispatch(obj);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _resetQuestDismissibilityStatus() {
  obj = _asyncToGenerator(async (questId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj2;
      let tmp24;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              body = undefined;
              c4 = 1;
              const obj8 = DispatcherDefault;
              obj8.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_14.QUESTS_PREVIEW_DISMISSIBILITY(questId), body: {}, rejectWithError: false };
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: del(request), done: false };
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              closure_2 = closure_3;
              const obj6 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: tmp24, questId };
              const dispatch2 = closure_130_1(closure_130_2[12]).dispatch;
              const self = this;
              const self2 = this;
              closure_130_1(closure_130_2[12]);
              tmp24 = new closure_130_1(closure_130_2[13])(closure_2);
              dispatch2(obj6);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value;
              obj = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: obj2.questUserStatusFromServer(body.body) };
              const dispatch = closure_130_1(closure_130_2[12]).dispatch;
              closure_130_1(closure_130_2[12]);
              obj2 = closure_130_0(closure_130_2[15]);
              dispatch(obj);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchClaimedQuests() {
  obj = _asyncToGenerator(async function() {
    let tmp21;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let quests;
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
            closure_1 = tmp;
            quests = undefined;
            if (!QuestStore.isFetchingClaimedQuests) {
              const obj5 = DispatcherDefault;
              obj5.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
              c3 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj4 = { url: constants.QUESTS_CLAIMED_QUESTS, rejectWithError: false };
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.get(obj4), done: false };
              return obj6;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj7 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: tmp21 };
          const dispatch = closure_129_1(closure_129_2[12]).dispatch;
          const self = this;
          const self2 = this;
          const tmp17 = closure_129_1(closure_129_2[12]);
          tmp21 = new closure_129_1(closure_129_2[13])(closure_1);
          dispatch(obj7);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          quests = value.body.quests;
          quests = quests.map((item) => {
            obj = quests(closure_1_2[15]);
            return obj.getClaimedQuestWithUserStatusFromServer(item);
          });
          obj = closure_129_1(closure_129_2[12]);
          const obj9 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests };
          obj.dispatch(obj9);
          c3 = 0;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp30) {
        closure_2 = tmp30;
        if (0 === c3) {
          c5 = 3;
          throw tmp30;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchQuestToDeliver() {
  obj = _asyncToGenerator(async (placement, caller_source) => {
    let closure_4;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value) {
      let creative_type;
      let creative_type1;
      let folderExpanded;
      let obj17;
      let obj22;
      let obj26;
      let obj32;
      let tmp172;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let items;
          let closure_9;
          let uRLSearchParams;
          let body;
          let obj24;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              tmp = undefined;
              enabled = undefined;
              items = undefined;
              let node;
              closure_9 = undefined;
              uRLSearchParams = undefined;
              quest = undefined;
              body = undefined;
              obj24 = undefined;
              bounty = undefined;
              prop = undefined;
              const _Date = Date;
              _null = Date.now();
              const obj29 = QuestDecisionRoundtripTrackerDefault;
              const result = obj29.recordQuestRequestAttempt("/quests/decision", caller_source, placement);
              const obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement };
              const obj30 = DispatcherDefault;
              obj30.dispatch(obj5);
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj6 = { value: obj32.getSession(), done: false };
              obj32 = SessionHeartbeatScheduler;
              return obj6;
            }
          } else {
            if (1 === c7) {
              c6 = 0;
              const obj7 = { wasSuccessful: false, currentFetchedAt: _null };
              const obj19 = closure_132_1(closure_132_2[29]);
              const result1 = obj19.recordQuestRequestApiResponse("/quests/decision", obj7);
              prop = closure_132_13.QUEST_DECISION_ROUNDTRIP_ERROR;
              const obj9 = { reason: _null, api_error: obj22.getAnyErrorMessage(), caller_source };
              const track2 = closure_132_1(closure_132_2[37]).track;
              closure_132_1(closure_132_2[37]);
              const merged = Object.assign(closure_132_1(closure_132_2[38])());
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              _null = message;
              if (message == null) {
                _null = null;
              }
              const self3 = this;
              const self4 = this;
              obj22 = new closure_132_1(closure_132_2[13])(message);
              track2(prop, obj9);
              prop = closure_132_1(closure_132_2[12]).dispatch;
              const self5 = this;
              const self6 = this;
              const obj10 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: tmp172, placement };
              closure_132_1(closure_132_2[12]);
              tmp172 = new closure_132_1(closure_132_2[13])(message);
              prop(obj10);
            } else if (2 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                const obj16 = closure_132_0(closure_132_2[31]);
                prop = obj16.getOrRefreshAdSession();
                c7 = 3;
                c8 = 1;
                return { value: prop, done: false };
              }
            } else if (3 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                tmp = value;
                const LessPersonalizedAdsExperiment = closure_132_0(closure_132_2[32]).LessPersonalizedAdsExperiment;
                enabled = LessPersonalizedAdsExperiment.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" });
                prop = closure_132_5();
                if (null != prop) {
                  items = prop();
                } else {
                  items = [];
                }
                node = closure_132_8.getGuildsTree();
                const found = items.filter((item) => {
                  obj = placement(c2[33]);
                  if (obj.isPseudoGuildId(item)) {
                    return false;
                  } else {
                    node = node.getNode(item);
                    let parentId;
                    if (node != null) {
                      parentId = node.parentId;
                    }
                    const isFolderExpandedResult = null == parentId || folderExpanded.isFolderExpanded(node.parentId);
                    return isFolderExpandedResult;
                  }
                });
                closure_9 = found.slice(0, 50);
                prop = undefined;
                if (enabled.enabled) {
                  prop = closure_9;
                }
                const _URLSearchParams = URLSearchParams;
                const _String3 = String;
                const self = this;
                const self2 = this;
                const obj14 = { placement: String(placement) };
                uRLSearchParams = new URLSearchParams(obj14);
                let uuid;
                if (prop != null) {
                  uuid = prop.uuid;
                }
                if (null != uuid) {
                  uRLSearchParams.append("client_heartbeat_session_id", prop.uuid);
                }
                if (null != tmp.uuid) {
                  uRLSearchParams.append("client_ad_session_id", tmp.uuid);
                }
                if (null != prop) {
                  const item = prop.forEach((item) => closure_1_11.append("visible_guild_ids", item));
                }
                const HTTP = closure_132_0(closure_132_2[11]).HTTP;
                const get = HTTP.get;
                const _HermesInternal = HermesInternal;
                const obj15 = { url: "" + closure_132_14.QUEST_FETCH_QUEST_TO_DELIVER + "?" + uRLSearchParams.toString(), rejectWithError: false, context: obj17 };
                obj17 = { connection_type: closure_132_7.getType() };
                prop = get(obj15);
                c7 = 4;
                c8 = 1;
                return { value: prop, done: false };
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const creative = body.creative;
              prop = undefined;
              if (creative != null) {
                prop = creative.creative_type;
              }
              if (prop !== closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY) {
                prop = body.creative;
              } else {
                const BountiesMobileQuestBarExperiment = closure_132_0(closure_132_2[34]).BountiesMobileQuestBarExperiment;
                prop = null;
              }
              obj24 = null;
              if (null != prop) {
                prop = prop.creative_type;
                if (closure_132_0(closure_132_2[23]).AdCreativeType.QUEST === prop) {
                  const obj3 = closure_132_0(closure_132_2[15]);
                  quest = obj3.questConfigFromServer(prop.creative_content);
                  obj24 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST, questId: quest.id };
                  const obj21 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST, questId: quest.id };
                } else if (closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY === prop) {
                  obj = closure_132_0(closure_132_2[35]);
                  bounty = obj.bountyFromServer(prop.creative_content);
                  obj24 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY, bounty };
                  const obj23 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.BOUNTY, bounty };
                } else {
                  prop = closure_132_0;
                  const NO_FILL = closure_132_0(closure_132_2[23]).AdCreativeType.NO_FILL;
                }
              } else {
                prop = body.quest;
                if (null != prop) {
                  const obj27 = closure_132_0(closure_132_2[15]);
                  quest = obj27.questConfigFromServer(prop);
                  obj24 = { type: closure_132_0(closure_132_2[23]).AdCreativeType.QUEST, questId: quest.id };
                }
              }
              prop = prop == null;
              const obj25 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", quest, creative: obj24, isNoFill: creative_type === closure_132_0(closure_132_2[23]).AdCreativeType.NO_FILL, adDecisionData: obj26, metadataSealed: body.metadata_sealed, trafficMetadataSealed: body.traffic_metadata_sealed, provenanceMetadataSealed: body.provenance_metadata_sealed, adContext: body.ad_context, responseTtlSeconds: body.response_ttl_seconds, placement, fetchedAt: _null };
              creative_type = undefined;
              const dispatch = closure_132_1(closure_132_2[12]).dispatch;
              closure_132_1(closure_132_2[12]);
              if (!prop) {
                creative_type = prop.creative_type;
              }
              const ad_identifiers = body.ad_identifiers;
              prop = undefined;
              if (ad_identifiers != null) {
                prop = ad_identifiers.ad_id;
              }
              const ad_identifiers2 = body.ad_identifiers;
              obj26 = { ad_id: prop, adset_id: prop, ad_set_id: prop, campaign_id: prop, creative_id: prop, creative_type: creative_type1, decision_id: body.request_id, is_targeted: null != body.ad_identifiers };
              prop = undefined;
              if (ad_identifiers2 != null) {
                prop = ad_identifiers2.adset_id;
              }
              const ad_identifiers3 = body.ad_identifiers;
              prop = undefined;
              if (ad_identifiers3 != null) {
                prop = ad_identifiers3.ad_set_id;
              }
              const ad_identifiers4 = body.ad_identifiers;
              prop = undefined;
              if (ad_identifiers4 != null) {
                prop = ad_identifiers4.campaign_id;
              }
              const ad_identifiers5 = body.ad_identifiers;
              prop = undefined;
              if (ad_identifiers5 != null) {
                prop = ad_identifiers5.creative_id;
              }
              const ad_identifiers6 = body.ad_identifiers;
              prop = ad_identifiers6 == null;
              creative_type1 = undefined;
              if (!prop) {
                creative_type1 = ad_identifiers6.creative_type;
              }
              dispatch(obj25);
              const _String = String;
              const obj28 = { wasSuccessful: true, adRequestId: String(body.request_id), currentCreative: obj24, currentFetchedAt: _null };
              const recordQuestRequestApiResponse = closure_132_1(closure_132_2[29]).recordQuestRequestApiResponse;
              closure_132_1(closure_132_2[29]);
              prop = recordQuestRequestApiResponse("/quests/decision", obj28);
              if (null == quest) {
                c6 = 0;
                c8 = 3;
                return { value: "IconComponent", done: null };
              } else {
                prop = placement;
                if (placement === closure_132_0(closure_132_2[10]).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                  const obj8 = closure_132_1(closure_132_2[36]);
                  obj8.startTracking(quest.id);
                }
                prop = closure_132_13.QUEST_DECISION_RECEIVED;
                const obj31 = { quest_id: quest.id, caller_source, ad_request_id: String(body.request_id) };
                const track = closure_132_1(closure_132_2[37]).track;
                closure_132_1(closure_132_2[37]);
                const merged1 = Object.assign(closure_132_1(closure_132_2[38])());
                const _String2 = String;
                track(prop, obj31);
                c6 = 0;
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp176) {
          enabled = tmp176;
          if (0 === c6) {
            c8 = 3;
            throw tmp176;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchEarnedQuestToDeliver() {
  let fetchingEarnedQuestToDeliverByPlacement;
  obj = _asyncToGenerator(async (content, arg1, arg2) => {
    let closure_6;
    content = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2) {
      let obj17;
      let tmp25;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp31;
        try {
          let found;
          let response_ttl_seconds;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              let prop;
              found = undefined;
              _null = undefined;
              get = undefined;
              closure_5 = undefined;
              tmp31 = undefined;
              let quests;
              response_ttl_seconds = undefined;
              map = undefined;
              const arr2 = content;
              if (!fetchingEarnedQuestToDeliverByPlacement.isFetchingEarnedQuestToDeliverByPlacement(content)) {
                const earnedQuestForPlacement = fetchingEarnedQuestToDeliverByPlacement.earnedQuestForPlacement;
                value = earnedQuestForPlacement.get(content);
                prop = undefined;
                if (value != null) {
                  prop = value.earnedDecisionByQuestId;
                }
                found = arr2.filter((item) => {
                  let value;
                  if (closure_1_1 != null) {
                    value = closure_1_1.get(item);
                  }
                  const obj2 = content(closure_2_2[26]);
                  return !obj2.earnedDecisionIsValid(value);
                });
                if (0 !== found.length) {
                  const _Date = Date;
                  _null = Date.now();
                  const obj14 = EarnedDecisionRoundtripTrackerDefault;
                  const result = obj14.recordEarnedRequestAttempt(content, closure_2);
                  const obj4 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content };
                  const obj15 = DispatcherDefault;
                  obj15.dispatch(obj4);
                  c7 = 1;
                  c8 = 2;
                  c9 = 1;
                  const obj5 = { value: obj17.getSession(), done: false };
                  obj17 = SessionHeartbeatScheduler;
                  return obj5;
                }
              }
            }
          } else if (1 === c8) {
            c7 = 0;
            let closure_10 = tmp31;
            const obj7 = { wasSuccessful: false, fetchedAt: _null };
            const obj6 = closure_133_1(closure_133_2[39]);
            const result1 = obj6.recordEarnedRequestApiResponse(content, obj7);
            get = closure_133_1(closure_133_2[12]).dispatch;
            const self = this;
            const self2 = this;
            const obj8 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: tmp25, content };
            closure_133_1(closure_133_2[12]);
            tmp25 = new closure_133_1(closure_133_2[13])(closure_10);
            const value2 = get(obj8);
          } else if (2 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = found.join(",");
              const HTTP = closure_133_0(closure_133_2[11]).HTTP;
              get = HTTP.get;
              let uuid;
              const QUEST_EARNED_DECISION = closure_133_14.QUEST_EARNED_DECISION;
              const tmp63 = closure_5;
              const tmp64 = content;
              if (get != null) {
                uuid = get.uuid;
              }
              const obj10 = { url: QUEST_EARNED_DECISION(tmp63, tmp64, uuid), rejectWithError: false };
              get = get(obj10);
              c8 = 3;
              c9 = 1;
              return { value: get, done: false };
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            tmp31 = value;
            quests = tmp31.body.quests;
            response_ttl_seconds = tmp31.body.response_ttl_seconds;
            const _Map = Map;
            const self3 = this;
            const self4 = this;
            map = new Map(found.map((item) => {
              let tmp;
              if (closure_1_7 != null) {
                tmp = closure_1_7[item];
              }
              const items = [item, ];
              let tmp2 = null;
              if (null != tmp) {
                tmp2 = null;
                obj = content(closure_2[15]);
                if (obj.isQuestWithKnownConfigVersion(tmp)) {
                  tmp2 = tmp;
                }
              }
              items[1] = tmp2;
              return items;
            }));
            const obj16 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS", serverQuests: map, content, fetchedAt: _null, responseTtlSeconds: response_ttl_seconds };
            const obj12 = closure_133_1(closure_133_2[12]);
            obj12.dispatch(obj16);
            get = content;
            const request_id = tmp31.body.request_id;
            _null = request_id;
            const recordEarnedRequestApiResponse = closure_133_1(closure_133_2[39]).recordEarnedRequestApiResponse;
            closure_133_1(closure_133_2[39]);
            if (request_id == null) {
              _null = null;
            }
            obj = { wasSuccessful: true, requestId: _null, fetchedAt: _null };
            const result2 = recordEarnedRequestApiResponse(get, obj);
            c7 = 0;
          }
          c9 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp31) {
          if (0 === c7) {
            c9 = 3;
            throw tmp31;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updateVideoProgress() {
  obj = _asyncToGenerator(async (quest_id, timestamp) => {
    let c4 = 0;
    let c3 = 0;
    return (async function(arg0, value) {
      let obj4;
      let obj5;
      let obj6;
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
            } else {
              const request = { url: closure_2_14.QUESTS_VIDEO_PROGRESS(quest_id), body: obj4, trackedActionData: obj5, rejectWithError: false };
              const post = TrackedHTTPUtilsDefault.post;
              TrackedHTTPUtilsDefault;
              obj4 = { timestamp };
              obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.QUEST_VIDEO_PROGRESS, properties: obj6 };
              const _Error = Error;
              const self = this;
              const self2 = this;
              obj6 = { quest_id, timestamp_sec: timestamp.toString(), stack_trace };
              const error = new Error();
              const stack = error.stack;
              stack_trace = stack;
              if (stack == null) {
                stack_trace = "";
              }
              c4 = 1;
              c3 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c3 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchVideoTranscript() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let closure_4;
    const user = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0) => {
      let flag;
      let questAsset;
      if (1 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else {
          const obj15 = closure_131_0(closure_131_2[40]);
          questAsset = obj15.getQuestAsset(user, closure_131_0(closure_131_2[40]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, flag);
          if (null != questAsset) {
            const state = closure_131_10.getState();
            const obj4 = { questId: user.id, fetchStatus: closure_131_11.FETCHING };
            state.setTranscriptAsset(obj4);
            c5 = 1;
            const HTTP = closure_131_0(closure_131_2[11]).HTTP;
            c6 = 3;
            c7 = 1;
            const obj5 = { url: questAsset.url, rejectWithError: true };
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          } else {
            const state1 = closure_131_10.getState();
            const obj7 = { questId: user.id, fetchStatus: closure_131_11.FAILURE };
            state1.setTranscriptAsset(obj7);
          }
        }
      } else if (2 === c6) {
        c5 = 0;
        const state2 = closure_131_10.getState();
        const obj8 = { questId: user.id, fetchStatus: closure_131_11.FAILURE };
        state2.setTranscriptAsset(obj8);
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        return { value, done: true };
      } else {
        text = value;
        const state3 = closure_131_10.getState();
        const obj10 = { questId: user.id, fetchStatus: closure_131_11.SUCCESS, text: text.text, url: questAsset.url };
        state3.setTranscriptAsset(obj10);
        c5 = 0;
      }
      await "IconComponent";
      text = tmp;
      questAsset = tmp4;
      flag = closure_1;
      if (closure_1 === undefined) {
        flag = false;
      }
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchQuest() {
  obj = _asyncToGenerator(async (arg0) => {
    let body = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c3 = 1;
              c4 = 1;
              const obj4 = { url: closure_2_14.QUEST(body), rejectWithError: false };
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            body = value;
            c4 = 3;
            const obj7 = { value: obj.questConfigFromServer(body.body), done: true };
            obj = closure_130_0(closure_130_2[15]);
            return obj7;
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchQuestPreview() {
  let fetchingQuestPreview;
  obj = _asyncToGenerator(async (questId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj2;
      let tmp25;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              body = undefined;
              if (!fetchingQuestPreview.isFetchingQuestPreview(questId)) {
                const obj6 = { type: "QUESTS_FETCH_PREVIEW_BEGIN", questId };
                const obj5 = DispatcherDefault;
                obj5.dispatch(obj6);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c5 = 2;
                c6 = 1;
                const obj7 = { url: closure_2_14.QUEST_PREVIEW(questId), rejectWithError: false };
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj9 = { type: "QUESTS_FETCH_PREVIEW_FAILURE", error: tmp25, questId };
            const dispatch2 = closure_130_1(closure_130_2[12]).dispatch;
            const self = this;
            const self2 = this;
            closure_130_1(closure_130_2[12]);
            tmp25 = new closure_130_1(closure_130_2[13])(closure_2);
            dispatch2(obj9);
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            obj = { type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId, quest: obj2.questWithUserStatusFromServer(body.body) };
            const dispatch = closure_130_1(closure_130_2[12]).dispatch;
            closure_130_1(closure_130_2[12]);
            obj2 = closure_130_0(closure_130_2[15]);
            dispatch(obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp36) {
          closure_3 = tmp36;
          if (0 === c4) {
            c6 = 3;
            throw tmp36;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchQuestHomeHero() {
  let fetchingAdToDeliverByPlacement;
  obj = _asyncToGenerator(async function() {
    let ad_context;
    let ad_identifiers1;
    let ad_set_id;
    let campaign_id;
    let closure_3;
    let creative_id;
    let creative_type1;
    let metadata_sealed;
    let obj14;
    let obj19;
    let prop;
    let prop1;
    let response_ttl_seconds;
    let tmp85;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let fetchedAt;
        let dispatch;
        let tmp;
        let uRLSearchParams;
        let body;
        let closure_6;
        let creative_type;
        let questHomeHero;
        let QUEST_HOME_BANNER_DESKTOP;
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
            fetchedAt = undefined;
            dispatch = undefined;
            tmp = undefined;
            uRLSearchParams = undefined;
            body = undefined;
            closure_6 = undefined;
            creative_type = undefined;
            questHomeHero = undefined;
            QUEST_HOME_BANNER_DESKTOP = QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
            if (!fetchingAdToDeliverByPlacement.isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
              const lastFetchedQuestHomeHero = fetchingAdToDeliverByPlacement.getLastFetchedQuestHomeHero();
              if (null != lastFetchedQuestHomeHero) {
                const _Date = Date;
              }
              const _Date2 = Date;
              fetchedAt = Date.now();
              const obj4 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: QUEST_HOME_BANNER_DESKTOP };
              const obj13 = DispatcherDefault;
              obj13.dispatch(obj4);
              c5 = 1;
              const obj15 = SessionHeartbeatScheduler;
              dispatch = obj15.getSession();
              c6 = 2;
              c7 = 1;
              const obj5 = { value: dispatch, done: false };
              return obj5;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          let closure_9 = closure_4;
          const obj6 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: tmp85, placement: QUEST_HOME_BANNER_DESKTOP };
          const dispatch2 = closure_131_1(closure_131_2[12]).dispatch;
          const self = this;
          const self2 = this;
          const tmp81 = closure_131_1(closure_131_2[12]);
          tmp85 = new closure_131_1(closure_131_2[13])(closure_9);
          dispatch = dispatch2(obj6);
          throw closure_9;
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const obj9 = closure_131_0(closure_131_2[31]);
            dispatch = obj9.getOrRefreshAdSession();
            c6 = 3;
            c7 = 1;
            const obj8 = { value: dispatch, done: false };
            return obj8;
          }
        } else if (3 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            tmp = value;
            const _URLSearchParams = URLSearchParams;
            const obj11 = { placement: String(QUEST_HOME_BANNER_DESKTOP), num_decisions_requested: "1" };
            const _String = String;
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj11);
            let uuid;
            if (dispatch != null) {
              uuid = dispatch.uuid;
            }
            if (null != uuid) {
              uRLSearchParams.append("client_heartbeat_session_id", dispatch.uuid);
            }
            if (null != tmp.uuid) {
              uRLSearchParams.append("client_ad_session_id", tmp.uuid);
            }
            const HTTP = closure_131_0(closure_131_2[11]).HTTP;
            const obj12 = { url: "" + closure_131_14.QUESTS_GET_DECISIONS + "?" + uRLSearchParams.toString(), rejectWithError: false, context: obj14 };
            const get = HTTP.get;
            const _HermesInternal = HermesInternal;
            obj14 = { connection_type: closure_131_7.getType() };
            dispatch = get(obj12);
            c6 = 4;
            c7 = 1;
            const obj16 = { value: dispatch, done: false };
            return obj16;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          body = value.body;
          dispatch = body.decisions;
          let first;
          if (dispatch != null) {
            first = dispatch[0];
          }
          let c0 = first;
          if (first == null) {
            c0 = null;
          }
          closure_6 = c0;
          dispatch = closure_6;
          let creative;
          if (closure_6 != null) {
            creative = dispatch.creative;
          }
          let c1 = creative;
          if (creative == null) {
            c1 = null;
          }
          dispatch = c1;
          creative_type = c1;
          questHomeHero = null;
          let tmp11 = null != creative_type;
          if (tmp11) {
            creative_type = creative_type.creative_type;
            tmp11 = creative_type === closure_131_0(closure_131_2[23]).AdCreativeType.QUEST_HOME_HERO;
          }
          if (tmp11) {
            obj = closure_131_0(closure_131_2[42]);
            questHomeHero = obj.questHomeHeroFromServer(creative_type);
          }
          dispatch = closure_131_1(closure_131_2[12]).dispatch;
          const obj18 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero, adDecisionData: obj19, metadataSealed: metadata_sealed, trafficMetadataSealed: prop, provenanceMetadataSealed: prop1, adContext: ad_context, responseTtlSeconds: response_ttl_seconds, placement: QUEST_HOME_BANNER_DESKTOP, fetchedAt };
          let ad_id;
          const tmp25 = closure_131_1(closure_131_2[12]);
          if (closure_6 != null) {
            const ad_identifiers = closure_6.ad_identifiers;
            if (ad_identifiers != null) {
              ad_id = ad_identifiers.ad_id;
            }
          }
          obj19 = { ad_id, ad_set_id, campaign_id, creative_id, creative_type: creative_type1, decision_id: body.request_id, is_targeted: null != ad_identifiers1 };
          ad_set_id = undefined;
          if (closure_6 != null) {
            const ad_identifiers2 = closure_6.ad_identifiers;
            if (ad_identifiers2 != null) {
              ad_set_id = ad_identifiers2.ad_set_id;
            }
          }
          campaign_id = undefined;
          if (closure_6 != null) {
            const ad_identifiers3 = closure_6.ad_identifiers;
            if (ad_identifiers3 != null) {
              campaign_id = ad_identifiers3.campaign_id;
            }
          }
          creative_id = undefined;
          if (closure_6 != null) {
            const ad_identifiers4 = closure_6.ad_identifiers;
            if (ad_identifiers4 != null) {
              creative_id = ad_identifiers4.creative_id;
            }
          }
          creative_type1 = undefined;
          if (closure_6 != null) {
            const ad_identifiers5 = closure_6.ad_identifiers;
            if (ad_identifiers5 != null) {
              creative_type1 = ad_identifiers5.creative_type;
            }
          }
          ad_identifiers1 = undefined;
          if (closure_6 != null) {
            ad_identifiers1 = closure_6.ad_identifiers;
          }
          metadata_sealed = undefined;
          if (closure_6 != null) {
            metadata_sealed = closure_6.metadata_sealed;
          }
          prop = undefined;
          if (closure_6 != null) {
            prop = closure_6.traffic_metadata_sealed;
          }
          prop1 = undefined;
          if (closure_6 != null) {
            prop1 = closure_6.provenance_metadata_sealed;
          }
          ad_context = undefined;
          if (closure_6 != null) {
            ad_context = closure_6.ad_context;
          }
          response_ttl_seconds = undefined;
          if (closure_6 != null) {
            response_ttl_seconds = closure_6.response_ttl_seconds;
          }
          dispatch(obj18);
          c5 = 0;
        }
        c7 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp96) {
        closure_4 = tmp96;
        if (0 === c5) {
          c7 = 3;
          throw tmp96;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchQuestHomeHeroPreview() {
  obj = _asyncToGenerator(async function(arg0) {
    let ad_context;
    let ad_identifiers1;
    let ad_set_id;
    let campaign_id;
    let creative_id;
    let metadata_sealed;
    let obj11;
    let prop;
    let prop1;
    let response_ttl_seconds;
    let tmp64;
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      let questHomeHero;
      try {
        let body;
        let dispatch;
        let creative_type;
        let QUEST_HOME_BANNER_DESKTOP;
        let fetchedAt;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            body = undefined;
            dispatch = undefined;
            creative_type = undefined;
            questHomeHero = undefined;
            QUEST_HOME_BANNER_DESKTOP = QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
            const _Date = Date;
            fetchedAt = Date.now();
            const obj4 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: QUEST_HOME_BANNER_DESKTOP };
            const obj9 = DispatcherDefault;
            obj9.dispatch(obj4);
            c6 = 1;
            const _URLSearchParams = URLSearchParams;
            const items = ["ad_creative_ids", closure_0];
            const items1 = [items, ];
            const _String = String;
            const items2 = ["placement", String(QUEST_HOME_BANNER_DESKTOP)];
            items1[1] = items2;
            const self3 = this;
            const self4 = this;
            const str4 = new URLSearchParams(items1);
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: "" + constants.QUESTS_CREATIVE_PREVIEW + "?" + str4.toString(), rejectWithError: false };
            const get = HTTP.get;
            const _HermesInternal = HermesInternal;
            c7 = 2;
            c8 = 1;
            const obj6 = { value: get(obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp4) {
          c6 = 0;
          let closure_6 = questHomeHero;
          dispatch = closure_132_1(closure_132_2[12]).dispatch;
          const obj7 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: tmp64, placement: QUEST_HOME_BANNER_DESKTOP };
          const self = this;
          const self2 = this;
          const tmp60 = closure_132_1(closure_132_2[12]);
          tmp64 = new closure_132_1(closure_132_2[13])(closure_6);
          dispatch(obj7);
          throw closure_6;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          const decisions = body.decisions;
          dispatch = decisions == null;
          let first;
          if (!dispatch) {
            first = decisions[0];
          }
          let c1 = first;
          if (first == null) {
            c1 = null;
          }
          dispatch = c1;
          dispatch = dispatch == null;
          let creative;
          if (!dispatch) {
            creative = dispatch.creative;
          }
          let c2 = creative;
          if (creative == null) {
            c2 = null;
          }
          creative_type = c2;
          questHomeHero = null;
          const tmp12 = null != creative_type && creative_type.creative_type === closure_132_0(closure_132_2[23]).AdCreativeType.QUEST_HOME_HERO;
          if (tmp12) {
            obj = closure_132_0(closure_132_2[42]);
            questHomeHero = obj.questHomeHeroFromServer(creative_type);
          }
          dispatch = closure_132_1(closure_132_2[12]);
          const obj10 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero, adDecisionData: obj11, metadataSealed: metadata_sealed, trafficMetadataSealed: prop, provenanceMetadataSealed: prop1, adContext: ad_context, responseTtlSeconds: response_ttl_seconds, placement: QUEST_HOME_BANNER_DESKTOP, fetchedAt };
          let ad_id;
          const dispatch2 = dispatch.dispatch;
          if (dispatch != null) {
            const ad_identifiers = dispatch.ad_identifiers;
            if (ad_identifiers != null) {
              ad_id = ad_identifiers.ad_id;
            }
          }
          obj11 = { ad_id, ad_set_id, campaign_id, creative_id, creative_type, decision_id: body.request_id, is_targeted: null != ad_identifiers1 };
          ad_set_id = undefined;
          if (dispatch != null) {
            const ad_identifiers2 = dispatch.ad_identifiers;
            if (ad_identifiers2 != null) {
              ad_set_id = ad_identifiers2.ad_set_id;
            }
          }
          campaign_id = undefined;
          if (dispatch != null) {
            const ad_identifiers3 = dispatch.ad_identifiers;
            if (ad_identifiers3 != null) {
              campaign_id = ad_identifiers3.campaign_id;
            }
          }
          creative_id = undefined;
          if (dispatch != null) {
            const ad_identifiers4 = dispatch.ad_identifiers;
            if (ad_identifiers4 != null) {
              creative_id = ad_identifiers4.creative_id;
            }
          }
          creative_type = undefined;
          if (dispatch != null) {
            const ad_identifiers5 = dispatch.ad_identifiers;
            if (ad_identifiers5 != null) {
              creative_type = ad_identifiers5.creative_type;
            }
          }
          ad_identifiers1 = undefined;
          if (dispatch != null) {
            ad_identifiers1 = dispatch.ad_identifiers;
          }
          metadata_sealed = undefined;
          if (dispatch != null) {
            metadata_sealed = dispatch.metadata_sealed;
          }
          prop = undefined;
          if (dispatch != null) {
            prop = dispatch.traffic_metadata_sealed;
          }
          prop1 = undefined;
          if (dispatch != null) {
            prop1 = dispatch.provenance_metadata_sealed;
          }
          ad_context = undefined;
          if (dispatch != null) {
            ad_context = dispatch.ad_context;
          }
          response_ttl_seconds = undefined;
          if (dispatch != null) {
            response_ttl_seconds = dispatch.response_ttl_seconds;
          }
          dispatch2(obj10);
          c6 = 0;
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp69) {
        questHomeHero = tmp69;
        if (0 === c6) {
          c8 = 3;
          throw tmp69;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const getVisibleGuildIdsMethod = SidebarVisibilityMethodStore.getVisibleGuildIdsMethod;
const FetchStatus = VideoQuestUIStore2.FetchStatus;
const ORBS_INTRO_QUEST_ID = QuestConstants.ORBS_INTRO_QUEST_ID;
({ AnalyticEvents: map1, Endpoints: closure_14 } = Constants);
let items = [QuestTypes.QuestContent.QUEST_BAR, QuestTypes.QuestContent.QUEST_BAR_V2, QuestTypes.QuestContent.QUEST_BAR_MOBILE];
new Set(items);
obj = { SUCCESS: "success", CAPTCHA_FAILED: "captcha_failed", UNKNOWN_ERROR: "unknown_error", PREVIOUS_IN_FLIGHT_REQUEST: "previous_in_flight_request" };
let closure_36 = 5 * DurationsDefault.Millis.MINUTE;
let result = size.fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

export const manuallyStartConsoleQuest = function manuallyStartConsoleQuest() {
  return obj(...arguments);
};
export const manualStopConsoleQuest = function manualStopConsoleQuest() {
  return obj(...arguments);
};
export const resetRecentQuestCompletions = function resetRecentQuestCompletions() {
  return obj(...arguments);
};
export const fetchCurrentQuests = function fetchCurrentQuests() {
  return obj(...arguments);
};
export const sendHeartbeat = function sendHeartbeat() {
  return obj(...arguments);
};
export const QuestEnrollmentResultType = obj;
export const enrollInQuest = function enrollInQuest() {
  return obj(...arguments);
};
export const claimQuestReward = function claimQuestReward() {
  return obj(...arguments);
};
export const fetchQuestRewardCode = function fetchQuestRewardCode() {
  return obj(...arguments);
};
export const dismissQuestContent = function dismissQuestContent() {
  return obj(...arguments);
};
export const dismissProgressTrackingFailureNotice = function dismissProgressTrackingFailureNotice(streamKey) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey };
  obj.dispatch(obj2);
};
export const completeQuestPreview = function completeQuestPreview() {
  return obj(...arguments);
};
export const resetQuestPreviewStatus = function resetQuestPreviewStatus() {
  return obj(...arguments);
};
export const resetQuestDismissibilityStatus = function resetQuestDismissibilityStatus() {
  return obj(...arguments);
};
export const overrideQuestForPlacement = function overrideQuestForPlacement(placement, questId) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_PREVIEW_OVERRIDE", placement, questId };
  obj.dispatch(obj2);
};
export const selectTaskPlatform = function selectTaskPlatform(questId, platform) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_SELECT_TASK_PLATFORM", questId, platform };
  obj.dispatch(obj2);
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  const action = { type: "QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED", payload };
  obj = DispatcherDefault;
  obj.dispatch(action);
};
export const fetchClaimedQuests = function fetchClaimedQuests() {
  return obj(...arguments);
};
export const updateOptimisticProgress = function updateOptimisticProgress(id, taskType, currentTime) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: id, taskEventName: taskType, progress: currentTime };
  obj.dispatch(obj2);
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId };
  obj.dispatch(obj2);
};
export const fetchQuestToDeliver = function fetchQuestToDeliver() {
  return obj(...arguments);
};
export const clearQuestAdDecision = function clearQuestAdDecision(placement, ttlMillis) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, fetchedAt: Date.now(), responseTtlSeconds: ttlMillis / 1000 };
  obj.dispatch(obj2);
};
export const fetchEarnedQuestToDeliver = function fetchEarnedQuestToDeliver() {
  return obj(...arguments);
};
export const updatePrevRestingQuestDockMode = function updatePrevRestingQuestDockMode(mode) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE", mode };
  obj.dispatch(obj2);
};
export const updateVideoProgress = function updateVideoProgress() {
  return obj(...arguments);
};
export const fetchVideoTranscript = function fetchVideoTranscript() {
  return obj(...arguments);
};
export const updateQuestDockVisibilityEligibility = function updateQuestDockVisibilityEligibility(isEligibleToBeVisible) {
  isEligibleToBeVisible = isEligibleToBeVisible.isEligibleToBeVisible;
  obj = DispatcherDefault;
  obj.dispatch({ type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE", isEligibleToBeVisible });
};
export const fetchQuest = function fetchQuest() {
  return obj(...arguments);
};
export const fetchQuestPreview = function fetchQuestPreview() {
  return obj(...arguments);
};
export const fetchQuestHomeHero = function fetchQuestHomeHero() {
  return obj(...arguments);
};
export const fetchQuestHomeHeroPreview = function fetchQuestHomeHeroPreview() {
  return obj(...arguments);
};
export const dismissQuestActivityModal = function dismissQuestActivityModal(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id };
  obj.dispatch(obj2);
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  obj = DispatcherDefault;
  const obj2 = { type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll };
  obj.dispatch(obj2);
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  obj = DispatcherDefault;
  const obj2 = { type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj2);
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  obj = DispatcherDefault;
  const obj2 = { type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj2);
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  obj = DispatcherDefault;
  const obj2 = { type: "QUESTS_MARK_DISCOVERED", questId };
  obj.dispatch(obj2);
};