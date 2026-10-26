// === Module 14131: useRefocusOrLaunchActivity ===

// Module 14131 (useRefocusOrLaunchActivity)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6775 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;

const require = globalThis.__r;

const require = fn;
const FrameLayoutModes = fn(6776).FrameLayoutModes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useRefocusOrLaunchActivity(applicationId) {
  const cResult = require("c").c(12);
  applicationId = applicationId.applicationId;
  _require = applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let obj = require("c");
  const data = require("ApplicationActionCreators").useApplication(applicationId).data;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    const fn = function s() {
      return stateFromStores1.getCurrentEmbeddedActivity();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj2 = require("ApplicationActionCreators");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores];
    class F {
      constructor() {
        return closure_5.getMainFrame();
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    let tmp9 = F;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === data) {
      if (cResult[6] === applicationId) {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === stateFromStores1) {
            if (cResult[9] === runAfterLaunchAttempt) {
              if (cResult[10] === runBeforeLaunchAttempt) {
                let tmp12 = cResult[11];
              }
              return tmp12;
            }
          }
        }
      }
    }
  }
  _require = runAfterLaunchAttempt(function*() {
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
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp3;
            if (null != closure_0) {
              if (null != c4) {
                let tmp10 = null != stateFromStores;
                if (tmp10) {
                  tmp10 = stateFromStores.applicationId === tmp34;
                }
                if (null != stateFromStores1) {
                  if (stateFromStores1.applicationId === tmp34) {
                    const obj6 = { frameId: stateFromStores1.id, layoutMode: constants.FOCUSED };
                    const result = analyticsLocations(runBeforeLaunchAttempt[9]).updateFrameLayoutMode(obj6);
                    const obj5 = analyticsLocations(runBeforeLaunchAttempt[9]);
                  }
                }
                if (tmp10) {
                  const _location = stateFromStores.location;
                  let guild_id = null;
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  analyticsLocations(runBeforeLaunchAttempt[10])(guild_id, _location);
                  const tmp18 = analyticsLocations(runBeforeLaunchAttempt[10]);
                } else {
                  if (tmp25 != null) {
                    tmp25();
                  }
                  let v0 = 1;
                  const obj7 = { applicationId: tmp34, analyticsLocations };
                  analyticsLocations = 2;
                  c4 = 1;
                  const obj8 = { value: analyticsLocations(runBeforeLaunchAttempt[11]).launch(obj7), done: false };
                  return obj8;
                }
              }
            }
          }
        } else {
          if (1 === tmp7) {
            v0 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0 = 0;
          }
          if (v0 != null) {
            v0();
          }
        }
        c4 = 3;
      } catch (tmp25) {
        if (tmp4 === v0) {
          c4 = tmp2;
          throw tmp25;
        } else {
          analyticsLocations = tmp;
        }
      }
    }
  });
  function t5() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[4] = analyticsLocations;
  cResult[5] = data;
  cResult[6] = applicationId;
  cResult[7] = stateFromStores;
  cResult[8] = stateFromStores1;
  cResult[9] = runAfterLaunchAttempt;
  cResult[10] = runBeforeLaunchAttempt;
  cResult[11] = t5;
  tmp12 = t5;
}) : (function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  const analyticsLocations = applicationId.analyticsLocations;
  const runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let stateFromStores1;
  const data = applicationId(runBeforeLaunchAttempt[7]).useApplication(applicationId).data;
  let obj = applicationId(runBeforeLaunchAttempt[7]);
  const items = [stateFromStores1];
  const stateFromStores = applicationId(runBeforeLaunchAttempt[8]).useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  const obj2 = applicationId(runBeforeLaunchAttempt[8]);
  const items1 = [stateFromStores];
  stateFromStores1 = applicationId(runBeforeLaunchAttempt[8]).useStateFromStores(items1, () => stateFromStores.getMainFrame());
  const items2 = [analyticsLocations, data, applicationId, stateFromStores, stateFromStores1, runAfterLaunchAttempt, runBeforeLaunchAttempt];
  return data.useCallback(runAfterLaunchAttempt(function*() {
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
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp3;
            if (null != applicationId) {
              if (null != data) {
                let tmp10 = null != stateFromStores;
                if (tmp10) {
                  tmp10 = stateFromStores.applicationId === applicationId;
                }
                if (null != stateFromStores1) {
                  if (stateFromStores1.applicationId === applicationId) {
                    const obj6 = { frameId: stateFromStores1.id, layoutMode: constants.FOCUSED };
                    const result = v2(tmp25[9]).updateFrameLayoutMode(obj6);
                    const obj5 = v2(tmp25[9]);
                  }
                }
                if (tmp10) {
                  const _location = stateFromStores.location;
                  let guild_id = null;
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  v2(tmp25[10])(guild_id, _location);
                  const tmp18 = v2(tmp25[10]);
                } else {
                  if (runBeforeLaunchAttempt != null) {
                    runBeforeLaunchAttempt();
                  }
                  c3 = 1;
                  const obj7 = { applicationId, analyticsLocations };
                  v2 = 2;
                  c4 = 1;
                  const obj8 = { value: v2(tmp25[11]).launch(obj7), done: false };
                  return obj8;
                }
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          if (closure_128_3 != null) {
            closure_128_3();
          }
        }
        c4 = 3;
      } catch (tmp25) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp25;
        } else {
          v2 = tmp;
        }
      }
    }
  }), items2);
});