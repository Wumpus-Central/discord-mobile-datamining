// === Module 15545: voiceChannelChat ===

// Module 15545 (voiceChannelChat)
import Constants2 from "Constants" /* 5895 */;
import RPCErrorDefault from "RPCError" /* 9169 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11330 */;
import toggleVoiceChannelChat from "toggleVoiceChannelChat" /* 15546 */;
import Constants from "Constants" /* 1087 */;
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