// === Module 13878: ? ===

// Module 13878
import obj132 from "obj132" /* 2 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4277 */;
import prototypeDefault from "prototype" /* 8752 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 8755 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 13879 */;
import ME from "ME" /* 676 */;

const RPCErrors = ME.RPCErrors;
let obj = {
  scope: RPC_SCOPE_CONFIG.RPC_LOCAL_SCOPE,
  validation(boolean) {
    createRpcJoiSchemaObjectDefault(boolean);
    const obj = { open: boolean.boolean() };
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
let result = obj132.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default { [ME.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: obj };