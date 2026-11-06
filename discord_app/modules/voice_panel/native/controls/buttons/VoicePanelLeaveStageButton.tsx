// === Module 19648: VoicePanelLeaveStageButton ===

// Module 19648 (VoicePanelLeaveStageButton)
import StageChannelActionCreators from "StageChannelActionCreators" /* 8036 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(stateFromStores(11380)).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const tmp = stateFromStores;
  const voicePanelButtonStyles = channelId(19625).useVoicePanelButtonStyles(wrapperSpecs);
  let tmp6 = null;
  if (null != stateFromStores) {
    const element = {
      onPress() {
          return StageChannelActionCreators.audienceAckRequestToSpeak(stateFromStores, true);
        },
      props,
      accessibilityLabel: null,
      style: null,
      children: null
    };
    const intl = tmp3(1113).intl;
    element.accessibilityLabel = intl.string(tmp3(1113).t.ezLpY6);
    element.style = voicePanelButtonStyles.iconBg;
    const obj3 = { color: voicePanelButtonStyles.iconFill.color };
    element.children = jsx(tmp3(12059).GroupArrowDownIcon, { color: voicePanelButtonStyles.iconFill.color });
    tmp6 = jsx(tmp(19626), {
      onPress() {
          return StageChannelActionCreators.audienceAckRequestToSpeak(stateFromStores, true);
        },
      props,
      accessibilityLabel: null,
      style: null,
      children: null
    });
    const tmpResult = tmp(19626);
  }
  return tmp6;
};