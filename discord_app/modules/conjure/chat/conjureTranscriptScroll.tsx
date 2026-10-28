// === Module 12357: conjureTranscriptScroll ===

// Module 12357 (conjureTranscriptScroll)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureTranscriptScroll.tsx");

export const AUTOSCROLL_THRESHOLD = 0.2;
export const isNearBottom = function isNearBottom(current) {
  const viewportHeight = current.viewportHeight;
  return current.contentHeight - current.offsetY - viewportHeight <= 0.2 * viewportHeight;
};
export const keepsBottomOnShrink = function keepsBottomOnShrink(current, height, current2) {
  let tmp = null != current;
  if (tmp) {
    tmp = height < current;
  }
  if (tmp) {
    tmp = null != current2;
  }
  if (tmp) {
    const viewportHeight = current2.viewportHeight;
    tmp = current2.contentHeight - current2.offsetY - viewportHeight <= 0.2 * viewportHeight;
  }
  return tmp;
};