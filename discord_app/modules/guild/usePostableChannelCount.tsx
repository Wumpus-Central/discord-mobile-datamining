// === Module 15960: useSendMessageChannelCount ===

// Module 15960 (useSendMessageChannelCount)
import comparator from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_4 } from "comparator" /* 1980 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

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
    num = stateFromStores.filter((item, index) => closure_5.can(callback(table[4]).combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), item.channel)).length;
  }
  return num;
};