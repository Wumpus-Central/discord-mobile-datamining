// === Module 9306: getSocketFrame ===

// Module 9306 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9307 */;
import FramesStore from "FramesStore" /* 6840 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};