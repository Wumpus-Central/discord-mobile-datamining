// discord_app/modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
import Constants from "../../Constants.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import GuildScheduledEventStore from "GuildScheduledEventStore.tsx";
import canViewInviteModal from "../instant_invite/canViewInviteModal.tsx";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function canEveryoneRoleViewEvent(guildEvent) {
  let obj;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [ChannelStore];
    tmp = items;
  }
  [obj] = tmp;
  let tmp3 = guildEvent;
  if ("entity_type" in guildEvent) {
    const obj4 = { entityType: null, channelId: null };
    ({ entity_type: obj2.entityType, channel_id: obj2.channelId } = guildEvent);
    tmp3 = obj4;
  }
  if (tmp3.entityType === constants.EXTERNAL) {
    return true;
  } else {
    const channel = obj.getChannel(tmp4);
    let canEveryoneRoleResult = null != channel;
    if (canEveryoneRoleResult) {
      const obj3 = PermissionUtilsAll;
      canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.VIEW_CHANNEL, channel);
    }
    return canEveryoneRoleResult;
  }
}
function isGuildEventInvitable(guildEvent) {
  let items;
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let tmp = items;
  if (items === undefined) {
    items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
    tmp = items;
  }
  [obj, obj2, obj3, obj4] = tmp;
  if (isGuildEventEnded(guildEvent)) {
    return false;
  } else {
    let defaultChannel;
    const channel_id = guildEvent.channel_id;
    const guild_id = guildEvent.guild_id;
    if (guildEvent.entity_type === constants.EXTERNAL) {
      defaultChannel = obj.getDefaultChannel(guildEvent.guild_id);
    } else {
      defaultChannel = obj2.getChannel(channel_id);
    }
    const guild = obj3.getGuild(guild_id);
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
const isGuildEventEnded = GuildScheduledEventStore.isGuildEventEnded;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp10;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
        cResult[0] = items;
        first = items;
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
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp9, tmp10);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const items = [GuildChannelStore, ChannelStore, GuildStore, StageInstanceStore];
          return isGuildEventInvitable(closure_0, items);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx");

export default tmp2;
export { canEveryoneRoleViewEvent };
export { isGuildEventInvitable };
