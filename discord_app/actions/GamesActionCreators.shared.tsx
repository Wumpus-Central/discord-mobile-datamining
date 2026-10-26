// === Module 11363: _tryJoinAsFrame ===

// Module 11363 (_tryJoinAsFrame)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7411 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11357 */;
import getOrFetchApplicationDefault from "getOrFetchApplication" /* 11362 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PresenceStore from "PresenceStore" /* 5712 */;

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
            const tmp48 = getFrameSurfaces;
            closure_5 = tmp48;
            isFrameApp = tmp48.isFrameApp;
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
          num6 = isFrameApp(value);
          if (num6) {
            embeddedActivityForUserId = closure_134_4.getEmbeddedActivityForUserId(closure_135_1, closure_135_3, true);
            if (null != embeddedActivityForUserId) {
              const obj7 = { applicationId: closure_135_3, activityChannelId: null, source: null, locationObject: null, analyticsLocations: null };
              const tmp29 = closure_134_1(closure_134_2[10]);
              obj7.activityChannelId = closure_134_0(closure_134_2[11]).getEmbeddedActivityLocationChannelId(embeddedActivityForUserId.location);
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
              const obj = { application: null, userId: null, activity: null, sessionId: null, channelId: null, messageId: null, intent: null };
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
          if (obj7.canOpenFrame(closure_129_1)) {
            (function startFrame() {
              const self = this;
              const apply = closure_1_12.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_129_0, closure_129_1);
          } else {
            const isFrameAppResult = closure_130_0(closure_130_2[8]).isFrameApp(closure_129_1);
            if (!isFrameAppResult) {
              if (null != closure_129_1) {
                if (obj2.supportsEmbeddedSurface(closure_129_1, closure_130_0(closure_130_2[14]).EmbeddedSurfaceType.MAIN)) {
                  const tmp16 = (function startActivity() {
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
            }
            const obj = closure_130_0(closure_130_2[8]);
          }
          c4 = 3;
          obj7 = closure_130_0(closure_130_2[8]);
        }
      } catch (tmp34) {
        c4 = tmp;
        throw tmp34;
      }
    }
  })();
};
let closure_12 = async function _startFrame(arg0) {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          ({ applicationId: closure_130_0, channelId: closure_130_1, fromLink } = closure_0);
          if (fromLink === undefined) {
            fromLink = false;
          }
          closure_130_2 = fromLink;
          ({ linkChannelId: closure_130_3, customId: closure_130_4, referrerId: closure_130_5, source: closure_130_6, inviterUserId: closure_130_7, analyticsLocations } = closure_0);
          if (analyticsLocations === undefined) {
            analyticsLocations = [];
          }
          closure_130_8 = analyticsLocations;
          closure_130_9 = closure_1;
          let channel;
          closure_130_11 = undefined;
          closure_130_12 = undefined;
          closure_130_13 = undefined;
          closure_130_14 = undefined;
          let frameParticipantId;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          channel = closure_131_6.getChannel(closure_130_1);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          closure_130_11 = guildId;
          const obj6 = { isStart: true, analyticsLocations: closure_130_8, source: closure_130_6, inviterUserId: closure_130_7, channelId: closure_130_1, guildId: closure_130_11 };
          closure_130_12 = obj6;
          const obj7 = { customId: closure_130_4, referrerId: closure_130_5 };
          closure_130_13 = obj7;
          if (!closure_130_2) {
            const frameSurfaces = closure_131_0(closure_131_2[8]).getFrameSurfaces(closure_130_9);
            if (frameSurfaces.has(closure_131_0(closure_131_2[14]).EmbeddedSurfaceType.MAIN)) {
              closure_131_1(closure_131_2[16])(closure_130_1);
              c4 = 1;
              let launchFrame = closure_131_1(closure_131_2[17]).launchFrame;
              const obj9 = { applicationId: closure_130_0, surface: null, analyticsContext: null, launch: null };
              if (null == channel) {
                let tmp47 = closure_131_9;
                obj9.surface = tmp47;
                obj9.analyticsContext = closure_130_12;
                obj9.launch = closure_130_13;
                launchFrame = launchFrame(obj9);
                c5 = 3;
                c6 = 1;
              }
              const obj10 = { type: closure_131_0(closure_131_2[14]).EmbeddedSurfaceType.MAIN, channelId: channel.id, guildId: closure_130_11 };
              tmp47 = obj10;
              const tmp41 = closure_131_1(closure_131_2[17]);
            }
            const obj4 = closure_131_0(closure_131_2[8]);
          }
          const obj11 = { applicationId: closure_130_0, application: closure_130_9, analyticsContext: closure_130_12, launch: closure_130_13, preferAppChannel: closure_130_2, channelId: closure_130_3 };
          c6 = 3;
          const obj12 = { value: closure_131_0(closure_131_2[15]).tryLaunchAsFrame(obj11), done: true };
          return obj12;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_14 = value;
        if (null != channel) {
          const obj13 = { applicationId: closure_130_0, id: closure_130_14 };
          frameParticipantId = closure_131_0(closure_131_2[18]).getFrameParticipantId(obj13);
          if (null != closure_131_5.getParticipant(channel.id, frameParticipantId)) {
            closure_131_1(closure_131_2[19])(channel.id, frameParticipantId);
          }
          const obj14 = closure_131_0(closure_131_2[18]);
        }
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp68) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp68;
      } else {
        c5 = tmp;
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
            let obj6 = { locationObject, analyticsLocations: null, componentId: null, sectionName: null, source: null, customId: null, referrerId: null, inviterUserId: null };
            if (undefined === analyticsLocations) {
              analyticsLocations = [];
            }
            obj6.analyticsLocations = analyticsLocations;
            ({ componentId: obj3.componentId, sectionName: obj3.sectionName, source: obj3.source, customId: obj3.customId, referrerId: obj3.referrerId, inviterUserId: obj3.inviterUserId } = applicationId);
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
                const obj8 = { targetApplicationId: applicationId, channelId, commandOrigin: null, onConfirmActivityLaunchChecksAlertOpen: null };
                ({ commandOrigin: obj9.commandOrigin, onConfirmActivityLaunchChecksAlertOpen: obj9.onConfirmActivityLaunchChecksAlertOpen } = tmp40);
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
          const obj21 = { targetApplicationId: closure_130_1, channelId: closure_130_3, commandOrigin: closure_130_0.commandOrigin, onConfirmActivityLaunchChecksAlertOpen: closure_130_0.onConfirmActivityLaunchChecksAlertOpen };
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
const MAIN_SURFACE = fn(6776).MAIN_SURFACE;
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