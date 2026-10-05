// === Module 11671: useActivityShelfItem ===

// Module 11671 (useActivityShelfItem)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Server from "Server" /* 1985 */;
import Constants2 from "Constants" /* 2011 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4498 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6663 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
import getPlatformDefault from "getPlatform" /* 8933 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 8994 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 9131 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9132 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9149 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 11672 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11673 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let applicationId, c0, c4, c5;

function useOnActivityItemSelected(arg0) {
  let application;
  let closure_11;
  let componentId;
  let context;
  let fetchesApplication;
  let obj;
  let referrerId;
  let sectionName;
  let source;
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({ locationObject: dependencyMap, embeddedActivitiesManager: _asyncToGenerator, onActivityItemSelectedProp: EmbeddedActivitiesStore, launchingComponentId: STAFF_RELEASE_PHASES, commandOrigin: ApplicationFlags, sectionName: MAIN_SURFACE, source: obj, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: closure_9, referrerId: useOnActivityItemSelected, onConfirmActivityLaunchChecksAlertOpen: closure_11 } = arg0);
  let analyticsLocations;
  let closure_14;
  let closure_15;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp = customId({ context, applicationId: str, fetchesApplication });
  analyticsLocations = context(6657)().analyticsLocations;
  closure_14 = context(9132)();
  obj = canLaunchContextlessFrame;
  closure_15 = obj.canLaunchContextlessFrame(application);
  if (null == application) {
    return () => {
      if (EmbeddedActivitiesStore != null) {
        tmp({ applicationId: "" });
      }
    };
  } else {
    const tmp2 = obj;
    if (obj.START === tmp) {
      return _asyncToGenerator(async () => {
        let closure_1;
        let closure_2;
        let id;
        let obj5;
        let tmp;
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
          let c3;
          try {
            let channelId;
            let launchFrame;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                channelId = undefined;
                if (closure_15) {
                  c3 = 1;
                  launchFrame = tmp(locationObject[20]).launchFrame;
                  const obj4 = { applicationId: str, surface, analyticsContext: obj5 };
                  obj5 = { isStart: true, analyticsLocations, source, channelId: id };
                  id = undefined;
                  const tmp33 = tmp(locationObject[20]);
                  if ("channel" === context.type) {
                    id = context.channel.id;
                  }
                  launchFrame = launchFrame(obj4);
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: launchFrame, done: false };
                  return obj6;
                } else {
                  let id1;
                  if ("channel" === context.type) {
                    id1 = context.channel.id;
                  }
                  channelId = id1;
                  if (null != require) {
                    c3 = 2;
                    const obj8 = { recipientIds: tmp13, navigateToChannel: true };
                    const obj7 = tmp(locationObject[21]);
                    launchFrame = obj7.openPrivateChannel(obj8);
                    c4 = 5;
                    c5 = 1;
                    const obj9 = { value: launchFrame, done: false };
                    return obj9;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  launchFrame = closure_129_4;
                  if (closure_129_4 != null) {
                    const obj11 = { applicationId: closure_129_12 };
                    launchFrame(obj11);
                  }
                  c3 = 0;
                }
              } else if (3 === c4) {
                c3 = 0;
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else if (4 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                channelId = value;
                c3 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
            const obj13 = { targetApplicationId: closure_129_12, locationObject: closure_129_2, channelId, analyticsLocations: closure_129_13, componentId: closure_129_5, commandOrigin: closure_129_6, sectionName: closure_129_7, source: closure_129_8, customId: closure_129_9, referrerId: closure_129_10, onConfirmActivityLaunchChecksAlertOpen: closure_129_11 };
            const promise = tmp(locationObject[22])(obj13);
            launchFrame = promise.then((result) => {
              let tmp = result;
              if (tmp) {
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
            const obj14 = { value: launchFrame, done: false };
            return obj14;
          } catch (tmp39) {
            locationObject = tmp39;
            if (0 === c3) {
              c5 = 3;
              throw tmp39;
            } else if (1 === tmp41) {
              c4 = 1;
            } else {
              c4 = 3;
            }
          }
        }
      });
    } else if (tmp2.JOIN === tmp) {
      return _asyncToGenerator(async () => {
        let id;
        let tmp6Result;
        let v1;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
            c0 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else if (!launchingActivity.isLaunchingActivity()) {
                const obj4 = { applicationId: str, activityChannelId: id, locationObject: dependencyMap, analyticsLocations, componentId: STAFF_RELEASE_PHASES, sectionName: MAIN_SURFACE, source, customId, referrerId: useOnActivityItemSelected };
                id = undefined;
                const tmp6 = v1(locationObject[23]);
                if ("channel" === context.type) {
                  id = context.channel.id;
                }
                v1 = 1;
                c0 = 1;
                const obj5 = {
                  value: tmp6Result.then((result) => {
                            let tmp = result;
                            if (tmp) {
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
                tmp6Result = tmp6(obj4);
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              let obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp16) {
            c0 = 3;
            throw tmp16;
          }
        }
      });
    } else {
      return tmp2.LEAVE === tmp ? (() => {
        if (!EmbeddedActivitiesStore.isLaunchingActivity()) {
          if (null != closure_14) {
            const obj = { location: tmp.location, applicationId: str };
            _asyncToGenerator.leaveActivity(obj);
          }
          if (EmbeddedActivitiesStore != null) {
            const obj2 = { applicationId: str };
            tmp6(obj2);
          }
        }
      }) : undefined;
    }
  }
}
const STAFF_RELEASE_PHASES = Constants2.STAFF_RELEASE_PHASES;
const ApplicationFlags = Constants.ApplicationFlags;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activityItem;
  let assetNames;
  let backgroundResolution;
  let commandOrigin;
  let context;
  let embeddedActivitiesManager;
  let launchingComponentId;
  let locationObject;
  let onActivityItemSelected;
  let source;
  let tmp4;
  const obj = react;
  const cResult = obj.c(37);
  ({ activityItem, context, locationObject, onActivityItemSelected, embeddedActivitiesManager, assetNames, backgroundResolution, launchingComponentId, commandOrigin, source } = arg0);
  if (cResult[0] !== assetNames) {
    let items = assetNames;
    if (undefined === assetNames) {
      items = ["embedded_cover"];
    }
    cResult[0] = assetNames;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  let num3 = 250;
  if (undefined !== backgroundResolution) {
    num3 = backgroundResolution;
  }
  const application = activityItem.application;
  const activity = activityItem.activity;
  const client_platform_config = activity.client_platform_config;
  const tmp6 = getPlatformDefault;
  const tmpResult = PlatformUtils;
  const tmp7 = client_platform_config[tmp6(undefined, tmpResult.getOS(tmpResult))];
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
      let tmp10;
      if (cResult[4] === num3) {
        tmp10 = cResult[5];
      }
      const tmp11 = useEmbeddedActivityBackgroundDefault(tmp10);
      if (cResult[6] === activity.activity_preview_video_asset_id) {
        let tmp12;
        if (cResult[7] === application.id) {
          tmp12 = cResult[8];
        }
        let channel;
        const tmp5Result = useEmbeddedAppsForChannelDefault;
        if ("channel" === context.type) {
          channel = context.channel;
        }
        const tmp5ResultResult = tmp5Result(channel);
        if (cResult[9] === application.id) {
          let tmp16;
          if (cResult[10] === tmp5ResultResult) {
            tmp16 = cResult[11];
          }
          if (cResult[14] === application.id) {
            let tmp19;
            if (cResult[15] === context) {
              tmp19 = cResult[16];
            }
            const tmp21 = closure_9(tmp19);
            if (cResult[17] === activityItem.application) {
              if (cResult[18] === commandOrigin) {
                if (cResult[19] === context) {
                  if (cResult[20] === embeddedActivitiesManager) {
                    if (cResult[21] === launchingComponentId) {
                      if (cResult[22] === locationObject) {
                        if (cResult[23] === onActivityItemSelected) {
                          let tmp22;
                          if (cResult[24] === source) {
                            tmp22 = cResult[25];
                          }
                          const tmp24 = useOnActivityItemSelected(tmp22);
                          if (cResult[26] === activityItem.activity) {
                            let tmp25;
                            let NONE;
                            if (cResult[27] === application) {
                              tmp25 = cResult[28];
                            }
                            if (tmp9) {
                              NONE = tmp7.label_type;
                            } else {
                              NONE = Server.EmbeddedActivityLabelTypes.NONE;
                            }
                            if (cResult[29] === tmp21) {
                              if (cResult[30] === tmp11) {
                                if (cResult[31] === tmp16) {
                                  if (cResult[32] === tmp24) {
                                    if (cResult[33] === tmp25) {
                                      if (cResult[34] === NONE) {
                                        let tmp31;
                                        if (cResult[35] === tmp12) {
                                          tmp31 = cResult[36];
                                        }
                                        return tmp31;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj2 = { imageBackground: tmp11, videoUrl: tmp12, joinableEmbeddedApp: tmp16, activityAction: tmp21, onActivityItemSelected: tmp24, labelType: NONE, staffReleasePhase: tmp25 };
                            cResult[29] = tmp21;
                            cResult[30] = tmp11;
                            cResult[31] = tmp16;
                            cResult[32] = tmp24;
                            cResult[33] = tmp25;
                            cResult[34] = NONE;
                            cResult[35] = tmp12;
                            cResult[36] = obj2;
                            tmp31 = obj2;
                          }
                          const activity2 = activityItem.activity;
                          const tmpResult4 = ApplicationFlagUtils;
                          if (tmpResult4.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
                            const client_platform_config2 = activity2.client_platform_config;
                            const tmp5Result2 = getPlatformDefault;
                            const tmpResult5 = PlatformUtils;
                            const str2 = client_platform_config2[tmp5Result2(undefined, tmpResult5.getOS(tmpResult5))].release_phase;
                            let replaced;
                            if (STAFF_RELEASE_PHASES.includes(str2)) {
                              const str5 = str2.replace("_", " ");
                              replaced = str5.replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
                            }
                          } else {
                            ApplicationFlagUtils;
                          }
                          cResult[26] = activityItem.activity;
                          cResult[27] = application;
                          cResult[28] = tmp27;
                          tmp25 = tmp27;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
            cResult[17] = activityItem.application;
            cResult[18] = commandOrigin;
            cResult[19] = context;
            cResult[20] = embeddedActivitiesManager;
            cResult[21] = launchingComponentId;
            cResult[22] = locationObject;
            cResult[23] = onActivityItemSelected;
            cResult[24] = source;
            cResult[25] = obj3;
            tmp22 = obj3;
          }
          const obj4 = { context, applicationId: application.id };
          cResult[14] = application.id;
          cResult[15] = context;
          cResult[16] = obj4;
          tmp19 = obj4;
        }
        if (cResult[12] !== application.id) {
          class N {
            constructor(embeddedActivity) {
              return application.id === embeddedActivity.embeddedActivity.applicationId;
            }
          }
          cResult[12] = application.id;
          cResult[13] = N;
        } else {
          class N {
            constructor(embeddedActivity) {
              return application.id === embeddedActivity.embeddedActivity.applicationId;
            }
          }
        }
        const found = tmp5ResultResult.find(N);
        cResult[9] = application.id;
        cResult[10] = tmp5ResultResult;
        cResult[11] = found;
        tmp16 = found;
      }
      if (null != activity.activity_preview_video_asset_id) {
        class N {
          constructor(embeddedActivity) {
            return application.id === embeddedActivity.embeddedActivity.applicationId;
          }
        }
      }
      cResult[6] = activity.activity_preview_video_asset_id;
      cResult[7] = application.id;
      cResult[8] = null;
      tmp12 = tmp13;
    }
  }
  const obj5 = { applicationId: application.id, size: num3, names: tmp4, format: "webp" };
  cResult[2] = application.id;
  cResult[3] = tmp4;
  cResult[4] = num3;
  cResult[5] = obj5;
  tmp10 = obj5;
}) : ((backgroundResolution) => {
  let NONE;
  let activityItem;
  let assetNames;
  let commandOrigin;
  let context;
  let embeddedActivitiesManager;
  let launchingComponentId;
  let locationObject;
  let onActivityItemSelected;
  let source;
  let tmp16;
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
  const client_platform_config = activity.client_platform_config;
  const tmp3 = getPlatformDefault;
  const obj = PlatformUtils;
  const tmp5 = client_platform_config[tmp3(undefined, obj.getOS(obj))];
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
  const tmp8 = useEmbeddedActivityBackgroundDefault(obj2);
  if (null != activity.activity_preview_video_asset_id) {
    tmp9 = getPreviewVideoAssetUrlDefault(application.id, activity.activity_preview_video_asset_id);
  }
  let channel;
  const tmpResult = useEmbeddedAppsForChannelDefault;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const obj3 = { context, applicationId: application.id };
  const tmpResultResult = tmpResult(channel);
  const found = tmpResultResult.find((embeddedActivity) => application.id === embeddedActivity.embeddedActivity.applicationId);
  const obj4 = { application: activityItem.application, context, locationObject, embeddedActivitiesManager, onActivityItemSelectedProp: onActivityItemSelected, launchingComponentId, commandOrigin, source };
  const activity2 = activityItem.activity;
  const tmp13 = closure_9(obj3);
  const tmp14 = useOnActivityItemSelected(obj4);
  const tmp4Result = ApplicationFlagUtils;
  if (tmp4Result.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    const client_platform_config2 = activity2.client_platform_config;
    const tmpResult2 = getPlatformDefault;
    const tmp4Result3 = PlatformUtils;
    const str = client_platform_config2[tmpResult2(undefined, tmp4Result3.getOS(tmp4Result3))].release_phase;
    let replaced;
    if (STAFF_RELEASE_PHASES.includes(str)) {
      const str4 = str.replace("_", " ");
      replaced = str4.replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
    }
    tmp16 = replaced;
  } else {
    ApplicationFlagUtils;
  }
  const obj5 = { imageBackground: tmp8, videoUrl: tmp9, joinableEmbeddedApp: found, activityAction: tmp13, onActivityItemSelected: tmp14, labelType: NONE, staffReleasePhase: tmp16 };
  if (tmp7) {
    NONE = tmp5.label_type;
  } else {
    NONE = Server.EmbeddedActivityLabelTypes.NONE;
  }
  return obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let context;
  let fetchesApplication;
  let tmp9;
  const obj = react;
  const cResult = obj.c(2);
  ({ context, fetchesApplication } = applicationId);
  let tmp4 = undefined === fetchesApplication;
  applicationId = applicationId.applicationId;
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
    tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  const tmp10 = useCurrentEmbeddedApplicationDefault(tmp9);
  const tmpResult = useGetOrFetchApplications;
  const getOrFetchApplication = tmpResult.useGetOrFetchApplication(applicationId, tmp4);
  useEmbeddedAppsForChannelDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    let JOIN;
    const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
    embeddedActivityLocationUtils;
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
          JOIN = tmp5.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp13) {
      JOIN = tmp5.JOIN;
    }
  }
}) : ((applicationId) => {
  let context;
  let fetchesApplication;
  let obj;
  ({ context, fetchesApplication } = applicationId);
  applicationId = applicationId.applicationId;
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
  getOrFetchApplication = obj.useGetOrFetchApplication(applicationId, fetchesApplication);
  useEmbeddedAppsForChannelDefault(channel);
  if (null == getOrFetchApplication) {
    return START;
  } else {
    let JOIN;
    const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
    embeddedActivityLocationUtils;
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
          JOIN = tmp.LEAVE;
        }
        return JOIN;
      }
    }
    JOIN = START;
    if (null != tmp9) {
      JOIN = tmp.JOIN;
    }
  }
});
let closure_9 = tmp3;
function getStaffReleasePhase(application, client_platform_config) {
  const obj = ApplicationFlagUtils;
  if (!obj.hasApplicationFlag(application, ApplicationFlags.EMBEDDED_RELEASED)) {
    ApplicationFlagUtils;
  }
  client_platform_config = client_platform_config.client_platform_config;
  const tmp4 = getPlatformDefault;
  const tmpResult2 = PlatformUtils;
  const str = client_platform_config[tmp4(undefined, tmpResult2.getOS(tmpResult2))].release_phase;
  let replaced;
  if (STAFF_RELEASE_PHASES.includes(str)) {
    const str4 = str.replace("_", " ");
    replaced = str4.replace(/(^\w|\s\w)/g, (str) => str.toUpperCase());
  }
  return replaced;
}
const result = size.fileFinishedImporting("modules/activities/utils/useActivityShelfItem.tsx");

export default tmp2;
export { ActivityAction };
export { getStaffReleasePhase };
export const useActivityAction = tmp3;
export { useOnActivityItemSelected };