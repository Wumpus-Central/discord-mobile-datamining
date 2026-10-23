// discord_app/actions/GamesActionCreators.shared.tsx
import ChannelActionCreatorsDefault from "ChannelActionCreators.tsx";
import getOrFetchApplicationDefault from "../modules/applications/getOrFetchApplication.tsx";
import canLaunchContextlessFrame2 from "../modules/frames/utils/canLaunchContextlessFrame.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import EmbeddedActivitiesStore from "../modules/activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../modules/calls/ChannelRTCStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import PresenceStore from "../stores/PresenceStore.tsx";

require = fn;
let closure_10 = async function _tryJoinAsFrame(arg0) {
  let userId = arg0;
  c9 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
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
        c9 = 2;
        if (0 === num6) {
          num6 = 1;
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp5;
            closure_7 = tmp2;
            closure_135_0 = userId;
            closure_135_1 = undefined;
            closure_135_2 = undefined;
            closure_135_3 = undefined;
            closure_135_4 = undefined;
            closure_135_5 = undefined;
            closure_135_6 = undefined;
            closure_135_7 = undefined;
            let embeddedActivityForUserId;
            userId = userId.userId;
            closure_135_1 = userId;
            ({ sessionId: closure_135_2, applicationId } = userId);
            closure_135_3 = applicationId;
            ({ channelId: closure_135_4, messageId: closure_135_5, intent: closure_135_6, activity } = userId);
            let applicationActivity2 = activity;
            if (activity == null) {
              applicationActivity2 = applicationActivity.getApplicationActivity(userId, applicationId);
            }
            closure_135_7 = applicationActivity2;
            const embedded = userId.embedded;
            const tmp48 = canLaunchContextlessFrame2;
            closure_5 = tmp48;
            canLaunchContextlessFrame = tmp48.canLaunchContextlessFrame;
            c9 = num6;
            const obj5 = { value: getOrFetchApplicationDefault(applicationId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          num6 = canLaunchContextlessFrame(value);
          if (num6) {
            embeddedActivityForUserId = closure_134_4.getEmbeddedActivityForUserId(closure_135_1, closure_135_3, true);
            if (null != embeddedActivityForUserId) {
              const obj7 = {
                applicationId: closure_135_3,
                activityChannelId: null,
                source: null,
                locationObject: null,
                analyticsLocations: null,
              };
              const tmp29 = closure_134_1(closure_134_2[10]);
              obj7.activityChannelId = closure_134_0(closure_134_2[11]).getEmbeddedActivityLocationChannelId(
                embeddedActivityForUserId.location,
              );
              obj7.source = closure_135_0.source;
              locationObject = closure_135_0.locationObject;
              if (locationObject == null) {
                locationObject = {};
              }
              obj7.locationObject = locationObject;
              analyticsLocations = closure_135_0.analyticsLocations;
              if (analyticsLocations == null) {
                analyticsLocations = [];
              }
              obj7.analyticsLocations = analyticsLocations;
              tmp29(obj7);
              const obj4 = closure_134_0(closure_134_2[11]);
            } else {
              const obj = {
                application: null,
                userId: null,
                activity: null,
                sessionId: null,
                channelId: null,
                messageId: null,
                intent: null,
              };
              const obj8 = { id: closure_135_3 };
              obj.application = obj8;
              obj.userId = closure_135_1;
              obj.activity = closure_135_7;
              obj.sessionId = closure_135_2;
              obj.channelId = closure_135_4;
              obj.messageId = closure_135_5;
              obj.intent = closure_135_6;
              closure_134_1(closure_134_2[12])(obj);
            }
            c9 = 3;
          }
        }
        c9 = 3;
      } catch (tmp52) {
        c9 = tmp;
        throw tmp52;
      }
    }
  })();
};
let closure_11 = async function _tryStartAsEmbeddedApp(arg0) {
  let applicationId = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp2;
            closure_1 = tmp3;
            closure_129_0 = applicationId;
            closure_129_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: getOrFetchApplicationDefault(applicationId.applicationId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_1 = value;
          if (null == closure_129_1) {
            if (null != closure_129_1) {
              if (
                obj2.supportsEmbeddedSurface(closure_129_1, closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN)
              ) {
                (function startActivity() {
                  const self = this;
                  const apply = closure_1_13.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_129_0, closure_129_1);
              }
              obj2 = closure_130_0(closure_130_2[13]);
            }
            c4 = 3;
          } else {
            closure_130_0(closure_130_2[8]);
          }
          (function startFrame() {
            const self = this;
            const apply = closure_1_12.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_129_0);
        }
      } catch (tmp33) {
        c4 = tmp;
        throw tmp33;
      }
    }
  })();
};
let closure_12 = async function _startFrame(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          ({ applicationId: closure_129_0, channelId: closure_129_1, fromLink } = closure_0);
          if (fromLink === undefined) {
            fromLink = false;
          }
          closure_129_2 = fromLink;
          ({
            customId: closure_129_3,
            referrerId: closure_129_4,
            source: closure_129_5,
            inviterUserId: closure_129_6,
            analyticsLocations,
          } = closure_0);
          if (analyticsLocations === undefined) {
            analyticsLocations = [];
          }
          closure_129_7 = analyticsLocations;
          let channel;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          let frameParticipantId;
          c4 = 1;
          c5 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          channel = closure_130_6.getChannel(closure_129_1);
          let guildId;
          if (channel != null) {
            guildId = obj14.getGuildId();
          }
          closure_129_9 = guildId;
          const obj5 = {
            isStart: true,
            analyticsLocations: closure_129_7,
            source: closure_129_5,
            inviterUserId: closure_129_6,
            channelId: closure_129_1,
            guildId: closure_129_9,
          };
          closure_129_10 = obj5;
          const obj7 = { customId: closure_129_3, referrerId: closure_129_4 };
          closure_129_11 = obj7;
          if (closure_129_2) {
            const obj8 = {
              applicationId: closure_129_0,
              analyticsContext: closure_129_10,
              launch: closure_129_11,
              preferAppChannel: true,
            };
            c5 = 3;
            const obj9 = { value: closure_130_0(closure_130_2[15]).tryLaunchAsFrame(obj8), done: true };
            return obj9;
          } else {
            closure_130_1(closure_130_2[16])(closure_129_1);
            c3 = 1;
            let launchFrame = closure_130_1(closure_130_2[17]).launchFrame;
            const obj10 = { applicationId: closure_129_0, surface: null, analyticsContext: null, launch: null };
            if (null == channel) {
              let tmp40 = closure_130_9;
              obj10.surface = tmp40;
              obj10.analyticsContext = closure_129_10;
              obj10.launch = closure_129_11;
              launchFrame = launchFrame(obj10);
              c4 = 3;
              c5 = 1;
            }
            const obj11 = {
              type: closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN,
              channelId: channel.id,
              guildId: closure_129_9,
            };
            tmp40 = obj11;
            const tmp34 = closure_130_1(closure_130_2[17]);
          }
          obj14 = channel;
        }
      } else if (2 === tmp7) {
        c3 = 0;
        c5 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_129_12 = value;
        if (null != channel) {
          const obj13 = { applicationId: closure_129_0, id: closure_129_12 };
          frameParticipantId = closure_130_0(closure_130_2[18]).getFrameParticipantId(obj13);
          if (null != closure_130_5.getParticipant(channel.id, frameParticipantId)) {
            closure_130_1(closure_130_2[19])(channel.id, frameParticipantId);
          }
          const obj12 = closure_130_0(closure_130_2[18]);
        }
        c3 = 0;
        c5 = 3;
        return { value: true, done: true };
      }
    } catch (tmp55) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp55;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_13 = async function _startActivity(arg0, arg1) {
  let applicationId = arg0;
  let bot = arg1;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = applicationId;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            applicationId = applicationId.applicationId;
            closure_130_1 = applicationId;
            ({ channelId, locationObject } = applicationId);
            if (undefined === locationObject) {
              locationObject = {};
            }
            let analyticsLocations = tmp40.analyticsLocations;
            let obj6 = {
              locationObject,
              analyticsLocations: null,
              componentId: null,
              sectionName: null,
              source: null,
              customId: null,
              referrerId: null,
              inviterUserId: null,
            };
            if (undefined === analyticsLocations) {
              analyticsLocations = [];
            }
            obj6.analyticsLocations = analyticsLocations;
            ({
              componentId: obj3.componentId,
              sectionName: obj3.sectionName,
              source: obj3.source,
              customId: obj3.customId,
              referrerId: obj3.referrerId,
              inviterUserId: obj3.inviterUserId,
            } = applicationId);
            closure_130_2 = obj6;
            if (null != channelId) {
              embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channelId);
              let tmp12 = importDefault;
              let obj7 = dependencyMap;
              if (embeddedActivitiesForChannel.some((applicationId) => applicationId.applicationId === bot)) {
                tmp12 = tmp12(obj7[10]);
                obj7 = { applicationId, activityChannelId: channelId };
                obj6 = Object.assign(obj6);
                tmp12(obj7);
              } else {
                const obj8 = {
                  targetApplicationId: applicationId,
                  channelId,
                  commandOrigin: null,
                  onConfirmActivityLaunchChecksAlertOpen: null,
                };
                ({
                  commandOrigin: obj9.commandOrigin,
                  onConfirmActivityLaunchChecksAlertOpen: obj9.onConfirmActivityLaunchChecksAlertOpen,
                } = tmp40);
                const merged = Object.assign(obj6);
                tmp12(obj7[20])(obj8);
                const tmp12Result2 = tmp12(obj7[20]);
              }
              c6 = 3;
            } else {
              bot = bot.bot;
              let id;
              if (bot != null) {
                id = bot.id;
              }
              if (null == id) {
                c6 = 3;
                return { value: false, done: true };
              } else {
                c4 = 1;
                const obj10 = { recipientIds: id };
                c5 = 2;
                c6 = 1;
                const obj11 = { value: ChannelActionCreatorsDefault.openPrivateChannel(obj10), done: false };
                return obj11;
              }
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          c6 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_130_3 = value;
          c4 = 0;
          const obj21 = {
            targetApplicationId: closure_130_1,
            channelId: closure_130_3,
            commandOrigin: closure_130_0.commandOrigin,
            onConfirmActivityLaunchChecksAlertOpen: closure_130_0.onConfirmActivityLaunchChecksAlertOpen,
          };
          const merged1 = Object.assign(closure_130_2);
          c6 = 3;
          const obj = { value: closure_131_1(closure_131_2[20])(obj21), done: true };
          return obj;
        }
      } catch (tmp21) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp21;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const ActivityFlags = fn(1087).ActivityFlags;
const MAIN_SURFACE = fn(6761).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("actions/GamesActionCreators.shared.tsx");

export const tryJoinAsFrame = function tryJoinAsFrame() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const tryStartAsEmbeddedApp = function tryStartAsEmbeddedApp() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
