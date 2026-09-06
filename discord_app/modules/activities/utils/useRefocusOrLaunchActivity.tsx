// === Module 11518: useRefocusOrLaunchActivity ===

// Module 11518 (useRefocusOrLaunchActivity)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "map" /* 9510 */;
import closure_6 from "participantFromServer" /* 1956 */;
import FrameLayoutModes from "FrameLayoutModes" /* 9511 */;

const require = arg1;
({ MAIN_SURFACE: error, FrameLayoutModes: closure_8 } = FrameLayoutModes);
let result = require("set").fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  const analyticsLocations = applicationId.analyticsLocations;
  const runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let data;
  let stateFromStores;
  let stateFromStores1;
  c7 = undefined;
  data = applicationId(runBeforeLaunchAttempt[5]).useApplication(applicationId).data;
  let obj = applicationId(runBeforeLaunchAttempt[5]);
  const items = [stateFromStores1];
  stateFromStores = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  let obj2 = applicationId(runBeforeLaunchAttempt[6]);
  const items1 = [stateFromStores];
  stateFromStores1 = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items1, () => stateFromStores.getMainFrame());
  let obj3 = applicationId(runBeforeLaunchAttempt[6]);
  const canLaunchFrameResult = applicationId(runBeforeLaunchAttempt[7]).canLaunchFrame(data);
  c7 = canLaunchFrameResult;
  const items2 = [analyticsLocations, data, applicationId, canLaunchFrameResult, stateFromStores, stateFromStores1, runAfterLaunchAttempt, runBeforeLaunchAttempt];
  return data.useCallback(runAfterLaunchAttempt(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            if (null != closure_1_0) {
              if (null != c4) {
                let tmp9 = null != c5;
                if (tmp9) {
                  tmp9 = tmp44.applicationId === tmp42;
                }
                if (null != closure_1_6) {
                  if (tmp10.applicationId === tmp42) {
                    obj1 = { frameId: null, layoutMode: null };
                    obj1[0] = tmp10.id;
                    obj1[1] = closure_1_8.FOCUSED;
                    const result = closure_1_1(9507).updateFrameLayoutMode(obj1);
                    const obj10 = closure_1_1(9507);
                  }
                }
                if (tmp9) {
                  const _location = tmp44.location;
                  let guild_id = null;
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  closure_1_1(9535)(guild_id, _location);
                  const tmp26 = closure_1_1(9535);
                } else {
                  if (dependencyMap != null) {
                    dependencyMap();
                  }
                  c4 = 1;
                  if (closure_1_7) {
                    let obj5 = closure_1_1(9507);
                    let obj2 = { applicationId: null, surface: null, analyticsContext: null };
                    obj2[0] = tmp42;
                    obj2[1] = closure_1_7;
                    const obj3 = { isStart: true, analyticsLocations: null };
                    obj3[1] = closure_1_1;
                    obj2[2] = obj3;
                    dependencyMap = 2;
                    c5 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = obj5.launchFrame(obj2);
                    return obj4;
                  } else {
                    let id;
                    if (tmp43 != null) {
                      const bot = tmp43.bot;
                      if (bot != null) {
                        id = bot.id;
                      }
                    }
                    if (null == id) {
                      c4 = 0;
                    }
                  }
                }
                obj2 = closure_1_0(11519);
                obj5 = { appId: null, botId: null, analyticsLocations: null };
                obj5[0] = tmp42;
                let id1;
                if (tmp43 != null) {
                  const bot2 = tmp43.bot;
                  if (bot2 != null) {
                    id1 = bot2.id;
                  }
                }
                obj5[1] = id1;
                closure_0 = closure_1_1;
                if (closure_1_1 == null) {
                  closure_0 = [];
                }
                obj5[2] = closure_0;
                dependencyMap = 3;
                c5 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = obj2.launchActivityInBotDM(obj5);
                return obj6;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        if (callback != null) {
          callback();
        }
      } catch (tmp33) {
        callback = tmp33;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp33;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  }), items2);
};