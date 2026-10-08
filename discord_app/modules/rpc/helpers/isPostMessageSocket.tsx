// discord_app/modules/rpc/helpers/isPostMessageSocket.tsx
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
}
