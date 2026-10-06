// === Module 12924: ConjureChatStore ===

// Module 12924 (ConjureChatStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ConjureUtils from "ConjureUtils" /* 6756 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 8737 */;
import SoundUtils from "SoundUtils" /* 9575 */;
import conjureProjectMute from "conjureProjectMute" /* 12925 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12481 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import Constants from "Constants" /* 1085 */;
import size_mod from "module_2" /* 2 */;

let closure_15;
let closure_16;
function newMessage(assistant, content, arg2) {
  let id;
  let obj4;
  let obj6;
  let parsed;
  let ts;
  let turnId;
  let userId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  const attachments = obj.attachments;
  if (id == null) {
    const sum = c30 + 1;
    c30 = sum;
    id = `m${tmp2}`;
  }
  const obj2 = { id, render_id: id, role: assistant, content, steps: [], created_at: parsed, attachments };
  if (null != userId) {
    obj4 = { user_id: userId };
    const obj3 = { user_id: userId };
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  if (null != turnId) {
    obj6 = { turn_id: turnId };
    const obj5 = { turn_id: turnId };
  } else {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  if (null != ts) {
    const _Date2 = Date;
    parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  return obj2;
}
function newMessageFromHistory(ts) {
  function snowflakeTimeOf(id) {
    let startsWithResult;
    if (id != null) {
      startsWithResult = id.startsWith(closure_1_32);
    }
    let substr = id;
    if (true === startsWithResult) {
      substr = id.slice(5);
    }
    if (null != substr) {
      const obj = /^\d+$/;
      if (obj.test(substr)) {
        const obj2 = SnowflakeUtilsDefault;
        const extractTimestampResult = obj2.extractTimestamp(substr);
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
    }
    return null;
  }
  let obj = { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments };
  const tmp = newMessage(ts.role, ts.content, obj);
  const tmp2 = snowflakeTimeOf(ts.id);
  let tmp3 = null == tmp2;
  if (!tmp3) {
    tmp3 = "assistant" !== ts.role && null != ts.ts;
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
  const tmp7 = null != ts.ideas && ts.ideas.length > 0;
  if (tmp7) {
    tmp.ideas = ts.ideas;
  }
  if (null != ts.publish_cta) {
    tmp.publishCta = ts.publish_cta;
  }
  if (null != ts.publish_notice) {
    tmp.publishNotice = ts.publish_notice;
  }
  let tmp8 = null != ts.clarification && ts.clarification.questions.length > 0;
  if (tmp8) {
    tmp.clarification = ts.clarification;
  }
  if (null != ts.restore_proposal) {
    tmp.restoreProposal = ts.restore_proposal;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  const tmp9 = null == ts.steps && null == ts.events && null != ts.todos && ts.todos.length > 0;
  if (tmp9) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    tmp.steps = replayTimeline(ts.steps);
  } else if (null != ts.events) {
    const events = ts.events;
    tmp.steps = events.flatMap((type) => {
      let items1;
      if ("todos" === type.type) {
        const items = [{ type: "step", kind: "todos", items: type.items }];
        items1 = items;
        const obj = { type: "step", kind: "todos", items: type.items };
      } else {
        items1 = [];
      }
      return items1;
    });
  }
  const tmp11 = null != ts.secret_request && ts.secret_request.fields.length > 0;
  if (tmp11) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  const tmp12 = null != ts.intake && ts.intake.questions.length > 0;
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
      let obj2 = { action: tmp14.action };
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
          tmp4 = tmp3.id === "" + c32 + activeTurnId;
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
          let someResult = true === tmp7.finished || true === tmp7.continued || "" !== tmp7.content || null != tmp7.proposal || null != tmp7.clarification || null != tmp7.intake;
          if (!someResult) {
            let steps = tmp7.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          if (!someResult) {
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
  const value = map.get(projectId);
  if (null != value) {
    const tmp24 = resolveTurnIndex(value, turnId);
    if (-1 !== tmp24) {
      let tmp9 = tmp8;
      if (null != turnId) {
        tmp9 = tmp8;
        if (null == value[tmp24].turn_id) {
          let tmp10 = tmp8.turn_id === turnId;
          if (!tmp10) {
            const _HermesInternal = HermesInternal;
            tmp10 = tmp8.id === "" + c32 + turnId;
          }
          tmp9 = tmp8;
          if (!tmp10) {
            const obj2 = { turn_id: turnId };
            const merged = Object.assign(tmp8);
            tmp9 = obj2;
          }
        }
      }
      const items = [];
      set2 = map.set;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, tmp24), 0);
      items[arraySpreadResult] = fn(tmp9);
      HermesBuiltin.arraySpread(items, value.slice(tmp24 + 1), arraySpreadResult + 1);
      set2(projectId, items);
    } else {
      let obj;
      const items1 = [];
      set = map.set;
      const arraySpreadResult4 = HermesBuiltin.arraySpread(items1, value, 0);
      if (null != turnId) {
        obj = { turnId };
        const obj3 = { turnId };
      } else {
        obj = {};
      }
      items1[arraySpreadResult4] = fn(newMessage("assistant", "", obj));
      const result = set(projectId, items1);
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
          let tmp5 = "side_reply" === tmp.kind || "publish_notice" === tmp.kind;
          tmp4 = flag2;
          if (!tmp5) {
            let flag = flag2;
            if (!flag) {
              let someResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!someResult) {
                let steps = tmp.steps;
                someResult = steps.some((kind) => set.has(kind.kind));
              }
              flag = true;
              if (!someResult) {
                break;
              }
            }
            tmp4 = flag;
            if (null != tmp.turn_id) {
              let someResult1 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
              if (!someResult1) {
                let steps2 = tmp.steps;
                someResult1 = steps2.some((kind) => set.has(kind.kind));
              }
              tmp4 = flag;
              if (!someResult1) {
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
  let CHANNELResult;
  let tmp25;
  if (null != nonce) {
    let num = map5.get(projectId);
    if (num == null) {
      num = 0;
    }
    if (nonce > num) {
      const result = map5.set(projectId, nonce);
    }
  }
  const obj2 = ConjurePlatformUtilsDefault;
  let result2 = obj2.areTurnNotificationsDisabled() || SelfPresenceStore.getStatus() === constants.DND;
  if (!result2) {
    const FocusMode = UserSettings.FocusMode;
    result2 = FocusMode.getSetting();
  }
  if (!result2) {
    result2 = FamilyCenterStore.isCurrentUserInRestrictedHours();
  }
  if (!result2) {
    const obj3 = conjureProjectMute;
    if (!obj3.isConjureProjectMuted(UserSettingsProtoStore.settings, projectId)) {
      const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled("message1");
      guildId = SelectedGuildStore.getGuildId();
      if (null != guildId) {
        if (ConjureProjectStore.getSelectedProjectId(guildId) === projectId) {
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            const tmpResult = ConjurePlatformUtilsDefault;
            if (tmpResult.isWindowFocused()) {
              if (!isSoundDisabledResult) {
                const tmp8Result = SoundUtils;
                tmp8Result.playSound(bit_message1, 0.4);
              }
            }
          }
        }
      }
      let conjureWorkspaceGuildId = guildId;
      if (guildId == null) {
        const tmp8Result2 = ConjureUtils;
        conjureWorkspaceGuildId = tmp8Result2.resolveConjureWorkspaceGuildId("VibegrationsChatStore");
      }
      const obj4 = { projectId, guildId: conjureWorkspaceGuildId, title, body, route: CHANNELResult, sound: tmp25, volume: 0.4 };
      CHANNELResult = null;
      const presentTurnNotification = ConjurePlatformUtilsDefault.presentTurnNotification;
      ConjurePlatformUtilsDefault;
      if (null != conjureWorkspaceGuildId) {
        CHANNELResult = closure_15.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
      }
      tmp25 = undefined;
      if (!isSoundDisabledResult) {
        tmp25 = bit_message1;
      }
      const result1 = presentTurnNotification(obj4);
    }
  }
}
function recordThinkingTransition(projectId) {
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  const tmp2 = hasOpenTurn(map.get(projectId));
  if (flag !== tmp2) {
    const result = map2.set(projectId, tmp2);
    const index = closure_23.indexOf(projectId);
    if (-1 !== index) {
      closure_23.splice(index, 1);
    }
    closure_23.unshift(projectId);
    if (tmp2) {
      map1.delete(projectId);
    } else {
      const value = map.get(projectId);
      let tmp5 = null;
      if (null != value) {
        let diff = value.length - 1;
        tmp5 = null;
        if (0 <= diff) {
          while (true) {
            if ("assistant" === value[diff].role) {
              let tmp8 = value[diff];
              let tmp9 = "side_reply" === tmp8.kind || "publish_notice" === tmp8.kind;
              if (!tmp9) {
                break;
              }
            }
            diff = diff - 1;
            tmp5 = null;
          }
          tmp5 = value[diff];
        }
      }
      let tmp10 = null != tmp5;
      if (tmp10) {
        const str4 = tmp5.content;
        let someResult = "" !== str4.trim() || null != tmp5.proposal || null != tmp5.clarification || null != tmp5.intake;
        if (!someResult) {
          const steps = tmp5.steps;
          someResult = steps.some((kind) => {
            const hasItem = set.has(kind.kind) && "terminal_error" !== kind.kind;
            return hasItem;
          });
        }
        tmp10 = someResult;
      }
      if (tmp10) {
        const _Date = Date;
        const result1 = map1.set(projectId, Date.now());
      } else {
        map1.delete(projectId);
      }
      const value2 = map.get(projectId);
      if (null != value2) {
        let diff1 = value2.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value2[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value2[diff1].finished_at) {
            let someResult1 = true === tmp16.finished || true === tmp16.continued || "" !== tmp16.content || null != tmp16.proposal || null != tmp16.clarification || null != tmp16.intake;
            if (!someResult1) {
              const steps2 = tmp16.steps;
              someResult1 = steps2.some((kind) => set.has(kind.kind));
            }
            if (someResult1) {
              set = map.set;
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, value2.slice(0, diff1), 0);
              const obj4 = { finished_at: Date.now() };
              const merged = Object.assign(tmp16);
              const _Date2 = Date;
              items[arraySpreadResult] = obj4;
              HermesBuiltin.arraySpread(items, value2.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = set(projectId, items);
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
  const deleteResult2 = set2.delete(projectId);
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
    deleteResult = tmp10;
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
        let tmp5 = "reaction" === item10022.kind && null != item10022.message_id && null != item10022.emoji && "" !== item10022.emoji;
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
      let value;
      if ("user" === role.role) {
        if (null != role.id) {
          value = map.get(role.id);
        }
      }
      let tmp4 = role;
      if (null != value) {
        tmp4 = role;
        if (role.agentReaction !== value) {
          const obj = { agentReaction: value };
          const merged = Object.assign(role);
          tmp4 = obj;
        }
      }
      return tmp4;
    });
  }
  return mapped;
}
function openTimeline() {
  let first;
  let items1;
  let tmp7;
  let items = steps;
  if (steps === undefined) {
    items = [];
  }
  set = new Set();
  let num = -1;
  const entries = items.entries();
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    [first, tmp7] = tmp3;
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
      num = first;
    }
    continue;
  }
  const obj = { steps: items1, seenSeq: set, todosAt: num };
  items1 = [...items];
  return obj;
}
function pushStep(todosAt, step) {
  if (null == step.turn_seq) {
    if ("todos" === step.kind) {
      if (null == step.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = todosAt.steps.length;
          const steps = todosAt.steps;
          steps.push(step);
          if (null != step.turn_seq) {
            const seenSeq4 = todosAt.seenSeq;
            seenSeq4.add(step.turn_seq);
          }
        } else {
          if (null != todosAt.steps[todosAt.todosAt].turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.delete(todosAt.steps[todosAt.todosAt].turn_seq);
          }
          todosAt.steps[todosAt.todosAt] = step;
          if (null != step.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(step.turn_seq);
          }
        }
      }
    }
    const steps1 = todosAt.steps;
    steps1.push(step);
    if (null != step.turn_seq) {
      const seenSeq5 = todosAt.seenSeq;
      seenSeq5.add(step.turn_seq);
    }
  } else {
    const seenSeq = todosAt.seenSeq;
  }
}
function replayTimeline(steps) {
  const tmp = openTimeline();
  const tmp2 = steps[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(tmp, tmp3);
    continue;
  }
  return tmp.steps;
}
function stoppable(role) {
  let tmp = "assistant" === role.role;
  if (tmp) {
    tmp = !("side_reply" === role.kind || "publish_notice" === role.kind);
    const tmp2 = "side_reply" === role.kind || "publish_notice" === role.kind;
  }
  if (tmp) {
    let someResult = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
    if (!someResult) {
      const steps = role.steps;
      someResult = steps.some((kind) => set.has(kind.kind));
    }
    tmp = !someResult;
  }
  if (tmp) {
    tmp = true !== role.stopRequested;
  }
  return tmp;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
let closure_5 = ["disposition"];
({ Routes: closure_15, StatusTypes: closure_16 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_23 = [];
const map3 = new Map();
const map4 = new Map();
let set1 = new Set();
const map5 = new Map();
let width = 0;
let closure_29 = [];
let c30 = 0;
let c32 = "turn:";
const Store = get_initializedDefault.Store;
class ConjureChatStore extends Store {
  initialize() {
    this.waitFor(FamilyCenterStore, NotificationSettingsStore, SelectedChannelStore, SelectedGuildStore, SelfPresenceStore, UserSettingsProtoStore, ConjureProjectStore);
  }
  getMessages(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = closure_29;
    }
    return value;
  }
  hasPendingSettingsRequest(arg0) {
    const messages = this.getMessages(arg0);
    return null != tmp && "assistant" === tmp.role && null != tmp.settingsRequest;
  }
  isThinking(projectId) {
    return hasOpenTurn(map.get(projectId));
  }
  hasLoadedHistory(projectId) {
    return map6.has(projectId);
  }
  isHistoryUnavailable(projectId) {
    return set2.has(projectId);
  }
  getFinishedAt(id) {
    let tmp = null;
    if (!hasOpenTurn(map.get(id))) {
      let value = map1.get(id);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getProjectUsage(projectId) {
    let value = map3.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getThinkingActivity(projectId) {
    let value = map4.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isCompacting(projectId) {
    return set1.has(projectId);
  }
  getSidebarWidth() {
    return width;
  }
  getActivityOrderedProjectIds() {
    return closure_23.slice();
  }
  isAnyThinking() {
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
  }
}
const prototype = ConjureChatStore.prototype;
const map6 = new Map();
let set2 = new Set();
let obj = {
  LOGOUT: function handleLogout() {
    map5.clear();
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === map6.size) {
                  if (0 === set2.size) {
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
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set1.clear();
    map6.clear();
    set2.clear();
    closure_23.length = 0;
    width = 0;
  },
  CONJURE_CHAT_HISTORY_SET: function handleChatHistorySet(degraded) {
    let cursor;
    let entries;
    let projectId;
    ({ projectId, entries, cursor } = degraded);
    set1 = undefined;
    degraded = degraded.degraded;
    set = map6.set;
    if (cursor == null) {
      cursor = null;
    }
    const result = set(projectId, cursor);
    if (true === degraded) {
      set2.add(projectId);
    } else {
      set2.delete(projectId);
    }
    map4.delete(projectId);
    set1.delete(projectId);
    set1 = new Set();
    const found = entries.filter((id) => {
      let tmp = null == id.id;
      if (!tmp) {
        const hasItem = set1.has(id.id);
        let flag = !hasItem;
        if (flag) {
          set1.add(id.id);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    });
    const result1 = map.set(projectId, applyAgentReactions(found.map(newMessageFromHistory)));
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    let entries;
    let projectId;
    ({ projectId, entries } = cursor);
    set1 = undefined;
    const result = map6.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items1 = map.get(projectId);
      if (items1 == null) {
        items1 = [];
      }
      const mapped = entries.map(newMessageFromHistory);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set1 = new Set(items1.flatMap((id) => {
        let items;
        if (null == id.id) {
          items = [];
        } else {
          items = [id.id];
        }
        return items;
      }));
      let items = [];
      set = map.set;
      HermesBuiltin.arraySpread(items, items1, HermesBuiltin.arraySpread(items, mapped.filter((id) => {
        const tmp = null == id.id || !set1.has(id.id);
        return tmp;
      }), 0));
      const result1 = set(projectId, applyAgentReactions(items));
    }
  },
  CONJURE_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
    let attachments;
    let content;
    let id;
    let projectId;
    let timestamp;
    let userId;
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
      const tmp3 = newMessage("user", content, obj2);
      let num3 = -1;
      if (null != optimisticId) {
        num3 = items2.findIndex((id) => id.id === optimisticId);
      }
      if (-1 !== num3) {
        tmp3.render_id = items2[num3].render_id;
        const items = [];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, items2.slice(0, num3), 0);
        items[arraySpreadResult] = tmp3;
        HermesBuiltin.arraySpread(items, items2.slice(num3 + 1), arraySpreadResult + 1);
        const result = set(projectId, items);
        recordThinkingTransition(projectId);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, items2, 0)] = tmp3;
        if (!hasOpenTurn(items1)) {
          items1.push(newMessage("assistant", ""));
        }
        const result1 = map.set(projectId, items1);
        recordThinkingTransition(projectId);
      }
    }
  },
  CONJURE_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    let activeTurnId;
    let closure_129_0;
    let disposition;
    let finished_at;
    let projectId;
    ({ projectId, id: closure_129_0, activeTurnId, disposition } = arg0);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === closure_1_0);
      if (-1 === findIndexResult) {
        return false;
      } else {
        let arr3 = value;
        if (value[findIndexResult].disposition !== disposition) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
          const obj2 = { disposition };
          const merged = Object.assign(value[findIndexResult]);
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), arraySpreadResult + 1);
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
                let tmp11 = arr3[diff];
                let tmp12 = tmp11.turn_id === activeTurnId;
                if (!tmp12) {
                  let _HermesInternal = HermesInternal;
                  tmp12 = tmp11.id === "" + c32 + activeTurnId;
                }
                num5 = diff;
                if (tmp12) {
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
        let tmp15 = num4;
        let arr4 = arr3;
        if ("steered" === disposition) {
          tmp15 = num4;
          arr4 = arr3;
          if (-1 === num4) {
            tmp15 = num4;
            arr4 = arr3;
            if (null != activeTurnId) {
              const tmp40 = resolveTurnIndex(arr3, activeTurnId);
              tmp15 = num4;
              arr4 = arr3;
              if (-1 !== tmp40) {
                tmp15 = num4;
                arr4 = arr3;
                if (tmp40 < findIndexResult) {
                  const obj3 = { turn_id: activeTurnId };
                  const merged1 = Object.assign(arr3[tmp40]);
                  if (0 === obj3.steps.length) {
                    const items1 = [];
                    set = map.set;
                    const arraySpreadResult11 = HermesBuiltin.arraySpread(items1, arr3.slice(0, tmp40), 0);
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(items1, arr3.slice(tmp40 + 1, findIndexResult + 1), arraySpreadResult11);
                    items1[arraySpreadResult12] = obj3;
                    HermesBuiltin.arraySpread(items1, arr3.slice(findIndexResult + 1), arraySpreadResult12 + 1);
                    const result = set(projectId, items1);
                    recordThinkingTransition(projectId);
                  } else {
                    const items2 = [];
                    const arraySpreadResult14 = HermesBuiltin.arraySpread(items2, arr3.slice(0, tmp40), 0);
                    items2[arraySpreadResult14] = obj3;
                    HermesBuiltin.arraySpread(items2, arr3.slice(tmp40 + 1), arraySpreadResult14 + 1);
                    tmp15 = tmp40;
                    arr4 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp15) {
          if (tmp15 <= findIndexResult) {
            const items3 = [, ];
            set2 = map.set;
            const arraySpreadResult16 = HermesBuiltin.arraySpread(items3, arr4.slice(0, tmp15), 0);
            const obj4 = { continued: true, finished_at };
            const merged2 = Object.assign(arr4[tmp15]);
            finished_at = arr4[tmp15].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            items3[arraySpreadResult16] = obj4;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(items3, arr4.slice(tmp15 + 1, findIndexResult + 1), arraySpreadResult16 + 1);
            const obj5 = { turnId: activeTurnId };
            items3[arraySpreadResult17] = newMessage("assistant", "", obj5);
            HermesBuiltin.arraySpread(items3, arr4.slice(findIndexResult + 1), arraySpreadResult17 + 1);
            set2(projectId, items3);
            recordThinkingTransition(projectId);
          }
        }
        if (arr4 !== value) {
          const result1 = map.set(projectId, arr4);
        }
        return arr4 !== value;
      }
    }
  },
  CONJURE_CHAT_MESSAGE_REACTION: function handleChatMessageReaction(arg0) {
    let closure_129_0;
    let emoji;
    let projectId;
    ({ projectId, id: closure_129_0, emoji } = arg0);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((role) => "user" === role.role && role.id === closure_1_0);
      if (-1 !== findIndexResult) {
        if (value[findIndexResult].agentReaction !== emoji) {
          const items = [];
          set = map.set;
          const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
          const obj = { agentReaction: emoji };
          const merged = Object.assign(value[findIndexResult]);
          items[arraySpreadResult] = obj;
          HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), arraySpreadResult + 1);
          const result = set(projectId, items);
        }
      }
      return false;
    }
  },
  CONJURE_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
    let content;
    let id;
    let projectId;
    let timestamp;
    ({ projectId, id } = inReplyTo);
    inReplyTo = inReplyTo.inReplyTo;
    ({ content, timestamp } = inReplyTo);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id };
      const tmp3 = newMessage("assistant", content, obj2);
      tmp3.kind = "side_reply";
      tmp3.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        const disposition = tmp8.disposition;
        const tmp11 = _objectWithoutProperties(value[findIndexResult], closure_3);
        if (null != disposition) {
          tmp3.acknowledges = disposition;
        }
        const items = [, ];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, findIndexResult), 0);
        items[arraySpreadResult] = tmp11;
        const sum = arraySpreadResult + 1;
        items[sum] = tmp3;
        HermesBuiltin.arraySpread(items, value.slice(findIndexResult + 1), sum + 1);
        const result = set(projectId, items);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, value, 0)] = tmp3;
        const result1 = map.set(projectId, items1);
      }
    }
  },
  CONJURE_CHAT_PUBLISH_NOTICE: function handleChatPublishNotice(arg0) {
    let content;
    let id;
    let projectId;
    let publishNotice;
    let timestamp;
    ({ projectId, id } = arg0);
    ({ content, timestamp, publishNotice } = arg0);
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      const obj2 = { ts: timestamp, id };
      const tmp3 = newMessage("assistant", content, obj2);
      tmp3.kind = "publish_notice";
      tmp3.publishNotice = publishNotice;
      tmp3.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = tmp3;
      const result = map.set(projectId, items);
    }
  },
  CONJURE_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    let projectId;
    let step;
    ({ projectId, step } = turnId);
    turnId = turnId.turnId;
    if ("preview_ready" === step.kind) {
      if (null == turnId) {
        if (!hasOpenTurn(map.get(projectId))) {
          return false;
        }
      }
    }
    patchTurn(projectId, turnId, (steps) => {
      let tmp2;
      const obj = { steps: tmp2.steps };
      const merged = Object.assign(steps);
      tmp2 = openTimeline(steps.steps);
      pushStep(tmp2, step);
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
    let projectId;
    ({ projectId, summary: require } = turnId);
    turnId = turnId.turnId;
    const value = map.get(projectId);
    const someResult = null != value && value.some((disposition) => null != disposition.disposition);
    if (someResult) {
      const result = map.set(projectId, value.map((disposition) => {
        if (null == disposition.disposition) {
          return disposition;
        } else {
          disposition = disposition.disposition;
          return _objectWithoutProperties(disposition, closure_1_4);
        }
      }));
    }
    patchTurn(projectId, turnId, (content) => {
      let str;
      const obj = { finished: true, finished_at: Date.now(), provisionalTodo: undefined, content: str };
      const merged = Object.assign(content);
      if ("" !== content.content) {
        str = content.content;
      } else {
        str = require;
        if (require == null) {
          str = "";
        }
      }
      return obj;
    });
    if (!hasOpenTurn(map.get(projectId))) {
      map4.delete(projectId);
      set1.delete(projectId);
    }
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const tmp4 = newMessage("assistant", "");
      tmp4.finished = true;
      const _Date = Date;
      tmp4.finished_at = Date.now();
      tmp4.interrupted = true;
      const items = [];
      items[HermesBuiltin.arraySpread(items, value, 0)] = tmp4;
      const result = map.set(projectId, items);
    }
  },
  CONJURE_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
    projectId = projectId.projectId;
    const value = map.get(projectId);
    let tmp = null != value;
    if (tmp) {
      const someResult = value.some(stoppable);
      if (someResult) {
        const result = map.set(projectId, value.map((item) => {
          let tmp = item;
          if (stoppable(item)) {
            const obj = { stopRequested: true };
            const merged = Object.assign(item);
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
    let projectId;
    let turnId;
    ({ projectId, turnId } = text);
    text = text.text;
    const value = map.get(projectId);
    let flag = false;
    if (null != value) {
      let num2 = -1;
      if (null != turnId) {
        let diff = value.length - 1;
        num2 = -1;
        if (0 <= diff) {
          while (true) {
            let tmp4 = value[diff];
            let tmp5 = tmp4.turn_id === turnId;
            if (!tmp5) {
              let _HermesInternal = HermesInternal;
              tmp5 = tmp4.id === "" + c32 + turnId;
            }
            num2 = diff;
            if (tmp5) {
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
        const items = [];
        set = map.set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, value.slice(0, num2), 0);
        const obj = { provisionalTodo: text };
        const merged = Object.assign(value[num2]);
        items[arraySpreadResult] = obj;
        HermesBuiltin.arraySpread(items, value.slice(num2 + 1), arraySpreadResult + 1);
        const result = set(projectId, items);
        flag2 = true;
      }
      flag = flag2;
    }
    return flag ? undefined : false;
  },
  CONJURE_CHAT_SOURCE_CHECKPOINT: function handleChatSourceCheckpoint(arg0) {
    let _undefined;
    let projectId;
    ({ projectId, turnId: require, sourceSha: importDefault } = arg0);
    const value = map.get(projectId);
    let c2 = value;
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
              tmp4 = role.id === "" + c32 + tmp3;
            }
            let tmp7 = role;
            if (tmp4) {
              const obj = { sourceSha: tmp2 };
              const merged = Object.assign(role);
              tmp7 = obj;
            }
            tmp = tmp7;
          }
        }
        return tmp;
      });
      if (mapped.every((item, index) => item === c2[index])) {
        return false;
      } else {
        const result = map.set(projectId, mapped);
      }
    }
  },
  CONJURE_CHAT_THINKING_SET: function handleChatThinkingSet(arg0) {
    let activity;
    let projectId;
    ({ projectId, activity } = arg0);
    if (null == activity) {
      const tmp4 = map4.delete(projectId) && undefined;
      return tmp4;
    } else {
      const value = map4.get(projectId);
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
    let compacting;
    let projectId;
    ({ projectId, compacting } = arg0);
    if (compacting === set1.has(projectId)) {
      return false;
    } else if (compacting) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
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
    let closure_129_0;
    let projectId;
    ({ projectId, patch: closure_129_0 } = turnId);
    patchTurn(projectId, turnId.turnId, (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(closure_1_0);
      if ("todos" in closure_1_0) {
        obj.provisionalTodo = undefined;
      }
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const deleteResult = set1.delete(projectId);
    const deleteResult1 = map4.delete(projectId);
    const value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          let someResult = true === role.finished || true === role.continued || "" !== role.content || null != role.proposal || null != role.clarification || null != role.intake;
          if (!someResult) {
            const steps = role.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          tmp = !someResult;
        }
        return tmp;
      })) {
        const result = map.set(projectId, value.map((disposition) => {
          let intl;
          let items;
          if (null != disposition.disposition) {
            disposition = disposition.disposition;
            return _objectWithoutProperties(disposition, closure_1_5);
          } else {
            let tmp3 = disposition;
            if ("assistant" === disposition.role) {
              let someResult = true === disposition.finished || true === disposition.continued || "" !== disposition.content || null != disposition.proposal || null != disposition.clarification || null != disposition.intake;
              if (!someResult) {
                const steps = disposition.steps;
                someResult = steps.some((kind) => set.has(kind.kind));
              }
              tmp3 = disposition;
              if (!someResult) {
                const obj = { provisionalTodo: undefined, steps: items };
                const merged = Object.assign(disposition);
                items = [];
                const obj2 = { type: "step", kind: "terminal_error", message: intl.string(_modDef3753.lmiuFX) };
                const arraySpreadResult = HermesBuiltin.arraySpread(items, disposition.steps, 0);
                intl = intl2.intl;
                items[arraySpreadResult] = obj2;
                tmp3 = obj;
              }
            }
            return tmp3;
          }
        }));
        recordThinkingTransition(projectId);
      }
    }
    return !(!deleteResult1 && !deleteResult) && undefined;
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
    set = new Set(items);
    const iter = set[Symbol.iterator]();
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
    let body;
    let nonce;
    let projectId;
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
};
const conjureChatStore = new ConjureChatStore(DispatcherDefault, obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatStore.tsx");

export default conjureChatStore;
export const turnSettled = function turnSettled(finished) {
  let someResult = true === finished.finished || true === finished.continued || "" !== finished.content || null != finished.proposal || null != finished.clarification || null != finished.intake;
  if (!someResult) {
    const steps = finished.steps;
    someResult = steps.some((kind) => set.has(kind.kind));
  }
  return someResult;
};
export const isStrandedSegment = function isStrandedSegment(arg0, arg1) {
  let turn_id;
  if (arg0[arg1] != null) {
    turn_id = tmp.turn_id;
  }
  if (null != arg0[arg1]) {
    if ("assistant" === arg0[arg1].role) {
      if (null != turn_id) {
        if ("" === arg0[arg1].content) {
          let someResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal || null != tmp.clarification || null != tmp.intake;
          if (!someResult) {
            const steps = tmp.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          if (!someResult) {
            let diff = arg1 - 1;
            if (0 <= diff) {
              while ("user" !== arg0[diff].role) {
                let tmp8 = tmp5.turn_id === turn_id;
                if (!tmp8) {
                  let _HermesInternal = HermesInternal;
                  tmp8 = tmp5.id === "" + c32 + turn_id;
                }
                if (tmp8) {
                  let someResult1 = true === tmp5.finished || true === tmp5.continued || "" !== tmp5.content || null != tmp5.proposal || null != tmp5.clarification || null != tmp5.intake;
                  if (!someResult1) {
                    let steps2 = tmp5.steps;
                    someResult1 = steps2.some((kind) => set.has(kind.kind));
                  }
                  return someResult1;
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
export const getOlderHistoryCursor = function getOlderHistoryCursor(projectId) {
  let value = map6.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
export { replayTimeline };