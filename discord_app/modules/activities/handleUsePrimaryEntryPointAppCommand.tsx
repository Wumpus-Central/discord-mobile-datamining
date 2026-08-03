import getEmbeddedActivitiesManager from "getEmbeddedActivitiesManager";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function _handleUsePrimaryEntryPointAppCommand() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp20;
              closure_1 = undefined;
              closure_2 = undefined;
              if (null == lib.targetApplicationId) {
                c5 = 3;
                return { value: false, done: true };
              } else {
                closure_2 = false;
                let dependencyMap = 1;
                c4 = 2;
                c5 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = outer1_1(10994)(tmp27.targetApplicationId, tmp27.channelId);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            obj = lib(10686);
            closure_2 = obj.shouldOpenActivityInPopoutWindow();
            dependencyMap = 0;
            obj1 = lib(10686);
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = obj1.wrapPreemptiveActivityPopout(closure_2, () => {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj.targetApplication = closure_1;
              return (function handleUsePrimaryEntryPointAppCommandInternal(arg0) {
                const self = this;
                const apply = closure_8.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(obj);
            });
            return obj3;
          }
        } catch (tmp19) {
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp19;
          } else {
            c4 = tmp;
          }
          tmp20 = dependencyMap;
        }
      }
    })();
  });
  const _handleUsePrimaryEntryPointAppCommand = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleUsePrimaryEntryPointAppCommandInternal() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback2 = tmp5;
              let callback = tmp2;
              let lib;
              callback = undefined;
              callback2 = undefined;
              dependencyMap = undefined;
              c4 = undefined;
              let channel;
              let currentUser;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              c12 = undefined;
              ({ targetApplication: c0, locationObject: c1, channelId: c2, analyticsLocations: c3, componentId: c4, commandOrigin: c5, sectionName: c6, source: c7, onExecutedCallback: c8, referrerId: c9, customId: c10, inviterUserId: c11, onConfirmActivityLaunchChecksAlertOpen: c12 } = lib);
              let closure_13;
              let currentUser2;
              dependencyMap = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                closure_13 = callback(10687)();
                currentUser2 = currentUser.getCurrentUser();
                let tmp17 = null != callback2;
                if (tmp17) {
                  let tmp11 = null != channel.getChannel(callback2);
                  if (tmp11) {
                    let tmp14 = null != currentUser2;
                    if (tmp14) {
                      tmp14 = null != lib;
                    }
                    let tmp6 = tmp14;
                    if (tmp14) {
                      let obj2 = callback2(11006);
                      obj2.markActivityUsed(lib.id);
                      let obj3 = lib(10664);
                      obj2 = { channelId: null, applicationId: null, isStart: true, embeddedActivitiesManager: null, componentId: null, commandOrigin: null, sectionName: null, locationObject: null, analyticsLocations: null, source: null, onExecutedCallback: null, referrerId: null, customId: null, inviterUserId: null, onConfirmActivityLaunchChecksAlertOpen: null };
                      obj2[0] = callback2;
                      obj2[1] = lib.id;
                      obj2[3] = closure_13;
                      obj2[4] = c4;
                      obj2[5] = channel;
                      obj2[6] = currentUser;
                      obj2[7] = callback;
                      obj2[8] = dependencyMap;
                      obj2[9] = c7;
                      obj2[10] = c8;
                      obj2[11] = c9;
                      obj2[12] = c10;
                      obj2[13] = c11;
                      obj2[14] = c12;
                      dependencyMap = 2;
                      c4 = 1;
                      obj3 = { value: null, done: false };
                      obj3[0] = obj3.runPrimaryAppCommandOrJoinEmbeddedActivity(obj2);
                      return obj3;
                    }
                  }
                  tmp17 = tmp11;
                }
                c4 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = tmp17;
                return obj4;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else {
              tmp6 = arg1;
              if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            }
            tmp11 = tmp6;
          }
        } catch (tmp40) {
          c4 = tmp;
          throw tmp40;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleUsePrimaryEntryPointAppCommandInternal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/activities/handleUsePrimaryEntryPointAppCommand.tsx");

export default function handleUsePrimaryEntryPointAppCommand() {
  const self = this;
  const apply = _handleUsePrimaryEntryPointAppCommand.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};