// === Module 15372: getSocketFrame ===

// Module 15372 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15373 */;
import FramesStore from "FramesStore" /* 10935 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};