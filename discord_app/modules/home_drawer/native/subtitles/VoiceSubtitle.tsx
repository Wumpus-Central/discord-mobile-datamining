// discord_app/modules/home_drawer/native/subtitles/VoiceSubtitle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guildId;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let mapped;
      let tmp5;
      let obj = guildId(576);
      const cResult = obj.c(7);
      guildId = guildId.guildId;
      const voiceUsers = guildId.voiceUsers;
      if (cResult[0] === guildId) {
        let tmp4;
        let tmp7;
        if (cResult[1] === voiceUsers) {
          tmp4 = cResult[2];
        }
        if (cResult[5] !== tmp4) {
          const tmp9 = jsx(guildId(4886).Text, {
            variant: "text-xs/medium",
            color: "text-voice-connected",
            lineClamp: 1,
            children: tmp4,
          });
          cResult[5] = tmp4;
          cResult[6] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
      if (cResult[3] !== guildId) {
        const fn = function l(arg0) {
          const obj = NicknameUtilsDefault;
          return obj.getName(guildId, null, arg0);
        };
        cResult[3] = guildId;
        cResult[4] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const intl = tmp(1126).intl;
      const format = intl.format;
      const obj3 = { users: mapped.join(", "), overflowCount: Math.max(voiceUsers.length - 2, 0) };
      const r1Vkoc = tmp(1126).t.r1Vkoc;
      const substr = voiceUsers.slice(0, 2);
      mapped = substr.map(tmp5);
      const formatResult = format(r1Vkoc, obj3);
      cResult[0] = guildId;
      cResult[1] = voiceUsers;
      cResult[2] = formatResult;
      tmp4 = formatResult;
    }
  : (arg0) => {
      let mapped;
      let voiceUsers;
      ({ guildId: require, voiceUsers } = arg0);
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      const format = intl.format;
      const obj2 = { users: mapped.join(", "), overflowCount: Math.max(voiceUsers.length - 2, 0) };
      const r1Vkoc = intl2.t.r1Vkoc;
      const substr = voiceUsers.slice(0, 2);
      mapped = substr.map((item) => {
        const obj = NicknameUtilsDefault;
        return obj.getName(require, null, item);
      });
      return (
        <Text variant="text-xs/medium" color="text-voice-connected" lineClamp={1}>
          {format(r1Vkoc, obj2)}
        </Text>
      );
    };
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default tmp3;
