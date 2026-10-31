// === Module 16293: guildVoice ===

// Module 16293 (guildVoice)
import OAuth2Scopes from "OAuth2Scopes" /* 8910 */;
import RPCErrorDefault from "RPCError" /* 9333 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;

require = fn;
const RPC_EMBEDDED_APP_SCOPE = fn(6450).RPC_EMBEDDED_APP_SCOPE;
const Constants = fn(1072);
({ ChannelTypes: closure_7, Permissions: closure_8, RPCErrors: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/guildVoice.tsx");

export function isGuildVoiceSocket(socket) {
  const scopes = socket.authorization.scopes;
  const hasItem = scopes.has(OAuth2Scopes.OAuth2Scopes.RPC);
  let hasItem1 = !hasItem;
  if (!hasItem) {
    hasItem1 = !scopes.has(RPC_EMBEDDED_APP_SCOPE);
  }
  if (hasItem1) {
    hasItem1 = scopes.has(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER);
  }
  return hasItem1;
}
export function getGuildVoiceChannel(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  if (null != channel) {
    if (channel.type === constants.GUILD_VOICE) {
      if (null != GuildStore.getGuild(channel.guild_id)) {
        if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
          return channel;
        }
      }
    }
  }
  throw new RPCErrorDefault({ errorCode: constants3.INVALID_CHANNEL }, "Voice channel is unavailable");
}