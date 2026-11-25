// === Module 7606: getSocketFrame ===

// Module 7606 (getSocketFrame)
import isPostMessageSocketDefault from "isPostMessageSocket" /* 7607 */;
import FramesStore from "FramesStore" /* 6905 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getSocketFrame.tsx");

export default function getSocketFrame(context) {
  if (isPostMessageSocketDefault(context)) {
    return FramesStore.getFrameByEmbeddedContext(context.context, context.source.iframeId);
  }
};