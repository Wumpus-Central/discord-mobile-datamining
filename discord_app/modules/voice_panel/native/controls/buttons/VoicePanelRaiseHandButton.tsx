// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelRaiseHandButton.tsx
import util from "../../../../../intl/index.native.tsx";
import HandRequestSpeakIcon2 from "../../../../../design/components/Icon/native/redesign/generated/HandRequestSpeakIcon.tsx";
import VoicePanelStateContextDefault from "../../VoicePanelStateContext.tsx";
import useRaiseHandControlDefault from "../../../../stage_channels/native/useRaiseHandControl.tsx";
import HandRequestDenyIcon from "../../../../../design/components/Icon/native/redesign/generated/HandRequestDenyIcon.tsx";
import VoicePanelStyles from "VoicePanelStyles.tsx";
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
function RaiseHandButtonInner(arg0) {
  ({ channel, props, wrapperSpecs } = arg0);
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp5 = useRaiseHandControlDefault(channel);
  ({ hasRequestedToSpeak, disabled, handlePress } = tmp5);
  if (tmp5.shouldAgeVerifyToSpeak) {
    let HandRequestSpeakIcon = HandRequestDenyIcon.HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = HandRequestSpeakIcon2.HandRequestSpeakIcon;
  }
  let color = voicePanelButtonStyles.iconFill.color;
  if (disabled) {
    color = voicePanelButtonStyles.iconFillMuted.color;
  } else if (hasRequestedToSpeak) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  const element = { onPress: handlePress, disabled, props, accessibilityLabel: null, style: null, children: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (hasRequestedToSpeak) {
    let stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  element.accessibilityLabel = stringResult;
  element.style = hasRequestedToSpeak ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
  element.children = <HandRequestSpeakIcon color={color} />;
  return jsx(VoicePanelAnimatedButtonWrapperDefault, {
    onPress: handlePress,
    disabled,
    props,
    accessibilityLabel: null,
    style: null,
    children: null,
  });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRaiseHandButton.tsx");

export default function RaiseHandButton(arg0) {
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, props, wrapperSpecs };
    tmp2 = <RaiseHandButtonInner channel={stateFromStores} props={props} wrapperSpecs={wrapperSpecs} />;
  }
  return tmp2;
}
