// discord_app/modules/conjure/chat/ConjureChatStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import conjureChatTurns from "conjureChatTurns.tsx";
import conjureStepTimeline from "conjureStepTimeline.tsx";
import conjureChatHistory from "conjureChatHistory.tsx";
import conjureAgentReaction from "conjureAgentReaction.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
function patchTurn(projectId, turnId, fn) {
  value = map.get(projectId);
  if (null != value) {
    const turnIndex = conjureChatTurns.resolveTurnIndex(value, turnId);
    if (-1 !== turnIndex) {
      let tmp7 = tmp6;
      if (null != turnId) {
        tmp7 = tmp6;
        if (null == tmp6.turn_id) {
          tmp7 = tmp6;
          if (!tmp15Result.isSegmentOfTurn(tmp6, turnId)) {
            const obj2 = {};
            const merged = Object.assign(tmp6);
            obj2.turn_id = turnId;
            tmp7 = obj2;
          }
          tmp15Result = conjureChatTurns;
        }
      }
      const tmp11 = fn(tmp7);
      if (tmp11 !== value[turnIndex]) {
        const result = map.set(projectId, conjureChatTurns.replaceAt(value, turnIndex, tmp11));
        const tmp15Result3 = conjureChatTurns;
      }
    } else {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(value, 0);
      if (null != turnId) {
        const obj3 = { turnId };
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      items[arraySpreadResult] = fn(conjureChatHistory.newMessage("assistant", "", obj4));
      const result1 = map.set(projectId, items);
      const tmp15Result4 = conjureChatHistory;
    }
  }
}
function recordThinkingTransition(projectId) {
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  const hasOpenTurnResult = conjureChatTurns.hasOpenTurn(map.get(projectId));
  if (flag !== hasOpenTurnResult) {
    const result = map2.set(projectId, hasOpenTurnResult);
    const index = closure_10.indexOf(projectId);
    if (-1 !== index) {
      closure_10.splice(index, 1);
    }
    closure_10.unshift(projectId);
    if (hasOpenTurnResult) {
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
              let obj4 = conjureChatTurns;
              if (!obj4.isOutsideTurn(value[diff])) {
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
            const TERMINAL_STEP_KINDS = conjureStepTimeline.TERMINAL_STEP_KINDS;
            let hasItem = TERMINAL_STEP_KINDS.has(kind.kind);
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
            if (obj7.turnSettled(tmp15)) {
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(value2.slice(0, diff1), 0);
              const obj6 = {};
              const merged = Object.assign(tmp15);
              const _Date2 = Date;
              obj6.finished_at = Date.now();
              items[arraySpreadResult] = obj6;
              HermesBuiltin.arraySpread(value2.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = map.set(projectId, items);
            }
            obj7 = conjureChatTurns;
          }
        }
      }
    }
  }
}
function purgeProject(projectId) {
  let deleteResult = map.delete(projectId);
  const deleteResult1 = map5.delete(projectId);
  const deleteResult2 = set2.delete(projectId);
  const deleteResult3 = map1.delete(projectId);
  const deleteResult4 = map2.delete(projectId);
  const deleteResult5 = map3.delete(projectId);
  const deleteResult6 = map4.delete(projectId);
  const deleteResult7 = set.delete(projectId);
  const index = closure_10.indexOf(projectId);
  if (-1 !== index) {
    closure_10.splice(index, 1);
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
function applyAgentReactions(arr) {
  map = new Map();
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("assistant" === nextResult.role) {
      let steps = tmp2.steps;
      for (const item10022 of steps) {
        if ("reaction" === item10022.kind) {
          if (null != item10022.message_id) {
            let obj2 = map(10702);
            let result = obj2.agentReactionFromStep(item10022);
            if (null != result) {
              let result1 = map.set(item10022.message_id, tmp10);
            }
          }
        }
        continue;
      }
    }
    continue;
  }
  let mapped = arr;
  if (0 !== map.size) {
    mapped = arr.map((role) => {
      value = undefined;
      if ("user" === role.role) {
        value = map.get(role.id);
      }
      let tmp3 = role;
      if (null != value) {
        tmp3 = role;
        if (!obj.sameAgentReaction(role.agentReaction, value)) {
          const obj2 = {};
          const merged = Object.assign(role);
          obj2.agentReaction = value;
          tmp3 = obj2;
        }
        obj = conjureAgentReaction;
      }
      return tmp3;
    });
  }
  return mapped;
}
let closure_3 = ["disposition"];
let closure_4 = ["disposition"];
let map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_10 = [];
const map3 = new Map();
const map4 = new Map();
let set = new Set();
const set1 = new Set();
let closure_15 = [];
const Store = initializeDefault.Store;
class ConjureChatStore extends Store {}
const prototype = ConjureChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ConjureProjectStore);
};
prototype["getMessages"] = function getMessages(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_15;
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
  return conjureChatTurns.hasOpenTurn(map.get(projectId));
};
prototype["hasLoadedHistory"] = function hasLoadedHistory(projectId) {
  return map5.has(projectId);
};
prototype["getHistoryLoads"] = function getHistoryLoads(arg0) {
  let num = map6.get(arg0);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["isHistoryUnavailable"] = function isHistoryUnavailable(projectId) {
  return set2.has(projectId);
};
prototype["getFinishedAt"] = function getFinishedAt(id) {
  let tmp = null;
  if (!obj.hasOpenTurn(map.get(id))) {
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
  return set.has(projectId);
};
prototype["isSaving"] = function isSaving(arg0) {
  return set1.has(arg0);
};
prototype["getActivityOrderedProjectIds"] = function getActivityOrderedProjectIds() {
  return closure_10.slice();
};
const map5 = new Map();
const set2 = new Set();
const map6 = new Map();
const conjureChatStore = new ConjureChatStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set.size) {
                if (0 === set1.size) {
                  if (0 === map5.size) {
                    if (0 === set2.size) {
                      if (0 === closure_10.length) {
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
    set.clear();
    set1.clear();
    map5.clear();
    set2.clear();
    closure_10.length = 0;
  },
  CONJURE_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    ({ projectId, entries, cursor, degraded } = arg0);
    set = undefined;
    c1 = undefined;
    let num2;
    let num = map6.get(projectId);
    if (num == null) {
      num = 0;
    }
    const result = map6.set(projectId, num + 1);
    value = map5.get(projectId);
    if (map5.has(projectId)) {
      value2 = map.get(projectId);
      if (value2 == null) {
        value2 = [];
      }
      let items = value2;
    } else {
      items = [];
    }
    let tmp5 = cursor;
    if (cursor == null) {
      tmp5 = null;
    }
    const result1 = map5.set(projectId, tmp5);
    if (true === degraded) {
      set2.add(projectId);
    } else {
      set2.delete(projectId);
    }
    map4.delete(projectId);
    set.delete(projectId);
    set1.delete(projectId);
    set = new Set();
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
    const messagesFromHistoryResult = conjureChatHistory.messagesFromHistory(found);
    c1 = messagesFromHistoryResult;
    num2 = -1;
    if (null != cursor) {
      num2 = -1;
      if (true !== degraded) {
        num2 = messagesFromHistoryResult.findIndex((id) => null != id.id);
      }
    }
    let num3 = -1;
    if (-1 !== num2) {
      num3 = items.findIndex((id) => id.id === _undefined[num2].id);
    }
    if (-1 !== num3) {
      if (value == null) {
        value = null;
      }
      const result2 = map5.set(projectId, value);
    }
    let tmp21 = messagesFromHistoryResult;
    if (-1 !== num3) {
      const items1 = [];
      HermesBuiltin.arraySpread(
        messagesFromHistoryResult.slice(num2),
        HermesBuiltin.arraySpread(items.slice(0, num3), 0),
      );
      tmp21 = items1;
      const arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, num3), 0);
    }
    const result3 = map.set(projectId, applyAgentReactions(conjureChatHistory.foldDividers(tmp21)));
    recordThinkingTransition(projectId);
    const tmp16Result = conjureChatHistory;
  },
  CONJURE_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    ({ projectId, entries } = cursor);
    set = undefined;
    const result = map5.set(projectId, cursor.cursor);
    if (0 !== entries.length) {
      let items1 = map.get(projectId);
      if (items1 == null) {
        items1 = [];
      }
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
      const found = conjureChatHistory.messagesFromHistory(entries).filter((id) => {
        let tmp = null == id.id;
        if (!tmp) {
          tmp = !set.has(id.id);
        }
        return tmp;
      });
      const messagesFromHistoryResult = conjureChatHistory.messagesFromHistory(entries);
      let items = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(found, 0));
      const result1 = map.set(projectId, applyAgentReactions(conjureChatHistory.foldDividers(items)));
    }
  },
  CONJURE_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
    ({ projectId, id } = optimisticId);
    optimisticId = optimisticId.optimisticId;
    const held = optimisticId.held;
    c2 = undefined;
    ({ content, userId, timestamp, attachments } = optimisticId);
    let items2 = map.get(projectId);
    if (items2 == null) {
      items2 = [];
    }
    const findIndexResult = items2.findIndex((id) => id.id === id);
    c2 = findIndexResult;
    if (-1 !== findIndexResult) {
      if (true === items2[findIndexResult].held) {
        if (true !== held) {
          const mapped = items2.map((item, index) => {
            let tmp = item;
            if (index === c2) {
              const obj = {};
              const merged = Object.assign(item);
              obj.held = undefined;
              tmp = obj;
            }
            return tmp;
          });
          if (!obj4.hasOpenTurn(mapped)) {
            mapped.push(conjureChatHistory.newMessage("assistant", ""));
            const tmp16Result = conjureChatHistory;
          }
          const result = map.set(projectId, mapped);
          recordThinkingTransition(projectId);
          obj4 = conjureChatTurns;
        }
      }
      return false;
    } else {
      const obj2 = { ts: timestamp, id, userId, attachments };
      const newMessageResult = conjureChatHistory.newMessage("user", content, obj2);
      let hasOpenTurnResult = true === held;
      if (hasOpenTurnResult) {
        newMessageResult.held = true;
      }
      let num = -1;
      if (null != optimisticId) {
        num = items2.findIndex((id) => id.id === optimisticId);
      }
      if (-1 !== num) {
        newMessageResult.render_id = items2[num].render_id;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items2.slice(0, num), 0);
        items[arraySpreadResult] = newMessageResult;
        HermesBuiltin.arraySpread(items2.slice(num + 1), arraySpreadResult + 1);
        const result1 = map.set(projectId, items);
        recordThinkingTransition(projectId);
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items2, 0)] = newMessageResult;
        if (!hasOpenTurnResult) {
          hasOpenTurnResult = conjureChatTurns.hasOpenTurn(items1);
          const tmp22Result = conjureChatTurns;
        }
        if (!hasOpenTurnResult) {
          items1.push(conjureChatHistory.newMessage("assistant", ""));
          const tmp22Result2 = conjureChatHistory;
        }
        const result2 = map.set(projectId, items1);
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
          num4 = conjureChatTurns.findTurnSegment(arr3, activeTurnId);
        }
        let tmp9 = num4;
        let arr5 = arr3;
        if ("steered" === disposition) {
          tmp9 = num4;
          arr5 = arr3;
          if (-1 === num4) {
            tmp9 = num4;
            arr5 = arr3;
            if (null != activeTurnId) {
              const turnIndex = conjureChatTurns.resolveTurnIndex(arr3, activeTurnId);
              tmp9 = num4;
              arr5 = arr3;
              if (-1 !== turnIndex) {
                tmp9 = num4;
                arr5 = arr3;
                if (turnIndex < findIndexResult) {
                  const obj4 = {};
                  const merged1 = Object.assign(arr3[turnIndex]);
                  obj4.turn_id = activeTurnId;
                  if (0 === obj4.steps.length) {
                    const items1 = [];
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(
                      arr3.slice(turnIndex + 1, findIndexResult + 1),
                      HermesBuiltin.arraySpread(arr3.slice(0, turnIndex), 0),
                    );
                    items1[arraySpreadResult12] = obj4;
                    HermesBuiltin.arraySpread(arr3.slice(findIndexResult + 1), arraySpreadResult12 + 1);
                    const result = map.set(projectId, items1);
                    recordThinkingTransition(projectId);
                    const arraySpreadResult11 = HermesBuiltin.arraySpread(arr3.slice(0, turnIndex), 0);
                  } else {
                    const items2 = [];
                    const arraySpreadResult14 = HermesBuiltin.arraySpread(arr3.slice(0, turnIndex), 0);
                    items2[arraySpreadResult14] = obj4;
                    HermesBuiltin.arraySpread(arr3.slice(turnIndex + 1), arraySpreadResult14 + 1);
                    tmp9 = turnIndex;
                    arr5 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp9) {
          if (tmp9 <= findIndexResult) {
            let everyResult = null != tmp52;
            if (everyResult) {
              everyResult = "assistant" === tmp52.role;
            }
            if (everyResult) {
              everyResult = null == tmp52.turn_id;
            }
            if (everyResult) {
              const steps = tmp52.steps;
              everyResult = steps.every((kind) => "preview_ready" === kind.kind);
            }
            if (everyResult) {
              everyResult = !conjureChatTurns.isOutsideTurn(tmp52);
            }
            if (everyResult) {
              everyResult = !conjureChatTurns.turnSettled(tmp52);
            }
            if (everyResult) {
              let sum = findIndexResult + 2;
            } else {
              sum = findIndexResult + 1;
            }
            const items3 = [,];
            const arraySpreadResult16 = HermesBuiltin.arraySpread(arr5.slice(0, tmp9), 0);
            const obj7 = {};
            const merged2 = Object.assign(arr5[tmp9]);
            obj7.continued = true;
            let finished_at = arr5[tmp9].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            obj7.finished_at = finished_at;
            items3[arraySpreadResult16] = obj7;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(
              arr5.slice(tmp9 + 1, findIndexResult + 1),
              arraySpreadResult16 + 1,
            );
            const obj9 = { turnId: activeTurnId };
            items3[arraySpreadResult17] = conjureChatHistory.newMessage("assistant", "", obj9);
            HermesBuiltin.arraySpread(arr5.slice(sum), arraySpreadResult17 + 1);
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
  CONJURE_CHAT_MESSAGE_REACTION: function handleChatMessageReaction(arg0) {
    ({ projectId, id: require, reaction } = arg0);
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
        if (!obj3.sameAgentReaction(value[findIndexResult].agentReaction, reaction)) {
          const obj2 = {};
          const merged = Object.assign(value[findIndexResult]);
          obj2.agentReaction = reaction;
          const result = map.set(projectId, conjureChatTurns.replaceAt(value, findIndexResult, obj2));
          const tmpResult = conjureChatTurns;
        }
        obj3 = conjureAgentReaction;
      }
      return false;
    }
  },
  CONJURE_CHAT_MESSAGE_CANCELLED: function handleChatMessageCancelled(withdrawn) {
    ({ projectId, id: require } = withdrawn);
    let id;
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      let tmp;
      if (true === withdrawn.withdrawn) {
        tmp = value[value.findIndex(value, (id) => id.id === require) + 1];
      }
      id = null;
      if (null != tmp) {
        id = null;
        if ("assistant" === tmp.role) {
          id = null;
          if ("" === tmp.content) {
            id = null;
            if (null == tmp.turn_id) {
              id = null;
              if (0 === tmp.steps.length) {
                id = tmp.id;
              }
            }
          }
        }
      }
      const found = value.filter((id) => {
        let tmp2 = id.id !== require && id.in_reply_to !== tmp;
        if (tmp2) {
          tmp2 = id.id !== id;
        }
        return tmp2;
      });
      if (found.length === value.length) {
        return false;
      } else {
        const result = map.set(projectId, found);
        if (null != id) {
          recordThinkingTransition(projectId);
        }
      }
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
      const obj3 = { ts: timestamp, id };
      const newMessageResult = conjureChatHistory.newMessage("assistant", content, obj3);
      newMessageResult.kind = "side_reply";
      newMessageResult.in_reply_to = inReplyTo;
      const findIndexResult = value.findIndex((id) => id.id === inReplyTo);
      if (-1 !== findIndexResult) {
        const disposition = value[findIndexResult].disposition;
        if (null != disposition) {
          newMessageResult.acknowledges = disposition;
        }
        let tmp8 = "answered" === disposition;
        if (tmp8) {
          let everyResult = null != tmp9 && "assistant" === tmp9.role && null == tmp9.turn_id;
          if (everyResult) {
            const steps = tmp9.steps;
            everyResult = steps.every((kind) => "preview_ready" === kind.kind);
          }
          if (everyResult) {
            everyResult = !conjureChatTurns.isOutsideTurn(tmp9);
            const tmpResult = conjureChatTurns;
          }
          if (everyResult) {
            everyResult = !conjureChatTurns.turnSettled(tmp9);
            const tmpResult2 = conjureChatTurns;
          }
          tmp8 = everyResult;
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult + 1), 0);
        items[arraySpreadResult] = newMessageResult;
        if (tmp8) {
          let sum = findIndexResult + 2;
        } else {
          sum = findIndexResult + 1;
        }
        const sum1 = arraySpreadResult + 1;
        HermesBuiltin.arraySpread(value.slice(sum), sum1);
        const result = map.set(projectId, items);
        if (tmp8) {
          recordThinkingTransition(projectId);
        }
      } else {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(value, 0)] = newMessageResult;
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
      const obj3 = { ts: timestamp, id };
      const newMessageResult = id(10701).newMessage("assistant", content, obj3);
      newMessageResult.kind = "publish_notice";
      newMessageResult.publishNotice = publishNotice;
      newMessageResult.finished = true;
      const findLastIndexResult = value.findLastIndex((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          tmp = !id(dependencyMap[2]).isOutsideTurn(role);
          const obj = id(dependencyMap[2]);
        }
        return tmp;
      });
      let turn_id = null;
      if (-1 !== findLastIndexResult) {
        turn_id = null;
        if (!tmpResult.turnSettled(value[findLastIndexResult])) {
          turn_id = value[findLastIndexResult];
        }
        tmpResult = id(10699);
      }
      if (null != turn_id) {
        if (0 !== turn_id.steps.length) {
          let items = [, ,];
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findLastIndexResult), 0);
          const obj4 = {};
          const merged = Object.assign(turn_id);
          obj4.continued = true;
          let finished_at = turn_id.finished_at;
          if (finished_at == null) {
            const _Date = Date;
            finished_at = Date.now();
          }
          obj4.finished_at = finished_at;
          items[arraySpreadResult] = obj4;
          let arraySpreadResult4 = HermesBuiltin.arraySpread(
            value.slice(findLastIndexResult + 1),
            arraySpreadResult + 1,
          );
          items[arraySpreadResult4] = newMessageResult;
          if (null != turn_id.turn_id) {
            const obj5 = { turnId: null };
            turn_id = turn_id.turn_id;
            obj5.turnId = turn_id;
            let obj6 = obj5;
          } else {
            obj6 = {};
          }
          arraySpreadResult4 = arraySpreadResult4 + 1;
          items[arraySpreadResult4] = id(10701).newMessage("assistant", "", obj6);
          items = map.set(projectId, items);
          const tmpResult2 = id(10701);
        } else {
          const items1 = [,];
          const arraySpreadResult6 = HermesBuiltin.arraySpread(
            value.slice(findLastIndexResult + 1),
            HermesBuiltin.arraySpread(value.slice(0, findLastIndexResult), 0),
          );
          items1[arraySpreadResult6] = newMessageResult;
          items1[arraySpreadResult6 + 1] = turn_id;
          const result = map.set(projectId, items1);
          const arraySpreadResult5 = HermesBuiltin.arraySpread(value.slice(0, findLastIndexResult), 0);
        }
      } else {
        const items2 = [];
        items2[HermesBuiltin.arraySpread(value, 0)] = newMessageResult;
        const result1 = map.set(projectId, items2);
      }
      const obj2 = id(10701);
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
      ({ ts: obj4.ts, id: obj4.id } = event);
      const newMessageResult = conjureChatHistory.newMessage("assistant", "", { ts: null, id: null });
      newMessageResult.kind = "project_event";
      newMessageResult.projectEvent = event;
      newMessageResult.finished = true;
      const items = [];
      items[HermesBuiltin.arraySpread(value, 0)] = newMessageResult;
      const result = map.set(projectId, items);
      const obj2 = { ts: null, id: null };
    }
  },
  CONJURE_CHAT_CONTEXT_SWITCH: function handleChatContextSwitch(arg0) {
    ({ projectId, contextSwitch } = arg0);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const findIndexResult = value.findIndex((contextSwitch) => {
        contextSwitch = contextSwitch.contextSwitch;
        let id;
        if (contextSwitch != null) {
          id = contextSwitch.id;
        }
        return id === contextSwitch.id;
      });
      if ("undone" === contextSwitch.status) {
        if (-1 !== findIndexResult) {
          const items = [];
          HermesBuiltin.arraySpread(
            value.slice(findIndexResult + 1),
            HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0),
          );
          const result = map.set(projectId, items);
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, findIndexResult), 0);
        }
        return -1 !== findIndexResult;
      } else if (-1 === findIndexResult) {
        if ("active" !== contextSwitch.status) {
          if ("reverted" !== contextSwitch.status) {
            return false;
          }
        }
        ({ ts: obj5.ts, id: obj5.id } = contextSwitch);
        const newMessageResult = conjureChatHistory.newMessage("assistant", "", { ts: null, id: null });
        newMessageResult.kind = "context_boundary";
        newMessageResult.contextSwitch = contextSwitch;
        newMessageResult.finished = true;
        let num = -1;
        if ("reverted" !== contextSwitch.status) {
          num = value.findIndex((role) => {
            let tmp = "user" === role.role;
            if (tmp) {
              tmp = role.id === contextSwitch.message_id;
            }
            return tmp;
          });
        }
        if (-1 !== num) {
          const items1 = [];
          const arraySpreadResult5 = HermesBuiltin.arraySpread(value.slice(0, num), 0);
          items1[arraySpreadResult5] = newMessageResult;
          HermesBuiltin.arraySpread(value.slice(num), arraySpreadResult5 + 1);
          const result1 = map.set(projectId, items1);
        } else {
          const items2 = [];
          items2[HermesBuiltin.arraySpread(value, 0)] = newMessageResult;
          const result2 = map.set(projectId, items2);
        }
        const obj3 = { ts: null, id: null };
      } else {
        const obj7 = {};
        const merged = Object.assign(value[findIndexResult]);
        obj7.contextSwitch = contextSwitch;
        const result3 = map.set(projectId, conjureChatTurns.replaceAt(value, findIndexResult, obj7));
      }
    }
  },
  CONJURE_CHAT_STEP_APPEND: function handleChatStepAppend(turnId) {
    ({ projectId, step } = turnId);
    turnId = turnId.turnId;
    value = map.get(projectId);
    let tmp2 = "preview_ready" !== step.kind;
    if (!tmp2) {
      tmp2 = null != turnId;
    }
    if (!tmp2) {
      let tmp5 = null != value;
      if (tmp5) {
        tmp5 = -1 !== step(10699).resolveTurnIndex(value, undefined);
        let obj2 = step(10699);
      }
      tmp2 = tmp5;
    }
    if (tmp2) {
      patchTurn(projectId, turnId, (steps) => {
        const recordStepResult = conjureStepTimeline.recordStep(steps.steps, step);
        let tmp2 = steps;
        if (recordStepResult !== steps.steps) {
          const obj2 = {};
          const merged = Object.assign(steps);
          obj2.steps = recordStepResult;
          tmp2 = obj2;
        }
        return tmp2;
      });
      const tmp10 = map.get(projectId) !== value;
      if (tmp10) {
        recordThinkingTransition(projectId);
      }
      tmp2 = tmp10;
    }
    return tmp2;
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
            return _objectWithoutProperties(disposition, closure_1_3);
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
    if (!obj2.hasOpenTurn(map.get(projectId))) {
      map4.delete(projectId);
      set.delete(projectId);
    }
    set1.delete(projectId);
    recordThinkingTransition(projectId);
    obj2 = conjureChatTurns;
  },
  CONJURE_CHAT_INTERRUPTED: function handleChatInterrupted(projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const newMessageResult = conjureChatHistory.newMessage("assistant", "");
      newMessageResult.finished = true;
      const _Date = Date;
      newMessageResult.finished_at = Date.now();
      newMessageResult.interrupted = true;
      const items = [];
      items[HermesBuiltin.arraySpread(value, 0)] = newMessageResult;
      const result = map.set(projectId, items);
    }
  },
  CONJURE_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    let tmp = null != value;
    if (tmp) {
      const someResult = value.some(conjureChatTurns.stoppable);
      if (someResult) {
        const result = map.set(
          projectId,
          value.map((item) => {
            let tmp = item;
            if (obj.stoppable(item)) {
              const obj2 = {};
              const merged = Object.assign(item);
              obj2.stopRequested = true;
              tmp = obj2;
            }
            return tmp;
          }),
        );
      }
      tmp = someResult;
    }
    return tmp;
  },
  CONJURE_CHAT_PROVISIONAL_TODO: function handleChatProvisionalTodo(projectId) {
    projectId = projectId.projectId;
    ({ turnId, text } = projectId);
    value = map.get(projectId);
    let flag = false;
    if (null != value) {
      const findTurnSegmentResult = conjureChatTurns.findTurnSegment(value, turnId);
      let flag2 = -1 !== findTurnSegmentResult;
      if (flag2) {
        const obj3 = {};
        const merged = Object.assign(value[findTurnSegmentResult]);
        obj3.provisionalTodo = text;
        const result = map.set(projectId, conjureChatTurns.replaceAt(value, findTurnSegmentResult, obj3));
        flag2 = true;
        const tmp2Result = conjureChatTurns;
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
            let tmp6 = role;
            if (obj.isSegmentOfTurn(role, closure_1_0)) {
              const obj2 = {};
              const merged = Object.assign(role);
              obj2.sourceSha = tmp2;
              tmp6 = obj2;
            }
            tmp = tmp6;
            obj = conjureChatTurns;
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
    if (compacting === set.has(projectId)) {
      return false;
    } else if (compacting) {
      set.add(projectId);
    } else {
      set.delete(projectId);
    }
  },
  CONJURE_CHAT_SAVING_SET: function handleChatSavingSet(arg0) {
    ({ projectId, saving } = arg0);
    if (saving === set1.has(projectId)) {
      return false;
    } else if (saving) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_CHAT_USAGE_SET: function handleChatUsageSet(projectId) {
    const result = map3.set(projectId.projectId, projectId.project);
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
    const deleteResult = set.delete(projectId);
    let deleteResult2 = map4.delete(projectId);
    value = map.get(projectId);
    if (null != value) {
      if (
        value.some((role) => {
          let tmp = "assistant" === role.role;
          if (tmp) {
            tmp = !conjureChatTurns.turnSettled(role);
          }
          return tmp;
        })
      ) {
        const result = map.set(
          projectId,
          value.map((disposition) => {
            if (null != disposition.disposition) {
              disposition = disposition.disposition;
              return _objectWithoutProperties(disposition, closure_1_4);
            } else {
              let tmp7 = disposition;
              if ("assistant" === disposition.role) {
                tmp7 = disposition;
                if (!obj3.turnSettled(disposition)) {
                  const obj = {};
                  const merged = Object.assign(disposition);
                  obj.provisionalTodo = undefined;
                  const items = [];
                  const obj2 = { type: "step", kind: "terminal_error", message: null };
                  const intl = util.intl;
                  obj2.message = intl.string(_modDef3830.lmiuFX);
                  items[HermesBuiltin.arraySpread(disposition.steps, 0)] = obj2;
                  obj.steps = items;
                  tmp7 = obj;
                  const arraySpreadResult = HermesBuiltin.arraySpread(disposition.steps, 0);
                }
                obj3 = conjureChatTurns;
              }
              return tmp7;
            }
          }),
        );
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
    if (map5.has(project.id)) {
      return false;
    } else {
      const result = map5.set(project.id, null);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map5.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatStore.tsx");

export default conjureChatStore;
export const getOlderHistoryCursor = function getOlderHistoryCursor(arg0) {
  value = map5.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
