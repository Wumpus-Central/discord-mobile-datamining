// discord_app/modules/video_calls/native/components/ChannelVoiceChatModal.tsx
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../client_themes/native/useColorThemeBackground.tsx";
import GuildThemeGuildIdOverrideContextDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import ChannelVoiceChatDefault from "ChannelVoiceChat.tsx";
import ModalStackNavigatorDefault from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ThemedChannelVoiceChat(channel) {
  const tmp = useColorThemeBackgroundDefault();
  return jsx(native.ThemeContextProvider, {
    gradient: useColorThemeBackgroundDefault(),
    children: jsx(ChannelVoiceChatDefault, { channel: channel.channel, inModal: true }),
  });
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
  return (
    <tmp5
      screenKey="StageVoiceChat"
      title={str}
      titleIcon={jsx(channel(5403).StageIcon, { size: "sm" })}
      render={function render() {
        let guild_id = channel.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, {
          value: guild_id,
          children: <ThemedChannelVoiceChat channel={channel} />,
        });
      }}
    />
  );
}
