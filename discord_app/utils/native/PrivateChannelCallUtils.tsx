// === Module 5097: PrivateChannelCallUtils ===

// Module 5097 (PrivateChannelCallUtils)
import Fragment from "Fragment" /* 21 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import AgeGateUtils from "AgeGateUtils" /* 5100 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6534 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8070 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, c3;

let closure_12;
let map1;
let unpackModuleId;
function openChannelCallModal(channel) {
  const obj = AgeGateUtils;
  if (!obj.maybeOpenAgeGateForVoiceChannel(channel.id)) {
    const obj2 = ChannelRTCActionCreatorsDefault;
    const result = obj2.rebuildRTCActiveChannels();
    if (channel.isGuildStageVoice()) {
      if (SelectedChannelStore.getVoiceChannelId() === channel.id) {
        const tmpResult = StageChannelActionCreatorExtras;
        tmpResult.openStageChannel(channel);
      }
    }
    const state = VoicePanelStore.getState();
    state.openChannel(channel.id);
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj3 = { channelId: channel.id };
    ComponentDispatch.dispatch(constants2.VOICE_PANEL_OPEN, obj3);
  }
}
function monkeyPatchCall() {
  let key;
  let voiceChannelId;
  const promise = new Promise((arg0) => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    if (null != channel) {
      const _HermesInternal = HermesInternal;
      const combined = "" + closure_1_17 + "-" + channel.id;
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(combined, undefined);
      if (key.getKey() === combined) {
        const tmp5Result = ActionSheetActionCreatorsDefault;
        tmp5Result.hideActionSheet();
      }
    }
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(null);
    const timerId = setTimeout(arg0, 500);
  });
  return promise;
}
function guardPrivateCallForChannel(id, fn) {
  let intl;
  let intl2;
  let intl3;
  _require = fn;
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null != channel) {
    if (channel.type !== constants.GUILD_VOICE) {
      const tmp3 = id;
      if (null != id) {
        if (id.id !== channel.id) {
          _require = _asyncToGenerator(async () => {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                    let closure_0 = tmp3;
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
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          });
          const tmp8 = actions_AlertActionCreatorsDefault;
          let obj = {
            title: intl.string(require("intl").t["91WuJ9"]),
            body: intl2.string(require("intl").t["Rs+Vk1"]),
            cancelText: intl3.string(require("intl").t["ETE/oC"]),
            onConfirm() {
                      return closure_0();
                    },
            onCancel,
            isDismissable: false
          };
          const show = tmp8.show;
          intl = require("intl").intl;
          intl2 = require("intl").intl;
          intl3 = require("intl").intl;
          show(obj);
        }
      }
    }
  }
  fn();
}
({ ChannelTypes: unpackModuleId, ComponentActions: closure_12, NOOP: map1 } = Constants);
const AgeGateSource = AgeGateConstants.AgeGateSource;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const jsx = Fragment.jsx;
let c17 = "voice-channel";
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
  let obj = AgeGateUtils;
  if (obj.shouldShowAgeGateForChannelId(channelId)) {
    const tmpResult = RunAfterInteractionsUtils;
    tmpResult.runAfterInteractions(() => {
      const obj = require("AgeGateModalActionCreators");
      obj.openAgeGateModal(constants.NSFW_VOICE_CHANNEL);
    }, 150);
  }
};
export const openVoiceChannelActionSheet = function openVoiceChannelActionSheet(channel) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { channel };
  const tmp2 = asyncRequire(13576, dependencyMap.paths);
  openLazy(tmp2, "" + c17 + "-" + channel.id, obj);
};
export const hideVoiceChannelActionSheet = function hideVoiceChannelActionSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet("" + c17 + "-" + id.id);
};
export const dismissVoiceChannelScreens = function dismissVoiceChannelScreens(channel, onExited) {
  const combined = "" + c17 + "-" + channel.id;
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(combined, onExited);
  if (ActionSheetStore.getKey() === combined) {
    const tmp2Result = ActionSheetActionCreatorsDefault;
    tmp2Result.hideActionSheet();
  }
};
export { monkeyPatchCall };
export const showGuardCallAlert = function showGuardCallAlert(arg0) {
  let intl;
  let intl2;
  let intl3;
  let closure_0 = arg0;
  const obj = {
    title: intl.string(intl4.t["91WuJ9"]),
    body: intl2.string(intl4.t["Rs+Vk1"]),
    cancelText: intl3.string(intl4.t["ETE/oC"]),
    onConfirm() {
      return closure_0();
    },
    onCancel: map1,
    isDismissable: false
  };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  show(obj);
};
export { guardPrivateCallForChannel };
export const handleJoinCall = function handleJoinCall(channel) {
  let flag;
  let closure_0 = channel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = function _onConfirm() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (flag) {
              const obj4 = v1(c2[25]);
              v1 = 1;
              c2 = 1;
              const obj7 = { value: obj4.requestPermission(constants.CAMERA), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
          const obj2 = tmp3(c2[26]);
          obj2.dismissKeyboard();
          const obj3 = v1(c2[22]);
          const voiceChannel = obj3.selectVoiceChannel(closure_128_0.id, closure_128_1);
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          c2 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  guardPrivateCallForChannel(channel, function onConfirm() {
    return obj(...arguments);
  });
};
export const handleStartCall = function handleStartCall(channel) {
  let flag;
  _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  let obj = function _onConfirm2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let c0;
          let recipientId;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c0 = undefined;
              recipientId = undefined;
              if (flag) {
                const obj3 = tmp4(c2[25]);
                c2 = 1;
                c3 = 1;
                const obj6 = { value: obj3.requestPermission(constants2.CAMERA), done: false };
                return obj6;
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
            return { value: "IconComponent", done: null };
          }
          const obj2 = tmp(c2[26]);
          obj2.dismissKeyboard();
          const isFriendResult = closure_129_0.type !== constants.DM || friend.isFriend(closure_129_0.getRecipientId());
          c0 = isFriendResult;
          recipientId = null;
          if (!c0) {
            recipientId = closure_129_0.getRecipientId();
          }
          const tmp24 = tmp4(c2[29]);
          const id = closure_129_0.id;
          let tmp27 = c0;
          const call = tmp24.call;
          if (c0) {
            tmp27 = !closure_129_0.isManaged();
          }
          call(id, closure_129_1, tmp27, recipientId);
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp35) {
          c3 = 3;
          throw tmp35;
        }
      }
    });
    return obj(...arguments);
  };
  let flag2 = false;
  if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    const tmp3 = null;
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    flag2 = false;
    if (isProvisional) {
      react.lazy(() => channel(obj[20])(obj[27], obj.paths));
      obj = require("useAlertStore");
      obj.openAlert("ProvisionalAccountNocallAllowed", <lazyResult />);
      flag2 = true;
    }
  }
  if (!flag2) {
    guardPrivateCallForChannel(channel, function onConfirm() {
      return obj(...arguments);
    });
  }
};
export const handleRedesignGroupDMCall = function handleRedesignGroupDMCall(id) {
  let closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = function _onConfirm3() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const tmp18 = flag;
              if (tmp18) {
                const obj4 = v1(c2[25]);
                v1 = 1;
                c2 = 1;
                const obj7 = { value: obj4.requestPermission(constants.CAMERA), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
          const obj2 = tmp3(c2[26]);
          obj2.dismissKeyboard();
          const obj3 = v1(c2[29]);
          obj3.call(closure_128_0.id, closure_128_1, true);
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    });
    return obj(...arguments);
  };
  guardPrivateCallForChannel(id, function onConfirm() {
    return obj(...arguments);
  });
};
export const handleRedesignJoinCall = function handleRedesignJoinCall(id) {
  let closure_0 = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = function _onConfirm4() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (flag) {
              const obj4 = v1(c2[25]);
              v1 = 1;
              c2 = 1;
              const obj7 = { value: obj4.requestPermission(constants.CAMERA), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
          const obj2 = tmp3(c2[26]);
          obj2.dismissKeyboard();
          const obj3 = v1(c2[22]);
          const voiceChannel = obj3.selectVoiceChannel(closure_128_0.id, closure_128_1);
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          c2 = 3;
          throw tmp16;
        }
      }
    });
    return obj(...arguments);
  };
  guardPrivateCallForChannel(id, function onConfirm() {
    return obj(...arguments);
  });
};
export const openGuildVoiceModal = openChannelCallModal;
export const navigateToVoiceChannel = openChannelCallModal;