// === Module 6811: getSocketFrame ===

// Module 6811 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 6812 */;
import FramesStore from "FramesStore" /* 6531 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};