// === Module 9289: getSocketFrame ===

// Module 9289 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9290 */;
import FramesStore from "FramesStore" /* 6810 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};