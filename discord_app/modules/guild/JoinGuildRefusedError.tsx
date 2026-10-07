// === Module 6730: JoinGuildRefusedError ===

// Module 6730 (JoinGuildRefusedError)
import size from "module_2" /* 2 */;

const prototype = function JoinGuildRefusedError() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.name = "JoinGuildRefusedError";
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/guild/JoinGuildRefusedError.tsx");

export const JoinGuildRefusedError = prototype;
export const ignoreJoinGuildRefused = function ignoreJoinGuildRefused(arg0) {
  if (!(arg0 instanceof prototype)) {
    throw arg0;
  }
};