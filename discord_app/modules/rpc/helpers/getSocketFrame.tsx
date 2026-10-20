// === Module 9190: getSocketFrame ===

// Module 9190 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9191 */;
import FramesStore from "FramesStore" /* 6726 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};