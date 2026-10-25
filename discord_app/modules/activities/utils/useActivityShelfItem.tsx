// === Module 12035: useActivityShelfItem ===

// Module 12035 (useActivityShelfItem)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import Server from "Server" /* 2000 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4892 */;
import getPlatformDefault from "getPlatform" /* 5633 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6811 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7253 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7257 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10771 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 11451 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11452 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11505 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 12036 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12037 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;

require = fn;
const STAFF_RELEASE_PHASES = fn(2026).STAFF_RELEASE_PHASES;
const ApplicationFlags = fn(1087).ApplicationFlags;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityAction(applicationId) {
  const obj = c;
  const cResult = obj.c(2);
  ({ context, fetchesApplication } = applicationId);
  let tmp4 = undefined === fetchesApplication;
  if (!tmp4) {
    tmp4 = fetchesApplication;
  }
  const START = obj.START;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp8 = useCurrentEmbeddedActivityDefault();
  if (cResult[0] !== tmp4) {
    const obj2 = { fetchesApplication: tmp4 };
    cResult[0] = tmp4;
    cResult[1] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  const tmp10 = useCurrentEmbeddedApplicationDefault(tmp9);
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId.applicationId, tmp4);
  useEmbeddedAppsForChannelDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
    if (tmp8 != null) {
      const _location = tmp8.location;
    }
    if (null != channel) {
      if (tmp15 === channel.id) {
        let id;
        if (tmp10 != null) {
          id = tmp10.id;
        }
        if (id === getOrFetchApplication.id) {
          let JOIN = tmp5.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp13) {
      JOIN = tmp5.JOIN;
    }
    const tmpResult2 = embeddedActivityLocationUtils;
  }
  const tmpResult = useGetOrFetchApplications;
}) : (function useActivityAction(applicationId) {
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
});
let closure_8 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnActivityItemSelected(locationObject) {
  const cResult = require("c").c(35);
  ({ application, context } = locationObject);
  _require = context;
  locationObject = locationObject.locationObject;
  onActivityItemSelectedProp = locationObject.onActivityItemSelectedProp;
  const launchingComponentId = locationObject.launchingComponentId;
  const commandOrigin = locationObject.commandOrigin;
  const sectionName = locationObject.sectionName;
  const source = locationObject.source;
  ({ fetchesApplication, customId } = locationObject);
  const referrerId = locationObject.referrerId;
  const onConfirmActivityLaunchChecksAlertOpen = locationObject.onConfirmActivityLaunchChecksAlertOpen;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[0] === str) {
    if (cResult[1] === context) {
      if (cResult[2] === tmp3) {
        let tmp4 = cResult[3];
      }
      const analyticsLocations = locationObject(tmp[17])().analyticsLocations;
      const tmp6 = referrerId(tmp4);
      closure_12 = locationObject(tmp[13])();
      if (null == application) {
        if (cResult[4] !== onActivityItemSelectedProp) {
          class C {
            constructor() {
              if (closure_2 != null) {
                tmpResult = tmp({ applicationId: "" });
              }
              return;
            }
          }
          cResult[4] = onActivityItemSelectedProp;
          cResult[5] = C;
        } else {
          class C {
            constructor() {
              if (closure_2 != null) {
                tmpResult = tmp({ applicationId: "" });
              }
              return;
            }
          }
        }
        return C;
      } else {
        class C {
          constructor() {
            if (closure_2 != null) {
              tmpResult = tmp({ applicationId: "" });
            }
            return;
          }
        }
        if (customId.START === tmp6) {
          class C {
            constructor() {
              if (closure_2 != null) {
                tmpResult = tmp({ applicationId: "" });
              }
              return;
            }
          }
          _require = launchingComponentId(function*() {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === locationObject) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const obj4 = { applicationId, channelId: null, locationObject: null, analyticsLocations: null, componentId: null, commandOrigin: null, sectionName: null, source: null, customId: null, referrerId: null, onConfirmActivityLaunchChecksAlertOpen: null };
                    let id = null;
                    if ("channel" === tmp2.type) {
                      id = tmp2.channel.id;
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
                    locationObject = 1;
                    c2 = 1;
                    const obj5 = { value: locationObject(onActivityItemSelectedProp[18]).launch(obj4), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  if (value) {
                    if (c2 != null) {
                      const obj = { applicationId };
                      tmp7(obj);
                    }
                  }
                  c2 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp22) {
                c2 = tmp;
                throw tmp22;
              }
            }
          });
          function _t2() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[6] = analyticsLocations;
          cResult[7] = str;
          cResult[8] = commandOrigin;
          cResult[9] = context.channel;
          cResult[10] = context.type;
          cResult[11] = customId;
          cResult[12] = launchingComponentId;
          cResult[13] = locationObject;
          cResult[14] = onActivityItemSelectedProp;
          cResult[15] = onConfirmActivityLaunchChecksAlertOpen;
          cResult[16] = referrerId;
          cResult[17] = sectionName;
          cResult[18] = source;
          cResult[19] = _t2;
        } else {
          class C {
            constructor() {
              if (closure_2 != null) {
                tmpResult = tmp({ applicationId: "" });
              }
              return;
            }
          }
        }
      }
      const tmp8 = locationObject(tmp[13])();
    }
  }
  let obj2 = { context, applicationId: str, fetchesApplication: undefined === fetchesApplication || fetchesApplication };
  cResult[0] = str;
  cResult[1] = context;
  cResult[2] = undefined === fetchesApplication || fetchesApplication;
  cResult[3] = obj2;
  tmp4 = obj2;
  let obj = require("c");
}) : (function useOnActivityItemSelected(arg0) {
  ({ application, context } = arg0);
  ({ locationObject: importDefault, onActivityItemSelectedProp: dependencyMap, launchingComponentId: asyncGeneratorStep, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: obj, referrerId: closure_8, onConfirmActivityLaunchChecksAlertOpen: closure_9 } = arg0);
  let analyticsLocations;
  closure_12 = undefined;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const tmp = referrerId({ context, applicationId: str, fetchesApplication });
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
          return { value: "IconComponent", done: null };
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
              const obj5 = { value: v1(dependencyMap[18]).launch(obj4), done: false };
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
            return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
                const obj5 = { value: v2(dependencyMap[19])(obj4), done: false };
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
          return { value: "IconComponent", done: null };
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
});
let closure_9 = tmp4;
function getStaffReleasePhase(application, arg1) {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityShelfItem(arg0) {
  const cResult = c.c(36);
  ({ activityItem, context, locationObject, onActivityItemSelected, assetNames, backgroundResolution, launchingComponentId, commandOrigin, source } = arg0);
  if (cResult[0] !== assetNames) {
    let items = assetNames;
    if (undefined === assetNames) {
      items = ["embedded_cover"];
    }
    cResult[0] = assetNames;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  let num3 = 250;
  if (undefined !== backgroundResolution) {
    num3 = backgroundResolution;
  }
  const application = activityItem.application;
  const activity = activityItem.activity;
  const tmpResult = PlatformUtils;
  const tmp7 = activity.client_platform_config[getPlatformDefault(undefined, tmpResult.getOS(tmpResult))];
  const timestamp = Date.now();
  let tmp9 = null != tmp7.label_until;
  if (tmp9) {
    const _Date = Date;
    tmp9 = timestamp < Date.parse(tmp7.label_until);
  }
  if (tmp9) {
    tmp9 = null != tmp7.label_from;
  }
  if (tmp9) {
    const _Date2 = Date;
    tmp9 = timestamp > Date.parse(tmp7.label_from);
  }
  if (cResult[2] === application.id) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === num3) {
        let tmp10 = cResult[5];
      }
      const tmp11 = useEmbeddedActivityBackgroundDefault(tmp10);
      if (cResult[6] === activity.activity_preview_video_asset_id) {
        if (cResult[7] === application.id) {
          let tmp12 = cResult[8];
        }
        let channel;
        if ("channel" === context.type) {
          channel = context.channel;
        }
        const tmp5ResultResult = useEmbeddedAppsForChannelDefault(channel);
        if (cResult[9] === application.id) {
          if (cResult[10] === tmp5ResultResult) {
            if (cResult[14] === application.id) {
              if (cResult[15] === context) {
                let tmp20 = cResult[16];
              }
              const tmp22 = closure_8(tmp20);
              if (cResult[17] === activityItem.application) {
                if (cResult[18] === commandOrigin) {
                  if (cResult[19] === context) {
                    if (cResult[20] === launchingComponentId) {
                      if (cResult[21] === locationObject) {
                        if (cResult[22] === onActivityItemSelected) {
                          if (cResult[23] === source) {
                            let tmp23 = cResult[24];
                          }
                          const tmp25 = closure_9(tmp23);
                          if (cResult[25] === activityItem.activity) {
                            if (cResult[26] === application) {
                              let tmp26 = cResult[27];
                            }
                            if (tmp9) {
                              let NONE = tmp7.label_type;
                            } else {
                              NONE = Server.EmbeddedActivityLabelTypes.NONE;
                            }
                            if (cResult[28] === tmp22) {
                              if (cResult[29] === tmp11) {
                                if (cResult[30] === tmp16) {
                                  if (cResult[31] === tmp25) {
                                    if (cResult[32] === tmp26) {
                                      if (cResult[33] === NONE) {
                                        if (cResult[34] === tmp12) {
                                          let tmp32 = cResult[35];
                                        }
                                        return tmp32;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj2 = { imageBackground: tmp11, videoUrl: tmp12, joinableEmbeddedApp: tmp16, activityAction: tmp22, onActivityItemSelected: tmp25, labelType: NONE, staffReleasePhase: tmp26 };
                            cResult[28] = tmp22;
                            cResult[29] = tmp11;
                            cResult[30] = tmp16;
                            cResult[31] = tmp25;
                            cResult[32] = tmp26;
                            cResult[33] = NONE;
                            cResult[34] = tmp12;
                            cResult[35] = obj2;
                            tmp32 = obj2;
                          }
                          if (tmpResult4.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
                            const tmpResult5 = PlatformUtils;
                            const str2 = activityItem.activity.client_platform_config[getPlatformDefault(undefined, tmpResult5.getOS(tmpResult5))].release_phase;
                            let replaced;
                            if (STAFF_RELEASE_PHASES.includes(str2)) {
                              replaced = str2.replace("_", " ").replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
                              const str5 = str2.replace("_", " ");
                            }
                            const tmp5Result2 = getPlatformDefault;
                          } else {
                            ApplicationFlagUtils;
                          }
                          cResult[25] = activityItem.activity;
                          cResult[26] = application;
                          cResult[27] = tmp28;
                          tmp26 = tmp28;
                          tmpResult4 = ApplicationFlagUtils;
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = { application: activityItem.application, context, locationObject, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
              cResult[17] = activityItem.application;
              cResult[18] = commandOrigin;
              cResult[19] = context;
              cResult[20] = launchingComponentId;
              cResult[21] = locationObject;
              cResult[22] = onActivityItemSelected;
              cResult[23] = source;
              cResult[24] = obj3;
              tmp23 = obj3;
            }
            const obj4 = { context, applicationId: application.id };
            cResult[14] = application.id;
            cResult[15] = context;
            cResult[16] = obj4;
            tmp20 = obj4;
          }
        }
        if (cResult[12] !== application.id) {
          const fn = function w(embeddedActivity) {
            return application.id === embeddedActivity.embeddedActivity.applicationId;
          };
          cResult[12] = application.id;
          cResult[13] = fn;
          let tmp17 = fn;
        } else {
          tmp17 = cResult[13];
        }
        const found = tmp5ResultResult.find(tmp17);
        cResult[9] = application.id;
        cResult[10] = tmp5ResultResult;
        cResult[11] = found;
        const tmp5Result = useEmbeddedAppsForChannelDefault;
      }
      let tmp13 = null;
      if (null != activity.activity_preview_video_asset_id) {
        tmp13 = getPreviewVideoAssetUrlDefault(application.id, activity.activity_preview_video_asset_id);
      }
      cResult[6] = activity.activity_preview_video_asset_id;
      cResult[7] = application.id;
      cResult[8] = tmp13;
      tmp12 = tmp13;
    }
  }
  const obj5 = { applicationId: application.id, size: num3, names: tmp4, format: "webp" };
  cResult[2] = application.id;
  cResult[3] = tmp4;
  cResult[4] = num3;
  cResult[5] = obj5;
  tmp10 = obj5;
}) : (function useActivityShelfItem(backgroundResolution) {
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
  const tmp13 = closure_8({ context, applicationId: application.id });
  const tmp14 = closure_9(obj4);
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
});
export { ActivityAction };
export { getStaffReleasePhase };
export const useActivityAction = tmp3;
export const useOnActivityItemSelected = tmp4;