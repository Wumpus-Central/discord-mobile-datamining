// === Module 9472: getSocketFrame ===

// Module 9472 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9473 */;
import FramesStore from "FramesStore" /* 6981 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};