// === Module 9256: getSocketFrame ===

// Module 9256 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9257 */;
import FramesStore from "FramesStore" /* 6773 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};