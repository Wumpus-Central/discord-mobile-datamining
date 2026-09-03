// === Module 16424: newMessage ===

// Module 16424 (newMessage)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 3500 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import createSoundForPack from "createSoundForPack" /* 10019 */;
import _modDef16426 from "module_16426" /* 16426 */;
import closure_6 from "_slicedToArray" /* 32 */;
import closure_7 from "_objectWithoutProperties" /* 109 */;
import closure_8 from "freshTeenActivityWithMap" /* 7292 */;
import closure_9 from "DesktopNotificationTypes" /* 10190 */;
import closure_10 from "handleConnectionOpen" /* 1980 */;
import closure_11 from "handleConnectionOpen" /* 4299 */;
import closure_12 from "filterPlayingActivities" /* 5232 */;
import closure_13 from "isProjectOwner" /* 16425 */;
import ME from "ME" /* 673 */;
import { StaticChannelRoute } from "set" /* 1393 */;
import set from "set" /* 2 */;

require = arg1;
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
    obj = { user_id: null };
    obj[0] = userId;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  if (null != turnId) {
    const obj2 = { turn_id: null };
    obj2[0] = turnId;
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
        let obj = { type: "step", kind: "announcement", message: null };
        obj[2] = type.message;
      } else {
        obj = { type: "step", kind: "todos", items: null };
        obj[2] = type.items;
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
function patchTurn(projectId, turnId, arg2) {
  let obj = map;
  const value = map.get(projectId);
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
          let tmp4 = diff1;
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
      items[arraySpreadResult] = arg2(tmp14);
      arraySpreadResult = HermesBuiltin.arraySpread(value.slice(num3 + 1), arraySpreadResult + 1);
      const result = obj.set(projectId, items);
    } else {
      const items1 = [];
      if (null != turnId) {
        obj = { turnId: null };
        obj[0] = turnId;
        obj1 = obj;
      } else {
        obj1 = {};
      }
      items1[HermesBuiltin.arraySpread(value, 0)] = arg2(newMessage("assistant", "", obj1));
      const result1 = obj.set(projectId, items1);
      const arraySpreadResult1 = HermesBuiltin.arraySpread(value, 0);
      const tmp11 = newMessage;
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
        let tmp2 = diff;
        let tmp3 = flag2;
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
    const index = arr.indexOf(projectId);
    if (-1 !== index) {
      arr5.splice(index, 1);
    }
    arr = arr.unshift(projectId);
    if (tmp) {
      map1.delete(projectId);
    } else {
      let value = map.get(projectId);
      let tmp4 = null;
      if (null != value) {
        let diff = value.length - 1;
        tmp4 = null;
        if (0 <= diff) {
          while (true) {
            let tmp6 = diff;
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
        const str3 = tmp4.content;
      }
      if (tmp7) {
        const _Date = Date;
        const result1 = obj3.set(projectId, Date.now());
      } else {
        obj3.delete(projectId);
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
      const project = store.getProject(projectId);
      if (null != project) {
        result = _modDef16426.areTurnNotificationsDisabled();
        if (!result) {
          result = status.getStatus() === constants.DND;
        }
        if (!result) {
          const FocusMode = explicitContentFromProto.FocusMode;
          result = FocusMode.getSetting();
        }
        if (!result) {
          result = currentUserInRestrictedHours.isCurrentUserInRestrictedHours();
        }
        if (!result) {
          const isSoundDisabledResult = soundDisabled.isSoundDisabled("message1");
          guildId = guildId.getGuildId();
          let guild_id = null;
          if (null != guildId) {
            guild_id = null;
            if (obj5.getSelectedProjectId(guildId) === projectId) {
              guild_id = guildId;
            }
          }
          let isWindowFocusedResult = null != guild_id;
          if (isWindowFocusedResult) {
            isWindowFocusedResult = channelId.getChannelId() === StaticChannelRoute.VIBEGRATIONS;
          }
          if (isWindowFocusedResult) {
            isWindowFocusedResult = tmp68(16426).isWindowFocused();
            const tmp68Result = tmp68(16426);
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
                let tmp45 = diff2;
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
                  let tmp48 = diff3;
                  if ("error" !== tmp47.kind) {
                    if ("terminal_error" !== tmp47.kind) {
                      if ("preview_ready" === tmp47.kind) {
                        let tmp50 = require;
                        let tmp51 = dependencyMap;
                        let intl = getSystemLocale.intl;
                        let tmp52 = importDefault;
                        content = intl.string(messagesProxyDefault["78YNh7"]);
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
                createSoundForPack.playSound(bit_message1, 0.4);
                const obj9 = createSoundForPack;
              }
            } else {
              let CHANNELResult = null;
              if (null != guild_id) {
                CHANNELResult = closure_14.CHANNEL(guild_id, StaticChannelRoute.VIBEGRATIONS, projectId);
              }
              obj = { projectId: null, guildId: null, title: null, body: null, route: null, sound: null, volume: 0.4 };
              obj[0] = projectId;
              if (guild_id == null) {
                guild_id = null;
              }
              obj[1] = guild_id;
              obj[2] = project.name;
              obj[3] = content;
              obj[4] = CHANNELResult;
              let tmp58;
              if (!isSoundDisabledResult) {
                tmp58 = bit_message1;
              }
              obj[5] = tmp58;
              const result3 = _modDef16426.presentTurnNotification(obj);
              const obj7 = _modDef16426;
            }
          }
        }
        const obj10 = _modDef16426;
        tmp68 = importDefault;
      }
      obj5 = store;
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
  const index = arr.indexOf(arg0);
  if (-1 !== index) {
    arr.splice(index, 1);
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
  let items = arg0;
  if (arg0 === undefined) {
    items = [];
  }
  set = new Set();
  let num = -1;
  const entries = items.entries();
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp7 = tmp6;
    if (null != tmp6.turn_seq) {
      let tmp8 = tmp6;
      let addResult = set.add(tmp7.turn_seq);
    }
    let tmp10 = num;
    let tmp11 = -1 === num;
    if (tmp11) {
      let tmp12 = tmp6;
      tmp11 = "todos" === tmp7.kind;
    }
    if (tmp11) {
      let tmp13 = tmp6;
      tmp11 = null == tmp7.task_id;
    }
    if (tmp11) {
      num = tmp5[0];
    }
    continue;
  }
  const items1 = [...items];
  return { steps: items1, seenSeq: set, todosAt: num };
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
    let tmp4 = pushStep;
    let tmp5 = pushStep(tmp, tmp3);
    continue;
  }
  return tmp.steps;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
let closure_5 = ["disposition"];
({ Routes: closure_14, StatusTypes: closure_15 } = ME);
const bit_message1 = "bit_message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_22 = [];
const map3 = new Map();
const map4 = new Map();
const set1 = new Set();
let c26 = 0;
let closure_27 = [];
let c28 = 0;
const Store = initializeDefault.Store;
class VibegrationsChatStore extends Store {
}
const prototype = VibegrationsChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, closure_9, closure_10, closure_11, closure_12, closure_13);
};
prototype["getMessages"] = function getMessages(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = closure_27;
  }
  return value;
};
prototype["hasPendingSettingsRequest"] = function hasPendingSettingsRequest(c0) {
  const messages = this.getMessages(c0);
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
    let value = map1.get(arg0);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getProjectUsage"] = function getProjectUsage(projectId) {
  let value = map3.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getThinkingActivity"] = function getThinkingActivity(arg0) {
  let value = map4.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isCompacting"] = function isCompacting(projectId) {
  return set1.has(projectId);
};
prototype["getSidebarWidth"] = function getSidebarWidth() {
  return c26;
};
prototype["getActivityOrderedProjectIds"] = function getActivityOrderedProjectIds() {
  return arr.slice();
};
prototype["isAnyThinking"] = function isAnyThinking() {
  const self = this;
  const keys = map.keys();
  for (const item10008 of keys) {
    if (self.isThinking(item10008)) {
      let tmp2 = obj;
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
};
const map5 = new Map();
const vibegrationsChatStore = new VibegrationsChatStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === arr.length) {
                  if (0 === c26) {
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
    arr.length = 0;
    c26 = 0;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    ({ projectId, entries, cursor } = arg0);
    set = undefined;
    if (cursor == null) {
      cursor = null;
    }
    const result = map5.set(projectId, cursor);
    map4.delete(projectId);
    set1.delete(projectId);
    set = new Set();
    const found = entries.filter((id) => {
      let tmp = null == id.id;
      if (!tmp) {
        const hasItem = set.has(id.id);
        let flag = !hasItem;
        if (!hasItem) {
          obj.add(id.id);
          flag = true;
        }
        tmp = flag;
        obj = set;
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
      const obj = map;
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
      obj = { ts: null, id: null, userId: null, attachments: null };
      obj[0] = timestamp;
      obj[1] = id;
      obj[2] = userId;
      obj[3] = attachments;
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
          items1.push(tmp("assistant", ""));
        }
        const result1 = obj.set(projectId, items1);
        recordThinkingTransition(projectId);
      }
      tmp = newMessage;
    }
  },
  VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
    ({ projectId, id: require, activeTurnId, disposition } = arg0);
    let obj = map;
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((id) => id.id === closure_0);
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
            obj1 = { turnId: null };
            obj1[0] = activeTurnId;
            items1[HermesBuiltin.arraySpread(arr3.slice(num4 + 1), arraySpreadResult1 + 1)] = newMessage("assistant", "", obj1);
            const result = obj.set(projectId, items1);
            recordThinkingTransition(projectId);
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
    const value = map.get(projectId);
    if (null == value) {
      return false;
    } else if (value.some((id) => id.id === id)) {
      return false;
    } else {
      obj = { ts: null, id: null };
      obj[0] = timestamp;
      obj[1] = id;
      const tmp2 = newMessage("assistant", content, obj);
      tmp2.kind = "side_reply";
      tmp2.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        const disposition = tmp7.disposition;
        const items = [, ];
        let arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
        items[arraySpreadResult] = callback2(value[findIndexResult], closure_3);
        const sum = arraySpreadResult + 1;
        items[sum] = tmp2;
        arraySpreadResult = HermesBuiltin.arraySpread(value.slice(findIndexResult + 1), sum + 1);
        const result = obj.set(projectId, items);
        const tmp10 = callback2(value[findIndexResult], closure_3);
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
      const tmp2 = closure_1_36(steps.steps);
      closure_1_37(tmp2, closure_0);
      obj.steps = tmp2.steps;
      return obj;
    });
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_TURN_FINISHED: function handleChatTurnFinished(turnId) {
    ({ projectId, summary: require } = turnId);
    const value = map.get(projectId);
    let someResult = null != value;
    if (someResult) {
      someResult = value.some((disposition) => null != disposition.disposition);
    }
    if (someResult) {
      const result = obj.set(projectId, value.map((disposition) => {
        if (null == disposition.disposition) {
          return disposition;
        } else {
          disposition = disposition.disposition;
          return callback(disposition, closure_4);
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
        str = closure_0;
        if (closure_0 == null) {
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
    const value = map.get(projectId);
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
      const result = obj.set(projectId, items);
    }
    obj = map;
  },
  VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(text) {
    ({ projectId, turnId } = text);
    const value = map.get(projectId);
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
  VIBEGRATIONS_CHAT_COMPACTING_SET: function handleChatCompactingSet(arg0) {
    ({ projectId, compacting } = arg0);
    if (compacting === set1.has(projectId)) {
      return false;
    } else if (compacting) {
      obj.add(projectId);
    } else {
      obj.delete(projectId);
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
      const merged1 = Object.assign(closure_0);
      if ("todos" in closure_0) {
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
    const value = map.get(projectId);
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
            return callback3(disposition, closure_5);
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
                const intl = callback(1233).intl;
                obj[2] = intl.string(callback2(3500)["wjWm+/"]);
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
    const index = arr.indexOf(projectId);
    if (-1 !== index) {
      arr.splice(index, 1);
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
      let tmp4 = store;
      let tmp3 = nextResult;
      let tmp5 = null == store.getProject(nextResult);
      if (tmp5) {
        let tmp6 = purgeProject;
        let tmp7 = nextResult;
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
let result = set.fileFinishedImporting("modules/vibegrations/stores/VibegrationsChatStore.tsx");

export default vibegrationsChatStore;
export const turnSettled = function turnSettled(finished) {
  let someResult = true === finished.finished || true === finished.continued;
  if (!someResult) {
    someResult = "" !== finished.content;
  }
  if (!someResult) {
    someResult = null != finished.proposal;
  }
  if (!someResult) {
    const steps = finished.steps;
    someResult = steps.some((kind) => set.has(kind.kind));
  }
  return someResult;
};
export const getOlderHistoryCursor = function getOlderHistoryCursor(projectId) {
  let value = map5.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
export { replayTimeline };