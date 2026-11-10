// === Module 9413: getSocketFrame ===

// Module 9413 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9414 */;
import FramesStore from "FramesStore" /* 6904 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};