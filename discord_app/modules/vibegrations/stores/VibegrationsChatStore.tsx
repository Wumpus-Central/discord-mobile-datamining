// discord_app/modules/vibegrations/stores/VibegrationsChatStore.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsPlatformUtilsDefault from "../lib/VibegrationsPlatformUtils.native.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import FamilyCenterStore from "../../parent_tools/FamilyCenterStore.tsx";
import NotificationSettingsStore from "../../../stores/NotificationSettingsStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import VibegrationsProjectStore from "VibegrationsProjectStore.tsx";

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
      startsWithResult = id.startsWith(closure_1_30);
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
  if (tmp5) {
    tmp.ideas = ts.ideas;
  }
  if (null != ts.publish_cta) {
    tmp.publishCta = ts.publish_cta;
  }
  if (null != ts.publish_notice) {
    tmp.publishNotice = ts.publish_notice;
  }
  if (tmp6) {
    tmp.clarification = ts.clarification;
  }
  if (null != ts.restore_proposal) {
    tmp.restoreProposal = ts.restore_proposal;
  }
  if (null != ts.source_sha) {
    tmp.sourceSha = ts.source_sha;
  }
  if (tmp7) {
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
  if (tmp9) {
    tmp.secretRequest = ts.secret_request;
  }
  if (null != ts.settings_request) {
    tmp.settingsRequest = ts.settings_request;
  }
  if (tmp10) {
    tmp.intake = ts.intake;
  }
  let steps = ts.steps;
  if (steps == null) {
    steps = [];
  }
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp12 = nextResult;
    let tmp13 = "awaiting_user" === nextResult.kind;
    if (tmp13) {
      tmp13 = "secrets" === tmp12.action;
    }
    if (tmp13) {
      let obj2 = { action: null };
      obj2.action = tmp12.action;
      tmp.awaitingUser = obj2;
    }
    continue;
  }
  return tmp;
}
function resolveTurnIndex(value, turnId) {
  let num = -1;
  if (null != turnId) {
    let diff = value.length - 1;
    num = -1;
    if (0 <= diff) {
      num = diff;
      while (value[diff].turn_id !== turnId) {
        diff = diff - 1;
        num = -1;
        if (0 > diff) {
          break;
        }
      }
    }
  }
  if (-1 !== num) {
    return num;
  } else {
    let diff1 = value.length - 1;
    if (0 <= diff1) {
      while (true) {
        let tmp3 = value[diff1];
        if ("assistant" === tmp3.role) {
          let someResult =
            true === tmp3.finished ||
            true === tmp3.continued ||
            "" !== tmp3.content ||
            null != tmp3.proposal ||
            null != tmp3.clarification ||
            null != tmp3.intake;
          if (!someResult) {
            let steps = tmp3.steps;
            someResult = steps.some((kind) => set.has(kind.kind));
          }
          if (!someResult) {
            if (null == tmp3.turn_id) {
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
function recordThinkingTransition(projectId) {
  let tmp51;
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  const tmp = hasOpenTurn(map.get(projectId));
  if (flag !== tmp) {
    const result = map2.set(projectId, tmp);
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
      const value3 = map.get(projectId);
      if (null != value3) {
        let diff1 = value3.length - 1;
        if (0 <= diff1) {
          while ("assistant" !== value3[diff1].role) {
            diff1 = diff1 - 1;
          }
          if (null == value3[diff1].finished_at) {
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
              const arraySpreadResult = HermesBuiltin.arraySpread(value3.slice(0, diff1), 0);
              const obj4 = {};
              const merged = Object.assign(tmp15);
              const _Date2 = Date;
              obj4.finished_at = Date.now();
              items[arraySpreadResult] = obj4;
              HermesBuiltin.arraySpread(value3.slice(diff1 + 1), arraySpreadResult + 1);
              const result2 = map.set(projectId, items);
            }
          }
        }
      }
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        let result4 = VibegrationsPlatformUtilsDefault.areTurnNotificationsDisabled();
        if (!result4) {
          result4 = SelfPresenceStore.getStatus() === constants.DND;
        }
        if (!result4) {
          const FocusMode = UserSettings.FocusMode;
          result4 = FocusMode.getSetting();
        }
        if (!result4) {
          result4 = FamilyCenterStore.isCurrentUserInRestrictedHours();
        }
        if (!result4) {
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
            const tmp74Result = VibegrationsPlatformUtilsDefault;
          }
          if (guild_id == null) {
            guild_id = project.guild_id;
          }
          if (guild_id == null) {
            guild_id = project.preview_guild_id;
          }
          const value4 = map.get(projectId);
          let tmp45 = null;
          if (null != value4) {
            let diff2 = value4.length - 1;
            tmp45 = null;
            if (0 <= diff2) {
              while (true) {
                if ("assistant" === value4[diff2].role) {
                  let tmp48 = value4[diff2];
                  let tmp49 = "side_reply" === tmp48.kind || "publish_notice" === tmp48.kind;
                  if (!tmp49) {
                    break;
                  }
                }
                diff2 = diff2 - 1;
                tmp45 = null;
              }
              tmp45 = value4[diff2];
            }
          }
          let content = null;
          if (null != tmp45) {
            if ("" !== str11.trim()) {
              content = tmp45.content;
            } else if (null != tmp45.proposal) {
              content = tmp45.proposal.summary;
            } else if (null != tmp45.clarification) {
              const first = tmp45.clarification.questions[0];
              let question;
              if (first != null) {
                question = first.question;
              }
              if (question == null) {
                question = null;
              }
              content = question;
            } else if (null != tmp45.intake) {
              content = tmp45.intake.intro.lead;
            } else {
              let diff3 = tmp45.steps.length - 1;
              content = null;
              if (0 <= diff3) {
                while (true) {
                  tmp51 = tmp45.steps[diff3];
                  if ("error" !== tmp51.kind) {
                    if ("terminal_error" !== tmp51.kind) {
                      if ("preview_ready" === tmp51.kind) {
                        let intl = util.intl;
                        content = intl.string(_modDef3715["78YNh7"]);
                      } else {
                        diff3 = diff3 - 1;
                        content = null;
                      }
                    }
                  }
                  if (null != tmp51.message) {
                    if ("" !== tmp51.message) {
                      break;
                    }
                  }
                }
                content = tmp51.message;
              }
            }
            str11 = tmp45.content;
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
              const obj6 = { projectId, guildId: null, title: null, body: null, route: null, sound: null, volume: 0.4 };
              if (guild_id == null) {
                guild_id = null;
              }
              obj6.guildId = guild_id;
              obj6.title = project.name;
              obj6.body = content;
              obj6.route = CHANNELResult;
              let tmp64;
              if (!isSoundDisabledResult) {
                tmp64 = bit_message1;
              }
              obj6.sound = tmp64;
              const result3 = VibegrationsPlatformUtilsDefault.presentTurnNotification(obj6);
            }
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
  const index = closure_22.indexOf(projectId);
  if (-1 !== index) {
    closure_22.splice(index, 1);
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
const Constants = fn(1074);
({ Routes: closure_14, StatusTypes: closure_15 } = Constants);
const StaticChannelRoute = fn(2052).StaticChannelRoute;
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
let c30 = "turn:";
const Store = initializeDefault.Store;
class VibegrationsChatStore extends Store {}
const prototype = VibegrationsChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    FamilyCenterStore,
    NotificationSettingsStore,
    SelectedChannelStore,
    SelectedGuildStore,
    SelfPresenceStore,
    VibegrationsProjectStore,
  );
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
prototype["isThinking"] = function isThinking(id) {
  return hasOpenTurn(map.get(id));
};
prototype["hasLoadedHistory"] = function hasLoadedHistory(projectId) {
  return map5.has(projectId);
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
const set2 = new Set();
const vibegrationsChatStore = new VibegrationsChatStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === map4.size) {
              if (0 === set1.size) {
                if (0 === map5.size) {
                  if (0 === set2.size) {
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
      }
    }
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set1.clear();
    map5.clear();
    set2.clear();
    closure_22.length = 0;
    width = 0;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(degraded) {
    ({ projectId, entries, cursor } = degraded);
    if (cursor == null) {
      cursor = null;
    }
    const result = map5.set(projectId, cursor);
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
    const result1 = map.set(projectId, found.map(newMessageFromHistory));
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_HISTORY_PREPEND: function handleChatHistoryPrepend(cursor) {
    ({ projectId, entries } = cursor);
    set = undefined;
    const result = map5.set(projectId, cursor.cursor);
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
      const result1 = map.set(projectId, items);
    }
  },
  VIBEGRATIONS_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(optimisticId) {
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
  VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function handleChatMessageDisposition(arg0) {
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
        let tmp10 = num4;
        let arr4 = arr3;
        if ("steered" === disposition) {
          tmp10 = num4;
          arr4 = arr3;
          if (-1 === num4) {
            tmp10 = num4;
            arr4 = arr3;
            if (null != activeTurnId) {
              const tmp35 = resolveTurnIndex(arr3, activeTurnId);
              tmp10 = num4;
              arr4 = arr3;
              if (-1 !== tmp35) {
                tmp10 = num4;
                arr4 = arr3;
                if (tmp35 < findIndexResult) {
                  const obj3 = {};
                  const merged1 = Object.assign(arr3[tmp35]);
                  obj3.turn_id = activeTurnId;
                  if (0 === obj3.steps.length) {
                    const items1 = [];
                    const arraySpreadResult12 = HermesBuiltin.arraySpread(
                      arr3.slice(tmp35 + 1, findIndexResult + 1),
                      HermesBuiltin.arraySpread(arr3.slice(0, tmp35), 0),
                    );
                    items1[arraySpreadResult12] = obj3;
                    HermesBuiltin.arraySpread(arr3.slice(findIndexResult + 1), arraySpreadResult12 + 1);
                    const result = map.set(projectId, items1);
                    recordThinkingTransition(projectId);
                    const arraySpreadResult11 = HermesBuiltin.arraySpread(arr3.slice(0, tmp35), 0);
                  } else {
                    const items2 = [];
                    const arraySpreadResult14 = HermesBuiltin.arraySpread(arr3.slice(0, tmp35), 0);
                    items2[arraySpreadResult14] = obj3;
                    HermesBuiltin.arraySpread(arr3.slice(tmp35 + 1), arraySpreadResult14 + 1);
                    tmp10 = tmp35;
                    arr4 = items2;
                  }
                }
              }
            }
          }
        }
        if (-1 !== tmp10) {
          if (tmp10 <= findIndexResult) {
            const items3 = [,];
            const arraySpreadResult16 = HermesBuiltin.arraySpread(arr4.slice(0, tmp10), 0);
            const obj4 = {};
            const merged2 = Object.assign(arr4[tmp10]);
            obj4.continued = true;
            let finished_at = arr4[tmp10].finished_at;
            if (finished_at == null) {
              const _Date = Date;
              finished_at = Date.now();
            }
            obj4.finished_at = finished_at;
            items3[arraySpreadResult16] = obj4;
            const arraySpreadResult17 = HermesBuiltin.arraySpread(
              arr4.slice(tmp10 + 1, findIndexResult + 1),
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
  VIBEGRATIONS_CHAT_SIDE_REPLY: function handleChatSideReply(inReplyTo) {
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
  VIBEGRATIONS_CHAT_PUBLISH_NOTICE: function handleChatPublishNotice(arg0) {
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
  VIBEGRATIONS_CHAT_STEP_APPEND: function handleChatStepAppend(arg0) {
    ({ projectId, step, turnId } = arg0);
    value = map.get(projectId);
    if (null != value) {
      const tmp29 = resolveTurnIndex(value, turnId);
      if (-1 !== tmp29) {
        let tmp11 = tmp10;
        if (null != turnId) {
          tmp11 = tmp10;
          if (null == tmp10.turn_id) {
            const obj2 = {};
            const merged = Object.assign(tmp10);
            obj2.turn_id = turnId;
            tmp11 = obj2;
          }
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, tmp29), 0);
        const obj3 = {};
        const merged1 = Object.assign(tmp11);
        const tmp21 = openTimeline(tmp11.steps);
        pushStep(tmp21, step);
        obj3.steps = tmp21.steps;
        items[arraySpreadResult] = obj3;
        HermesBuiltin.arraySpread(value.slice(tmp29 + 1), arraySpreadResult + 1);
        const result = map.set(projectId, items);
      } else {
        const items1 = [];
        if (null != turnId) {
          const obj4 = { turnId };
          let obj5 = obj4;
        } else {
          obj5 = {};
        }
        const tmp = newMessage("assistant", "", obj5);
        const obj6 = {};
        const merged2 = Object.assign(tmp);
        const tmp6 = openTimeline(tmp.steps);
        pushStep(tmp6, step);
        obj6.steps = tmp6.steps;
        items1[HermesBuiltin.arraySpread(value, 0)] = obj6;
        const result1 = map.set(projectId, items1);
        const arraySpreadResult4 = HermesBuiltin.arraySpread(value, 0);
      }
    }
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_TURN_FINISHED: function handleChatTurnFinished(arg0) {
    ({ projectId, summary, turnId } = arg0);
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
    value2 = map.get(projectId);
    if (null != value2) {
      let sum = resolveTurnIndex(value2, turnId);
      if (-1 !== sum) {
        let tmp10 = tmp9;
        if (null != turnId) {
          tmp10 = tmp9;
          if (null == tmp9.turn_id) {
            const obj2 = {};
            const merged = Object.assign(tmp9);
            obj2.turn_id = turnId;
            tmp10 = obj2;
          }
        }
        let items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value2.slice(0, sum), 0);
        let obj3 = {};
        const merged1 = Object.assign(tmp10);
        obj3.finished = true;
        const _Date2 = Date;
        obj3.finished_at = Date.now();
        obj3.provisionalTodo = undefined;
        if ("" !== tmp10.content) {
          summary = tmp10.content;
        } else if (summary == null) {
          summary = "";
        }
        obj3.content = summary;
        items[arraySpreadResult] = obj3;
        obj3 = value2.slice;
        sum = sum + 1;
        HermesBuiltin.arraySpread(obj3(sum), arraySpreadResult + 1);
        items = map.set(projectId, items);
      } else {
        const items1 = [];
        if (null != turnId) {
          const obj4 = { turnId };
          let obj5 = obj4;
        } else {
          obj5 = {};
        }
        const tmp3 = newMessage("assistant", "", obj5);
        const obj6 = {};
        const merged2 = Object.assign(tmp3);
        obj6.finished = true;
        const _Date = Date;
        obj6.finished_at = Date.now();
        obj6.provisionalTodo = undefined;
        if ("" !== tmp3.content) {
          let str3 = tmp3.content;
        } else {
          str3 = summary;
          if (summary == null) {
            str3 = "";
          }
        }
        obj6.content = str3;
        items1[HermesBuiltin.arraySpread(value2, 0)] = obj6;
        const result1 = map.set(projectId, items1);
        const arraySpreadResult4 = HermesBuiltin.arraySpread(value2, 0);
      }
    }
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
  VIBEGRATIONS_CHAT_STOP_REQUESTED: function handleChatStopRequested(projectId) {
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
  VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT: function handleChatSourceCheckpoint(arg0) {
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
            if (role.turn_id === require) {
              const obj = {};
              const merged = Object.assign(role);
              obj.sourceSha = tmp2;
              tmp = obj;
            } else {
              const _HermesInternal = HermesInternal;
              tmp = role;
            }
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
  VIBEGRATIONS_CHAT_TURN_PATCH: function handleChatTurnPatch(arg0) {
    ({ projectId, patch, turnId } = arg0);
    value = map.get(projectId);
    if (null != value) {
      const tmp29 = resolveTurnIndex(value, turnId);
      if (-1 !== tmp29) {
        let tmp12 = tmp11;
        if (null != turnId) {
          tmp12 = tmp11;
          if (null == tmp11.turn_id) {
            const obj2 = {};
            const merged = Object.assign(tmp11);
            obj2.turn_id = turnId;
            tmp12 = obj2;
          }
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, tmp29), 0);
        const obj3 = {};
        const merged1 = Object.assign(tmp12);
        const merged2 = Object.assign(patch);
        if ("todos" in patch) {
          obj3.provisionalTodo = undefined;
        }
        items[arraySpreadResult] = obj3;
        HermesBuiltin.arraySpread(value.slice(tmp29 + 1), arraySpreadResult + 1);
        const result = map.set(projectId, items);
      } else {
        const items1 = [];
        if (null != turnId) {
          const obj4 = { turnId };
          let obj5 = obj4;
        } else {
          obj5 = {};
        }
        const obj6 = {};
        const merged3 = Object.assign(newMessage("assistant", "", obj5));
        const merged4 = Object.assign(patch);
        if ("todos" in patch) {
          obj6.provisionalTodo = undefined;
        }
        items1[HermesBuiltin.arraySpread(value, 0)] = obj6;
        const result1 = map.set(projectId, items1);
        const arraySpreadResult4 = HermesBuiltin.arraySpread(value, 0);
      }
    }
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
                  obj2.message = intl.string(_modDef3715["wjWm+/"]);
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
  VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function handleProjectCreateSuccess(project) {
    project = project.project;
    if (map5.has(project.id)) {
      return false;
    } else {
      const result = map5.set(project.id, null);
    }
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    if (!purgeProject(projectId.projectId)) {
      return false;
    }
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    const items = [...map.keys(), ...map5.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsChatStore.tsx");

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
export const getOlderHistoryCursor = function getOlderHistoryCursor(projectId) {
  value = map5.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
export { replayTimeline };
