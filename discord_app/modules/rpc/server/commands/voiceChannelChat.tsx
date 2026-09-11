// === Module 14564: voiceChannelChat ===

// Module 14564 (voiceChannelChat)
import Constants2 from "Constants" /* 4511 */;
import RPCErrorDefault from "RPCError" /* 9645 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9648 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 14565 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
let result = size.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default {
  [Constants.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: {
    scope: Constants2.RPC_LOCAL_SCOPE,
    validation(boolean) {
      createRpcJoiSchemaObjectDefault(boolean);
      const obj = { open: boolean.boolean() };
      return obj.keys(obj);
    },
    handler(args) {
      let obj = toggleVoiceChannelChat;
      const result = obj.toggleVoiceChannelChat(args.args.open);
      if (null == result) {
        obj = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp8 = new RPCErrorDefault(obj, "Not connected to a guild voice channel");
        throw tmp8;
      } else {
        obj = { channel_id: null, chat_open: null };
        ({ channelId: obj2.channel_id, chatOpen: obj2.chat_open } = result);
        return obj;
      }
    }
  }
};