// discord_app/modules/guild/usePostableChannelCount.tsx
import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_4 } from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  const _require = arg0;
  let items = [comparator];
  const items1 = [arg0];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let items = outer1_3.getChannels(closure_0)[outer1_4];
    if (items == null) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => getUncachedChannelPermissions.can(callback(table[4]).combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel.channel)).length;
  }
  return num;
};