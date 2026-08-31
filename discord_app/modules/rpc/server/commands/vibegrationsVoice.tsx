// === Module 14129: RPC_EMBEDDED_APP_SCOPE ===

// Module 14129 (RPC_EMBEDDED_APP_SCOPE)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getCapabilitiesForSocketDefault from "getCapabilitiesForSocket" /* 14080 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4350 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14097 */;

({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
const RPCCommands = ME.RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj = {};
obj = {
  scope: obj,
  handler(socket) {
    return getCapabilitiesForSocketDefault.getCapabilitiesForSocket(socket.socket);
  }
};
obj[RPCCommands.GET_VOICE_CAPABILITIES] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_VOICE_CAPABILITIES, obj);
obj[RPCCommands.GET_VOICE_SESSION_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_VOICE_SESSION_PARTICIPANTS, {
  scope: obj,
  handler(socket) {
    const obj = { participants: getCapabilitiesForSocketDefault.getParticipantsForSession(socket.socket, socket.args.session_id) };
    return obj;
  }
});
obj[RPCCommands.START_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.START_VOICE_SESSION, {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    let obj = getCapabilitiesForSocketDefault;
    const startResult = obj.start(socket);
    obj = { session_id: startResult.id, channel_id: startResult.channelId, capabilities: getCapabilitiesForSocketDefault.getCapabilities(), participants: null };
    const obj3 = getCapabilitiesForSocketDefault;
    let participantsForEventSubscription = getCapabilitiesForSocketDefault.getParticipantsForEventSubscription(socket, startResult.id);
    if (participantsForEventSubscription == null) {
      participantsForEventSubscription = [];
    }
    obj[3] = participantsForEventSubscription;
    return obj;
  }
});
obj[RPCCommands.ENABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.ENABLE_VOICE_SPATIAL, {
  scope: obj,
  handler(socket) {
    getCapabilitiesForSocketDefault.enableSpatial(socket.socket, socket.args.session_id);
    return { success: true };
  }
});
obj[RPCCommands.DISABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.DISABLE_VOICE_SPATIAL, {
  scope: obj,
  handler(socket) {
    getCapabilitiesForSocketDefault.disableSpatial(socket.socket, socket.args.session_id);
    return { success: true };
  }
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
    getCapabilitiesForSocketDefault.update(socket, session_id, listener, mapped);
    return { success: true };
  }
});
obj[RPCCommands.STOP_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.STOP_VOICE_SESSION, {
  scope: obj,
  handler(socket) {
    getCapabilitiesForSocketDefault.stop(socket.socket, socket.args.session_id);
    return { success: true };
  }
});
const result = set.fileFinishedImporting("modules/rpc/server/commands/vibegrationsVoice.tsx");

export default obj;