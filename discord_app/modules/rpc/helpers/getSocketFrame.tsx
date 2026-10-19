// === Module 9178: getSocketFrame ===

// Module 9178 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9179 */;
import FramesStore from "FramesStore" /* 6723 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};