// === Module 12948: ConjureChatStore ===

// Module 12948 (ConjureChatStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import SoundUtils from "SoundUtils" /* 10940 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 11371 */;
import conjureProjectMute from "conjureProjectMute" /* 12949 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7252 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12517 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5756 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;

require = fn;
function newMessage(assistant, content, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  if (id == null) {
    const sum = c31 + 1;
    c31 = sum;
    id = `m${tmp2}`;
  }
  const obj2 = { id, render_id: id, role: assistant, content };
  if (null != userId) {
    const obj3 = { user_id: userId };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  if (null != turnId) {
    const obj5 = { turn_id: turnId };
    let obj6 = obj5;
  } else {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  obj2.steps = [];
  if (null != ts) {
    const _Date2 = Date;
    let parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  obj2.created_at = parsed;
  obj2.attachments = obj.attachments;
  return obj2;
}
function newMessageFromHistory(ts) {
  const tmp = newMessage(ts.role, ts.content, { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments });
  const tmp2 = (function snowflakeTimeOf(id) {
    let startsWithResult;
    if (id != null) {
      startsWithResult = id.startsWith(closure_1_33);
    }
    let substr = id;
    if (true === startsWithResult) {
      substr = id.slice(5);
    }
    if (null != substr) {
      if (obj.test(substr)) {
        const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(substr);
        const _Number = Number;
        let tmp8 = null;
        if (Number.isFinite(extractTimestampResult)) {
          tmp8 = null;
          if (extractTimestampResult > 0) {
            tmp8 = extractTimestampResult;
          }
        }
        return tmp8;
      }
      obj = /^\d+$/;
    }
    return null;
  })(ts.id);
  let tmp3 = null == tmp2;
  if (!tmp3) {
    tmp3 = "assistant" !== ts.role && null != ts.ts;
    const tmp4 = "assistant" !== ts.role && null != ts.ts;
  }
  if (!tmp3) {
    tmp.created_at = tmp2;
  }
  if ("assistant" === ts.role) {
    if (null != ts.ts) {
      const _Date = Date;
      const parsed = Date.parse(ts.ts);
      let _Number = Number;
      if (Number.isFinite(parsed)) {
        tmp.settled_at = parsed;
      }
    }
  }
  if (null != ts.kind) {
    tmp.kind = ts.kind;
  }
  if ("interrupted" === ts.kind) {
    tmp.interrupted = true;
    tmp.content = "";
    tmp.finished = true;
  }
  if (null != ts.proposal) {
    tmp.proposal = ts.proposal;
  }
  if (tmp7) {
    tmp.ideas = ts.ideas;
  }
  if (null != ts.publish_cta) {
    tmp.publishCta = ts.publish_cta;
  }
  if (null != ts.publish_notice) {
    tmp.publishNotice = ts.publish_notice;
  }
  if (null != ts.project_event) {
    tmp.projectEvent = ts.project_event;
  }
  if (tmp8) {
    tmp.clarification = ts.clarification;
  }
  if (null != ts.restore_proposal) {
    tmp.restoreProposal = ts.restore_proposal;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  if (tmp9) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    tmp.steps = replayTimeline(ts.steps);
  } else if (null != ts.events) {
    const events = ts.events;
    tmp.steps = events.flatMap((type) => {
      if ("todos" === type.type) {
        const obj = { type: "step", kind: "todos", items: type.items };
        const items = [obj];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    });
  }
  if (tmp11) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  if (tmp12) {
    tmp.intake = ts.intake;
  }
  let steps = ts.steps;
  if (steps == null) {
    steps = [];
  }
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp14 = nextResult;
    let tmp15 = "awaiting_user" === nextResult.kind;
    if (tmp15) {
      tmp15 = "secrets" === tmp14.action;
    }
    if (tmp15) {
      let obj2 = { action: null };
      obj2.action = tmp14.action;
      tmp.awaitingUser = obj2;
    }
    continue;
  }
  return tmp;
}
function resolveTurnIndex(arr3, activeTurnId) {
  let num = -1;
  if (null != activeTurnId) {
    let diff = arr3.length - 1;
    num = -1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = arr3[diff];
        let tmp4 = tmp3.turn_id === activeTurnId;
        if (!tmp4) {
          let _HermesInternal = HermesInternal;
          tmp4 = tmp3.id === "" + c33 + activeTurnId;
        }
        num = diff;
        if (tmp4) {
          break;
        } else {
          diff = diff - 1;
          num = -1;
          if (0 > diff) {
            break;
          }
        }
      }
    }
  }
  if (-1 !== num) {
    return num;
  } else {
    let diff1 = arr3.length - 1;
    if (0 <= diff1) {
      while (true) {
        let tmp7 = arr3[diff1];
        if ("assistant" === tmp7.role) {
          let tmp9 = true === tmp7.finished || true === tmp7.continued || "" !== tmp7.content || null != tmp7.proposal || null != tmp7.clarification || null != tmp7.intake;
          if (!tmp9) {
            let steps = tmp7.steps;
            value = weakMap.get(steps);
            if (null == value) {
              let someResult = steps.some((kind) => set.has(kind.kind));
              let result = weakMap.set(steps, someResult);
              value = someResult;
            }
            tmp9 = value;
          }
          if (!tmp9) {
            if (null == tmp7.turn_id) {
              break;
            }
          }
        }
        diff1 = diff1 - 1;
      }
      return diff1;
    }
    return -1;
  }
}
function patchTurn(projectId, turnId, fn) {
  value = map.get(projectId);
  if (null != value) {
    const tmp20 = resolveTurnIndex(value, turnId);
    if (-1 !== tmp20) {
      let tmp7 = tmp6;
      if (null != turnId) {
        tmp7 = tmp6;
        if (null == tmp6.turn_id) {
          let tmp8 = tmp6.turn_id === turnId;
          if (!tmp8) {
            const _HermesInternal = HermesInternal;
            tmp8 = tmp6.id === "" + c33 + turnId;
          }
          tmp7 = tmp6;
          if (!tmp8) {
            const obj2 = {};
            const merged = Object.assign(tmp6);
            obj2.turn_id = turnId;
            tmp7 = obj2;
          }
        }
      }
      const tmp14 = fn(tmp7);
      if (tmp14 !== value[tmp20]) {
        const substr = value.slice();
        substr[tmp20] = tmp14;
        const result = map.set(projectId, substr);
      }
    } else {
      const items = [];
      if (null != turnId) {
        const obj3 = { turnId };
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      items[HermesBuiltin.arraySpread(value, 0)] = fn(newMessage("assistant", "", obj4));
      const result1 = map.set(projectId, items);
      const arraySpreadResult = HermesBuiltin.arraySpread(value, 0);
    }
  }
}
function hasOpenTurn(map) {
  if (null == map) {
    return false;
  } else {
    let diff = map.length - 1;
    let flag2 = false;
    if (0 <= diff) {
      while (true) {
        let tmp = map[diff];
        let tmp4 = flag2;
        if ("assistant" === tmp.role) {
          let tmp5 = "side_reply" === tmp.kind || "publish_notice" === tmp.kind || "project_event" === tmp.kind;
          tmp4 = flag2;
          if (!tmp5) {
            let flag = flag2;
            if (!flag2) {
              let tmp6 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!tmp6) {
                let steps = tmp.steps;
                value = weakMap.get(steps);
                if (null == value) {
                  let someResult = steps.some((kind) => set.has(kind.kind));
                  let result = weakMap.set(steps, someResult);
                  value = someResult;
                }
                tmp6 = value;
              }
              flag = true;
              if (!tmp6) {
                break;
              }
            }
            tmp4 = flag;
            if (null != tmp.turn_id) {
              let tmp10 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!tmp10) {
                let steps2 = tmp.steps;
                value2 = weakMap.get(steps2);
                if (null == value2) {
                  let someResult1 = steps2.some((kind) => set.has(kind.kind));
                  let result1 = weakMap.set(steps2, someResult1);
                  value2 = someResult1;
                }
                tmp10 = value2;
              }
              tmp4 = flag;
              if (!tmp10) {
                return true;
              }
            }
          }
        }
        diff = diff - 1;
        flag2 = tmp4;
      }
      return true;
    }
    return false;
  }
}
function notifyTurn(projectId, guildId, title, body, nonce) {
  if (null != nonce) {
    let num = map5.get(projectId);
    if (num == null) {
      num = 0;
    }
    if (nonce > num) {
      const result = map5.set(projectId, nonce);
    }
  }
  let result2 = ConjurePlatformUtilsDefault.areTurnNotificationsDisabled();
  if (!result2) {
    result2 = SelfPresenceStore.getStatus() === constants.DND;
  }
  if (!result2) {
    const FocusMode = UserSettings.FocusMode;
    result2 = FocusMode.getSetting();
  }
  if (!result2) {
    result2 = FamilyCenterStore.isCurrentUserInRestrictedHours();
  }
  if (!result2) {
    if (!obj3.isConjureProjectMuted(UserSettingsProtoStore.settings, projectId)) {
      const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled("message1");
      guildId = SelectedGuildStore.getGuildId();
      if (null != guildId) {
        if (ConjureProjectStore.getSelectedProjectId(guildId) === projectId) {
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            if (tmpResult.isWindowFocused()) {
              if (!isSoundDisabledResult) {
                SoundUtils.playSound(bit_message1, 0.4);
                const tmp8Result = SoundUtils;
              }
            }
            tmpResult = ConjurePlatformUtilsDefault;
          }
        }
      }
      let conjureWorkspaceGuildId = guildId;
      if (guildId == null) {
        conjureWorkspaceGuildId = ConjureUtils.resolveConjureWorkspaceGuildId("VibegrationsChatStore");
        const tmp8Result2 = ConjureUtils;
      }
      const obj4 = { projectId, guildId: conjureWorkspaceGuildId, title, body, route: null, sound: null, volume: 0.4 };
      let CHANNELResult = null;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = state.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      obj4.route = CHANNELResult;
      let tmp24;
      if (!isSoundDisabledResult) {
        tmp24 = bit_message1;
      }
      obj4.sound = tmp24;
      const result1 = ConjurePlatformUtilsDefault.presentTurnNotification(obj4);
      const tmpResult2 = ConjurePlatformUtilsDefault;
    }
    obj3 = conjureProjectMute;
  }
}
function recordThinkingTransition(projectId) {
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  const tmp = hasOpenTurn(map.get(projectId));
  if (flag !== tmp) {
    const result = map2.set(projectId, tmp);
    const index = closure_23.indexOf(projectId);
    if (-1 !== index) {
      closure_23.splice(index, 1);
    }
    closure_23.unshift(projectId);
    if (tmp) {
      map1.delete(projectId);
    } else {
      value = map.get(projectId);
      let tmp4 = null;
      if (null != value) {
        let diff = value.length - 1;
        tmp4 = null;
        if (0 <= diff) {
          while (true) {
            if ("assistant" === value[diff].role) {
              let tmp7 = value[diff];
              let tmp8 = "side_reply" === tmp7.kind || "publish_notice" === tmp7.kind || "project_event" === tmp7.kind;
              if (!tmp8) {
                break;
              }
            }
            diff = diff - 1;
            tmp4 = null;
          }
          tmp4 = value[diff];
        }
      }
      let tmp9 = null != tmp4;
      if (tmp9) {
        let someResult = "" !== tmp4.content.trim() || null != tmp4.proposal || null != tmp4.clarification || null != tmp4.intake;
        if (!someResult) {
          const steps = tmp4.steps;
          someResult = steps.some((kind) => {
            let hasItem = set.has(kind.kind);
            if (hasItem) {
              hasItem = "terminal_error" !== kind.kind;
            }
            return hasItem;
          });
        }
        tmp9 = someResult;
      }
      if (tmp9) {
        const _Date = Date;
        const result1 = map1.set(projectId, Date.now());
      } else {
        map1.delete(projectId);
      }
      value3 = map.get(projectId);
      if (null != value3) {
        let diff1 = value3.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value3[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value3[diff1].finished_at) {
            let tmp18 = true === tmp15.finished || true === tmp15.continued;
            if (!tmp18) {
              tmp18 = "" !== tmp15.content;
            }
            if (!tmp18) {
              tmp18 = null != tmp15.proposal;
            }
            if (!tmp18) {
              tmp18 = null != tmp15.clarification;
            }
            if (!tmp18) {
              tmp18 = null != tmp15.intake;
            }
            if (!tmp18) {
              const steps2 = tmp15.steps;
              let value4 = weakMap.get(steps2);
              if (null == value4) {
                const someResult1 = steps2.some((kind) => set.has(kind.kind));
                const result2 = weakMap.set(steps2, someResult1);
                value4 = someResult1;
              }
              tmp18 = value4;
            }
            if (tmp18) {
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(value3.slice(0, diff1), 0);
              const obj5 = {};
              const merged = Object.assign(tmp15);
              const _Date2 = Date;
              obj5.finished_at = Date.now();
              items[arraySpreadResult] = obj5;
              HermesBuiltin.arraySpread(value3.slice(diff1 + 1), arraySpreadResult + 1);
              const result3 = map.set(projectId, items);
            }
          }
        }
      }
    }
  }
}
function purgeProject(projectId) {
  let deleteResult = map.delete(projectId);
  const deleteResult1 = map6.delete(projectId);
  const deleteResult2 = set3.delete(projectId);
  const deleteResult3 = map1.delete(projectId);
  const deleteResult4 = map2.delete(projectId);
  const deleteResult5 = map3.delete(projectId);
  const deleteResult6 = map4.delete(projectId);
  const deleteResult7 = set1.delete(projectId);
  const index = closure_23.indexOf(projectId);
  if (-1 !== index) {
    closure_23.splice(index, 1);
  }
  if (!deleteResult) {
    deleteResult = deleteResult1;
  }
  if (!deleteResult) {
    deleteResult = deleteResult2;
  }
  if (!deleteResult) {
    deleteResult = deleteResult3;
  }
  if (!deleteResult) {
    deleteResult = deleteResult4;
  }
  if (!deleteResult) {
    deleteResult = deleteResult5;
  }
  if (!deleteResult) {
    deleteResult = deleteResult6;
  }
  if (!deleteResult) {
    deleteResult = deleteResult7;
  }
  if (!deleteResult) {
    deleteResult = deleteResult8;
  }
  if (!deleteResult) {
    deleteResult = tmp11;
  }
  return deleteResult;
}
function applyAgentReactions(items) {
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("assistant" === nextResult.role) {
      let steps = tmp2.steps;
      for (const item10022 of steps) {
        let tmp5 = "reaction" === item10022.kind;
        if (tmp5) {
          tmp5 = null != item10022.message_id;
        }
        if (tmp5) {
          tmp5 = null != item10022.emoji;
        }
        if (tmp5) {
          tmp5 = "" !== item10022.emoji;
        }
        if (tmp5) {
          let result = map.set(item10022.message_id, item10022.emoji);
        }
        continue;
      }
    }
    continue;
  }
  let mapped = items;
  if (0 !== map.size) {
    mapped = items.map((role) => {
      value = undefined;
      if ("user" === role.role) {
        if (null != role.id) {
          value = map.get(role.id);
        }
      }
      let tmp4 = role;
      if (null != value) {
        tmp4 = role;
        if (role.agentReaction !== value) {
          const obj = {};
          const merged = Object.assign(role);
          obj.agentReaction = value;
          tmp4 = obj;
        }
      }
      return tmp4;
    });
  }
  return mapped;
}
function pushStep(substr, todosAt, step) {
  if (null == step.turn_seq) {
    if ("todos" === step.kind) {
      if (null == step.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = substr.length;
          substr.push(step);
          if (null != step.turn_seq) {
            const seenSeq4 = todosAt.seenSeq;
            seenSeq4.add(step.turn_seq);
          }
        } else {
          if (null != substr[todosAt.todosAt].turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.delete(tmp2.turn_seq);
          }
          substr[todosAt.todosAt] = step;
          if (null != step.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(step.turn_seq);
          }
        }
      }
    }
    substr.push(step);
    if (null != step.turn_seq) {
      const seenSeq5 = todosAt.seenSeq;
      seenSeq5.add(step.turn_seq);
    }
  } else {
    const seenSeq = todosAt.seenSeq;
  }
}
function replayTimeline(steps) {
  const items = [];
  const obj = { seenSeq: new Set(), todosAt: -1 };
  set = new Set();
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(items, obj, tmp3);
    continue;
  }
  const result = weakMap1.set(items, obj);
  return items;
}
function stoppable(role) {
  let tmp = "assistant" === role.role;
  if (tmp) {
    let tmp2 = "side_reply" === role.kind;
    if (!tmp2) {
      tmp2 = "publish_notice" === role.kind;
    }
    if (!tmp2) {
      tmp2 = "project_event" === role.kind;
    }
    tmp = !tmp2;
  }
  if (tmp) {
    let tmp3 = true === role.finished || true === role.continued;
    if (!tmp3) {
      tmp3 = "" !== role.content;
    }
    if (!tmp3) {
      tmp3 = null != role.proposal;
    }
    if (!tmp3) {
      tmp3 = null != role.clarification;
    }
    if (!tmp3) {
      tmp3 = null != role.intake;
    }
    if (!tmp3) {
      const steps = role.steps;
      value = weakMap.get(steps);
      if (null == value) {
        const someResult = steps.some((kind) => set.has(kind.kind));
        const result = weakMap.set(steps, someResult);
        value = someResult;
      }
      tmp3 = value;
    }
    tmp = !tmp3;
  }
  if (tmp) {
    tmp = true !== role.stopRequested;
  }
  return tmp;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
const Constants = fn(1085);
({ Routes: closure_14, StatusTypes: closure_15 } = Constants);
const StaticChannelRoute = fn(2071).StaticChannelRoute;
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const weakMap = new WeakMap();
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_23 = [];
const map3 = new Map();
const map4 = new Map();
const set1 = new Set();
const set2 = new Set();
const map5 = new Map();
let width = 0;
let closure_30 = [];
let c31 = 0;
let c33 = "turn:";
const Store = initializeDefault.Store;
class ConjureChatStore extends Store {
}
const prototype = ConjureChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FamilyCenterStore, NotificationSettingsStore, SelectedChannelStore, SelectedGuildStore, SelfPresenceStore, UserSettingsProtoStore, ConjureProjectStore);
};
prototype["getMessages"] = function getMessages(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_30;
  }
  return value;
};
prototype["hasPendingSettingsRequest"] = function hasPendingSettingsRequest(arg0) {
  const messages = this.getMessages(arg0);
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "assistant" === tmp.role;
  }
  if (tmp2) {
    tmp2 = null != tmp.settingsRequest;
  }
  return tmp2;
};
prototype["isThinking"] = function isThinking(projectId) {
  return hasOpenTurn(map.get(projectId));
};
prototype["hasLoadedHistory"] = function hasLoadedHistory(projectId) {
  return map6.has(projectId);
};
prototype["isHistoryUnavailable"] = function isHistoryUnavailable(projectId) {
  return set3.has(projectId);
};
prototype["getFinishedAt"] = function getFinishedAt(id) {
  let tmp = null;
  if (!hasOpenTurn(map.get(id))) {
    value = map1.get(id);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getProjectUsage"] = function getProjectUsage(projectId) {
  value = map3.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getThinkingActivity"] = function getThinkingActivity(projectId) {
  value = map4.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isCompacting"] = function isCompacting(projectId) {
  return set1.has(projectId);
};
prototype["isSaving"] = function isSaving(arg0) {
  return set2.has(arg0);
};
prototype["getSidebarWidth"] = function getSidebarWidth() {
  return width;
};
prototype["getActivityOrderedProjectIds"] = function getActivityOrderedProjectIds() {
  return closure_23.slice();
};
prototype["isAnyThinking"] = function isAnyThinking() {
  const self = this;
  const keys = map.keys();
  for (const item10008 of keys) {
    if (self.isThinking(item10008)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
};
const map6 = new Map();
const set3 = new Set();
const weakMap1 = new WeakMap();
const conjureChatStore = new ConjureChatStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    map5.clear();
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === set2.size) {
                  if (0 === map6.size) {
                    if (0 === set3.size) {
                      if (0 === closure_23.length) {
                        if (0 === width) {
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set1.clear();
    set2.clear();
    map6.clear();
    set3.clear();
    closure_23.length = 0;
    width = 0;
  },
  CONJURE_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    ({ projectId, entries, cursor, degraded } = arg0);
    let mapped;
    let num;
    value = map6.get(projectId);
    if (map6.has(projectId)) {
      value2 = map.get(projectId);
      if (value2 == null) {
        value2 = [];
      }
      let items = value2;
    } else {
      items = [];
    }
    let tmp4 = cursor;
    if (cursor == null) {
      tmp4 = null;
    }
    const result = map6.set(projectId, tmp4);
    if (true === degraded) {
      set3.add(projectId);
    } else {
      set3.delete(projectId);
    }
    map4.delete(projectId);
    set1.delete(projectId);
    set2.delete(projectId);
    new Set();
    const found = entries.filter((id) => {
      let tmp = null == id.id;
      if (!tmp) {
        const hasItem = set.has(id.id);
        let flag = !hasItem;
        if (!hasItem) {
          set.add(id.id);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    mapped = found.map(newMessageFromHistory);
    num = -1;
    if (null != cursor) {
      num = -1;
      if (true !== degraded) {
        num = mapped.findIndex((id) => null != id.id);
      }
    }
    let num2 = -1;
    if (-1 !== num) {
      num2 = items.findIndex((id) => id.id === mapped[num].id);
    }
    if (-1 !== num2) {
      if (value == null) {
        value = null;
      }
      const result1 = map6.set(projectId, value);
    }
    let tmp17 = mapped;
    if (-1 !== num2) {
      const items1 = [];
      HermesBuiltin.arraySpread(mapped.slice(num), HermesBuiltin.arraySpread(items.slice(0, num2), 0));
      tmp17 = items1;
      const arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, num2), 0);
    }
    const result2 = map.set(projectId, applyAgentReactions(tmp17));
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    ({ projectId, entries } = cursor);
    set = undefined;
    const result = map6.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items1 = map.get(projectId);
      if (items1 == null) {
        items1 = [];
      }
      const mapped = entries.map(newMessageFromHistory);
      const _Set = Set;
      set = new Set(items1.flatMap((id) => {
        if (null == id.id) {
          let items = [];
        } else {
          items = [id.id];
        }
        return items;
      }));
      let items = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(mapped.filter((id) => {
        let tmp = null == id.id;
        if (!tmp) {
          tmp = !set.has(id.id);
        }
        return tmp;
      }), 0));
      const result1 = map.set(projectId, applyAgentReactions(items));
    }
  },
  CONJURE_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
    ({ projectId, id } = optimisticId);
    optimisticId = optimisticId.optimisticId;
    ({ content, userId, timestamp, attachments } = optimisticId);
    let items2 = map.get(projectId);
    if (items2 == null) {
      items2 = [];
    }
    if (items2.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id, userId, attachments };
      const tmp2 = newMessage("user", content, obj2);
      let num3 = -1;
      if (null != optimisticId) {
        num3 = items2.findIndex((id) => id.id === optimisticId);
      }
      if (-1 !== num3) {
        tmp2.render_id = items2[num3].render_id;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items2.slice(0, num3), 0);
        items[arraySpreadResult] = tmp2;
        HermesBuiltin.arraySpread(items2.slice(num3 + 1), arraySpreadResult + 1);
        const result = map.set(projectId, items);
        recordThinkingTransition(projectId);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items2, 0)] = tmp2;
        if (!hasOpenTurn(items1)) {
          items1.push(newMessage("assistant", ""));
        }
        const result1 = map.set(projectId, items1);
        recordThinkingTransition(projectId);
      }
    }
  },
  CONJURE_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    ({ projectId, id: require, activeTurnId, disposition } = arg0);
    c1 = undefined;
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === require);
      c1 = findIndexResult;
      if (-1 === findIndexResult) {
        return false;
      } else {
        let found = value;
        if ("steered" === disposition) {
          found = value.filter((in_reply_to, index) => {
            let tmp = index <= c1;
            if (!tmp) {
              tmp = in_reply_to.in_reply_to !== require;
            }
            if (!tmp) {
              tmp = "queued" !== in_reply_to.acknowledges;
            }
            return tmp;
          });
        }
        let arr3 = found;
        if (found[findIndexResult].disposition !== disposition) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(found.slice(0, findIndexResult), 0);
          const obj2 = {};
          const merged = Object.assign(found[findIndexResult]);
          obj2.disposition = disposition;
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(found.slice(findIndexResult + 1), arraySpreadResult + 1);
          arr3 = items;
        }
        let num4 = -1;
        if ("steered" === disposition) {
          let num5 = -1;
          if (null != activeTurnId) {
            let diff = arr3.length - 1;
            num5 = -1;
            if (0 <= diff) {
              while (true) {
                let tmp9 = arr3[diff];
                let tmp10 = tmp9.turn_id === activeTurnId;
                if (!tmp10) {
                  let _HermesInternal = HermesInternal;
                  tmp10 = tmp9.id === "" + c33 + activeTurnId;
                }
                num5 = diff;
                if (tmp10) {
                  break;
                } else {
                  diff = diff - 1;
                  num5 = -1;
                  if (0 > diff) {
                    break;
                  }
                }
              }
            }
          }
          num4 = num5;
        }
        let tmp13 = num4;
        let arr5 = arr3;
        if ("steered" === disposition) {
          tmp13 = num4;
          arr5 = arr3;
          if (-1 === num4) {
            tmp13 = num4;
            arr5 = arr3;
            if (null != activeTurnId) {
              const tmp39 = resolveTurnIndex(arr3, activeTurnId);
              tmp13 = num4;
              arr5 = arr3;
              if (-1 !== tmp39) {
                tmp13 = num4;
                arr5 = arr3;
                if (tmp39 < findIndexResult) {
                  const obj3 = {};
                  const merged1 = Object.assign(arr3[tmp39]);
                  obj3.turn_id = activeTurnId;
                  if (0 === obj3.steps.length) {
                    const items1 = [];
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(arr3.slice(tmp39 + 1, findIndexResult + 1), HermesBuiltin.arraySpread(arr3.slice(0, tmp39), 0));
                    items1[arraySpreadResult12] = obj3;
                    HermesBuiltin.arraySpread(arr3.slice(findIndexResult + 1), arraySpreadResult12 + 1);
                    const result = map.set(projectId, items1);
                    recordThinkingTransition(projectId);
                    const arraySpreadResult11 = HermesBuiltin.arraySpread(arr3.slice(0, tmp39), 0);
                  } else {
                    const items2 = [];
                    const arraySpreadResult14 = HermesBuiltin.arraySpread(arr3.slice(0, tmp39), 0);
                    items2[arraySpreadResult14] = obj3;
                    HermesBuiltin.arraySpread(arr3.slice(tmp39 + 1), arraySpreadResult14 + 1);
                    tmp13 = tmp39;
                    arr5 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp13) {
          if (tmp13 <= findIndexResult) {
            const items3 = [, ];
            const arraySpreadResult16 = HermesBuiltin.arraySpread(arr5.slice(0, tmp13), 0);
            const obj4 = {};
            const merged2 = Object.assign(arr5[tmp13]);
            obj4.continued = true;
            let finished_at = arr5[tmp13].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            obj4.finished_at = finished_at;
            items3[arraySpreadResult16] = obj4;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(arr5.slice(tmp13 + 1, findIndexResult + 1), arraySpreadResult16 + 1);
            const obj5 = { turnId: activeTurnId };
            items3[arraySpreadResult17] = newMessage("assistant", "", obj5);
            HermesBuiltin.arraySpread(arr5.slice(findIndexResult + 1), arraySpreadResult17 + 1);
            const result1 = map.set(projectId, items3);
            recordThinkingTransition(projectId);
          }
        }
        if (arr5 !== value) {
          const result2 = map.set(projectId, arr5);
        }
        return arr5 !== value;
      }
    }
  },
  CONJURE_CHAT_MESSAGE_CANCELLED: function handleChatMessageCancelled(arg0) {
    ({ projectId, id: require } = arg0);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const found = value.filter((id) => id.id !== require && id.in_reply_to !== tmp);
      if (found.length === value.length) {
        return false;
      } else {
        const result = map.set(projectId, found);
      }
    }
  },
  CONJURE_CHAT_MESSAGE_REACTION: function handleChatMessageReaction(arg0) {
    ({ projectId, id: require, emoji } = arg0);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((role) => {
        let tmp = "user" === role.role;
        if (tmp) {
          tmp = role.id === require;
        }
        return tmp;
      });
      if (-1 !== findIndexResult) {
        if (value[findIndexResult].agentReaction !== emoji) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
          const obj2 = {};
          const merged = Object.assign(value[findIndexResult]);
          obj2.agentReaction = emoji;
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), arraySpreadResult + 1);
          const result = map.set(projectId, items);
        }
      }
      return false;
    }
  },
  CONJURE_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
    ({ projectId, id } = inReplyTo);
    inReplyTo = inReplyTo.inReplyTo;
    ({ content, timestamp } = inReplyTo);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id };
      const tmp2 = newMessage("assistant", content, obj2);
      tmp2.kind = "side_reply";
      tmp2.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        const disposition = value[findIndexResult].disposition;
        if (null != disposition) {
          tmp2.acknowledges = disposition;
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult + 1), 0);
        items[arraySpreadResult] = tmp2;
        HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), arraySpreadResult + 1);
        const result = map.set(projectId, items);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(value, 0)] = tmp2;
        const result1 = map.set(projectId, items1);
      }
    }
  },
  CONJURE_CHAT_PUBLISH_NOTICE: function handleChatPublishNotice(arg0) {
    ({ projectId, id } = arg0);
    ({ content, timestamp, publishNotice } = arg0);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id };
      const tmp2 = newMessage("assistant", content, obj2);
      tmp2.kind = "publish_notice";
      tmp2.publishNotice = publishNotice;
      tmp2.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(value, 0)] = tmp2;
      const result = map.set(projectId, items);
    }
  },
  CONJURE_CHAT_PROJECT_EVENT: function handleChatProjectEvent(arg0) {
    ({ projectId, event } = arg0);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === event.id)) {
      return false;
    } else {
      ({ ts: obj3.ts, id: obj3.id } = event);
      const tmp2 = newMessage("assistant", "", { ts: null, id: null });
      tmp2.kind = "project_event";
      tmp2.projectEvent = event;
      tmp2.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(value, 0)] = tmp2;
      const result = map.set(projectId, items);
      const obj2 = { ts: null, id: null };
    }
  },
  CONJURE_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    ({ projectId, step } = turnId);
    turnId = turnId.turnId;
    if ("preview_ready" === step.kind) {
      if (null == turnId) {
        if (!hasOpenTurn(map.get(projectId))) {
          return false;
        }
      }
    }
    value = map.get(projectId);
    patchTurn(projectId, turnId, (steps) => {
      steps = steps.steps;
      const tmp2 = (function indexTimeline(steps) {
        value = closure_1_44.get(steps);
        if (null != value) {
          return value;
        } else {
          const _Set = Set;
          set = new Set();
          let num = -1;
          const entries = steps.entries();
          const tmp23 = entries[Symbol.iterator]();
          while (tmp23 !== undefined) {
            let tmp6 = closure_1_6(tmp3, 2);
            let tmp7 = tmp6[1];
            let tmp8 = tmp7;
            if (null != tmp7.turn_seq) {
              let addResult = set.add(tmp8.turn_seq);
            }
            let tmp12 = -1 === num;
            if (tmp12) {
              tmp12 = "todos" === tmp8.kind;
            }
            if (tmp12) {
              tmp12 = null == tmp8.task_id;
            }
            if (tmp12) {
              num = tmp6[0];
            }
            continue;
          }
          const obj = { seenSeq: set, todosAt: num };
          const result = closure_1_44.set(steps, obj);
          return obj;
        }
      })(steps);
      if (null == step.turn_seq) {
        const substr = steps.slice();
        weakMap1.delete(steps);
        pushStep(substr, tmp2, step);
        let result = weakMap1.set(substr, tmp2);
        let hasItem = weakMap.get(steps);
        if (null == hasItem) {
          const someResult = steps.some((kind) => set.has(kind.kind));
          const result1 = weakMap.set(steps, someResult);
          hasItem = someResult;
        }
        if (!hasItem) {
          hasItem = set.has(step.kind);
        }
        const result2 = weakMap.set(substr, hasItem);
        let tmp3 = substr;
      } else {
        const seenSeq = tmp2.seenSeq;
        tmp3 = steps;
      }
      let tmp15 = steps;
      if (tmp3 !== steps.steps) {
        const obj2 = {};
        const merged = Object.assign(steps);
        obj2.steps = tmp3;
        tmp15 = obj2;
      }
      return tmp15;
    });
    if (map.get(projectId) === value) {
      return false;
    } else {
      recordThinkingTransition(projectId);
    }
  },
  CONJURE_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
    ({ projectId, summary: require } = turnId);
    value = map.get(projectId);
    let someResult = null != value;
    if (someResult) {
      someResult = value.some((disposition) => null != disposition.disposition);
    }
    if (someResult) {
      const result = map.set(projectId, value.map((disposition) => {
        if (null == disposition.disposition) {
          return disposition;
        } else {
          disposition = disposition.disposition;
          return _objectWithoutProperties(disposition, closure_1_3);
        }
      }));
    }
    patchTurn(projectId, turnId.turnId, (content) => {
      const obj = {};
      const merged = Object.assign(content);
      obj.finished = true;
      obj.finished_at = Date.now();
      obj.provisionalTodo = undefined;
      if ("" !== content.content) {
        let str = content.content;
      } else {
        str = require;
        if (require == null) {
          str = "";
        }
      }
      obj.content = str;
      return obj;
    });
    if (!hasOpenTurn(map.get(projectId))) {
      map4.delete(projectId);
      set1.delete(projectId);
    }
    set2.delete(projectId);
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const tmp3 = newMessage("assistant", "");
      tmp3.finished = true;
      const _Date = Date;
      tmp3.finished_at = Date.now();
      tmp3.interrupted = true;
      const items = [];
      items[HermesBuiltin.arraySpread(value, 0)] = tmp3;
      const result = map.set(projectId, items);
    }
  },
  CONJURE_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    let tmp = null != value;
    if (tmp) {
      const someResult = value.some(stoppable);
      if (someResult) {
        const result = map.set(projectId, value.map((item) => {
          let tmp = item;
          if (stoppable(item)) {
            const obj = {};
            const merged = Object.assign(item);
            obj.stopRequested = true;
            tmp = obj;
          }
          return tmp;
        }));
      }
      tmp = someResult;
    }
    return tmp;
  },
  CONJURE_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(text) {
    ({ projectId, turnId } = text);
    value = map.get(projectId);
    let flag = false;
    if (null != value) {
      let num2 = -1;
      if (null != turnId) {
        let diff = value.length - 1;
        num2 = -1;
        if (0 <= diff) {
          while (true) {
            let tmp3 = value[diff];
            let tmp4 = tmp3.turn_id === turnId;
            if (!tmp4) {
              let _HermesInternal = HermesInternal;
              tmp4 = tmp3.id === "" + c33 + turnId;
            }
            num2 = diff;
            if (tmp4) {
              break;
            } else {
              diff = diff - 1;
              num2 = -1;
              if (0 > diff) {
                break;
              }
            }
          }
        }
      }
      let flag2 = -1 !== num2;
      if (-1 !== num2) {
        const obj = {};
        const merged = Object.assign(value[num2]);
        obj.provisionalTodo = text.text;
        const substr = value.slice();
        substr[num2] = obj;
        const result = map.set(projectId, substr);
        flag2 = true;
      }
      flag = flag2;
    }
    return flag ? undefined : false;
  },
  CONJURE_CHAT_SOURCE_CHECKPOINT: function handleChatSourceCheckpoint(arg0) {
    ({ projectId, turnId: require, sourceSha: importDefault } = arg0);
    value = map.get(projectId);
    c2 = value;
    if (null == value) {
      return false;
    } else {
      const mapped = value.map((role) => {
        let tmp = role;
        if ("assistant" === role.role) {
          tmp = role;
          if (role.sourceSha !== importDefault) {
            let tmp4 = role.turn_id === require;
            if (!tmp4) {
              const _HermesInternal = HermesInternal;
              tmp4 = role.id === "" + c33 + tmp3;
            }
            let tmp7 = role;
            if (tmp4) {
              const obj = {};
              const merged = Object.assign(role);
              obj.sourceSha = tmp2;
              tmp7 = obj;
            }
            tmp = tmp7;
          }
        }
        return tmp;
      });
      if (mapped.every((item, index) => item === _undefined[index])) {
        return false;
      } else {
        const result = map.set(projectId, mapped);
      }
    }
  },
  CONJURE_CHAT_THINKING_SET: function handleChatThinkingSet(arg0) {
    ({ projectId, activity } = arg0);
    if (null == activity) {
      return map4.delete(projectId) && undefined;
    } else {
      value = map4.get(projectId);
      if (null != value) {
        if (activity.session === value.session) {
          if (activity.seq <= value.seq) {
            return false;
          }
        }
      }
      const result = map4.set(projectId, activity);
    }
  },
  CONJURE_CHAT_COMPACTING_SET: function handleChatCompactingSet(arg0) {
    ({ projectId, compacting } = arg0);
    if (compacting === set1.has(projectId)) {
      return false;
    } else if (compacting) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_CHAT_SAVING_SET: function handleChatSavingSet(arg0) {
    ({ projectId, saving } = arg0);
    if (saving === set2.has(projectId)) {
      return false;
    } else if (saving) {
      set2.add(projectId);
    } else {
      set2.delete(projectId);
    }
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
  },
  CONJURE_CHAT_SIDEBAR_WIDTH_SET: function handleChatSidebarWidthSet(width) {
    width = width.width;
    if (width === width) {
      return false;
    }
  },
  CONJURE_CHAT_TURN_PATCH: function handleChatTurnPatch(turnId) {
    ({ projectId, patch: require } = turnId);
    patchTurn(projectId, turnId.turnId, (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(require);
      if ("todos" in require) {
        obj.provisionalTodo = undefined;
      }
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const deleteResult = set1.delete(projectId);
    let deleteResult2 = map4.delete(projectId);
    value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          let tmp2 = true === role.finished || true === role.continued;
          if (!tmp2) {
            tmp2 = "" !== role.content;
          }
          if (!tmp2) {
            tmp2 = null != role.proposal;
          }
          if (!tmp2) {
            tmp2 = null != role.clarification;
          }
          if (!tmp2) {
            tmp2 = null != role.intake;
          }
          if (!tmp2) {
            const steps = role.steps;
            value = weakMap.get(steps);
            if (null == value) {
              const someResult = steps.some((kind) => set.has(kind.kind));
              const result = weakMap.set(steps, someResult);
              value = someResult;
            }
            tmp2 = value;
          }
          tmp = !tmp2;
        }
        return tmp;
      })) {
        let result = map.set(projectId, value.map((disposition) => {
          if (null != disposition.disposition) {
            disposition = disposition.disposition;
            return _objectWithoutProperties(disposition, closure_1_4);
          } else {
            let tmp5 = disposition;
            if ("assistant" === disposition.role) {
              let tmp = true === disposition.finished || true === disposition.continued;
              if (!tmp) {
                tmp = "" !== disposition.content;
              }
              if (!tmp) {
                tmp = null != disposition.proposal;
              }
              if (!tmp) {
                tmp = null != disposition.clarification;
              }
              if (!tmp) {
                tmp = null != disposition.intake;
              }
              if (!tmp) {
                const steps = disposition.steps;
                value = weakMap.get(steps);
                if (null == value) {
                  const someResult = steps.some((kind) => set.has(kind.kind));
                  const result = weakMap.set(steps, someResult);
                  value = someResult;
                }
                tmp = value;
              }
              tmp5 = disposition;
              if (!tmp) {
                const obj2 = {};
                const merged = Object.assign(disposition);
                obj2.provisionalTodo = undefined;
                const items = [];
                const obj3 = { type: "step", kind: "terminal_error", message: null };
                const intl = util.intl;
                obj3.message = intl.string(_modDef3827.lmiuFX);
                items[HermesBuiltin.arraySpread(disposition.steps, 0)] = obj3;
                obj2.steps = items;
                tmp5 = obj2;
                const arraySpreadResult = HermesBuiltin.arraySpread(disposition.steps, 0);
              }
            }
            return tmp5;
          }
        }));
        recordThinkingTransition(projectId);
      }
    }
    if (!deleteResult2) {
      deleteResult2 = deleteResult;
    }
    if (!deleteResult2) {
      deleteResult2 = deleteResult1;
    }
    return deleteResult2 && undefined;
  },
  CONJURE_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    if (map6.has(project.id)) {
      return false;
    } else {
      const result = map6.set(project.id, null);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map6.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    let flag = false;
    const iter = new Set(items)[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == ConjureProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = purgeProject(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  CONJURE_TURN_SETTLED: function handleConjureTurnSettled(projectId) {
    notifyTurn(projectId.projectId, projectId.guildId, projectId.title, projectId.body, projectId.nonce);
    return false;
  },
  CONJURE_TURN_NOTIFICATION: function handleConjureTurnNotification(arg0) {
    ({ projectId, body, nonce } = arg0);
    const project = ConjureProjectStore.getProject(projectId);
    if (null != project) {
      let guild_id = project.guild_id;
      if (guild_id == null) {
        guild_id = project.preview_guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      notifyTurn(projectId, guild_id, project.name, body, nonce);
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatStore.tsx");

export default conjureChatStore;
export const turnSettled = function turnSettled(message) {
  let tmp = true === message.finished || true === message.continued;
  if (!tmp) {
    tmp = "" !== message.content;
  }
  if (!tmp) {
    tmp = null != message.proposal;
  }
  if (!tmp) {
    tmp = null != message.clarification;
  }
  if (!tmp) {
    tmp = null != message.intake;
  }
  if (!tmp) {
    const steps = message.steps;
    value = weakMap.get(steps);
    if (null == value) {
      const someResult = steps.some((kind) => set.has(kind.kind));
      const result = weakMap.set(steps, someResult);
      value = someResult;
    }
    tmp = value;
  }
  return tmp;
};
export const isStrandedSegment = function isStrandedSegment(arg0, arg1) {
  if (arg0[arg1] != null) {
    const turn_id = tmp.turn_id;
  }
  if (null != arg0[arg1]) {
    if ("assistant" === tmp.role) {
      if (null != turn_id) {
        if ("" === tmp.content) {
          let tmp2 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
          if (!tmp2) {
            const steps = tmp.steps;
            value = weakMap.get(steps);
            if (null == value) {
              const someResult = steps.some((kind) => set.has(kind.kind));
              const result = weakMap.set(steps, someResult);
              value = someResult;
            }
            tmp2 = value;
          }
          if (!tmp2) {
            let diff = arg1 - 1;
            if (0 <= diff) {
              while ("user" !== arg0[diff].role) {
                let tmp11 = tmp8.turn_id === turn_id;
                if (!tmp11) {
                  let _HermesInternal = HermesInternal;
                  tmp11 = tmp8.id === "" + c33 + turn_id;
                }
                if (tmp11) {
                  let tmp12 = true === tmp8.finished || true === tmp8.continued || "" !== tmp8.content || null != tmp8.proposal || null != tmp8.clarification || null != tmp8.intake;
                  if (!tmp12) {
                    let steps2 = tmp8.steps;
                    value2 = weakMap.get(steps2);
                    if (null == value2) {
                      let someResult1 = steps2.some((kind) => set.has(kind.kind));
                      let result1 = weakMap.set(steps2, someResult1);
                      value2 = someResult1;
                    }
                    tmp12 = value2;
                  }
                  return tmp12;
                } else {
                  diff = diff - 1;
                }
              }
              return false;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
};
export const getOlderHistoryCursor = function getOlderHistoryCursor(arg0) {
  value = map6.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const recordStep = function recordStep(arr, turn_seq) {
  const tmp = (function indexTimeline(steps) {
    value = closure_1_44.get(steps);
    if (null != value) {
      return value;
    } else {
      const _Set = Set;
      set = new Set();
      let num = -1;
      const entries = steps.entries();
      const tmp23 = entries[Symbol.iterator]();
      while (tmp23 !== undefined) {
        let tmp6 = closure_1_6(tmp3, 2);
        let tmp7 = tmp6[1];
        let tmp8 = tmp7;
        if (null != tmp7.turn_seq) {
          let addResult = set.add(tmp8.turn_seq);
        }
        let tmp12 = -1 === num;
        if (tmp12) {
          tmp12 = "todos" === tmp8.kind;
        }
        if (tmp12) {
          tmp12 = null == tmp8.task_id;
        }
        if (tmp12) {
          num = tmp6[0];
        }
        continue;
      }
      const obj = { seenSeq: set, todosAt: num };
      const result = closure_1_44.set(steps, obj);
      return obj;
    }
  })(arr);
  if (null != turn_seq.turn_seq) {
    const seenSeq = tmp.seenSeq;
    if (seenSeq.has(turn_seq.turn_seq)) {
      return arr;
    }
  }
  const substr = arr.slice();
  weakMap1.delete(arr);
  pushStep(substr, tmp, turn_seq);
  const result = weakMap1.set(substr, tmp);
  let hasItem = weakMap.get(arr);
  if (null == hasItem) {
    const someResult = arr.some((kind) => set.has(kind.kind));
    const result1 = weakMap.set(arr, someResult);
    hasItem = someResult;
  }
  if (!hasItem) {
    hasItem = set.has(turn_seq.kind);
  }
  const result2 = weakMap.set(substr, hasItem);
  return substr;
};
export { replayTimeline };