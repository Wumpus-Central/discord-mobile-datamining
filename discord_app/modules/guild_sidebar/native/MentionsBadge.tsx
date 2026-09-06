// discord_app/modules/guild_sidebar/native/MentionsBadge.tsx
import native from "../../../design/void/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(native.Badge, { value, isMentionLowImportance });
}
