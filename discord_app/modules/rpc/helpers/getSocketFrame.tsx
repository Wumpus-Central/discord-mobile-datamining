// === Module 7232: getSocketFrame ===

// Module 7232 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7233 */;
import FramesStore from "FramesStore" /* 6956 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};