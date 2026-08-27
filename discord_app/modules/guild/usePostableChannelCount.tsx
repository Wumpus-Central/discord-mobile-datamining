// === Module 16233: useSendMessageChannelCount ===

// Module 16233 (useSendMessageChannelCount)
import closure_3 from "comparator" /* 1982 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_4 } from "comparator" /* 1982 */;
import closure_5 from "getUncachedChannelPermissions" /* 4089 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  const _require = arg0;
  let items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let items = closure_1_3.getChannels(closure_0)[closure_1_4];
    if (items == null) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => closure_5.can(callback(table[4]).combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel.channel)).length;
  }
  return num;
};