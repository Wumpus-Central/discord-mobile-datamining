// discord_app/modules/guild/usePostableChannelCount.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
let closure_4 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default function useSendMessageChannelCount(arg0) {
  _require = arg0;
  let items = [GuildChannelStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let items = GuildChannelStore.getChannels(closure_0)[closure_4];
      if (items == null) {
        items = [];
      }
      return items;
    },
    items1,
  );
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) =>
      PermissionStore.can(BigFlagUtilsAll.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel.channel),
    ).length;
  }
  return num;
}
