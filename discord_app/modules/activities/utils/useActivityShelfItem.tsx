// === Module 12057: useActivityAction ===

// Module 12057 (useActivityAction)
import getApplicationFlags from "getApplicationFlags" /* 8856 */;
import getPlatformDefault from "getPlatform" /* 9410 */;
import canLaunchFrame from "canLaunchFrame" /* 9506 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 9632 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9633 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9652 */;
import useEmbeddedAppsDefault from "useEmbeddedApps" /* 12059 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "participantFromServer" /* 1956 */;
import { STAFF_RELEASE_PHASES } from "items3" /* 1920 */;
import { ApplicationFlags } from "ME" /* 1074 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 9511 */;

require = arg1;
function useActivityAction(applicationId) {
  ({ context, fetchesApplication } = applicationId);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  let getOrFetchApplication;
  const START = obj.START;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp4 = useCurrentEmbeddedActivityDefault();
  const tmp5 = useCurrentEmbeddedApplicationDefault({ fetchesApplication });
  obj = getOrFetchApplication(7168);
  getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId, fetchesApplication);
  useEmbeddedAppsDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    const getEmbeddedActivityLocationChannelId = getOrFetchApplication(4189).getEmbeddedActivityLocationChannelId;
    if (tmp4 != null) {
      const _location = tmp4.location;
    }
    if (null != channel) {
      if (tmp11 === channel.id) {
        let id;
        if (tmp5 != null) {
          id = tmp5.id;
        }
        if (id === getOrFetchApplication.id) {
          let JOIN = tmp.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp9) {
      JOIN = tmp.JOIN;
    }
    const tmp6Result = getOrFetchApplication(4189);
  }
}
function useOnActivityItemSelected(arg0) {
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({ locationObject: dependencyMap, embeddedActivitiesManager: closure_3, onActivityItemSelectedProp: closure_4, launchingComponentId: STAFF_RELEASE_PHASES, commandOrigin: ApplicationFlags, sectionName: MAIN_SURFACE, source: obj, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: useActivityAction, referrerId: useOnActivityItemSelected, onConfirmActivityLaunchChecksAlertOpen: closure_11 } = arg0);
  let str;
  let analyticsLocations;
  closure_14 = undefined;
  closure_15 = undefined;
  str = undefined;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp = useActivityAction({ context, applicationId: str, fetchesApplication });
  analyticsLocations = context(7162)().analyticsLocations;
  closure_14 = context(9633)();
  obj = canLaunchFrame;
  closure_15 = obj.canLaunchFrame(application);
  if (null == application) {
    return () => {
      if (closure_4 != null) {
        tmp({ applicationId: "" });
      }
    };
  } else if (obj.START === tmp) {
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
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
              closure_0 = tmp5;
              closure_0 = undefined;
              if (closure_1_15) {
                c3 = 1;
                let obj8 = closure_1_1(closure_1_2[18]);
                obj1 = { applicationId: null, surface: null, analyticsContext: null };
                obj1[0] = closure_1_12;
                obj1[1] = closure_1_7;
                const obj2 = { isStart: true, analyticsLocations: null, source: null, channelId: null };
                obj2[1] = closure_1_13;
                obj2[2] = closure_1_8;
                let id;
                if ("channel" === closure_1_1.type) {
                  id = closure_1_1.channel.id;
                }
                obj2[3] = id;
                obj1[2] = obj2;
                c4 = 2;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj8.launchFrame(obj1);
                return obj3;
              } else {
                let id1;
                if ("channel" === closure_1_1.type) {
                  id1 = closure_1_1.channel.id;
                }
                closure_0 = id1;
                if (null != closure_1_0) {
                  c3 = 2;
                  let obj5 = closure_1_1(closure_1_2[19]);
                  const obj4 = { recipientIds: null, navigateToChannel: true };
                  obj4[0] = tmp18;
                  c4 = 5;
                  c5 = 1;
                  obj5 = { value: null, done: false };
                  obj5[0] = obj5.openPrivateChannel(obj4);
                  return obj5;
                } else {
                  const obj6 = { targetApplicationId: null, locationObject: null, channelId: null, analyticsLocations: null, componentId: null, commandOrigin: null, sectionName: null, source: null, customId: null, referrerId: null, onConfirmActivityLaunchChecksAlertOpen: null };
                  obj6[0] = closure_12;
                  obj6[1] = closure_2;
                  obj6[2] = closure_0;
                  obj6[3] = closure_13;
                  obj6[4] = c5;
                  obj6[5] = closure_6;
                  obj6[6] = closure_7;
                  obj6[7] = closure_8;
                  obj6[8] = closure_9;
                  obj6[9] = closure_10;
                  obj6[10] = closure_11;
                  closure_1_1(closure_1_2[20])(obj6).then((arg0) => {
                    let tmp = arg0;
                    if (arg0) {
                      let tmp2Result;
                      if (c4 != null) {
                        obj = { applicationId: null };
                        obj[0] = closure_12;
                        tmp2Result = tmp2(obj);
                      }
                      tmp = tmp2Result;
                    }
                    return tmp;
                  });
                  c4 = 4;
                  c5 = 1;
                  const promise = closure_1_1(closure_1_2[20])(obj6);
                }
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            if (2 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                if (c4 != null) {
                  obj8 = { applicationId: null };
                  obj8[0] = closure_12;
                  tmp12(obj8);
                }
                c3 = 0;
              }
            } else if (3 === tmp8) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0 = arg1;
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp44) {
          closure_2 = tmp44;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp44;
          } else if (tmp === tmp46) {
            c4 = tmp;
          } else {
            c4 = tmp2;
          }
        }
      }
    });
  } else if (tmp2.JOIN === tmp) {
    return callback(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (!closure_1_4.isLaunchingActivity()) {
              obj1 = { applicationId: null, activityChannelId: null, locationObject: null, analyticsLocations: null, componentId: null, sectionName: null, source: null, customId: null, referrerId: null };
              obj1[0] = closure_1_12;
              let id;
              if ("channel" === v0.type) {
                id = v0.channel.id;
              }
              obj1[1] = id;
              obj1[2] = closure_1_2;
              obj1[3] = closure_1_13;
              obj1[4] = closure_1_5;
              obj1[5] = closure_1_7;
              obj1[6] = closure_1_8;
              obj1[7] = closure_1_9;
              obj1[8] = closure_1_10;
              const tmp7 = v0(closure_1_2[21]);
              v0 = 1;
              c0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = v0(closure_1_2[21])(obj1).then((arg0) => {
                let tmp = arg0;
                if (arg0) {
                  let tmp2Result;
                  if (closure_4 != null) {
                    obj = { applicationId: null };
                    obj[0] = closure_12;
                    tmp2Result = tmp2(obj);
                  }
                  tmp = tmp2Result;
                }
                return tmp;
              });
              return obj2;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          c0 = tmp;
          throw tmp17;
        }
      }
    });
  } else {
    return tmp2.LEAVE === tmp ? (() => {
      if (!closure_1_4.isLaunchingActivity()) {
        if (null != closure_14) {
          obj = { location: null, applicationId: null };
          obj[0] = tmp.location;
          obj[1] = str;
          closure_3.leaveActivity(obj);
        }
        if (closure_4 != null) {
          obj = { applicationId: null };
          obj[0] = str;
          tmp6(obj);
        }
      }
    }) : undefined;
  }
}
let obj = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
const result = require("set").fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default function useActivityShelfItem(backgroundResolution) {
  ({ activityItem, context, assetNames } = backgroundResolution);
  ({ locationObject, onActivityItemSelected, embeddedActivitiesManager } = backgroundResolution);
  if (assetNames === undefined) {
    assetNames = ["embedded_cover"];
  }
  let num = backgroundResolution.backgroundResolution;
  if (num === undefined) {
    num = 250;
  }
  let application;
  application = activityItem.application;
  const activity = activityItem.activity;
  ({ launchingComponentId, commandOrigin, source } = backgroundResolution);
  obj = application(1115);
  const tmp5 = activity.client_platform_config[getPlatformDefault(undefined, obj.getOS(obj))];
  const timestamp = Date.now();
  let tmp7 = null != tmp5.label_until;
  if (tmp7) {
    const _Date = Date;
    tmp7 = timestamp < Date.parse(tmp5.label_until);
  }
  if (tmp7) {
    tmp7 = null != tmp5.label_from;
  }
  if (tmp7) {
    const _Date2 = Date;
    tmp7 = timestamp > Date.parse(tmp5.label_from);
  }
  obj = { applicationId: application.id, size: num, names: assetNames, format: "webp" };
  let tmp9 = null;
  const tmp3 = getPlatformDefault;
  if (null != activity.activity_preview_video_asset_id) {
    tmp9 = tmp(12058)(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  let tmpResult = tmp(12059);
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp8 = useEmbeddedActivityBackgroundDefault(obj);
  obj = { context, applicationId: application.id };
  const found = tmpResult(channel).find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  obj1 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
  const tmpResultResult = tmpResult(channel);
  const tmp13 = useActivityAction(obj);
  let tmp4Result = tmp4(8856);
  if (tmp4Result.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    tmpResult = tmp(9410);
    tmp4Result = tmp4(1115);
    const str = activityItem.activity.client_platform_config[tmpResult(undefined, tmp4Result.getOS(tmp4Result))].release_phase;
    let replaced;
    if (STAFF_RELEASE_PHASES.includes(str)) {
      replaced = str.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
      const str4 = str.replace("_", " ");
    }
    const tmp16 = replaced;
  } else {
    const tmp4Result1 = tmp4(8856);
  }
  const obj2 = { imageBackground: tmp8, videoUrl: tmp9, joinableEmbeddedApp: found, activityAction: tmp13, onActivityItemSelected: useOnActivityItemSelected(obj1), labelType: null, staffReleasePhase: null };
  if (tmp7) {
    let NONE = tmp5.label_type;
  } else {
    NONE = tmp4(1894).EmbeddedActivityLabelTypes.NONE;
  }
  obj2[5] = NONE;
  obj2[6] = tmp16;
  return obj2;
};
export const ActivityAction = obj;
export const getStaffReleasePhase = function getStaffReleasePhase(application) {
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    let tmpResult = tmp(8856);
  }
  obj = getApplicationFlags;
  const tmp3 = ApplicationFlags;
  tmpResult = tmp(1115);
  const str = arg1.client_platform_config[getPlatformDefault(undefined, tmpResult.getOS(tmpResult))].release_phase;
  let replaced;
  if (STAFF_RELEASE_PHASES.includes(str)) {
    replaced = str.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
    const str4 = str.replace("_", " ");
  }
  return replaced;
};
export { useActivityAction };
export { useOnActivityItemSelected };