import initializeState from "initializeState";
import { getVisibleGuildIdsMethod } from "SidebarVisibilityMethodStore";
import set from "set";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import closure_8 from "initializeState";
import _toPropertyKey from "_toPropertyKey";
import { FetchStatus } from "_toPropertyKey";
import { ORBS_INTRO_QUEST_ID } from "QuestsExperimentLocations";
import ME from "ME";

let closure_12;
let map1;
const require = arg1;
function _manuallyStartConsoleQuest() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
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
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              let c6 = 1;
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
            const tmp25 = new flag(body[11])(set);
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
          set = tmp50;
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
  const _manuallyStartConsoleQuest = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
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
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_13.QUEST_ON_CONSOLE_STOP(callback);
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _manualStopConsoleQuest = tmp;
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            const HTTP = v0(outer1_2[9]).HTTP;
            const obj1 = { url: null, rejectWithError: false };
            obj1[0] = outer1_13.QUESTS_RESET_RECENT_QUEST_COMPLETIONS;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  const _resetRecentQuestCompletions = tmp;
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            let initializeState;
            let c4;
            c5 = undefined;
            c6 = undefined;
            let insertUnsortedGuilds;
            let closure_8;
            let length;
            let closure_10;
            let closure_11;
            let closure_12;
            if (!outer1_8.isFetchingCurrentQuests) {
              items = 0;
              quests = tmp69.quests;
              items = [];
              items = HermesBuiltin.arraySpread(quests.keys(), items);
              let obj3 = outer1_1(outer1_2[10]);
              obj3.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
              c4 = 1;
              const HTTP = outer1_0(outer1_2[9]).HTTP;
              let obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_13.QUESTS_CURRENT_QUESTS;
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
            let closure_13 = initializeState;
            obj1 = lib(quests[10]);
            obj3 = { type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE", error: null };
            const tmp20 = new lib(quests[11])(closure_13);
            obj3[1] = tmp20;
            obj1.dispatch(obj3);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            quests = lib.body.quests;
            const found = quests.filter((config) => items(quests[14]).isQuestWithKnownConfigVersion(config));
            initializeState = found.map((body) => items(quests[14]).questWithUserStatusFromServer(body));
            c4 = lib.body.quest_enrollment_blocked_until;
            c5 = initializeState.filter((userStatus) => {
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
            c6 = quests.map((id) => id.id);
            insertUnsortedGuilds = initializeState.map((id) => id.id);
            closure_8 = c6.filter((arg0) => !insertUnsortedGuilds.includes(arg0));
            length = c5.map((id) => id.id);
            closure_10 = insertUnsortedGuilds.filter((arg0) => !_toPropertyKey.includes(arg0));
            closure_11 = items.filter((arg0) => !_toPropertyKey.includes(arg0));
            const obj4 = { category: "quests.fetch", message: "fetchCurrentQuests completed", data: null };
            const obj5 = { rawCount: null, rawIds: null, validCount: null, validIds: null, prevQuestIds: null, droppedByConfigVersion: null, droppedByPlatformFilter: null, removedFromStore: null };
            obj5[0] = c6.length;
            obj5[1] = c6;
            obj5[2] = length.length;
            obj5[3] = length;
            obj5[4] = items;
            obj5[5] = closure_8;
            obj5[6] = closure_10;
            obj5[7] = closure_11;
            obj4[2] = obj5;
            lib(quests[15]).addBreadcrumb(obj4);
            const excluded_quests = lib.body.excluded_quests;
            closure_12 = excluded_quests.map((id) => items(quests[14]).excludedQuestFromServer(id));
            const obj9 = lib(quests[15]);
            const obj6 = { type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", quests: null, excludedQuests: null, questEnrollmentBlockedUntil: null };
            obj6[1] = c5;
            obj6[2] = closure_12;
            obj6[3] = c4;
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
        initializeState = tmp31;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp31;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const _fetchCurrentQuests = tmp;
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
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c4;
      let c5;
      let terminal;
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let dependencyMap = tmp7;
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
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
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
              const error = new Error();
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
              obj6[0] = callback2(5094).post(obj2);
              return obj6;
            }
          } else {
            if (2 === tmp7) {
              c5 = 0;
              c7 = c4;
              obj4 = callback2(709);
              const obj7 = { type: "QUESTS_SEND_HEARTBEAT_FAILURE", error: null, questId: null, streamKey: null };
              const tmp29 = new callback2(4185)(c7);
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
              obj2 = callback(7087);
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
  const _sendHeartbeat = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let initializeState = tmp3;
              let dependencyMap = tmp7;
              let lib;
              if (null != lib.questContentCTA) {
                const questContentCTA = tmp69.questContentCTA;
                if (obj27.shouldMigrateToAdAnalyticsInterface(callback(outer1_2[19]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "enroll_in_quest")) {
                  let tmp74Result = tmp74(tmp75[20]);
                  const obj1 = { type: null, adCreativeType: null, adCreativeId: null, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, questContentRowIndex: null };
                  obj1[0] = callback(outer1_2[21]).AdUserActionType.CLICK_INTERNAL;
                  obj1[1] = callback(outer1_2[22]).AdCreativeType.QUEST;
                  obj1[2] = tmp68;
                  obj1[3] = questContentCTA;
                  ({ questContent: obj9[4], sourceQuestContent: obj9[5], questContentPosition: obj9[6], questContentRowIndex: obj9[7] } = tmp69);
                  tmp74Result.captureAdUserAction(obj1);
                } else {
                  tmp74Result = tmp74(tmp75[23]);
                  let obj2 = { questId: null, questContent: null, questContentCTA: null, questContentPosition: null, questContentRowIndex: null, sourceQuestContent: null };
                  obj2[0] = tmp68;
                  obj2[1] = tmp69.questContent;
                  obj2[2] = questContentCTA;
                  ({ questContentPosition: obj7[3], questContentRowIndex: obj7[4], sourceQuestContent: obj7[5] } = tmp69);
                  const result = tmp74Result.trackQuestContentClicked(obj2);
                }
                obj27 = callback(outer1_2[19]);
              }
              if (callback === outer1_11) {
                let obj9 = callback(outer1_2[24]);
                const result1 = obj9.dismissOrbsOnboardingExperience();
              }
              if (outer1_8.isEnrolling(callback)) {
                const obj3 = { type: null };
                obj3[0] = outer1_19.PREVIOUS_IN_FLIGHT_REQUEST;
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = obj3;
                return obj4;
              } else {
                let obj10 = lib(outer1_2[10]);
                const obj5 = { type: "QUESTS_ENROLL_BEGIN", questId: null };
                obj5[1] = tmp68;
                obj10.dispatch(obj5);
                let c5 = 1;
                let obj12 = callback(outer1_2[25]);
                const adMetadataSealed = obj12.getAdMetadataSealed(tmp69.questContent);
                let obj13 = callback(outer1_2[25]);
                const adTrafficMetadataSealed = obj13.getAdTrafficMetadataSealed(tmp69.questContent, tmp68);
                const HTTP = callback(outer1_2[9]).HTTP;
                const obj6 = { url: null, body: null, rejectWithError: true };
                obj6[0] = outer1_13.QUESTS_ENROLL(tmp68);
                const obj7 = { location: null };
                obj7[0] = tmp69.questContent;
                const merged = Object.assign(callback(outer1_2[25]).getAdDecisionData(tmp68, tmp69.questContent));
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
                let tmp3 = null != closure_2 && typeof closure_2 === "ay";
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
            obj12[1] = callback(7087).questUserStatusFromServer(lib.body);
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
  const _enrollInQuest = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (claimingReward === 2) {
        claimingReward = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let closure_4 = tmp3;
              let initializeState = tmp7;
              let lib;
              let closure_2;
              if (claimingReward.isClaimingReward(callback)) {
                claimingReward = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let obj7 = lib(closure_2[10]);
                const obj1 = { type: "QUESTS_CLAIM_REWARD_BEGIN", questId: null };
                obj1[1] = tmp73;
                obj7.dispatch(obj1);
                let c6 = 1;
                const adMetadataSealed = callback(closure_2[25]).getAdMetadataSealed(tmp75);
                const obj10 = callback(closure_2[25]);
                const adTrafficMetadataSealed = callback(closure_2[25]).getAdTrafficMetadataSealed(tmp75, tmp73);
                const HTTP = callback(closure_2[9]).HTTP;
                let obj2 = { url: null, body: null, rejectWithError: false };
                obj2[0] = outer1_13.QUESTS_CLAIM_REWARD(tmp73);
                const obj3 = { platform: null, location: null };
                obj3[0] = tmp74;
                obj3[1] = tmp75;
                const obj11 = callback(closure_2[25]);
                const merged = Object.assign(callback(closure_2[25]).getAdDecisionData(tmp73, tmp75));
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
            initializeState = set;
            let obj5 = lib(closure_2[10]);
            obj5 = { type: "QUESTS_CLAIM_REWARD_FAILURE", error: null, questId: null };
            const tmp35 = new lib(closure_2[11])(initializeState);
            obj5[1] = tmp35;
            obj5[2] = callback;
            obj5.dispatch(obj5);
            throw initializeState;
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
          set = tmp58;
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
  const _claimQuestReward = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (outer1_8.isFetchingRewardCode(callback)) {
                c6 = 3;
              } else {
                let obj6 = outer1_1(outer1_2[10]);
                const obj1 = { type: "QUESTS_FETCH_REWARD_CODE_BEGIN", questId: null };
                obj1[1] = tmp47;
                obj6.dispatch(obj1);
                let c4 = 1;
                const HTTP = callback(outer1_2[9]).HTTP;
                let obj2 = { url: null, rejectWithError: false };
                obj2[0] = outer1_13.QUESTS_REWARD_CODE(tmp47);
                c5 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = initializeState;
            let obj4 = lib(709);
            obj4 = { type: "QUESTS_FETCH_REWARD_CODE_FAILURE", error: null, questId: null };
            const tmp28 = new lib(4185)(dependencyMap);
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
            obj2 = callback(7087);
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
          initializeState = tmp39;
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
  const _fetchQuestRewardCode = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let initializeState = tmp3;
              let dependencyMap = tmp7;
              let lib;
              const isDismissingContentResult = outer1_8.isDismissingContent(callback);
              if (!isDismissingContentResult) {
                if (obj16.isDismissible(lib)) {
                  let obj6 = lib(outer1_2[10]);
                  const obj1 = { type: "QUESTS_DISMISS_CONTENT_BEGIN", questId: null, content: null };
                  obj1[1] = tmp54;
                  obj1[2] = tmp55;
                  obj6.dispatch(obj1);
                  let c5 = 1;
                  const adTrafficMetadataSealed = callback(outer1_2[25]).getAdTrafficMetadataSealed(tmp55, tmp54);
                  const HTTP = callback(outer1_2[9]).HTTP;
                  let obj2 = { url: null, body: null, rejectWithError: false };
                  obj2[0] = outer1_13.QUESTS_DISMISS_CONTENT(tmp54, tmp55);
                  const obj3 = {};
                  const obj9 = callback(outer1_2[25]);
                  const merged = Object.assign(callback(outer1_2[25]).getAdDecisionData(tmp54, tmp55));
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
              obj16 = callback(outer1_2[25]);
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              dependencyMap = closure_4;
              obj4 = lib(709);
              const obj5 = { type: "QUESTS_DISMISS_CONTENT_FAILURE", error: null, questId: null };
              const tmp27 = new lib(4185)(dependencyMap);
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
              obj2 = callback(7087);
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
  const _dismissQuestContent = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let initializeState = tmp3;
              let body = tmp7;
              let num7;
              if (num7 === undefined) {
                num7 = 1;
              }
              body = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let c5 = 1;
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
              initializeState = closure_4;
              obj4 = num7(body[10]);
              const obj5 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
              const tmp27 = new num7(body[11])(initializeState);
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
  const _completeQuestPreview = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              let c4 = 1;
              const HTTP = callback(outer1_2[9]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_13.QUESTS_PREVIEW_STATUS(callback);
              obj1[1] = {};
              c5 = 2;
              c6 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              dependencyMap = initializeState;
              let obj4 = lib(709);
              const obj3 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
              const tmp27 = new lib(4185)(dependencyMap);
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
              obj2 = callback(7087);
              obj4[1] = obj2.questUserStatusFromServer(lib.body);
              obj.dispatch(obj4);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp31) {
          initializeState = tmp31;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _resetQuestPreviewStatus = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              let c4 = 1;
              outer1_1(outer1_2[10]).dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
              const HTTP = callback(outer1_2[9]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_13.QUESTS_PREVIEW_DISMISSIBILITY(callback);
              obj1[1] = {};
              c5 = 2;
              c6 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              dependencyMap = initializeState;
              let obj4 = lib(709);
              const obj3 = { type: "QUESTS_PREVIEW_UPDATE_FAILURE", error: null, questId: null };
              const tmp27 = new lib(4185)(dependencyMap);
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
              obj2 = callback(7087);
              obj4[1] = obj2.questUserStatusFromServer(lib.body);
              obj.dispatch(obj4);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp31) {
          initializeState = tmp31;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp31;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _resetQuestDismissibilityStatus = tmp;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            let closure_0 = tmp7;
            closure_0 = undefined;
            if (!outer1_8.isFetchingClaimedQuests) {
              let obj5 = outer1_1(outer1_2[10]);
              obj5.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
              let c3 = 1;
              const HTTP = outer1_0(outer1_2[9]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_13.QUESTS_CLAIMED_QUESTS;
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
            const tmp25 = new callback(4185)(callback);
            obj3[1] = tmp25;
            obj3.dispatch(obj3);
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const quests = arg1.body.quests;
            closure_0 = quests.map((id) => callback(tmp34[14]).getClaimedQuestWithUserStatusFromServer(id));
            obj = callback(709);
            const obj4 = { type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS", quests: null };
            obj4[1] = closure_0;
            obj.dispatch(obj4);
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj5 = { value: null, done: true };
          obj5[0] = arg1;
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
  const _fetchClaimedQuests = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = body;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw body;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c9 = 2;
            if (0 === guildsTree) {
              if (arg0 === 1) {
                c9 = 3;
                throw body;
              } else if (arg0 === 2) {
                c9 = 3;
                obj = { value: null, done: true };
                obj[0] = body;
                return obj;
              } else {
                let enabled = tmp3;
                let lib = tmp5;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = callback2;
                let dependencyMap;
                let c3;
                lib = undefined;
                enabled = undefined;
                throwTypeErrorResult = undefined;
                let c7;
                guildsTree = undefined;
                c9 = undefined;
                let c10;
                let c11;
                let result;
                body = undefined;
                let creative;
                let quest;
                const _Date = Date;
                dependencyMap = Date.now();
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = outer1_2;
                throwTypeErrorResult = callback2(outer1_2[26]).recordQuestRequestAttempt("/quests/decision", callback2, callback);
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = outer1_2;
                const obj30 = callback2(outer1_2[26]);
                let obj1 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: null };
                obj1[1] = callback;
                throwTypeErrorResult = callback2(outer1_2[10]).dispatch(obj1);
                c7 = 1;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = outer1_2;
                const obj31 = callback2(outer1_2[10]);
                guildsTree = 2;
                c9 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = callback(outer1_2[27]).getSession();
                return obj2;
              }
            } else {
              if (1 === tmp8) {
                throwTypeErrorResult = lib;
                throwTypeErrorResult = enabled;
                c7 = 0;
                const message = throwTypeErrorResult;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                const obj3 = { wasSuccessful: false, currentFetchedAt: null };
                throwTypeErrorResult = dependencyMap;
                obj3[1] = dependencyMap;
                throwTypeErrorResult = callback2(10381).recordQuestRequestApiResponse("/quests/decision", obj3);
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                const obj20 = callback2(10381);
                throwTypeErrorResult = result;
                const obj4 = {};
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = obj4;
                throwTypeErrorResult = Object.assign(callback2(7057)());
                throwTypeErrorResult = undefined;
                if (message != null) {
                  throwTypeErrorResult = message.message;
                }
                dependencyMap = throwTypeErrorResult;
                if (throwTypeErrorResult == null) {
                  dependencyMap = null;
                }
                throwTypeErrorResult = lib;
                throwTypeErrorResult = enabled;
                throwTypeErrorResult = dependencyMap;
                obj4.reason = dependencyMap;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = message;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new.target;
                const obj24 = new callback2(4185)(message);
                throwTypeErrorResult = obj24;
                obj4.api_error = obj24.getAnyErrorMessage();
                throwTypeErrorResult = callback2;
                obj4.caller_source = callback2;
                throwTypeErrorResult = callback2(698).track(result.QUEST_DECISION_ROUNDTRIP_ERROR, obj4);
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                const obj22 = callback2(698);
                let obj5 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", error: null, placement: null };
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = message;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new callback2(4185)(message);
                obj5[1] = throwTypeErrorResult;
                throwTypeErrorResult = callback;
                obj5[2] = callback;
                throwTypeErrorResult = callback2(709).dispatch(obj5);
                c9 = 3;
                const obj25 = callback2(709);
              } else if (2 === tmp8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw body;
                } else if (arg0 === 2) {
                  c7 = 0;
                  c9 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = body;
                  return obj6;
                } else {
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = enabled;
                  c3 = body;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  let obj16 = callback(7100);
                  guildsTree = 3;
                  c9 = 1;
                  let obj7 = { value: null, done: false };
                  obj7[0] = obj16.getOrRefreshAdSession();
                  return obj7;
                }
              } else if (3 === tmp8) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw body;
                } else if (arg0 === 2) {
                  c7 = 0;
                  c9 = 3;
                  let obj8 = { value: null, done: true };
                  obj8[0] = body;
                  return obj8;
                } else {
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = enabled;
                  lib = body;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  const LessPersonalizedAdsExperiment = callback(10382).LessPersonalizedAdsExperiment;
                  enabled = LessPersonalizedAdsExperiment.getConfig({ location: "QuestActionCreators.fetchQuestToDeliver" });
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = lib();
                  if (null != throwTypeErrorResult) {
                    let items = throwTypeErrorResult();
                  } else {
                    items = [];
                  }
                  c7 = items;
                  guildsTree = c7.getGuildsTree();
                  const found = c7.filter((stateFromStores) => {
                    if (obj.isPseudoGuildId(stateFromStores)) {
                      return false;
                    } else {
                      node = node.getNode(stateFromStores);
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
                    obj = callback(_null[30]);
                  });
                  c9 = found.slice(0, 50);
                  let tmp97;
                  if (enabled.enabled) {
                    tmp97 = c9;
                  }
                  c10 = tmp97;
                  const _URLSearchParams = URLSearchParams;
                  const obj9 = { placement: null };
                  const _String3 = String;
                  throwTypeErrorResult = callback;
                  obj9[0] = String(callback);
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = obj9;
                  throwTypeErrorResult = new URLSearchParams(obj9);
                  c11 = throwTypeErrorResult;
                  throwTypeErrorResult = undefined;
                  if (c3 != null) {
                    throwTypeErrorResult = c3.uuid;
                  }
                  if (null != throwTypeErrorResult) {
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = c11;
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = c11.append("client_heartbeat_session_id", c3.uuid);
                  }
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = lib;
                  if (null != lib.uuid) {
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = c11;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = c11.append("client_ad_session_id", lib.uuid);
                  }
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = c10;
                  if (null != c10) {
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = c10;
                    throwTypeErrorResult = c10.forEach((arg0) => _undefined.append("visible_guild_ids", arg0));
                  }
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = enabled;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  const HTTP = callback(530).HTTP;
                  const obj10 = { url: null, rejectWithError: false, context: null };
                  throwTypeErrorResult = body;
                  throwTypeErrorResult = c11;
                  const _HermesInternal = HermesInternal;
                  obj10[0] = "" + body.QUEST_FETCH_QUEST_TO_DELIVER + "?" + c11.toString();
                  const obj11 = { connection_type: null };
                  obj11[0] = throwTypeErrorResult.getType();
                  obj10[2] = obj11;
                  guildsTree = 4;
                  c9 = 1;
                  const obj12 = { value: null, done: false };
                  obj12[0] = HTTP.get(obj10);
                  return obj12;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw body;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj13 = { value: null, done: true };
                obj13[0] = body;
                return obj13;
              } else {
                throwTypeErrorResult = lib;
                body = body.body;
                throwTypeErrorResult = body;
                creative = body.creative;
                throwTypeErrorResult = creative;
                if (null != creative) {
                  if (creative.creative_type === callback(7108).AdCreativeType.QUEST) {
                    obj1 = callback(7087);
                    result = obj1.questConfigFromServer(creative.creative_content);
                  }
                } else {
                  quest = body.quest;
                  result = undefined;
                  if (null != quest) {
                    obj = callback(7087);
                    result = obj.questConfigFromServer(quest);
                  }
                }
                obj2 = callback2(709);
                const obj14 = { type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS", quest: null, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
                obj14[1] = result;
                const ad_identifiers = body.ad_identifiers;
                let ad_id;
                if (ad_identifiers != null) {
                  ad_id = ad_identifiers.ad_id;
                }
                const obj15 = { ad_id: null, adset_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
                obj15[0] = ad_id;
                const ad_identifiers2 = body.ad_identifiers;
                let adset_id;
                if (ad_identifiers2 != null) {
                  adset_id = ad_identifiers2.adset_id;
                }
                obj15[1] = adset_id;
                const ad_identifiers3 = body.ad_identifiers;
                let ad_set_id;
                if (ad_identifiers3 != null) {
                  ad_set_id = ad_identifiers3.ad_set_id;
                }
                obj15[2] = ad_set_id;
                const ad_identifiers4 = body.ad_identifiers;
                let campaign_id;
                if (ad_identifiers4 != null) {
                  campaign_id = ad_identifiers4.campaign_id;
                }
                obj15[3] = campaign_id;
                const ad_identifiers5 = body.ad_identifiers;
                let creative_id;
                if (ad_identifiers5 != null) {
                  creative_id = ad_identifiers5.creative_id;
                }
                obj15[4] = creative_id;
                const ad_identifiers6 = body.ad_identifiers;
                let creative_type;
                if (ad_identifiers6 != null) {
                  creative_type = ad_identifiers6.creative_type;
                }
                obj15[5] = creative_type;
                obj15[6] = body.request_id;
                obj15[7] = null != body.ad_identifiers;
                obj14[2] = obj15;
                obj14[3] = body.metadata_sealed;
                obj14[4] = body.traffic_metadata_sealed;
                obj14[5] = body.ad_context;
                obj14[6] = body.response_ttl_seconds;
                obj14[7] = callback;
                obj14[8] = dependencyMap;
                obj2.dispatch(obj14);
                obj5 = callback2(10381);
                obj16 = { wasSuccessful: true, adRequestId: null, currentQuestId: null, currentFetchedAt: null };
                const _String = String;
                obj16[1] = String(body.request_id);
                let id;
                if (result != null) {
                  id = result.id;
                }
                c3 = id;
                if (id == null) {
                  c3 = null;
                }
                obj16[2] = c3;
                obj16[3] = dependencyMap;
                const result1 = obj5.recordQuestRequestApiResponse("/quests/decision", obj16);
                if (null != result) {
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = enabled;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  if (callback === callback(5131).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA) {
                    obj7 = callback2(10383);
                    obj7.startTracking(result.id);
                  }
                  obj8 = callback2(698);
                  const obj17 = {};
                  const merged = Object.assign(callback2(7057)());
                  obj17.quest_id = result.id;
                  obj17.caller_source = callback2;
                  const _String2 = String;
                  obj17.ad_request_id = String(body.request_id);
                  obj8.track(result.QUEST_DECISION_RECEIVED, obj17);
                  c7 = 0;
                }
              }
              c7 = 0;
              c9 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (throwTypeErrorResult) {
            throwTypeErrorResult = c7;
            if (tmp4 === c7) {
              throwTypeErrorResult = tmp2;
              c9 = tmp2;
              throw throwTypeErrorResult;
            } else {
              guildsTree = throwTypeErrorResult;
            }
          }
        }
      }
    })();
  });
  const _fetchQuestToDeliver = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
              let set = tmp3;
              let uuid = tmp5;
              const callback = prop;
              prop = undefined;
              let found;
              let c3;
              uuid = undefined;
              set = undefined;
              let handleConnectionInfoChange;
              let quests;
              response_ttl_seconds = undefined;
              c9 = undefined;
              if (!fetchingEarnedQuestToDeliverByPlacement.isFetchingEarnedQuestToDeliverByPlacement(prop)) {
                const earnedQuestForPlacement = tmp76.earnedQuestForPlacement;
                let value = earnedQuestForPlacement.get(tmp74);
                prop = undefined;
                if (value != null) {
                  prop = value.earnedDecisionByQuestId;
                }
                found = arr2.filter((arg0) => {
                  let value;
                  if (prop != null) {
                    value = prop.get(arg0);
                  }
                  return !callback(found[25]).earnedDecisionIsValid(value);
                });
                if (0 !== found.length) {
                  const _Date = Date;
                  c3 = Date.now();
                  const result = callback2(10385).recordEarnedRequestAttempt(tmp74, tmp75);
                  const obj16 = callback2(10385);
                  const obj1 = { type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN", content: null };
                  obj1[1] = tmp74;
                  callback2(709).dispatch(obj1);
                  quests = 1;
                  const obj17 = callback2(709);
                  response_ttl_seconds = 2;
                  c9 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback(6832).getSession();
                  return obj2;
                }
              }
              arr2 = callback;
              tmp75 = found;
              tmp76 = fetchingEarnedQuestToDeliverByPlacement;
            }
          } else {
            if (1 === tmp8) {
              quests = 0;
              let closure_10 = handleConnectionInfoChange;
              let obj5 = prop(found[34]);
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
                set = found.join(",");
                const HTTP = callback(found[9]).HTTP;
                uuid = undefined;
                if (uuid != null) {
                  uuid = uuid.uuid;
                }
                const obj6 = { url: null, rejectWithError: false };
                obj6[0] = closure_13.QUEST_EARNED_DECISION(set, callback, uuid);
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
              handleConnectionInfoChange = arg1;
              quests = handleConnectionInfoChange.body.quests;
              response_ttl_seconds = handleConnectionInfoChange.body.response_ttl_seconds;
              const _Map = Map;
              const map = new Map(found.map((arg0) => {
                let tmp;
                if (table != null) {
                  tmp = table[arg0];
                }
                const items = [arg0, ];
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
              const request_id = handleConnectionInfoChange.body.request_id;
              c3 = request_id;
              if (request_id == null) {
                c3 = null;
              }
              obj = { wasSuccessful: true, requestId: null, fetchedAt: null };
              obj[1] = c3;
              obj[2] = c3;
              const result2 = prop(found[34]).recordEarnedRequestApiResponse(callback, obj);
              quests = 0;
              const obj15 = prop(found[34]);
              const tmp64 = callback;
            }
            quests = 0;
            c9 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
          c9 = 3;
        } catch (tmp36) {
          handleConnectionInfoChange = tmp36;
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
  const _fetchEarnedQuestToDeliver = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1) {
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
            } else {
              let obj4 = lib(outer1_2[16]);
              const obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj1[0] = outer1_13.QUESTS_VIDEO_PROGRESS(callback);
              const obj2 = { timestamp: null };
              obj2[0] = lib;
              obj1[1] = obj2;
              const obj3 = { event: null, properties: null };
              obj3[0] = callback(outer1_2[17]).NetworkActionNames.QUEST_VIDEO_PROGRESS;
              obj4 = { quest_id: null, timestamp_sec: null, stack_trace: null };
              obj4[0] = callback;
              obj4[1] = lib.toString();
              const _Error = Error;
              const error = new Error();
              const stack = error.stack;
              let c2 = stack;
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp6) {
          c3 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  const _updateVideoProgress = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const obj15 = lib(questAsset[35]);
                questAsset = obj15.getQuestAsset(lib, lib(questAsset[35]).QuestAssetType.VIDEO_PLAYER_TRANSCRIPT, undefined, flag);
                if (null != questAsset) {
                  const state = store.getState();
                  const obj2 = { questId: null, fetchStatus: null };
                  obj2[0] = lib.id;
                  obj2[1] = constants.FETCHING;
                  state.setTranscriptAsset(obj2);
                  let c5 = 1;
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
          let closure_4 = tmp41;
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
  const _fetchVideoTranscript = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              let closure_1 = tmp5;
              let lib;
              const HTTP = lib(outer1_2[9]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_13.QUEST(lib);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            obj = lib(table[14]);
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = obj.questConfigFromServer(lib.body);
            return obj4;
          }
        } catch (tmp15) {
          c4 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const _fetchQuest = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (outer1_8.isFetchingQuestPreview(callback)) {
                c6 = 3;
              } else {
                let obj6 = outer1_1(outer1_2[10]);
                const obj1 = { type: "QUESTS_FETCH_PREVIEW_BEGIN", questId: null };
                obj1[1] = tmp47;
                obj6.dispatch(obj1);
                let c4 = 1;
                const HTTP = callback(outer1_2[9]).HTTP;
                let obj2 = { url: null, rejectWithError: false };
                obj2[0] = outer1_13.QUEST_PREVIEW(tmp47);
                c5 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = initializeState;
            let obj4 = lib(709);
            obj4 = { type: "QUESTS_FETCH_PREVIEW_FAILURE", error: null, questId: null };
            const tmp28 = new lib(4185)(dependencyMap);
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
            obj2 = callback(7087);
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
          initializeState = tmp39;
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
  const _fetchQuestPreview = tmp;
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
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    } else {
      throwTypeErrorResult = arg1;
      throwTypeErrorResult = arg0;
      throwTypeErrorResult = tmp6;
      throwTypeErrorResult = globalThis;
      throwTypeErrorResult = null;
      if (tmp7 === 3) {
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
          creative_type = 2;
          if (0 === type) {
            if (arg0 === 1) {
              creative_type = 3;
              throw arg1;
            } else if (arg0 === 2) {
              creative_type = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let initializeState = tmp3;
              let closure_2 = tmp5;
              let callback;
              let callback2;
              closure_2 = undefined;
              initializeState = undefined;
              let c4;
              let body;
              type = undefined;
              creative_type = undefined;
              let closure_8;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = outer1_2;
              const QUEST_HOME_BANNER_DESKTOP = outer1_0(outer1_2[12]).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
              callback = QUEST_HOME_BANNER_DESKTOP;
              if (!outer1_8.isFetchingQuestToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
                const lastFetchedQuestHomeHero = obj22.getLastFetchedQuestHomeHero();
                if (null != lastFetchedQuestHomeHero) {
                  const _Date = Date;
                }
                const _Date2 = Date;
                callback2 = Date.now();
                let obj1 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: null };
                obj1[1] = QUEST_HOME_BANNER_DESKTOP;
                outer1_1(outer1_2[10]).dispatch(obj1);
                body = 1;
                throwTypeErrorResult = outer1_2;
                const obj15 = outer1_1(outer1_2[10]);
                type = 2;
                creative_type = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_0(outer1_2[27]).getSession();
                return obj2;
              }
              creative_type = 3;
              obj22 = outer1_8;
            }
          } else if (1 === tmp8) {
            body = 0;
            let _toPropertyKey = c4;
            let obj12 = callback2(closure_2[10]);
            const obj3 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_FAILURE", error: null, placement: null };
            const tmp89 = new callback2(closure_2[11])(_toPropertyKey);
            obj3[1] = tmp89;
            obj3[2] = callback;
            obj12.dispatch(obj3);
            throw _toPropertyKey;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              creative_type = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 0;
              creative_type = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_2 = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              body = 0;
              creative_type = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              throwTypeErrorResult = closure_2;
              initializeState = arg1;
              const _URLSearchParams = URLSearchParams;
              const obj7 = { placement: null, num_decisions_requested: "1" };
              const _String = String;
              throwTypeErrorResult = callback;
              obj7[0] = String(callback);
              throwTypeErrorResult = new.target;
              throwTypeErrorResult = new.target;
              throwTypeErrorResult = obj7;
              throwTypeErrorResult = new URLSearchParams(obj7);
              c4 = throwTypeErrorResult;
              let uuid;
              if (closure_2 != null) {
                uuid = closure_2.uuid;
              }
              if (null != uuid) {
                c4.append("client_heartbeat_session_id", closure_2.uuid);
              }
              if (null != initializeState.uuid) {
                c4.append("client_ad_session_id", initializeState.uuid);
              }
              const HTTP = callback(closure_2[9]).HTTP;
              const obj8 = { url: null, rejectWithError: false, context: null };
              const _HermesInternal = HermesInternal;
              obj8[0] = "" + constants.QUESTS_GET_DECISIONS + "?" + c4.toString();
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
            throw arg1;
          } else if (arg0 !== 2) {
            throwTypeErrorResult = closure_2;
            body = arg1.body;
            throwTypeErrorResult = body;
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
              obj = callback(closure_2[37]);
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
          obj13[0] = arg1;
          return obj13;
        } catch (throwTypeErrorResult) {
          c4 = throwTypeErrorResult;
          throwTypeErrorResult = body;
          if (tmp4 === body) {
            throwTypeErrorResult = tmp2;
            creative_type = tmp2;
            throw throwTypeErrorResult;
          } else {
            type = throwTypeErrorResult;
          }
        }
      }
    }
  });
  const _fetchQuestHomeHero = tmp;
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
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let creative_type = tmp3;
              let initializeState = tmp5;
              let QUEST_HOME_BANNER_DESKTOP;
              let callback2;
              body = undefined;
              initializeState = undefined;
              creative_type = undefined;
              let set;
              QUEST_HOME_BANNER_DESKTOP = callback(outer1_2[12]).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
              const _Date = Date;
              callback2 = Date.now();
              let obj1 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_BEGIN", placement: null };
              obj1[1] = QUEST_HOME_BANNER_DESKTOP;
              outer1_1(outer1_2[10]).dispatch(obj1);
              let c6 = 1;
              const _URLSearchParams = URLSearchParams;
              const str5 = new URLSearchParams();
              str5.append("ad_creative_ids", QUEST_HOME_BANNER_DESKTOP);
              const HTTP = callback(outer1_2[9]).HTTP;
              const obj2 = { url: null, rejectWithError: false };
              const _HermesInternal = HermesInternal;
              obj2[0] = "" + outer1_13.QUESTS_CREATIVE_PREVIEW + "?" + str5.toString();
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            c6 = set;
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
            initializeState = callback2;
            let creative;
            if (initializeState != null) {
              creative = initializeState.creative;
            }
            body = creative;
            if (creative == null) {
              body = null;
            }
            creative_type = body;
            set = null;
            let tmp16 = null != creative_type;
            if (tmp16) {
              tmp16 = creative_type.creative_type === QUEST_HOME_BANNER_DESKTOP(body[22]).AdCreativeType.QUEST_HOME_HERO;
            }
            if (tmp16) {
              obj = QUEST_HOME_BANNER_DESKTOP(body[37]);
              set = obj.questHomeHeroFromServer(creative_type);
            }
            obj1 = callback2(body[10]);
            const obj6 = { type: "QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS", questHomeHero: null, adDecisionData: null, metadataSealed: null, trafficMetadataSealed: null, adContext: null, responseTtlSeconds: null, placement: null, fetchedAt: null };
            obj6[1] = set;
            let ad_id;
            if (initializeState != null) {
              let ad_identifiers = initializeState.ad_identifiers;
              if (ad_identifiers != null) {
                ad_id = ad_identifiers.ad_id;
              }
            }
            const obj7 = { ad_id: null, ad_set_id: null, campaign_id: null, creative_id: null, creative_type: null, decision_id: null, is_targeted: null };
            obj7[0] = ad_id;
            let ad_set_id;
            if (initializeState != null) {
              const ad_identifiers2 = initializeState.ad_identifiers;
              if (ad_identifiers2 != null) {
                ad_set_id = ad_identifiers2.ad_set_id;
              }
            }
            obj7[1] = ad_set_id;
            let campaign_id;
            if (initializeState != null) {
              const ad_identifiers3 = initializeState.ad_identifiers;
              if (ad_identifiers3 != null) {
                campaign_id = ad_identifiers3.campaign_id;
              }
            }
            obj7[2] = campaign_id;
            let creative_id;
            if (initializeState != null) {
              const ad_identifiers4 = initializeState.ad_identifiers;
              if (ad_identifiers4 != null) {
                creative_id = ad_identifiers4.creative_id;
              }
            }
            obj7[3] = creative_id;
            creative_type = undefined;
            if (initializeState != null) {
              const ad_identifiers5 = initializeState.ad_identifiers;
              if (ad_identifiers5 != null) {
                creative_type = ad_identifiers5.creative_type;
              }
            }
            obj7[4] = creative_type;
            obj7[5] = body.request_id;
            ad_identifiers = undefined;
            if (initializeState != null) {
              ad_identifiers = initializeState.ad_identifiers;
            }
            obj7[6] = null != ad_identifiers;
            obj6[2] = obj7;
            let metadata_sealed;
            if (initializeState != null) {
              metadata_sealed = initializeState.metadata_sealed;
            }
            obj6[3] = metadata_sealed;
            let prop;
            if (initializeState != null) {
              prop = initializeState.traffic_metadata_sealed;
            }
            obj6[4] = prop;
            let ad_context;
            if (initializeState != null) {
              ad_context = initializeState.ad_context;
            }
            obj6[5] = ad_context;
            let response_ttl_seconds;
            if (initializeState != null) {
              response_ttl_seconds = initializeState.response_ttl_seconds;
            }
            obj6[6] = response_ttl_seconds;
            obj6[7] = QUEST_HOME_BANNER_DESKTOP;
            obj6[8] = callback2;
            obj1.dispatch(obj6);
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp72) {
          set = tmp72;
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
  const _fetchQuestHomeHeroPreview = tmp;
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
let closure_34 = 5 * require("set").Millis.MINUTE;
let result = require("set").fileFinishedImporting("modules/quests/QuestActionCreators.tsx");

export const manuallyStartConsoleQuest = function manuallyStartConsoleQuest(id, outer1_1) {
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
  let obj = importDefault(709);
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
  let obj = importDefault(709);
  obj = { type: "QUESTS_PREVIEW_OVERRIDE", placement, questId: closure_0 };
  obj.dispatch(obj);
};
export const selectTaskPlatform = function selectTaskPlatform(closure_0, platform) {
  let obj = importDefault(709);
  obj = { type: "QUESTS_SELECT_TASK_PLATFORM", questId: closure_0, platform };
  obj.dispatch(obj);
};
export const questsVisibleMobileMessagesChanged = function questsVisibleMobileMessagesChanged(payload) {
  let obj = importDefault(709);
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
  let obj = importDefault(709);
  obj = { type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS", questId: id, taskEventName: taskType, progress: currentTime };
  obj.dispatch(obj);
};
export const resetOptimisticProgress = function resetOptimisticProgress(questId) {
  let obj = importDefault(709);
  obj = { type: "QUESTS_RESET_OPTIMISTIC_PROGRESS", questId };
  obj.dispatch(obj);
};
export const fetchQuestToDeliver = function fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg1) {
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
  let obj = importDefault(709);
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
  let obj = importDefault(709);
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
export const fetchVideoTranscript = function fetchVideoTranscript(arg0, arg1) {
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
  importDefault(709).dispatch({ type: "QUESTS_DOCK_VISIBILITY_ELIGIBILITY_UPDATE", isEligibleToBeVisible: isEligibleToBeVisible.isEligibleToBeVisible });
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
export const fetchQuestPreview = function fetchQuestPreview(arg0) {
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
  let obj = importDefault(709);
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_DISMISS", questId: id };
  obj.dispatch(obj);
};
export const setAutoEnroll = function setAutoEnroll(autoEnroll) {
  let obj = importDefault(709);
  obj = { type: "UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL", autoEnroll };
  obj.dispatch(obj);
};
export const markAdContentSeen = function markAdContentSeen(QUEST, items) {
  let obj = importDefault(709);
  obj = { type: "AD_CONTENT_MARK_SEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markAdContentUnseen = function markAdContentUnseen(QUEST, items) {
  let obj = importDefault(709);
  obj = { type: "AD_CONTENT_MARK_UNSEEN", adCreativeType: QUEST, contentIds: items };
  obj.dispatch(obj);
};
export const markQuestDiscovered = function markQuestDiscovered(questId) {
  let obj = importDefault(709);
  obj = { type: "QUESTS_MARK_DISCOVERED", questId };
  obj.dispatch(obj);
};