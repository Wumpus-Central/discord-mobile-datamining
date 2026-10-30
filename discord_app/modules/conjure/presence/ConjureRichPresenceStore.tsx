// === Module 11493: ConjureRichPresenceStore ===

// Module 11493 (ConjureRichPresenceStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6873 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10737 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import IdleStore from "IdleStore" /* 6699 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import ConjurePagesStore from "ConjurePagesStore" /* 11494 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

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
    c11 = null;
    let flag4 = null != c12;
    if (flag4) {
      c12 = null;
      flag4 = true;
    }
    return flag4;
  } else {
    if (null != c11) {
      if (null == ConjureProjectStore.getProject(c11)) {
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
        c11 = null;
        let flag3 = null != c12;
        if (flag3) {
          c12 = null;
          flag3 = true;
        }
        return flag3;
      }
    }
    const shownProjectId = ConjurePagesStore.getShownProjectId();
    if (null != shownProjectId) {
      let tmp15 = null;
      if (null != ConjureProjectStore.getProject(shownProjectId)) {
        tmp15 = shownProjectId;
      }
      let tmp13 = tmp15;
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
      tmp13 = null;
      if (null != globalSelectedProjectId) {
        tmp13 = null;
        if (null != ConjureProjectStore.getProject(globalSelectedProjectId)) {
          tmp13 = globalSelectedProjectId;
        }
      }
    }
    if (null == tmp13) {
      if (null == c12) {
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
        c11 = null;
        let flag2 = null != c12;
        if (flag2) {
          c12 = null;
          flag2 = true;
        }
      }
      flag2 = false;
      if (null == timeout) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          c13 = null;
          if (null != c14) {
            const _clearTimeout = clearTimeout;
            clearTimeout(c14);
            c14 = null;
          }
          c11 = null;
          let flag = null != c12;
          if (flag) {
            c12 = null;
            flag = true;
          }
          if (flag) {
            conjureRichPresenceStore.emitChange();
          }
        }, 30000);
        flag2 = false;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      let flag = tmp13 !== c11;
      if (!flag) {
        flag = null == c12;
      }
      if (flag) {
        c11 = tmp13;
        const obj2 = { type: ActivityTypes.ActivityTypes.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: null, timestamps: null };
        c0 = undefined;
        const prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
        const found = prop.filter((item) => item !== details);
        const _Math = Math;
        const _Math2 = Math;
        obj2.details = found[Math.floor(Math, Math.random(Math) * found.length)];
        const obj3 = { start: null };
        const _Date = Date;
        obj3.start = Date.now();
        obj2.timestamps = obj3;
        c12 = obj2;
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        const _setTimeout = setTimeout;
        timeout2 = setTimeout(() => {
          let timeout = null;
          if (null != closure_1_12) {
            let obj = {};
            let merged = Object.assign(closure_1_12);
            details = closure_1_12.details;
            let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
            let found = prop.filter((item) => item !== details);
            let _Math = Math;
            let _Math2 = Math;
            obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
            closure_1_12 = obj;
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = null;
            }
            let _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let timeout = null;
              if (null != closure_1_12) {
                let obj = {};
                let merged = Object.assign(closure_1_12);
                details = closure_1_12.details;
                let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
                let found = prop.filter((item) => item !== details);
                let _Math = Math;
                let _Math2 = Math;
                obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                closure_1_12 = obj;
                if (null != timeout) {
                  let _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  timeout = null;
                }
                let _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  let timeout = null;
                  if (null != closure_1_12) {
                    let obj = {};
                    let merged = Object.assign(closure_1_12);
                    details = closure_1_12.details;
                    let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
                    let found = prop.filter((item) => item !== details);
                    let _Math = Math;
                    let _Math2 = Math;
                    obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                    closure_1_12 = obj;
                    if (null != timeout) {
                      let _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      timeout = null;
                    }
                    let _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      let timeout = null;
                      if (null != closure_1_12) {
                        let obj = {};
                        let merged = Object.assign(closure_1_12);
                        details = closure_1_12.details;
                        let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
                        let found = prop.filter(/* F99227 */ function() { ... });
                        let _Math = Math;
                        let _Math2 = Math;
                        obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                        closure_1_12 = obj;
                        if (null != timeout) {
                          let _clearTimeout = clearTimeout;
                          clearTimeout(timeout);
                          timeout = null;
                        }
                        let _setTimeout = setTimeout;
                        timeout = setTimeout(/* F99228 */ function() { ... }, closure_1_10);
                        closure_1_20.emitChange();
                      }
                    }, closure_1_10);
                    closure_1_20.emitChange();
                  }
                }, closure_1_10);
                closure_1_20.emitChange();
              }
            }, closure_1_10);
            closure_1_20.emitChange();
          }
        }, c10);
        flag = true;
      }
      return flag;
    }
  }
}
function fetchOwnedProjects() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _fetchOwnedProjects() {
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
            const obj4 = { value: require("asyncRequireImpl")(paths[10], paths.paths), done: false };
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
                          ownedProjectsFetchState = closure_2_8.getOwnedProjectsFetchState();
                          let tmp2 = "success" !== ownedProjectsFetchState;
                          if (tmp2) {
                            tmp2 = "error" !== ownedProjectsFetchState;
                          }
                          if (!tmp2) {
                            closure_2_8.removeChangeListener(check);
                            closure_0();
                          }
                        }
                        closure_8.addChangeListener(check);
                        ownedProjectsFetchState = closure_8.getOwnedProjectsFetchState();
                        let tmp3 = "success" !== ownedProjectsFetchState;
                        if (tmp3) {
                          tmp3 = "error" !== ownedProjectsFetchState;
                        }
                        if (!tmp3) {
                          closure_8.removeChangeListener(check);
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
      if ("success" !== closure_129_8.getOwnedProjectsFetchState()) {
        const _Error = Error;
        const error = new Error("Conjure projects fetch failed");
        throw error;
      } else {
        c3 = 3;
        const obj9 = { value: closure_129_8.getOwnedProjects(), done: true };
        return obj9;
      }
    } catch (tmp19) {
      c3 = tmp;
      throw tmp19;
    }
  }
};
let closure_19 = async function _resumeRunningProjects() {
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
          if (!c15) {
            c15 = true;
            if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
              c2 = 1;
              const items = [fetchOwnedProjects(), asyncRequireImpl(dependencyMap[13], dependencyMap.paths)];
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
          closure_129_15 = false;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          closure_128_1 = closure_129_2(closure_128_0, 2);
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
const StaticChannelRoute = fn(4865).StaticChannelRoute;
let c10 = 300000;
let c11 = null;
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = false;
const Store = initializeDefault.Store;
class ConjureRichPresenceStore extends Store {
}
const prototype = ConjureRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore, ConjurePagesStore];
  this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
};
prototype["getActivity"] = function getActivity() {
  return c12;
};
ConjureRichPresenceStore.displayName = "ConjureRichPresenceStore";
const conjureRichPresenceStore = new ConjureRichPresenceStore(DispatcherDefault, {
  CONNECTION_OPEN() {
    return updateActivity({ withGracePeriod: false });
  },
  POST_CONNECTION_OPEN() {
    (function resumeRunningProjects() {
      const self = this;
      const apply = closure_1_19.apply;
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
    c15 = false;
    if (null != c13) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c13);
      c13 = null;
    }
    if (null != c14) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c14);
      c14 = null;
    }
    c11 = null;
    let flag = null != c12;
    if (flag) {
      c12 = null;
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