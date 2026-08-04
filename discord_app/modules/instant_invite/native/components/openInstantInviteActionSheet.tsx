// discord_app/modules/instant_invite/native/components/openInstantInviteActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  let obj = importDefault(4161);
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  obj = {};
  const merged = Object.assign(invite_channel_id);
  obj.impressionName = require(503) /* encodeProperties */.ImpressionNames.GUILD_INVITE;
  obj.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(require(1959) /* asyncRequireImpl */(8361, dependencyMap.paths), combined, obj, invite_channel_id.stackingBehavior);
};