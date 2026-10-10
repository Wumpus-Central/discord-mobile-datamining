// === Module 14720: validateOpenInviteDialog ===

// Module 14720 (validateOpenInviteDialog)
import canViewInviteModal from "canViewInviteModal" /* 8532 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 10809 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10810 */;
import RPCErrorDefault from "RPCError" /* 10936 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 10943 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14696 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;

require = fn;
const RPCErrors = fn(1085).RPCErrors;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  if (isPostMessageSocketDefault(socket)) {
    ({ source, surface } = socket.context);
    const tmp11 = getChannelIdForEmbeddedSurfaceDefault(surface);
    const type = source.type;
    if (EmbeddedAppTypes.EmbeddedContextSourceType.FRAME === type) {
      const obj2 = { frameId: source.frameId, channel: null, guild: null };
      let channel;
      if (null != tmp11) {
        channel = ChannelStore.getChannel(tmp11);
      }
      obj2.channel = channel;
      obj2.guild = GuildStore.getGuild(getGuildIdForEmbeddedSurfaceDefault(surface));
      return obj2;
    } else if (EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY === type) {
      let channel1;
      if (null != tmp11) {
        channel1 = ChannelStore.getChannel(tmp11);
      }
      if (null == channel1) {
        const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp48 = new RPCErrorDefault(obj3, "Invalid channel");
        throw tmp48;
      } else {
        guild = GuildStore.getGuild(channel1.getGuildId());
        if (null == guild) {
          const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
          const _HermesInternal3 = HermesInternal;
          const tmpResult3 = new RPCErrorDefault(obj4, "Invalid guild " + channel1.getGuildId());
          throw tmpResult3;
        } else {
          if (tmp12Result.canViewInviteModal(PermissionStore, guild, channel1)) {
            const obj5 = { frameId: "r", channel: channel1, guild };
            return obj5;
          } else {
            const obj6 = { errorCode: RPCErrors.INVALID_PERMISSIONS };
            const _HermesInternal2 = HermesInternal;
            const tmpResult11 = new RPCErrorDefault(obj6, "No invite permissions for " + channel1.id);
            throw tmpResult11;
          }
          tmp12Result = canViewInviteModal;
        }
      }
    } else if (EmbeddedAppTypes.EmbeddedContextSourceType.INTERACTION === type) {
      const obj7 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp23 = new RPCErrorDefault(obj7, "Command not supported in interaction modals");
      throw tmp23;
    } else {
      const obj8 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp17 = new RPCErrorDefault(obj8, "Command not supported on this surface");
      throw tmp17;
    }
  } else {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    const tmpResult21 = new RPCErrorDefault(obj, "command not available from \"" + socket.source.type + "\" transport");
    throw tmpResult21;
  }
};