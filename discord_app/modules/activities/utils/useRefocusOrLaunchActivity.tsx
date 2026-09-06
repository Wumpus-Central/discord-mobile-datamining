// === Module 11518: useRefocusOrLaunchActivity ===

// Module 11518 (useRefocusOrLaunchActivity)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9510 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

const require = fn;
const FramesConstants = fn(9511);
({ MAIN_SURFACE: closure_7, FrameLayoutModes: closure_8 } = FramesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  const runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let stateFromStores1;
  const data = applicationId(runBeforeLaunchAttempt[5]).useApplication(applicationId).data;
  let obj = applicationId(runBeforeLaunchAttempt[5]);
  const items = [stateFromStores1];
  const stateFromStores = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
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
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (null != applicationId) {
              if (null != data) {
                let tmp9 = null != stateFromStores;
                if (tmp9) {
                  tmp9 = stateFromStores.applicationId === applicationId;
                }
                if (null != stateFromStores1) {
                  if (stateFromStores1.applicationId === applicationId) {
                    const obj1 = { frameId: stateFromStores1.id, layoutMode: constants.FOCUSED };
                    const result = tmp3(9507).updateFrameLayoutMode(obj1);
                    const obj10 = tmp3(9507);
                  }
                }
                if (tmp9) {
                  const _location = stateFromStores.location;
                  let guild_id = null;
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  tmp3(9535)(guild_id, _location);
                  const tmp26 = tmp3(9535);
                } else {
                  if (runBeforeLaunchAttempt != null) {
                    runBeforeLaunchAttempt();
                  }
                  c4 = 1;
                  if (c7) {
                    let obj5 = tmp3(9507);
                    let obj2 = { applicationId, surface, analyticsContext: null };
                    const obj3 = { isStart: true, analyticsLocations };
                    obj2.analyticsContext = obj3;
                    dependencyMap = 2;
                    c5 = 1;
                    const obj4 = { value: obj5.launchFrame(obj2), done: false };
                    return obj4;
                  } else {
                    let id;
                    if (data != null) {
                      const bot = data.bot;
                      if (bot != null) {
                        id = bot.id;
                      }
                    }
                    if (null == id) {
                      c4 = 0;
                    }
                  }
                }
                obj2 = analyticsLocations(11519);
                obj5 = { appId: applicationId, botId: null, analyticsLocations: null };
                let id1;
                if (data != null) {
                  const bot2 = data.bot;
                  if (bot2 != null) {
                    id1 = bot2.id;
                  }
                }
                obj5.botId = id1;
                if (analyticsLocations == null) {
                  analyticsLocations = [];
                }
                obj5.analyticsLocations = analyticsLocations;
                dependencyMap = 3;
                c5 = 1;
                const obj6 = { value: obj2.launchActivityInBotDM(obj5), done: false };
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
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        if (closure_129_3 != null) {
          closure_129_3();
        }
      } catch (tmp33) {
        closure_3 = tmp33;
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