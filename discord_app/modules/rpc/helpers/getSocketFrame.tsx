// === Module 9407: getSocketFrame ===

// Module 9407 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9408 */;
import FramesStore from "FramesStore" /* 6901 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};