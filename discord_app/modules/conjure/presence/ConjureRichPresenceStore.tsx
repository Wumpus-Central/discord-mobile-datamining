// discord_app/modules/conjure/presence/ConjureRichPresenceStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import ConjureGuildExperiment from "../experiments/ConjureGuildExperiment.tsx";
import conjureServerProject from "../server_workspace/conjureServerProject.tsx";
import conjurePresenceActivity from "conjurePresenceActivity.tsx";
import conjureChatTurns from "../chat/conjureChatTurns.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import IdleStore from "../../../stores/IdleStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjurePagesStore from "../pages/ConjurePagesStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
function updateActivity(withGracePeriod) {
  if (IdleStore.isIdle()) {
    if (null != timeout) {
      const _clearTimeout7 = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
    if (null != timeout2) {
      const _clearTimeout8 = clearTimeout;
      clearTimeout(timeout2);
      timeout2 = null;
    }
    c15 = null;
    let flag5 = null != _null;
    if (flag5) {
      _null = null;
      flag5 = true;
    }
    return flag5;
  } else {
    if (null != c15) {
      if (null == ConjureProjectStore.getProject(c15)) {
        if (null != timeout) {
          const _clearTimeout5 = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        if (null != timeout2) {
          const _clearTimeout6 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        c15 = null;
        let flag4 = null != _null;
        if (flag4) {
          _null = null;
          flag4 = true;
        }
        return flag4;
      }
    }
    const shownProjectId = ConjurePagesStore.getShownProjectId();
    if (null != shownProjectId) {
      let tmp13 = null;
      if (null != ConjureProjectStore.getProject(shownProjectId)) {
        tmp13 = shownProjectId;
      }
      let tmp11 = tmp13;
      let obj = ConjureProjectStore;
    } else {
      const guildId = SelectedGuildStore.getGuildId();
      let globalSelectedProjectId = ConjureProjectStore.getGlobalSelectedProjectId();
      if (globalSelectedProjectId == null) {
        let selectedProjectId = null;
        if (null != guildId) {
          selectedProjectId = null;
          if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
            selectedProjectId = ConjureProjectStore.getSelectedProjectId(guildId);
          }
        }
        globalSelectedProjectId = selectedProjectId;
      }
      tmp11 = null;
      if (null != globalSelectedProjectId) {
        tmp11 = null;
        if (null != ConjureProjectStore.getProject(globalSelectedProjectId)) {
          tmp11 = globalSelectedProjectId;
        }
      }
      obj = ConjureProjectStore;
    }
    if (null == tmp11) {
      if (null != _null) {
        if (withGracePeriod.withGracePeriod) {
          let flag3 = false;
          if (null == timeout) {
            const _setTimeout2 = setTimeout;
            timeout = setTimeout(() => {
              c17 = null;
              if (null != c18) {
                const _clearTimeout = clearTimeout;
                clearTimeout(c18);
                c18 = null;
              }
              c15 = null;
              let flag = null != c16;
              if (flag) {
                c16 = null;
                flag = true;
              }
              if (flag) {
                conjureRichPresenceStore.emitChange();
              }
            }, 30000);
            flag3 = false;
          }
        }
        return flag3;
      }
      if (null != timeout) {
        const _clearTimeout3 = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      if (null != timeout2) {
        const _clearTimeout4 = clearTimeout;
        clearTimeout(timeout2);
        timeout2 = null;
      }
      c15 = null;
      flag3 = null != _null;
      if (flag3) {
        _null = null;
        flag3 = true;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      const project = obj.getProject(tmp11);
      let tmp18 = null;
      if (null != project) {
        tmp18 = null;
        if (null != obj2.conjureServerProjectGuildId(project)) {
          const messages = ConjureChatStore.getMessages(tmp11);
          const findOpenTurnResult = conjureChatTurns.findOpenTurn(messages);
          tmp18 = null;
          if (null != findOpenTurnResult) {
            const substr = messages.slice(0, messages.lastIndexOf(findOpenTurnResult));
            const findLastResult = substr.findLast((role) => "user" === role.role);
            let user_id;
            if (findLastResult != null) {
              user_id = findLastResult.user_id;
            }
            if (user_id == null) {
              user_id = project.owner_user_id;
            }
            let tmp26 = null;
            if (user_id === AuthenticationStore.getId()) {
              tmp26 = tmp11;
            }
            tmp18 = tmp26;
          }
          const tmp19Result = conjureChatTurns;
        }
        obj2 = conjureServerProject;
      }
      if (tmp11 === c15) {
        if (null != _null) {
          let flag2 = false;
          if (null != _null) {
            const party3 = _null.party;
            let id;
            if (party3 != null) {
              id = party3.id;
            }
            if (id == null) {
              id = null;
            }
            flag2 = false;
            if (id !== tmp18) {
              const party4 = _null.party;
              const tmp51 = _objectWithoutProperties(_null, closure_2);
              let tmp52 = tmp51;
              if (null != tmp18) {
                const obj3 = {};
                const merged = Object.assign(tmp51);
                const obj4 = { id: tmp18 };
                obj3.party = obj4;
                tmp52 = obj3;
              }
              _null = tmp52;
              flag2 = true;
            }
          }
          let flag = flag2;
        }
        return flag;
      }
      c15 = tmp11;
      const obj5 = { type: ActivityTypes.ActivityTypes.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: null, timestamps: null };
      c0 = undefined;
      const prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
      const found = prop.filter((item) => item !== details);
      const _Math = Math;
      const _Math2 = Math;
      obj5.details = found[Math.floor(Math, Math.random(Math) * found.length)];
      const obj6 = { start: null };
      const _Date = Date;
      obj6.start = Date.now();
      obj5.timestamps = obj6;
      _null = obj5;
      const party = obj5.party;
      let id1;
      if (party != null) {
        id1 = party.id;
      }
      if (id1 == null) {
        id1 = null;
      }
      if (id1 !== tmp18) {
        const party2 = _null.party;
        const tmp36 = _objectWithoutProperties(_null, closure_2);
        let tmp37 = tmp36;
        if (null != tmp18) {
          const obj7 = {};
          const merged1 = Object.assign(tmp36);
          const obj8 = { id: tmp18 };
          obj7.party = obj8;
          tmp37 = obj7;
        }
        _null = tmp37;
      }
      if (null != timeout2) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(timeout2);
        timeout2 = null;
      }
      const _setTimeout = setTimeout;
      timeout2 = setTimeout(() => {
        let timeout = null;
        if (null != closure_1_16) {
          let obj = {};
          let merged = Object.assign(closure_1_16);
          details = closure_1_16.details;
          let prop = closure_1_0(closure_1_1[11]).CONJURE_PRESENCE_ACTIVITY_LINES;
          let found = prop.filter((item) => item !== details);
          let _Math = Math;
          let _Math2 = Math;
          obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
          closure_1_16 = obj;
          if (null != timeout) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = null;
          }
          let _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let timeout = null;
            if (null != closure_1_16) {
              let obj = {};
              let merged = Object.assign(closure_1_16);
              details = closure_1_16.details;
              let prop = closure_1_0(closure_1_1[11]).CONJURE_PRESENCE_ACTIVITY_LINES;
              let found = prop.filter((item) => item !== details);
              let _Math = Math;
              let _Math2 = Math;
              obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
              closure_1_16 = obj;
              if (null != timeout) {
                let _clearTimeout = clearTimeout;
                clearTimeout(timeout);
                timeout = null;
              }
              let _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                let timeout = null;
                if (null != closure_1_16) {
                  let obj = {};
                  let merged = Object.assign(closure_1_16);
                  details = closure_1_16.details;
                  let prop = closure_1_0(closure_1_1[11]).CONJURE_PRESENCE_ACTIVITY_LINES;
                  let found = prop.filter((item) => item !== details);
                  let _Math = Math;
                  let _Math2 = Math;
                  obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                  closure_1_16 = obj;
                  if (null != timeout) {
                    let _clearTimeout = clearTimeout;
                    clearTimeout(timeout);
                    timeout = null;
                  }
                  let _setTimeout = setTimeout;
                  timeout = setTimeout(() => {
                    let timeout = null;
                    if (null != closure_1_16) {
                      let obj = {};
                      let merged = Object.assign(closure_1_16);
                      details = closure_1_16.details;
                      let prop = closure_1_0(closure_1_1[11]).CONJURE_PRESENCE_ACTIVITY_LINES;
                      let found = prop.filter(/* F100815 */ function() { ... });
                      let _Math = Math;
                      let _Math2 = Math;
                      obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                      closure_1_16 = obj;
                      if (null != timeout) {
                        let _clearTimeout = clearTimeout;
                        clearTimeout(timeout);
                        timeout = null;
                      }
                      let _setTimeout = setTimeout;
                      timeout = setTimeout(/* F100816 */ function() { ... }, closure_1_14);
                      closure_1_24.emitChange();
                    }
                  }, closure_1_14);
                  closure_1_24.emitChange();
                }
              }, closure_1_14);
              closure_1_24.emitChange();
            }
          }, closure_1_14);
          closure_1_24.emitChange();
        }
      }, c14);
      flag = true;
    }
  }
}
function fetchOwnedProjects() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _fetchOwnedProjects() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp4;
          c0 = 0;
          let listProjects;
          if ("success" !== ownedProjectsFetchState.getOwnedProjectsFetchState()) {
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequireImpl")(paths[15], paths.paths), done: false };
            return obj4;
          }
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          listProjects = value.listProjects;
          c2 = 2;
          c3 = 1;
          const obj6 = { value: listProjects(), done: false };
          return obj6;
        }
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c2 = 3;
          c3 = 1;
          const obj8 = {
            value: (function ownedProjectsSettled() {
                      return new Promise((fn) => {
                        closure_0 = fn;
                        function check() {
                          ownedProjectsFetchState = closure_2_12.getOwnedProjectsFetchState();
                          let tmp2 = "success" !== ownedProjectsFetchState;
                          if (tmp2) {
                            tmp2 = "error" !== ownedProjectsFetchState;
                          }
                          if (!tmp2) {
                            closure_2_12.removeChangeListener(check);
                            closure_0();
                          }
                        }
                        closure_12.addChangeListener(check);
                        ownedProjectsFetchState = closure_12.getOwnedProjectsFetchState();
                        let tmp3 = "success" !== ownedProjectsFetchState;
                        if (tmp3) {
                          tmp3 = "error" !== ownedProjectsFetchState;
                        }
                        if (!tmp3) {
                          closure_12.removeChangeListener(check);
                          fn();
                        }
                      });
                    })(),
            done: false
          };
          return obj8;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      }
      if ("success" !== closure_129_12.getOwnedProjectsFetchState()) {
        const _Error = Error;
        const error = new Error("Conjure projects fetch failed");
        throw error;
      } else {
        c3 = 3;
        const obj9 = { value: closure_129_12.getOwnedProjects(), done: true };
        return obj9;
      }
    } catch (tmp19) {
      c3 = tmp;
      throw tmp19;
    }
  }
};
let closure_23 = async function _resumeRunningProjects() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          let ensureConnection;
          if (!c19) {
            c19 = true;
            if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
              c2 = 1;
              items = [fetchOwnedProjects(), asyncRequireImpl(dependencyMap[18], dependencyMap.paths)];
              c3 = 2;
              c4 = 1;
              const obj5 = { value: Promise.all(items), done: false };
              return obj5;
            }
            obj2 = ConjureGuildExperiment;
          }
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          closure_129_19 = false;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          closure_128_1 = closure_129_3(closure_128_0, 2);
          closure_128_2 = closure_128_1[0];
          ensureConnection = closure_128_1[1].ensureConnection;
          const found = closure_128_2.filter((running) => true === running.running);
          const substr = found.slice(0, 5);
          const item = substr.forEach((id) => closure_1_3(id.id));
          c2 = 0;
        }
        c2 = 0;
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c4 = 3;
    } catch (tmp20) {
      if (tmp4 === c2) {
        c4 = tmp2;
        throw tmp20;
      } else {
        c3 = tmp;
      }
    }
  }
};
let closure_2 = ["party"];
const StaticChannelRoute = fn(5026).StaticChannelRoute;
let c14 = 300000;
let c15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let c19 = false;
const Store = initializeDefault.Store;
class ConjureRichPresenceStore extends Store {
}
const prototype = ConjureRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ConjureChatStore, ConjurePagesStore, ConjureProjectStore, IdleStore, SelectedChannelStore, SelectedGuildStore);
  items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore, ConjurePagesStore, ConjureChatStore];
  this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
};
prototype["getActivity"] = function getActivity() {
  return c16;
};
ConjureRichPresenceStore.displayName = "ConjureRichPresenceStore";
const conjureRichPresenceStore = new ConjureRichPresenceStore(DispatcherDefault, {
  CONNECTION_OPEN() {
    return updateActivity({ withGracePeriod: false });
  },
  POST_CONNECTION_OPEN() {
    (function resumeRunningProjects() {
      const self = this;
      const apply = closure_1_23.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return false;
  },
  LOGOUT() {
    c19 = false;
    if (null != c17) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c17);
      c17 = null;
    }
    if (null != c18) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c18);
      c18 = null;
    }
    c15 = null;
    let flag = null != c16;
    if (flag) {
      c16 = null;
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/presence/ConjureRichPresenceStore.tsx");

export default conjureRichPresenceStore;
export const CONJURE_PRESENCE_ACTIVITY_GRACE_PERIOD_MS = 30000;
export const CONJURE_PRESENCE_ACTIVITY_LINE_ROTATION_MS = 300000;