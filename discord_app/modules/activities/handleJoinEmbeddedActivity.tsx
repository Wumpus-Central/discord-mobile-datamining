// === Module 10822: handleJoinEmbeddedActivity ===

// Module 10822 (handleJoinEmbeddedActivity)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import UserStore from "UserStore" /* 1390 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;

const require = globalThis.__r;

const require = fn;
let closure_10 = async function _handleJoinEmbeddedActivityInternal(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          ({ applicationId: closure_129_0, activityChannelId: closure_129_1, locationObject: closure_129_2, analyticsLocations: closure_129_3, componentId: closure_129_4, sectionName: closure_129_5, source: closure_129_6, inviterUserId: closure_129_7, customId: closure_129_8, referrerId: closure_129_9 } = closure_0);
          let channel;
          closure_129_11 = undefined;
          let currentUser;
          let currentEmbeddedActivity;
          let application;
          closure_129_15 = undefined;
          closure_129_16 = undefined;
          closure_129_17 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          channel = closure_130_5.getChannel(closure_129_1);
          let guildId;
          if (channel != null) {
            guildId = obj23.getGuildId();
          }
          closure_129_11 = guildId;
          currentUser = closure_130_7.getCurrentUser();
          if (null == currentUser) {
            c4 = 3;
            return { value: false, done: true };
          } else {
            if (null != channel) {
              if (null != closure_129_1) {
                currentEmbeddedActivity = closure_130_8.getCurrentEmbeddedActivity();
                application = undefined;
                let applicationId;
                if (currentEmbeddedActivity != null) {
                  applicationId = currentEmbeddedActivity.applicationId;
                }
                if (null != applicationId) {
                  let applicationId1;
                  if (currentEmbeddedActivity != null) {
                    applicationId1 = currentEmbeddedActivity.applicationId;
                  }
                  application = closure_130_4.getApplication(applicationId1);
                }
                if (closure_130_6.getVoiceChannelId() === closure_129_1) {
                  if (null != currentEmbeddedActivity) {
                    if (currentEmbeddedActivity.applicationId === closure_129_0) {
                      const embeddedActivityLocationChannelId = closure_130_0(closure_130_2[8]).getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
                      if (embeddedActivityLocationChannelId === closure_130_6.getVoiceChannelId()) {
                        closure_130_1(closure_130_2[9])(closure_129_11, currentEmbeddedActivity.location);
                        c4 = 3;
                        const obj8 = { value: Promise.resolve(true), done: true };
                        return obj8;
                      }
                      const obj16 = closure_130_0(closure_130_2[8]);
                    }
                  }
                }
                c3 = 2;
                c4 = 1;
                const obj9 = { value: closure_130_1(closure_130_2[10])(closure_129_0, closure_129_1), done: false };
                return obj9;
              }
            }
            c4 = 3;
            const obj10 = { value: Promise.resolve(false), done: true };
            return obj10;
          }
          obj23 = channel;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          closure_129_15 = value;
          const obj13 = { applicationId: closure_129_0, application: closure_129_15, channel, currentEmbeddedApplication: application, user: currentUser };
          c3 = 3;
          c4 = 1;
          const obj14 = { value: closure_130_0(closure_130_2[11]).confirmActivityLaunchChecks(obj13), done: false };
          return obj14;
        }
      } else {
        if (3 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else if (value) {
            if (null != channel) {
              closure_129_16 = closure_130_1(closure_130_2[12])(channel.id);
              closure_129_17 = closure_130_9.includes(channel.type);
              if (closure_129_16) {
                const obj17 = { channelId: channel.id, bypassChangeModal: null != application };
                c3 = 4;
                c4 = 1;
                const obj18 = { value: closure_130_1(closure_130_2[13])(obj17), done: false };
                return obj18;
              } else {
                c4 = 3;
                return { value: false, done: true };
              }
            } else if (null == channel) {
              c4 = 3;
              return { value: false, done: true };
            }
          } else {
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (4 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else if (!value) {
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        if (null != closure_129_1) {
          closure_130_1(closure_130_2[15])(closure_129_1);
        }
        if (null != currentEmbeddedActivity) {
          const result = closure_130_0(closure_130_2[16]).maybeDisconnectFromCurrentActivity(currentEmbeddedActivity.location);
          const obj5 = closure_130_0(closure_130_2[16]);
        }
        const obj21 = { channelId: closure_129_1, applicationId: closure_129_0, isStart: false, analyticsLocations: closure_129_3, locationObject: closure_129_2, componentId: closure_129_4, sectionName: closure_129_5, source: closure_129_6, inviterUserId: closure_129_7, customId: closure_129_8, referrerId: closure_129_9 };
        c3 = 5;
        c4 = 1;
        const obj22 = { value: closure_130_0(closure_130_2[16]).runPrimaryAppCommandOrJoinEmbeddedActivity(obj21), done: false };
        return obj22;
      }
    } catch (tmp118) {
      c4 = tmp;
      throw tmp118;
    }
  }
};
let closure_9 = fn(2024).SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/handleJoinEmbeddedActivity.tsx");

export default function handleJoinEmbeddedActivity(arg0) {
  _require = arg0;
  const obj = require("ActivityPopoutUtils");
  return obj.wrapPreemptiveActivityPopout(require("ActivityPopoutUtils").shouldOpenActivityInPopoutWindow(), () => (function handleJoinEmbeddedActivityInternal() {
    const self = this;
    const apply = closure_1_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_0));
};