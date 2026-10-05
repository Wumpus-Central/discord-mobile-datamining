// === Module 9003: confirmActivityLaunchChecks ===

// Module 9003 (confirmActivityLaunchChecks)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import size from "module_2" /* 2 */;

let c5, c7, c8, closure_5, selfEmbeddedActivities;

function getOrFetchApplicationForLaunch() {
  return obj(...arguments);
}
let obj = function _getOrFetchApplicationForLaunch() {
  obj = _asyncToGenerator(async function(applicationId) {
    let aPIError;
    let c0;
    let c1;
    let c2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let closure_4;
        let channelId;
        let guildId;
        let PRIVATE_CHANNEL;
        c8 = 2;
        if (0 === c7) {
          if (applicationId === 1) {
            c8 = 3;
            throw value;
          } else if (applicationId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            let closure_3 = tmp4;
            applicationId = undefined;
            channelId = undefined;
            guildId = undefined;
            ({ applicationId: c0, channelId: c1, guildId: c2 } = closure_0);
            PRIVATE_CHANNEL = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (applicationId === 1) {
            c8 = 3;
            throw value;
          } else if (applicationId === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c6 = 1;
            c7 = 3;
            c8 = 1;
            const obj5 = { value: closure_132_1(closure_132_2[4])(applicationId, channelId), done: false };
            return obj5;
          }
        } else if (2 === c7) {
          c6 = 0;
          closure_4 = closure_5;
          if (null != guildId) {
            PRIVATE_CHANNEL = closure_132_0(closure_132_2[5]).EmbeddedActivityLocationKind.GUILD_CHANNEL;
          } else {
            PRIVATE_CHANNEL = closure_132_0(closure_132_2[5]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL;
          }
          const obj6 = { type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL", nonce: "", applicationId, channelId, guildId, error: aPIError, locationKind: PRIVATE_CHANNEL };
          const dispatch = closure_132_1(closure_132_2[6]).dispatch;
          const tmp19 = closure_132_1(closure_132_2[6]);
          if (channelId == null) {
            channelId = null;
          }
          if (guildId == null) {
            guildId = null;
          }
          const self = this;
          const self2 = this;
          aPIError = new closure_132_0(closure_132_2[7]).APIError(closure_4);
          dispatch(obj6);
          c8 = 3;
          return { value: "IconComponent", done: null };
        } else if (applicationId === 1) {
          c8 = 3;
          throw value;
        } else if (applicationId === 2) {
          c6 = 0;
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp42) {
        closure_5 = tmp42;
        if (0 === c6) {
          c8 = 3;
          throw tmp42;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _confirmActivityChange() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let closure_1;
    let value;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const shouldClosePopout = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ currentEmbeddedApplication: c0, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: c1, onConfirmActivityLaunchChecksAlertOpen: c2 } = closure_0);
            c2 = 1;
            c3 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != c0) {
              const self = this;
              const self2 = this;
              const promise = new Promise((fn) => {
                closure_0 = fn;
                selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
                const value = selfEmbeddedActivities.get(closure_0.id);
                let _location;
                const getEmbeddedActivityLocationChannelId = closure_1_0(closure_1_2[8]).getEmbeddedActivityLocationChannelId;
                closure_1_0(closure_1_2[8]);
                if (value != null) {
                  _location = value.location;
                }
                channel = channel.getChannel(getEmbeddedActivityLocationChannelId(_location));
                if (null != value) {
                  if (null != channel) {
                    if (closure_2 != null) {
                      closure_2();
                    }
                    shouldClosePopout(closure_1_2[9])(closure_0, channel, () => {
                      obj = value(c2[10])();
                      const obj2 = { location: value.location, applicationId: closure_2_0.id, shouldClosePopout };
                      obj.leaveActivity(obj2);
                      fn(true);
                    }, () => fn(false));
                  }
                }
                fn(true);
              });
              c2 = 2;
              c3 = 1;
              const obj5 = { value: promise, done: false };
              return obj5;
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
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _confirmActivityAgeGate() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let id;
    let tmp3;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let applicationId;
        let guildId;
        let nsfwAllowed;
        let application;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            let closure_3 = tmp;
            c0 = undefined;
            applicationId = undefined;
            guildId = undefined;
            nsfwAllowed = undefined;
            c4 = undefined;
            ({ application: c0, applicationId: c1, channel: c2, user: c3, onConfirmActivityLaunchChecksAlertOpen: c4 } = closure_0);
            application = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else {
          let closure_1;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (null == nsfwAllowed.nsfwAllowed) {
                closure_1 = c0;
                if (c0 == null) {
                  const obj6 = { applicationId, channelId: id, guildId };
                  id = undefined;
                  if (guildId != null) {
                    id = guildId.id;
                  }
                  const obj5 = guildId;
                  guildId = undefined;
                  if (guildId != null) {
                    guildId = obj5.getGuildId();
                  }
                  if (guildId == null) {
                    guildId = undefined;
                  }
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: closure_132_7(obj6), done: false };
                  return obj7;
                }
              }
              c6 = 3;
              return { value: true, done: true };
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
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
          application = closure_1;
          if (null == application) {
            c6 = 3;
            return { value: false, done: true };
          } else {
            const embeddedActivityConfig = application.embeddedActivityConfig;
            let requires_age_gate;
            if (embeddedActivityConfig != null) {
              requires_age_gate = embeddedActivityConfig.requires_age_gate;
            }
            if (requires_age_gate != null) {
              if (requires_age_gate) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => {
                  closure_0 = arg0;
                  if (closure_1_4 != null) {
                    tmp();
                  }
                  obj = {
                    application,
                    channelId: id,
                    onAgree() {
                      return closure_0(true);
                    },
                    onDisagree() {
                      return closure_0(false);
                    }
                  };
                  const tmp3 = closure_0(id[11]);
                  id = undefined;
                  const confirmActivityAgeGateAlert = tmp3.confirmActivityAgeGateAlert;
                  if (id != null) {
                    id = id.id;
                  }
                  const result = confirmActivityAgeGateAlert(obj);
                });
                c5 = 3;
                c6 = 1;
                const obj9 = { value: promise, done: false };
                return obj9;
              }
            }
          }
        }
      } catch (tmp25) {
        c6 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
obj = function _confirmExternalAppLaunch() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let id;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let applicationId;
        let guildId;
        let isVerified;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            c0 = undefined;
            applicationId = undefined;
            guildId = undefined;
            c3 = undefined;
            ({ application: c0, applicationId: c1, channel: c2, onConfirmActivityLaunchChecksAlertOpen: c3 } = closure_0);
            isVerified = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else {
          let closure_1;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_1 = c0;
              if (c0 == null) {
                const obj7 = { applicationId, channelId: id, guildId };
                id = undefined;
                if (guildId != null) {
                  id = guildId.id;
                }
                const obj5 = guildId;
                guildId = undefined;
                if (guildId != null) {
                  guildId = obj5.getGuildId();
                }
                if (guildId == null) {
                  guildId = undefined;
                }
                c5 = 2;
                c6 = 1;
                const obj8 = { value: closure_132_7(obj7), done: false };
                return obj8;
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
          isVerified = closure_1;
          let tmp9 = null != isVerified;
          if (tmp9) {
            let obj2 = closure_132_0(closure_132_2[12]);
            const hasApplicationFlagResult = obj2.hasApplicationFlag(isVerified, closure_132_6.EMBEDDED_RELEASED);
            const tmp17 = !hasApplicationFlagResult && !isVerified.isVerified;
            let tmp20 = !tmp17;
            if (!tmp20) {
              let result = closure_132_5.hasActivityEverBeenLaunched(applicationId);
              if (!result) {
                const self = this;
                const self2 = this;
                result = new Promise((arg0) => {
                  closure_0 = arg0;
                  if (closure_1_3 != null) {
                    tmp();
                  }
                  obj = closure_0(c2[13]);
                  const obj2 = {
                    application,
                    onConfirm() {
                      return closure_0(true);
                    },
                    onCancel() {
                      return closure_0(false);
                    }
                  };
                  const result = obj.confirmExternalAppLaunchAlert(obj2);
                });
              }
              tmp20 = result;
            }
            tmp9 = tmp20;
          }
          c6 = 3;
          const obj9 = { value: tmp9, done: true };
          return obj9;
        }
      } catch (tmp37) {
        c6 = 3;
        throw tmp37;
      }
    }
  });
  return obj(...arguments);
};
obj = function _confirmActivityLaunchChecks() {
  obj = _asyncToGenerator(async (arg0) => {
    let c2;
    function confirmActivityChange() {
      return closure_1_9(...arguments);
    }
    function confirmActivityAgeGate() {
      return closure_1_10(...arguments);
    }
    function confirmExternalAppLaunch() {
      return closure_1_11(...arguments);
    }
    let closure_0 = arg0;
    const obj4 = { currentEmbeddedApplication: null, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: null, onConfirmActivityLaunchChecksAlertOpen: null };
    ({ currentEmbeddedApplication: obj7.currentEmbeddedApplication, shouldClosePopoutOnLeaveCurrentEmbeddedApplication: obj7.shouldClosePopoutOnLeaveCurrentEmbeddedApplication, onConfirmActivityLaunchChecksAlertOpen: obj7.onConfirmActivityLaunchChecksAlertOpen } = closure_0);
    await confirmActivityChange(obj4);
    let closure_1 = value;
    const tmp11 = closure_1;
    if (!tmp11) {
      return false;
    }
    await confirmActivityAgeGate(closure_0);
    let closure_2 = value;
    const tmp8 = closure_2;
    if (!tmp8) {
      return false;
    }
    await confirmExternalAppLaunch(closure_0);
    return value;
  });
  return obj(...arguments);
};
const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/activities/utils/confirmActivityLaunchChecks.tsx");

export const confirmActivityLaunchChecks = function confirmActivityLaunchChecks() {
  return obj(...arguments);
};