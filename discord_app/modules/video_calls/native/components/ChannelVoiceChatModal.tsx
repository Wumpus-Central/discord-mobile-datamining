// discord_app/modules/video_calls/native/components/ChannelVoiceChatModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../client_themes/native/useColorThemeBackground.tsx";
import GuildThemeGuildIdOverrideContextDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import ChannelVoiceChatDefault from "ChannelVoiceChat.tsx";
import ModalStackNavigatorDefault from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(5);
      channel = channel.channel;
      const tmp5 = useColorThemeBackgroundDefault();
      if (cResult[0] !== channel) {
        const obj2 = { channel, inModal: true };
        const tmp8 = jsx(ChannelVoiceChatDefault, { channel, inModal: true });
        cResult[0] = channel;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp6) {
          let tmp9 = cResult[4];
        }
        return tmp9;
      }
      const tmp10 = jsx(native.ThemeContextProvider, { gradient: tmp5, children: tmp6 });
      cResult[2] = tmp5;
      cResult[3] = tmp6;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (channel) => {
      const tmp = useColorThemeBackgroundDefault();
      return jsx(native.ThemeContextProvider, {
        gradient: useColorThemeBackgroundDefault(),
        children: jsx(ChannelVoiceChatDefault, { channel: channel.channel, inModal: true }),
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(9);
      channel = channel.channel;
      const tmp5 = useChannelNameDefault(channel);
      if (cResult[0] !== channel.id) {
        const fn = function o() {
          ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
          return () => {
            ChannelRTCActionCreatorsDefault.updateChatOpen(id.id, false);
          };
        };
        const items = [channel.id];
        cResult[0] = channel.id;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      let str = tmp5;
      if (tmp5 == null) {
        str = "";
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = jsx(tmp(5881).StageIcon, { size: "sm" });
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== channel) {
        const fn2 = function p() {
          let guild_id = channel.guild_id;
          if (guild_id == null) {
            guild_id = null;
          }
          return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, {
            value: guild_id,
            children: <closure_5 channel={channel} />,
          });
        };
        cResult[4] = channel;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === str) {
        if (cResult[7] === tmp12) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
      const tmp14 = jsx(ModalStackNavigatorDefault, {
        screenKey: "StageVoiceChat",
        title: str,
        titleIcon: tmp9,
        render: tmp12,
      });
      cResult[6] = str;
      cResult[7] = tmp12;
      cResult[8] = tmp14;
      tmp13 = tmp14;
      const obj = channel(576);
      tmp = channel;
    }
  : (channel) => {
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
          titleIcon={jsx(channel(5881).StageIcon, { size: "sm" })}
          render={function render() {
            let guild_id = channel.guild_id;
            if (guild_id == null) {
              guild_id = null;
            }
            return jsx(GuildThemeGuildIdOverrideContextDefault.Provider, {
              value: guild_id,
              children: <closure_5 channel={channel} />,
            });
          }}
        />
      );
    };
