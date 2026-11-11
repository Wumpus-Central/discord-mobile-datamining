// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx
import StageChannelActionCreators from "../../../../stage_channels/StageChannelActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelLeaveStageButton.tsx");

export default function LeaveStageButton(arg0) {
  let stateFromStores;
  ({ props, wrapperSpecs } = arg0);
  const channelId = noop.useContext(stateFromStores(11924)).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const tmp = stateFromStores;
  const voicePanelButtonStyles = channelId(19931).useVoicePanelButtonStyles(wrapperSpecs);
  let tmp6 = null;
  if (null != stateFromStores) {
    const element = {
      onPress() {
        return StageChannelActionCreators.audienceAckRequestToSpeak(stateFromStores, true);
      },
      props,
      accessibilityLabel: null,
      style: null,
      children: null,
    };
    const intl = tmp3(1113).intl;
    element.accessibilityLabel = intl.string(tmp3(1113).t.ezLpY6);
    element.style = voicePanelButtonStyles.iconBg;
    const obj3 = { color: voicePanelButtonStyles.iconFill.color };
    element.children = jsx(tmp3(12856).GroupArrowDownIcon, { color: voicePanelButtonStyles.iconFill.color });
    tmp6 = jsx(tmp(19932), {
      onPress() {
        return StageChannelActionCreators.audienceAckRequestToSpeak(stateFromStores, true);
      },
      props,
      accessibilityLabel: null,
      style: null,
      children: null,
    });
    const tmpResult = tmp(19932);
  }
  return tmp6;
}
