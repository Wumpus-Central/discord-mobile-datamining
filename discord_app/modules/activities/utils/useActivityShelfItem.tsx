// === Module 12057: useActivityShelfItem ===

// Module 12057 (useActivityShelfItem)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7168 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8856 */;
import getPlatformDefault from "getPlatform" /* 9410 */;
import canLaunchFrame from "canLaunchFrame" /* 9506 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 9632 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9633 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9652 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12059 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
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
  obj = useGetOrFetchApplications;
  getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId, fetchesApplication);
  useEmbeddedAppsForChannelDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
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
    const tmp6Result = embeddedActivityLocationUtils;
  }
}
function useOnActivityItemSelected(arg0) {
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({ locationObject: dependencyMap, embeddedActivitiesManager: asyncGeneratorStep, onActivityItemSelectedProp: EmbeddedActivitiesStore, launchingComponentId: STAFF_RELEASE_PHASES, commandOrigin: ApplicationFlags, sectionName: MAIN_SURFACE, source: obj, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: useActivityAction, referrerId: useOnActivityItemSelected, onConfirmActivityLaunchChecksAlertOpen: closure_11 } = arg0);
  let analyticsLocations;
  closure_14 = undefined;
  closure_15 = undefined;
  let str;
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
      if (EmbeddedActivitiesStore != null) {
        tmp({ applicationId: "" });
      }
    };
  } else if (obj.START === tmp) {
    return asyncGeneratorStep(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp5;
              closure_128_0 = undefined;
              if (closure_15) {
                c3 = 1;
                let obj8 = tmp3(tmp44[18]);
                const obj1 = { applicationId: str, surface, analyticsContext: null };
                const obj2 = { isStart: true, analyticsLocations, source, channelId: null };
                let id;
                if ("channel" === context.type) {
                  id = context.channel.id;
                }
                obj2.channelId = id;
                obj1.analyticsContext = obj2;
                c4 = 2;
                c5 = 1;
                const obj3 = { value: obj8.launchFrame(obj1), done: false };
                return obj3;
              } else {
                let id1;
                if ("channel" === context.type) {
                  id1 = context.channel.id;
                }
                closure_128_0 = id1;
                if (null != require) {
                  c3 = 2;
                  let obj5 = tmp3(tmp44[19]);
                  const obj4 = { recipientIds: tmp18, navigateToChannel: true };
                  c4 = 5;
                  c5 = 1;
                  obj5 = { value: null, done: false };
                  obj5.value = obj5.openPrivateChannel(obj4);
                  return obj5;
                } else {
                  const obj6 = { targetApplicationId: closure_129_12, locationObject: closure_129_2, channelId: closure_128_0, analyticsLocations: closure_129_13, componentId: closure_129_5, commandOrigin: closure_129_6, sectionName: closure_129_7, source: closure_129_8, customId: closure_129_9, referrerId: closure_129_10, onConfirmActivityLaunchChecksAlertOpen: closure_129_11 };
                  tmp3(tmp44[20])(obj6).then((result) => {
                    let tmp = result;
                    if (result) {
                      let tmp2Result;
                      if (closure_1_4 != null) {
                        const obj = { applicationId };
                        tmp2Result = tmp2(obj);
                      }
                      tmp = tmp2Result;
                    }
                    return tmp;
                  });
                  c4 = 4;
                  c5 = 1;
                  const promise = tmp3(tmp44[20])(obj6);
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
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                if (closure_129_4 != null) {
                  obj8 = { applicationId: closure_129_12 };
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
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp44) {
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
    return asyncGeneratorStep(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else if (!launchingActivity.isLaunchingActivity()) {
              const obj1 = { applicationId: str, activityChannelId: null, locationObject: null, analyticsLocations: null, componentId: null, sectionName: null, source: null, customId: null, referrerId: null };
              let id;
              if ("channel" === context.type) {
                id = context.channel.id;
              }
              obj1.activityChannelId = id;
              obj1.locationObject = locationObject;
              obj1.analyticsLocations = analyticsLocations;
              obj1.componentId = componentId;
              obj1.sectionName = sectionName;
              obj1.source = source;
              obj1.customId = customId;
              obj1.referrerId = referrerId;
              const tmp7 = v1(locationObject[21]);
              v1 = 1;
              c0 = 1;
              const obj2 = {
                value: v1(locationObject[21])(obj1).then((result) => {
                          let tmp = result;
                          if (result) {
                            let tmp2Result;
                            if (launchingActivity != null) {
                              const obj = { applicationId };
                              tmp2Result = tmp2(obj);
                            }
                            tmp = tmp2Result;
                          }
                          return tmp;
                        }),
                done: false
              };
              return obj2;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
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
      if (!EmbeddedActivitiesStore.isLaunchingActivity()) {
        if (null != closure_14) {
          let obj = { location: tmp.location, applicationId: str };
          asyncGeneratorStep.leaveActivity(obj);
        }
        if (closure_1_4 != null) {
          obj = { applicationId: str };
          tmp6(obj);
        }
      }
    }) : undefined;
  }
}
const STAFF_RELEASE_PHASES = fn(1920).STAFF_RELEASE_PHASES;
const ApplicationFlags = fn(1074).ApplicationFlags;
const MAIN_SURFACE = fn(9511).MAIN_SURFACE;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

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
  const application = activityItem.application;
  const activity = activityItem.activity;
  ({ launchingComponentId, commandOrigin, source } = backgroundResolution);
  let obj = PlatformUtils;
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
  const obj1 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
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
  obj2.labelType = NONE;
  obj2.staffReleasePhase = tmp16;
  return obj2;
};
export { ActivityAction };
export const getStaffReleasePhase = function getStaffReleasePhase(application, arg1) {
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    let tmpResult = tmp(8856);
  }
  obj = ApplicationFlagUtils;
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