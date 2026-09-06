// discord_app/modules/home_drawer/native/subtitles/StreamingSubtitle.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/StreamingSubtitle.tsx");

export default function StreamingSubtitle(arg0) {
  ({ guildId, streamingUser } = arg0);
  let obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  obj = { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) };
  obj.children = intl.format(util.t.k5IKep, obj);
  return jsx(Text_Text.Text, { username: NicknameUtilsDefault.getName(guildId, null, streamingUser) });
}
