// === Module 16310: voiceChannelChat ===

// Module 16310 (voiceChannelChat)
import Constants2 from "Constants" /* 6444 */;
import RPCErrorDefault from "RPCError" /* 9313 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11772 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 16311 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
let result = size.fileFinishedImporting("modules/rpc/server/commands/voiceChannelChat.tsx");

export default {
  [Constants.RPCCommands.TOGGLE_VOICE_CHANNEL_CHAT]: {
    scope: Constants2.RPC_LOCAL_SCOPE,
    validation(boolean) {
      const obj = createRpcJoiSchemaObjectDefault(boolean);
      return obj.keys({ open: boolean.boolean() });
    },
    handler(args) {
      const result = toggleVoiceChannelChat.toggleVoiceChannelChat(args.args.open);
      if (null == result) {
        const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp8 = new RPCErrorDefault(obj3, "Not connected to a guild voice channel");
        throw tmp8;
      } else {
        ({ channelId: obj2.channel_id, chatOpen: obj2.chat_open } = result);
        return { channel_id: null, chat_open: null };
      }
    }
  }
};