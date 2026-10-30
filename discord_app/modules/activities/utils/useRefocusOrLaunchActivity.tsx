// discord_app/modules/activities/utils/useRefocusOrLaunchActivity.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../../frames/FramesStore.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

const require = fn;
const FrameLayoutModes = fn(6841).FrameLayoutModes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  const analyticsLocations = applicationId.analyticsLocations;
  const runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let stateFromStores1;
  const data = applicationId(runBeforeLaunchAttempt[5]).useApplication(applicationId).data;
  let obj = applicationId(runBeforeLaunchAttempt[5]);
  const items = [stateFromStores1];
  const stateFromStores = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items, () =>
    stateFromStores1.getCurrentEmbeddedActivity(),
  );
  const obj2 = applicationId(runBeforeLaunchAttempt[6]);
  const items1 = [stateFromStores];
  stateFromStores1 = applicationId(runBeforeLaunchAttempt[6]).useStateFromStores(items1, () =>
    stateFromStores.getMainFrame(),
  );
  const items2 = [
    analyticsLocations,
    data,
    applicationId,
    stateFromStores,
    stateFromStores1,
    runAfterLaunchAttempt,
    runBeforeLaunchAttempt,
  ];
  return data.useCallback(
    runAfterLaunchAttempt(function* () {
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
                      const result = v2(tmp25[7]).updateFrameLayoutMode(obj6);
                      const obj5 = v2(tmp25[7]);
                    }
                  }
                  if (tmp10) {
                    const _location = stateFromStores.location;
                    let guild_id = null;
                    if ("guild_id" in _location) {
                      guild_id = _location.guild_id;
                    }
                    v2(tmp25[8])(guild_id, _location);
                    const tmp18 = v2(tmp25[8]);
                  } else {
                    if (runBeforeLaunchAttempt != null) {
                      runBeforeLaunchAttempt();
                    }
                    c3 = 1;
                    const obj7 = { applicationId, analyticsLocations };
                    v2 = 2;
                    c4 = 1;
                    const obj8 = { value: v2(tmp25[9]).launch(obj7), done: false };
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
    }),
    items2,
  );
}
