// === Module 4679: openChannelCallModal ===

// Module 4679 (openChannelCallModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import coerceMainRoute from "coerceMainRoute" /* 4298 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;
import _modDef4673 from "module_4673" /* 4673 */;
import _modDef4675 from "module_4675" /* 4675 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 4683 */;
import _modDef4809 from "module_4809" /* 4809 */;
import runAfterInteractions from "runAfterInteractions" /* 5993 */;
import openStageChannelSettings from "openStageChannelSettings" /* 7986 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "setContent" /* 4154 */;
import closure_6 from "withEqualityFn" /* 4680 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "markAllUserIdListsStale" /* 4098 */;
import closure_9 from "handleConnectionOpen" /* 1981 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { AgeGateSource } from "result" /* 1221 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4682 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function openChannelCallModal(channel) {
  let obj = shouldShowAgeGateForVoiceChannel;
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const result = _modDef4673.rebuildRTCActiveChannels();
    const obj2 = _modDef4673;
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
      const tmp3Result = tmp3(4675);
      tmp3Result.pushLazy(tmp(2009)(10809, dependencyMap.paths), obj, "" + c17 + "-" + channel.id);
      const tmp5 = tmp(2009)(10809, dependencyMap.paths);
    }
    tmpResult = tmp(10928);
  }
}
function monkeyPatchCall() {
  return new Promise((arg0) => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      const _HermesInternal = HermesInternal;
      const combined = "" + closure_17 + "-" + channel.id;
      callback(4675).popWithKey(combined, undefined);
      if (key.getKey() === combined) {
        tmp5(4411).hideActionSheet();
        const tmp5Result = tmp5(4411);
      }
      const obj = callback(4675);
      tmp5 = callback;
    }
    const voiceChannel = callback(5302).selectVoiceChannel(null);
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
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_19();
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
          let obj = _modDef4809;
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
let result = require("set").fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

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
    runAfterInteractions.runAfterInteractions(() => {
      callback(table[20]).openAgeGateModal(constants.NSFW_VOICE_CHANNEL);
    }, 150);
    const tmpResult = runAfterInteractions;
  }
};
export const openVoiceChannelActionSheet = function openVoiceChannelActionSheet(closure_0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel: closure_0 };
  obj.openLazy(asyncRequireImpl(13306, dependencyMap.paths), "" + c17 + "-" + closure_0.id, obj);
};
export const hideVoiceChannelActionSheet = function hideVoiceChannelActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet("" + c17 + "-" + closure_0.id);
};
export const dismissVoiceChannelScreens = function dismissVoiceChannelScreens(channel, onExited) {
  const combined = "" + c17 + "-" + channel.id;
  _modDef4675.popWithKey(combined, onExited);
  if (key.getKey() === combined) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const tmp2Result = ACTION_SHEET_HEIGHT_HALFDefault;
  }
};
export { monkeyPatchCall };
export const showGuardCallAlert = function showGuardCallAlert(arg0) {
  const _require = arg0;
  let obj = _modDef4809;
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
  closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  function _onConfirm() {
    const self = this;
    const tmp = closure_1_3(function*() {
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
                obj1 = { value: null, done: false };
                obj1[0] = v0(5030).requestPermission(closure_1_15.CAMERA);
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
          obj1 = closure_1_0(4306);
          obj1.dismissKeyboard();
          const voiceChannel = v0(5302).selectVoiceChannel(id.id, v0);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          dependencyMap = tmp;
          throw tmp17;
        }
      }
    });
    closure_2 = tmp;
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
    const tmp = closure_1_3(function*() {
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
              c1 = tmp5;
              let isFriendResult = tmp2;
              isFriendResult = undefined;
              c1 = undefined;
              if (recipientId) {
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = recipientId(5030).requestPermission(closure_1_15.CAMERA);
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
          obj1 = isFriendResult(4306);
          obj1.dismissKeyboard();
          isFriendResult = isFriendResult.type !== closure_1_11.DM;
          if (!isFriendResult) {
            isFriendResult = closure_1_8.isFriend(isFriendResult.getRecipientId());
          }
          recipientId = null;
          if (!isFriendResult) {
            recipientId = isFriendResult.getRecipientId();
          }
          const tmp25 = recipientId(9458);
          const call = tmp25.call;
          const id = isFriendResult.id;
          let tmp28 = isFriendResult;
          if (isFriendResult) {
            tmp28 = !isFriendResult.isManaged();
          }
          let tmp25Result = recipientId;
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
    closure_2 = tmp;
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
  closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  function _onConfirm3() {
    const self = this;
    const tmp = closure_1_3(function*() {
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
              id = tmp4;
              if (v0) {
                v0 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(5030).requestPermission(closure_1_15.CAMERA);
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
          obj1 = closure_1_0(4306);
          obj1.dismissKeyboard();
          const tmp11 = v0(9458);
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
    closure_2 = tmp;
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
  closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  function _onConfirm4() {
    const self = this;
    const tmp = closure_1_3(function*() {
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
              id = tmp4;
              if (v0) {
                v0 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(5030).requestPermission(closure_1_15.CAMERA);
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
          obj1 = closure_1_0(4306);
          obj1.dismissKeyboard();
          const voiceChannel = v0(5302).selectVoiceChannel(id.id, v0);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          dependencyMap = tmp;
          throw tmp17;
        }
      }
    });
    closure_2 = tmp;
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
    openStageChannelSettings.openStageChannel(channel);
    const obj2 = openStageChannelSettings;
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + c17 + "-" + channel.id;
    if (!obj.isModalOpen(combined)) {
      openChannelCallModal(channel);
    }
    obj = coerceMainRoute;
  }
};