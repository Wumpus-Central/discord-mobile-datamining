// === Module 9773: useCanInviteForGuildEvent ===

// Module 9773 (useCanInviteForGuildEvent)
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import canViewInviteModal from "canViewInviteModal" /* 9774 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function canEveryoneRoleViewEvent(guildEvent) {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [ChannelStore];
    tmp = items;
  }
  [obj] = tmp;
  let tmp3 = guildEvent;
  if ("entity_type" in guildEvent) {
    obj = { entityType: null, channelId: null };
    ({ entity_type: obj2.entityType, channel_id: obj2.channelId } = guildEvent);
    tmp3 = obj;
  }
  if (tmp3.entityType === constants.EXTERNAL) {
    return true;
  } else {
    const channel = obj.getChannel(tmp4);
    let canEveryoneRoleResult = null != channel;
    if (canEveryoneRoleResult) {
      canEveryoneRoleResult = PermissionUtilsAll.canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
    }
    return canEveryoneRoleResult;
  }
}
function isGuildEventInvitable(guildEvent) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
    tmp = items;
  }
  [obj, obj2, obj3, obj4] = tmp;
  if (isGuildEventEnded(guildEvent)) {
    return false;
  } else {
    const channel_id = guildEvent.channel_id;
    if (guildEvent.entity_type === constants.EXTERNAL) {
      let defaultChannel = obj.getDefaultChannel(guildEvent.guild_id);
    } else {
      defaultChannel = obj2.getChannel(channel_id);
    }
    const guild = obj3.getGuild(guildEvent.guild_id);
    const stageInstanceByChannel = obj4.getStageInstanceByChannel(channel_id);
    const obj5 = canViewInviteModal;
    let canViewInviteModalResult = obj5.canViewInviteModal(PermissionStore, guild, defaultChannel, stageInstanceByChannel);
    if (canViewInviteModalResult) {
      let tmp17 = null != defaultChannel;
      if (tmp17) {
        const items1 = [obj2];
        tmp17 = canEveryoneRoleViewEvent(guildEvent, items1);
      }
      canViewInviteModalResult = tmp17;
    }
    return canViewInviteModalResult;
  }
}
const isGuildEventEnded = fn(7526).isGuildEventEnded;
const constants = fn(1963).GuildScheduledEventEntityTypes;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default function useCanInviteForGuildEvent(arg0) {
  _require = arg0;
  let items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
    return isGuildEventInvitable(closure_0, items);
  }, items1);
};
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };