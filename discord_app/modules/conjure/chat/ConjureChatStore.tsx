// discord_app/modules/conjure/chat/ConjureChatStore.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import ConjurePlatformUtilsDefault from "../shared/ConjurePlatformUtils.native.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import FamilyCenterStore from "../../parent_tools/FamilyCenterStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import NotificationSettingsStore from "../../../stores/NotificationSettingsStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
function newMessage(assistant, content, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  if (id == null) {
    const sum = c30 + 1;
    c30 = sum;
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
  const tmp = newMessage(ts.role, ts.content, {
    ts: ts.ts,
    id: ts.id,
    userId: ts.user_id,
    attachments: ts.attachments,
  });
  const tmp2 = (function snowflakeTimeOf(id) {
    let startsWithResult;
    if (id != null) {
      startsWithResult = id.startsWith(closure_1_32);
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
          let someResult =
            true === tmp7.finished ||
            true === tmp7.continued ||
            "" !== tmp7.content ||
            null != tmp7.proposal ||
            null != tmp7.clarification ||
            null != tmp7.intake;
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
  value = map.get(projectId);
  if (null != value) {
    const tmp22 = resolveTurnIndex(value, turnId);
    if (-1 !== tmp22) {
      let tmp7 = tmp6;
      if (null != turnId) {
        tmp7 = tmp6;
        if (null == tmp6.turn_id) {
          let tmp8 = tmp6.turn_id === turnId;
          if (!tmp8) {
            const _HermesInternal = HermesInternal;
            tmp8 = tmp6.id === "" + c32 + turnId;
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
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, tmp22), 0);
      items[arraySpreadResult] = fn(tmp7);
      HermesBuiltin.arraySpread(value.slice(tmp22 + 1), arraySpreadResult + 1);
      const result = map.set(projectId, items);
    } else {
      const items1 = [];
      if (null != turnId) {
        const obj3 = { turnId };
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      items1[HermesBuiltin.arraySpread(value, 0)] = fn(newMessage("assistant", "", obj4));
      const result1 = map.set(projectId, items1);
      const arraySpreadResult4 = HermesBuiltin.arraySpread(value, 0);
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
            if (!flag2) {
              let someResult =
                true === tmp.finished ||
                true === tmp.continued ||
                "" !== tmp.content ||
                null != tmp.proposal ||
                null != tmp.clarification ||
                null != tmp.intake;
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
              let someResult1 =
                true === tmp.finished ||
                true === tmp.continued ||
                "" !== tmp.content ||
                null != tmp.proposal ||
                null != tmp.clarification ||
                null != tmp.intake;
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
        CHANNELResult = closure_1_15.CHANNEL(conjureWorkspaceGuildId, StaticChannelRoute.CONJURE, projectId);
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
              let tmp8 = "side_reply" === tmp7.kind || "publish_notice" === tmp7.kind;
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
        let someResult =
          "" !== tmp4.content.trim() || null != tmp4.proposal || null != tmp4.clarification || null != tmp4.intake;
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
      value2 = map.get(projectId);
      if (null != value2) {
        let diff1 = value2.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value2[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value2[diff1].finished_at) {
            let someResult1 = true === tmp15.finished || true === tmp15.continued;
            if (!someResult1) {
              someResult1 = "" !== tmp15.content;
            }
            if (!someResult1) {
              someResult1 = null != tmp15.proposal;
            }
            if (!someResult1) {
              someResult1 = null != tmp15.clarification;
            }
            if (!someResult1) {
              someResult1 = null != tmp15.intake;
            }
            if (!someResult1) {
              const steps2 = tmp15.steps;
              someResult1 = steps2.some((kind) => set.has(kind.kind));
            }
            if (someResult1) {
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(value2.slice(0, diff1), 0);
              const obj4 = {};
              const merged = Object.assign(tmp15);
              const _Date2 = Date;
              obj4.finished_at = Date.now();
              items[arraySpreadResult] = obj4;
              HermesBuiltin.arraySpread(value2.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = map.set(projectId, items);
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
function openTimeline() {
  let items = steps;
  if (steps === undefined) {
    items = [];
  }
  set = new Set();
  let num = -1;
  const entries = items.entries();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp7 = tmp6;
    if (null != tmp6.turn_seq) {
      let addResult = set.add(tmp7.turn_seq);
    }
    let tmp11 = -1 === num;
    if (tmp11) {
      tmp11 = "todos" === tmp7.kind;
    }
    if (tmp11) {
      tmp11 = null == tmp7.task_id;
    }
    if (tmp11) {
      num = tmp5[0];
    }
    continue;
  }
  const obj = { steps: null, seenSeq: set, todosAt: num };
  const items1 = [...items];
  obj.steps = items1;
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
            seenSeq2.delete(tmp.turn_seq);
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
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(tmp, tmp3);
    continue;
  }
  return tmp.steps;
}
function stoppable(role) {
  let tmp = "assistant" === role.role;
  if (tmp) {
    let tmp2 = "side_reply" === role.kind;
    if (!tmp2) {
      tmp2 = "publish_notice" === role.kind;
    }
    tmp = !tmp2;
  }
  if (tmp) {
    let someResult = true === role.finished || true === role.continued;
    if (!someResult) {
      someResult = "" !== role.content;
    }
    if (!someResult) {
      someResult = null != role.proposal;
    }
    if (!someResult) {
      someResult = null != role.clarification;
    }
    if (!someResult) {
      someResult = null != role.intake;
    }
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
const Constants = fn(1085);
({ Routes: closure_15, StatusTypes: closure_16 } = Constants);
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_23 = [];
const map3 = new Map();
const map4 = new Map();
const set1 = new Set();
const map5 = new Map();
let width = 0;
let closure_29 = [];
let c30 = 0;
let c32 = "turn:";
const Store = initializeDefault.Store;
class ConjureChatStore extends Store {}
const prototype = ConjureChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    FamilyCenterStore,
    NotificationSettingsStore,
    SelectedChannelStore,
    SelectedGuildStore,
    SelfPresenceStore,
    UserSettingsProtoStore,
    ConjureProjectStore,
  );
};
prototype["getMessages"] = function getMessages(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_29;
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
  return set2.has(projectId);
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
const set2 = new Set();
const conjureChatStore = new ConjureChatStore(DispatcherDefault, {
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
    ({ projectId, entries, cursor } = degraded);
    if (cursor == null) {
      cursor = null;
    }
    const result = map6.set(projectId, cursor);
    if (true === degraded.degraded) {
      set2.add(projectId);
    } else {
      set2.delete(projectId);
    }
    map4.delete(projectId);
    set1.delete(projectId);
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
    const result1 = map.set(projectId, applyAgentReactions(found.map(newMessageFromHistory)));
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
      set = new Set(
        items1.flatMap((id) => {
          if (null == id.id) {
            let items = [];
          } else {
            items = [id.id];
          }
          return items;
        }),
      );
      let items = [];
      HermesBuiltin.arraySpread(
        items1,
        HermesBuiltin.arraySpread(
          mapped.filter((id) => {
            let tmp = null == id.id;
            if (!tmp) {
              tmp = !set.has(id.id);
            }
            return tmp;
          }),
          0,
        ),
      );
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
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === require);
      if (-1 === findIndexResult) {
        return false;
      } else {
        let arr3 = value;
        if (value[findIndexResult].disposition !== disposition) {
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
          const obj2 = {};
          const merged = Object.assign(value[findIndexResult]);
          obj2.disposition = disposition;
          items[arraySpreadResult] = obj2;
          HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), arraySpreadResult + 1);
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
                let tmp10 = arr3[diff];
                let tmp11 = tmp10.turn_id === activeTurnId;
                if (!tmp11) {
                  let _HermesInternal = HermesInternal;
                  tmp11 = tmp10.id === "" + c32 + activeTurnId;
                }
                num5 = diff;
                if (tmp11) {
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
        let tmp14 = num4;
        let arr4 = arr3;
        if ("steered" === disposition) {
          tmp14 = num4;
          arr4 = arr3;
          if (-1 === num4) {
            tmp14 = num4;
            arr4 = arr3;
            if (null != activeTurnId) {
              const tmp39 = resolveTurnIndex(arr3, activeTurnId);
              tmp14 = num4;
              arr4 = arr3;
              if (-1 !== tmp39) {
                tmp14 = num4;
                arr4 = arr3;
                if (tmp39 < findIndexResult) {
                  const obj3 = {};
                  const merged1 = Object.assign(arr3[tmp39]);
                  obj3.turn_id = activeTurnId;
                  if (0 === obj3.steps.length) {
                    const items1 = [];
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(
                      arr3.slice(tmp39 + 1, findIndexResult + 1),
                      HermesBuiltin.arraySpread(arr3.slice(0, tmp39), 0),
                    );
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
                    tmp14 = tmp39;
                    arr4 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp14) {
          if (tmp14 <= findIndexResult) {
            const items3 = [,];
            const arraySpreadResult16 = HermesBuiltin.arraySpread(arr4.slice(0, tmp14), 0);
            const obj4 = {};
            const merged2 = Object.assign(arr4[tmp14]);
            obj4.continued = true;
            let finished_at = arr4[tmp14].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            obj4.finished_at = finished_at;
            items3[arraySpreadResult16] = obj4;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(
              arr4.slice(tmp14 + 1, findIndexResult + 1),
              arraySpreadResult16 + 1,
            );
            const obj5 = { turnId: activeTurnId };
            items3[arraySpreadResult17] = newMessage("assistant", "", obj5);
            HermesBuiltin.arraySpread(arr4.slice(findIndexResult + 1), arraySpreadResult17 + 1);
            const result1 = map.set(projectId, items3);
            recordThinkingTransition(projectId);
          }
        }
        if (arr4 !== value) {
          const result2 = map.set(projectId, arr4);
        }
        return arr4 !== value;
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
        const disposition = tmp7.disposition;
        if (null != disposition) {
          tmp2.acknowledges = disposition;
        }
        const items = [,];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
        items[arraySpreadResult] = _objectWithoutProperties(value[findIndexResult], closure_3);
        const sum = arraySpreadResult + 1;
        items[sum] = tmp2;
        HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), sum + 1);
        const result = map.set(projectId, items);
        const tmp10 = _objectWithoutProperties(value[findIndexResult], closure_3);
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
    patchTurn(projectId, turnId, (steps) => {
      const obj = {};
      const merged = Object.assign(steps);
      const tmp2 = openTimeline(steps.steps);
      pushStep(tmp2, step);
      obj.steps = tmp2.steps;
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  CONJURE_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
    ({ projectId, summary: require } = turnId);
    value = map.get(projectId);
    let someResult = null != value;
    if (someResult) {
      someResult = value.some((disposition) => null != disposition.disposition);
    }
    if (someResult) {
      const result = map.set(
        projectId,
        value.map((disposition) => {
          if (null == disposition.disposition) {
            return disposition;
          } else {
            disposition = disposition.disposition;
            return _objectWithoutProperties(disposition, closure_1_4);
          }
        }),
      );
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
        const result = map.set(
          projectId,
          value.map((item) => {
            let tmp = item;
            if (stoppable(item)) {
              const obj = {};
              const merged = Object.assign(item);
              obj.stopRequested = true;
              tmp = obj;
            }
            return tmp;
          }),
        );
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
              tmp4 = tmp3.id === "" + c32 + turnId;
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
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, num2), 0);
        const obj = {};
        const merged = Object.assign(value[num2]);
        obj.provisionalTodo = text.text;
        items[arraySpreadResult] = obj;
        HermesBuiltin.arraySpread(value.slice(num2 + 1), arraySpreadResult + 1);
        const result = map.set(projectId, items);
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
              tmp4 = role.id === "" + c32 + tmp3;
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
    const deleteResult1 = map4.delete(projectId);
    value = map.get(projectId);
    if (null != value) {
      if (
        value.some((role) => {
          let tmp = "assistant" === role.role;
          if (tmp) {
            let someResult = true === role.finished || true === role.continued;
            if (!someResult) {
              someResult = "" !== role.content;
            }
            if (!someResult) {
              someResult = null != role.proposal;
            }
            if (!someResult) {
              someResult = null != role.clarification;
            }
            if (!someResult) {
              someResult = null != role.intake;
            }
            if (!someResult) {
              const steps = role.steps;
              someResult = steps.some((kind) => set.has(kind.kind));
            }
            tmp = !someResult;
          }
          return tmp;
        })
      ) {
        const result = map.set(
          projectId,
          value.map((disposition) => {
            if (null != disposition.disposition) {
              disposition = disposition.disposition;
              return _objectWithoutProperties(disposition, closure_1_5);
            } else {
              let tmp2 = disposition;
              if ("assistant" === disposition.role) {
                let someResult = true === disposition.finished || true === disposition.continued;
                if (!someResult) {
                  someResult = "" !== disposition.content;
                }
                if (!someResult) {
                  someResult = null != disposition.proposal;
                }
                if (!someResult) {
                  someResult = null != disposition.clarification;
                }
                if (!someResult) {
                  someResult = null != disposition.intake;
                }
                if (!someResult) {
                  const steps = disposition.steps;
                  someResult = steps.some((kind) => set.has(kind.kind));
                }
                tmp2 = disposition;
                if (!someResult) {
                  const obj = {};
                  const merged = Object.assign(disposition);
                  obj.provisionalTodo = undefined;
                  const items = [];
                  const obj2 = { type: "step", kind: "terminal_error", message: null };
                  const intl = util.intl;
                  obj2.message = intl.string(_modDef3753.lmiuFX);
                  items[HermesBuiltin.arraySpread(disposition.steps, 0)] = obj2;
                  obj.steps = items;
                  tmp2 = obj;
                  const arraySpreadResult = HermesBuiltin.arraySpread(disposition.steps, 0);
                }
              }
              return tmp2;
            }
          }),
        );
        recordThinkingTransition(projectId);
      }
    }
    let tmp6 = !deleteResult1;
    if (!deleteResult1) {
      tmp6 = !deleteResult;
    }
    return !tmp6;
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatStore.tsx");

export default conjureChatStore;
export const turnSettled = function turnSettled(finished) {
  let someResult = true === finished.finished || true === finished.continued;
  if (!someResult) {
    someResult = "" !== finished.content;
  }
  if (!someResult) {
    someResult = null != finished.proposal;
  }
  if (!someResult) {
    someResult = null != finished.clarification;
  }
  if (!someResult) {
    someResult = null != finished.intake;
  }
  if (!someResult) {
    const steps = finished.steps;
    someResult = steps.some((kind) => set.has(kind.kind));
  }
  return someResult;
};
export const isStrandedSegment = function isStrandedSegment(arg0, arg1) {
  if (arg0[arg1] != null) {
    const turn_id = tmp.turn_id;
  }
  if (null != arg0[arg1]) {
    if ("assistant" === tmp.role) {
      if (null != turn_id) {
        if ("" === tmp.content) {
          let someResult =
            true === tmp.finished ||
            true === tmp.continued ||
            "" !== tmp.content ||
            null != tmp.proposal ||
            null != tmp.clarification ||
            null != tmp.intake;
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
                  let someResult1 =
                    true === tmp5.finished ||
                    true === tmp5.continued ||
                    "" !== tmp5.content ||
                    null != tmp5.proposal ||
                    null != tmp5.clarification ||
                    null != tmp5.intake;
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
  value = map6.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
export { replayTimeline };
