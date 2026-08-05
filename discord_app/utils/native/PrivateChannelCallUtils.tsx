// discord_app/utils/native/PrivateChannelCallUtils.tsx
import upsertRelationship from "upsertRelationship";
import runAfterInteractions from "runAfterInteractions";
import setContent from "setContent";
import withEqualityFn from "withEqualityFn";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { AgeGateSource } from "result";
import { NativePermissionTypes } from "NativePermissionStatus";
import { jsx } from "ACTION_SHEET_HEIGHT_HALF";

let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
function openChannelCallModal(channel) {
  let obj = require(4498) /* shouldShowAgeGateForVoiceChannel */;
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const result = importDefault(4478).rebuildRTCActiveChannels();
    const obj2 = importDefault(4478);
    const tmp3 = importDefault;
    if (tmpResult.isVoicePanelEnabled(channel)) {
      state = state.getState();
      state.openChannel(channel.id);
      const ComponentDispatch = tmp(1231).ComponentDispatch;
      obj = { channelId: null };
      obj[0] = channel.id;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_OPEN, obj);
    } else {
      obj = { channel: null };
      obj[0] = channel;
      const _HermesInternal = HermesInternal;
      const tmp3Result = tmp3(4490);
      tmp3Result.pushLazy(tmp(1959)(10556, dependencyMap.paths), obj, "" + c17 + "-" + channel.id);
      const tmp5 = tmp(1959)(10556, dependencyMap.paths);
    }
    tmpResult = tmp(10663);
  }
}
function monkeyPatchCall() {
  return new Promise((arg0) => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      const _HermesInternal = HermesInternal;
      const combined = "" + closure_17 + "-" + channel.id;
      callback(4490).popWithKey(combined, undefined);
      if (key.getKey() === combined) {
        tmp5(4253).hideActionSheet();
        const tmp5Result = tmp5(4253);
      }
      const obj = callback(4490);
      tmp5 = callback;
    }
    const voiceChannel = callback(5096).selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
}
function guardPrivateCallForChannel(id, arg1) {
  let _require = arg1;
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null != channel) {
    if (channel.type !== constants.GUILD_VOICE) {
      if (null != id) {
        if (id.id !== channel.id) {
          _require = callback(function*() {
            if (c2 === 2) {
              c2 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp3 === 3) {
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
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    const callback = tmp4;
                    c1 = 1;
                    c2 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_19();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  callback();
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp9) {
                c2 = tmp;
                throw tmp9;
              }
            }
          });
          let obj = importDefault(4624);
          obj = { title: null, body: null, cancelText: null, onConfirm: null, onCancel: null };
          const intl = _require(1236).intl;
          obj[0] = intl.string(_require(1236).t["91WuJ9"]);
          const intl2 = _require(1236).intl;
          obj[1] = intl2.string(_require(1236).t["Rs+Vk1"]);
          const intl3 = _require(1236).intl;
          obj[2] = intl3.string(_require(1236).t["ETE/oC"]);
          obj[3] = function onConfirm() {
            return callback();
          };
          obj[4] = closure_13;
          obj.show(obj);
        }
      }
    }
  }
  arg1();
}
({ ChannelTypes: unpackModuleId, ComponentActions: closure_12, NOOP: map1 } = ME);
let c17 = "voice-channel";
let result = require("setContent").fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

export const getVoiceChannelKeyByChannelId = function getVoiceChannelKeyByChannelId(arg0) {
  return "" + c17 + "-" + arg0;
};
export const getVoiceChannelKey = function getVoiceChannelKey(id) {
  return "" + c17 + "-" + id;
};
export const isVoiceChannelModalKey = function isVoiceChannelModalKey(openModalKey) {
  return openModalKey.startsWith(c17);
};
export { openChannelCallModal };
export const maybeShowAgeGateModal = function maybeShowAgeGateModal(width) {
  if (obj.shouldShowAgeGateForChannelId(width)) {
    require(5730) /* runAfterInteractions */.runAfterInteractions(() => {
      callback(table[20]).openAgeGateModal(constants.NSFW_VOICE_CHANNEL);
    }, 150);
    const tmpResult = require(5730) /* runAfterInteractions */;
  }
};
export const openVoiceChannelActionSheet = function openVoiceChannelActionSheet(closure_0) {
  let obj = importDefault(4253);
  obj = { channel: closure_0 };
  obj.openLazy(require(1959) /* asyncRequireImpl */(12937, dependencyMap.paths), "" + c17 + "-" + closure_0.id, obj);
};
export const hideVoiceChannelActionSheet = function hideVoiceChannelActionSheet(closure_0) {
  importDefault(4253).hideActionSheet("" + c17 + "-" + closure_0.id);
};
export const dismissVoiceChannelScreens = function dismissVoiceChannelScreens(channel, onExited) {
  const combined = "" + c17 + "-" + channel.id;
  importDefault(4490).popWithKey(combined, onExited);
  if (key.getKey() === combined) {
    importDefault(4253).hideActionSheet();
    const tmp2Result = importDefault(4253);
  }
};
export { monkeyPatchCall };
export const showGuardCallAlert = function showGuardCallAlert(arg0) {
  const _require = arg0;
  let obj = importDefault(4624);
  obj = { title: null, body: null, cancelText: null, onConfirm: null, onCancel: null };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t["91WuJ9"]);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_require(1236).t["Rs+Vk1"]);
  const intl3 = _require(1236).intl;
  obj[2] = intl3.string(_require(1236).t["ETE/oC"]);
  obj[3] = function onConfirm() {
    return callback();
  };
  obj[4] = closure_13;
  obj.show(obj);
};
export { guardPrivateCallForChannel };
export const handleJoinCall = function handleJoinCall(channel, flag) {
  let closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  function _onConfirm() {
    const self = this;
    const tmp = outer1_3(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const id = tmp4;
              if (v0) {
                v0 = 1;
                dependencyMap = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = v0(4827).requestPermission(outer1_15.CAMERA);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!arg1) {
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
          obj1 = outer1_0(4144);
          obj1.dismissKeyboard();
          const voiceChannel = v0(5096).selectVoiceChannel(id.id, v0);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          dependencyMap = tmp;
          throw tmp17;
        }
      }
    });
    const _onConfirm = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  guardPrivateCallForChannel(channel, function onConfirm() {
    const self = this;
    const apply = _onConfirm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
};
export const handleStartCall = function handleStartCall(channel, flag) {
  const _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  function _onConfirm2() {
    const self = this;
    const tmp = outer1_3(function*() {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c1 = tmp5;
              let c0 = tmp2;
              c0 = undefined;
              c1 = undefined;
              if (outer1_1) {
                dependencyMap = 1;
                c3 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = outer1_1(4827).requestPermission(outer1_15.CAMERA);
                return obj1;
              }
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
            return { value: "HermesInternal", done: null };
          }
          obj1 = outer1_0(4144);
          obj1.dismissKeyboard();
          let isFriendResult = c0.type !== outer1_11.DM;
          if (!isFriendResult) {
            isFriendResult = outer1_8.isFriend(outer1_0.getRecipientId());
          }
          outer1_0 = isFriendResult;
          let recipientId = null;
          if (!outer1_0) {
            recipientId = outer1_0.getRecipientId();
          }
          outer1_1 = recipientId;
          const tmp25 = outer1_1(9160);
          const call = tmp25.call;
          const id = c0.id;
          let tmp28 = outer1_0;
          if (outer1_0) {
            tmp28 = !outer1_0.isManaged();
          }
          let tmp25Result = outer1_1;
          if (typeof call === "unknown") {
            tmp25Result = tmp25(tmp27, tmp28, tmp25Result);
          } else {
            call(id, tmp27, tmp28, tmp25Result);
          }
          c3 = 3;
        } catch (tmp36) {
          c3 = tmp;
          throw tmp36;
        }
      }
    });
    const _onConfirm2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let flag2 = false;
  if (channel.isDM()) {
    user = user.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    flag2 = false;
    if (isProvisional) {
      const lazyResult = React.lazy(() => channel(_onConfirm2[18])(_onConfirm2[28], _onConfirm2.paths));
      _require(_onConfirm2[29]).openAlert("ProvisionalAccountNocallAllowed", <lazyResult />);
      flag2 = true;
      let obj = _require(_onConfirm2[29]);
    }
  }
  if (!flag2) {
    guardPrivateCallForChannel(channel, function onConfirm() {
      const self = this;
      const apply = _onConfirm2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }
};
export const handleRedesignGroupDMCall = function handleRedesignGroupDMCall(id) {
  let closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  function _onConfirm3() {
    const self = this;
    const tmp = outer1_3(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp4;
              if (v0) {
                v0 = 1;
                dependencyMap = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = v0(4827).requestPermission(outer1_15.CAMERA);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!arg1) {
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
          obj1 = outer1_0(4144);
          obj1.dismissKeyboard();
          const tmp11 = v0(9160);
          const call = tmp11.call;
          id = id.id;
          if (typeof call === "unknown") {
            tmp11(tmp13, true);
          } else {
            call(id, tmp13, true);
          }
          dependencyMap = 3;
        } catch (tmp18) {
          dependencyMap = tmp;
          throw tmp18;
        }
      }
    });
    const _onConfirm3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  guardPrivateCallForChannel(id, function onConfirm() {
    const self = this;
    const apply = _onConfirm3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
};
export const handleRedesignJoinCall = function handleRedesignJoinCall(id) {
  let closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  function _onConfirm4() {
    const self = this;
    const tmp = outer1_3(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const id = tmp4;
              if (v0) {
                v0 = 1;
                dependencyMap = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = v0(4827).requestPermission(outer1_15.CAMERA);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!arg1) {
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
          obj1 = outer1_0(4144);
          obj1.dismissKeyboard();
          const voiceChannel = v0(5096).selectVoiceChannel(id.id, v0);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          dependencyMap = tmp;
          throw tmp17;
        }
      }
    });
    const _onConfirm4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  guardPrivateCallForChannel(id, function onConfirm() {
    const self = this;
    const apply = _onConfirm4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
};
export const openGuildVoiceModal = function openGuildVoiceModal(channel, newestAnalyticsLocation) {
  const combined = "" + c17 + "-" + channel.id;
  if (!obj.isModalOpen(combined)) {
    openChannelCallModal(channel);
  }
};
export const navigateToVoiceChannel = function navigateToVoiceChannel(channel, LiveActivity) {
  if (channel.isPrivate()) {
    openChannelCallModal(channel);
  } else if (channel.isGuildStageVoice()) {
    require(7697) /* openStageChannelSettings */.openStageChannel(channel);
    const obj2 = require(7697) /* openStageChannelSettings */;
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + c17 + "-" + channel.id;
    if (!obj.isModalOpen(combined)) {
      openChannelCallModal(channel);
    }
    obj = require(4136) /* navigationToRootTabHelper */;
  }
};