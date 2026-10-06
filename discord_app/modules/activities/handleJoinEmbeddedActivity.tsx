// discord_app/modules/activities/handleJoinEmbeddedActivity.tsx
import Constants from "Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, applicationId;

let obj = function _handleJoinEmbeddedActivityInternal() {
  obj = _asyncToGenerator(async (applicationId) => {
    let analyticsLocations;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let componentId;
    let obj21;
    let obj6;
    if (componentId === 2) {
      componentId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (applicationId === 1) {
        throw value;
      } else if (applicationId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let channelId;
        let locationObject;
        let sectionName;
        let source;
        let inviterUserId;
        let customId;
        let referrerId;
        let embeddedActivitiesManager;
        let channel;
        let guildId;
        let user;
        let currentEmbeddedActivity;
        let currentEmbeddedApplication;
        let application;
        let closure_17;
        componentId = 2;
        if (0 === analyticsLocations) {
          if (applicationId === 1) {
            componentId = 3;
            throw value;
          } else if (applicationId === 2) {
            componentId = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            applicationId = undefined;
            channelId = undefined;
            locationObject = undefined;
            sectionName = undefined;
            source = undefined;
            inviterUserId = undefined;
            customId = undefined;
            referrerId = undefined;
            ({
              applicationId: c0,
              activityChannelId: c1,
              locationObject: c2,
              analyticsLocations: c3,
              componentId: c4,
              sectionName: c5,
              source: c6,
              inviterUserId: c7,
              customId: c8,
              referrerId: c9,
            } = closure_0);
            embeddedActivitiesManager = undefined;
            channel = undefined;
            guildId = undefined;
            user = undefined;
            currentEmbeddedActivity = undefined;
            currentEmbeddedApplication = undefined;
            application = undefined;
            closure_17 = undefined;
            let closure_18;
            analyticsLocations = 1;
            componentId = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === analyticsLocations) {
          if (applicationId === 1) {
            componentId = 3;
            throw value;
          } else if (applicationId === 2) {
            componentId = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            embeddedActivitiesManager = closure_130_1(closure_130_2[8])();
            channel = closure_130_5.getChannel(channelId);
            guildId = undefined;
            const obj23 = channel;
            if (channel != null) {
              guildId = obj23.getGuildId();
            }
            user = closure_130_7.getCurrentUser();
            if (null == user) {
              componentId = 3;
              return { value: false, done: true };
            } else {
              if (null != channel) {
                if (null != channelId) {
                  currentEmbeddedActivity = closure_130_8.getCurrentEmbeddedActivity();
                  currentEmbeddedApplication = undefined;
                  applicationId = undefined;
                  if (currentEmbeddedActivity != null) {
                    applicationId = currentEmbeddedActivity.applicationId;
                  }
                  if (null != applicationId) {
                    let applicationId1;
                    const getApplication = closure_130_4.getApplication;
                    if (currentEmbeddedActivity != null) {
                      applicationId1 = currentEmbeddedActivity.applicationId;
                    }
                    currentEmbeddedApplication = getApplication(applicationId1);
                  }
                  if (closure_130_6.getVoiceChannelId() === channelId) {
                    if (null != currentEmbeddedActivity) {
                      if (currentEmbeddedActivity.applicationId === applicationId) {
                        const obj14 = closure_130_0(closure_130_2[9]);
                        const embeddedActivityLocationChannelId = obj14.getEmbeddedActivityLocationChannelId(
                          currentEmbeddedActivity.location,
                        );
                        if (embeddedActivityLocationChannelId === closure_130_6.getVoiceChannelId()) {
                          closure_130_1(closure_130_2[10])(guildId, currentEmbeddedActivity.location);
                          componentId = 3;
                          const obj8 = { value: Promise.resolve(true), done: true };
                          return obj8;
                        }
                      }
                    }
                  }
                  analyticsLocations = 2;
                  componentId = 1;
                  const obj9 = { value: closure_130_1(closure_130_2[11])(applicationId, channelId), done: false };
                  return obj9;
                }
              }
              componentId = 3;
              const obj10 = { value: Promise.resolve(false), done: true };
              return obj10;
            }
          }
        } else if (2 === analyticsLocations) {
          if (applicationId === 1) {
            componentId = 3;
            throw value;
          } else if (applicationId === 2) {
            componentId = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            application = value;
            const obj12 = {
              applicationId,
              application,
              channel,
              currentEmbeddedApplication,
              embeddedActivitiesManager,
              user,
            };
            analyticsLocations = 3;
            componentId = 1;
            const obj13 = { value: obj21.confirmActivityLaunchChecks(obj12), done: false };
            obj21 = closure_130_0(closure_130_2[12]);
            return obj13;
          }
        } else {
          if (3 === analyticsLocations) {
            if (applicationId === 1) {
              componentId = 3;
              throw value;
            } else if (applicationId === 2) {
              componentId = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else if (value) {
              if (null != channel) {
                closure_17 = closure_130_1(closure_130_2[13])(channel.id);
                closure_18 = closure_130_9.includes(channel.type);
                if (closure_17) {
                  const obj16 = { channelId: channel.id, bypassChangeModal: null != currentEmbeddedApplication };
                  analyticsLocations = 4;
                  componentId = 1;
                  const obj17 = { value: closure_130_1(closure_130_2[14])(obj16), done: false };
                  return obj17;
                } else {
                  const obj4 = closure_130_0(closure_130_2[15]);
                  componentId = 3;
                  return { value: false, done: true };
                }
              } else if (null == channel) {
                componentId = 3;
                return { value: false, done: true };
              }
            } else {
              componentId = 3;
              return { value: false, done: true };
            }
          } else if (4 === analyticsLocations) {
            if (applicationId === 1) {
              componentId = 3;
              throw value;
            } else if (applicationId === 2) {
              componentId = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else if (!value) {
              componentId = 3;
              return { value: false, done: true };
            }
          } else if (applicationId === 1) {
            componentId = 3;
            throw value;
          } else if (applicationId === 2) {
            componentId = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            componentId = 3;
            obj = { value, done: true };
            return obj;
          }
          if (null != channelId) {
            closure_130_1(closure_130_2[16])(channelId);
          }
          if (null != currentEmbeddedActivity) {
            const obj5 = closure_130_0(closure_130_2[17]);
            const result = obj5.maybeDisconnectFromCurrentActivity(currentEmbeddedActivity.location);
          }
          const obj20 = {
            channelId,
            applicationId,
            isStart: false,
            embeddedActivitiesManager,
            analyticsLocations,
            locationObject,
            componentId,
            sectionName,
            source,
            inviterUserId,
            customId,
            referrerId,
          };
          analyticsLocations = 5;
          componentId = 1;
          const obj22 = { value: obj6.runPrimaryAppCommandOrJoinEmbeddedActivity(obj20), done: false };
          obj6 = closure_130_0(closure_130_2[17]);
          return obj22;
        }
      } catch (tmp109) {
        componentId = 3;
        throw tmp109;
      }
    }
  });
  return obj(...arguments);
};
let closure_9 = Constants.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
let result = size.fileFinishedImporting("modules/activities/handleJoinEmbeddedActivity.tsx");

export default function handleJoinEmbeddedActivity(arg0) {
  let closure_0;
  _require = arg0;
  const wrapPreemptiveActivityPopout = require("ActivityPopoutUtils").wrapPreemptiveActivityPopout;
  require("ActivityPopoutUtils");
  obj = require("ActivityPopoutUtils");
  return wrapPreemptiveActivityPopout(obj.shouldOpenActivityInPopoutWindow(), () => {
    function handleJoinEmbeddedActivityInternal() {
      return closure_1_10(...arguments);
    }
    return handleJoinEmbeddedActivityInternal(closure_0);
  });
}
