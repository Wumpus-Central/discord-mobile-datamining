// discord_app/modules/activities/utils/confirmActivityLaunchChecks.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

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
let closure_8 = async function _getOrFetchApplicationForLaunch(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          ({ applicationId: closure_131_0, channelId: closure_131_1, guildId: closure_131_2 } = closure_0);
          closure_131_3 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c6 = 1;
          c7 = 3;
          c8 = 1;
          let obj2 = { value: closure_132_1(closure_132_2[4])(closure_131_0, closure_131_1), done: false };
          return obj2;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_4 = closure_5;
        if (null != closure_131_2) {
          let PRIVATE_CHANNEL = closure_132_0(closure_132_2[5]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
        } else {
          PRIVATE_CHANNEL = closure_132_0(closure_132_2[5]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
        }
        closure_131_3 = PRIVATE_CHANNEL;
        obj2 = closure_132_1(closure_132_2[6]);
        const obj3 = {
          type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
          nonce: "",
          applicationId: closure_131_0,
          channelId: null,
          guildId: null,
          error: null,
          locationKind: null,
        };
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
        obj2.dispatch(obj3);
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp46) {
      closure_5 = tmp46;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp46;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_9 = async function _confirmActivityChange(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const shouldClosePopout = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({
            currentEmbeddedApplication: closure_129_0,
            shouldClosePopoutOnLeaveCurrentEmbeddedApplication: closure_129_1,
            onConfirmActivityLaunchChecksAlertOpen: closure_129_2,
          } = closure_0);
          c2 = 1;
          c3 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else if (null != closure_129_0) {
            const promise = new Promise((fn) => {
              closure_0 = fn;
              selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
              value = selfEmbeddedActivities.get(closure_0.id);
              let _location;
              if (value != null) {
                _location = value.location;
              }
              channel = channel.getChannel(closure_1_0(4189).getEmbeddedActivityLocationChannelId(_location));
              if (null != value) {
                if (null != channel) {
                  if (dependencyMap != null) {
                    dependencyMap();
                  }
                  shouldClosePopout(9540)(
                    tmp,
                    channel,
                    () => {
                      value(c2[10])();
                      const obj = { location: value.location, applicationId: closure_2_0.id, shouldClosePopout };
                      obj.leaveActivity(obj);
                      closure_0(true);
                    },
                    () => closure_0(false),
                  );
                }
              }
              fn(true);
            });
            c2 = 2;
            c3 = 1;
            const obj2 = { value: promise, done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          c3 = 3;
          return { value: false, done: true };
        }
        c3 = 3;
        return { value: true, done: true };
      }
    } catch (tmp16) {
      c3 = tmp;
      throw tmp16;
    }
  }
};
let closure_10 = async function _confirmActivityAgeGate(arg0, value) {
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
          ({
            application: closure_131_0,
            applicationId: closure_131_1,
            channel: closure_131_2,
            user: closure_131_3,
            onConfirmActivityLaunchChecksAlertOpen: closure_131_4,
          } = closure_0);
          closure_131_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
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
let closure_11 = async function _confirmExternalAppLaunch(arg0, value) {
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
          const application = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          ({
            application: closure_131_0,
            applicationId: closure_131_1,
            channel: closure_131_2,
            onConfirmActivityLaunchChecksAlertOpen: closure_131_3,
          } = closure_0);
          closure_131_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
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
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
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
                  },
                };
                const result = obj.confirmExternalAppLaunchAlert(obj);
              });
            }
            tmp21 = result;
          }
          tmp10 = tmp21;
        }
        c6 = 3;
        obj4 = { value: tmp10, done: true };
        return obj4;
      }
    } catch (tmp40) {
      c6 = tmp;
      throw tmp40;
    }
  }
};
let closure_12 = async function _confirmActivityLaunchChecks() {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  ({
    currentEmbeddedApplication: obj7.currentEmbeddedApplication,
    shouldClosePopoutOnLeaveCurrentEmbeddedApplication: obj7.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
    onConfirmActivityLaunchChecksAlertOpen: obj7.onConfirmActivityLaunchChecksAlertOpen,
  } = closure_0);
  closure_129_1 = await (function confirmActivityChange() {
    const self = this;
    const apply = closure_1_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })({
    currentEmbeddedApplication: null,
    shouldClosePopoutOnLeaveCurrentEmbeddedApplication: null,
    onConfirmActivityLaunchChecksAlertOpen: null,
  });
  if (!closure_129_1) {
    return false;
  }
  closure_129_2 = await (function confirmActivityAgeGate() {
    const self = this;
    const apply = closure_1_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_129_0);
  if (!closure_129_2) {
    return false;
  }
  closure_129_3 = await (function confirmExternalAppLaunch() {
    const self = this;
    const apply = closure_1_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_129_0);
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
