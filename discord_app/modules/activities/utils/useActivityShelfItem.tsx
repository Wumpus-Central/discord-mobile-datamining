// discord_app/modules/activities/utils/useActivityShelfItem.tsx
import getApplicationFlags from "../../applications/utils/ApplicationFlagUtils.tsx";
import getPlatformDefault from "getPlatform.tsx";
import canLaunchFrame from "../../frames/utils/canLaunchFrame.tsx";
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication.tsx";
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity.tsx";
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground.tsx";
import useEmbeddedAppsDefault from "../useEmbeddedAppsForChannel.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../EmbeddedActivitiesStore.tsx";
import { STAFF_RELEASE_PHASES } from "../Constants.tsx";
import { ApplicationFlags } from "../../../Constants.tsx";
import { MAIN_SURFACE } from "../../frames/FramesConstants.tsx";

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
  obj = getOrFetchApplication(5959);
  getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId, fetchesApplication);
  useEmbeddedAppsDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    const getEmbeddedActivityLocationChannelId = getOrFetchApplication(4111).getEmbeddedActivityLocationChannelId;
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
    const tmp6Result = getOrFetchApplication(4111);
  }
}
function useOnActivityItemSelected(arg0) {
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({
    locationObject: dependencyMap,
    embeddedActivitiesManager: closure_3,
    onActivityItemSelectedProp: closure_4,
    launchingComponentId: STAFF_RELEASE_PHASES,
    commandOrigin: ApplicationFlags,
    sectionName: MAIN_SURFACE,
    source: obj,
    fetchesApplication,
  } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({
    customId: useActivityAction,
    referrerId: useOnActivityItemSelected,
    onConfirmActivityLaunchChecksAlertOpen: closure_11,
  } = arg0);
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
  analyticsLocations = context(5953)().analyticsLocations;
  closure_14 = context(9602)();
  obj = canLaunchFrame;
  closure_15 = obj.canLaunchFrame(application);
  if (null == application) {
    return () => {
      if (closure_4 != null) {
        tmp({ applicationId: "" });
      }
    };
  } else if (obj.START === tmp) {
    return callback(function* () {
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
                obj1 = { applicationId: null, surface: null };
                obj1[0] = closure_1_12;
                obj1[1] = closure_1_7;
                c4 = 2;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj8.launchFrame(obj1);
                return obj2;
              } else {
                let id;
                if ("channel" === closure_1_1.type) {
                  id = closure_1_1.channel.id;
                }
                closure_0 = id;
                if (null != closure_1_0) {
                  c3 = 2;
                  let obj5 = closure_1_1(closure_1_2[19]);
                  const obj3 = { recipientIds: null, navigateToChannel: true };
                  obj3[0] = tmp18;
                  c4 = 5;
                  c5 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj5.openPrivateChannel(obj3);
                  return obj4;
                } else {
                  obj5 = {
                    targetApplicationId: null,
                    locationObject: null,
                    channelId: null,
                    analyticsLocations: null,
                    componentId: null,
                    commandOrigin: null,
                    sectionName: null,
                    source: null,
                    customId: null,
                    referrerId: null,
                    onConfirmActivityLaunchChecksAlertOpen: null,
                  };
                  obj5[0] = closure_12;
                  obj5[1] = closure_2;
                  obj5[2] = closure_0;
                  obj5[3] = closure_13;
                  obj5[4] = c5;
                  obj5[5] = closure_6;
                  obj5[6] = closure_7;
                  obj5[7] = closure_8;
                  obj5[8] = closure_9;
                  obj5[9] = closure_10;
                  obj5[10] = closure_11;
                  closure_1_1(closure_1_2[20])(obj5).then((arg0) => {
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
                  const promise = closure_1_1(closure_1_2[20])(obj5);
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
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                if (c4 != null) {
                  const obj7 = { applicationId: null };
                  obj7[0] = closure_12;
                  tmp12(obj7);
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
                obj8 = { value: null, done: true };
                obj8[0] = arg1;
                return obj8;
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
        } catch (tmp41) {
          closure_2 = tmp41;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp41;
          } else if (tmp === tmp43) {
            c4 = tmp;
          } else {
            c4 = tmp2;
          }
        }
      }
    });
  } else if (tmp2.JOIN === tmp) {
    return callback(function* () {
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
              obj1 = {
                applicationId: null,
                activityChannelId: null,
                locationObject: null,
                analyticsLocations: null,
                componentId: null,
                sectionName: null,
                source: null,
                customId: null,
                referrerId: null,
              };
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
    return tmp2.LEAVE === tmp
      ? () => {
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
        }
      : undefined;
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
  obj = application(500);
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
    tmp9 = tmp(11630)(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  let tmpResult = tmp(11631);
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp8 = useEmbeddedActivityBackgroundDefault(obj);
  obj = { context, applicationId: application.id };
  const found = tmpResult(channel).find(
    (embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId,
  );
  obj1 = {
    application: activityItem.application,
    context,
    locationObject,
    embeddedActivitiesManager,
    onActivityItemSelectedProp: onActivityItemSelected,
    launchingComponentId,
    commandOrigin,
    source,
  };
  const tmpResultResult = tmpResult(channel);
  const tmp13 = useActivityAction(obj);
  let tmp4Result = tmp4(8436);
  if (tmp4Result.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    tmpResult = tmp(8437);
    tmp4Result = tmp4(500);
    const str =
      activityItem.activity.client_platform_config[tmpResult(undefined, tmp4Result.getOS(tmp4Result))].release_phase;
    let replaced;
    if (STAFF_RELEASE_PHASES.includes(str)) {
      replaced = str.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
      const str4 = str.replace("_", " ");
    }
    const tmp16 = replaced;
  } else {
    const tmp4Result1 = tmp4(8436);
  }
  const obj2 = {
    imageBackground: tmp8,
    videoUrl: tmp9,
    joinableEmbeddedApp: found,
    activityAction: tmp13,
    onActivityItemSelected: useOnActivityItemSelected(obj1),
    labelType: null,
    staffReleasePhase: null,
  };
  if (tmp7) {
    let NONE = tmp5.label_type;
  } else {
    NONE = tmp4(1955).EmbeddedActivityLabelTypes.NONE;
  }
  obj2[5] = NONE;
  obj2[6] = tmp16;
  return obj2;
}
export const ActivityAction = obj;
export const getStaffReleasePhase = function getStaffReleasePhase(application) {
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    let tmpResult = tmp(8436);
  }
  obj = getApplicationFlags;
  const tmp3 = ApplicationFlags;
  tmpResult = tmp(500);
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
