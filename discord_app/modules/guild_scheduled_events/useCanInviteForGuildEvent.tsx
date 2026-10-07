// discord_app/modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import canViewInviteModal from "../instant_invite/canViewInviteModal.tsx";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

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
    ({ entity_type: obj2.entityType, channel_id: obj2.channelId } = guildEvent);
    tmp3 = { entityType: null, channelId: null };
    const obj4 = { entityType: null, channelId: null };
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
    guild = obj3.getGuild(guildEvent.guild_id);
    const stageInstanceByChannel = obj4.getStageInstanceByChannel(channel_id);
    const obj5 = canViewInviteModal;
    let canViewInviteModalResult = obj5.canViewInviteModal(
      PermissionStore,
      guild,
      defaultChannel,
      stageInstanceByChannel,
    );
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
const isGuildEventEnded = fn(7050).isGuildEventEnded;
const constants = fn(2057).GuildScheduledEventEntityTypes;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          const items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
          return isGuildEventInvitable(closure_0, items);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp9, tmp10);
    }
  : (arg0) => {
      _require = arg0;
      let items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          const items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
          return isGuildEventInvitable(closure_0, items);
        },
        items1,
      );
    };
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };
