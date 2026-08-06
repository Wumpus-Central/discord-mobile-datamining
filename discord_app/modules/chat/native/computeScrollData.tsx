// discord_app/modules/chat/native/computeScrollData.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import Changeset from "Changeset";

let c3;
let c4;
const require = arg1;
({ RowType: c3, SeparatorType: c4 } = Changeset);
const result = require("ChatScrollPosition").fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

export default function computeScrollData(shouldInitialScroll) {
  let animated;
  let focusTargetId;
  let jumpTargetId;
  let jumpType;
  let rows;
  let scrollPosition;
  let scrollToMessageId;
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
        let obj = { type: null, index: null, animate: null, highlight: false, position: null };
        obj[0] = focusTargetId(10926).ChatScrollType.SCROLL;
        obj[1] = tmp3;
        if (animated) {
          animated = !maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
        }
        obj[2] = animated;
        obj[4] = focusTargetId(10926).ChatScrollPosition.TOP;
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
      obj = { type: null, index: null, animate: null, highlight: null, position: null };
      obj[0] = focusTargetId(10926).ChatScrollType.SCROLL;
      obj[1] = tmp6;
      const useReducedMotion = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
      let tmp10 = !useReducedMotion;
      if (!useReducedMotion) {
        tmp10 = jumpType !== tmp7(4217).JumpType.INSTANT;
      }
      obj[2] = tmp10;
      obj[3] = scrollToMessageId === jumpTargetId;
      if (scrollPosition == null) {
        scrollPosition = tmp7(10926).ChatScrollPosition.TOP;
      }
      obj[4] = scrollPosition;
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
        obj = { type: null, index: null };
        obj[0] = focusTargetId(10926).ChatScrollType.FOCUS_ONLY;
        obj[1] = tmp13;
        tmp11 = obj;
      }
    }
    tmp4 = tmp11;
  }
  return tmp4;
};
export const findMessageRowIndex = function findMessageRowIndex(previousRows, ChatTTITracker) {
  let closure_0 = ChatTTITracker;
  const findIndexResult = previousRows.findIndex((message) => {
    let tmp = null != message.message;
    if (tmp) {
      tmp = message.message.id === focusTargetId;
    }
    return tmp;
  });
  return -1 !== findIndexResult ? findIndexResult : undefined;
};