// === Module 12598: conjureTranscriptScroll ===

// Module 12598 (conjureTranscriptScroll)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureTranscriptScroll.tsx");

export const AUTOSCROLL_THRESHOLD = 0.2;
export function isNearBottom(current) {
  const viewportHeight = current.viewportHeight;
  return current.contentHeight - current.offsetY - viewportHeight <= 0.2 * viewportHeight;
}
export function keepsBottomOnShrink(current, height, current2) {
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
}
export function decideConjureTranscriptReveal(historySettled) {
  ({ rowCount, metrics } = historySettled);
  let str = "wait";
  if (historySettled.historySettled) {
    let str3 = "reveal";
    if (0 !== rowCount) {
      let str4 = "wait";
      if (null != metrics) {
        str4 = "wait";
        if (tmp === rowCount) {
          let str5 = "scroll-then-confirm";
          if (metrics.contentHeight - metrics.offsetY - metrics.viewportHeight <= 16) {
            str5 = "reveal";
          }
          str4 = str5;
        }
      }
      str3 = str4;
    }
    str = str3;
  }
  return str;
}