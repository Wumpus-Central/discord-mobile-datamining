// === Module 11050: useRefocusOrLaunchActivity ===

// Module 11050 (useRefocusOrLaunchActivity)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "map" /* 9403 */;
import closure_6 from "participantFromServer" /* 1390 */;
import FrameLayoutModes from "FrameLayoutModes" /* 9404 */;

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
                  tmp9 = tmp43.applicationId === tmp41;
                }
                if (null != closure_1_6) {
                  if (tmp10.applicationId === tmp41) {
                    obj1 = { frameId: null, layoutMode: null };
                    obj1[0] = tmp10.id;
                    obj1[1] = closure_1_8.FOCUSED;
                    const result = closure_1_1(9400).updateFrameLayoutMode(obj1);
                    const obj9 = closure_1_1(9400);
                  }
                }
                if (tmp9) {
                  const _location = tmp43.location;
                  let guild_id = null;
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  closure_1_1(9458)(guild_id, _location);
                  const tmp25 = closure_1_1(9458);
                } else {
                  if (dependencyMap != null) {
                    dependencyMap();
                  }
                  c4 = 1;
                  if (closure_1_7) {
                    let obj5 = closure_1_1(9400);
                    let obj2 = { applicationId: null, surface: null };
                    obj2[0] = tmp41;
                    obj2[1] = closure_1_7;
                    dependencyMap = 2;
                    c5 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj5.launchFrame(obj2);
                    return obj3;
                  } else {
                    let id;
                    if (tmp42 != null) {
                      const bot = tmp42.bot;
                      if (bot != null) {
                        id = bot.id;
                      }
                    }
                    if (null == id) {
                      c4 = 0;
                    }
                  }
                }
                obj2 = closure_1_0(11051);
                const obj4 = { appId: null, botId: null, analyticsLocations: null };
                obj4[0] = tmp41;
                let id1;
                if (tmp42 != null) {
                  const bot2 = tmp42.bot;
                  if (bot2 != null) {
                    id1 = bot2.id;
                  }
                }
                obj4[1] = id1;
                closure_0 = closure_1_1;
                if (closure_1_1 == null) {
                  closure_0 = [];
                }
                obj4[2] = closure_0;
                dependencyMap = 3;
                c5 = 1;
                obj5 = { value: null, done: false };
                obj5[0] = obj2.launchActivityInBotDM(obj4);
                return obj5;
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
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
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
      } catch (tmp32) {
        callback = tmp32;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp32;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  }), items2);
};