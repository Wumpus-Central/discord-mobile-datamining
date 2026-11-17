// === Module 7306: getSocketFrame ===

// Module 7306 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7307 */;
import FramesStore from "FramesStore" /* 7027 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};