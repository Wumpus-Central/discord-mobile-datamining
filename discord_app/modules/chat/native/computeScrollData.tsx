// === Module 11270: computeScrollData ===

// Module 11270 (computeScrollData)
import Client from "Client" /* 4491 */;
import NativeChatUtils from "NativeChatUtils" /* 11271 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const RowGeneratorConstants = fn(7933);
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

export default function computeScrollData(shouldInitialScroll) {
  ({ rows, scrollToMessageId, jumpTargetId, animated, scrollPosition, focusTargetId, jumpType } = shouldInitialScroll);
  if (shouldInitialScroll.shouldInitialScroll) {
    if (null == jumpTargetId) {
      const findIndexResult = rows.findIndex((type) => {
        let tmp = type.type === constants.SEPARATOR;
        if (tmp) {
          tmp = type.id === constants2.UNREAD;
        }
        return tmp;
      });
      let tmp3;
      if (-1 !== findIndexResult) {
        tmp3 = findIndexResult;
      }
      if (null != tmp3) {
        let obj = { type: NativeChatUtils.ChatScrollType.SCROLL, index: tmp3, animate: null, highlight: false, position: null };
        if (animated) {
          animated = !AccessibilityStore.useReducedMotion;
        }
        obj.animate = animated;
        obj.position = NativeChatUtils.ChatScrollPosition.TOP;
        return obj;
      }
    }
  }
  let tmp4;
  if (null != scrollToMessageId) {
    focusTargetId = scrollToMessageId;
    const findIndexResult1 = rows.findIndex((message) => {
      let tmp = null != message.message;
      if (tmp) {
        tmp = message.message.id === focusTargetId;
      }
      return tmp;
    });
    let tmp6;
    if (-1 !== findIndexResult1) {
      tmp6 = findIndexResult1;
    }
    if (null != tmp6) {
      obj = { type: NativeChatUtils.ChatScrollType.SCROLL, index: tmp6, animate: null, highlight: null, position: null };
      const useReducedMotion = AccessibilityStore.useReducedMotion;
      let tmp10 = !useReducedMotion;
      if (!useReducedMotion) {
        tmp10 = jumpType !== Client.JumpType.INSTANT;
      }
      obj.animate = tmp10;
      obj.highlight = scrollToMessageId === jumpTargetId;
      if (scrollPosition == null) {
        scrollPosition = NativeChatUtils.ChatScrollPosition.TOP;
      }
      obj.position = scrollPosition;
      tmp4 = obj;
    }
  }
  if (null == tmp4) {
    let tmp11;
    if (null != focusTargetId) {
      const findIndexResult2 = rows.findIndex((message) => {
        let tmp = null != message.message;
        if (tmp) {
          tmp = message.message.id === focusTargetId;
        }
        return tmp;
      });
      let tmp13;
      if (-1 !== findIndexResult2) {
        tmp13 = findIndexResult2;
      }
      if (null != tmp13) {
        obj = { type: NativeChatUtils.ChatScrollType.FOCUS_ONLY, index: tmp13 };
        tmp11 = obj;
      }
    }
    tmp4 = tmp11;
  }
  return tmp4;
};
export const findMessageRowIndex = function findMessageRowIndex(previousRows, ChatTTITracker) {
  closure_0 = ChatTTITracker;
  const findIndexResult = previousRows.findIndex((message) => {
    let tmp = null != message.message;
    if (tmp) {
      tmp = message.message.id === focusTargetId;
    }
    return tmp;
  });
  return -1 !== findIndexResult ? findIndexResult : undefined;
};