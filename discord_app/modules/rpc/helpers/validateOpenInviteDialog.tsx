// discord_app/modules/rpc/helpers/validateOpenInviteDialog.tsx
import canViewInviteModal from "../../instant_invite/canViewInviteModal.tsx";
import prototypeDefault from "../RPCError.tsx";
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel.tsx";
import closure_3 from "../../frames/FramesStore.tsx";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/GuildStore.tsx";
import closure_6 from "../../../stores/PermissionStore.tsx";
import { TransportTypes } from "../Constants.tsx";
import { RPCErrors } from "../../../Constants.tsx";
import FrameLayoutModes from "../../frames/FramesConstants.tsx";

require = arg1;
({ asLaunched: c9, EmbeddedSurfaceType: c10 } = FrameLayoutModes);
const result = require("set").fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  if (socket.source.type !== TransportTypes.POST_MESSAGE) {
    let obj = { errorCode: null };
    obj[0] = RPCErrors.INVALID_COMMAND;
    const _HermesInternal3 = HermesInternal;
    let tmp36 = prototypeDefault;
    tmp36 = new tmp36(obj, "command not available from \"" + socket.source.type + "\" transport");
    throw tmp36;
  } else {
    const tmp46 = callback(frameByIframeId.getFrameByIframeId(socket.source.iframeId));
    if (null != tmp46) {
      const surface = tmp46.surface;
      const type = surface.type;
      if (constants.MAIN === type) {
        obj = { frame: null, channel: "Array", guild: "paddingHorizontal" };
        obj[0] = tmp46;
        return obj;
      } else if (tmp23.APP_CHANNEL === type) {
        obj1 = { frame: null, channel: null, guild: null };
        obj1[0] = tmp46;
        obj1[1] = channel.getChannel(surface.channelId);
        obj1[2] = store.getGuild(surface.guildId);
        return obj1;
      } else {
        const obj2 = { errorCode: null };
        obj2[0] = RPCErrors.INVALID_CHANNEL;
        const tmp30 = new prototypeDefault(obj2, "Invalid channel");
        throw tmp30;
      }
    } else {
      const obj9 = getCurrentEmbeddedActivityChannelDefault();
      if (null == obj9) {
        const obj3 = { errorCode: null };
        obj3[0] = RPCErrors.INVALID_CHANNEL;
        const tmp21 = new tmp48(10896)(obj3, "Invalid channel");
        throw tmp21;
      } else {
        const guild = store.getGuild(obj9.getGuildId());
        if (null == guild) {
          const obj4 = { errorCode: null };
          obj4[0] = RPCErrors.INVALID_CHANNEL;
          let tmp48Result = tmp48(10896);
          const _HermesInternal2 = HermesInternal;
          tmp48Result = new tmp48Result(obj4, "Invalid guild " + obj9.getGuildId());
          throw tmp48Result;
        } else {
          if (obj10.canViewInviteModal(closure_6, guild, obj9)) {
            const obj5 = { frame: "r", channel: "flex", guild: null };
            obj5[1] = obj9;
            obj5[2] = guild;
            return obj5;
          } else {
            obj = { errorCode: null };
            obj[0] = RPCErrors.INVALID_PERMISSIONS;
            const _HermesInternal = HermesInternal;
            let tmp = tmp48(10896);
            tmp = new tmp(obj, "No invite permissions for " + obj9.id);
            throw tmp;
          }
          obj10 = canViewInviteModal;
        }
      }
    }
  }
};