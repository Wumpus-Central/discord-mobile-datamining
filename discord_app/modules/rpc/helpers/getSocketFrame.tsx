// === Module 15077: getSocketFrame ===

// Module 15077 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 15078 */;
import FramesStore from "FramesStore" /* 10713 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};