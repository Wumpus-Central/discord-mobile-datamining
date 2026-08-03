// === Module 15773: newMessageFromHistory ===

// Module 15773 (newMessageFromHistory)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import DesktopNotificationTypes from "DesktopNotificationTypes";
import handleConnectionOpen from "handleConnectionOpen";
import closure_6 from "handleConnectionOpen";
import filterPlayingActivities from "filterPlayingActivities";
import handleProjectUpsert from "handleProjectUpsert";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { Store } from "initialize";
import set from "handleConnectionOpen";

let c10;
let c9;
let unpackModuleId;
let require = arg1;
function newMessageFromHistory(role) {
  const ts = role.ts;
  const obj = { id: `m${tmp}`, role: role.role, content: role.content, steps: [], created_at: null };
  const sum = c23 + 1;
  c23 = sum;
  if (null != ts) {
    const _Date2 = Date;
    let parsed = Date.parse(ts);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  obj[4] = parsed;
  if (null != role.kind) {
    obj.kind = role.kind;
  }
  if (null != role.proposal) {
    obj.proposal = role.proposal;
  }
  return obj;
}
function recordThinkingTransition(projectId) {
  let tmp32;
  let obj = map2;
  let flag = map2.get(projectId);
  if (flag == null) {
    flag = false;
  }
  let value = map.get(projectId);
  let flag2 = false;
  if (null != value) {
    flag2 = false;
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        let someResult = true === tmp.finished;
        if (!someResult) {
          someResult = "" !== tmp.content;
        }
        if (!someResult) {
          someResult = null != tmp.proposal;
        }
        if (!someResult) {
          const steps = tmp.steps;
          someResult = steps.some((kind) => set.has(kind.kind));
        }
        tmp2 = !someResult;
      }
      flag2 = tmp2;
    }
  }
  if (flag !== flag2) {
    const result = obj.set(projectId, flag2);
    const index = arr.indexOf(projectId);
    if (-1 !== index) {
      arr4.splice(index, 1);
    }
    arr = arr.unshift(projectId);
    if (flag2) {
      map1.delete(projectId);
    } else {
      value = obj2.get(projectId);
      let tmp6;
      if (value != null) {
        tmp6 = value[value.length - 1];
      }
      let role;
      if (tmp6 != null) {
        role = tmp6.role;
      }
      let tmp8 = "assistant" === role;
      if (tmp8) {
        let someResult1 = "" !== tmp6.content.trim() || null != tmp6.proposal;
        if (!someResult1) {
          const steps2 = tmp6.steps;
          someResult1 = steps2.some((kind) => {
            let hasItem = set.has(kind.kind);
            if (hasItem) {
              hasItem = "terminal_error" !== kind.kind;
            }
            return hasItem;
          });
        }
        tmp8 = someResult1;
        const str4 = tmp6.content;
      }
      if (tmp8) {
        const _Date = Date;
        const result1 = obj3.set(projectId, Date.now());
      } else {
        obj3.delete(projectId);
      }
      project = project.getProject(projectId);
      if (null != project) {
        let setting = desktopType.getDesktopType() === constants2.NEVER;
        if (!setting) {
          setting = status.getStatus() === constants.DND;
        }
        if (!setting) {
          const FocusMode = require(3866) /* explicitContentFromProto */.FocusMode;
          setting = FocusMode.getSetting();
        }
        if (!setting) {
          setting = currentUserInRestrictedHours.isCurrentUserInRestrictedHours();
        }
        if (!setting) {
          const isSoundDisabledResult = obj10.isSoundDisabled(message1);
          guildId = guildId.getGuildId();
          let guild_id = null;
          if (null != guildId) {
            guild_id = null;
            if (obj4.getSelectedProjectId(guildId) === projectId) {
              guild_id = guildId;
            }
          }
          let isWindowFocusedResult = null != guild_id;
          if (isWindowFocusedResult) {
            isWindowFocusedResult = channelId.getChannelId() === StaticChannelRoute.VIBEGRATIONS;
          }
          if (isWindowFocusedResult) {
            isWindowFocusedResult = importDefault(12632).isWindowFocused();
            const obj5 = importDefault(12632);
          }
          if (guild_id == null) {
            guild_id = project.guild_id;
          }
          if (guild_id == null) {
            guild_id = project.preview_guild_id;
          }
          const value1 = obj2.get(projectId);
          let content = null;
          if (null != value1) {
            content = null;
            if (0 !== value1.length) {
              content = null;
              if ("assistant" === value1[value1.length - 1].role) {
                if ("" !== str7.trim()) {
                  content = tmp62.content;
                } else if (null != tmp62.proposal) {
                  content = tmp62.proposal.summary;
                } else {
                  let diff = tmp62.steps.length - 1;
                  content = null;
                  if (0 <= diff) {
                    while (true) {
                      tmp32 = tmp62.steps[diff];
                      let tmp33 = diff;
                      if ("error" !== tmp32.kind) {
                        if ("terminal_error" !== tmp32.kind) {
                          if ("preview_ready" === tmp32.kind) {
                            let tmp35 = require;
                            let tmp36 = dependencyMap;
                            let intl = require(1236) /* getSystemLocale */.intl;
                            let tmp37 = importDefault;
                            content = intl.string(importDefault(3261)["78YNh7"]);
                          } else {
                            diff = diff - 1;
                            content = null;
                          }
                        }
                      }
                      if (null != tmp32.message) {
                        if ("" !== tmp32.message) {
                          break;
                        }
                      }
                    }
                    content = tmp32.message;
                  }
                }
                str7 = tmp62.content;
              }
            }
          }
          if (null != content) {
            if (isWindowFocusedResult) {
              if (!isSoundDisabledResult) {
                require(10285) /* createSoundForPack */.playSound(tmp20, 0.4);
                const obj9 = require(10285) /* createSoundForPack */;
              }
            } else {
              let CHANNELResult = null;
              if (null != guild_id) {
                CHANNELResult = closure_9.CHANNEL(guild_id, StaticChannelRoute.VIBEGRATIONS, projectId);
              }
              require = CHANNELResult;
              const obj6 = importDefault(14496);
              const tmp44 = require(15774) /* registerAsset */;
              const name = project.name;
              obj = { tag: null, sound: null, volume: 0.4, fallbackDeepLink: null, onClick: null, isUserAvatar: false };
              const _HermesInternal = HermesInternal;
              obj[0] = "vibegrations-" + projectId;
              let tmp46;
              if (!isSoundDisabledResult) {
                tmp46 = tmp20;
              }
              obj[1] = tmp46;
              let notificationDeepLink;
              if (null != CHANNELResult) {
                notificationDeepLink = tmp41(12632).createNotificationDeepLink(CHANNELResult);
                const tmp41Result = tmp41(12632);
              }
              obj[3] = notificationDeepLink;
              let fn;
              if (null != CHANNELResult) {
                fn = () => CHANNELResult(outer1_2[15]).transitionTo(closure_0);
              }
              obj[4] = fn;
              obj6.showNotification(tmp44, name, content, { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" }, obj);
              tmp41 = importDefault;
            }
          }
        }
        obj10 = desktopType;
      }
      obj4 = project;
    }
  }
}
function purgeProject(arg0) {
  let deleteResult = map.delete(arg0);
  const deleteResult1 = map1.delete(arg0);
  const deleteResult2 = map2.delete(arg0);
  const index = arr.indexOf(arg0);
  if (-1 !== index) {
    arr.splice(index, 1);
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
    deleteResult = tmp6;
  }
  return deleteResult;
}
({ Routes: c9, StatusTypes: c10, DesktopNotificationTypes: unpackModuleId } = ME);
const message1 = "message1";
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
let closure_18 = [];
const map3 = new Map();
let c20 = 0;
let c21 = null;
let closure_22 = [];
let c23 = 0;
class VibegrationsChatStore extends Store {
}
const prototype = VibegrationsChatStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(freshTeenActivityWithMap, DesktopNotificationTypes, handleConnectionOpen, closure_6, filterPlayingActivities, handleProjectUpsert);
};
prototype["getMessages"] = function getMessages(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = closure_22;
  }
  return value;
};
prototype["isThinking"] = function isThinking(item10008) {
  const value = map.get(item10008);
  let flag = false;
  if (null != value) {
    flag = false;
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        let someResult = true === tmp.finished;
        if (!someResult) {
          someResult = "" !== tmp.content;
        }
        if (!someResult) {
          someResult = null != tmp.proposal;
        }
        if (!someResult) {
          const steps = tmp.steps;
          someResult = steps.some((kind) => set.has(kind.kind));
        }
        tmp2 = !someResult;
      }
      flag = tmp2;
    }
  }
  return flag;
};
prototype["getFinishedAt"] = function getFinishedAt(arg0) {
  let value = map.get(arg0);
  let flag = false;
  if (null != value) {
    flag = false;
    if (0 !== value.length) {
      let tmp2 = "assistant" === tmp.role;
      if (tmp2) {
        let someResult = true === tmp.finished;
        if (!someResult) {
          someResult = "" !== tmp.content;
        }
        if (!someResult) {
          someResult = null != tmp.proposal;
        }
        if (!someResult) {
          const steps = tmp.steps;
          someResult = steps.some((kind) => set.has(kind.kind));
        }
        tmp2 = !someResult;
      }
      flag = tmp2;
    }
  }
  let tmp4 = null;
  if (!flag) {
    value = map1.get(arg0);
    if (value == null) {
      value = null;
    }
    tmp4 = value;
  }
  return tmp4;
};
prototype["getProjectUsage"] = function getProjectUsage(arg0) {
  let value = map3.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getSidebarWidth"] = function getSidebarWidth() {
  return c20;
};
prototype["getBuilderPreviewApplicationId"] = function getBuilderPreviewApplicationId() {
  return c21;
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
const vibegrationsChatStore = new VibegrationsChatStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === map1.size) {
        if (0 === map2.size) {
          if (0 === map3.size) {
            if (0 === arr.length) {
              if (0 === c20) {
                if (null == c21) {
                  return false;
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
    arr.length = 0;
    c20 = 0;
    c21 = null;
  },
  VIBEGRATIONS_CHAT_HISTORY_SET: function handleChatHistorySet(arg0) {
    let entries;
    let projectId;
    ({ projectId, entries } = arg0);
    const result = map.set(projectId, entries.map(newMessageFromHistory));
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_MESSAGE_APPEND: function handleChatMessageAppend(content) {
    const projectId = content.projectId;
    let obj = map;
    let items = map.get(projectId);
    if (items == null) {
      items = [];
    }
    items = [...items];
    obj = { id: `m${tmp2}`, role: "user", content: content.content, steps: [], created_at: Date.now() };
    const sum = sum1 + 1;
    sum1 = sum;
    items[tmp] = obj;
    obj = { id: `m${tmp3}`, role: "assistant", content: "", steps: [], created_at: Date.now() };
    sum1 = sum1 + 1;
    items[tmp + 1] = obj;
    const result = obj.set(projectId, items);
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_STEP_APPEND: function handleChatStepAppend(projectId) {
    projectId = projectId.projectId;
    let obj = map;
    const value = map.get(projectId);
    if (null != value) {
      if (0 !== value.length) {
        if ("assistant" === value[value.length - 1].role) {
          const items = [];
          obj = {};
          const merged = Object.assign(tmp);
          const items1 = [];
          items1[HermesBuiltin.arraySpread(tmp.steps, 0)] = projectId.step;
          obj.steps = items1;
          items[HermesBuiltin.arraySpread(value.slice(0, -1), 0)] = obj;
          const result = obj.set(projectId, items);
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, -1), 0);
        }
      }
    }
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_TURN_FINISHED: function handleChatTurnFinished(arg0) {
    let projectId;
    let summary;
    ({ projectId, summary } = arg0);
    let obj = map;
    const value = map.get(projectId);
    if (null != value) {
      if (0 !== value.length) {
        if ("assistant" === value[value.length - 1].role) {
          let items = [];
          obj = {};
          const merged = Object.assign(tmp7);
          obj.finished = true;
          if ("" !== tmp7.content) {
            summary = tmp7.content;
          } else if (summary == null) {
            summary = "";
          }
          obj.content = summary;
          items[HermesBuiltin.arraySpread(value.slice(0, -1), 0)] = obj;
          items = obj.set(projectId, items);
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, -1), 0);
        }
      }
    }
    recordThinkingTransition(projectId);
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
  VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function handleBuilderPreviewApplicationSet(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId === applicationId) {
      return false;
    }
  },
  VIBEGRATIONS_CHAT_TURN_PATCH: function handleChatTurnPatch(arg0) {
    let patch;
    let projectId;
    ({ projectId, patch } = arg0);
    let obj = map;
    const value = map.get(projectId);
    if (null != value) {
      if (0 !== value.length) {
        if ("assistant" === value[value.length - 1].role) {
          const items = [];
          obj = {};
          const merged = Object.assign(tmp);
          const merged1 = Object.assign(patch);
          items[HermesBuiltin.arraySpread(value.slice(0, -1), 0)] = obj;
          const result = obj.set(projectId, items);
          const arraySpreadResult = HermesBuiltin.arraySpread(value.slice(0, -1), 0);
        }
      }
    }
    recordThinkingTransition(projectId);
  },
  VIBEGRATIONS_CHAT_CONN_STATE: function handleChatConnState(arg0) {
    let connState;
    let projectId;
    ({ projectId, connState } = arg0);
    if ("closed" !== connState) {
      if ("failed" !== connState) {
        return false;
      }
    }
    const value = map.get(projectId);
    if (null != value) {
      if (value.some((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          let someResult = true === role.finished;
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
        const result = map.set(projectId, value.map((role) => {
          let tmp = role;
          if ("assistant" === role.role) {
            let someResult = true === role.finished;
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
            tmp = role;
            if (!someResult) {
              let obj = {};
              const merged = Object.assign(role);
              const items = [];
              obj = { type: "step", kind: "terminal_error", message: null };
              const intl = callback(1236).intl;
              obj[2] = intl.string(callback2(3261)["wjWm+/"]);
              items[HermesBuiltin.arraySpread(role.steps, 0)] = obj;
              obj.steps = items;
              tmp = obj;
              const arraySpreadResult = HermesBuiltin.arraySpread(role.steps, 0);
            }
          }
          return tmp;
        }));
        recordThinkingTransition(projectId);
      }
    }
    return false;
  },
  VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    let deleteResult = map.delete(projectId);
    const deleteResult1 = map1.delete(projectId);
    const deleteResult2 = map2.delete(projectId);
    const index = arr.indexOf(projectId);
    if (-1 !== index) {
      arr.splice(index, 1);
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
      deleteResult = tmp6;
    }
    if (!deleteResult) {
      return false;
    }
    deleteResult3 = map3.delete(projectId);
  },
  VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess(projects) {
    projects = projects.projects;
    const items = [...map.keys(), ...map1.keys(), ...map2.keys(), ...map3.keys()];
    const set = new Set(projects.map((id) => id.id));
    let flag = false;
    for (const item10047 of set1) {
      let tmp2 = item10047;
      let hasItem = set.has(item10047);
      let tmp4 = !hasItem;
      if (!hasItem) {
        let tmp5 = purgeProject;
        let tmp6 = item10047;
        tmp4 = purgeProject(tmp2);
      }
      if (tmp4) {
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
  let someResult = true === finished.finished;
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