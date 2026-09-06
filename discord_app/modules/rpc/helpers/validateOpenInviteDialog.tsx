// discord_app/modules/rpc/helpers/validateOpenInviteDialog.tsx
import RPCErrorDefault from "../RPCError.tsx";
import canViewInviteModal from "../../instant_invite/canViewInviteModal.tsx";
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
const TransportTypes = fn(4465).TransportTypes;
const RPCErrors = fn(1074).RPCErrors;
const FramesConstants = fn(9511);
({ asLaunched: closure_9, EmbeddedSurfaceType: c10 } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  if (socket.source.type !== TransportTypes.POST_MESSAGE) {
    let obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const _HermesInternal3 = HermesInternal;
    let tmp36 = RPCErrorDefault;
    tmp36 = new tmp36(obj, 'command not available from "' + socket.source.type + '" transport');
    throw tmp36;
  } else {
    const tmp46 = React7(FramesStore.getFrameByIframeId(socket.source.iframeId));
    if (null != tmp46) {
      const surface = tmp46.surface;
      const type = surface.type;
      if (constants.MAIN === type) {
        obj = { frame: tmp46, channel: "Array", guild: "isArray" };
        return obj;
      } else if (tmp23.APP_CHANNEL === type) {
        const obj1 = {
          frame: tmp46,
          channel: ChannelStore.getChannel(surface.channelId),
          guild: GuildStore.getGuild(surface.guildId),
        };
        return obj1;
      } else {
        const obj2 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp30 = new RPCErrorDefault(obj2, "Invalid channel");
        throw tmp30;
      }
    } else {
      const obj9 = getCurrentEmbeddedActivityChannelDefault();
      if (null == obj9) {
        const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp21 = new RPCErrorDefault(obj3, "Invalid channel");
        throw tmp21;
      } else {
        const guild = GuildStore.getGuild(obj9.getGuildId());
        if (null == guild) {
          const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
          let tmp48Result = RPCErrorDefault;
          const _HermesInternal2 = HermesInternal;
          tmp48Result = new tmp48Result(obj4, "Invalid guild " + obj9.getGuildId());
          throw tmp48Result;
        } else {
          if (obj10.canViewInviteModal(PermissionStore, guild, obj9)) {
            const obj5 = { frame: "r", channel: obj9, guild };
            return obj5;
          } else {
            obj = { errorCode: RPCErrors.INVALID_PERMISSIONS };
            const _HermesInternal = HermesInternal;
            let tmp = RPCErrorDefault;
            tmp = new tmp(obj, "No invite permissions for " + obj9.id);
            throw tmp;
          }
          obj10 = canViewInviteModal;
        }
      }
    }
  }
};
