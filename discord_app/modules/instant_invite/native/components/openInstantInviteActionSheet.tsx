// discord_app/modules/instant_invite/native/components/openInstantInviteActionSheet.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE;
  obj.impressionProperties = {
    invite_channel_id: invite_channel_id.channel.id,
    invite_guild_id: invite_channel_id.channel.guild_id,
  };
  obj.openLazy(asyncRequireImpl(9828, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
  const tmp3 = asyncRequireImpl(9828, dependencyMap.paths);
}
