// discord_app/modules/guild/JoinGuildRefusedError.tsx
import size from "../../../_runtime/metro/00002__.js";

const prototype = function JoinGuildRefusedError(arg0) {
  const tmp2 = new tmp("joinGuild was refused and already showed the user an error", arg0, new.target);
  tmp2.name = "JoinGuildRefusedError";
  return tmp2;
}.prototype;
class prototype extends Error {}
const result = size.fileFinishedImporting("modules/guild/JoinGuildRefusedError.tsx");

export const JoinGuildRefusedError = prototype;
export function ignoreJoinGuildRefused(arg0) {
  if (!(arg0 instanceof prototype)) {
    throw arg0;
  }
}
