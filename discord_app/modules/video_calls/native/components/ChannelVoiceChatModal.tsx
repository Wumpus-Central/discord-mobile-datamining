// discord_app/modules/video_calls/native/components/ChannelVoiceChatModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../../client_themes/native/useColorThemeBackground.tsx";
import reactDefault from "../../../guild_themes/native/GuildThemeGuildIdOverrideContext.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import ChannelVoiceChatDefault from "ChannelVoiceChat.tsx";
import ModalStackNavigatorDefault from "../../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(5);
      channel = channel.channel;
      const tmp5 = useColorThemeBackgroundDefault();
      if (cResult[0] !== channel) {
        const tmp8 = jsx(ChannelVoiceChatDefault, { channel, inModal: true });
        cResult[0] = channel;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        let tmp9;
        if (cResult[3] === tmp6) {
          tmp9 = cResult[4];
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
      channel = channel.channel;
      const ThemeContextProvider = native.ThemeContextProvider;
      return <ThemeContextProvider gradient={useColorThemeBackgroundDefault()}>{null}</ThemeContextProvider>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp12;
      let tmp6;
      let tmp7;
      let tmp9;
      let obj = channel(576);
      const cResult = obj.c(9);
      const tmp = channel;
      channel = channel.channel;
      const tmp5 = useChannelNameDefault(channel);
      if (cResult[0] !== channel.id) {
        const fn = function o() {
          let id;
          let obj = ChannelRTCActionCreatorsDefault;
          obj.updateChatOpen(channel.id, true);
          return () => {
            const obj = ChannelRTCActionCreatorsDefault;
            obj.updateChatOpen(id.id, false);
          };
        };
        const items = [channel.id];
        cResult[0] = channel.id;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      let str = tmp5;
      if (tmp5 == null) {
        str = "";
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = jsx(tmp(5888).StageIcon, { size: "sm" });
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== channel) {
        const fn2 = function p() {
          let guild_id = channel.guild_id;
          const Provider = reactDefault.Provider;
          if (guild_id == null) {
            guild_id = null;
          }
          return (
            <Provider value={guild_id}>
              <closure_5 channel={channel} />
            </Provider>
          );
        };
        cResult[4] = channel;
        cResult[5] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === str) {
        let tmp13;
        if (cResult[7] === tmp12) {
          tmp13 = cResult[8];
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
    }
  : (channel) => {
      channel = channel.channel;
      const tmp2 = useChannelNameDefault(channel);
      const items = [channel.id];
      const effect = react.useEffect(() => {
        let id;
        let obj = ChannelRTCActionCreatorsDefault;
        obj.updateChatOpen(channel.id, true);
        return () => {
          const obj = ChannelRTCActionCreatorsDefault;
          obj.updateChatOpen(id.id, false);
        };
      }, items);
      let str = tmp2;
      ModalStackNavigatorDefault;
      if (tmp2 == null) {
        str = "";
      }
      return (
        <tmp5
          screenKey="StageVoiceChat"
          title={str}
          titleIcon={jsx(channel(5888).StageIcon, { size: "sm" })}
          render={function render() {
            let guild_id = channel.guild_id;
            const Provider = reactDefault.Provider;
            if (guild_id == null) {
              guild_id = null;
            }
            return (
              <Provider value={guild_id}>
                <closure_5 channel={channel} />
              </Provider>
            );
          }}
        />
      );
    };
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelVoiceChatModal.tsx");

export default tmp2;
