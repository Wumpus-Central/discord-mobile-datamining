// === Module 9293: getSocketFrame ===

// Module 9293 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9294 */;
import FramesStore from "FramesStore" /* 6833 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};