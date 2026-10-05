// discord_app/modules/voice_calls/native/CallsUtils.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import intl7 from "../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../utils/native/KeyboardManagerUtils.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import NativePermissionConstants from "../../native_permissions/NativePermissionConstants.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import AVError from "../../errors/av_errors/AVError.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/09327_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/09328_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/09329_AssetRegistry.js";
import useIsVideoModeDefault from "../../video_calls/native/useIsVideoMode.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import AudioRouteStore from "../AudioRouteStore.native.tsx";
import AudioManagerStore from "AudioManagerStore.android.tsx";
import module_12_mod from "../../../../_runtime/metro/00012__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, activeAudioDevice, importDefault;

let obj = function _handleToggleVideo() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let flag3;
    let formatToPlainString;
    let intl;
    let obj6;
    let tmp11Result2;
    let x9mtl4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        let closure_2 = closure_131_10.isVideoEnabled();
        const obj11 = closure_131_0(closure_131_3[12]);
        const channelVideoLimit = obj11.getChannelVideoLimit(closure_0);
        const reachedLimit = channelVideoLimit.reachedLimit;
        const limit = channelVideoLimit.limit;
        if (reachedLimit) {
          const tmp15 = flag3;
          if (tmp15) {
            const obj5 = {
              title: intl.string(closure_131_0(closure_131_3[14]).t["3ffmE+"]),
              body: formatToPlainString(x9mtl4, obj6),
            };
            const show = closure_131_1(closure_131_3[13]).show;
            const tmp19 = closure_131_1(closure_131_3[13]);
            intl = closure_131_0(closure_131_3[14]).intl;
            const intl2 = closure_131_0(closure_131_3[14]).intl;
            formatToPlainString = intl2.formatToPlainString;
            obj6 = { limit: limit.toString() };
            x9mtl4 = closure_131_0(closure_131_3[14]).t.x9mtl4;
            show(obj5);
          }
        } else if (closure_2) {
          const tmp11Result = closure_131_1(closure_131_3[16]);
          tmp11Result.setVideoEnabled(false);
        } else {
          let c4 = 2;
          c5 = 1;
          const obj7 = { value: tmp11Result2.requestPermission(closure_131_15.CAMERA), done: false };
          tmp11Result2 = closure_131_1(closure_131_3[15]);
          return obj7;
        }
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      const obj8 = { value, done: true };
      return obj8;
    } else if (value) {
      obj = closure_131_1(closure_131_3[16]);
      obj.setVideoEnabled(true);
    }
    await "IconComponent";
    closure_2 = tmp;
    flag3 = closure_1;
    if (closure_1 === undefined) {
      flag3 = true;
    }
    return "Set";
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let module_12 = module_12_mod;
let closure_17 = module_12.debounce((arg0) => {
  const AudioRoutePicker = NativeModules.AudioRoutePicker;
  if (AudioRoutePicker != null) {
    AudioRoutePicker.handleAudioRoute(arg0);
  }
}, 250);
module_12 = module_12_mod;
let closure_18 = module_12.debounce((fn) => {
  fn();
}, 1);
obj = {
  EARPIECE: AssetRegistryDefault,
  BLUETOOTH_HEADSET: AssetRegistryDefault2,
  WIRED_HEADSET: AssetRegistryDefault3,
  SPEAKERPHONE: AssetRegistryDefault3,
  INVALID: AssetRegistryDefault3,
};
const constants = {
  TYPE_UNKNOWN: 0,
  [0]: "TYPE_UNKNOWN",
  TYPE_BUILTIN_EARPIECE: 1,
  [1]: "TYPE_BUILTIN_EARPIECE",
  TYPE_BUILTIN_SPEAKER: 2,
  [2]: "TYPE_BUILTIN_SPEAKER",
  TYPE_WIRED_HEADSET: 3,
  [3]: "TYPE_WIRED_HEADSET",
  TYPE_WIRED_HEADPHONES: 4,
  [4]: "TYPE_WIRED_HEADPHONES",
  TYPE_LINE_ANALOG: 5,
  [5]: "TYPE_LINE_ANALOG",
  TYPE_LINE_DIGITAL: 6,
  [6]: "TYPE_LINE_DIGITAL",
  TYPE_BLUETOOTH_SCO: 7,
  [7]: "TYPE_BLUETOOTH_SCO",
  TYPE_BLUETOOTH_A2DP: 8,
  [8]: "TYPE_BLUETOOTH_A2DP",
  TYPE_HDMI: 9,
  [9]: "TYPE_HDMI",
  TYPE_HDMI_ARC: 10,
  [10]: "TYPE_HDMI_ARC",
  TYPE_USB_DEVICE: 11,
  [11]: "TYPE_USB_DEVICE",
  TYPE_USB_ACCESSORY: 12,
  [12]: "TYPE_USB_ACCESSORY",
  TYPE_DOCK: 13,
  [13]: "TYPE_DOCK",
  TYPE_FM: 14,
  [14]: "TYPE_FM",
  TYPE_BUILTIN_MIC: 15,
  [15]: "TYPE_BUILTIN_MIC",
  TYPE_FM_TUNER: 16,
  [16]: "TYPE_FM_TUNER",
  TYPE_TV_TUNER: 17,
  [17]: "TYPE_TV_TUNER",
  TYPE_TELEPHONY: 18,
  [18]: "TYPE_TELEPHONY",
  TYPE_AUX_LINE: 19,
  [19]: "TYPE_AUX_LINE",
  TYPE_IP: 20,
  [20]: "TYPE_IP",
  TYPE_BUS: 21,
  [21]: "TYPE_BUS",
  TYPE_USB_HEADSET: 22,
  [22]: "TYPE_USB_HEADSET",
  TYPE_HEARING_AID: 23,
  [23]: "TYPE_HEARING_AID",
  TYPE_BUILTIN_SPEAKER_SAFE: 24,
  [24]: "TYPE_BUILTIN_SPEAKER_SAFE",
  TYPE_REMOTE_SUBMIX: 25,
  [25]: "TYPE_REMOTE_SUBMIX",
  TYPE_BLE_HEADSET: 26,
  [26]: "TYPE_BLE_HEADSET",
  TYPE_BLE_SPEAKER: 27,
  [27]: "TYPE_BLE_SPEAKER",
  TYPE_ECHO_REFERENCE: 28,
  [28]: "TYPE_ECHO_REFERENCE",
  TYPE_HDMI_EARC: 29,
  [29]: "TYPE_HDMI_EARC",
  TYPE_BLE_BROADCAST: 30,
  [30]: "TYPE_BLE_BROADCAST",
  TYPE_DOCK_ANALOG: 31,
  [31]: "TYPE_DOCK_ANALOG",
};
const tmp2 = PlatformUtils.isAndroid()
  ? () => {
      obj = get_initialized;
      const items = [AudioManagerStore];
      return obj.useStateFromStoresObject(items, () => {
        let simpleDeviceType;
        activeAudioDevice = activeAudioDevice.getActiveAudioDevice();
        obj = {
          isAudioRouteEnabled: true,
          toggleAudio: require("showAudioOutputSelector").showAudioOutputSelector,
          routeSource: closure_1_19[simpleDeviceType],
        };
        simpleDeviceType = undefined;
        if (activeAudioDevice != null) {
          simpleDeviceType = activeAudioDevice.simpleDeviceType;
        }
        if (simpleDeviceType == null) {
          simpleDeviceType = require("NativeAudioManagerModule").AudioDeviceType.INVALID;
        }
        return obj;
      }, []);
    }
  : () => {
      let closure_3;
      let isAudioRouteEnabled;
      let isEnabled;
      obj = isEnabled(504);
      const items = [
        ChannelStore,
        SelectedChannelStore,
        ApplicationStreamingStore,
        VoiceStateStore,
        MediaEngineStore,
        AudioRouteStore,
      ];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        obj = isEnabled(closure_3[29]);
        isVideoMode = obj.isVideoMode(
          ChannelStore,
          SelectedChannelStore,
          ApplicationStreamingStore,
          VoiceStateStore,
          MediaEngineStore,
        );
        currentRouteType = currentRouteType.getCurrentRouteType();
        isEnabled = currentRouteType === isEnabled(closure_3[30]).RouteTypes.SPEAKER;
        const isBluetoothRoute = currentRouteType === isEnabled(closure_3[30]).RouteTypes.BLUETOOTH;
        if (!isEnabled) {
          isEnabled = isBluetoothRoute;
        }
        if (!isEnabled) {
          isEnabled = isVideoMode;
        }
        return { isEnabled, isVideoMode, isBluetoothRoute };
      });
      isEnabled = stateFromStoresObject.isEnabled;
      let isVideoMode = stateFromStoresObject.isVideoMode;
      let isBluetoothRoute = stateFromStoresObject.isBluetoothRoute;
      [isAudioRouteEnabled, dependencyMap] = react.useState(isEnabled);
      const items1 = [isAudioRouteEnabled, isVideoMode];
      const items2 = [isEnabled, isVideoMode];
      const callback = react.useCallback(() => {
        if (!AudioRouteStore.getMultipleRoutesAvailable()) {
          closure_18.cancel();
          if (!isVideoMode) {
            closure_3(!first);
          }
        }
        closure_17(!first);
      }, items1);
      const effect = react.useEffect(() => {
        if (!AudioRouteStore.getMultipleRoutesAvailable()) {
          if (!isVideoMode) {
            closure_18(() => closure_1_3(isEnabled));
          }
        }
        closure_3(isEnabled);
      }, items2);
      const obj2 = {
        isAudioRouteEnabled,
        toggleAudio: callback,
        routeSource: isVideoMode(isBluetoothRoute ? 9328 : 9329),
      };
      return obj2;
    };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let closure_1;
      let closure_3;
      let currentRouteType;
      let isAudioRouteEnabled;
      let tmp16;
      let tmp4;
      let tmp5;
      obj = require("react");
      const cResult = obj.c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AudioRouteStore];
        const fn = function n() {
          return currentRouteType.getCurrentRouteType();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp9 = useIsVideoModeDefault();
      _require = tmp9;
      let tmp10 = stateFromStores === tmp(9301).RouteTypes.SPEAKER;
      const tmp11 = stateFromStores === require("VoiceCallTypes").RouteTypes.BLUETOOTH;
      const tmp8 = importDefault;
      if (!tmp10) {
        tmp10 = tmp11;
      }
      if (!tmp10) {
        tmp10 = tmp9;
      }
      importDefault = tmp10;
      [isAudioRouteEnabled, dependencyMap] = react.useState(tmp10);
      if (cResult[2] === isAudioRouteEnabled) {
        let tmp14;
        if (cResult[3] === tmp9) {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== tmp10) {
          class O {
            constructor() {
              closure_3(closure_1);
            }
          }
          cResult[5] = tmp10;
          cResult[6] = O;
        } else {
          class O {
            constructor() {
              closure_3(closure_1);
            }
          }
        }
        if (cResult[7] === tmp10) {
          class O {
            constructor() {
              closure_3(closure_1);
            }
          }
          const effect = react.useEffect(O, tmp16);
          const tmp8Result = tmp8(tmp11 ? 9328 : 9329);
          if (cResult[10] === isAudioRouteEnabled) {
            class O {
              constructor() {
                closure_3(closure_1);
              }
            }
          }
          const obj2 = { isAudioRouteEnabled, toggleAudio: tmp14, routeSource: tmp8Result };
          cResult[10] = isAudioRouteEnabled;
          cResult[11] = tmp8Result;
          cResult[12] = tmp14;
          cResult[13] = obj2;
        }
        const items1 = [tmp10, tmp9];
        cResult[7] = tmp10;
        cResult[8] = tmp9;
        cResult[9] = items1;
        tmp16 = items1;
      }
      class T {
        constructor() {
          if (!AudioRouteStore.getMultipleRoutesAvailable()) {
            closure_18.cancel();
            if (!closure_0) {
              closure_3(!first);
            }
          }
          closure_17(!first);
        }
      }
      cResult[2] = isAudioRouteEnabled;
      cResult[3] = tmp9;
      cResult[4] = T;
      tmp14 = T;
    }
  : () => {
      let closure_0;
      let closure_1;
      let closure_3;
      let currentRouteType;
      let isAudioRouteEnabled;
      const items = [AudioRouteStore];
      obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => currentRouteType.getCurrentRouteType());
      const tmp4 = useIsVideoModeDefault();
      _require = tmp4;
      let tmp5 = stateFromStores === require("VoiceCallTypes").RouteTypes.SPEAKER;
      const tmp6 = stateFromStores === require("VoiceCallTypes").RouteTypes.BLUETOOTH;
      const tmp3 = importDefault;
      if (!tmp5) {
        tmp5 = tmp6;
      }
      if (!tmp5) {
        tmp5 = tmp4;
      }
      importDefault = tmp5;
      [isAudioRouteEnabled, dependencyMap] = react.useState(tmp5);
      const items1 = [isAudioRouteEnabled, tmp4];
      const items2 = [tmp5, tmp4];
      const callback = react.useCallback(() => {
        if (!AudioRouteStore.getMultipleRoutesAvailable()) {
          closure_18.cancel();
          if (!closure_0) {
            closure_3(!first);
          }
        }
        closure_17(!first);
      }, items1);
      const effect = react.useEffect(() => {
        closure_3(closure_1);
      }, items2);
      const obj2 = { isAudioRouteEnabled, toggleAudio: callback, routeSource: tmp3(tmp6 ? 9328 : 9329) };
      return obj2;
    };
let result = size.fileFinishedImporting("modules/voice_calls/native/CallsUtils.tsx");

export const handleToggleVideo = function handleToggleVideo() {
  return obj(...arguments);
};
export const handleToggleSelfDeaf = function handleToggleSelfDeaf() {
  obj = AudioActionCreatorsDefault;
  obj.toggleSelfDeaf();
};
export const handleToggleSelfMute = function handleToggleSelfMute() {
  obj = AudioActionCreatorsDefault;
  obj.toggleSelfMute();
};
export const showSuppressedAlert = function showSuppressedAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(intl7.t.FJSZVM), body: intl2.string(intl7.t.etJjgW), hideActionSheet: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  show(obj);
};
export const showServerMuteAlert = function showServerMuteAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(intl7.t["+JQCa/"]), body: intl2.string(intl7.t.hsNm7d), hideActionSheet: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  show(obj);
};
export const showServerDeafenAlert = function showServerDeafenAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(intl7.t.QZ7WSS), body: intl2.string(intl7.t.Tl9JpL), hideActionSheet: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  show(obj);
};
export const showCameraDisabledAlert = function showCameraDisabledAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(intl7.t.OYzPcW), body: intl2.string(intl7.t.oBH7Y2), hideActionSheet: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  show(obj);
};
export const showScreenshareDisabledAlert = function showScreenshareDisabledAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(intl7.t["/x4knx"]), body: intl2.string(intl7.t.PpfzUE), hideActionSheet: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  show(obj);
};
export const showMinOSScreenshareRequirementAlert = function showMinOSScreenshareRequirementAlert() {
  let intl2;
  let intl3;
  const intl = intl7.intl;
  const formatToPlainString = intl.formatToPlainString;
  const ejOT95 = intl7.t.ejOT95;
  obj = AVError;
  const errorInfo = obj.getErrorInfo(AVError.AVError.SCREENSHARE_OS_NOT_SUPPORTED);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const formatToPlainStringResult = formatToPlainString(ejOT95, { errorCode });
  const obj2 = {
    title: intl2.string(intl7.t.oblMYa),
    body: "" + intl3.string(intl7.t.Wnhd3q) + "\n\n" + formatToPlainStringResult,
    hideActionSheet: false,
  };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl2 = intl7.intl;
  intl3 = intl7.intl;
  show(obj2);
};
export const showTabletRequirementAlert = function showTabletRequirementAlert() {
  let intl;
  let intl2;
  obj = { title: intl.string(intl7.t["1N0dxa"]), body: intl2.string(intl7.t.qqDFVb), hideActionSheet: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  show(obj);
};
export const handleDisconnect = function handleDisconnect(channel) {
  obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = PrivateChannelCallUtils;
  const result1 = obj2.dismissVoiceChannelScreens(channel, () => {
    obj = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj.selectVoiceChannel(null);
  });
};
export const audioDeviceToIconMap = obj;
export const getAudioDeviceToDisplayText = function getAudioDeviceToDisplayText(deviceType) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let stringResult;
  obj = {
    EARPIECE: intl.string(intl7.t.Ouoi6E),
    BLUETOOTH_HEADSET: intl2.string(intl7.t.i6eV3z),
    WIRED_HEADSET: intl3.string(intl7.t.Dluojr),
    SPEAKERPHONE: intl4.string(intl7.t.snEhlu),
    INVALID: intl5.string(intl7.t.kCBL6t),
  };
  intl = intl7.intl;
  intl2 = intl7.intl;
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  intl5 = intl7.intl;
  if (deviceType.deviceType === constants.TYPE_BLE_HEADSET) {
    const intl6 = intl7.intl;
    stringResult = intl6.string(intl7.t.BtXSp9);
  } else {
    stringResult = obj[deviceType.simpleDeviceType];
  }
  return stringResult;
};
export const useMaskedSpeakerStates = tmp2;
export const useImmediateMaskedSpeakerStates = tmp3;
