// === Module 14043: validateOpenInviteDialog ===

// Module 14043 (validateOpenInviteDialog)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8501 */;
import RPCErrorDefault from "RPCError" /* 8770 */;
import canViewInviteModal from "canViewInviteModal" /* 9064 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14030 */;
import FramesStore from "FramesStore" /* 8499 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;

require = fn;
const TransportTypes = fn(4739).TransportTypes;
const RPCErrors = fn(1074).RPCErrors;
const asLaunched = fn(8500).asLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  if (socket.source.type !== TransportTypes.POST_MESSAGE) {
    const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
    const _HermesInternal3 = HermesInternal;
    const tmp362 = new RPCErrorDefault(obj2, "command not available from \"" + socket.source.type + "\" transport");
    throw tmp362;
  } else {
    const tmp46 = asLaunched(FramesStore.getFrameByIframeId(socket.source.iframeId));
    if (null != tmp46) {
      const surface = tmp46.surface;
      const type = surface.type;
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
        const obj3 = { frame: tmp46, channel: "Array", guild: "isArray" };
        return obj3;
      } else {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
            const tmp30 = new RPCErrorDefault(obj4, "Invalid channel");
            throw tmp30;
          }
        }
        const obj5 = { frame: tmp46, channel: ChannelStore.getChannel(surface.channelId), guild: GuildStore.getGuild(surface.guildId) };
        return obj5;
      }
    } else {
      const obj9 = getCurrentEmbeddedActivityChannelDefault();
      if (null == obj9) {
        const obj6 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp21 = new RPCErrorDefault(obj6, "Invalid channel");
        throw tmp21;
      } else {
        const guild = GuildStore.getGuild(obj9.getGuildId());
        if (null == guild) {
          const obj7 = { errorCode: RPCErrors.INVALID_CHANNEL };
          const _HermesInternal2 = HermesInternal;
          const tmp48Result1 = new RPCErrorDefault(obj7, "Invalid guild " + obj9.getGuildId());
          throw tmp48Result1;
        } else {
          if (obj10.canViewInviteModal(PermissionStore, guild, obj9)) {
            const obj8 = { frame: "r", channel: obj9, guild };
            return obj8;
          } else {
            const obj = { errorCode: RPCErrors.INVALID_PERMISSIONS };
            const _HermesInternal = HermesInternal;
            const tmp7 = new RPCErrorDefault(obj, "No invite permissions for " + obj9.id);
            throw tmp7;
          }
          obj10 = canViewInviteModal;
        }
      }
    }
  }
};