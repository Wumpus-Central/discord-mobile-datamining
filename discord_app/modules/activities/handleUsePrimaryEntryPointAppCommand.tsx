// === Module 10946: handleUsePrimaryEntryPointAppCommand ===

// Module 10946 (handleUsePrimaryEntryPointAppCommand)
import getCachedOrFetchActivityApplicationForLaunchDefault from "getCachedOrFetchActivityApplicationForLaunch" /* 9004 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let analyticsLocations, channelId, commandOrigin, componentId, customId, embeddedActivitiesManager, inviterUserId, locationObject, onConfirmActivityLaunchChecksAlertOpen, referrerId, sectionName, source;

let obj = function _handleUsePrimaryEntryPointAppCommand() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    const targetApplicationId = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
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
              return { value, done: true };
            } else {
              let targetApplication;
              closure_2 = undefined;
              if (null == targetApplicationId.targetApplicationId) {
                c5 = 3;
                return { value: false, done: true };
              } else {
                closure_2 = false;
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: getCachedOrFetchActivityApplicationForLaunchDefault(targetApplicationId.targetApplicationId, targetApplicationId.channelId), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            targetApplication = value;
            obj = closure_130_0(closure_130_3[4]);
            closure_2 = obj.shouldOpenActivityInPopoutWindow();
            c3 = 0;
            c5 = 3;
            const obj7 = {
              value: obj2.wrapPreemptiveActivityPopout(closure_2, () => {
                      function handleUsePrimaryEntryPointAppCommandInternal() {
                        return closure_1_8(...arguments);
                      }
                      obj = { targetApplication };
                      const merged = Object.assign(targetApplicationId);
                      return handleUsePrimaryEntryPointAppCommandInternal(obj);
                    }),
              done: true
            };
            obj2 = closure_130_0(closure_130_3[4]);
            return obj7;
          }
        } catch (tmp16) {
          if (0 === c3) {
            c5 = 3;
            throw tmp16;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleUsePrimaryEntryPointAppCommandInternal() {
  obj = _asyncToGenerator(async (arg0) => {
    let onExecutedCallback;
    let user = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      let c0;
      let c1;
      let c10;
      let c11;
      let c12;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let obj4;
      if (componentId === 2) {
        componentId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let currentUser;
          componentId = 2;
          if (0 === analyticsLocations) {
            if (arg0 === 1) {
              componentId = 3;
              throw value;
            } else if (arg0 === 2) {
              componentId = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp4;
              let closure_1 = tmp;
              user = undefined;
              locationObject = undefined;
              channelId = undefined;
              commandOrigin = undefined;
              sectionName = undefined;
              source = undefined;
              referrerId = undefined;
              customId = undefined;
              inviterUserId = undefined;
              onConfirmActivityLaunchChecksAlertOpen = undefined;
              ({ targetApplication: c0, locationObject: c1, channelId: c2, analyticsLocations: c3, componentId: c4, commandOrigin: c5, sectionName: c6, source: c7, onExecutedCallback: c8, referrerId: c9, customId: c10, inviterUserId: c11, onConfirmActivityLaunchChecksAlertOpen: c12 } = closure_0);
              embeddedActivitiesManager = undefined;
              currentUser = undefined;
              analyticsLocations = 1;
              componentId = 1;
              return { value: "Set", done: true };
            }
          } else {
            let tmp5;
            if (1 === analyticsLocations) {
              if (arg0 === 1) {
                componentId = 3;
                throw value;
              } else if (arg0 === 2) {
                componentId = 3;
                return { value, done: true };
              } else {
                embeddedActivitiesManager = closure_130_1(closure_130_3[5])();
                currentUser = closure_130_6.getCurrentUser();
                let tmp16 = null != channelId;
                if (tmp16) {
                  let tmp10 = null != closure_130_5.getChannel(channelId);
                  if (tmp10) {
                    tmp5 = null != currentUser && null != user;
                    const tmp13 = null != currentUser && null != user;
                    if (tmp5) {
                      const obj3 = closure_130_2(closure_130_3[6]);
                      obj3.markActivityUsed(user.id);
                      const obj7 = { channelId, applicationId: user.id, isStart: true, embeddedActivitiesManager, componentId, commandOrigin, sectionName, locationObject, analyticsLocations, source, onExecutedCallback, referrerId, customId, inviterUserId, onConfirmActivityLaunchChecksAlertOpen };
                      analyticsLocations = 2;
                      componentId = 1;
                      const obj8 = { value: obj4.runPrimaryAppCommandOrJoinEmbeddedActivity(obj7), done: false };
                      obj4 = closure_130_0(closure_130_3[7]);
                      return obj8;
                    }
                  }
                  tmp16 = tmp10;
                }
                componentId = 3;
                return { value: tmp16, done: true };
              }
            } else if (arg0 === 1) {
              componentId = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                componentId = 3;
                return { value, done: true };
              }
            }
            tmp10 = tmp5;
          }
        } catch (tmp39) {
          componentId = 3;
          throw tmp39;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/activities/handleUsePrimaryEntryPointAppCommand.tsx");

export default function handleUsePrimaryEntryPointAppCommand() {
  return obj(...arguments);
};