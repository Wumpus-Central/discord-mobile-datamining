// discord_app/modules/activities/utils/useRefocusOrLaunchActivity.tsx
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import FramesStore from "../../frames/FramesStore.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";
import FramesConstants from "../../frames/FramesConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5;

let metroImportAll;
let metroImportDefault;
({ MAIN_SURFACE: metroImportDefault, FrameLayoutModes: metroImportAll } = FramesConstants);
let result = size.fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  let runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let stateFromStores1;
  let obj = applicationId(runBeforeLaunchAttempt[5]);
  const data = obj.useApplication(applicationId).data;
  let obj2 = applicationId(runBeforeLaunchAttempt[6]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  let obj3 = applicationId(runBeforeLaunchAttempt[6]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores.getMainFrame());
  let obj4 = applicationId(runBeforeLaunchAttempt[7]);
  let result = obj4.canLaunchContextlessFrame(data);
  let c7 = result;
  const items2 = [
    analyticsLocations,
    data,
    applicationId,
    result,
    stateFromStores,
    stateFromStores1,
    runAfterLaunchAttempt,
    runBeforeLaunchAttempt,
  ];
  return data.useCallback(
    runAfterLaunchAttempt(function* () {
      let c2;
      let closure_1;
      let id1;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          c5 = 2;
          if (0 === runBeforeLaunchAttempt) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (null != applicationId) {
                if (null != data) {
                  const tmp6 = null != stateFromStores && stateFromStores.applicationId === applicationId;
                  if (null != stateFromStores1) {
                    if (stateFromStores1.applicationId === applicationId) {
                      const obj4 = { frameId: stateFromStores1.id, layoutMode: constants.FOCUSED };
                      const obj9 = tmp(runBeforeLaunchAttempt[8]);
                      const result = obj9.updateFrameLayoutMode(obj4);
                    }
                  }
                  if (tmp6) {
                    const _location = stateFromStores.location;
                    let guild_id = null;
                    const tmp24 = tmp(runBeforeLaunchAttempt[9]);
                    if ("guild_id" in _location) {
                      guild_id = _location.guild_id;
                    }
                    tmp24(guild_id, _location);
                  } else {
                    if (runBeforeLaunchAttempt != null) {
                      runBeforeLaunchAttempt();
                    }
                    c4 = 1;
                    if (c7) {
                      const obj6 = { applicationId, surface, analyticsContext: obj7 };
                      obj7 = { isStart: true, analyticsLocations };
                      const obj5 = tmp(runBeforeLaunchAttempt[8]);
                      runBeforeLaunchAttempt = 2;
                      c5 = 1;
                      const obj8 = { value: obj5.launchFrame(obj6), done: false };
                      return obj8;
                    } else {
                      let id;
                      if (data != null) {
                        const bot = data.bot;
                        if (bot != null) {
                          id = bot.id;
                        }
                      }
                      if (null != id) {
                        const obj10 = { appId: applicationId, botId: id1, analyticsLocations };
                        id1 = undefined;
                        const launchActivityInBotDM = analyticsLocations(
                          runBeforeLaunchAttempt[10],
                        ).launchActivityInBotDM;
                        const tmp14 = analyticsLocations(runBeforeLaunchAttempt[10]);
                        if (data != null) {
                          const bot2 = data.bot;
                          if (bot2 != null) {
                            id1 = bot2.id;
                          }
                        }
                        if (analyticsLocations == null) {
                          analyticsLocations = [];
                        }
                        runBeforeLaunchAttempt = 3;
                        c5 = 1;
                        const obj11 = { value: launchActivityInBotDM(obj10), done: false };
                        return obj11;
                      } else {
                        c4 = 0;
                      }
                    }
                  }
                }
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === runBeforeLaunchAttempt) {
            c4 = 0;
          } else if (2 === runBeforeLaunchAttempt) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c5 = 3;
              const obj12 = { value, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (closure_129_3 != null) {
            closure_129_3();
          }
        } catch (tmp31) {
          let closure_3 = tmp31;
          if (0 === c4) {
            c5 = 3;
            throw tmp31;
          } else {
            runBeforeLaunchAttempt = 1;
          }
        }
      }
    }),
    items2,
  );
}
