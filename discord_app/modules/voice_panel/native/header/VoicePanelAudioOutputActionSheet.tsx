// === Module 8794: VoicePanelAudioOutputActionSheet ===

// Module 8794 (VoicePanelAudioOutputActionSheet)
import useStateFromStores from "useStateFromStores" /* 573 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4938 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import useOnConnectToConsole from "useOnConnectToConsole" /* 13021 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import AudioManagerStore from "AudioManagerStore" /* 8786 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SessionsStore from "SessionsStore" /* 5112 */;

require = fn;
const ScrollView = fn(17).ScrollView;
let closure_9 = fn(8793).VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const PlatformTypes = fn(1085).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let closure_13 = createStyles.createStyles({ sectionContainer: { marginTop: 0, marginBottom: 24 } });
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelAudioPhoneOutputSection() {
  const cResult = availableDevices(576).c(7);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AudioManagerStore];
    const fn = function n() {
      return { activeDevice: AudioManagerStore.getActiveAudioDevice(), availableDevices: AudioManagerStore.getAudioDevices() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = availableDevices(576);
  const stateFromStoresObject = availableDevices(573).useStateFromStoresObject(tmp5, tmp6);
  ({ activeDevice, availableDevices } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(arg0) {
      availableDevices(8795).setAudioOutputDevice(arg0);
      const obj = availableDevices(8795);
      closure_1(5056).hideActionSheet(closure_1_9);
    };
    cResult[2] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  closure_1 = tmp9;
  if (cResult[3] === activeDevice) {
    if (cResult[4] === availableDevices) {
      if (cResult[5] === tmp4) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  let tmp11 = null;
  if (availableDevices.length > 0) {
    let obj2 = { style: tmp4.sectionContainer, title: null, hasIcons: true, children: null };
    const intl = availableDevices(1126).intl;
    obj2.title = intl.string(availableDevices(1126).t.CxyS15);
    const obj3 = {
      value: activeDevice.deviceId,
      onChange(arg0) {
          closure_0 = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
          if (null != found) {
            closure_1(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          const obj = { value: deviceId.deviceId, icon: closure_1_11(availableDevices(6187).TableRowIcon, { source: availableDevices(8785).audioDeviceToIconMap[deviceId.simpleDeviceType] }), label: null, subLabel: null };
          const obj2 = { source: availableDevices(8785).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          obj.label = availableDevices(8785).getAudioDeviceToDisplayText(deviceId);
          const deviceName = deviceId.deviceName;
          let length;
          if (deviceName != null) {
            length = deviceName.length;
          }
          let deviceName1;
          if (length > 0) {
            deviceName1 = deviceId.deviceName;
          }
          obj.subLabel = deviceName1;
          return closure_1_11(availableDevices(6261).TableRadioRow, obj, deviceId.deviceId);
        })
    };
    obj2.children = closure_11(availableDevices(6262).TableRadioGroup, obj3);
    tmp11 = closure_11(availableDevices(8796).VoicePanelFormSection, obj2);
  }
  cResult[3] = activeDevice;
  cResult[4] = availableDevices;
  cResult[5] = tmp4;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const tmpResult = availableDevices(573);
}) : (function VoicePanelAudioPhoneOutputSection() {
  const tmp = closure_13();
  const items = [AudioManagerStore];
  const stateFromStoresObject = availableDevices(573).useStateFromStoresObject(items, () => ({ activeDevice: AudioManagerStore.getActiveAudioDevice(), availableDevices: AudioManagerStore.getAudioDevices() }));
  availableDevices = stateFromStoresObject.availableDevices;
  closure_1 = noop.useCallback((arg0) => {
    availableDevices(8795).setAudioOutputDevice(arg0);
    const obj = availableDevices(8795);
    closure_1(5056).hideActionSheet(closure_1_9);
  }, []);
  let tmp5 = null;
  if (availableDevices.length > 0) {
    let obj2 = { style: tmp.sectionContainer, title: null, hasIcons: true, children: null };
    const intl = tmp2(1126).intl;
    obj2.title = intl.string(tmp2(1126).t.CxyS15);
    const obj3 = {
      value: stateFromStoresObject.activeDevice.deviceId,
      onChange(arg0) {
          closure_0 = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
          if (null != found) {
            closure_1(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          const obj = { value: deviceId.deviceId, icon: closure_1_11(availableDevices(6187).TableRowIcon, { source: availableDevices(8785).audioDeviceToIconMap[deviceId.simpleDeviceType] }), label: null, subLabel: null };
          const obj2 = { source: availableDevices(8785).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          obj.label = availableDevices(8785).getAudioDeviceToDisplayText(deviceId);
          const deviceName = deviceId.deviceName;
          let length;
          if (deviceName != null) {
            length = deviceName.length;
          }
          let deviceName1;
          if (length > 0) {
            deviceName1 = deviceId.deviceName;
          }
          obj.subLabel = deviceName1;
          return closure_1_11(availableDevices(6261).TableRadioRow, obj, deviceId.deviceId);
        })
    };
    obj2.children = closure_11(tmp2(6262).TableRadioGroup, obj3);
    tmp5 = closure_11(tmp2(8796).VoicePanelFormSection, obj2);
  }
  return tmp5;
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelAudioConsoleSection(channel) {
  const cResult = channel(576).c(19);
  channel = channel.channel;
  const tmp4 = closure_13();
  arr = arr(11108)();
  let tmp5 = arr(11025)();
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function c() {
      return awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = channel(576);
  const stateFromStores = channel(573).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SessionsStore];
    cResult[2] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  let sessionId;
  if (tmp5 != null) {
    sessionId = tmp5.sessionId;
  }
  if (cResult[3] !== sessionId) {
    let sessionId1;
    if (tmp5 != null) {
      sessionId1 = tmp5.sessionId;
    }
    class A {
      constructor() {
        str = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          str = closure_2.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_8.getSessionById(str);
      }
    }
    cResult[3] = sessionId1;
    cResult[4] = A;
    let tmp13 = A;
  } else {
    tmp13 = cResult[4];
  }
  const tmpResult = channel(573);
  const stateFromStores1 = channel(573).useStateFromStores(tmp10, tmp13);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.type;
  }
  if (str == null) {
    if (stateFromStores1 != null) {
      const clientInfo = stateFromStores1.clientInfo;
      class A {
        constructor() {
          str = undefined;
          tmp = closure_8;
          if (closure_2 != null) {
            str = closure_2.sessionId;
          }
          if (str == null) {
            str = "";
          }
          return closure_8.getSessionById(str);
        }
      }
    }
    class A {
      constructor() {
        str = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          str = closure_2.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_8.getSessionById(str);
      }
    }
  }
  if (str == null) {
    str = "";
  }
  if (cResult[5] === channel) {
    if (cResult[6] === arr) {
      let tmp16 = cResult[7];
    }
    tmp(4938);
    class A {
      constructor() {
        str = undefined;
        tmp = closure_8;
        if (closure_2 != null) {
          str = closure_2.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return closure_8.getSessionById(str);
      }
    }
    const tmp19 = !tmp18(tmp(2049).DismissibleContent.DONUT_MOBILE_NUX);
    closure_3 = tmp19;
    if (cResult[8] === arr.length) {
      if (cResult[11] === arr) {
        class A {
          constructor() {
            str = undefined;
            tmp = closure_8;
            if (closure_2 != null) {
              str = closure_2.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return closure_8.getSessionById(str);
          }
        }
        if (cResult[14] === arr) {
          if (cResult[15] === tmp16) {
            if (cResult[16] === str) {
              if (cResult[17] === tmp4) {
                let tmp24 = cResult[18];
              }
              return tmp24;
            }
          }
        }
        let tmp25 = null;
        if (arr.length > 0) {
          let obj2 = { title: null, style: null, hasIcons: true, children: null };
          class A {
            constructor() {
              str = undefined;
              tmp = closure_8;
              if (closure_2 != null) {
                str = closure_2.sessionId;
              }
              if (str == null) {
                str = "";
              }
              return closure_8.getSessionById(str);
            }
          }
          let intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t.q22XnQ);
          obj2.style = tmp4.sectionContainer;
          let obj3 = { defaultValue: str, onChange: tmp16, hasIcons: true, children: null };
          const mapped = arr.map((type) => {
            type = type.type;
            if (constants.XBOX === type) {
              const obj = { label: null, variant: "xbox" };
              const intl = channel(sessionId[16]).intl;
              obj.label = intl.string(channel(sessionId[16]).t.Nfvo72);
              let tmp2 = obj;
            } else {
              tmp2 = null;
              if (tmp.PLAYSTATION === type) {
                const obj2 = { label: null, variant: "playstation" };
                const intl2 = channel(sessionId[16]).intl;
                obj2.label = intl2.string(channel(sessionId[16]).t.fFl4jo);
                tmp2 = obj2;
              }
            }
            let tmp5 = null != tmp2;
            if (tmp5) {
              const obj3 = { icon: null, label: null, value: null };
              const obj4 = { source: arr(sessionId[26])(type.type), variant: tmp2.variant };
              obj3.icon = closure_1_11(channel(sessionId[19]).TableRowIcon, obj4);
              obj3.label = tmp2.label;
              obj3.value = type.type;
              tmp5 = closure_1_11(channel(sessionId[18]).TableRadioRow, obj3, type.type);
            }
            return tmp5;
          });
          obj3.children = mapped.filter((item) => Boolean(item));
          obj2.children = closure_11(tmp(6262).TableRadioGroup, obj3);
          tmp25 = closure_11(tmp27, obj2);
        }
        cResult[14] = arr;
        cResult[15] = tmp16;
        cResult[16] = str;
        cResult[17] = tmp4;
        cResult[18] = tmp25;
        tmp24 = tmp25;
      }
      class A {
        constructor() {
          str = undefined;
          tmp = closure_8;
          if (closure_2 != null) {
            str = closure_2.sessionId;
          }
          if (str == null) {
            str = "";
          }
          return closure_8.getSessionById(str);
        }
      }
      tmp22[0] = arr;
      tmp22[1] = tmp19;
      cResult[11] = arr;
      cResult[12] = tmp19;
      cResult[13] = tmp22;
    }
    const fn2 = function y() {
      let tmp = closure_3;
      if (closure_3) {
        tmp = arr.length > 0;
      }
      if (tmp) {
        const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
      }
    };
    cResult[8] = arr.length;
    cResult[9] = tmp19;
    cResult[10] = fn2;
  }
  class D {
    constructor(arg0) {
      closure_0 = channel;
      found = closure_1.find((type) => type.type === closure_0);
      if (null != found) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj2 = closure_0(closure_2[23]);
        tmp8 = channel;
        onConnectToConsoleResult = obj2.onConnectToConsole(channel, found);
        tmp10 = closure_1;
        tmp11 = closure_2;
        obj3 = closure_1(closure_2[10]);
        tmp12 = closure_9;
        hideActionSheetResult = obj3.hideActionSheet(closure_9);
      } else {
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[10]);
        tmp4 = closure_9;
        hideActionSheetResult1 = obj.hideActionSheet(closure_9);
      }
      return;
    }
  }
  cResult[5] = channel;
  cResult[6] = arr;
  cResult[7] = D;
  tmp16 = D;
  const tmpResult3 = channel(573);
}) : (function VoicePanelAudioConsoleSection(channel) {
  channel = channel.channel;
  let arr;
  let awaitingRemoteSessionInfo;
  arr = arr(11108)();
  dependencyMap = arr(11025)();
  let tmp = closure_13();
  const items = [awaitingRemoteSessionInfo];
  const stateFromStores = channel(573).useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj = channel(573);
  const items1 = [SessionsStore];
  const stateFromStores1 = channel(573).useStateFromStores(items1, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return SessionsStore.getSessionById(str);
  });
  const items2 = [stateFromStores, stateFromStores1];
  const items3 = [arr, channel];
  const memo = stateFromStores.useMemo(() => {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.type;
    }
    if (str == null) {
      let os;
      if (stateFromStores1 != null) {
        const clientInfo = stateFromStores1.clientInfo;
        if (clientInfo != null) {
          os = clientInfo.os;
        }
      }
      str = os;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items2);
  const callback = stateFromStores.useCallback((arg0) => {
    closure_0 = arg0;
    const found = arr.find((type) => type.type === closure_0);
    if (null != found) {
      useOnConnectToConsole.onConnectToConsole(channel, found);
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_9);
    } else {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_9);
    }
  }, items3);
  let obj2 = channel(573);
  const tmp8 = !channel(4938).useIsDismissibleContentDismissed_UNSAFE(channel(2049).DismissibleContent.DONUT_MOBILE_NUX);
  awaitingRemoteSessionInfo = tmp8;
  const items4 = [arr, tmp8];
  const effect = stateFromStores.useEffect(() => {
    let tmp = closure_5;
    if (closure_5) {
      tmp = arr.length > 0;
    }
    if (tmp) {
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    }
  }, items4);
  let tmp10 = null;
  if (arr.length > 0) {
    let obj4 = { title: null, style: null, hasIcons: true, children: null };
    let intl = tmp3(1126).intl;
    obj4.title = intl.string(tmp3(1126).t.q22XnQ);
    obj4.style = tmp.sectionContainer;
    const obj5 = { defaultValue: memo, onChange: callback, hasIcons: true, children: null };
    const mapped = arr.map((type) => {
      type = type.type;
      if (constants.XBOX === type) {
        const obj = { label: null, variant: "xbox" };
        const intl = channel(sessionId[16]).intl;
        obj.label = intl.string(channel(sessionId[16]).t.Nfvo72);
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (tmp.PLAYSTATION === type) {
          const obj2 = { label: null, variant: "playstation" };
          const intl2 = channel(sessionId[16]).intl;
          obj2.label = intl2.string(channel(sessionId[16]).t.fFl4jo);
          tmp2 = obj2;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        const obj3 = { icon: null, label: null, value: null };
        const obj4 = { source: arr(sessionId[26])(type.type), variant: tmp2.variant };
        obj3.icon = closure_1_11(channel(sessionId[19]).TableRowIcon, obj4);
        obj3.label = tmp2.label;
        obj3.value = type.type;
        tmp5 = closure_1_11(channel(sessionId[18]).TableRadioRow, obj3, type.type);
      }
      return tmp5;
    });
    obj5.children = mapped.filter((item) => Boolean(item));
    obj4.children = closure_11(tmp3(6262).TableRadioGroup, obj5);
    tmp10 = closure_11(tmp3(8796).VoicePanelFormSection, obj4);
  }
  return tmp10;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelAudioOutputActionSheet(channelId) {
  BottomSheet = channelId;
  let tmp = dependencyMap;
  const cResult = channelId(576).c(11);
  channelId = channelId.channelId;
  const isConnectedToVoiceChannel = channelId.isConnectedToVoiceChannel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = BottomSheet(573).useStateFromStores(first, tmp5);
  if (null == stateFromStores) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { title: null };
      const intl = BottomSheet(1126).intl;
      obj2.title = intl.string(BottomSheet(1126).t.iwxPM3);
      const tmp8 = closure_11(BottomSheet(6838).BottomSheetTitleHeader, obj2);
      cResult[3] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== isConnectedToVoiceChannel) {
      let tmp10 = isConnectedToVoiceChannel;
      if (isConnectedToVoiceChannel) {
        tmp10 = closure_11(closure_14, {});
      }
      cResult[4] = isConnectedToVoiceChannel;
      cResult[5] = tmp10;
      let tmp9 = tmp10;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      const isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
      let tmp15 = !isGuildStageVoiceResult;
      if (!isGuildStageVoiceResult) {
        const obj3 = { channel: stateFromStores };
        tmp15 = closure_11(closure_15, obj3);
      }
      cResult[6] = stateFromStores;
      cResult[7] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp9) {
    }
    BottomSheet = BottomSheet(6839).BottomSheet;
    const obj4 = { header: tmp6, children: null };
    const obj5 = { children: null };
    const obj6 = { children: null };
    const items1 = [tmp9, tmp13];
    obj6.children = items1;
    tmp = closure_12(NativeViewDefault, obj6);
    obj5.children = tmp;
    tmp6 = closure_11(ScrollView, obj5);
    obj4.children = tmp6;
    const tmp23 = closure_11(BottomSheet, obj4);
    cResult[8] = tmp9;
    cResult[9] = tmp13;
    cResult[10] = tmp23;
  }
  const BottomSheetResult = BottomSheet(573);
}) : (function VoicePanelAudioOutputActionSheet(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel } = arg0);
  const items = [ChannelStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  let tmp4Result2 = null;
  if (null != stateFromStores) {
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.iwxPM3);
    obj2.header = closure_11(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3);
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = closure_11(closure_14, {});
    }
    const items1 = [isConnectedToVoiceChannel, ];
    const isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    let tmp4Result = !isGuildStageVoiceResult;
    if (!isGuildStageVoiceResult) {
      const obj4 = { channel: stateFromStores };
      tmp4Result = closure_11(closure_15, obj4);
    }
    const obj5 = { children: null };
    const obj6 = { children: null };
    items1[1] = tmp4Result;
    obj6.children = items1;
    obj5.children = closure_12(NativeViewDefault, obj6);
    obj2.children = closure_11(ScrollView, obj5);
    tmp4Result2 = closure_11(Sheet_BottomSheet.BottomSheet, obj2);
  }
  return tmp4Result2;
}));