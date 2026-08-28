// discord_app/modules/instant_invite/native/components/openInstantInviteActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import encodeProperties from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj.impressionName = encodeProperties.ImpressionNames.GUILD_INVITE;
  obj.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(asyncRequireImpl(9855, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};