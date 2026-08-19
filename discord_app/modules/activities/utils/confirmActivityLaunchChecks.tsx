// discord_app/modules/activities/utils/confirmActivityLaunchChecks.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import participantFromServer from "../EmbeddedActivitiesStore.tsx";
import { ApplicationFlags } from "../../../Constants.tsx";

const require = fn;
function getOrFetchApplicationForLaunch() {
  const self = this;
  const apply = _getOrFetchApplicationForLaunch.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getOrFetchApplicationForLaunch() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let PRIVATE_CHANNEL = tmp7;
              let callback;
              let callback2;
              dependencyMap = undefined;
              ({ applicationId: c0, channelId: c1, guildId: c2 } = callback);
              PRIVATE_CHANNEL = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c6 = 1;
              c7 = 3;
              c8 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = callback2(8735)(callback, callback2);
              return obj2;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            closure_4 = closure_5;
            if (null != dependencyMap) {
              PRIVATE_CHANNEL = callback(8738).EmbeddedActivityLocationKind.GUILD_CHANNEL;
            } else {
              PRIVATE_CHANNEL = callback(8738).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
            }
            obj2 = callback2(709);
            const obj3 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: "", applicationId: null, channelId: null, guildId: null, error: null, locationKind: null };
            obj3[2] = callback;
            if (callback2 == null) {
              callback2 = null;
            }
            obj3[3] = callback2;
            if (dependencyMap == null) {
              dependencyMap = null;
            }
            obj3[4] = dependencyMap;
            const aPIError = new callback(4273).APIError(closure_4);
            obj3[5] = aPIError;
            obj3[6] = PRIVATE_CHANNEL;
            obj2.dispatch(obj3);
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmActivityChange() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    const iter = (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              ({ currentEmbeddedApplication: c0, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: c1, onConfirmActivityLaunchChecksAlertOpen: c2 } = c0);
              c2 = 1;
              c3 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (null != c0) {
                const promise = new Promise((fn) => {
                  const _undefined = fn;
                  const selfEmbeddedActivities = closure_1_5.getSelfEmbeddedActivities();
                  const value = selfEmbeddedActivities.get(_undefined.id);
                  const _undefined2 = value;
                  let _location;
                  if (value != null) {
                    _location = value.location;
                  }
                  const channel = closure_1_4.getChannel(_undefined(4011).getEmbeddedActivityLocationChannelId(_location));
                  if (null != value) {
                    if (null != channel) {
                      if (dependencyMap != null) {
                        dependencyMap();
                      }
                      _undefined2(8739)(tmp, channel, () => {
                        value(table[10])();
                        const obj = { location: value.location, applicationId: lib.id, shouldClosePopout: value };
                        obj.leaveActivity(obj);
                        lib(true);
                      }, () => lib(false));
                    }
                  }
                  fn(true);
                  const obj2 = _undefined(4011);
                });
                c2 = 2;
                c3 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = promise;
                return obj2;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (!arg1) {
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
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmActivityAgeGate() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === obj) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = tmp5;
              let nsfwAllowed = tmp2;
              c0 = undefined;
              closure_1 = undefined;
              let id;
              nsfwAllowed = undefined;
              c4 = undefined;
              ({ application: c0, applicationId: closure_1, channel: c2, user: c3, onConfirmActivityLaunchChecksAlertOpen: c4 } = c0);
              obj = undefined;
              obj = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                if (null == nsfwAllowed.nsfwAllowed) {
                  closure_1 = c0;
                  if (c0 == null) {
                    const obj2 = { applicationId: null, channelId: null, guildId: null };
                    obj2[0] = closure_1;
                    id = undefined;
                    if (id != null) {
                      id = id.id;
                    }
                    obj2[1] = id;
                    let obj4 = id;
                    let guildId;
                    if (id != null) {
                      guildId = obj4.getGuildId();
                    }
                    id = guildId;
                    if (guildId == null) {
                      id = undefined;
                    }
                    obj2[2] = id;
                    obj = 2;
                    c6 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = callback(obj2);
                    return obj3;
                  }
                }
                c6 = 3;
                return { value: true, done: true };
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_1 = arg1;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (!arg1) {
              c6 = 3;
              return { value: false, done: true };
            }
            obj = closure_1;
            if (null == obj) {
              c6 = 3;
              return { value: false, done: true };
            } else {
              const embeddedActivityConfig = obj.embeddedActivityConfig;
              let requires_age_gate;
              if (embeddedActivityConfig != null) {
                requires_age_gate = embeddedActivityConfig.requires_age_gate;
              }
              if (requires_age_gate != null) {
                if (requires_age_gate) {
                  const promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    if (c4 != null) {
                      tmp();
                    }
                    _undefined(_undefined2[11]);
                    const obj = { application: c5, channelId: null, onAgree: null, onDisagree: null };
                    let id;
                    if (_undefined2 != null) {
                      id = _undefined2.id;
                    }
                    obj[1] = id;
                    obj[2] = function onAgree() {
                      return callback(true);
                    };
                    obj[3] = function onDisagree() {
                      return callback(false);
                    };
                    const result = obj.confirmActivityAgeGateAlert(obj);
                  });
                  obj = 3;
                  c6 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = promise;
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
function _confirmExternalAppLaunch() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let isVerified = tmp5;
              c3 = tmp2;
              let callback;
              closure_1 = undefined;
              let id;
              c3 = undefined;
              ({ application: c0, applicationId: closure_1, channel: c2, onConfirmActivityLaunchChecksAlertOpen: c3 } = callback);
              isVerified = undefined;
              c5 = 1;
              constants = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                constants = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                closure_1 = callback;
                if (callback == null) {
                  const obj2 = { applicationId: null, channelId: null, guildId: null };
                  obj2[0] = closure_1;
                  id = undefined;
                  if (id != null) {
                    id = id.id;
                  }
                  obj2[1] = id;
                  let obj4 = id;
                  let guildId;
                  if (id != null) {
                    guildId = obj4.getGuildId();
                  }
                  id = guildId;
                  if (guildId == null) {
                    id = undefined;
                  }
                  obj2[2] = id;
                  c5 = 2;
                  constants = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = callback(obj2);
                  return obj3;
                }
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = arg1;
            }
            isVerified = closure_1;
            let tmp10 = null != isVerified;
            if (tmp10) {
              obj1 = callback(id[12]);
              const hasApplicationFlagResult = obj1.hasApplicationFlag(isVerified, constants.EMBEDDED_RELEASED);
              let tmp18 = !hasApplicationFlagResult;
              if (!hasApplicationFlagResult) {
                tmp18 = !isVerified.isVerified;
              }
              let tmp21 = !tmp18;
              if (tmp18) {
                let result = c5.hasActivityEverBeenLaunched(closure_1);
                if (!result) {
                  result = new Promise((arg0) => {
                    closure_0 = arg0;
                    if (c3 != null) {
                      tmp();
                    }
                    _undefined(_undefined2[13]);
                    const obj = {
                      application: closure_4,
                      onConfirm() {
                        return callback(true);
                      },
                      onCancel() {
                        return callback(false);
                      }
                    };
                    const result = obj.confirmExternalAppLaunchAlert(obj);
                  });
                }
                tmp21 = result;
              }
              tmp10 = tmp21;
            }
            constants = 3;
            obj4 = { value: null, done: true };
            obj4[0] = tmp10;
            return obj4;
          }
        } catch (tmp40) {
          constants = tmp;
          throw tmp40;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmActivityLaunchChecks() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      c1 = tmp2;
      ({ currentEmbeddedApplication: obj7[0], shouldClosePopoutOnLeaveCurrentEmbeddedApplication: obj7[1], onConfirmActivityLaunchChecksAlertOpen: obj7[2] } = closure_0);
      closure_1 = yield (function confirmActivityChange(arg0) {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })({ currentEmbeddedApplication: null, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: null, onConfirmActivityLaunchChecksAlertOpen: null });
      if (!closure_1) {
        return false;
      }
      c2 = yield (function confirmActivityAgeGate(closure_0) {
        const self = this;
        const apply = closure_10.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0);
      if (!c2) {
        return false;
      }
      c3 = yield (function confirmExternalAppLaunch(closure_0) {
        const self = this;
        const apply = closure_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0);
      return c3;
    })();
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
let result = require("obj132").fileFinishedImporting("modules/activities/utils/confirmActivityLaunchChecks.tsx");

export const confirmActivityLaunchChecks = function confirmActivityLaunchChecks(arg0) {
  const self = this;
  const apply = _confirmActivityLaunchChecks.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};