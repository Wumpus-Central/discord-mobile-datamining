// === Module 12245: useActivityShelfItem ===

// Module 12245 (useActivityShelfItem)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import Server from "Server" /* 1992 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4935 */;
import getPlatformDefault from "getPlatform" /* 5682 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6883 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7330 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10932 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 11787 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11788 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11841 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 12246 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12247 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;

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
  ({ application, context } = arg0);
  ({ locationObject: importDefault, onActivityItemSelectedProp: dependencyMap, launchingComponentId: asyncGeneratorStep, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: obj, referrerId: useActivityAction, onConfirmActivityLaunchChecksAlertOpen: useOnActivityItemSelected } = arg0);
  let analyticsLocations;
  closure_12 = undefined;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const tmp = useActivityAction({ context, applicationId: str, fetchesApplication });
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  closure_12 = useCurrentEmbeddedActivityDefault();
  if (null == application) {
    return () => {
      if (dependencyMap != null) {
        tmp({ applicationId: "" });
      }
    };
  } else if (obj.START === tmp) {
    return asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp2;
              const obj4 = { applicationId: str, channelId: null, locationObject: null, analyticsLocations: null, componentId: null, commandOrigin: null, sectionName: null, source: null, customId: null, referrerId: null, onConfirmActivityLaunchChecksAlertOpen: null };
              let id = null;
              if ("channel" === context.type) {
                id = context.channel.id;
              }
              obj4.channelId = id;
              obj4.locationObject = locationObject;
              obj4.analyticsLocations = analyticsLocations;
              obj4.componentId = componentId;
              obj4.commandOrigin = commandOrigin;
              obj4.sectionName = sectionName;
              obj4.source = source;
              obj4.customId = customId;
              obj4.referrerId = referrerId;
              obj4.onConfirmActivityLaunchChecksAlertOpen = onConfirmActivityLaunchChecksAlertOpen;
              v1 = 1;
              dependencyMap = 1;
              const obj5 = { value: v1(dependencyMap[16]).launch(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              if (closure_128_2 != null) {
                const obj = { applicationId: closure_128_10 };
                tmp7(obj);
              }
            }
            dependencyMap = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp22) {
          dependencyMap = tmp;
          throw tmp22;
        }
      }
    });
  } else if (obj.JOIN === tmp) {
    return asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp2;
              if (!launchingActivity.isLaunchingActivity()) {
                const obj4 = { applicationId: str, activityChannelId: null, locationObject: null, analyticsLocations: null, componentId: null, sectionName: null, source: null, customId: null, referrerId: null };
                let id;
                if ("channel" === context.type) {
                  id = context.channel.id;
                }
                obj4.activityChannelId = id;
                obj4.locationObject = locationObject;
                obj4.analyticsLocations = analyticsLocations;
                obj4.componentId = componentId;
                obj4.sectionName = sectionName;
                obj4.source = source;
                obj4.customId = customId;
                obj4.referrerId = referrerId;
                v2 = 1;
                dependencyMap = 1;
                const obj5 = { value: v2(dependencyMap[17])(obj4), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (value) {
              let tmp7Result;
              if (closure_128_2 != null) {
                const obj7 = { applicationId: closure_128_10 };
                tmp7Result = tmp7(obj7);
              }
              v2 = 2;
              dependencyMap = 1;
              const obj8 = { value: tmp7Result, done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp24) {
          dependencyMap = tmp;
          throw tmp24;
        }
      }
    });
  } else {
    return obj.LEAVE === tmp ? (() => {
      if (!EmbeddedActivitiesStore.isLaunchingActivity()) {
        if (null != closure_12) {
          const obj2 = { location: tmp.location, applicationId: str };
          const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj2);
        }
        if (dependencyMap != null) {
          const obj3 = { applicationId: str };
          tmp7(obj3);
        }
      }
    }) : undefined;
  }
}
const STAFF_RELEASE_PHASES = fn(2018).STAFF_RELEASE_PHASES;
const ApplicationFlags = fn(1072).ApplicationFlags;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default function useActivityShelfItem(backgroundResolution) {
  ({ activityItem, context, assetNames } = backgroundResolution);
  ({ locationObject, onActivityItemSelected } = backgroundResolution);
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
  const obj = PlatformUtils;
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
  let tmp9 = null;
  const obj2 = { applicationId: application.id, size: num, names: assetNames, format: "webp" };
  if (null != activity.activity_preview_video_asset_id) {
    tmp9 = getPreviewVideoAssetUrlDefault(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  const tmp8 = useEmbeddedActivityBackgroundDefault({ applicationId: application.id, size: num, names: assetNames, format: "webp" });
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmpResult = useEmbeddedAppsForChannelDefault;
  const found = useEmbeddedAppsForChannelDefault(channel).find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  const obj3 = { context, applicationId: application.id };
  const obj4 = { application: activityItem.application, context, locationObject, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
  const tmpResultResult = useEmbeddedAppsForChannelDefault(channel);
  const tmp13 = useActivityAction({ context, applicationId: application.id });
  const tmp14 = useOnActivityItemSelected(obj4);
  if (tmp4Result.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    const tmp4Result3 = PlatformUtils;
    const str = activityItem.activity.client_platform_config[getPlatformDefault(undefined, tmp4Result3.getOS(tmp4Result3))].release_phase;
    let replaced;
    if (STAFF_RELEASE_PHASES.includes(str)) {
      replaced = str.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
      const str4 = str.replace("_", " ");
    }
    const tmp16 = replaced;
    const tmpResult2 = getPlatformDefault;
  } else {
    ApplicationFlagUtils;
  }
  const obj5 = { imageBackground: tmp8, videoUrl: tmp9, joinableEmbeddedApp: found, activityAction: tmp13, onActivityItemSelected: tmp14, labelType: null, staffReleasePhase: null };
  if (tmp7) {
    let NONE = tmp5.label_type;
  } else {
    NONE = Server.EmbeddedActivityLabelTypes.NONE;
  }
  obj5.labelType = NONE;
  obj5.staffReleasePhase = tmp16;
  return obj5;
};
export { ActivityAction };
export function getStaffReleasePhase(application, arg1) {
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    ApplicationFlagUtils;
  }
  obj = ApplicationFlagUtils;
  const tmpResult2 = PlatformUtils;
  const str = arg1.client_platform_config[getPlatformDefault(undefined, tmpResult2.getOS(tmpResult2))].release_phase;
  let replaced;
  if (STAFF_RELEASE_PHASES.includes(str)) {
    replaced = str.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
    const str4 = str.replace("_", " ");
  }
  return replaced;
}
export { useActivityAction };
export { useOnActivityItemSelected };