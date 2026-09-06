// discord_app/modules/rpc/server/commands/voiceChannelChat.tsx
import Constants2 from "../../Constants.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import toggleVoiceChannelChat from "../../../calls/toggleVoiceChannelChat.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
  },
};
