// discord_app/modules/rpc/helpers/isPostMessageDisconnect.tsx
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
}
