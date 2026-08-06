// discord_app/modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { isGuildEventEnded } from "scheduledEventSort";
import { GuildScheduledEventEntityTypes as closure_9 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { canViewInviteModal } from "../instant_invite/canViewInviteModal.tsx";

const require = arg1;
function canEveryoneRoleViewEvent(guildEvent, items1) {
  let obj;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [ensureGuildLoaded];
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
      canEveryoneRoleResult = importAll(3917).canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
      const obj3 = importAll(3917);
    }
    return canEveryoneRoleResult;
  }
}
function isGuildEventInvitable(guildEvent) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [comparator, ensureGuildLoaded, createGuildRecordFromRust, handleStageInstanceCreateOrUpdate];
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
    let canViewInviteModalResult = obj5.canViewInviteModal(getUncachedChannelPermissions, guild, defaultChannel, stageInstanceByChannel);
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
const result = require("comparator").fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default function useCanInviteForGuildEvent(arg0) {
  const _require = arg0;
  let items = [comparator, ensureGuildLoaded, createGuildRecordFromRust, handleStageInstanceCreateOrUpdate];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => {
    const items = [outer1_5, outer1_4, outer1_6, outer1_3];
    return outer1_12(closure_0, items);
  }, items1);
};
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };