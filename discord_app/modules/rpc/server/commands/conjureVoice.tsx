// === Module 14351: conjureVoice ===

// Module 14351 (conjureVoice)
import Constants2 from "Constants" /* 1085 */;
import ConjureVoiceSessionCoordinatorDefault from "ConjureVoiceSessionCoordinator" /* 14299 */;
import Constants from "Constants" /* 5316 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 14317 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj2 = {};
const GET_VOICE_CAPABILITIES = RPCCommands.GET_VOICE_CAPABILITIES;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj3 = {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    const obj = ConjureVoiceSessionCoordinatorDefault;
    return obj.getCapabilitiesForSocket(socket);
  }
};
obj2[GET_VOICE_CAPABILITIES] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_VOICE_CAPABILITIES, obj3);
const GET_VOICE_SESSION_PARTICIPANTS = RPCCommands.GET_VOICE_SESSION_PARTICIPANTS;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: obj,
  handler(socket) {
    let obj2;
    let session_id;
    const obj = { participants: obj2.getParticipantsForSession(socket, session_id) };
    socket = socket.socket;
    session_id = socket.args.session_id;
    obj2 = ConjureVoiceSessionCoordinatorDefault;
    return obj;
  }
};
obj2[GET_VOICE_SESSION_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_VOICE_SESSION_PARTICIPANTS, obj4);
const START_VOICE_SESSION = RPCCommands.START_VOICE_SESSION;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj5 = {
  scope: obj,
  handler(socket) {
    let obj3;
    let participantsForEventSubscription;
    socket = socket.socket;
    const obj = ConjureVoiceSessionCoordinatorDefault;
    const startResult = obj.start(socket);
    const obj2 = { session_id: startResult.id, channel_id: startResult.channelId, capabilities: obj3.getCapabilities(), participants: participantsForEventSubscription };
    obj3 = ConjureVoiceSessionCoordinatorDefault;
    const obj4 = ConjureVoiceSessionCoordinatorDefault;
    participantsForEventSubscription = obj4.getParticipantsForEventSubscription(socket, startResult.id);
    if (participantsForEventSubscription == null) {
      participantsForEventSubscription = [];
    }
    return obj2;
  }
};
obj2[START_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.START_VOICE_SESSION, obj5);
const ENABLE_VOICE_SPATIAL = RPCCommands.ENABLE_VOICE_SPATIAL;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj6 = {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    const session_id = socket.args.session_id;
    const obj = ConjureVoiceSessionCoordinatorDefault;
    obj.enableSpatial(socket, session_id);
    return { success: true };
  }
};
obj2[ENABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.ENABLE_VOICE_SPATIAL, obj6);
const DISABLE_VOICE_SPATIAL = RPCCommands.DISABLE_VOICE_SPATIAL;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj7 = {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    const session_id = socket.args.session_id;
    const obj = ConjureVoiceSessionCoordinatorDefault;
    obj.disableSpatial(socket, session_id);
    return { success: true };
  }
};
obj2[DISABLE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.DISABLE_VOICE_SPATIAL, obj7);
const UPDATE_VOICE_SPATIAL = RPCCommands.UPDATE_VOICE_SPATIAL;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj8 = {
  scope: obj,
  handler(arg0) {
    let args;
    let listener;
    let session_id;
    let socket;
    ({ socket, args } = arg0);
    const sources = args.sources;
    ({ session_id, listener } = args);
    const mapped = sources.map((user_id) => {
      const obj = { user_id: user_id.user_id };
      const merged = Object.assign(user_id);
      return obj;
    });
    let obj = ConjureVoiceSessionCoordinatorDefault;
    obj.update(socket, session_id, listener, mapped);
    return { success: true };
  }
};
obj2[UPDATE_VOICE_SPATIAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.UPDATE_VOICE_SPATIAL, obj8);
const STOP_VOICE_SESSION = RPCCommands.STOP_VOICE_SESSION;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj9 = {
  scope: obj,
  handler(socket) {
    socket = socket.socket;
    const session_id = socket.args.session_id;
    const obj = ConjureVoiceSessionCoordinatorDefault;
    obj.stop(socket, session_id);
    return { success: true };
  }
};
obj2[STOP_VOICE_SESSION] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.STOP_VOICE_SESSION, obj9);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureVoice.tsx");

export default obj2;