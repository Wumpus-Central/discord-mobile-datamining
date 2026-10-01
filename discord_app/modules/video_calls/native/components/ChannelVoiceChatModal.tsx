// === Module 10623: ChannelVoiceChatModal ===

// Module 10623 (ChannelVoiceChatModal)
import native from "native" /* 4569 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4717 */;
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 4747 */;
import useChannelNameDefault from "useChannelName" /* 4998 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5046 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 9731 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10580 */;
import noop from "module_19" /* 19 */;

require = fn;
function ThemedChannelVoiceChat(channel) {
  const tmp = useColorThemeBackgroundDefault();
  return jsx(native.ThemeContextProvider, { gradient: useColorThemeBackgroundDefault(), children: jsx(ChannelVoiceChatDefault, { channel: channel.channel, inModal: true }) });
}
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(5595).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: <ThemedChannelVoiceChat channel={channel} /> });
  }} />;
};