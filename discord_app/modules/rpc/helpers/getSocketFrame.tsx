// === Module 7511: getSocketFrame ===

// Module 7511 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7512 */;
import FramesStore from "FramesStore" /* 6810 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};