// === Module 16586: VibegrationsChatStore ===

// Module 16586 (VibegrationsChatStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef3547 from "module_3547" /* 3547 */;
import SoundUtils from "SoundUtils" /* 9902 */;
import VibegrationsPlatformUtilsDefault from "VibegrationsPlatformUtils" /* 16588 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10081 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16587 */;

require = fn;
function newMessage(assistant, content, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  ({ ts, id, userId, turnId } = obj);
  if (id == null) {
    const sum = c28 + 1;
    c28 = sum;
    id = `m${tmp2}`;
  }
  obj = { id, render_id: id, role: assistant, content };
  if (null != userId) {
    obj = { user_id: userId };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  if (null != turnId) {
    const obj2 = { turn_id: turnId };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged1 = Object.assign(obj3);
  obj.steps = [];
  if (null != ts) {
    const _Date2 = Date;
    let parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  obj.created_at = parsed;
  obj.attachments = obj.attachments;
  return obj;
}
function newMessageFromHistory(ts) {
  const tmp = newMessage(ts.role, ts.content, { ts: ts.ts, id: ts.id, userId: ts.user_id, attachments: ts.attachments });
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
  if (tmp2) {
    tmp.ideas = ts.ideas;
  }
  if (tmp3) {
    tmp.clarification = ts.clarification;
  }
  if (tmp4) {
    tmp.todos = ts.todos;
  }
  if (null != ts.steps) {
    tmp.steps = replayTimeline(ts.steps);
  } else if (null != ts.events) {
    const events = ts.events;
    tmp.steps = events.map((type) => {
      if ("announcement" === type.type) {
        let obj = { type: "step", kind: "announcement", message: type.message };
      } else {
        obj = { type: "step", kind: "todos", items: type.items };
      }
      return obj;
    });
  }
  if (tmp6) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  return tmp;
}
function patchTurn(projectId, turnId, fn) {
  let obj = map;
  value = map.get(projectId);
  if (null != value) {
    let num3 = -1;
    if (null != turnId) {
      let diff = value.length - 1;
      num3 = -1;
      if (0 <= diff) {
        num3 = diff;
        while (value[diff].turn_id !== turnId) {
          diff = diff - 1;
          num3 = -1;
          if (0 > diff) {
            break;
          }
        }
      }
    }
    if (-1 === num3) {
      let diff1 = value.length - 1;
      num3 = -1;
      if (0 <= diff1) {
        while (true) {
          let tmp3 = value[diff1];
          if ("assistant" === tmp3.role) {
            let someResult = true === tmp3.finished || true === tmp3.continued || "" !== tmp3.content || null != tmp3.proposal;
            if (!someResult) {
              let steps = tmp3.steps;
              someResult = steps.some((kind) => set.has(kind.kind));
            }
            if (!someResult) {
              num3 = diff1;
              if (null == tmp3.turn_id) {
                break;
              }
            }
            break;
          }
          diff1 = diff1 - 1;
          num3 = -1;
          if (0 > diff1) {
            break;
          }
        }
      }
    }
    if (-1 !== num3) {
      let tmp14 = tmp13;
      if (null != turnId) {
        tmp14 = tmp13;
        if (null == tmp13.turn_id) {
          obj = {};
          const merged = Object.assign(tmp13);
          obj.turn_id = turnId;
          tmp14 = obj;
        }
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, num3), 0);
      items[arraySpreadResult] = fn(tmp14);
      arraySpreadResult = HermesBuiltin.arraySpread(value.slice(num3 + 1), arraySpreadResult + 1);
      const result = obj.set(projectId, items);
    } else {
      const items1 = [];
      if (null != turnId) {
        obj = { turnId };
        let obj1 = obj;
      } else {
        obj1 = {};
      }
      items1[HermesBuiltin.arraySpread(value, 0)] = fn(newMessage("assistant", "", obj1));
      const result1 = obj.set(projectId, items1);
      const arraySpreadResult1 = HermesBuiltin.arraySpread(value, 0);
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
          tmp4 = flag2;
          if ("side_reply" !== tmp.kind) {
            let flag = flag2;
            if (!flag2) {
              let someResult = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal;
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
              let someResult1 = true === tmp.finished || true === tmp.continued || "" !== tmp.content || null != tmp.proposal;
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
function recordThinkingTransition(projectId) {
  let tmp47;
  let obj = map2;
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  const tmp = hasOpenTurn(map.get(projectId));
  if (flag !== tmp) {
    let result = obj.set(projectId, tmp);
    const index = closure_22.indexOf(projectId);
    if (-1 !== index) {
      closure_22.splice(index, 1);
    }
    closure_22.unshift(projectId);
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
              if ("side_reply" !== value[diff].kind) {
                break;
              }
            }
            diff = diff - 1;
            tmp4 = null;
          }
          tmp4 = value[diff];
        }
      }
      let tmp7 = null != tmp4;
      if (tmp7) {
        let someResult = "" !== tmp4.content.trim() || null != tmp4.proposal;
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
        tmp7 = someResult;
      }
      if (tmp7) {
        const _Date = Date;
        const result1 = map1.set(projectId, Date.now());
      } else {
        map1.delete(projectId);
      }
      value = map.get(projectId);
      if (null != value) {
        let diff1 = value.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value[diff1].finished_at) {
            let someResult1 = true === tmp13.finished || true === tmp13.continued;
            if (!someResult1) {
              someResult1 = "" !== tmp13.content;
            }
            if (!someResult1) {
              someResult1 = null != tmp13.proposal;
            }
            if (!someResult1) {
              const steps2 = tmp13.steps;
              someResult1 = steps2.some((kind) => set.has(kind.kind));
            }
            if (someResult1) {
              const items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, diff1), 0);
              obj = {};
              const merged = Object.assign(tmp13);
              const _Date2 = Date;
              obj.finished_at = Date.now();
              items[arraySpreadResult] = obj;
              arraySpreadResult = HermesBuiltin.arraySpread(value.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = map.set(projectId, items);
            }
          }
        }
      }
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        result = VibegrationsPlatformUtilsDefault.areTurnNotificationsDisabled();
        if (!result) {
          result = SelfPresenceStore.getStatus() === constants.DND;
        }
        if (!result) {
          const FocusMode = UserSettings.FocusMode;
          result = FocusMode.getSetting();
        }
        if (!result) {
          result = FamilyCenterStore.isCurrentUserInRestrictedHours();
        }
        if (!result) {
          const isSoundDisabledResult = NotificationSettingsStore.isSoundDisabled("message1");
          const guildId = SelectedGuildStore.getGuildId();
          let guild_id = null;
          if (null != guildId) {
            guild_id = null;
            if (VibegrationsProjectStore.getSelectedProjectId(guildId) === projectId) {
              guild_id = guildId;
            }
          }
          let isWindowFocusedResult = null != guild_id;
          if (isWindowFocusedResult) {
            isWindowFocusedResult = SelectedChannelStore.getChannelId() === StaticChannelRoute.VIBEGRATIONS;
          }
          if (isWindowFocusedResult) {
            isWindowFocusedResult = VibegrationsPlatformUtilsDefault.isWindowFocused();
            const tmp68Result = VibegrationsPlatformUtilsDefault;
          }
          if (guild_id == null) {
            guild_id = project.guild_id;
          }
          if (guild_id == null) {
            guild_id = project.preview_guild_id;
          }
          const value1 = map.get(projectId);
          let tmp43 = null;
          if (null != value1) {
            let diff2 = value1.length - 1;
            tmp43 = null;
            if (0 <= diff2) {
              while (true) {
                if ("assistant" === value1[diff2].role) {
                  if ("side_reply" !== value1[diff2].kind) {
                    break;
                  }
                }
                diff2 = diff2 - 1;
                tmp43 = null;
              }
              tmp43 = value1[diff2];
            }
          }
          let content = null;
          if (null != tmp43) {
            if ("" !== str9.trim()) {
              content = tmp43.content;
            } else if (null != tmp43.proposal) {
              content = tmp43.proposal.summary;
            } else {
              let diff3 = tmp43.steps.length - 1;
              content = null;
              if (0 <= diff3) {
                while (true) {
                  tmp47 = tmp43.steps[diff3];
                  if ("error" !== tmp47.kind) {
                    if ("terminal_error" !== tmp47.kind) {
                      if ("preview_ready" === tmp47.kind) {
                        let intl = util.intl;
                        content = intl.string(_modDef3547["78YNh7"]);
                      } else {
                        diff3 = diff3 - 1;
                        content = null;
                      }
                    }
                  }
                  if (null != tmp47.message) {
                    if ("" !== tmp47.message) {
                      break;
                    }
                  }
                }
                content = tmp47.message;
              }
            }
            str9 = tmp43.content;
          }
          if (null != content) {
            if (isWindowFocusedResult) {
              if (!isSoundDisabledResult) {
                SoundUtils.playSound(bit_message1, 0.4);
              }
            } else {
              let CHANNELResult = null;
              if (null != guild_id) {
                CHANNELResult = closure_1_14.CHANNEL(guild_id, StaticChannelRoute.VIBEGRATIONS, projectId);
              }
              obj = { projectId, guildId: null, title: null, body: null, route: null, sound: null, volume: 0.4 };
              if (guild_id == null) {
                guild_id = null;
              }
              obj.guildId = guild_id;
              obj.title = project.name;
              obj.body = content;
              obj.route = CHANNELResult;
              let tmp58;
              if (!isSoundDisabledResult) {
                tmp58 = bit_message1;
              }
              obj.sound = tmp58;
              const result3 = VibegrationsPlatformUtilsDefault.presentTurnNotification(obj);
            }
          }
        }
      }
    }
  }
}
function purgeProject(arg0) {
  let deleteResult = map.delete(arg0);
  map5.delete(arg0);
  const deleteResult2 = map1.delete(arg0);
  const deleteResult3 = map2.delete(arg0);
  const deleteResult4 = map3.delete(arg0);
  const deleteResult5 = map4.delete(arg0);
  const index = closure_22.indexOf(arg0);
  if (-1 !== index) {
    closure_22.splice(index, 1);
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
    deleteResult = tmp9;
  }
  return deleteResult;
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
function pushStep(todosAt, turn_seq) {
  if (null == turn_seq.turn_seq) {
    if ("todos" === turn_seq.kind) {
      if (null == turn_seq.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = todosAt.steps.length;
          const steps = todosAt.steps;
          steps.push(turn_seq);
          if (null != turn_seq.turn_seq) {
            const seenSeq4 = todosAt.seenSeq;
            seenSeq4.add(turn_seq.turn_seq);
          }
        } else {
          if (null != todosAt.steps[todosAt.todosAt].turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.delete(tmp.turn_seq);
          }
          todosAt.steps[todosAt.todosAt] = turn_seq;
          if (null != turn_seq.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(turn_seq.turn_seq);
          }
        }
      }
    }
    const steps1 = todosAt.steps;
    steps1.push(turn_seq);
    if (null != turn_seq.turn_seq) {
      const seenSeq5 = todosAt.seenSeq;
      seenSeq5.add(turn_seq.turn_seq);
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
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
let closure_5 = ["disposition"];
const Constants = fn(1074);
({ Routes: closure_14, StatusTypes: closure_15 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_22 = [];
const map3 = new Map();
const map4 = new Map();
const set1 = new Set();
let width = 0;
let closure_27 = [];
let c28 = 0;
const Store = initializeDefault.Store;
class VibegrationsChatStore extends Store {
}
const prototype = VibegrationsChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(FamilyCenterStore, NotificationSettingsStore, SelectedChannelStore, SelectedGuildStore, SelfPresenceStore, VibegrationsProjectStore);
};
prototype["getMessages"] = function getMessages(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_27;
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
prototype["isThinking"] = function isThinking(item10008) {
  return hasOpenTurn(map.get(item10008));
};
prototype["hasLoadedHistory"] = function hasLoadedHistory(arg0) {
  return map5.has(arg0);
};
prototype["getFinishedAt"] = function getFinishedAt(arg0) {
  let tmp = null;
  if (!hasOpenTurn(map.get(arg0))) {
    value = map1.get(arg0);
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
prototype["getThinkingActivity"] = function getThinkingActivity(arg0) {
  value = map4.get(arg0);
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
  return closure_22.slice();
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
const map5 = new Map();
const vibegrationsChatStore = new VibegrationsChatStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === closure_22.length) {
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
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set1.clear();
    closure_22.length = 0;
    width = 0;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    ({ projectId, entries, cursor } = arg0);
    if (cursor == null) {
      cursor = null;
    }
    const result = map5.set(projectId, cursor);
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
    const result1 = map.set(projectId, found.map(newMessageFromHistory));
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    ({ projectId, entries } = cursor);
    set = undefined;
    const result = map5.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items = map.get(projectId);
      if (items == null) {
        items = [];
      }
      const mapped = entries.map(newMessageFromHistory);
      const _Set = Set;
      set = new Set(items.flatMap((id) => {
        if (null == id.id) {
          let items = [];
        } else {
          items = [id.id];
        }
        return items;
      }));
      items = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(mapped.filter((id) => {
        let tmp = null == id.id;
        if (!tmp) {
          tmp = !set.has(id.id);
        }
        return tmp;
      }), 0));
      const result1 = map.set(projectId, items);
    }
  },
  VIBEGRATIONS_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
    ({ projectId, id } = optimisticId);
    optimisticId = optimisticId.optimisticId;
    let obj = map;
    ({ content, userId, timestamp, attachments } = optimisticId);
    let items = map.get(projectId);
    if (items == null) {
      items = [];
    }
    if (items.some((id) => id.id === id)) {
      return false;
    } else {
      obj = { ts: timestamp, id, userId, attachments };
      const tmp2 = newMessage("user", content, obj);
      let num3 = -1;
      if (null != optimisticId) {
        num3 = items.findIndex((id) => id.id === optimisticId);
      }
      if (-1 !== num3) {
        tmp2.render_id = items[num3].render_id;
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, num3), 0);
        items[arraySpreadResult] = tmp2;
        arraySpreadResult = HermesBuiltin.arraySpread(items.slice(num3 + 1), arraySpreadResult + 1);
        const result = obj.set(projectId, items);
        recordThinkingTransition(projectId);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items, 0)] = tmp2;
        if (!hasOpenTurn(items1)) {
          items1.push(newMessage("assistant", ""));
        }
        const result1 = obj.set(projectId, items1);
        recordThinkingTransition(projectId);
      }
    }
  },
  VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    ({ projectId, id: require, activeTurnId, disposition } = arg0);
    let obj = map;
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
          let arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
          obj = {};
          const merged = Object.assign(value[findIndexResult]);
          obj.disposition = disposition;
          items[arraySpreadResult] = obj;
          arraySpreadResult = HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), arraySpreadResult + 1);
          arr3 = items;
        }
        let num4 = -1;
        if ("steered" === disposition) {
          let num5 = -1;
          if (null != activeTurnId) {
            let diff = arr3.length - 1;
            num5 = -1;
            if (0 <= diff) {
              num5 = diff;
              while (arr3[diff].turn_id !== activeTurnId) {
                diff = diff - 1;
                num5 = -1;
                if (0 > diff) {
                  break;
                }
              }
            }
          }
          num4 = num5;
        }
        if (-1 !== num4) {
          if (num4 <= findIndexResult) {
            const items1 = [, ];
            const arraySpreadResult1 = HermesBuiltin.arraySpread(arr3.slice(0, num4), 0);
            obj = {};
            const merged1 = Object.assign(arr3[num4]);
            obj.continued = true;
            let finished_at = arr3[num4].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            obj.finished_at = finished_at;
            items1[arraySpreadResult1] = obj;
            const obj1 = { turnId: activeTurnId };
            items1[HermesBuiltin.arraySpread(arr3.slice(num4 + 1), arraySpreadResult1 + 1)] = newMessage("assistant", "", obj1);
            const result = obj.set(projectId, items1);
            recordThinkingTransition(projectId);
            const arraySpreadResult2 = HermesBuiltin.arraySpread(arr3.slice(num4 + 1), arraySpreadResult1 + 1);
          }
        }
        if (arr3 !== value) {
          const result1 = obj.set(projectId, arr3);
        }
        return arr3 !== value;
      }
    }
  },
  VIBEGRATIONS_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
    ({ projectId, id } = inReplyTo);
    inReplyTo = inReplyTo.inReplyTo;
    let obj = map;
    ({ content, timestamp } = inReplyTo);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      obj = { ts: timestamp, id };
      const tmp2 = newMessage("assistant", content, obj);
      tmp2.kind = "side_reply";
      tmp2.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        const disposition = tmp7.disposition;
        const items = [, ];
        let arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
        items[arraySpreadResult] = _objectWithoutProperties(value[findIndexResult], closure_3);
        const sum = arraySpreadResult + 1;
        items[sum] = tmp2;
        arraySpreadResult = HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), sum + 1);
        const result = obj.set(projectId, items);
        const tmp10 = _objectWithoutProperties(value[findIndexResult], closure_3);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(value, 0)] = tmp2;
        const result1 = obj.set(projectId, items1);
      }
    }
  },
  VIBEGRATIONS_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    ({ projectId, step: require } = turnId);
    patchTurn(projectId, turnId.turnId, (steps) => {
      const obj = {};
      const merged = Object.assign(steps);
      const tmp2 = openTimeline(steps.steps);
      pushStep(tmp2, require);
      obj.steps = tmp2.steps;
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
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
          return _objectWithoutProperties(disposition, closure_1_4);
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
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
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
  VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(text) {
    ({ projectId, turnId } = text);
    value = map.get(projectId);
    let flag = false;
    if (null != value) {
      let num2 = -1;
      if (null != turnId) {
        let diff = value.length - 1;
        num2 = -1;
        if (0 <= diff) {
          num2 = diff;
          while (value[diff].turn_id !== turnId) {
            diff = diff - 1;
            num2 = -1;
            if (0 > diff) {
              break;
            }
          }
        }
      }
      let flag2 = -1 !== num2;
      if (-1 !== num2) {
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, num2), 0);
        const obj = {};
        const merged = Object.assign(value[num2]);
        obj.provisionalTodo = text.text;
        items[arraySpreadResult] = obj;
        arraySpreadResult = HermesBuiltin.arraySpread(value.slice(num2 + 1), arraySpreadResult + 1);
        const result = map.set(projectId, items);
        flag2 = true;
      }
      flag = flag2;
    }
    return flag ? undefined : false;
  },
  VIBEGRATIONS_CHAT_THINKING_SET: function handleChatThinkingSet(arg0) {
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
  VIBEGRATIONS_CHAT_COMPACTING_SET: function handleChatCompactingSet(arg0) {
    ({ projectId, compacting } = arg0);
    if (compacting === set1.has(projectId)) {
      return false;
    } else if (compacting) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  VIBEGRATIONS_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
  },
  VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function handleChatSidebarWidthSet(width) {
    width = width.width;
    if (width === width) {
      return false;
    }
  },
  VIBEGRATIONS_CHAT_TURN_PATCH: function handleChatTurnPatch(turnId) {
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
  VIBEGRATIONS_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const deleteResult1 = map4.delete(projectId);
    value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
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
            const steps = role.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          tmp = !someResult;
        }
        return tmp;
      })) {
        const result = map.set(projectId, value.map((disposition) => {
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
                const steps = disposition.steps;
                someResult = steps.some((kind) => set.has(kind.kind));
              }
              tmp2 = disposition;
              if (!someResult) {
                let obj = {};
                const merged = Object.assign(disposition);
                obj.provisionalTodo = undefined;
                const items = [];
                obj = { type: "step", kind: "terminal_error", message: null };
                const intl = util.intl;
                obj.message = intl.string(_modDef3547["wjWm+/"]);
                items[HermesBuiltin.arraySpread(disposition.steps, 0)] = obj;
                obj.steps = items;
                tmp2 = obj;
                const arraySpreadResult = HermesBuiltin.arraySpread(disposition.steps, 0);
              }
            }
            return tmp2;
          }
        }));
        recordThinkingTransition(projectId);
      }
    }
    let tmp6 = !deleteResult1;
    if (!deleteResult1) {
      tmp6 = !deleteResult;
    }
    return !tmp6;
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    let deleteResult = map.delete(projectId);
    map5.delete(projectId);
    const deleteResult2 = map1.delete(projectId);
    const deleteResult3 = map2.delete(projectId);
    const deleteResult4 = map3.delete(projectId);
    const deleteResult5 = map4.delete(projectId);
    const index = closure_22.indexOf(projectId);
    if (-1 !== index) {
      closure_22.splice(index, 1);
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
      deleteResult = tmp9;
    }
    if (!deleteResult) {
      return false;
    }
    deleteResult6 = set1.delete(projectId);
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    let flag = false;
    const iter = new Set(items)[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = null == VibegrationsProjectStore.getProject(nextResult);
      if (tmp5) {
        tmp5 = purgeProject(tmp3);
      }
      if (tmp5) {
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsChatStore.tsx");

export default vibegrationsChatStore;
export const turnSettled = function turnSettled(message) {
  let someResult = true === message.finished || true === message.continued;
  if (!someResult) {
    someResult = "" !== message.content;
  }
  if (!someResult) {
    someResult = null != message.proposal;
  }
  if (!someResult) {
    const steps = message.steps;
    someResult = steps.some((kind) => set.has(kind.kind));
  }
  return someResult;
};
export const getOlderHistoryCursor = function getOlderHistoryCursor(projectId) {
  value = map5.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
export { replayTimeline };