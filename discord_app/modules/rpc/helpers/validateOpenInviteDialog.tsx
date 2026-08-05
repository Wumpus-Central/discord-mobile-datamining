// discord_app/modules/rpc/helpers/validateOpenInviteDialog.tsx
import map from "map";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { RPCErrors } from "ME";
import { canViewInviteModal } from "../../instant_invite/canViewInviteModal.tsx";
import { getCurrentEmbeddedActivityChannel } from "getCurrentEmbeddedActivityChannel.tsx";

const require = arg1;
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = { frame: null, channel: "Array", guild: "marginTop" };
    obj[0] = connectedFrame;
    return obj;
  } else {
    const obj6 = getCurrentEmbeddedActivityChannel();
    if (null == obj6) {
      obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_CHANNEL;
      const tmp22 = new tmp24(10515)(obj, "Invalid channel");
      throw tmp22;
    } else {
      guild = guild.getGuild(obj6.getGuildId());
      if (null == guild) {
        const obj1 = { errorCode: null };
        obj1[0] = RPCErrors.INVALID_CHANNEL;
        let tmp24Result = tmp24(10515);
        const _HermesInternal2 = HermesInternal;
        tmp24Result = new tmp24Result(obj1, "Invalid guild " + obj6.getGuildId());
        throw tmp24Result;
      } else {
        if (obj7.canViewInviteModal(getUncachedChannelPermissions, guild, obj6)) {
          const obj2 = { frame: "r", channel: "Path", guild: "TRANSPARENT" };
          obj2[1] = obj6;
          obj2[2] = guild;
          return obj2;
        } else {
          obj = { errorCode: null };
          obj[0] = RPCErrors.INVALID_PERMISSIONS;
          const _HermesInternal = HermesInternal;
          let tmp2 = tmp24(10515);
          tmp2 = new tmp2(obj, "No invite permissions for " + obj6.id);
          throw tmp2;
        }
        obj7 = canViewInviteModal;
      }
    }
  }
};