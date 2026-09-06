// discord_app/utils/native/PrivateChannelCallUtils.tsx
import util from "../../intl/index.native.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import NavigationRouteUtils from "../../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import AgeGateUtils from "../../modules/age_gate/AgeGateUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils.tsx";
import StageChannelActionCreatorExtras from "../../modules/stage_channels/StageChannelActionCreatorExtras.native.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../modules/action_sheet/native/ActionSheetStore.tsx";
import VoicePanelStore from "../../modules/voice_panel/VoicePanelStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function openChannelCallModal(channel) {
  let obj = AgeGateUtils;
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const result = ChannelRTCActionCreatorsDefault.rebuildRTCActiveChannels();
    const tmp3 = importDefault;
    if (tmpResult.isVoicePanelEnabled(channel)) {
      const state = VoicePanelStore.getState();
      state.openChannel(channel.id);
      const ComponentDispatch = tmp(1109).ComponentDispatch;
      obj = { channelId: channel.id };
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_OPEN, obj);
    } else {
      obj = { channel };
      const _HermesInternal = HermesInternal;
      const tmp3Result = tmp3(4763);
      tmp3Result.pushLazy(tmp(1896)(9466, dependencyMap.paths), obj, "" + c17 + "-" + channel.id);
      const tmp5 = tmp(1896)(9466, dependencyMap.paths);
    }
    tmpResult = tmp(9681);
  }
}
function monkeyPatchCall() {
  return new Promise((arg0) => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      const _HermesInternal = HermesInternal;
      const combined = "" + closure_1_17 + "-" + channel.id;
      ModalActionCreatorsDefault.popWithKey(combined, undefined);
      if (key.getKey() === combined) {
        tmp5(4527).hideActionSheet();
        const tmp5Result = tmp5(4527);
      }
      tmp5 = importDefault;
    }
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
}
function guardPrivateCallForChannel(id, fn) {
  _require = fn;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null != channel) {
    if (channel.type !== constants.GUILD_VOICE) {
      if (null != id) {
        if (id.id !== channel.id) {
          _require = asyncGeneratorStep(async (arg0, value) => {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_0 = tmp4;
                    c1 = 1;
                    c2 = 1;
                    const obj1 = { value: monkeyPatchCall(), done: false };
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value, done: true };
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
          let obj = { title: null, body: null, cancelText: null, onConfirm: null, onCancel: null };
          const intl = require("util").intl;
          obj.title = intl.string(require("util").t["91WuJ9"]);
          const intl2 = require("util").intl;
          obj.body = intl2.string(require("util").t["Rs+Vk1"]);
          const intl3 = require("util").intl;
          obj.cancelText = intl3.string(require("util").t["ETE/oC"]);
          obj.onConfirm = function onConfirm() {
            return closure_0();
          };
          obj.onCancel = onCancel;
          obj.show(obj);
        }
      }
    }
  }
  fn();
}
const Constants = fn(1074);
({ ChannelTypes: closure_11, ComponentActions: closure_12, NOOP: map1 } = Constants);
const AgeGateSource = fn(1098).AgeGateSource;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
const jsx = fn(21).jsx;
let c17 = "voice-channel";
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/PrivateChannelCallUtils.tsx");

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
export const maybeShowAgeGateModal = function maybeShowAgeGateModal(channelId) {
  if (obj.shouldShowAgeGateForChannelId(channelId)) {
    RunAfterInteractionsUtils.runAfterInteractions(() => {
      require("AgeGateModalActionCreators").openAgeGateModal(constants.NSFW_VOICE_CHANNEL);
    }, 150);
    const tmpResult = RunAfterInteractionsUtils;
  }
};
export const openVoiceChannelActionSheet = function openVoiceChannelActionSheet(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(13765, dependencyMap.paths), "" + c17 + "-" + channel.id, obj);
};
export const hideVoiceChannelActionSheet = function hideVoiceChannelActionSheet(id) {
  ActionSheetActionCreatorsDefault.hideActionSheet("" + c17 + "-" + id.id);
};
export const dismissVoiceChannelScreens = function dismissVoiceChannelScreens(channel, onExited) {
  const combined = "" + c17 + "-" + channel.id;
  ModalActionCreatorsDefault.popWithKey(combined, onExited);
  if (ActionSheetStore.getKey() === combined) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const tmp2Result = ActionSheetActionCreatorsDefault;
  }
};
export { monkeyPatchCall };
export const showGuardCallAlert = function showGuardCallAlert(arg0) {
  closure_0 = arg0;
  const obj = { title: null, body: null, cancelText: null, onConfirm: null, onCancel: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["91WuJ9"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["Rs+Vk1"]);
  const intl3 = util.intl;
  obj.cancelText = intl3.string(util.t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    return closure_0();
  };
  obj.onCancel = onCancel;
  obj.show(obj);
};
export { guardPrivateCallForChannel };
export const handleJoinCall = function handleJoinCall(channel, flag) {
  closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  closure_2 = async function _onConfirm(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else if (flag) {
            v1 = 1;
            dependencyMap = 1;
            let obj1 = { value: v1(5139).requestPermission(constants.CAMERA), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        obj1 = tmp4(4425);
        obj1.dismissKeyboard();
        const voiceChannel = v1(5411).selectVoiceChannel(closure_128_0.id, closure_128_1);
        dependencyMap = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
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
};
export const handleStartCall = function handleStartCall(channel, flag) {
  _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = async function _onConfirm2(arg0, value) {
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
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (flag) {
              dependencyMap = 1;
              c3 = 1;
              let obj1 = { value: tmp5(5139).requestPermission(constants2.CAMERA), done: false };
              return obj1;
            }
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
          return { value: "HermesInternal", done: null };
        }
        obj1 = tmp2(4425);
        obj1.dismissKeyboard();
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
        const tmp25 = tmp5(9182);
        const call = tmp25.call;
        const id = closure_129_0.id;
        let tmp28 = closure_128_0;
        if (closure_128_0) {
          tmp28 = !closure_129_0.isManaged();
        }
        let tmp25Result = closure_128_1;
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
      const lazyResult = noop.lazy(() => channel(paths[18])(paths[28], paths.paths));
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
};
export const handleRedesignGroupDMCall = function handleRedesignGroupDMCall(id) {
  closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  closure_2 = async function _onConfirm3(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else if (flag) {
            v1 = 1;
            dependencyMap = 1;
            let obj1 = { value: v1(5139).requestPermission(constants.CAMERA), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        obj1 = tmp4(4425);
        obj1.dismissKeyboard();
        const tmp11 = v1(9182);
        const call = tmp11.call;
        id = closure_128_0.id;
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
};
export const handleRedesignJoinCall = function handleRedesignJoinCall(id) {
  closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  closure_2 = async function _onConfirm4(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else if (flag) {
            v1 = 1;
            dependencyMap = 1;
            let obj1 = { value: v1(5139).requestPermission(constants.CAMERA), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        obj1 = tmp4(4425);
        obj1.dismissKeyboard();
        const voiceChannel = v1(5411).selectVoiceChannel(closure_128_0.id, closure_128_1);
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
    StageChannelActionCreatorExtras.openStageChannel(channel);
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + c17 + "-" + channel.id;
    if (!obj.isModalOpen(combined)) {
      openChannelCallModal(channel);
    }
    obj = NavigationRouteUtils;
  }
};
