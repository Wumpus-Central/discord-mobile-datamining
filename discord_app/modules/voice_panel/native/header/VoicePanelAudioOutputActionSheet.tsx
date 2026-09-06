// === Module 9116: VoicePanelAudioPhoneOutputSection ===

// Module 9116 (VoicePanelAudioPhoneOutputSection)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 563 */;
import setDefault from "set" /* 5589 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_5 from "set" /* 4577 */;
import closure_6 from "nativeEventEmitter" /* 9086 */;
import closure_7 from "ensureGuildLoaded" /* 1957 */;
import closure_8 from "handleUpdate" /* 4578 */;
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_9 } from "VOICE_PANEL_SETTINGS_KEY" /* 9115 */;
import { PlatformTypes } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function VoicePanelAudioPhoneOutputSection() {
  let obj = availableDevices(563);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeDevice: store.getActiveAudioDevice(), availableDevices: store.getAudioDevices() }));
  availableDevices = stateFromStoresObject.availableDevices;
  closure_1 = importAllResult.useCallback((arg0) => {
    availableDevices(9117).setAudioOutputDevice(arg0);
    const obj = availableDevices(9117);
    callback(4527).hideActionSheet(closure_9);
  }, []);
  let tmp5 = null;
  if (availableDevices.length > 0) {
    obj = { style: null, title: null, hasIcons: true, children: null };
    obj[0] = tmp.sectionContainer;
    const intl = tmp2(1114).intl;
    obj[1] = intl.string(tmp2(1114).t.CxyS15);
    obj = { value: null, onChange: null, hasIcons: true, children: null };
    obj[0] = stateFromStoresObject.activeDevice.deviceId;
    obj[1] = function onChange(arg0) {
      availableDevices = arg0;
      const found = availableDevices.find((deviceId) => deviceId.deviceId === closure_0);
      if (null != found) {
        callback(found);
      }
    };
    obj[3] = availableDevices.map((deviceId) => {
      let obj = { value: deviceId.deviceId, icon: null, label: null, subLabel: null };
      obj = { source: availableDevices(9082).audioDeviceToIconMap[deviceId.simpleDeviceType] };
      obj[1] = callback2(availableDevices(5611).TableRowIcon, obj);
      obj[2] = availableDevices(9082).getAudioDeviceToDisplayText(deviceId);
      const deviceName = deviceId.deviceName;
      let length;
      if (deviceName != null) {
        length = deviceName.length;
      }
      let deviceName1;
      if (length > 0) {
        deviceName1 = deviceId.deviceName;
      }
      obj[3] = deviceName1;
      return callback2(availableDevices(5688).TableRadioRow, obj, deviceId.deviceId);
    });
    obj[3] = callback(tmp2(5685).TableRadioGroup, obj);
    tmp5 = callback(tmp2(9118).VoicePanelFormSection, obj);
  }
  return tmp5;
}
function VoicePanelAudioConsoleSection(channel) {
  channel = channel.channel;
  let arr;
  dependencyMap = undefined;
  let stateFromStores;
  let stateFromStores1;
  closure_5 = undefined;
  arr = arr(9214)();
  dependencyMap = arr(9215)();
  let obj = channel(563);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let tmp = callback2();
  const items1 = [closure_8];
  stateFromStores1 = channel(563).useStateFromStores(items1, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return closure_1_8.getSessionById(str);
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
  const callback = stateFromStores.useCallback((channel) => {
    closure_0 = channel;
    const found = arr.find((type) => type.type === closure_0);
    if (null != found) {
      channel(sessionId[21]).onConnectToConsole(closure_0, found);
      const obj2 = channel(sessionId[21]);
      arr(sessionId[10]).hideActionSheet(closure_1_9);
      const obj3 = arr(sessionId[10]);
    } else {
      arr(sessionId[10]).hideActionSheet(closure_1_9);
      const obj = arr(sessionId[10]);
    }
  }, items3);
  let obj2 = channel(563);
  const tmp8 = !channel(4380).useIsDismissibleContentDismissed_UNSAFE(channel(1943).DismissibleContent.DONUT_MOBILE_NUX);
  closure_5 = tmp8;
  const items4 = [arr, tmp8];
  const effect = stateFromStores.useEffect(() => {
    let tmp = closure_5;
    if (closure_5) {
      tmp = arr.length > 0;
    }
    if (tmp) {
      const result = channel(sessionId[22]).UNSAFE_markDismissibleContentAsDismissed(channel(sessionId[23]).DismissibleContent.DONUT_MOBILE_NUX);
      const obj = channel(sessionId[22]);
    }
  }, items4);
  let tmp10 = null;
  if (arr.length > 0) {
    obj = { title: null, style: null, hasIcons: true, children: null };
    let intl = tmp3(1114).intl;
    obj[0] = intl.string(tmp3(1114).t.q22XnQ);
    obj[1] = tmp.sectionContainer;
    obj = { defaultValue: null, onChange: null, hasIcons: true, children: null };
    obj[0] = memo;
    obj[1] = callback;
    const mapped = arr.map((type) => {
      type = type.type;
      if (constants.XBOX === type) {
        let obj = { label: null, variant: "xbox" };
        const intl = channel(sessionId[14]).intl;
        obj[0] = intl.string(channel(sessionId[14]).t.Nfvo72);
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (tmp.PLAYSTATION === type) {
          obj = { label: null, variant: "playstation" };
          const intl2 = channel(sessionId[14]).intl;
          obj[0] = intl2.string(channel(sessionId[14]).t.fFl4jo);
          tmp2 = obj;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        obj = { icon: null, label: null, value: null };
        obj1 = { source: null, variant: null };
        obj1[0] = arr(sessionId[24])(type.type);
        obj1[1] = tmp2.variant;
        obj[0] = callback(channel(sessionId[17]).TableRowIcon, obj1);
        obj[1] = tmp2.label;
        obj[2] = type.type;
        tmp5 = callback(channel(sessionId[16]).TableRadioRow, obj, type.type);
      }
      return tmp5;
    });
    obj[3] = mapped.filter((arg0) => Boolean(arg0));
    obj[3] = callback(tmp3(5685).TableRadioGroup, obj);
    tmp10 = callback(tmp3(9118).VoicePanelFormSection, obj);
  }
  return tmp10;
}
let c3 = importAllResult;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ sectionContainer: { marginTop: 0, marginBottom: 24 } });
const memoResult = importAllResult.memo(function VoicePanelAudioOutputActionSheet(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel } = arg0);
  let obj = defaultAreStatesEqual;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(closure_0));
  let tmp5Result = null;
  if (null != stateFromStores) {
    obj = { header: null, children: null };
    obj = { title: null };
    const intl = tmp(1114).intl;
    obj[0] = intl.string(tmp(1114).t.iwxPM3);
    obj[0] = callback(tmp(7149).BottomSheetTitleHeader, obj);
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = tmp5(VoicePanelAudioPhoneOutputSection, {});
    }
    obj1 = { children: null };
    const obj2 = { children: null };
    const items1 = [isConnectedToVoiceChannel, ];
    const obj3 = { channel: null };
    obj3[0] = stateFromStores;
    items1[1] = callback(VoicePanelAudioConsoleSection, obj3);
    obj2[0] = items1;
    obj1[0] = closure_12(setDefault, obj2);
    obj[1] = callback(ScrollView, obj1);
    tmp5Result = tmp5(tmp(7150).BottomSheet, obj);
    const tmp6 = ScrollView;
    const tmp7 = closure_12;
    const tmp9 = setDefault;
  }
  return tmp5Result;
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default memoResult;