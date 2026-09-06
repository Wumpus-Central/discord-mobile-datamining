// discord_app/modules/activities/handleUsePrimaryEntryPointAppCommand.tsx
import getCachedOrFetchActivityApplicationForLaunchDefault from "utils/getCachedOrFetchActivityApplicationForLaunch.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
let closure_7 = async function _handleUsePrimaryEntryPointAppCommand(arg0) {
  let targetApplicationId = arg0;
  c4 = 0;
  c5 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            const targetApplication = tmp20;
            closure_129_0 = targetApplicationId;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            if (null == targetApplicationId.targetApplicationId) {
              c5 = 3;
              return { value: false, done: true };
            } else {
              closure_129_2 = false;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              let obj1 = {
                value: getCachedOrFetchActivityApplicationForLaunchDefault(
                  targetApplicationId.targetApplicationId,
                  targetApplicationId.channelId,
                ),
                done: false,
              };
              return obj1;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_1 = value;
          obj = closure_130_0(closure_130_3[4]);
          closure_129_2 = obj.shouldOpenActivityInPopoutWindow();
          c3 = 0;
          obj1 = closure_130_0(closure_130_3[4]);
          c5 = 3;
          const obj3 = {
            value: obj1.wrapPreemptiveActivityPopout(closure_129_2, () => {
              const obj = {};
              const merged = Object.assign(targetApplicationId);
              obj.targetApplication = targetApplication;
              return (function handleUsePrimaryEntryPointAppCommandInternal() {
                const self = this;
                const apply = closure_1_8.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(obj);
            }),
            done: true,
          };
          return obj3;
        }
      } catch (tmp19) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp19;
        } else {
          c4 = tmp;
        }
        tmp20 = c3;
      }
    }
  })();
};
let closure_8 = async function _handleUsePrimaryEntryPointAppCommandInternal(arg0) {
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
          closure_2 = tmp5;
          closure_1 = tmp2;
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
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          ({
            targetApplication: closure_129_0,
            locationObject: closure_129_1,
            channelId: closure_129_2,
            analyticsLocations: closure_129_3,
            componentId: closure_129_4,
            commandOrigin: closure_129_5,
            sectionName: closure_129_6,
            source: closure_129_7,
            onExecutedCallback: closure_129_8,
            referrerId: closure_129_9,
            customId: closure_129_10,
            inviterUserId: closure_129_11,
            onConfirmActivityLaunchChecksAlertOpen: closure_129_12,
          } = closure_0);
          closure_129_13 = undefined;
          let currentUser;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_13 = closure_130_1(closure_130_3[5])();
            currentUser = closure_130_6.getCurrentUser();
            let tmp17 = null != closure_129_2;
            if (tmp17) {
              let tmp11 = null != closure_130_5.getChannel(closure_129_2);
              if (tmp11) {
                let tmp14 = null != currentUser;
                if (tmp14) {
                  tmp14 = null != closure_129_0;
                }
                let tmp6 = tmp14;
                if (tmp14) {
                  let obj2 = closure_130_2(closure_130_3[6]);
                  obj2.markActivityUsed(closure_129_0.id);
                  let obj3 = closure_130_0(closure_130_3[7]);
                  obj2 = {
                    channelId: closure_129_2,
                    applicationId: closure_129_0.id,
                    isStart: true,
                    embeddedActivitiesManager: closure_129_13,
                    componentId: closure_129_4,
                    commandOrigin: closure_129_5,
                    sectionName: closure_129_6,
                    locationObject: closure_129_1,
                    analyticsLocations: closure_129_3,
                    source: closure_129_7,
                    onExecutedCallback: closure_129_8,
                    referrerId: closure_129_9,
                    customId: closure_129_10,
                    inviterUserId: closure_129_11,
                    onConfirmActivityLaunchChecksAlertOpen: closure_129_12,
                  };
                  c3 = 2;
                  c4 = 1;
                  obj3 = { value: null, done: false };
                  obj3.value = obj3.runPrimaryAppCommandOrJoinEmbeddedActivity(obj2);
                  return obj3;
                }
              }
              tmp17 = tmp11;
            }
            c4 = 3;
            const obj4 = { value: tmp17, done: true };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else {
          tmp6 = value;
          if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
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
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/handleUsePrimaryEntryPointAppCommand.tsx");

export default function handleUsePrimaryEntryPointAppCommand() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
