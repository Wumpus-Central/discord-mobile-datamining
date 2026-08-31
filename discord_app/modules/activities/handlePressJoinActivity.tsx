// discord_app/modules/activities/handlePressJoinActivity.tsx
import setDefault from "../../actions/AlertActionCreators.tsx";
import getEmbeddedActivityJoinability from "utils/getEmbeddedActivityJoinability.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../records/ApplicationRecord.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/GuildStore.tsx";
import closure_7 from "../../stores/PermissionStore.tsx";
import closure_8 from "../../stores/UserStore.tsx";
import closure_9 from "../../stores/VoiceStateStore.tsx";
import closure_10 from "EmbeddedActivitiesStore.tsx";

require = arg1;
function handlePressJoinActivity(arg0) {
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (handleCanJoin != null) {
      handleCanJoin();
    }
  } else if (tmp(9404).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const result = tmp(9448).showActivitiesInvalidPermissionsAlert();
    const tmpResult = tmp(9448);
  } else if (tmp(9404).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    let obj = { title: null, body: null, hideActionSheet: false };
    const intl7 = tmp(1236).intl;
    obj[0] = intl7.string(tmp(1236).t.PtobXW);
    const intl8 = tmp(1236).intl;
    obj[1] = intl8.string(tmp(1236).t.UXoQTp);
    setDefault.show(obj);
    const obj7 = setDefault;
  } else if (tmp(9404).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    obj = { title: null, body: null, hideActionSheet: false };
    const intl5 = tmp(1236).intl;
    obj[0] = intl5.string(tmp(1236).t.PtobXW);
    const intl6 = tmp(1236).intl;
    obj[1] = intl6.string(tmp(1236).t.uGDCcw);
    setDefault.show(obj);
    const obj5 = setDefault;
  } else if (tmp(9404).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    let obj2 = setDefault;
    obj1 = { title: null, body: null, hideActionSheet: false };
    const intl3 = tmp(1236).intl;
    obj1[0] = intl3.string(tmp(1236).t.PtobXW);
    const intl4 = tmp(1236).intl;
    obj1[1] = intl4.string(tmp(1236).t["4WuFRE"]);
    obj2.show(obj1);
  } else {
    obj = setDefault;
    obj2 = { title: null, body: null, hideActionSheet: false };
    const intl = tmp(1236).intl;
    obj2[0] = intl.string(tmp(1236).t.PtobXW);
    const intl2 = tmp(1236).intl;
    obj2[1] = intl2.string(tmp(1236).t.FUCQco);
    obj.show(obj2);
  }
}
function _maybeJoinEmbeddedActivity() {
  let self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              ({ channelId: c0, applicationId: c1, launchId: c2, inputApplication: c3, analyticsLocations: c4, launchingComponentId: c5, sectionName: c6, inviterUserId: c7 } = callback);
              let currentUser;
              closure_9 = undefined;
              let embeddedActivitiesForChannel;
              let id;
              function _handleCanJoin() {
                const self = this;
                const tmp = v2(function*() {
                  if (c0 === 2) {
                    c0 = 3;
                    HermesBuiltin.throwTypeError();
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw arg1;
                    } else if (arg0 === 2) {
                      let obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } else {
                    try {
                      c0 = 2;
                      if (0 === v0) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else if (null != closure_1_8) {
                          obj1 = { applicationId: null, activityChannelId: null, locationObject: null, analyticsLocations: null, componentId: null, sectionName: null, inviterUserId: null };
                          obj1[0] = closure_1_8.applicationId;
                          obj1[1] = c0;
                          obj1[2] = {};
                          obj1[3] = closure_1_4;
                          obj1[4] = closure_1_5;
                          obj1[5] = closure_1_6;
                          obj1[6] = closure_1_7;
                          v0 = 1;
                          c0 = 1;
                          const obj2 = { value: null, done: false };
                          obj2[0] = v0(closure_1_2[14])(obj1);
                          return obj2;
                        }
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      }
                      c0 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    } catch (tmp13) {
                      c0 = tmp;
                      throw tmp13;
                    }
                  }
                });
                closure_12 = tmp;
                const apply = tmp.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              c3 = 1;
              c4 = 1;
              return { value: "Object", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(callback);
                currentUser = embeddedActivitiesForChannel.find((applicationId) => {
                  let tmp = applicationId.applicationId === c1;
                  if (tmp) {
                    tmp = null == c2 || applicationId.launchId === tmp2;
                    const tmp4 = null == c2 || applicationId.launchId === tmp2;
                  }
                  return tmp;
                });
                closure_9 = c3;
                if (null == closure_9) {
                  let obj4 = callback2(5922);
                  c3 = 2;
                  c4 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = obj4.fetchApplication(callback2);
                  return obj2;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              embeddedActivitiesForChannel = arg1;
              closure_9 = c4.createFromServer(embeddedActivitiesForChannel);
            }
            if (null != currentUser) {
              if (null != closure_9) {
                id = currentUser.getCurrentUser();
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                let obj3 = { embeddedActivityJoinability: null, handleCanJoin: null };
                obj4 = { userId: null, application: null, channelId: null, currentUser: null, isActivitiesEnabledForCurrentPlatform: null, ChannelStore: null, VoiceStateStore: null, PermissionStore: null, GuildStore: null };
                obj4[0] = id;
                obj4[1] = closure_9;
                obj4[2] = callback;
                obj4[3] = id;
                obj3 = callback(9406);
                obj4[4] = obj3.getIsActivitiesEnabledForCurrentPlatform();
                obj4[5] = c5;
                obj4[6] = closure_9;
                obj4[7] = c7;
                obj4[8] = c6;
                obj3[0] = callback2(9404)(obj4);
                obj3[1] = function handleCanJoin() {
                  const self = this;
                  const apply = _handleCanJoin.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                id(obj3);
                const tmp49 = id;
                const tmp52 = callback2(9404);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp31) {
          c4 = tmp;
          throw tmp31;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_12 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

export default handlePressJoinActivity;
export const maybeJoinEmbeddedActivity = function maybeJoinEmbeddedActivity(arg0) {
  const self = this;
  const apply = _maybeJoinEmbeddedActivity.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};