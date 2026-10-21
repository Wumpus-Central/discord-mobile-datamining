// === Module 11954: useActivityShelfItem ===

// Module 11954 (useActivityShelfItem)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import Server from "Server" /* 2000 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4890 */;
import getPlatformDefault from "getPlatform" /* 5615 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6790 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7234 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10728 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11290 */;
import useCurrentEmbeddedApplicationDefault from "useCurrentEmbeddedApplication" /* 11382 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11383 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11436 */;
import getPreviewVideoAssetUrlDefault from "getPreviewVideoAssetUrl" /* 11955 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 11956 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6751 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;

require = fn;
function useOnActivityItemSelected(arg0) {
  ({ application, botUserIdForAppDM: require, context } = arg0);
  ({ locationObject: dependencyMap, onActivityItemSelectedProp: asyncGeneratorStep, launchingComponentId: ChannelRTCStore, commandOrigin: EmbeddedActivitiesStore, sectionName: STAFF_RELEASE_PHASES, source: ApplicationFlags, fetchesApplication } = arg0);
  if (fetchesApplication === undefined) {
    fetchesApplication = true;
  }
  ({ customId: MAIN_SURFACE, referrerId: obj, onConfirmActivityLaunchChecksAlertOpen: closure_10 } = arg0);
  let analyticsLocations;
  closure_13 = undefined;
  closure_14 = undefined;
  let str;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let tmp = closure_10({ context, applicationId: str, fetchesApplication });
  analyticsLocations = context(7230)().analyticsLocations;
  closure_13 = context(11383)();
  obj = canLaunchContextlessFrame;
  closure_14 = obj.canLaunchContextlessFrame(application);
  if (null == application) {
    return () => {
      if (asyncGeneratorStep != null) {
        tmp({ applicationId: "" });
      }
    };
  } else if (obj.START === tmp) {
    return asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c5 = 2;
          if (0 === participant) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              let frameParticipantId;
              closure_128_2 = undefined;
              if (closure_14) {
                let id;
                if ("channel" === context.type) {
                  id = context.channel.id;
                }
                tmp3(tmp71[21])(id);
                let guildId = null;
                if ("channel" === context.type) {
                  const channel = context.channel;
                  guildId = channel.getGuildId();
                }
                c3 = 1;
                tmp3(tmp71[22]);
                const obj4 = { applicationId: str, surface: null, analyticsContext: null };
                if ("channel" === context.type) {
                  if (null != guildId) {
                    const obj5 = { type: tmp5(tmp71[23]).EmbeddedSurfaceType.MAIN, channelId: context.channel.id, guildId };
                    let tmp62 = obj5;
                  }
                  obj4.surface = tmp62;
                  const obj7 = { isStart: true, analyticsLocations, source, channelId: null };
                  let id1;
                  if ("channel" === context.type) {
                    id1 = context.channel.id;
                  }
                  obj7.channelId = id1;
                  obj4.analyticsContext = obj7;
                  participant = 2;
                  c5 = 1;
                  const obj8 = { value: tmp59(obj4), done: false };
                  return obj8;
                }
                tmp62 = customId;
                const tmp48 = tmp3(tmp71[21]);
              } else {
                let id2;
                if ("channel" === context.type) {
                  id2 = context.channel.id;
                }
                closure_128_2 = id2;
                if (null != require) {
                  c3 = 2;
                  const obj9 = { recipientIds: tmp27, navigateToChannel: true };
                  participant = 5;
                  c5 = 1;
                  const obj10 = { value: tmp3(tmp71[26]).openPrivateChannel(obj9), done: false };
                  return obj10;
                } else {
                  const obj11 = { targetApplicationId: closure_129_11, locationObject: closure_129_2, channelId: closure_128_2, analyticsLocations: closure_129_12, componentId: closure_129_4, commandOrigin: closure_129_5, sectionName: closure_129_6, source: closure_129_7, customId: closure_129_8, referrerId: closure_129_9, onConfirmActivityLaunchChecksAlertOpen: closure_129_10 };
                  tmp3(tmp71[27])(obj11).then((result) => {
                    let tmp = result;
                    if (result) {
                      let tmp2Result;
                      if (closure_1_3 != null) {
                        const obj = { applicationId };
                        tmp2Result = tmp2(obj);
                      }
                      tmp = tmp2Result;
                    }
                    return tmp;
                  });
                  participant = 4;
                  c5 = 1;
                  const promise = tmp3(tmp71[27])(obj11);
                }
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            if (2 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_128_0 = value;
                if ("channel" === closure_129_1.type) {
                  const obj13 = { applicationId: closure_129_11, id: closure_128_0 };
                  frameParticipantId = tmp5(tmp71[24]).getFrameParticipantId(obj13);
                  if (null != participant.getParticipant(closure_129_1.channel.id, frameParticipantId)) {
                    tmp3(tmp71[25])(closure_129_1.channel.id, frameParticipantId);
                  }
                  const obj15 = tmp5(tmp71[24]);
                }
                if (closure_129_3 != null) {
                  const obj14 = { applicationId: closure_129_11 };
                  tmp19(obj14);
                }
                c3 = 0;
              }
            } else if (3 === tmp8) {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj16 = { value, done: true };
                return obj16;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_2 = value;
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
          c3 = 0;
          c5 = 3;
          let obj = { value, done: true };
          return obj;
        } catch (tmp71) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp71;
          } else if (tmp === tmp73) {
            participant = tmp;
          } else {
            participant = tmp2;
          }
        }
      }
    });
  } else if (tmp2.JOIN === tmp) {
    return asyncGeneratorStep(async () => {
      if (c0 === 2) {
        c0 = 3;
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
              const tmp7 = v1(locationObject[28]);
              v1 = 1;
              c0 = 1;
              const obj5 = {
                value: v1(locationObject[28])(obj4).then((result) => {
                          let tmp = result;
                          if (result) {
                            let tmp2Result;
                            if (closure_1_3 != null) {
                              const obj = { applicationId };
                              tmp2Result = tmp2(obj);
                            }
                            tmp = tmp2Result;
                          }
                          return tmp;
                        }),
                done: false
              };
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
        } catch (tmp17) {
          c0 = tmp;
          throw tmp17;
        }
      }
    });
  } else {
    return tmp2.LEAVE === tmp ? (() => {
      if (!EmbeddedActivitiesStore.isLaunchingActivity()) {
        if (null != closure_13) {
          const obj2 = { location: tmp.location, applicationId: str };
          const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj2);
        }
        if (asyncGeneratorStep != null) {
          const obj3 = { applicationId: str };
          tmp7(obj3);
        }
      }
    }) : undefined;
  }
}
const STAFF_RELEASE_PHASES = fn(2026).STAFF_RELEASE_PHASES;
const ApplicationFlags = fn(1087).ApplicationFlags;
const MAIN_SURFACE = fn(6755).MAIN_SURFACE;
const ActivityAction = { START: 0, [0]: "START", JOIN: 1, [1]: "JOIN", LEAVE: 2, [2]: "LEAVE" };
fn(558);
const ReactCompilerGating = fn(558);
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
let closure_10 = tmp3;
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
              const tmp22 = closure_10(tmp20);
              if (cResult[17] === activityItem.application) {
                if (cResult[18] === commandOrigin) {
                  if (cResult[19] === context) {
                    if (cResult[20] === launchingComponentId) {
                      if (cResult[21] === locationObject) {
                        if (cResult[22] === onActivityItemSelected) {
                          if (cResult[23] === source) {
                            let tmp23 = cResult[24];
                          }
                          const tmp25 = useOnActivityItemSelected(tmp23);
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
          class T {
            constructor(arg0) {
              return application.id === arg0.embeddedActivity.applicationId;
            }
          }
          cResult[12] = application.id;
          cResult[13] = T;
        } else {
          class T {
            constructor(arg0) {
              return application.id === arg0.embeddedActivity.applicationId;
            }
          }
        }
        const found = tmp5ResultResult.find(T);
        cResult[9] = application.id;
        cResult[10] = tmp5ResultResult;
        cResult[11] = found;
        const tmp5Result = useEmbeddedAppsForChannelDefault;
      }
      if (null != activity.activity_preview_video_asset_id) {
        class T {
          constructor(arg0) {
            return application.id === arg0.embeddedActivity.applicationId;
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
  const tmp13 = closure_10({ context, applicationId: application.id });
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
});
export { ActivityAction };
export { getStaffReleasePhase };
export const useActivityAction = tmp3;
export { useOnActivityItemSelected };