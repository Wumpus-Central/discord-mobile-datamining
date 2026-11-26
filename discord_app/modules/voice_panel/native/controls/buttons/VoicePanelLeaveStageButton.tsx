// === Module 19585: VoicePanelLeaveStageButton ===

// Module 19585 (VoicePanelLeaveStageButton)
import StageChannelActionCreators from "StageChannelActionCreators" /* 7839 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(stateFromStores(11781)).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const tmp = stateFromStores;
  const voicePanelButtonStyles = channelId(19564).useVoicePanelButtonStyles(wrapperSpecs);
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
    const intl = tmp3(1112).intl;
    element.accessibilityLabel = intl.string(tmp3(1112).t.ezLpY6);
    element.style = voicePanelButtonStyles.iconBg;
    const obj3 = { color: voicePanelButtonStyles.iconFill.color };
    element.children = jsx(tmp3(10317).GroupArrowDownIcon, { color: voicePanelButtonStyles.iconFill.color });
    tmp6 = jsx(tmp(19565), {
      onPress() {
          return StageChannelActionCreators.audienceAckRequestToSpeak(stateFromStores, true);
        },
      props,
      accessibilityLabel: null,
      style: null,
      children: null
    });
    const tmpResult = tmp(19565);
  }
  return tmp6;
};