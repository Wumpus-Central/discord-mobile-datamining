// === Module 7296: getSocketFrame ===

// Module 7296 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7297 */;
import FramesStore from "FramesStore" /* 7019 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};