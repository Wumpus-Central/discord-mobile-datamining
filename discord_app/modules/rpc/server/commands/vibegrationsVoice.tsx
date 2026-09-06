// discord_app/modules/rpc/server/commands/vibegrationsVoice.tsx
import Constants2 from "../../../../Constants.tsx";
import VibegrationsVoiceSessionCoordinatorDefault from "../../../vibegrations/voice/VibegrationsVoiceSessionCoordinator.tsx";
import Constants from "../../Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj = {};
obj = {
  scope: obj,
  handler(socket) {
    return VibegrationsVoiceSessionCoordinatorDefault.getCapabilitiesForSocket(socket.socket);
  },
};
obj[RPCCommands.GET_VOICE_CAPABILITIES] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_VOICE_CAPABILITIES,
  obj,
);
obj[RPCCommands.GET_VOICE_SESSION_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.GET_VOICE_SESSION_PARTICIPANTS,
  {
    scope: obj,
    handler(socket) {
      const obj = {
        participants: VibegrationsVoiceSessionCoordinatorDefault.getParticipantsForSession(
          socket.socket,
          socket.args.session_id,
        ),
      };
      return obj;
    },
  },
);
obj[RPCCommands.START_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.START_VOICE_SESSION, {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    let obj = VibegrationsVoiceSessionCoordinatorDefault;
    const startResult = obj.start(socket);
    obj = {
      session_id: startResult.id,
      channel_id: startResult.channelId,
      capabilities: VibegrationsVoiceSessionCoordinatorDefault.getCapabilities(),
      participants: null,
    };
    let participantsForEventSubscription =
      VibegrationsVoiceSessionCoordinatorDefault.getParticipantsForEventSubscription(socket, startResult.id);
    if (participantsForEventSubscription == null) {
      participantsForEventSubscription = [];
    }
    obj.participants = participantsForEventSubscription;
    return obj;
  },
});
obj[RPCCommands.ENABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.ENABLE_VOICE_SPATIAL, {
  scope: obj,
  handler(socket) {
    VibegrationsVoiceSessionCoordinatorDefault.enableSpatial(socket.socket, socket.args.session_id);
    return { success: true };
  },
});
obj[RPCCommands.DISABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.DISABLE_VOICE_SPATIAL, {
  scope: obj,
  handler(socket) {
    VibegrationsVoiceSessionCoordinatorDefault.disableSpatial(socket.socket, socket.args.session_id);
    return { success: true };
  },
});
obj[RPCCommands.UPDATE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.UPDATE_VOICE_SPATIAL, {
  scope: obj,
  handler(arg0) {
    ({ socket, args } = arg0);
    const sources = args.sources;
    ({ session_id, listener } = args);
    const mapped = sources.map((user_id) => {
      const obj = {};
      const merged = Object.assign(user_id);
      obj.user_id = user_id.user_id;
      return obj;
    });
    VibegrationsVoiceSessionCoordinatorDefault.update(socket, session_id, listener, mapped);
    return { success: true };
  },
});
obj[RPCCommands.STOP_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.STOP_VOICE_SESSION, {
  scope: obj,
  handler(socket) {
    VibegrationsVoiceSessionCoordinatorDefault.stop(socket.socket, socket.args.session_id);
    return { success: true };
  },
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/vibegrationsVoice.tsx");

export default obj;
