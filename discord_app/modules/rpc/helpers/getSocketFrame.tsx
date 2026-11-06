// === Module 9425: getSocketFrame ===

// Module 9425 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9426 */;
import FramesStore from "FramesStore" /* 6926 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};