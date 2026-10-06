// === Module 14339: validateOpenInviteDialog ===

// Module 14339 (validateOpenInviteDialog)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 5323 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import RPCErrorDefault from "RPCError" /* 9059 */;
import canViewInviteModal from "canViewInviteModal" /* 9298 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14326 */;
import FramesStore from "FramesStore" /* 9000 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const asLaunched = FramesConstants.asLaunched;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  if (socket.source.type !== TransportTypes.POST_MESSAGE) {
    const _HermesInternal3 = HermesInternal;
    const self9 = this;
    const self10 = this;
    const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp28 = RPCErrorDefault;
    const tmp282 = new tmp28(obj2, "command not available from \"" + socket.source.type + "\" transport");
    throw tmp282;
  } else {
    const tmp36 = asLaunched(FramesStore.getFrameByIframeId(socket.source.iframeId));
    if (null != tmp36) {
      const surface = tmp36.surface;
      const type = surface.type;
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN === type) {
        return { frame: tmp36, channel: "Array", guild: "parent" };
      } else {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            const self7 = this;
            const self8 = this;
            const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
            const tmp22 = new RPCErrorDefault(obj4, "Invalid channel");
            throw tmp22;
          }
        }
        const obj5 = { frame: tmp36, channel: ChannelStore.getChannel(surface.channelId), guild: GuildStore.getGuild(surface.guildId) };
        return obj5;
      }
    } else {
      const obj9 = getCurrentEmbeddedActivityChannelDefault();
      if (null == obj9) {
        const self5 = this;
        const self6 = this;
        const obj6 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp15 = new RPCErrorDefault(obj6, "Invalid channel");
        throw tmp15;
      } else {
        const guild = GuildStore.getGuild(obj9.getGuildId());
        if (null == guild) {
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const obj7 = { errorCode: RPCErrors.INVALID_CHANNEL };
          const tmp38Result = RPCErrorDefault;
          const tmp38Result1 = new tmp38Result(obj7, "Invalid guild " + obj9.getGuildId());
          throw tmp38Result1;
        } else {
          const obj10 = canViewInviteModal;
          if (obj10.canViewInviteModal(PermissionStore, guild, obj9)) {
            return { frame: "r", channel: obj9, guild };
          } else {
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const obj = { errorCode: RPCErrors.INVALID_PERMISSIONS };
            const tmp = RPCErrorDefault;
            const tmp5 = new tmp(obj, "No invite permissions for " + obj9.id);
            throw tmp5;
          }
        }
      }
    }
  }
};