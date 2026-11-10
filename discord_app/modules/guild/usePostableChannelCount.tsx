// === Module 19214: usePostableChannelCount ===

// Module 19214 (usePostableChannelCount)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import GuildChannelStore from "GuildChannelStore" /* 5072 */;
import PermissionStore from "PermissionStore" /* 5074 */;

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(5072).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  _require = arg0;
  items = [GuildChannelStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    items = GuildChannelStore.getChannels(closure_0)[closure_4];
    if (items == null) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => PermissionStore.can(BigFlagUtilsAll.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel.channel)).length;
  }
  return num;
};