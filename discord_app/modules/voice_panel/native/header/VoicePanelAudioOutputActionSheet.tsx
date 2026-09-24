// discord_app/modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useOnConnectToConsole from "../../../video_calls/native/useOnConnectToConsole.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameConsoleStore from "../../../game_console/GameConsoleStore.tsx";
import AudioManagerStore from "../../../voice_calls/native/AudioManagerStore.android.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SessionsStore from "../../../../stores/SessionsStore.tsx";

require = fn;
function VoicePanelAudioPhoneOutputSection() {
  const tmp = closure_13();
  const items = [AudioManagerStore];
  const stateFromStoresObject = availableDevices(563).useStateFromStoresObject(items, () => ({
    activeDevice: AudioManagerStore.getActiveAudioDevice(),
    availableDevices: AudioManagerStore.getAudioDevices(),
  }));
  availableDevices = stateFromStoresObject.availableDevices;
  closure_1 = noop.useCallback((arg0) => {
    availableDevices(10021).setAudioOutputDevice(arg0);
    const obj = availableDevices(10021);
    closure_1(4796).hideActionSheet(closure_1_9);
  }, []);
  let tmp5 = null;
  if (availableDevices.length > 0) {
    let obj2 = { style: tmp.sectionContainer, title: null, hasIcons: true, children: null };
    const intl = tmp2(1115).intl;
    obj2.title = intl.string(tmp2(1115).t.CxyS15);
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
        const obj = {
          value: deviceId.deviceId,
          icon: closure_1_11(availableDevices(5916).TableRowIcon, {
            source: availableDevices(9988).audioDeviceToIconMap[deviceId.simpleDeviceType],
          }),
          label: null,
          subLabel: null,
        };
        const obj2 = { source: availableDevices(9988).audioDeviceToIconMap[deviceId.simpleDeviceType] };
        obj.label = availableDevices(9988).getAudioDeviceToDisplayText(deviceId);
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
        return closure_1_11(availableDevices(5993).TableRadioRow, obj, deviceId.deviceId);
      }),
    };
    obj2.children = closure_11(tmp2(5990).TableRadioGroup, obj3);
    tmp5 = closure_11(tmp2(10022).VoicePanelFormSection, obj2);
  }
  return tmp5;
}
function VoicePanelAudioConsoleSection(channel) {
  channel = channel.channel;
  let arr;
  let awaitingRemoteSessionInfo;
  arr = arr(10132)();
  dependencyMap = arr(9853)();
  let tmp = closure_13();
  const items = [awaitingRemoteSessionInfo];
  const stateFromStores = channel(563).useStateFromStores(items, () =>
    awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo(),
  );
  let obj = channel(563);
  const items1 = [SessionsStore];
  const stateFromStores1 = channel(563).useStateFromStores(items1, () => {
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
  let obj2 = channel(563);
  const tmp8 = !channel(4649).useIsDismissibleContentDismissed_UNSAFE(
    channel(2028).DismissibleContent.DONUT_MOBILE_NUX,
  );
  awaitingRemoteSessionInfo = tmp8;
  const items4 = [arr, tmp8];
  const effect = stateFromStores.useEffect(() => {
    let tmp = closure_5;
    if (closure_5) {
      tmp = arr.length > 0;
    }
    if (tmp) {
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
      );
    }
  }, items4);
  let tmp10 = null;
  if (arr.length > 0) {
    let obj4 = { title: null, style: null, hasIcons: true, children: null };
    let intl = tmp3(1115).intl;
    obj4.title = intl.string(tmp3(1115).t.q22XnQ);
    obj4.style = tmp.sectionContainer;
    const obj5 = { defaultValue: memo, onChange: callback, hasIcons: true, children: null };
    const mapped = arr.map((type) => {
      type = type.type;
      if (constants.XBOX === type) {
        const obj = { label: null, variant: "xbox" };
        const intl = channel(sessionId[14]).intl;
        obj.label = intl.string(channel(sessionId[14]).t.Nfvo72);
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (tmp.PLAYSTATION === type) {
          const obj2 = { label: null, variant: "playstation" };
          const intl2 = channel(sessionId[14]).intl;
          obj2.label = intl2.string(channel(sessionId[14]).t.fFl4jo);
          tmp2 = obj2;
        }
      }
      let tmp5 = null != tmp2;
      if (tmp5) {
        const obj3 = { icon: null, label: null, value: null };
        const obj4 = { source: arr(sessionId[24])(type.type), variant: tmp2.variant };
        obj3.icon = closure_1_11(channel(sessionId[17]).TableRowIcon, obj4);
        obj3.label = tmp2.label;
        obj3.value = type.type;
        tmp5 = closure_1_11(channel(sessionId[16]).TableRadioRow, obj3, type.type);
      }
      return tmp5;
    });
    obj5.children = mapped.filter((item) => Boolean(item));
    obj4.children = closure_11(tmp3(5990).TableRadioGroup, obj5);
    tmp10 = closure_11(tmp3(10022).VoicePanelFormSection, obj4);
  }
  return tmp10;
}
const ScrollView = fn(17).ScrollView;
let closure_9 = fn(10019).VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const PlatformTypes = fn(1074).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles({ sectionContainer: { marginTop: 0, marginBottom: 24 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx");

export default noop.memo(function VoicePanelAudioOutputActionSheet(arg0) {
  ({ channelId: require, isConnectedToVoiceChannel } = arg0);
  const items = [ChannelStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp5Result = null;
  if (null != stateFromStores) {
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.iwxPM3);
    obj2.header = closure_11(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3);
    if (isConnectedToVoiceChannel) {
      isConnectedToVoiceChannel = closure_11(VoicePanelAudioPhoneOutputSection, {});
    }
    const obj4 = { children: null };
    const obj5 = { children: null };
    const items1 = [isConnectedToVoiceChannel];
    const obj6 = { channel: stateFromStores };
    items1[1] = closure_11(VoicePanelAudioConsoleSection, obj6);
    obj5.children = items1;
    obj4.children = closure_12(NativeViewDefault, obj5);
    obj2.children = closure_11(ScrollView, obj4);
    tmp5Result = closure_11(Sheet_BottomSheet.BottomSheet, obj2);
  }
  return tmp5Result;
});
