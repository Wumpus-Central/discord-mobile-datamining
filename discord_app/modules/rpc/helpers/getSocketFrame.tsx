// === Module 9217: getSocketFrame ===

// Module 9217 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9218 */;
import FramesStore from "FramesStore" /* 6754 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};