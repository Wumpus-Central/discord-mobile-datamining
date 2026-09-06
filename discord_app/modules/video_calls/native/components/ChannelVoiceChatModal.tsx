// === Module 10965: ChannelVoiceChatModal ===

// Module 10965 (ChannelVoiceChatModal)
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4443 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 10076 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10924 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default function ChannelVoiceChatModal(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const items = [channel.id];
  const effect = noop.useEffect(() => {
    ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
    return () => {
      ChannelRTCActionCreatorsDefault.updateChatOpen(id.id, false);
    };
  }, items);
  let str = tmp2;
  if (tmp2 == null) {
    str = "";
  }
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5097).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: jsx(ChannelVoiceChatDefault, { channel, inModal: true }) });
  }} />;
};