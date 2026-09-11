// === Module 9630: confirmActivityLaunchChecks ===

// Module 9630 (confirmActivityLaunchChecks)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

const require = fn;
function getOrFetchApplicationForLaunch() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _getOrFetchApplicationForLaunch() {
  closure_4 = tmp3;
  ({ applicationId: closure_131_0, channelId: closure_131_1, guildId: closure_131_2 } = closure_0);
  await "PX_16";
  await closure_132_1(closure_132_2[4])(closure_131_0, closure_131_1);
  closure_131_4 = closure_5;
  if (null != closure_131_2) {
    let PRIVATE_CHANNEL = closure_132_0(closure_132_2[5]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
  } else {
    PRIVATE_CHANNEL = closure_132_0(closure_132_2[5]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
  }
  closure_131_3 = PRIVATE_CHANNEL;
  const obj3 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: "", applicationId: closure_131_0, channelId: null, guildId: null, error: null, locationKind: null };
  let channelId = closure_131_1;
  if (closure_131_1 == null) {
    channelId = null;
  }
  obj3.channelId = channelId;
  let guildId = closure_131_2;
  if (closure_131_2 == null) {
    guildId = null;
  }
  obj3.guildId = guildId;
  const aPIError = new closure_132_0(closure_132_2[7]).APIError(closure_131_4);
  obj3.error = aPIError;
  obj3.locationKind = closure_131_3;
  closure_132_1(closure_132_2[6]).dispatch(obj3);
  await "HermesInternal";
  return value;
};
let closure_9 = async function _confirmActivityChange(arg0) {
  const shouldClosePopout = tmp2;
  ({ currentEmbeddedApplication: closure_129_0, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: closure_129_1, onConfirmActivityLaunchChecksAlertOpen: closure_129_2 } = closure_0);
  await "PX_16";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 3;
      return { value, done: true };
    } else if (null != closure_129_0) {
      c2 = 2;
      c3 = 1;
      new Promise((fn) => {
        closure_0 = fn;
        selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
        value = selfEmbeddedActivities.get(closure_0.id);
        let _location;
        if (value != null) {
          _location = value.location;
        }
        channel = channel.getChannel(closure_1_0(4235).getEmbeddedActivityLocationChannelId(_location));
        if (null != value) {
          if (null != channel) {
            if (dependencyMap != null) {
              dependencyMap();
            }
            shouldClosePopout(9631)(tmp, channel, () => {
              value(c2[10])();
              const obj = { location: value.location, applicationId: closure_2_0.id, shouldClosePopout };
              obj.leaveActivity(obj);
              closure_0(true);
            }, () => closure_0(false));
          }
        }
        fn(true);
        const obj2 = closure_1_0(4235);
      });
      return {
        value: new Promise((fn) => {
              closure_0 = fn;
              selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
              value = selfEmbeddedActivities.get(closure_0.id);
              let _location;
              if (value != null) {
                _location = value.location;
              }
              channel = channel.getChannel(closure_1_0(4235).getEmbeddedActivityLocationChannelId(_location));
              if (null != value) {
                if (null != channel) {
                  if (dependencyMap != null) {
                    dependencyMap();
                  }
                  shouldClosePopout(9631)(tmp, channel, () => {
                    value(c2[10])();
                    const obj = { location: value.location, applicationId: closure_2_0.id, shouldClosePopout };
                    obj.leaveActivity(obj);
                    closure_0(true);
                  }, () => closure_0(false));
                }
              }
              fn(true);
              const obj2 = closure_1_0(4235);
            }),
        done: false
      };
    }
  } else if (arg0 === 1) {
    c3 = 3;
    throw value;
  } else if (arg0 === 2) {
    c3 = 3;
    return { value, done: true };
  } else if (!value) {
    c3 = 3;
    return { value: false, done: true };
  }
  return true;
};
let closure_10 = async function _confirmActivityAgeGate(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          ({ application: closure_131_0, applicationId: closure_131_1, channel: closure_131_2, user: closure_131_3, onConfirmActivityLaunchChecksAlertOpen: closure_131_4 } = closure_0);
          closure_131_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: null };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            if (null == closure_131_3.nsfwAllowed) {
              closure_1 = closure_131_0;
              if (closure_131_0 == null) {
                const obj2 = { applicationId: closure_131_1, channelId: null, guildId: null };
                let id;
                if (closure_131_2 != null) {
                  id = closure_131_2.id;
                }
                obj2.channelId = id;
                let obj4 = closure_131_2;
                let guildId;
                if (closure_131_2 != null) {
                  guildId = obj4.getGuildId();
                }
                if (guildId == null) {
                  guildId = undefined;
                }
                obj2.guildId = guildId;
                c5 = 2;
                c6 = 1;
                const obj3 = { value: closure_132_7(obj2), done: false };
                return obj3;
              }
            }
            c6 = 3;
            return { value: true, done: true };
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = value;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          c6 = 3;
          return { value: false, done: true };
        }
        closure_131_5 = closure_1;
        if (null == closure_131_5) {
          c6 = 3;
          return { value: false, done: true };
        } else {
          const embeddedActivityConfig = closure_131_5.embeddedActivityConfig;
          let requires_age_gate;
          if (embeddedActivityConfig != null) {
            requires_age_gate = embeddedActivityConfig.requires_age_gate;
          }
          if (requires_age_gate != null) {
            if (requires_age_gate) {
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                if (closure_1_4 != null) {
                  tmp();
                }
                closure_0(id[11]);
                const obj = { application, channelId: null, onAgree: null, onDisagree: null };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                obj.channelId = id;
                obj.onAgree = function onAgree() {
                  return closure_0(true);
                };
                obj.onDisagree = function onDisagree() {
                  return closure_0(false);
                };
                const result = obj.confirmActivityAgeGateAlert(obj);
              });
              c5 = 3;
              c6 = 1;
              const obj5 = { value: promise, done: false };
              return obj5;
            }
          }
        }
      }
    } catch (tmp28) {
      c6 = tmp;
      throw tmp28;
    }
  }
};
let closure_11 = async function _confirmExternalAppLaunch(arg0) {
  closure_3 = tmp2;
  ({ application: closure_131_0, applicationId: closure_131_1, channel: closure_131_2, onConfirmActivityLaunchChecksAlertOpen: closure_131_3 } = closure_0);
  await "PX_16";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      let obj1 = { value, done: true };
      return obj1;
    } else {
      closure_1 = closure_131_0;
      if (closure_131_0 == null) {
        const obj2 = { applicationId: closure_131_1, channelId: null, guildId: null };
        let id;
        if (closure_131_2 != null) {
          id = closure_131_2.id;
        }
        obj2.channelId = id;
        let guildId;
        if (closure_131_2 != null) {
          guildId = closure_131_2.getGuildId();
        }
        if (guildId == null) {
          guildId = undefined;
        }
        obj2.guildId = guildId;
        c5 = 2;
        c6 = 1;
        return { value: closure_132_7(obj2), done: false };
      }
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 === 2) {
    c6 = 3;
    return { value, done: true };
  } else {
    closure_1 = value;
  }
  closure_131_4 = closure_1;
  let tmp10 = null != closure_131_4;
  if (tmp10) {
    obj1 = closure_132_0(closure_132_2[12]);
    const hasApplicationFlagResult = obj1.hasApplicationFlag(closure_131_4, closure_132_6.EMBEDDED_RELEASED);
    let tmp18 = !hasApplicationFlagResult;
    if (!hasApplicationFlagResult) {
      tmp18 = !closure_131_4.isVerified;
    }
    let tmp21 = !tmp18;
    if (tmp18) {
      let result = closure_132_5.hasActivityEverBeenLaunched(closure_131_1);
      if (!result) {
        result = new Promise((arg0) => {
          closure_0 = arg0;
          if (closure_1_3 != null) {
            tmp();
          }
          closure_0(c2[13]);
          const obj = {
            application,
            onConfirm() {
              return closure_0(true);
            },
            onCancel() {
              return closure_0(false);
            }
          };
          const result = obj.confirmExternalAppLaunchAlert(obj);
        });
      }
      tmp21 = result;
    }
    tmp10 = tmp21;
  }
  return tmp10;
};
let closure_12 = async function _confirmActivityLaunchChecks() {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  ({ currentEmbeddedApplication: obj7.currentEmbeddedApplication, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: obj7.shouldClosePopoutOnLeaveCurrentEmbeddedApplication, onConfirmActivityLaunchChecksAlertOpen: obj7.onConfirmActivityLaunchChecksAlertOpen } = closure_0);
  await (function confirmActivityChange() {
    const self = this;
    const apply = closure_1_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })({ currentEmbeddedApplication: null, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: null, onConfirmActivityLaunchChecksAlertOpen: null });
  closure_129_1 = value;
  if (!closure_129_1) {
    return false;
  }
  await (function confirmActivityAgeGate() {
    const self = this;
    const apply = closure_1_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_129_0);
  closure_129_2 = value;
  if (!closure_129_2) {
    return false;
  }
  await (function confirmExternalAppLaunch() {
    const self = this;
    const apply = closure_1_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_129_0);
  closure_129_3 = value;
  return closure_129_3;
};
const ApplicationFlags = fn(1074).ApplicationFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/confirmActivityLaunchChecks.tsx");

export const confirmActivityLaunchChecks = function confirmActivityLaunchChecks() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};