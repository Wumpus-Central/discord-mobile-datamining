// === Module 9094: openInstantInviteActionSheet ===

// Module 9094 (openInstantInviteActionSheet)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  const obj = ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  const obj2 = {};
  const merged = Object.assign(invite_channel_id);
  obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE;
  obj2.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(asyncRequireImpl(9095, dependencyMap.paths), combined, obj2, invite_channel_id.stackingBehavior);
  const tmp3 = asyncRequireImpl(9095, dependencyMap.paths);
};