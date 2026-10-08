// discord_app/modules/rpc/server/commands/context.tsx
import EmbeddedSurfaceType from "../../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import isPostMessageSocketDefault from "../../helpers/isPostMessageSocket.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod from "../../../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let Constants = Constants_mod;
({ RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
let Constants = Constants_mod;
({ RPCCommands, RPCErrors: c3 } = Constants);
let obj = {};
let obj2 = {
  scope: null,
  handler(socket) {
    socket = socket.socket;
    if (isPostMessageSocketDefault(socket)) {
      const context = socket.context;
      const surface = context.surface;
      const type = surface.type;
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY === type) {
                let obj2 = { type: surface.type };
              } else {
                const _Error = Error;
                const error = new Error("Unknown embedded surface type");
                throw error;
              }
            }
            const obj4 = { surface: obj2, launch: null, platform: null };
            const launch = context.launch;
            let customId;
            if (launch != null) {
              customId = launch.customId;
            }
            const obj5 = { custom_id: customId, referrer_id: null, interaction_id: null };
            const launch2 = context.launch;
            let referrerId;
            if (launch2 != null) {
              referrerId = launch2.referrerId;
            }
            obj5.referrer_id = referrerId;
            const launch3 = context.launch;
            let interactionId;
            if (launch3 != null) {
              interactionId = launch3.interactionId;
            }
            obj5.interaction_id = interactionId;
            obj4.launch = obj5;
            obj4.platform = context.platform;
            return obj4;
          }
        }
      }
      ({ type: obj3.type, channelId: obj3.channel_id, guildId: obj3.guild_id } = surface);
      obj2 = { type: null, channel_id: null, guild_id: null };
      const obj9 = { type: null, channel_id: null, guild_id: null };
    } else {
      const obj = { errorCode: constants.INVALID_COMMAND };
      const tmp7 = new RPCErrorDefault(obj, "Command only available to Embedded Apps");
      throw tmp7;
    }
  },
};
const items = [RPC_EMBEDDED_APP_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.GET_CONTEXT] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CONTEXT, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/context.tsx");

export default obj;
