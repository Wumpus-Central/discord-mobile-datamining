// discord_app/modules/video_calls/native/components/ChannelVoiceChatModal.tsx
import GuildThemeGuildIdOverrideContextDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import ChannelVoiceChatDefault from "ChannelVoiceChat.tsx";
import ModalStackNavigatorDefault from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  return (
    <tmp5
      screenKey="StageVoiceChat"
      title={str}
      titleIcon={jsx(channel(5097).StageIcon, { size: "sm" })}
      render={function render() {
        let guild_id = channel.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, {
          value: guild_id,
          children: jsx(ChannelVoiceChatDefault, { channel, inModal: true }),
        });
      }}
    />
  );
}
