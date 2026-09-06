// discord_app/modules/home_drawer/native/subtitles/VoiceSubtitle.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  ({ guildId: require, voiceUsers } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  obj = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((item) => NicknameUtilsDefault.getName(require, null, item));
  obj.users = mapped.join(", ");
  obj.overflowCount = Math.max(voiceUsers.length - 2, 0);
  obj.children = intl.format(util.t.r1Vkoc, obj);
  return jsx(Text_Text.Text, { users: null, overflowCount: null });
}
