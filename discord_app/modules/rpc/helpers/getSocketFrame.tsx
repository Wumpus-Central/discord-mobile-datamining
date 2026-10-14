// discord_app/modules/rpc/helpers/getSocketFrame.tsx
import isPostMessageSocketDefault from "isPostMessageSocket.tsx";
import FramesStore from "../../frames/FramesStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
}
