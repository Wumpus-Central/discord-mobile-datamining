// === Module 9332: VoicePanelAudioOutputActionSheet ===

// Module 9332 (VoicePanelAudioOutputActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 9331 */;
import useOnConnectToConsole from "useOnConnectToConsole" /* 9446 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import AudioManagerStore from "AudioManagerStore" /* 9303 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SessionsStore from "SessionsStore" /* 4908 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, channel, channelId, dependencyMap, hideActionSheetResult, hideActionSheetResult1, onConnectToConsoleResult, tmp3, type;

let closure_12;
let unpackModuleId;
const ScrollView = react_native.ScrollView;
let closure_9 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ sectionContainer: { marginTop: 0, marginBottom: 24 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TableRadioGroup;
  let activeDevice;
  let availableDevices;
  let intl;
  let obj3;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = availableDevices(576);
  const cResult = obj.c(7);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AudioManagerStore];
    const fn = function n() {
      const obj = { activeDevice: AudioManagerStore.getActiveAudioDevice(), availableDevices: AudioManagerStore.getAudioDevices() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = availableDevices(573);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ activeDevice, availableDevices } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(arg0) {
      const obj = availableDevices(dependencyMap[14]);
      obj.setAudioOutputDevice(arg0);
      const obj2 = closure_1(dependencyMap[10]);
      obj2.hideActionSheet(closure_1_9);
    };
    cResult[2] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  let closure_1 = tmp9;
  if (cResult[3] === activeDevice) {
    if (cResult[4] === availableDevices) {
      let tmp10;
      if (cResult[5] === tmp4) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  let tmp11 = null;
  if (availableDevices.length > 0) {
    let obj2 = { style: tmp4.sectionContainer, title: intl.string(availableDevices(1126).t.CxyS15), hasIcons: true, children: closure_11(TableRadioGroup, obj3) };
    const VoicePanelFormSection = availableDevices(9334).VoicePanelFormSection;
    intl = availableDevices(1126).intl;
    obj3 = {
      value: activeDevice.deviceId,
      onChange(arg0) {
          let closure_0 = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
          if (null != found) {
            closure_1(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          let TableRowIcon;
          let deviceName1;
          let obj2;
          let obj3;
          const obj = { value: deviceId.deviceId, icon: closure_1_11(TableRowIcon, obj2), label: obj3.getAudioDeviceToDisplayText(deviceId), subLabel: deviceName1 };
          const TableRadioRow = availableDevices(dependencyMap[18]).TableRadioRow;
          obj2 = { source: availableDevices(dependencyMap[20]).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          TableRowIcon = availableDevices(dependencyMap[19]).TableRowIcon;
          const deviceName = deviceId.deviceName;
          let length;
          obj3 = availableDevices(dependencyMap[20]);
          if (deviceName != null) {
            length = deviceName.length;
          }
          deviceName1 = undefined;
          if (length > 0) {
            deviceName1 = deviceId.deviceName;
          }
          return closure_1_11(TableRadioRow, obj, deviceId.deviceId);
        })
    };
    TableRadioGroup = availableDevices(6072).TableRadioGroup;
    tmp11 = closure_11(VoicePanelFormSection, obj2);
  }
  cResult[3] = activeDevice;
  cResult[4] = availableDevices;
  cResult[5] = tmp4;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let TableRadioGroup;
  let availableDevices;
  let intl;
  let obj3;
  const tmp = closure_13();
  let obj = availableDevices(573);
  const items = [AudioManagerStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { activeDevice: AudioManagerStore.getActiveAudioDevice(), availableDevices: AudioManagerStore.getAudioDevices() };
    return obj;
  });
  availableDevices = stateFromStoresObject.availableDevices;
  const activeDevice = stateFromStoresObject.activeDevice;
  let closure_1 = react.useCallback((arg0) => {
    const obj = availableDevices(dependencyMap[14]);
    obj.setAudioOutputDevice(arg0);
    const obj2 = closure_1(dependencyMap[10]);
    obj2.hideActionSheet(closure_1_9);
  }, []);
  let tmp5 = null;
  if (availableDevices.length > 0) {
    let obj2 = { style: tmp.sectionContainer, title: intl.string(availableDevices(1126).t.CxyS15), hasIcons: true, children: closure_11(TableRadioGroup, obj3) };
    const VoicePanelFormSection = tmp2(9334).VoicePanelFormSection;
    intl = tmp2(1126).intl;
    obj3 = {
      value: activeDevice.deviceId,
      onChange(arg0) {
          let closure_0 = arg0;
          const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
          if (null != found) {
            closure_1(found);
          }
        },
      hasIcons: true,
      children: availableDevices.map((deviceId) => {
          let TableRowIcon;
          let deviceName1;
          let obj2;
          let obj3;
          const obj = { value: deviceId.deviceId, icon: closure_1_11(TableRowIcon, obj2), label: obj3.getAudioDeviceToDisplayText(deviceId), subLabel: deviceName1 };
          const TableRadioRow = availableDevices(dependencyMap[18]).TableRadioRow;
          obj2 = { source: availableDevices(dependencyMap[20]).audioDeviceToIconMap[deviceId.simpleDeviceType] };
          TableRowIcon = availableDevices(dependencyMap[19]).TableRowIcon;
          const deviceName = deviceId.deviceName;
          let length;
          obj3 = availableDevices(dependencyMap[20]);
          if (deviceName != null) {
            length = deviceName.length;
          }
          deviceName1 = undefined;
          if (length > 0) {
            deviceName1 = deviceId.deviceName;
          }
          return closure_1_11(TableRadioRow, obj, deviceId.deviceId);
        })
    };
    TableRadioGroup = tmp2(6072).TableRadioGroup;
    tmp5 = closure_11(VoicePanelFormSection, obj2);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let arr;
  let awaitingRemoteSessionInfo;
  let tmp10;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(19);
  channel = channel.channel;
  const tmp4 = closure_13();
  arr = arr(9444)();
  let tmp5 = arr(9445)();
  dependencyMap = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function s() {
      return awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SessionsStore];
    cResult[2] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  let sessionId;
  const tmp12 = cResult[3];
  if (tmp5 != null) {
    sessionId = tmp5.sessionId;
  }
  if (tmp12 !== sessionId) {
    let sessionId1;
    if (tmp5 != null) {
      sessionId1 = tmp5.sessionId;
    }
    class C {
      constructor() {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return getSessionById(str);
      }
    }
    cResult[3] = sessionId1;
    cResult[4] = C;
    tmp14 = C;
  } else {
    tmp14 = cResult[4];
  }
  const tmpResult3 = tmp(573);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp14);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.type;
  }
  if (str == null) {
    if (stateFromStores1 != null) {
      const clientInfo = stateFromStores1.clientInfo;
      class C {
        constructor() {
          let str;
          const getSessionById = SessionsStore.getSessionById;
          if (sessionId != null) {
            str = sessionId.sessionId;
          }
          if (str == null) {
            str = "";
          }
          return getSessionById(str);
        }
      }
    }
    class C {
      constructor() {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return getSessionById(str);
      }
    }
  }
  if (str == null) {
    str = "";
  }
  if (cResult[5] === channel) {
    let tmp17;
    if (cResult[6] === arr) {
      tmp17 = cResult[7];
    }
    tmp(4698);
    class C {
      constructor() {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        return getSessionById(str);
      }
    }
    const tmp20 = !tmp19(tmp(2036).DismissibleContent.DONUT_MOBILE_NUX);
    let closure_3 = tmp20;
    if (cResult[8] === arr.length) {
      if (cResult[11] === arr) {
        class C {
          constructor() {
            let str;
            const getSessionById = SessionsStore.getSessionById;
            if (sessionId != null) {
              str = sessionId.sessionId;
            }
            if (str == null) {
              str = "";
            }
            return getSessionById(str);
          }
        }
        if (cResult[14] === arr) {
          if (cResult[15] === tmp17) {
            if (cResult[16] === str) {
              let tmp25;
              if (cResult[17] === tmp4) {
                tmp25 = cResult[18];
              }
              return tmp25;
            }
          }
        }
        class A {
          constructor() {
            const tmp = closure_3 && arr.length > 0;
            if (tmp) {
              const obj = DismissibleContentUnsafeUtils;
              const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
            }
          }
        }
        cResult[14] = arr;
        cResult[15] = tmp17;
        cResult[16] = str;
        cResult[17] = tmp4;
        cResult[18] = null;
        tmp25 = tmp26;
      }
      class C {
        constructor() {
          let str;
          const getSessionById = SessionsStore.getSessionById;
          if (sessionId != null) {
            str = sessionId.sessionId;
          }
          if (str == null) {
            str = "";
          }
          return getSessionById(str);
        }
      }
      tmp23[0] = arr;
      tmp23[1] = tmp20;
      class A {
        constructor() {
          const tmp = closure_3 && arr.length > 0;
          if (tmp) {
            const obj = DismissibleContentUnsafeUtils;
            const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
          }
        }
      }
      cResult[12] = tmp20;
      cResult[13] = tmp23;
    }
    class A {
      constructor() {
        const tmp = closure_3 && arr.length > 0;
        if (tmp) {
          const obj = DismissibleContentUnsafeUtils;
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
        }
      }
    }
    cResult[8] = arr.length;
    cResult[9] = tmp20;
    cResult[10] = A;
  }
  class T {
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
  cResult[7] = T;
  tmp17 = T;
}) : ((channel) => {
  let TableRadioGroup;
  let intl;
  let mapped;
  let obj5;
  let sessionId;
  channel = channel.channel;
  let arr;
  dependencyMap = undefined;
  let awaitingRemoteSessionInfo;
  let tmp2 = dependencyMap;
  let tmp = closure_13();
  arr = arr(9444)();
  dependencyMap = arr(9445)();
  let obj = channel(573);
  const items = [awaitingRemoteSessionInfo];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj2 = channel(573);
  const items1 = [SessionsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return getSessionById(str);
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
    let closure_0 = arg0;
    const found = arr.find((type) => type.type === closure_0);
    if (null != found) {
      const obj2 = useOnConnectToConsole;
      obj2.onConnectToConsole(channel, found);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet(closure_9);
    } else {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_9);
    }
  }, items3);
  let obj3 = channel(4698);
  const tmp8 = !obj3.useIsDismissibleContentDismissed_UNSAFE(channel(2036).DismissibleContent.DONUT_MOBILE_NUX);
  awaitingRemoteSessionInfo = tmp8;
  const items4 = [arr, tmp8];
  const effect = stateFromStores.useEffect(() => {
    const tmp = awaitingRemoteSessionInfo && arr.length > 0;
    if (tmp) {
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    }
  }, items4);
  let tmp10 = null;
  if (arr.length > 0) {
    let obj4 = { title: intl.string(channel(1126).t.q22XnQ), style: tmp.sectionContainer, hasIcons: true, children: closure_11(TableRadioGroup, obj5) };
    const VoicePanelFormSection = tmp3(9334).VoicePanelFormSection;
    intl = tmp3(1126).intl;
    obj5 = { defaultValue: memo, onChange: callback, hasIcons: true, children: mapped.filter((item) => Boolean(item)) };
    TableRadioGroup = tmp3(6072).TableRadioGroup;
    mapped = arr.map((type) => {
      let TableRowIcon;
      let intl;
      let intl2;
      let obj4;
      let tmp2;
      type = type.type;
      if (constants.XBOX === type) {
        const obj = { label: intl.string(channel(sessionId[16]).t.Nfvo72), variant: "xbox" };
        intl = channel(sessionId[16]).intl;
        tmp2 = obj;
      } else {
        tmp2 = null;
        if (tmp.PLAYSTATION === type) {
          const obj2 = { label: intl2.string(channel(sessionId[16]).t.fFl4jo), variant: "playstation" };
          intl2 = channel(sessionId[16]).intl;
          tmp2 = obj2;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        const obj3 = { icon: closure_1_11(TableRowIcon, obj4), label: tmp2.label, value: type.type };
        const TableRadioRow = channel(sessionId[18]).TableRadioRow;
        obj4 = { source: arr(sessionId[26])(type.type), variant: tmp2.variant };
        TableRowIcon = channel(sessionId[19]).TableRowIcon;
        tmp5 = closure_1_11(TableRadioRow, obj3, type.type);
      }
      return tmp5;
    });
    tmp10 = closure_11(VoicePanelFormSection, obj4);
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let intl;
  let items1;
  let obj5;
  let obj6;
  let tmp6;
  const obj = channelId(576);
  const cResult = obj.c(11);
  channelId = channelId.channelId;
  const isConnectedToVoiceChannel = channelId.isConnectedToVoiceChannel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channelId(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    let tmp12;
    let tmp16;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { title: intl.string(channelId(1126).t.iwxPM3) };
      const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
      intl = tmp(1126).intl;
      const tmp11 = closure_11(BottomSheetTitleHeader, obj2);
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== isConnectedToVoiceChannel) {
      const tmp13 = isConnectedToVoiceChannel && closure_11(closure_14, {});
      cResult[4] = isConnectedToVoiceChannel;
      cResult[5] = tmp13;
      tmp12 = tmp13;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      const obj3 = { channel: stateFromStores };
      const tmp19 = closure_11(closure_15, obj3);
      cResult[6] = stateFromStores;
      cResult[7] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === tmp12) {
      let tmp20;
      if (cResult[9] === tmp16) {
        tmp20 = cResult[10];
      }
      tmp8 = tmp20;
    }
    const obj4 = { header: tmp9, children: closure_11(ScrollView, obj5) };
    obj5 = { children: closure_12(NativeViewDefault, obj6) };
    BottomSheet = tmp(6645).BottomSheet;
    obj6 = { children: items1 };
    items1 = [tmp12, tmp16];
    const tmp25 = closure_11(BottomSheet, obj4);
    cResult[8] = tmp12;
    cResult[9] = tmp16;
    cResult[10] = tmp25;
    tmp20 = tmp25;
  }
  return tmp8;
}) : ((arg0) => {
  let BottomSheetTitleHeader;
  let intl;
  let isConnectedToVoiceChannel;
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let require;
  ({ channelId: require, isConnectedToVoiceChannel } = arg0);
  const items = [ChannelStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  let tmp5Result = null;
  if (null != stateFromStores) {
    const obj2 = { header: closure_11(BottomSheetTitleHeader, obj3), children: closure_11(ScrollView, obj4) };
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    obj3 = { title: intl.string(intl3.t.iwxPM3) };
    BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl3.intl;
    const tmp9 = NativeViewDefault;
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = closure_11(closure_14, {});
    }
    obj4 = { children: closure_12(tmp9, obj5) };
    obj5 = { children: items1 };
    items1 = [isConnectedToVoiceChannel, ];
    const obj6 = { channel: stateFromStores };
    items1[1] = closure_11(closure_15, obj6);
    tmp5Result = closure_11(BottomSheet, obj2);
  }
  return tmp5Result;
}));
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default memoResult;