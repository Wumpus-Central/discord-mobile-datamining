// === Module 6902: getSocketFrame ===

// Module 6902 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 6903 */;
import FramesStore from "FramesStore" /* 6623 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};