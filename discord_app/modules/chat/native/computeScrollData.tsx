// discord_app/modules/chat/native/computeScrollData.tsx
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import Changeset from "../../messages/native/renderer/RowGeneratorConstants.tsx";

const require = fn;
({ RowType: c3, SeparatorType: c4 } = Changeset);
const result = require("obj132").fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

export default function computeScrollData(shouldInitialScroll) {
  ({ rows, scrollToMessageId, jumpTargetId, animated, scrollPosition, focusTargetId, jumpType } = shouldInitialScroll);
  if (shouldInitialScroll.shouldInitialScroll) {
    if (null == jumpTargetId) {
      const findIndexResult = rows.findIndex((item, index) => {
        let tmp = item.type === constants.SEPARATOR;
        if (tmp) {
          tmp = item.id === constants2.UNREAD;
        }
        return tmp;
      });
      let tmp3;
      if (-1 !== findIndexResult) {
        tmp3 = findIndexResult;
      }
      if (null != tmp3) {
        let obj = { type: null, index: null, animate: null, highlight: false, position: null };
        obj[0] = focusTargetId(10473).ChatScrollType.SCROLL;
        obj[1] = tmp3;
        if (animated) {
          animated = !closure_2.useReducedMotion;
        }
        obj[2] = animated;
        obj[4] = focusTargetId(10473).ChatScrollPosition.TOP;
        return obj;
      }
    }
  }
  let tmp4;
  if (null != scrollToMessageId) {
    focusTargetId = scrollToMessageId;
    const findIndexResult1 = rows.findIndex((item, index) => {
      let tmp = null != item.message;
      if (tmp) {
        tmp = item.message.id === focusTargetId;
      }
      return tmp;
    });
    let tmp6;
    if (-1 !== findIndexResult1) {
      tmp6 = findIndexResult1;
    }
    if (null != tmp6) {
      obj = { type: null, index: null, animate: null, highlight: null, position: null };
      obj[0] = focusTargetId(10473).ChatScrollType.SCROLL;
      obj[1] = tmp6;
      const useReducedMotion = closure_2.useReducedMotion;
      let tmp10 = !useReducedMotion;
      if (!useReducedMotion) {
        tmp10 = jumpType !== tmp7(4306).JumpType.INSTANT;
      }
      obj[2] = tmp10;
      obj[3] = scrollToMessageId === jumpTargetId;
      if (scrollPosition == null) {
        scrollPosition = tmp7(10473).ChatScrollPosition.TOP;
      }
      obj[4] = scrollPosition;
      tmp4 = obj;
    }
  }
  if (null == tmp4) {
    let tmp11;
    if (null != focusTargetId) {
      const findIndexResult2 = rows.findIndex((item, index) => {
        let tmp = null != item.message;
        if (tmp) {
          tmp = item.message.id === focusTargetId;
        }
        return tmp;
      });
      let tmp13;
      if (-1 !== findIndexResult2) {
        tmp13 = findIndexResult2;
      }
      if (null != tmp13) {
        obj = { type: null, index: null };
        obj[0] = focusTargetId(10473).ChatScrollType.FOCUS_ONLY;
        obj[1] = tmp13;
        tmp11 = obj;
      }
    }
    tmp4 = tmp11;
  }
  return tmp4;
};
export const findMessageRowIndex = function findMessageRowIndex(previousRows, ChatTTITracker) {
  closure_0 = ChatTTITracker;
  const findIndexResult = previousRows.findIndex((item, index) => {
    let tmp = null != item.message;
    if (tmp) {
      tmp = item.message.id === focusTargetId;
    }
    return tmp;
  });
  return -1 !== findIndexResult ? findIndexResult : undefined;
};