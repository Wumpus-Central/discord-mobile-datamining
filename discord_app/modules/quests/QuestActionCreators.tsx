// === Module 10477: _manuallyStartConsoleQuest ===

// Module 10477 (_manuallyStartConsoleQuest)
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { getVisibleGuildIdsMethod } from "SidebarVisibilityMethodStore" /* 9505 */;
import set from "set" /* 5079 */;
import handleConnectionInfoChange from "handleConnectionInfoChange" /* 4564 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import initializeState from "initializeState" /* 7453 */;
import _toPropertyKey from "_toPropertyKey" /* 7455 */;
import { FetchStatus } from "_toPropertyKey" /* 7455 */;
import { ORBS_INTRO_QUEST_ID } from "QuestsExperimentLocations" /* 6716 */;
import ME from "ME" /* 676 */;

const require = fn;
function _manuallyStartConsoleQuest() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_4 = tmp3;
              let anyErrorMessage = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              body = undefined;
              anyErrorMessage = undefined;
              closure_4 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              c6 = 1;
              const HTTP = callback(body[9]).HTTP;
              const obj2 = { url: null, query: null, failImmediatelyWhenRateLimited: true, rejectWithError: false };
              obj2[0] = closure_13.QUEST_ON_CONSOLE_START(callback);
              let tmp48;
              if (flag) {
                const obj3 = { preview: null };
                obj3[0] = flag;
                tmp48 = obj3;
              }
              obj2[1] = tmp48;
              c7 = 3;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            const tmp25 = new flag(body[11])(closure_5);
            anyErrorMessage = tmp25;
            if (429 === anyErrorMessage.status) {
              const obj5 = { errorHints: null };
              const obj6 = { type: null, message: null, connected_account_id: "", connected_account_type: "" };
              obj6[0] = callback(body[12]).QuestConsoleStartErrorLocal.RATE_LIMITED;
              const intl2 = callback(body[13]).intl;
              obj6[1] = intl2.string(callback(body[13]).t.Whhv4w);
              const items = [obj6];
              obj5[0] = items;
              c8 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = obj5;
              return obj7;
            } else {
              anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
              body = anyErrorMessage;
              if (anyErrorMessage == null) {
                const intl = callback(body[13]).intl;
                body = intl.string(callback(body[13]).t.xSCvBf);
              }
              closure_4 = body;
              const obj8 = { errorHints: null };
              const obj9 = { type: null, message: null, connected_account_id: "", connected_account_type: "" };
              obj9[0] = callback(body[12]).QuestConsoleStartErrorLocal.GENERIC;
              obj9[1] = closure_4;
              const items1 = [obj9];
              obj8[0] = items1;
              c8 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = obj8;
              return obj10;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = body;
            return obj11;
          } else {
            body = body.body;
            if (null != body.quest_user_status) {
              obj1 = flag(body[10]);
              const obj12 = { type: "QUESTS_USER_STATUS_UPDATE", user_status: null };
              obj12[1] = body.quest_user_status;
              obj1.dispatch(obj12);
            } else if (null != body.error_hints_v2) {
              if (body.error_hints_v2.length > 0) {
                const obj13 = { errorHints: null };
                const error_hints_v2 = body.error_hints_v2;
                obj13[0] = error_hints_v2.slice(0, 5);
                c6 = 0;
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = obj13;
                return obj;
              }
            }
            c6 = 0;
            const obj14 = { errorHints: null };
            obj14[0] = [];
            c8 = 3;
            const obj15 = { value: null, done: true };
            obj15[0] = obj14;
            return obj15;
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
    })();
    iter.next();
    return iter;
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _manualStopConsoleQuest() {
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
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[9]).HTTP;
              obj1 = { url: null, rejectWithError: false };
              obj1[0] = closure_1_13.QUEST_ON_CONSOLE_STOP(callback);
              table = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resetRecentQuestCompletions() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = v0(closure_1_2[9]).HTTP;
            obj1 = { url: null, rejectWithError: false };
            obj1[0] = closure_1_13.QUESTS_RESET_RECENT_QUEST_COMPLETIONS;
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.del(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCurrentQuests() {
  const self = this;
  const tmp = callback(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let quests = tmp3;
            let lib = tmp5;
            let items;
            lib = undefined;
            quests = undefined;
            closure_3 = undefined;
            c4 = undefined;
            c5 = undefined;
            c6 = undefined;
            closure_7 = undefined;
            closure_8 = undefined;
            closure_9 = undefined;
            let length;
            closure_11 = undefined;
            closure_12 = undefined;
            closure_13 = undefined;
            if (!closure_1_8.isFetchingCurrentQuests) {
              items = 0;
              quests = tmp71.quests;
              items = [];
              items = HermesBuiltin.arraySpread(quests.keys(), items);
              let obj3 = closure_1_1(closure_1_2[10]);
              obj3.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
              c4 = 1;
              const HTTP = closure_1_0(closure_1_2[9]).HTTP;
              obj1 = { url: null, rejectWithError: false };
              obj1[0] = closure_1_13.QUESTS_CURRENT_QUESTS;
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          }
        } else {
          if (1 === tmp8) {
            c4 = 0;
            closure_14 = closure_3;
            obj1 = lib(quests[10]);
            obj3 = { type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: null };
            const tmp20 = new lib(quests[11])(closure_14);
            obj3[1] = tmp20;
            obj1.dispatch(obj3);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            quests = lib.body.quests;
            const found = quests.filter((item, index) => items(quests[14]).isQuestWithKnownConfigVersion(item));
            closure_3 = found.map((item, index) => items(quests[14]).questWithUserStatusFromServer(item));
            c4 = lib.body.quest_enrollment_blocked_until;
            c5 = lib.body.quest_access_suspended_until;
            c6 = closure_3.filter((item, index) => {
              const userStatus = item.userStatus;
              let claimedAt;
              if (userStatus != null) {
                claimedAt = userStatus.claimedAt;
              }
              let tmp2 = null != claimedAt;
              if (!tmp2) {
                tmp2 = item.config.rewardsConfig.platforms.length > 0;
              }
              return tmp2;
            });
            closure_7 = quests.map((item, index) => item.id);
            closure_8 = closure_3.map((item, index) => item.id);
            closure_9 = closure_7.filter((item, index) => !closure_8.includes(item));
            length = c6.map((item, index) => item.id);
            closure_11 = closure_8.filter((item, index) => !closure_10.includes(item));
            closure_12 = items.filter((item, index) => !closure_10.includes(item));
            const obj4 = { category: "quests.fetch", message: "fetchCurrentQuests completed", data: null };
            const obj5 = { rawCount: null, rawIds: null, validCount: null, validIds: null, prevQuestIds: null, droppedByConfigVersion: null, droppedByPlatformFilter: null, removedFromStore: null };
            obj5[0] = closure_7.length;
            obj5[1] = closure_7;
            obj5[2] = length.length;
            obj5[3] = length;
            obj5[4] = items;
            obj5[5] = closure_9;
            obj5[6] = closure_11;
            obj5[7] = closure_12;
            obj4[2] = obj5;
            lib(quests[15]).addBreadcrumb(obj4);
            const excluded_quests = lib.body.excluded_quests;
            closure_13 = excluded_quests.map((item, index) => items(quests[14]).excludedQuestFromServer(item));
            const obj9 = lib(quests[15]);
            const obj6 = { type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", quests: null, excludedQuests: null, questEnrollmentBlockedUntil: null, questAccessSuspendedUntil: null };
            obj6[1] = c6;
            obj6[2] = closure_13;
            obj6[3] = c4;
            obj6[4] = c5;
            lib(quests[10]).dispatch(obj6);
            c4 = 0;
            const obj12 = lib(quests[10]);
          }
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendHeartbeat() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === body) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              terminal = tmp3;
              dependencyMap = tmp7;
              let callback;
              let callback2;
              dependencyMap = undefined;
              terminal = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ questId: c0, streamKey: c1, applicationId: c2, terminal } = callback);
              if (terminal === undefined) {
                terminal = false;
              }
              ({ executablePath: c4, executableFingerprint: c5 } = callback);
              body = undefined;
              body = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c5 = 1;
              let obj2 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj2[0] = closure_13.QUESTS_HEARTBEAT(callback);
              const obj3 = { stream_key: null, application_id: null, terminal: null, executable_path: null, executable_fingerprint: null };
              obj3[0] = callback2;
              obj3[1] = dependencyMap;
              obj3[2] = terminal;
              obj3[3] = c4;
              obj3[4] = c5;
              obj2[1] = obj3;
              let obj4 = { event: null, properties: null };
              obj4[0] = callback(503).NetworkActionNames.QUEST_HEARTBEAT;
              const obj5 = { quest_id: null, application_id: null, terminal: null, is_overlay: false, stack_trace: null, is_playtime_eligible: true };
              obj5[0] = callback;
              obj5[1] = dependencyMap;
              obj5[2] = terminal;
              const _Error = Error;
              error = new Error();
              const stack = error.stack;
              callback2 = stack;
              if (stack == null) {
                callback2 = "";
              }
              obj5[4] = callback2;
              obj4[1] = obj5;
              obj2[2] = obj4;
              body = 3;
              c7 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = callback2(5227).post(obj2);
              return obj6;
            }
          } else {
            if (2 === tmp7) {
              c5 = 0;
              c7 = c4;
              obj4 = callback2(709);
              const obj7 = { type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: null, questId: null, streamKey: null };
              const tmp29 = new callback2(4274)(c7);
              obj7[1] = tmp29;
              obj7[2] = callback;
              obj7[3] = callback2;
              obj4.dispatch(obj7);
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = callback2(709);
              const obj8 = { type: "QUESTS_SEND_HEARTBEAT_SUCCESS", userStatus: null, questId: null, streamKey: null };
              obj2 = callback(7460);
              obj8[1] = obj2.questUserStatusFromServer(body.body);
              obj8[2] = callback;
              obj8[3] = callback2;
              obj.dispatch(obj8);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
        } catch (tmp35) {
          c4 = tmp35;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp35;
          } else {
            body = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _enrollInQuest() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let lib;
              if (null != lib.questContentCTA) {
                const questContentCTA = tmp69.questContentCTA;
                if (obj27.shouldMigrateToAdAnalyticsInterface(callback(closure_1_2[19]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")) {
                  let tmp74Result = callback(closure_1_2[20]);
                  obj1 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, questContentRowIndex: null };
                  obj1[0] = callback(closure_1_2[21]).AdUserActionType.CLICK_INTERNAL;
                  obj1[1] = callback(closure_1_2[22]).AdCreativeType.QUEST;
                  obj1[2] = callback;
                  obj1[3] = questContentCTA;
                  ({ questContent: obj9[4], sourceQuestContent: obj9[5], questContentPosition: obj9[6], questContentRowIndex: obj9[7] } = tmp69);
                  tmp74Result.captureAdUserAction(obj1);
                } else {
                  tmp74Result = callback(closure_1_2[23]);
                  let obj2 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null };
                  obj2[0] = callback;
                  obj2[1] = tmp69.questContent;
                  obj2[2] = questContentCTA;
                  ({ questContentPosition: obj7[3], questContentRowIndex: obj7[4], sourceQuestContent: obj7[5] } = tmp69);
                  const result = tmp74Result.trackQuestContentClicked(obj2);
                }
                obj27 = callback(closure_1_2[19]);
              }
              if (callback === closure_1_11) {
                let obj9 = callback(closure_1_2[24]);
                const result1 = obj9.dismissOrbsOnboardingExperience();
              }
              if (closure_1_8.isEnrolling(callback)) {
                const obj3 = { type: null };
                obj3[0] = closure_1_19.PREVIOUS_IN_FLIGHT_REQUEST;
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = obj3;
                return obj4;
              } else {
                let obj10 = lib(closure_1_2[10]);
                const obj5 = { type: "QUESTS_ENROLL_BEGIN", questId: null };
                obj5[1] = callback;
                obj10.dispatch(obj5);
                c5 = 1;
                let obj12 = callback(closure_1_2[25]);
                const adMetadataSealed = obj12.getAdMetadataSealed(tmp69.questContent);
                let obj13 = callback(closure_1_2[25]);
                const adTrafficMetadataSealed = obj13.getAdTrafficMetadataSealed(tmp69.questContent, callback);
                const HTTP = callback(closure_1_2[9]).HTTP;
                const obj6 = { url: null, body: null, rejectWithError: true };
                obj6[0] = closure_1_13.QUESTS_ENROLL(callback);
                const obj7 = { location: null };
                obj7[0] = tmp69.questContent;
                const merged = Object.assign(callback(closure_1_2[25]).getAdDecisionData(callback, tmp69.questContent));
                let tmp47 = null;
                if (null != adMetadataSealed) {
                  tmp47 = adMetadataSealed;
                }
                obj7.metadata_sealed = tmp47;
                let tmp48 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp48 = adTrafficMetadataSealed;
                }
                obj7.traffic_metadata_sealed = tmp48;
                obj6[1] = obj7;
                c6 = 2;
                c7 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = HTTP.post(obj6);
                return obj8;
              }
            }
          } else if (1 === tmp7) {
            c5 = 0;
            dependencyMap = closure_4;
            obj2 = lib(709);
            obj9 = { type: "QUESTS_ENROLL_FAILURE", questId: null };
            obj9[1] = callback;
            obj2.dispatch(obj9);
            obj10 = { type: null };
            let CAPTCHA_FAILED = constants;
            if ((function isCaptchaError(closure_2) {
              let tmp = closure_2 instanceof callback(table[18]).CaptchaCancelError;
              if (!tmp) {
                let tmp3 = null != closure_2 && typeof closure_2 === "object";
                if (tmp3) {
                  let tmp4 = 400 === closure_2.status;
                  if (tmp4) {
                    const body = closure_2.body;
                    let captcha_key;
                    if (body != null) {
                      captcha_key = body.captcha_key;
                    }
                    tmp4 = null != captcha_key;
                  }
                  if (!tmp4) {
                    let tmp6 = null != closure_2.captchaFields;
                    if (tmp6) {
                      const _Object = Object;
                      tmp6 = Object.keys(closure_2.captchaFields).length > 0;
                    }
                    tmp4 = tmp6;
                  }
                  if (!tmp4) {
                    const fields = closure_2.fields;
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
            })(dependencyMap)) {
              CAPTCHA_FAILED = CAPTCHA_FAILED.CAPTCHA_FAILED;
              obj10[0] = CAPTCHA_FAILED;
            } else {
              obj10[0] = CAPTCHA_FAILED.UNKNOWN_ERROR;
            }
            c7 = 3;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = arg1;
            return obj11;
          } else {
            lib = arg1;
            obj12 = { type: "QUESTS_ENROLL_SUCCESS", enrolledQuestUserStatus: null };
            const obj23 = lib(709);
            obj12[1] = callback(7460).questUserStatusFromServer(lib.body);
            obj23.dispatch(obj12);
            obj13 = { type: null };
            obj13[0] = constants.SUCCESS;
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = obj13;
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
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _claimQuestReward() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (claimingReward === 2) {
        claimingReward = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          claimingReward = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              claimingReward = 3;
              throw arg1;
            } else if (arg0 === 2) {
              claimingReward = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let lib;
              closure_2 = undefined;
              if (claimingReward.isClaimingReward(callback)) {
                claimingReward = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                let obj7 = lib(closure_2[10]);
                obj1 = { type: "QUESTS_CLAIM_REWARD_BEGIN", questId: null };
                obj1[1] = callback;
                obj7.dispatch(obj1);
                c6 = 1;
                const adMetadataSealed = callback(closure_2[25]).getAdMetadataSealed(tmp75);
                const obj10 = callback(closure_2[25]);
                const adTrafficMetadataSealed = callback(closure_2[25]).getAdTrafficMetadataSealed(tmp75, callback);
                const HTTP = callback(closure_2[9]).HTTP;
                let obj2 = { url: null, body: null, rejectWithError: false };
                obj2[0] = closure_1_13.QUESTS_CLAIM_REWARD(callback);
                const obj3 = { platform: null, location: null };
                obj3[0] = tmp74;
                obj3[1] = tmp75;
                const obj11 = callback(closure_2[25]);
                const merged = Object.assign(callback(closure_2[25]).getAdDecisionData(callback, tmp75));
                let tmp56 = null;
                if (null != adMetadataSealed) {
                  tmp56 = adMetadataSealed;
                }
                obj3.metadata_sealed = tmp56;
                let tmp57 = null;
                if (null != adTrafficMetadataSealed) {
                  tmp57 = adTrafficMetadataSealed;
                }
                obj3.traffic_metadata_sealed = tmp57;
                obj2[1] = obj3;
                c7 = 2;
                claimingReward = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj2);
                return obj4;
              }
              tmp74 = lib;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            closure_3 = closure_5;
            let obj5 = lib(closure_2[10]);
            obj5 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: null, questId: null };
            const tmp35 = new lib(closure_2[11])(closure_3);
            obj5[1] = tmp35;
            obj5[2] = callback;
            obj5.dispatch(obj5);
            throw closure_3;
          } else if (arg0 === 1) {
            claimingReward = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            claimingReward = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            lib = arg1;
            closure_2 = callback(closure_2[14]).questsEntitlementsFromServer(lib.body);
            if (0 === closure_2.errors.length) {
              obj2 = lib(closure_2[10]);
              obj7 = { type: "QUESTS_CLAIM_REWARD_SUCCESS", questId: null, entitlements: null };
              obj7[1] = callback;
              obj7[2] = closure_2;
              obj2.dispatch(obj7);
            } else {
              obj = lib(closure_2[10]);
              const obj8 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: null, questId: null };
              obj8[1] = closure_2.errors;
              obj8[2] = callback;
              obj.dispatch(obj8);
            }
            c6 = 0;
            claimingReward = 3;
            const obj18 = callback(closure_2[14]);
          }
        } catch (tmp58) {
          closure_5 = tmp58;
          if (tmp4 === c6) {
            claimingReward = tmp2;
            throw tmp58;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuestRewardCode() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (closure_1_8.isFetchingRewardCode(callback)) {
                c6 = 3;
              } else {
                let obj6 = closure_1_1(closure_1_2[10]);
                obj1 = { type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: null };
                obj1[1] = callback;
                obj6.dispatch(obj1);
                c4 = 1;
                const HTTP = callback(closure_1_2[9]).HTTP;
                let obj2 = { url: null, rejectWithError: false };
                obj2[0] = closure_1_13.QUESTS_REWARD_CODE(callback);
                c5 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            let obj4 = lib(709);
            obj4 = { type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: null, questId: null };
            const tmp28 = new lib(4274)(dependencyMap);
            obj4[1] = tmp28;
            obj4[2] = callback;
            obj4.dispatch(obj4);
            throw dependencyMap;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            obj = lib(709);
            const obj5 = { type: "QUESTS_FETCH_REWARD_CODE_SUCCESS", questId: null, rewardCode: null };
            obj5[1] = callback;
            obj2 = callback(7460);
            obj5[2] = obj2.questsRewardCodeFromServer(lib.body);
            obj.dispatch(obj5);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
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
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _dismissQuestContent() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let lib;
              const isDismissingContentResult = closure_1_8.isDismissingContent(callback);
              if (!isDismissingContentResult) {
                if (obj16.isDismissible(lib)) {
                  let obj6 = lib(closure_1_2[10]);
                  obj1 = { type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: null, content: null };
                  obj1[1] = callback;
                  obj1[2] = tmp55;
                  obj6.dispatch(obj1);
                  c5 = 1;
                  const adTrafficMetadataSealed = callback(closure_1_2[25]).getAdTrafficMetadataSealed(tmp55, callback);
                  const HTTP = callback(closure_1_2[9]).HTTP;
                  let obj2 = { url: null, body: null, rejectWithError: false };
                  obj2[0] = closure_1_13.QUESTS_DISMISS_CONTENT(callback, tmp55);
                  const obj3 = {};
                  const obj9 = callback(closure_1_2[25]);
                  const merged = Object.assign(callback(closure_1_2[25]).getAdDecisionData(callback, tmp55));
                  let tmp44 = null;
                  if (null != adTrafficMetadataSealed) {
                    tmp44 = adTrafficMetadataSealed;
                  }
                  obj3.traffic_metadata_sealed = tmp44;
                  obj2[1] = obj3;
                  c6 = 2;
                  c7 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = HTTP.post(obj2);
                  return obj4;
                }
              }
              obj16 = callback(closure_1_2[25]);
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              dependencyMap = closure_4;
              obj4 = lib(709);
              const obj5 = { type: "QUESTS_DISMISS_CONTENT_FAILURE", error: null, questId: null };
              const tmp27 = new lib(4274)(dependencyMap);
              obj5[1] = tmp27;
              obj5[2] = callback;
              obj4.dispatch(obj5);
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(709);
              obj6 = { type: "QUESTS_DISMISS_CONTENT_SUCCESS", dismissedQuestUserStatus: null };
              obj2 = callback(7460);
              obj6[1] = obj2.questUserStatusFromServer(lib.body);
              obj.dispatch(obj6);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
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
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _completeQuestPreview() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              let body = tmp7;
              let num7;
              if (num7 === undefined) {
                num7 = 1;
              }
              body = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c5 = 1;
              const HTTP = callback(body[9]).HTTP;
              let obj2 = { url: null, body: null, rejectWithError: false };
              obj2[0] = closure_13.QUESTS_PREVIEW_COMPLETE(callback);
              const obj3 = { percent: null };
              obj3[0] = num7;
              obj2[1] = obj3;
              c6 = 3;
              c7 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else {
            if (2 === tmp7) {
              c5 = 0;
              closure_3 = closure_4;
              obj4 = num7(body[10]);
              const obj5 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
              const tmp27 = new num7(body[11])(closure_3);
              obj5[1] = tmp27;
              obj5[2] = callback;
              obj4.dispatch(obj5);
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              obj = num7(body[10]);
              const obj6 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
              obj2 = callback(body[14]);
              obj6[1] = obj2.questUserStatusFromServer(body.body);
              obj.dispatch(obj6);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
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
    })();
    iter.next();
    return iter;
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resetQuestPreviewStatus() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      const HTTP = callback(closure_1_2[9]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_13.QUESTS_PREVIEW_STATUS(callback);
      obj1[1] = {};
      yield HTTP.del(obj1);
      if (1 === tmp7) {
        c4 = 0;
        dependencyMap = closure_3;
        let obj4 = lib(709);
        const obj3 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
        const tmp27 = new lib(4274)(dependencyMap);
        obj3[1] = tmp27;
        obj3[2] = callback;
        obj4.dispatch(obj3);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        obj = lib(709);
        obj4 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
        const obj2 = callback(7460);
        obj4[1] = obj2.questUserStatusFromServer(lib.body);
        obj.dispatch(obj4);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resetQuestDismissibilityStatus() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      closure_1_1(closure_1_2[10]).dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
      const HTTP = callback(closure_1_2[9]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_13.QUESTS_PREVIEW_DISMISSIBILITY(callback);
      obj1[1] = {};
      yield HTTP.del(obj1);
      if (1 === tmp7) {
        c4 = 0;
        dependencyMap = closure_3;
        let obj4 = lib(709);
        const obj3 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
        const tmp27 = new lib(4274)(dependencyMap);
        obj3[1] = tmp27;
        obj3[2] = callback;
        obj4.dispatch(obj3);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        obj = lib(709);
        obj4 = { type: "QUESTS_PREVIEW_UPDATE_SUCCESS", previewQuestUserStatus: null };
        const obj2 = callback(7460);
        obj4[1] = obj2.questUserStatusFromServer(lib.body);
        obj.dispatch(obj4);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchClaimedQuests() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw body;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = body;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            let callback = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            if (!closure_1_8.isFetchingClaimedQuests) {
              let obj5 = closure_1_1(closure_1_2[10]);
              obj5.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[9]).HTTP;
              obj1 = { url: null, rejectWithError: false };
              obj1[0] = closure_1_13.QUESTS_CLAIMED_QUESTS;
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            callback = dependencyMap;
            let obj3 = callback(709);
            obj3 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE", error: null };
            const tmp25 = new callback(4274)(callback);
            obj3[1] = tmp25;
            obj3.dispatch(obj3);
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 !== 2) {
            const quests = body.body.quests;
            closure_0 = quests.map((item, index) => callback(tmp34[14]).getClaimedQuestWithUserStatusFromServer(item));
            obj = callback(709);
            const obj4 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: null };
            obj4[1] = closure_0;
            obj.dispatch(obj4);
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj5 = { value: null, done: true };
          obj5[0] = body;
          return obj5;
        }
        c5 = 3;
      } catch (tmp34) {
        dependencyMap = tmp34;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp34;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuestToDeliver() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      if (guildsTree === 2) {
        guildsTree = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          guildsTree = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              guildsTree = 3;
              throw body;
            } else if (arg0 === 2) {
              guildsTree = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let lib = tmp3;
              closure_3 = tmp5;
              dependencyMap = undefined;
              closure_3 = undefined;
              lib = undefined;
              let enabled;
              let type;
              c7 = undefined;
              guildsTree = undefined;
              closure_9 = undefined;
              closure_10 = undefined;
              let uRLSearchParams;
              let user;
              body = undefined;
              let creative;
              let obj16;
              closure_16 = undefined;
              let quest;
              const _Date = Date;
              dependencyMap = Date.now();
              const result = callback2(closure_1_2[26]).recordQuestRequestAttempt("/quests/decision", callback2, callback);
              const obj34 = callback2(closure_1_2[26]);
              obj1 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: null };
              obj1[1] = callback;
              callback2(closure_1_2[10]).dispatch(obj1);
              type = 1;
              const obj35 = callback2(closure_1_2[10]);
              c7 = 2;
              guildsTree = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = callback(closure_1_2[27]).getSession();
              return obj2;
            }
          } else {
            if (1 === tmp8) {
              type = 0;
              let message = enabled;
              let obj19 = callback2(10482);
              const obj3 = { wasSuccessful: false, currentFetchedAt: null };
              obj3[1] = dependencyMap;
              const result1 = obj19.recordQuestRequestApiResponse("/quests/decision", obj3);
              const obj4 = {};
              const merged = Object.assign(callback2(7431)());
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              dependencyMap = message;
              if (message == null) {
                dependencyMap = null;
              }
              obj4.reason = dependencyMap;
              const obj24 = new callback2(4274)(message);
              obj4.api_error = obj24.getAnyErrorMessage();
              obj4.caller_source = callback2;
              callback2(698).track(user.QUEST_DECISION_ROUNDTRIP_ERROR, obj4);
              const obj22 = callback2(698);
              let obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: null, placement: null };
              const tmp171 = new callback2(4274)(message);
              obj5[1] = tmp171;
              obj5[2] = callback;
              callback2(709).dispatch(obj5);
              guildsTree = 3;
              const obj25 = callback2(709);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                guildsTree = 3;
                throw body;
              } else if (arg0 === 2) {
                type = 0;
                guildsTree = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = body;
                return obj6;
              } else {
                closure_3 = body;
                obj16 = callback(7473);
                c7 = 3;
                guildsTree = 1;
                let obj7 = { value: null, done: false };
                obj7[0] = obj16.getOrRefreshAdSession();
                return obj7;
              }
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                guildsTree = 3;
                throw body;
              } else if (arg0 === 2) {
                type = 0;
                guildsTree = 3;
                let obj8 = { value: null, done: true };
                obj8[0] = body;
                return obj8;
              } else {
                lib = body;
                const LessPersonalizedAdsExperiment = callback(10483).LessPersonalizedAdsExperiment;
                enabled = LessPersonalizedAdsExperiment.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" });
                type = lib();
                if (null != type) {
                  let items = type();
                } else {
                  items = [];
                }
                c7 = items;
                guildsTree = c7.getGuildsTree();
                const found = c7.filter((item, index) => {
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
                      isFolderExpandedResult = tmp175.isFolderExpanded(node.parentId);
                    }
                    return isFolderExpandedResult;
                  }
                  obj = callback(_null[30]);
                });
                closure_9 = found.slice(0, 50);
                let tmp101;
                if (enabled.enabled) {
                  tmp101 = closure_9;
                }
                closure_10 = tmp101;
                const _URLSearchParams = URLSearchParams;
                const obj9 = { placement: null };
                const _String3 = String;
                obj9[0] = String(callback);
                uRLSearchParams = new URLSearchParams(obj9);
                let uuid;
                if (closure_3 != null) {
                  uuid = closure_3.uuid;
                }
                if (null != uuid) {
                  uRLSearchParams.append("client_heartbeat_session_id", closure_3.uuid);
                }
                if (null != lib.uuid) {
                  uRLSearchParams.append("client_ad_session_id", lib.uuid);
                }
                if (null != closure_10) {
                  const item = closure_10.forEach((item, index) => uRLSearchParams.append("visible_guild_ids", item));
                }
                const HTTP = callback(530).HTTP;
                const obj10 = { url: null, rejectWithError: false, context: null };
                const _HermesInternal = HermesInternal;
                obj10[0] = "" + body.QUEST_FETCH_QUEST_TO_DELIVER + "?" + uRLSearchParams.toString();
                const obj11 = { connection_type: null };
                obj11[0] = type.getType();
                obj10[2] = obj11;
                c7 = 4;
                guildsTree = 1;
                const obj12 = { value: null, done: false };
                obj12[0] = HTTP.get(obj10);
                return obj12;
              }
            } else if (arg0 === 1) {
              guildsTree = 3;
              throw body;
            } else if (arg0 === 2) {
              type = 0;
              guildsTree = 3;
              const obj13 = { value: null, done: true };
              obj13[0] = body;
              return obj13;
            } else {
              body = body.body;
              creative = body.creative;
              let creative_type;
              if (creative != null) {
                creative_type = creative.creative_type;
              }
              if (creative_type !== callback(7469).AdCreativeType.BOUNTY) {
                creative = body.creative;
              } else {
                const BountiesMobileQuestBarExperiment = callback(10484).BountiesMobileQuestBarExperiment;
                creative = null;
              }
              obj16 = null;
              if (null != creative) {
                creative_type = creative.creative_type;
                if (callback(7469).AdCreativeType.QUEST === creative_type) {
                  obj = callback(7460);
                  user = obj.questConfigFromServer(creative.creative_content);
                  const obj14 = { type: null, questId: null };
                  obj14[0] = callback(7469).AdCreativeType.QUEST;
                  obj14[1] = user.id;
                  obj16 = obj14;
                } else if (callback(7469).AdCreativeType.BOUNTY === creative_type) {
                  closure_16 = callback(10485).bountyFromServer(creative.creative_content);
                  const obj15 = { type: null, bounty: null };
                  obj15[0] = callback(7469).AdCreativeType.BOUNTY;
                  obj15[1] = closure_16;
                  obj16 = obj15;
                  const obj32 = callback(10485);
                }
              } else {
                quest = body.quest;
                if (null != quest) {
                  user = callback(7460).questConfigFromServer(quest);
                  obj16 = { type: null, questId: null };
                  obj16[0] = callback(7469).AdCreativeType.QUEST;
                  obj16[1] = user.id;
                  const obj30 = callback(7460);
                }
              }
              obj2 = callback2(709);
              const obj17 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", quest: null, creative: null, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
              obj17[1] = user;
              obj17[2] = obj16;
              const ad_identifiers = body.ad_identifiers;
              let ad_id;
              if (ad_identifiers != null) {
                ad_id = ad_identifiers.ad_id;
              }
              const obj18 = { ad_id: null, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
              obj18[0] = ad_id;
              const ad_identifiers2 = body.ad_identifiers;
              let adset_id;
              if (ad_identifiers2 != null) {
                adset_id = ad_identifiers2.adset_id;
              }
              obj18[1] = adset_id;
              const ad_identifiers3 = body.ad_identifiers;
              let ad_set_id;
              if (ad_identifiers3 != null) {
                ad_set_id = ad_identifiers3.ad_set_id;
              }
              obj18[2] = ad_set_id;
              const ad_identifiers4 = body.ad_identifiers;
              let campaign_id;
              if (ad_identifiers4 != null) {
                campaign_id = ad_identifiers4.campaign_id;
              }
              obj18[3] = campaign_id;
              const ad_identifiers5 = body.ad_identifiers;
              let creative_id;
              if (ad_identifiers5 != null) {
                creative_id = ad_identifiers5.creative_id;
              }
              obj18[4] = creative_id;
              const ad_identifiers6 = body.ad_identifiers;
              let creative_type1;
              if (ad_identifiers6 != null) {
                creative_type1 = ad_identifiers6.creative_type;
              }
              obj18[5] = creative_type1;
              obj18[6] = body.request_id;
              obj18[7] = null != body.ad_identifiers;
              obj17[3] = obj18;
              obj17[4] = body.metadata_sealed;
              obj17[5] = body.traffic_metadata_sealed;
              obj17[6] = body.ad_context;
              obj17[7] = body.response_ttl_seconds;
              obj17[8] = callback;
              obj17[9] = dependencyMap;
              obj2.dispatch(obj17);
              obj5 = callback2(10482);
              obj19 = { wasSuccessful: true, adRequestId: null, currentCreative: null, currentFetchedAt: null };
              const _String = String;
              obj19[1] = String(body.request_id);
              obj19[2] = obj16;
              obj19[3] = dependencyMap;
              const result2 = obj5.recordQuestRequestApiResponse("/quests/decision", obj19);
              if (null != user) {
                if (callback === callback(6719).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                  obj7 = callback2(10500);
                  obj7.startTracking(user.id);
                }
                obj8 = callback2(698);
                const obj20 = {};
                const merged1 = Object.assign(callback2(7431)());
                obj20.quest_id = user.id;
                obj20.caller_source = callback2;
                const _String2 = String;
                obj20.ad_request_id = String(body.request_id);
                obj8.track(user.QUEST_DECISION_RECEIVED, obj20);
                type = 0;
              }
            }
            type = 0;
            guildsTree = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp175) {
          enabled = tmp175;
          if (tmp4 === type) {
            guildsTree = tmp2;
            throw tmp175;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchEarnedQuestToDeliver() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c9 = 2;
          if (0 === response_ttl_seconds) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp3;
              let uuid = tmp5;
              const callback = prop;
              prop = undefined;
              let found;
              c3 = undefined;
              uuid = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              let quests;
              response_ttl_seconds = undefined;
              c9 = undefined;
              if (!fetchingEarnedQuestToDeliverByPlacement.isFetchingEarnedQuestToDeliverByPlacement(prop)) {
                const earnedQuestForPlacement = fetchingEarnedQuestToDeliverByPlacement.earnedQuestForPlacement;
                let value = earnedQuestForPlacement.get(tmp74);
                prop = undefined;
                if (value != null) {
                  prop = value.earnedDecisionByQuestId;
                }
                found = arr2.filter((item, index) => {
                  let value;
                  if (prop != null) {
                    value = prop.get(item);
                  }
                  return !callback(found[25]).earnedDecisionIsValid(value);
                });
                if (0 !== found.length) {
                  const _Date = Date;
                  c3 = Date.now();
                  const result = callback2(10502).recordEarnedRequestAttempt(tmp74, tmp75);
                  const obj16 = callback2(10502);
                  obj1 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: null };
                  obj1[1] = tmp74;
                  callback2(709).dispatch(obj1);
                  quests = 1;
                  const obj17 = callback2(709);
                  response_ttl_seconds = 2;
                  c9 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback(5054).getSession();
                  return obj2;
                }
              }
              arr2 = callback;
              tmp75 = found;
            }
          } else {
            if (1 === tmp8) {
              quests = 0;
              closure_10 = closure_6;
              let obj5 = prop(found[36]);
              const obj3 = { wasSuccessful: false, fetchedAt: null };
              obj3[1] = c3;
              const result1 = obj5.recordEarnedRequestApiResponse(callback, obj3);
              let obj7 = prop(found[10]);
              const obj4 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE", error: null, content: null };
              const tmp30 = new prop(found[11])(closure_10);
              obj4[1] = tmp30;
              obj4[2] = callback;
              obj7.dispatch(obj4);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                quests = 0;
                c9 = 3;
                obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                uuid = arg1;
                closure_5 = found.join(",");
                const HTTP = callback(found[9]).HTTP;
                uuid = undefined;
                if (uuid != null) {
                  uuid = uuid.uuid;
                }
                const obj6 = { url: null, rejectWithError: false };
                obj6[0] = closure_13.QUEST_EARNED_DECISION(closure_5, callback, uuid);
                response_ttl_seconds = 3;
                c9 = 1;
                obj7 = { value: null, done: false };
                obj7[0] = HTTP.get(obj6);
                return obj7;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_6 = arg1;
              quests = closure_6.body.quests;
              response_ttl_seconds = closure_6.body.response_ttl_seconds;
              const _Map = Map;
              const map = new Map(found.map((item, index) => {
                let tmp;
                if (table != null) {
                  tmp = table[item];
                }
                const items = [item, ];
                let tmp2 = null;
                if (null != tmp) {
                  tmp2 = null;
                  if (obj.isQuestWithKnownConfigVersion(tmp)) {
                    tmp2 = tmp;
                  }
                  obj = callback(found[14]);
                }
                items[1] = tmp2;
                return items;
              }));
              c9 = map;
              const obj8 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS", serverQuests: null, content: null, fetchedAt: null, responseTtlSeconds: null };
              obj8[1] = c9;
              obj8[2] = callback;
              obj8[3] = c3;
              obj8[4] = response_ttl_seconds;
              prop(found[10]).dispatch(obj8);
              const obj13 = prop(found[10]);
              const request_id = closure_6.body.request_id;
              c3 = request_id;
              if (request_id == null) {
                c3 = null;
              }
              obj = { wasSuccessful: true, requestId: null, fetchedAt: null };
              obj[1] = c3;
              obj[2] = c3;
              const result2 = prop(found[36]).recordEarnedRequestApiResponse(callback, obj);
              quests = 0;
              const obj15 = prop(found[36]);
            }
            quests = 0;
            c9 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
          c9 = 3;
        } catch (tmp36) {
          closure_6 = tmp36;
          if (tmp4 === quests) {
            c9 = tmp2;
            throw tmp36;
          } else {
            response_ttl_seconds = tmp;
          }
        }
      }
    })();
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateVideoProgress() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj4 = lib(closure_1_2[16]);
              obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj1[0] = closure_1_13.QUESTS_VIDEO_PROGRESS(callback);
              const obj2 = { timestamp: null };
              obj2[0] = lib;
              obj1[1] = obj2;
              const obj3 = { event: null, properties: null };
              obj3[0] = callback(closure_1_2[17]).NetworkActionNames.QUEST_VIDEO_PROGRESS;
              obj4 = { quest_id: null, timestamp_sec: null, stack_trace: null };
              obj4[0] = callback;
              obj4[1] = lib.toString();
              const _Error = Error;
              error = new Error();
              const stack = error.stack;
              c2 = stack;
              if (stack == null) {
                c2 = "";
              }
              obj4[2] = c2;
              obj3[1] = obj4;
              obj1[2] = obj3;
              c4 = 1;
              c3 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = obj4.post(obj1);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          c3 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchVideoTranscript() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let text = tmp3;
              let questAsset = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              questAsset = undefined;
              text = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const obj15 = lib(questAsset[37]);
                questAsset = obj15.getQuestAsset(lib, lib(questAsset[37]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, flag);
                if (null != questAsset) {
                  const state = store.getState();
                  const obj2 = { questId: null, fetchStatus: null };
                  obj2[0] = lib.id;
                  obj2[1] = constants.FETCHING;
                  state.setTranscriptAsset(obj2);
                  c5 = 1;
                  const HTTP = lib(questAsset[9]).HTTP;
                  const obj3 = { url: null, rejectWithError: true };
                  obj3[0] = questAsset.url;
                  c6 = 3;
                  c7 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = HTTP.get(obj3);
                  return obj4;
                } else {
                  const state1 = store.getState();
                  const obj5 = { questId: null, fetchStatus: null };
                  obj5[0] = lib.id;
                  obj5[1] = constants.FAILURE;
                  state1.setTranscriptAsset(obj5);
                }
              }
            } else {
              if (2 === tmp7) {
                c5 = 0;
                const state2 = store.getState();
                const obj6 = { questId: null, fetchStatus: null };
                obj6[0] = lib.id;
                obj6[1] = constants.FAILURE;
                state2.setTranscriptAsset(obj6);
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                text = arg1;
                const state3 = store.getState();
                const obj7 = { questId: null, fetchStatus: null, text: null, url: null };
                obj7[0] = lib.id;
                obj7[1] = constants.SUCCESS;
                obj7[2] = text.text;
                obj7[3] = questAsset.url;
                state3.setTranscriptAsset(obj7);
                c5 = 0;
              }
              c5 = 0;
              c7 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
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
    })();
    iter.next();
    return iter;
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuest() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp2;
      closure_1 = tmp5;
      const HTTP = lib(closure_1_2[9]).HTTP;
      obj1 = { url: null, rejectWithError: false };
      obj1[0] = closure_1_13.QUEST(lib);
      lib = yield HTTP.get(obj1);
      obj = lib(table[14]);
      return obj.questConfigFromServer(lib.body);
    })();
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuestPreview() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (closure_1_8.isFetchingQuestPreview(callback)) {
                c6 = 3;
              } else {
                let obj6 = closure_1_1(closure_1_2[10]);
                obj1 = { type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: null };
                obj1[1] = callback;
                obj6.dispatch(obj1);
                c4 = 1;
                const HTTP = callback(closure_1_2[9]).HTTP;
                let obj2 = { url: null, rejectWithError: false };
                obj2[0] = closure_1_13.QUEST_PREVIEW(callback);
                c5 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            let obj4 = lib(709);
            obj4 = { type: "QUESTS_FETCH_PREVIEW_FAILURE", error: null, questId: null };
            const tmp28 = new lib(4274)(dependencyMap);
            obj4[1] = tmp28;
            obj4[2] = callback;
            obj4.dispatch(obj4);
            throw dependencyMap;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            obj = lib(709);
            const obj5 = { type: "QUESTS_FETCH_PREVIEW_SUCCESS", questId: null, quest: null };
            obj5[1] = callback;
            obj2 = callback(7460);
            obj5[2] = obj2.questWithUserStatusFromServer(lib.body);
            obj.dispatch(obj5);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj6 = { value: null, done: true };
          obj6[0] = arg1;
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
  });
  closure_33 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuestHomeHero() {
  const self = this;
  const tmp = callback(function*() {
    if (creative_type === 2) {
      creative_type = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw body;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = body;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        creative_type = 2;
        if (0 === type) {
          if (arg0 === 1) {
            creative_type = 3;
            throw body;
          } else if (arg0 === 2) {
            creative_type = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            let callback;
            let callback2;
            closure_2 = undefined;
            closure_3 = undefined;
            let uRLSearchParams;
            body = undefined;
            type = undefined;
            creative_type = undefined;
            closure_8 = undefined;
            const QUEST_HOME_BANNER_DESKTOP = closure_1_0(closure_1_2[12]).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
            callback = QUEST_HOME_BANNER_DESKTOP;
            if (!closure_1_8.isFetchingQuestToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
              const lastFetchedQuestHomeHero = closure_1_8.getLastFetchedQuestHomeHero();
              if (null != lastFetchedQuestHomeHero) {
                const _Date = Date;
              }
              const _Date2 = Date;
              callback2 = Date.now();
              obj1 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: null };
              obj1[1] = QUEST_HOME_BANNER_DESKTOP;
              closure_1_1(closure_1_2[10]).dispatch(obj1);
              body = 1;
              const obj15 = closure_1_1(closure_1_2[10]);
              type = 2;
              creative_type = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_0(closure_1_2[27]).getSession();
              return obj2;
            }
            creative_type = 3;
          }
        } else if (1 === tmp8) {
          body = 0;
          closure_9 = uRLSearchParams;
          let obj12 = callback2(closure_2[10]);
          const obj3 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
          const tmp89 = new callback2(closure_2[11])(closure_9);
          obj3[1] = tmp89;
          obj3[2] = callback;
          obj12.dispatch(obj3);
          throw closure_9;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            creative_type = 3;
            throw body;
          } else if (arg0 === 2) {
            body = 0;
            creative_type = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            closure_2 = body;
            let obj9 = callback(closure_2[28]);
            type = 3;
            creative_type = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj9.getOrRefreshAdSession();
            return obj5;
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            creative_type = 3;
            throw body;
          } else if (arg0 === 2) {
            body = 0;
            creative_type = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            closure_3 = body;
            const _URLSearchParams = URLSearchParams;
            const obj7 = { placement: null, num_decisions_requested: "1" };
            const _String = String;
            obj7[0] = String(callback);
            uRLSearchParams = new URLSearchParams(obj7);
            let uuid;
            if (closure_2 != null) {
              uuid = closure_2.uuid;
            }
            if (null != uuid) {
              uRLSearchParams.append("client_heartbeat_session_id", closure_2.uuid);
            }
            if (null != closure_3.uuid) {
              uRLSearchParams.append("client_ad_session_id", closure_3.uuid);
            }
            const HTTP = callback(closure_2[9]).HTTP;
            const obj8 = { url: null, rejectWithError: false, context: null };
            const _HermesInternal = HermesInternal;
            obj8[0] = "" + constants.QUESTS_GET_DECISIONS + "?" + uRLSearchParams.toString();
            obj9 = { connection_type: null };
            obj9[0] = type.getType();
            obj8[2] = obj9;
            type = 4;
            creative_type = 1;
            const obj10 = { value: null, done: false };
            obj10[0] = HTTP.get(obj8);
            return obj10;
          }
        } else if (arg0 === 1) {
          creative_type = 3;
          throw body;
        } else if (arg0 !== 2) {
          body = body.body;
          const decisions = body.decisions;
          let first;
          if (decisions != null) {
            first = decisions[0];
          }
          callback = first;
          if (first == null) {
            callback = null;
          }
          type = callback;
          let creative;
          if (type != null) {
            creative = type.creative;
          }
          callback2 = creative;
          if (creative == null) {
            callback2 = null;
          }
          creative_type = callback2;
          closure_8 = null;
          let tmp16 = null != creative_type;
          if (tmp16) {
            tmp16 = creative_type.creative_type === callback(closure_2[22]).AdCreativeType.QUEST_HOME_HERO;
          }
          if (tmp16) {
            obj = callback(closure_2[39]);
            closure_8 = obj.questHomeHeroFromServer(creative_type);
          }
          obj1 = callback2(closure_2[10]);
          const obj11 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: null, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
          obj11[1] = closure_8;
          let ad_id;
          if (type != null) {
            let ad_identifiers = type.ad_identifiers;
            if (ad_identifiers != null) {
              ad_id = ad_identifiers.ad_id;
            }
          }
          obj12 = { ad_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
          obj12[0] = ad_id;
          let ad_set_id;
          if (type != null) {
            const ad_identifiers2 = type.ad_identifiers;
            if (ad_identifiers2 != null) {
              ad_set_id = ad_identifiers2.ad_set_id;
            }
          }
          obj12[1] = ad_set_id;
          let campaign_id;
          if (type != null) {
            const ad_identifiers3 = type.ad_identifiers;
            if (ad_identifiers3 != null) {
              campaign_id = ad_identifiers3.campaign_id;
            }
          }
          obj12[2] = campaign_id;
          let creative_id;
          if (type != null) {
            const ad_identifiers4 = type.ad_identifiers;
            if (ad_identifiers4 != null) {
              creative_id = ad_identifiers4.creative_id;
            }
          }
          obj12[3] = creative_id;
          creative_type = undefined;
          if (type != null) {
            const ad_identifiers5 = type.ad_identifiers;
            if (ad_identifiers5 != null) {
              creative_type = ad_identifiers5.creative_type;
            }
          }
          obj12[4] = creative_type;
          obj12[5] = body.request_id;
          ad_identifiers = undefined;
          if (type != null) {
            ad_identifiers = type.ad_identifiers;
          }
          obj12[6] = null != ad_identifiers;
          obj11[2] = obj12;
          let metadata_sealed;
          if (type != null) {
            metadata_sealed = type.metadata_sealed;
          }
          obj11[3] = metadata_sealed;
          let prop;
          if (type != null) {
            prop = type.traffic_metadata_sealed;
          }
          obj11[4] = prop;
          let ad_context;
          if (type != null) {
            ad_context = type.ad_context;
          }
          obj11[5] = ad_context;
          let response_ttl_seconds;
          if (type != null) {
            response_ttl_seconds = type.response_ttl_seconds;
          }
          obj11[6] = response_ttl_seconds;
          obj11[7] = callback;
          obj11[8] = callback2;
          obj1.dispatch(obj11);
          body = 0;
        }
        body = 0;
        creative_type = 3;
        const obj13 = { value: null, done: true };
        obj13[0] = body;
        return obj13;
      } catch (tmp101) {
        uRLSearchParams = tmp101;
        if (tmp4 === body) {
          creative_type = tmp2;
          throw tmp101;
        } else {
          type = tmp;
        }
      }
    }
  });
  closure_35 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchQuestHomeHeroPreview() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let creative_type = tmp3;
              closure_3 = tmp5;
              let QUEST_HOME_BANNER_DESKTOP;
              let callback2;
              body = undefined;
              closure_3 = undefined;
              creative_type = undefined;
              closure_5 = undefined;
              QUEST_HOME_BANNER_DESKTOP = callback(closure_1_2[12]).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
              const _Date = Date;
              callback2 = Date.now();
              obj1 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: null };
              obj1[1] = QUEST_HOME_BANNER_DESKTOP;
              closure_1_1(closure_1_2[10]).dispatch(obj1);
              c6 = 1;
              const _URLSearchParams = URLSearchParams;
              const str5 = new URLSearchParams();
              str5.append("ad_creative_ids", QUEST_HOME_BANNER_DESKTOP);
              const HTTP = callback(closure_1_2[9]).HTTP;
              const obj2 = { url: null, rejectWithError: false };
              const _HermesInternal = HermesInternal;
              obj2[0] = "" + closure_1_13.QUESTS_CREATIVE_PREVIEW + "?" + str5.toString();
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            c6 = closure_5;
            let obj5 = callback2(body[10]);
            const obj4 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
            const tmp67 = new callback2(body[11])(c6);
            obj4[1] = tmp67;
            obj4[2] = QUEST_HOME_BANNER_DESKTOP;
            obj5.dispatch(obj4);
            throw c6;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            body = body.body;
            const decisions = body.decisions;
            let first;
            if (decisions != null) {
              first = decisions[0];
            }
            callback2 = first;
            if (first == null) {
              callback2 = null;
            }
            closure_3 = callback2;
            let creative;
            if (closure_3 != null) {
              creative = closure_3.creative;
            }
            body = creative;
            if (creative == null) {
              body = null;
            }
            creative_type = body;
            closure_5 = null;
            let tmp16 = null != creative_type;
            if (tmp16) {
              tmp16 = creative_type.creative_type === QUEST_HOME_BANNER_DESKTOP(body[22]).AdCreativeType.QUEST_HOME_HERO;
            }
            if (tmp16) {
              obj = QUEST_HOME_BANNER_DESKTOP(body[39]);
              closure_5 = obj.questHomeHeroFromServer(creative_type);
            }
            obj1 = callback2(body[10]);
            const obj6 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: null, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
            obj6[1] = closure_5;
            let ad_id;
            if (closure_3 != null) {
              let ad_identifiers = closure_3.ad_identifiers;
              if (ad_identifiers != null) {
                ad_id = ad_identifiers.ad_id;
              }
            }
            const obj7 = { ad_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
            obj7[0] = ad_id;
            let ad_set_id;
            if (closure_3 != null) {
              const ad_identifiers2 = closure_3.ad_identifiers;
              if (ad_identifiers2 != null) {
                ad_set_id = ad_identifiers2.ad_set_id;
              }
            }
            obj7[1] = ad_set_id;
            let campaign_id;
            if (closure_3 != null) {
              const ad_identifiers3 = closure_3.ad_identifiers;
              if (ad_identifiers3 != null) {
                campaign_id = ad_identifiers3.campaign_id;
              }
            }
            obj7[2] = campaign_id;
            let creative_id;
            if (closure_3 != null) {
              const ad_identifiers4 = closure_3.ad_identifiers;
              if (ad_identifiers4 != null) {
                creative_id = ad_identifiers4.creative_id;
              }
            }
            obj7[3] = creative_id;
            creative_type = undefined;
            if (closure_3 != null) {
              const ad_identifiers5 = closure_3.ad_identifiers;
              if (ad_identifiers5 != null) {
                creative_type = ad_identifiers5.creative_type;
              }
            }
            obj7[4] = creative_type;
            obj7[5] = body.request_id;
            ad_identifiers = undefined;
            if (closure_3 != null) {
              ad_identifiers = closure_3.ad_identifiers;
            }
            obj7[6] = null != ad_identifiers;
            obj6[2] = obj7;
            let metadata_sealed;
            if (closure_3 != null) {
              metadata_sealed = closure_3.metadata_sealed;
            }
            obj6[3] = metadata_sealed;
            let prop;
            if (closure_3 != null) {
              prop = closure_3.traffic_metadata_sealed;
            }
            obj6[4] = prop;
            let ad_context;
            if (closure_3 != null) {
              ad_context = closure_3.ad_context;
            }
            obj6[5] = ad_context;
            let response_ttl_seconds;
            if (closure_3 != null) {
              response_ttl_seconds = closure_3.response_ttl_seconds;
            }
            obj6[6] = response_ttl_seconds;
            obj6[7] = QUEST_HOME_BANNER_DESKTOP;
            obj6[8] = callback2;
            obj1.dispatch(obj6);
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp72) {
          closure_5 = tmp72;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp72;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_36 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_12, Endpoints: map1 } = ME);
let obj = { SUCCESS: "success", CAPTCHA_FAILED: "captcha_failed", UNKNOWN_ERROR: "unknown_error", PREVIOUS_IN_FLIGHT_REQUEST: "previous_in_flight_request" };
let closure_34 = 5 * obj132Default.Millis.MINUTE;
let result = require("obj132").fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

export const manuallyStartConsoleQuest = function manuallyStartConsoleQuest(id, closure_1_1) {
  const self = this;
  const apply = _manuallyStartConsoleQuest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const manualStopConsoleQuest = function manualStopConsoleQuest(id) {
  const self = this;
  const apply = _manualStopConsoleQuest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetRecentQuestCompletions = function resetRecentQuestCompletions() {
  const self = this;
  const apply = _resetRecentQuestCompletions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchCurrentQuests = function fetchCurrentQuests() {
  const self = this;
  const apply = _fetchCurrentQuests.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendHeartbeat = function sendHeartbeat() {
  const self = this;
  const apply = _sendHeartbeat.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const QuestEnrollmentResultType = obj;
export const enrollInQuest = function enrollInQuest(id, arg1) {
  const self = this;
  const apply = _enrollInQuest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const claimQuestReward = function claimQuestReward(closure_0, closure_1, QUEST_HOME_MOBILE) {
  const self = this;
  const apply = _claimQuestReward.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestRewardCode = function fetchQuestRewardCode(arg0) {
  const self = this;
  const apply = _fetchQuestRewardCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissQuestContent = function dismissQuestContent(id, QUEST_BAR_MOBILE) {
  const self = this;
  const apply = _dismissQuestContent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissProgressTrackingFailureNotice = function dismissProgressTrackingFailureNotice(streamKey) {
  obj = { type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE", streamKey };
  obj.dispatch(obj);
};
export const completeQuestPreview = function completeQuestPreview(closure_0, random) {
  const self = this;
  const apply = _completeQuestPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetQuestPreviewStatus = function resetQuestPreviewStatus(closure_0) {
  const self = this;
  const apply = _resetQuestPreviewStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetQuestDismissibilityStatus = function resetQuestDismissibilityStatus(closure_0) {
  const self = this;
  const apply = _resetQuestDismissibilityStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const overrideQuestForPlacement = function overrideQuestForPlacement(placement, closure_0) {
  obj = { type: "QUESTS_PREVIEW_OVERRIDE", placement, questId: closure_0 };
  obj.dispatch(obj);
};
export const selectTaskPlatform = function selectTaskPlatform(closure_0, platform) {
  obj = { type: "QUESTS_SELECT_TASK_PLATFORM", questId: closure_0, platform };
  obj.dispatch(obj);
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  obj = { type: "QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED", payload };
  obj.dispatch(obj);
};
export const fetchClaimedQuests = function fetchClaimedQuests() {
  const self = this;
  const apply = _fetchClaimedQuests.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateOptimisticProgress = function updateOptimisticProgress(id, taskType, currentTime) {
  obj = { type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: id, taskEventName: taskType, progress: currentTime };
  obj.dispatch(obj);
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  obj = { type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId };
  obj.dispatch(obj);
};
export const fetchQuestToDeliver = function fetchQuestToDeliver(QUEST_HOME_BANNER_DESKTOP, arg1) {
  const self = this;
  const apply = _fetchQuestToDeliver.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearQuestAdDecision = function clearQuestAdDecision(placement, ttlMillis) {
  obj = { type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER", placement, fetchedAt: Date.now(), responseTtlSeconds: ttlMillis / 1000 };
  obj.dispatch(obj);
};
export const fetchEarnedQuestToDeliver = function fetchEarnedQuestToDeliver() {
  const self = this;
  const apply = _fetchEarnedQuestToDeliver.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updatePrevRestingQuestDockMode = function updatePrevRestingQuestDockMode(mode) {
  obj = { type: "QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE", mode };
  obj.dispatch(obj);
};
export const updateVideoProgress = function updateVideoProgress(id, maxTimestampSec) {
  const self = this;
  const apply = _updateVideoProgress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchVideoTranscript = function fetchVideoTranscript(quest, arg1) {
  const self = this;
  const apply = _fetchVideoTranscript.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateQuestDockVisibilityEligibility = function updateQuestDockVisibilityEligibility(isEligibleToBeVisible) {
  dispatcherDefault.dispatch({ type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE", isEligibleToBeVisible: isEligibleToBeVisible.isEligibleToBeVisible });
};
export const fetchQuest = function fetchQuest() {
  const self = this;
  const apply = _fetchQuest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestPreview = function fetchQuestPreview(closure_2) {
  const self = this;
  const apply = _fetchQuestPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestHomeHero = function fetchQuestHomeHero() {
  const self = this;
  const apply = _fetchQuestHomeHero.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchQuestHomeHeroPreview = function fetchQuestHomeHeroPreview() {
  const self = this;
  const apply = _fetchQuestHomeHeroPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissQuestActivityModal = function dismissQuestActivityModal(id) {
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id };
  obj.dispatch(obj);
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll };
  obj.dispatch(obj);
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  obj = { type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  obj = { type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  obj = { type: "QUESTS_MARK_DISCOVERED", questId };
  obj.dispatch(obj);
};