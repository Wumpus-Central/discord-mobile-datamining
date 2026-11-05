// === Module 9479: getSocketFrame ===

// Module 9479 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9480 */;
import FramesStore from "FramesStore" /* 6984 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};