// === Module 9533: handleJoinEmbeddedActivity ===

// Module 9533 (handleJoinEmbeddedActivity)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

const require = fn;
let closure_10 = async function _handleJoinEmbeddedActivityInternal(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
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
          closure_129_10 = undefined;
          let channel;
          closure_129_12 = undefined;
          let currentUser;
          let currentEmbeddedActivity;
          let application;
          closure_129_16 = undefined;
          closure_129_17 = undefined;
          closure_129_18 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_129_10 = closure_130_1(closure_130_2[8])();
          channel = closure_130_5.getChannel(closure_129_1);
          let guildId;
          if (channel != null) {
            guildId = obj23.getGuildId();
          }
          closure_129_12 = guildId;
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
                      let obj13 = closure_130_0(closure_130_2[9]);
                      const embeddedActivityLocationChannelId = obj13.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
                      if (embeddedActivityLocationChannelId === closure_130_6.getVoiceChannelId()) {
                        closure_130_1(closure_130_2[10])(closure_129_12, currentEmbeddedActivity.location);
                        c4 = 3;
                        const obj2 = { value: Promise.resolve(true), done: true };
                        return obj2;
                      }
                    }
                  }
                }
                c3 = 2;
                c4 = 1;
                let obj3 = { value: closure_130_1(closure_130_2[11])(closure_129_0, closure_129_1), done: false };
                return obj3;
              }
            }
            c4 = 3;
            let obj4 = { value: Promise.resolve(false), done: true };
            return obj4;
          }
          obj23 = channel;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_16 = value;
          const obj6 = { applicationId: closure_129_0, application: closure_129_16, channel, currentEmbeddedApplication: application, embeddedActivitiesManager: closure_129_10, user: currentUser };
          c3 = 3;
          c4 = 1;
          const obj7 = { value: closure_130_0(closure_130_2[12]).confirmActivityLaunchChecks(obj6), done: false };
          return obj7;
        }
      } else {
        if (3 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (value) {
            if (null != channel) {
              closure_129_17 = closure_130_1(closure_130_2[13])(channel.id);
              closure_129_18 = closure_130_9.includes(channel.type);
              if (closure_129_17) {
                const obj9 = { channelId: channel.id, bypassChangeModal: null != application };
                c3 = 4;
                c4 = 1;
                const obj10 = { value: closure_130_1(closure_130_2[14])(obj9), done: false };
                return obj10;
              } else {
                obj3 = closure_130_0(closure_130_2[15]);
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
            const obj11 = { value, done: true };
            return obj11;
          } else if (!value) {
            c4 = 3;
            return { value: false, done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        if (null != closure_129_1) {
          closure_130_1(closure_130_2[16])(closure_129_1);
        }
        if (null != currentEmbeddedActivity) {
          obj4 = closure_130_0(closure_130_2[17]);
          const result = obj4.maybeDisconnectFromCurrentActivity(currentEmbeddedActivity.location);
        }
        obj5 = closure_130_0(closure_130_2[17]);
        obj13 = { channelId: closure_129_1, applicationId: closure_129_0, isStart: false, embeddedActivitiesManager: closure_129_10, analyticsLocations: closure_129_3, locationObject: closure_129_2, componentId: closure_129_4, sectionName: closure_129_5, source: closure_129_6, inviterUserId: closure_129_7, customId: closure_129_8, referrerId: closure_129_9 };
        c3 = 5;
        c4 = 1;
        const obj14 = { value: obj5.runPrimaryAppCommandOrJoinEmbeddedActivity(obj13), done: false };
        return obj14;
      }
    } catch (tmp110) {
      c4 = tmp;
      throw tmp110;
    }
  }
};
let closure_9 = fn(1920).SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
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