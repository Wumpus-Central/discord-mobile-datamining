// discord_app/modules/guild_progress/native/components/GuildProgressItem.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ icon: { width: 32, height: 32 } });
const result = require("obj132").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  guild = guild.guild;
  let completed;
  let obj = guild(completed[3]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  obj = { uri: null };
  const tmp = callback();
  const tmp3 = totalSteps;
  obj[0] = numFinished(completed[6]);
  obj[1] = obj;
  obj[2] = tmp.icon;
  const intl = guild(completed[7]).intl;
  obj[3] = intl.string(guild(completed[7]).t["J2+r16"]);
  obj[4] = completed;
  let fn;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => totalSteps(numFinished(completed[8]), { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  obj[5] = fn;
  return tmp3(numFinished(completed[4]), obj);
};