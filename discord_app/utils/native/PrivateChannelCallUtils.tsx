// === Module 8079: PrivateChannelCallUtils ===

// Module 8079 (PrivateChannelCallUtils)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5893 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6094 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6841 */;
import AgeGateUtils from "AgeGateUtils" /* 6869 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6874 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8081 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5383 */;
import VoicePanelStore from "VoicePanelStore" /* 7010 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
function openChannelCallModal(channel) {
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const result = ChannelRTCActionCreatorsDefault.rebuildRTCActiveChannels();
    if (channel.isGuildStageVoice()) {
      if (SelectedChannelStore.getVoiceChannelId() === channel.id) {
        StageChannelActionCreatorExtras.openStageChannel(channel);
        const tmpResult = StageChannelActionCreatorExtras;
      }
    }
    state = VoicePanelStore.getState();
    state.openChannel(channel.id);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj3 = { channelId: channel.id };
    ComponentDispatch.dispatch(constants3.VOICE_PANEL_OPEN, obj3);
  }
  obj = AgeGateUtils;
}
function monkeyPatchCall() {
  return new Promise((arg0) => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      const _HermesInternal = HermesInternal;
      const combined = "" + closure_1_18 + "-" + channel.id;
      ModalActionCreatorsDefault.popWithKey(combined, undefined);
      if (key.getKey() === combined) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const tmp5Result = ActionSheetActionCreatorsDefault;
      }
    }
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
}
function guardPrivateCallForChannel(id, fn) {
  _require = fn;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null != channel) {
    if (channel.type !== constants2.GUILD_VOICE) {
      if (null != id) {
        if (id.id !== channel.id) {
          _require = asyncGeneratorStep(async () => {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_0 = tmp4;
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: monkeyPatchCall(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0();
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp9) {
                c2 = tmp;
                throw tmp9;
              }
            }
          });
          let obj2 = { title: null, body: null, cancelText: null, onConfirm: null, onCancel: null, isDismissable: false };
          const intl = require("util").intl;
          obj2.title = intl.string(require("util").t["91WuJ9"]);
          const intl2 = require("util").intl;
          obj2.body = intl2.string(require("util").t["Rs+Vk1"]);
          const intl3 = require("util").intl;
          obj2.cancelText = intl3.string(require("util").t["ETE/oC"]);
          obj2.onConfirm = function onConfirm() {
            return closure_0();
          };
          obj2.onCancel = onCancel;
          actions_AlertActionCreatorsDefault.show(obj2);
        }
      }
    }
  }
  fn();
}
function trackPrivateCallButtonClicked(button_name, channel_id) {
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.CALL_BUTTON_CLICKED, { location: AnalyticsLocationDefault.PRIVATE_CHANNEL_CALL, button_name, guild_id: null, channel_id: channel_id.id, channel_type: channel_id.type });
}
const Constants = fn(1072);
({ AnalyticEvents: closure_11, ChannelTypes: closure_12, ComponentActions: map1, NOOP: closure_14 } = Constants);
const AgeGateSource = fn(1097).AgeGateSource;
const NativePermissionTypes = fn(8080).NativePermissionTypes;
const jsx = fn(21).jsx;
let c18 = "voice-channel";
let closure_21 = { JOIN_CALL: "Join Call", JOIN_VIDEO_CALL: "Join Video Call", START_CALL: "Start Call", START_VIDEO_CALL: "Start Video Call" };
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

export function getVoiceChannelKeyByChannelId(arg0) {
  return "" + c18 + "-" + arg0;
}
export function getVoiceChannelKey(id) {
  return "" + c18 + "-" + id;
}
export function isVoiceChannelModalKey(openModalKey) {
  return openModalKey.startsWith(c18);
}
export { openChannelCallModal };
export function maybeShowAgeGateModal(c0) {
  _require = c0;
  if (obj.shouldShowAgeGateForChannelId(c0)) {
    tmp(7344).runAfterInteractions(() => {
      AgeGateModalActionCreators.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL, closure_0);
    }, 150);
    const tmpResult = tmp(7344);
  }
  obj = require("AgeGateUtils");
  tmp = _require;
}
export function openVoiceChannelActionSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(15408, dependencyMap.paths), "" + c18 + "-" + channel.id, { channel });
}
export function hideVoiceChannelActionSheet(id) {
  ActionSheetActionCreatorsDefault.hideActionSheet("" + c18 + "-" + id.id);
}
export function dismissVoiceChannelScreens(channel, onExited) {
  const combined = "" + c18 + "-" + channel.id;
  ModalActionCreatorsDefault.popWithKey(combined, onExited);
  if (ActionSheetStore.getKey() === combined) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const tmp2Result = ActionSheetActionCreatorsDefault;
  }
}
export { monkeyPatchCall };
export function showGuardCallAlert(arg0) {
  closure_0 = arg0;
  const obj2 = { title: null, body: null, cancelText: null, onConfirm: null, onCancel: null, isDismissable: false };
  const intl = util.intl;
  obj2.title = intl.string(util.t["91WuJ9"]);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["Rs+Vk1"]);
  const intl3 = util.intl;
  obj2.cancelText = intl3.string(util.t["ETE/oC"]);
  obj2.onConfirm = function onConfirm() {
    return closure_0();
  };
  obj2.onCancel = onCancel;
  actions_AlertActionCreatorsDefault.show(obj2);
}
export { guardPrivateCallForChannel };
export function handleJoinCall(channel) {
  closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  closure_2 = async function _onConfirm() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (flag) {
            v1 = 1;
            dependencyMap = 1;
            const obj7 = { value: v1(8097).requestPermission(constants.CAMERA), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        let obj2 = trackPrivateCallButtonClicked;
        let voiceChannel = closure_1_21;
        if (closure_128_1) {
          let JOIN_CALL = voiceChannel.JOIN_VIDEO_CALL;
        } else {
          JOIN_CALL = voiceChannel.JOIN_CALL;
        }
        obj2(JOIN_CALL, closure_128_0);
        tmp2(5331).dismissKeyboard();
        obj2 = v1(6841);
        voiceChannel = obj2.selectVoiceChannel(closure_128_0.id, closure_128_1);
        dependencyMap = 3;
        const obj3 = tmp2(5331);
      } catch (tmp21) {
        dependencyMap = tmp;
        throw tmp21;
      }
    }
  };
  guardPrivateCallForChannel(channel, function onConfirm() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
}
export function handleStartCall(channel) {
  _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = async function _onConfirm2() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (flag) {
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: tmp2(8097).requestPermission(constants2.CAMERA), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value) {
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
        if (closure_129_1) {
          let START_CALL = constants.START_VIDEO_CALL;
        } else {
          START_CALL = constants.START_CALL;
        }
        trackPrivateCallButtonClicked(START_CALL, closure_129_0);
        tmp3(5331).dismissKeyboard();
        let isFriendResult = closure_129_0.type !== constants.DM;
        if (!isFriendResult) {
          isFriendResult = friend.isFriend(closure_129_0.getRecipientId());
        }
        closure_128_0 = isFriendResult;
        let recipientId = null;
        if (!closure_128_0) {
          recipientId = closure_129_0.getRecipientId();
        }
        closure_128_1 = recipientId;
        const tmp32 = tmp2(7627);
        const call = tmp32.call;
        const id = closure_129_0.id;
        let tmp35 = closure_128_0;
        if (closure_128_0) {
          tmp35 = !closure_129_0.isManaged();
        }
        let tmp32Result = closure_128_1;
        if (typeof call === "unknown") {
          tmp32Result = tmp32(closure_129_1, tmp35, tmp32Result);
        } else {
          call(id, closure_129_1, tmp35, tmp32Result);
        }
        c3 = 3;
        const obj2 = tmp3(5331);
      } catch (tmp43) {
        c3 = tmp;
        throw tmp43;
      }
    }
  };
  let flag2 = false;
  if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    flag2 = false;
    if (isProvisional) {
      const lazyResult = noop.lazy(() => channel(paths[20])(paths[29], paths.paths));
      require("useAlertStore").openAlert("ProvisionalAccountNocallAllowed", <lazyResult />);
      flag2 = true;
      let obj = require("useAlertStore");
    }
  }
  if (!flag2) {
    guardPrivateCallForChannel(channel, function onConfirm() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }
}
export function handleRedesignGroupDMCall(id) {
  closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  closure_2 = async function _onConfirm3() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (flag) {
            v1 = 1;
            dependencyMap = 1;
            const obj6 = { value: v1(8097).requestPermission(constants.CAMERA), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        tmp4(5331).dismissKeyboard();
        const tmp11 = v1(7627);
        const call = tmp11.call;
        id = closure_128_0.id;
        if (typeof call === "unknown") {
          tmp11(closure_128_1, true);
        } else {
          call(id, closure_128_1, true);
        }
        dependencyMap = 3;
        const obj2 = tmp4(5331);
      } catch (tmp18) {
        dependencyMap = tmp;
        throw tmp18;
      }
    }
  };
  guardPrivateCallForChannel(id, function onConfirm() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
}
export function handleRedesignJoinCall(id) {
  closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  closure_2 = async function _onConfirm4() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (flag) {
            v1 = 1;
            dependencyMap = 1;
            const obj7 = { value: v1(8097).requestPermission(constants.CAMERA), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        tmp4(5331).dismissKeyboard();
        const obj2 = tmp4(5331);
        const voiceChannel = v1(6841).selectVoiceChannel(closure_128_0.id, closure_128_1);
        dependencyMap = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
      }
    }
  };
  guardPrivateCallForChannel(id, function onConfirm() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
}
export const openGuildVoiceModal = openChannelCallModal;
export const navigateToVoiceChannel = openChannelCallModal;