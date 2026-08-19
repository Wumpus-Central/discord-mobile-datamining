// discord_app/modules/rpc/server/commands/voiceChannelChat.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import prototypeDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import toggleVoiceChannelChat from "../../../calls/toggleVoiceChannelChat.tsx";
import ME from "../../../../Constants.tsx";

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