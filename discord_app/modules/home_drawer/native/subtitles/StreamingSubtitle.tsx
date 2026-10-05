// discord_app/modules/home_drawer/native/subtitles/StreamingSubtitle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let obj3;
      let streamingUser;
      const obj = react2;
      const cResult = obj.c(5);
      ({ guildId, streamingUser } = arg0);
      if (cResult[0] === guildId) {
        let tmp4;
        let tmp6;
        if (cResult[1] === streamingUser) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const tmp8 = jsx(Text_Text.Text, {
            variant: "text-xs/medium",
            color: "text-voice-connected",
            lineClamp: 1,
            children: tmp4,
          });
          cResult[3] = tmp4;
          cResult[4] = tmp8;
          tmp6 = tmp8;
        } else {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const intl = intl2.intl;
      const format = intl.format;
      const obj4 = { username: obj3.getName(guildId, null, streamingUser) };
      const k5IKep = intl2.t.k5IKep;
      obj3 = NicknameUtilsDefault;
      const formatResult = format(k5IKep, obj4);
      cResult[0] = guildId;
      cResult[1] = streamingUser;
      cResult[2] = formatResult;
      tmp4 = formatResult;
    }
  : (arg0) => {
      let guildId;
      let obj3;
      let streamingUser;
      ({ guildId, streamingUser } = arg0);
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      const format = intl.format;
      const obj2 = { username: obj3.getName(guildId, null, streamingUser) };
      const k5IKep = intl2.t.k5IKep;
      obj3 = NicknameUtilsDefault;
      return (
        <Text variant="text-xs/medium" color="text-voice-connected" lineClamp={1}>
          {format(k5IKep, obj2)}
        </Text>
      );
    };
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default tmp3;
