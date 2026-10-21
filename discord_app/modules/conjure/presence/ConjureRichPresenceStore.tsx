// discord_app/modules/conjure/presence/ConjureRichPresenceStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02002_asyncRequireImpl.js";
import ConjureGuildExperiment from "../experiments/ConjureGuildExperiment.tsx";
import conjurePresenceActivity from "conjurePresenceActivity.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import IdleStore from "../../../stores/IdleStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
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
    c12 = null;
    let flag4 = null != c13;
    if (flag4) {
      c13 = null;
      flag4 = true;
    }
    return flag4;
  } else {
    if (null != c12) {
      if (null == ConjureProjectStore.getProject(c12)) {
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
        c12 = null;
        let flag3 = null != c13;
        if (flag3) {
          c13 = null;
          flag3 = true;
        }
        return flag3;
      }
    }
    let tmp7 = null;
    if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
      const guildId = SelectedGuildStore.getGuildId();
      tmp7 = null;
      if (null != guildId) {
        const selectedProjectId = ConjureProjectStore.getSelectedProjectId(guildId);
        let tmp11 = null;
        if (null != selectedProjectId) {
          tmp11 = null;
          if (null != ConjureProjectStore.getProject(selectedProjectId)) {
            tmp11 = selectedProjectId;
          }
        }
        tmp7 = tmp11;
      }
    }
    if (null == tmp7) {
      if (null == c13) {
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
        c12 = null;
        let flag2 = null != c13;
        if (flag2) {
          c13 = null;
          flag2 = true;
        }
      }
      flag2 = false;
      if (null == timeout) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          c14 = null;
          if (null != c15) {
            const _clearTimeout = clearTimeout;
            clearTimeout(c15);
            c15 = null;
          }
          c12 = null;
          let flag = null != c13;
          if (flag) {
            c13 = null;
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
      let flag = tmp7 !== c12;
      if (!flag) {
        flag = null == c13;
      }
      if (flag) {
        c12 = tmp7;
        const obj2 = { type: constants.PLAYING, name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME, details: null, timestamps: null };
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
        c13 = obj2;
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        const _setTimeout = setTimeout;
        timeout2 = setTimeout(() => {
          let timeout = null;
          if (null != closure_1_13) {
            let obj = {};
            let merged = Object.assign(closure_1_13);
            details = closure_1_13.details;
            let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
            let found = prop.filter((item) => item !== details);
            let _Math = Math;
            let _Math2 = Math;
            obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
            closure_1_13 = obj;
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = null;
            }
            let _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let timeout = null;
              if (null != closure_1_13) {
                let obj = {};
                let merged = Object.assign(closure_1_13);
                details = closure_1_13.details;
                let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
                let found = prop.filter((item) => item !== details);
                let _Math = Math;
                let _Math2 = Math;
                obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                closure_1_13 = obj;
                if (null != timeout) {
                  let _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  timeout = null;
                }
                let _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  let timeout = null;
                  if (null != closure_1_13) {
                    let obj = {};
                    let merged = Object.assign(closure_1_13);
                    details = closure_1_13.details;
                    let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
                    let found = prop.filter((item) => item !== details);
                    let _Math = Math;
                    let _Math2 = Math;
                    obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                    closure_1_13 = obj;
                    if (null != timeout) {
                      let _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      timeout = null;
                    }
                    let _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      let timeout = null;
                      if (null != closure_1_13) {
                        let obj = {};
                        let merged = Object.assign(closure_1_13);
                        details = closure_1_13.details;
                        let prop = closure_1_0(closure_1_1[8]).CONJURE_PRESENCE_ACTIVITY_LINES;
                        let found = prop.filter(/* F108435 */ function() { ... });
                        let _Math = Math;
                        let _Math2 = Math;
                        obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                        closure_1_13 = obj;
                        if (null != timeout) {
                          let _clearTimeout = clearTimeout;
                          clearTimeout(timeout);
                          timeout = null;
                        }
                        let _setTimeout = setTimeout;
                        timeout = setTimeout(() => { ... }, closure_1_11);
                        closure_1_19.emitChange();
                      }
                    }, closure_1_11);
                    closure_1_19.emitChange();
                  }
                }, closure_1_11);
                closure_1_19.emitChange();
              }
            }, closure_1_11);
            closure_1_19.emitChange();
          }
        }, c11);
        flag = true;
      }
      return flag;
    }
  }
}
let closure_18 = async function _resumeRunningProjects() {
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
      return { value: "IconComponent", done: null };
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
          let body;
          let ensureConnection;
          if (!c16) {
            c16 = true;
            if (obj2.hasConjureGuildWithoutExposure("conjure_resume")) {
              c2 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj5 = { url: constants.CONJURE_PROJECTS, rejectWithError: true };
              const items = [HTTP.get(obj5), asyncRequireImpl(dependencyMap[11], dependencyMap.paths)];
              c3 = 2;
              c4 = 1;
              const obj6 = { value: Promise.all(items), done: false };
              return obj6;
            }
            obj2 = ConjureGuildExperiment;
          }
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          closure_129_16 = false;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          closure_128_1 = closure_129_2(closure_128_0, 2);
          body = closure_128_1[0].body;
          ensureConnection = closure_128_1[1].ensureConnection;
          const found = body.filter((running) => true === running.running);
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
    } catch (tmp12) {
      if (tmp4 === c2) {
        c4 = tmp2;
        throw tmp12;
      } else {
        c3 = tmp;
      }
    }
  }
};
const Constants = fn(1087);
({ ActivityTypes: closure_8, Endpoints: closure_9 } = Constants);
const StaticChannelRoute = fn(4828).StaticChannelRoute;
let c11 = 300000;
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = false;
const Store = initializeDefault.Store;
class ConjureRichPresenceStore extends Store {
}
const prototype = ConjureRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore];
  this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
};
prototype["getActivity"] = function getActivity() {
  return c13;
};
ConjureRichPresenceStore.displayName = "ConjureRichPresenceStore";
const conjureRichPresenceStore = new ConjureRichPresenceStore(DispatcherDefault, {
  CONNECTION_OPEN() {
    return updateActivity({ withGracePeriod: false });
  },
  POST_CONNECTION_OPEN() {
    (function resumeRunningProjects() {
      const self = this;
      const apply = closure_1_18.apply;
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
    c16 = false;
    if (null != c14) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c14);
      c14 = null;
    }
    if (null != c15) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c15);
      c15 = null;
    }
    c12 = null;
    let flag = null != c13;
    if (flag) {
      c13 = null;
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