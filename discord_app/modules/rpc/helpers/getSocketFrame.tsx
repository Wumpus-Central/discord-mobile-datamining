// === Module 9454: getSocketFrame ===

// Module 9454 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9455 */;
import FramesStore from "FramesStore" /* 6966 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};