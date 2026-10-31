// === Module 9326: getSocketFrame ===

// Module 9326 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9327 */;
import FramesStore from "FramesStore" /* 6846 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};