// === Module 9674: VoicePanelAudioPhoneOutputSection ===

// Module 9674 (VoicePanelAudioPhoneOutputSection)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import obj132Default from "obj132" /* 7190 */;
import importAllResult from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import set from "set" /* 4540 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9651 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleUpdate from "handleUpdate" /* 4541 */;
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_9 } from "VOICE_PANEL_SETTINGS_KEY" /* 9673 */;
import { PlatformTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function VoicePanelAudioPhoneOutputSection() {
  let obj = availableDevices(647);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeDevice: store.getActiveAudioDevice(), availableDevices: store.getAudioDevices() }));
  availableDevices = stateFromStoresObject.availableDevices;
  closure_1 = importAllResult.useCallback((arg0) => {
    availableDevices(9675).setAudioOutputDevice(arg0);
    const obj = availableDevices(9675);
    callback(4342).hideActionSheet(closure_9);
  }, []);
  let tmp5 = null;
  if (availableDevices.length > 0) {
    obj = { style: null, title: null, hasIcons: true, children: null };
    obj[0] = tmp.sectionContainer;
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t.CxyS15);
    obj = { value: null, onChange: null, hasIcons: true, children: null };
    obj[0] = stateFromStoresObject.activeDevice.deviceId;
    obj[1] = function onChange(arg0) {
      availableDevices = arg0;
      const found = availableDevices.find((item, index) => item.deviceId === closure_0);
      if (null != found) {
        callback(found);
      }
    };
    obj[3] = availableDevices.map((item, index) => {
      const obj = { source: availableDevices(9647).audioDeviceToIconMap[item.simpleDeviceType] };
      obj[1] = callback2(availableDevices(6296).TableRowIcon, obj);
      obj[2] = availableDevices(9647).getAudioDeviceToDisplayText(item);
      const deviceName = item.deviceName;
      let length;
      if (deviceName != null) {
        length = deviceName.length;
      }
      let deviceName1;
      if (length > 0) {
        deviceName1 = item.deviceName;
      }
      obj[3] = deviceName1;
      return callback2(availableDevices(8100).TableRadioRow, obj, item.deviceId);
    });
    obj[3] = callback(tmp2(8101).TableRadioGroup, obj);
    tmp5 = callback(tmp2(9676).VoicePanelFormSection, obj);
  }
  return tmp5;
}
function VoicePanelAudioConsoleSection(channel) {
  channel = channel.channel;
  let arr;
  closure_5 = undefined;
  arr = arr(9747)();
  dependencyMap = arr(9748)();
  let obj = channel(647);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let tmp = callback2();
  const items1 = [closure_8];
  const stateFromStores1 = channel(647).useStateFromStores(items1, () => {
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
    const found = arr.find((item, index) => item.type === closure_0);
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
  let obj2 = channel(647);
  const tmp8 = !channel(4196).useIsDismissibleContentDismissed_UNSAFE(channel(1377).DismissibleContent.DONUT_MOBILE_NUX);
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
    let intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.q22XnQ);
    obj[1] = tmp.sectionContainer;
    obj = { defaultValue: null, onChange: null, hasIcons: true, children: null };
    obj[0] = memo;
    obj[1] = callback;
    const mapped = arr.map((item, index) => {
      const type = item.type;
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
        obj1[0] = arr(sessionId[24])(item.type);
        obj1[1] = tmp2.variant;
        obj[0] = callback(channel(sessionId[17]).TableRowIcon, obj1);
        obj[1] = tmp2.label;
        obj[2] = item.type;
        tmp5 = callback(channel(sessionId[16]).TableRadioRow, obj, item.type);
      }
      return tmp5;
    });
    obj[3] = mapped.filter((item, index) => Boolean(item));
    obj[3] = callback(tmp3(8101).TableRadioGroup, obj);
    tmp10 = callback(tmp3(9676).VoicePanelFormSection, obj);
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
    obj = { title: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.iwxPM3);
    obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = callback(VoicePanelAudioPhoneOutputSection, {});
    }
    obj1 = { children: null };
    const obj2 = { children: null };
    const items1 = [isConnectedToVoiceChannel, ];
    const obj3 = { channel: null };
    obj3[0] = stateFromStores;
    items1[1] = callback(VoicePanelAudioConsoleSection, obj3);
    obj2[0] = items1;
    obj1[0] = callback(obj132Default, obj2);
    obj[1] = callback(ScrollView, obj1);
    tmp5Result = callback(Background.BottomSheet, obj);
  }
  return tmp5Result;
});
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default memoResult;