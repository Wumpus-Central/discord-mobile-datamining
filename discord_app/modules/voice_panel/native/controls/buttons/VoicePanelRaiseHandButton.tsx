// === Module 19727: VoicePanelRaiseHandButton ===

// Module 19727 (VoicePanelRaiseHandButton)
import util from "util" /* 1113 */;
import HandRequestSpeakIcon2 from "HandRequestSpeakIcon" /* 11328 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import useRaiseHandControlDefault from "useRaiseHandControl" /* 12067 */;
import HandRequestDenyIcon from "HandRequestDenyIcon" /* 12073 */;
import VoicePanelStyles from "VoicePanelStyles" /* 19710 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 19711 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;

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
  return jsx(VoicePanelAnimatedButtonWrapperDefault, { onPress: handlePress, disabled, props, accessibilityLabel: null, style: null, children: null });
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
};