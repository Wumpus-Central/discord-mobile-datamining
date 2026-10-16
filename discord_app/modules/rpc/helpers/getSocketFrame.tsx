// === Module 15417: getSocketFrame ===

// Module 15417 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15418 */;
import FramesStore from "FramesStore" /* 10947 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};