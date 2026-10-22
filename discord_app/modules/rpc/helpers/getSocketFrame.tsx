// === Module 9226: getSocketFrame ===

// Module 9226 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9227 */;
import FramesStore from "FramesStore" /* 6761 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};