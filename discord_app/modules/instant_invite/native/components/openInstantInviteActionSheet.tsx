// === Module 9938: openInstantInviteActionSheet ===

// Module 9938 (openInstantInviteActionSheet)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 500 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

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
  obj.openLazy(asyncRequireImpl(9939, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};