// discord_app/modules/stage_channels/LiveStageNotificationsUtils.tsx
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = function useCanSendStageStartNotification(channel) {
  _require = channel;
  const items = [PermissionStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MENTION_EVERYONE, tmp);
      }
      return canResult;
    },
    items1,
  );
};
export const useDefaultSendStartStageNotificationToggle = function useDefaultSendStartStageNotificationToggle(
  guild_id,
) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildMemberCountStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(
    items,
    () => GuildMemberCountStore.getMemberCount(guild_id),
    items1,
  );
  let tmp3 = null == guild_id;
  if (!tmp3) {
    let tmp4 = null == stateFromStores;
    if (!tmp4) {
      tmp4 = stateFromStores > 50000;
    }
    tmp3 = !tmp4;
  }
  return tmp3;
};
