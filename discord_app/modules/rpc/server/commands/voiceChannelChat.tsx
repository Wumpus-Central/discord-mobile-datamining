// === Module 14098: ? ===

// Module 14098
import set from "set" /* 2 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4348 */;
import prototypeDefault from "prototype" /* 9442 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9445 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 14099 */;
import ME from "ME" /* 676 */;

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: RPC_SCOPE_CONFIG.RPC_LOCAL_SCOPE,
  validation(boolean) {
    let obj = createRpcJoiSchemaObjectDefault(boolean);
    obj = { open: boolean.boolean() };
    return obj.keys(obj);
  },
  handler(args) {
    let obj = toggleVoiceChannelChat;
    const result = obj.toggleVoiceChannelChat(args.args.open);
    if (null == result) {
      obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_CHANNEL;
      const tmp8 = new prototypeDefault(obj, "Not connected to a guild voice channel");
      throw tmp8;
    } else {
      obj = { channel_id: null, chat_open: null };
      ({ channelId: obj2[0], chatOpen: obj2[1] } = result);
      return obj;
    }
  }
};
let result = set.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default { [ME.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: obj };