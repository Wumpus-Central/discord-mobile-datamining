// === Module 9703: canEveryoneRoleViewEvent ===

// Module 9703 (canEveryoneRoleViewEvent)
import applyOverwritesAll from "applyOverwrites" /* 4096 */;
import canViewInviteModal from "canViewInviteModal" /* 9704 */;
import closure_3 from "handleStageInstanceCreateOrUpdate" /* 1392 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "comparator" /* 1982 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import closure_7 from "getUncachedChannelPermissions" /* 4091 */;
import { isGuildEventEnded } from "scheduledEventSort" /* 7239 */;
import { GuildScheduledEventEntityTypes as closure_9 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1393 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
function canEveryoneRoleViewEvent(guildEvent, items1) {
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_4];
    tmp = items;
  }
  [obj] = tmp;
  let tmp3 = guildEvent;
  if ("entity_type" in guildEvent) {
    obj = { entityType: null, channelId: null };
    ({ entity_type: obj2[0], channel_id: obj2[1] } = guildEvent);
    tmp3 = obj;
  }
  if (tmp3.entityType === constants.EXTERNAL) {
    return true;
  } else {
    const channel = obj.getChannel(tmp4);
    let canEveryoneRoleResult = null != channel;
    if (canEveryoneRoleResult) {
      canEveryoneRoleResult = applyOverwritesAll.canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
      const obj3 = applyOverwritesAll;
    }
    return canEveryoneRoleResult;
  }
}
function isGuildEventInvitable(guildEvent) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_5, closure_4, closure_6, closure_3];
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
    let canViewInviteModalResult = obj5.canViewInviteModal(closure_7, guild, defaultChannel, stageInstanceByChannel);
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
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default function useCanInviteForGuildEvent(arg0) {
  const _require = arg0;
  let items = [closure_5, closure_4, closure_6, closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_5, closure_1_4, closure_1_6, closure_1_3];
    return closure_1_12(closure_0, items);
  }, items1);
};
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };