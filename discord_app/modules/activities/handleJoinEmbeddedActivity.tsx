// discord_app/modules/activities/handleJoinEmbeddedActivity.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../applications/ApplicationStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/SelectedChannelStore.tsx";
import closure_7 from "../../stores/UserStore.tsx";
import closure_8 from "EmbeddedActivitiesStore.tsx";
import { SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES as closure_9 } from "Constants.tsx";
import { shouldOpenActivityInPopoutWindow } from "ActivityPopoutUtils.native.tsx";

const require = arg1;
function _handleJoinEmbeddedActivityInternal() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (application === 2) {
        application = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            application = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                dependencyMap = tmp2;
                let callback2 = tmp5;
                let callback;
                callback2 = undefined;
                dependencyMap = undefined;
                c3 = undefined;
                application = undefined;
                let channel;
                let store;
                let currentUser;
                let currentEmbeddedActivity;
                c9 = undefined;
                throwTypeErrorResult = callback;
                ({ applicationId: c0, activityChannelId: c1, locationObject: c2, analyticsLocations: c3, componentId: c4, sectionName: c5, source: c6, inviterUserId: c7, customId: c8, referrerId: c9 } = callback);
                closure_10 = undefined;
                let _private;
                let guildId;
                let currentUser2;
                let currentEmbeddedActivity2;
                let application2;
                closure_16 = undefined;
                closure_17 = undefined;
                closure_18 = undefined;
                c3 = 1;
                application = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                closure_10 = callback2(9391)();
                throwTypeErrorResult = channel;
                throwTypeErrorResult = callback2;
                _private = channel.getChannel(callback2);
                throwTypeErrorResult = null;
                guildId = undefined;
                if (_private != null) {
                  guildId = obj23.getGuildId();
                }
                currentUser2 = currentUser.getCurrentUser();
                if (null == currentUser2) {
                  application = 3;
                  return { value: false, done: true };
                } else {
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = _private;
                  if (null != _private) {
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = guildId;
                    if (null != callback2) {
                      throwTypeErrorResult = callback2;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = currentEmbeddedActivity;
                      currentEmbeddedActivity2 = currentEmbeddedActivity.getCurrentEmbeddedActivity();
                      application2 = undefined;
                      let applicationId;
                      if (currentEmbeddedActivity2 != null) {
                        applicationId = currentEmbeddedActivity2.applicationId;
                      }
                      if (null != applicationId) {
                        let applicationId1;
                        if (currentEmbeddedActivity2 != null) {
                          applicationId1 = currentEmbeddedActivity2.applicationId;
                        }
                        application2 = application.getApplication(applicationId1);
                      }
                      if (store.getVoiceChannelId() === callback2) {
                        if (null != currentEmbeddedActivity2) {
                          if (currentEmbeddedActivity2.applicationId === callback) {
                            let obj13 = callback(4080);
                            const embeddedActivityLocationChannelId = obj13.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity2.location);
                            if (embeddedActivityLocationChannelId === store.getVoiceChannelId()) {
                              throwTypeErrorResult = callback2;
                              throwTypeErrorResult = dependencyMap;
                              throwTypeErrorResult = callback2;
                              throwTypeErrorResult = dependencyMap;
                              throwTypeErrorResult = guildId;
                              throwTypeErrorResult = currentEmbeddedActivity2;
                              throwTypeErrorResult = callback2(9458)(guildId, currentEmbeddedActivity2.location);
                              throwTypeErrorResult = globalThis;
                              application = 3;
                              const obj2 = { value: null, done: true };
                              obj2[0] = Promise.resolve(true);
                              return obj2;
                            }
                          }
                        }
                      }
                      throwTypeErrorResult = callback2;
                      c3 = 2;
                      application = 1;
                      let obj3 = { value: null, done: false };
                      obj3[0] = callback2(9418)(callback, callback2);
                      return obj3;
                    }
                  }
                  throwTypeErrorResult = globalThis;
                  application = 3;
                  let obj4 = { value: null, done: true };
                  obj4[0] = Promise.resolve(false);
                  return obj4;
                }
                obj23 = _private;
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                closure_16 = arg1;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                const obj6 = { applicationId: null, application: null, channel: null, currentEmbeddedApplication: null, embeddedActivitiesManager: null, user: null };
                throwTypeErrorResult = callback;
                obj6[0] = callback;
                throwTypeErrorResult = closure_16;
                obj6[1] = closure_16;
                throwTypeErrorResult = _private;
                obj6[2] = _private;
                throwTypeErrorResult = application2;
                obj6[3] = application2;
                throwTypeErrorResult = closure_10;
                obj6[4] = closure_10;
                throwTypeErrorResult = currentUser2;
                obj6[5] = currentUser2;
                c3 = 3;
                application = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = callback(9417).confirmActivityLaunchChecks(obj6);
                return obj7;
              }
            } else {
              if (3 === tmp5) {
                if (arg0 === 1) {
                  application = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  application = 3;
                  const obj8 = { value: null, done: true };
                  obj8[0] = arg1;
                  return obj8;
                } else if (arg1) {
                  if (null != _private) {
                    closure_17 = callback2(9427)(_private.id);
                    closure_18 = c9.includes(_private.type);
                    if (closure_17) {
                      const obj9 = { channelId: null, bypassChangeModal: null };
                      obj9[0] = _private.id;
                      obj9[1] = null != application2;
                      c3 = 4;
                      application = 1;
                      const obj10 = { value: null, done: false };
                      obj10[0] = callback2(9428)(obj9);
                      return obj10;
                    } else {
                      obj3 = callback(8090);
                      application = 3;
                      return { value: false, done: true };
                    }
                  } else if (null == _private) {
                    application = 3;
                    return { value: false, done: true };
                  }
                } else {
                  application = 3;
                  return { value: false, done: true };
                }
              } else if (4 === tmp5) {
                if (arg0 === 1) {
                  application = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  application = 3;
                  const obj11 = { value: null, done: true };
                  obj11[0] = arg1;
                  return obj11;
                } else if (!arg1) {
                  application = 3;
                  return { value: false, done: true };
                }
              } else if (arg0 === 1) {
                application = 3;
                throw arg1;
              } else if (arg0 === 2) {
                application = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = arg1;
                return obj12;
              } else {
                application = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              if (null != callback2) {
                callback2(12399)(callback2);
              }
              if (null != currentEmbeddedActivity2) {
                obj4 = callback(9408);
                const result = obj4.maybeDisconnectFromCurrentActivity(currentEmbeddedActivity2.location);
              }
              obj5 = callback(9408);
              obj13 = { channelId: null, applicationId: null, isStart: false, embeddedActivitiesManager: null, analyticsLocations: null, locationObject: null, componentId: null, sectionName: null, source: null, inviterUserId: null, customId: null, referrerId: null };
              obj13[0] = callback2;
              obj13[1] = callback;
              obj13[3] = closure_10;
              obj13[4] = c3;
              obj13[5] = dependencyMap;
              obj13[6] = application;
              obj13[7] = channel;
              obj13[8] = store;
              obj13[9] = currentUser;
              obj13[10] = currentEmbeddedActivity;
              obj13[11] = c9;
              c3 = 5;
              application = 1;
              const obj14 = { value: null, done: false };
              obj14[0] = obj5.runPrimaryAppCommandOrJoinEmbeddedActivity(obj13);
              return obj14;
            }
          } catch (throwTypeErrorResult) {
            application = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/activities/handleJoinEmbeddedActivity.tsx");

export default function handleJoinEmbeddedActivity(arg0) {
  const _require = arg0;
  const obj = shouldOpenActivityInPopoutWindow;
  return obj.wrapPreemptiveActivityPopout(require("ActivityPopoutUtils.native.tsx").shouldOpenActivityInPopoutWindow(), () => (function handleJoinEmbeddedActivityInternal(closure_0) {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_0));
};