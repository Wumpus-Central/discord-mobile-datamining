// === Module 7637: getSocketFrame ===

// Module 7637 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7638 */;
import FramesStore from "FramesStore" /* 6936 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};