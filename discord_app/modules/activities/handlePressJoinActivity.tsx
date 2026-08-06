// discord_app/modules/activities/handlePressJoinActivity.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import createExecutable from "createExecutable";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import closure_8 from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import participantFromServer from "participantFromServer";
import { set } from "../../actions/AlertActionCreators.tsx";
import { getEmbeddedActivityJoinability } from "utils/getEmbeddedActivityJoinability.tsx";

const require = arg1;
function handlePressJoinActivity(arg0) {
  let embeddedActivityJoinability;
  let handleCanJoin;
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (handleCanJoin != null) {
      handleCanJoin();
    }
  } else if (tmp(10584).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability) {
    const result = tmp(10575).showActivitiesInvalidPermissionsAlert();
    const tmpResult = tmp(10575);
  } else if (tmp(10584).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability) {
    let obj = { title: null, body: null, hideActionSheet: false };
    const intl7 = tmp(1236).intl;
    obj[0] = intl7.string(tmp(1236).t.PtobXW);
    const intl8 = tmp(1236).intl;
    obj[1] = intl8.string(tmp(1236).t.UXoQTp);
    set.show(obj);
    const obj7 = set;
  } else if (tmp(10584).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    obj = { title: null, body: null, hideActionSheet: false };
    const intl5 = tmp(1236).intl;
    obj[0] = intl5.string(tmp(1236).t.PtobXW);
    const intl6 = tmp(1236).intl;
    obj[1] = intl6.string(tmp(1236).t.uGDCcw);
    set.show(obj);
    const obj5 = set;
  } else if (tmp(10584).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    let obj2 = set;
    const obj1 = { title: null, body: null, hideActionSheet: false };
    const intl3 = tmp(1236).intl;
    obj1[0] = intl3.string(tmp(1236).t.PtobXW);
    const intl4 = tmp(1236).intl;
    obj1[1] = intl4.string(tmp(1236).t["4WuFRE"]);
    obj2.show(obj1);
  } else {
    obj = set;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
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
          return { value: "T", done: null };
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
              let dependencyMap = tmp5;
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
              let updateVoiceState;
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
                      return { value: "T", done: null };
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
                        } else if (null != outer1_8) {
                          const obj1 = { applicationId: null, activityChannelId: null, locationObject: null, analyticsLocations: null, componentId: null, sectionName: null, inviterUserId: null };
                          obj1[0] = outer1_8.applicationId;
                          obj1[1] = c0;
                          obj1[2] = {};
                          obj1[3] = outer1_4;
                          obj1[4] = outer1_5;
                          obj1[5] = outer1_6;
                          obj1[6] = outer1_7;
                          v0 = 1;
                          c0 = 1;
                          const obj2 = { value: null, done: false };
                          obj2[0] = v0(outer1_2[14])(obj1);
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
                      return { value: "T", done: null };
                    } catch (tmp13) {
                      c0 = tmp;
                      throw tmp13;
                    }
                  }
                });
                const _handleCanJoin = tmp;
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
              return { value: "PX_8", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj1 = { value: null, done: true };
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
                updateVoiceState = c3;
                if (null == updateVoiceState) {
                  let obj4 = callback2(5650);
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
              updateVoiceState = c4.createFromServer(embeddedActivitiesForChannel);
            }
            if (null != currentUser) {
              if (null != updateVoiceState) {
                id = currentUser.getCurrentUser();
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                let obj3 = { embeddedActivityJoinability: null, handleCanJoin: null };
                obj4 = { userId: null, application: null, channelId: null, currentUser: null, isActivitiesEnabledForCurrentPlatform: null, ChannelStore: null, VoiceStateStore: null, PermissionStore: null, GuildStore: null };
                obj4[0] = id;
                obj4[1] = updateVoiceState;
                obj4[2] = callback;
                obj4[3] = id;
                obj3 = callback(10574);
                obj4[4] = obj3.getIsActivitiesEnabledForCurrentPlatform();
                obj4[5] = c5;
                obj4[6] = updateVoiceState;
                obj4[7] = c7;
                obj4[8] = c6;
                obj3[0] = callback2(10584)(obj4);
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
                const tmp52 = callback2(10584);
              }
            }
            c4 = 3;
            return { value: "T", done: null };
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
  const _maybeJoinEmbeddedActivity = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

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