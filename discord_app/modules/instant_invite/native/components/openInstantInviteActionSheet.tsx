// discord_app/modules/instant_invite/native/components/openInstantInviteActionSheet.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  const tmp4 = asyncRequire(9502, dependencyMap.paths);
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  const obj = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE,
    impressionProperties: {
      invite_channel_id: invite_channel_id.channel.id,
      invite_guild_id: invite_channel_id.channel.guild_id,
    },
  };
  const merged = Object.assign(invite_channel_id);
  openLazy(tmp4, combined, obj, invite_channel_id.stackingBehavior);
}
