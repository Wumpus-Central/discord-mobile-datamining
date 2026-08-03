// === Module 11800: GuildProgressItem ===

// Module 11800 (GuildProgressItem)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ icon: { width: 32, height: 32 } });
const result = require("createCacheKey").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  guild = guild.guild;
  let numFinished;
  let completed;
  let totalSteps;
  let obj = guild(completed[3]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  totalSteps = iOSCompletionStates.totalSteps;
  obj = {
    onPress() {
      if (!completed) {
        const progress = numFinished(completed[5]).createProgress(guild.id);
        const obj = numFinished(completed[5]);
      }
      guild(completed[3]).openActionSheet(guild);
    },
    source: null,
    iconStyle: null,
    title: null,
    isCompleted: null,
    renderEndComponent: null,
    fullWidth: true
  };
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