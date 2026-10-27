// === Module 9257: getSocketFrame ===

// Module 9257 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9258 */;
import FramesStore from "FramesStore" /* 6776 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};