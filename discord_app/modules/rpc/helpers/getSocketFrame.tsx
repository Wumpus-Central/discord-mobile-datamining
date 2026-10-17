// === Module 9162: getSocketFrame ===

// Module 9162 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9163 */;
import FramesStore from "FramesStore" /* 6295 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};