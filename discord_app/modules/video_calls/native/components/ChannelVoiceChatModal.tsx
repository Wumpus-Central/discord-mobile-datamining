// === Module 11128: ChannelVoiceChatModal ===

// Module 11128 (ChannelVoiceChatModal)
import native from "native" /* 5199 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5310 */;
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext" /* 5340 */;
import useChannelNameDefault from "useChannelName" /* 5776 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10264 */;
import ChannelVoiceChatDefault from "ChannelVoiceChat" /* 11129 */;
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
  items = [channel.id];
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
  return <tmp5 screenKey="StageVoiceChat" title={str} titleIcon={jsx(channel(8740).StageIcon, { size: "sm" })} render={function render() {
    let guild_id = channel.guild_id;
    if (guild_id == null) {
      guild_id = null;
    }
    return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, { value: guild_id, children: <ThemedChannelVoiceChat channel={channel} /> });
  }} />;
};