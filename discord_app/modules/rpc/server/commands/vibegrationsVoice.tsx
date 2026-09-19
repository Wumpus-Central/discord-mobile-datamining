// === Module 14783: vibegrationsVoice ===

// Module 14783 (vibegrationsVoice)
import Constants2 from "Constants" /* 1074 */;
import VibegrationsVoiceSessionCoordinatorDefault from "VibegrationsVoiceSessionCoordinator" /* 14733 */;
import Constants from "Constants" /* 4660 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 14751 */;
import size from "module_2" /* 2 */;

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj2 = {};
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.GET_VOICE_CAPABILITIES] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_VOICE_CAPABILITIES, {
  scope: obj,
  handler(socket) {
    return VibegrationsVoiceSessionCoordinatorDefault.getCapabilitiesForSocket(socket.socket);
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.GET_VOICE_SESSION_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_VOICE_SESSION_PARTICIPANTS, {
  scope: obj,
  handler(socket) {
    const obj = { participants: VibegrationsVoiceSessionCoordinatorDefault.getParticipantsForSession(socket.socket, socket.args.session_id) };
    return obj;
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.START_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.START_VOICE_SESSION, {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    const startResult = VibegrationsVoiceSessionCoordinatorDefault.start(socket);
    const obj2 = { session_id: startResult.id, channel_id: startResult.channelId, capabilities: null, participants: null };
    obj2.capabilities = VibegrationsVoiceSessionCoordinatorDefault.getCapabilities();
    let participantsForEventSubscription = VibegrationsVoiceSessionCoordinatorDefault.getParticipantsForEventSubscription(socket, startResult.id);
    if (participantsForEventSubscription == null) {
      participantsForEventSubscription = [];
    }
    obj2.participants = participantsForEventSubscription;
    return obj2;
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.ENABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.ENABLE_VOICE_SPATIAL, {
  scope: obj,
  handler(socket) {
    VibegrationsVoiceSessionCoordinatorDefault.enableSpatial(socket.socket, socket.args.session_id);
    return { success: true };
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.DISABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.DISABLE_VOICE_SPATIAL, {
  scope: obj,
  handler(socket) {
    VibegrationsVoiceSessionCoordinatorDefault.disableSpatial(socket.socket, socket.args.session_id);
    return { success: true };
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.UPDATE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.UPDATE_VOICE_SPATIAL, {
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
  }
});
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
obj2[RPCCommands.STOP_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.STOP_VOICE_SESSION, {
  scope: obj,
  handler(socket) {
    VibegrationsVoiceSessionCoordinatorDefault.stop(socket.socket, socket.args.session_id);
    return { success: true };
  }
});
const result = size.fileFinishedImporting("modules/rpc/server/commands/vibegrationsVoice.tsx");

export default obj2;