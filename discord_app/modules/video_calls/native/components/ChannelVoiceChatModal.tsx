// discord_app/modules/video_calls/native/components/ChannelVoiceChatModal.tsx
import contextDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import computeChannelNameDefault from "../../../channel/useChannelName.tsx";
import _modDef8666 from "../../../../actions/ChannelRTCActionCreators.tsx";
import _modDef9930 from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import _modDef10009 from "ChannelVoiceChat.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = computeChannelNameDefault(channel);
  const items = [channel.id];
  const effect = React.useEffect(() => {
    _modDef8666.updateChatOpen(channel.id, true);
    return () => {
      closure_1_1(closure_1_2[3]).updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(6892).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(contextDefault.Provider, { value: guild_id, children: jsx(_modDef10009, { channel, inModal: true }) });
  }} />;
};