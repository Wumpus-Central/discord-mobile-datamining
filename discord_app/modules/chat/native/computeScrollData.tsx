// discord_app/modules/chat/native/computeScrollData.tsx
import flow_Client from "../../../flow/Client.tsx";
import NativeChatUtils from "NativeChatUtils.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import RowGeneratorConstants from "../../messages/native/renderer/RowGeneratorConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

export default function computeScrollData(shouldInitialScroll) {
  let animated;
  let constants2;
  let focusTargetId;
  let jumpTargetId;
  let jumpType;
  let rows;
  let scrollPosition;
  let scrollToMessageId;
  let scrollToRowIndexOverride;
  ({
    rows,
    scrollToMessageId,
    jumpTargetId,
    animated,
    scrollPosition,
    focusTargetId,
    scrollToRowIndexOverride,
    jumpType,
  } = shouldInitialScroll);
  if (shouldInitialScroll.shouldInitialScroll) {
    if (null == jumpTargetId) {
      const findIndexResult = rows.findIndex(
        (type) => type.type === constants.SEPARATOR && type.id === constants2.UNREAD,
      );
      let tmp3;
      if (-1 !== findIndexResult) {
        tmp3 = findIndexResult;
      }
      if (null != tmp3) {
        const obj2 = {
          type: NativeChatUtils.ChatScrollType.SCROLL,
          index: tmp3,
          animate: animated,
          highlight: false,
          position: NativeChatUtils.ChatScrollPosition.TOP,
        };
        if (animated) {
          animated = !AccessibilityStore.useReducedMotion;
        }
        return obj2;
      }
    }
  }
  let tmp4;
  if (null != scrollToMessageId) {
    if (scrollToRowIndexOverride == null) {
      const findIndexResult1 = rows.findIndex(
        (message) => null != message.message && message.message.id === focusTargetId,
      );
      let tmp6;
      if (-1 !== findIndexResult1) {
        tmp6 = findIndexResult1;
      }
      scrollToRowIndexOverride = tmp6;
    }
    if (null != scrollToRowIndexOverride) {
      const obj = {
        type: NativeChatUtils.ChatScrollType.SCROLL,
        index: scrollToRowIndexOverride,
        animate: !AccessibilityStore.useReducedMotion && jumpType !== flow_Client.JumpType.INSTANT,
        highlight: scrollToMessageId === jumpTargetId,
        position: scrollPosition,
      };
      !AccessibilityStore.useReducedMotion && jumpType !== flow_Client.JumpType.INSTANT;
      if (scrollPosition == null) {
        scrollPosition = NativeChatUtils.ChatScrollPosition.TOP;
      }
      tmp4 = obj;
    }
  }
  if (null == tmp4) {
    let tmp11;
    if (null != focusTargetId) {
      const findIndexResult2 = rows.findIndex(
        (message) => null != message.message && message.message.id === focusTargetId,
      );
      let tmp13;
      if (-1 !== findIndexResult2) {
        tmp13 = findIndexResult2;
      }
      if (null != tmp13) {
        tmp11 = { type: NativeChatUtils.ChatScrollType.FOCUS_ONLY, index: tmp13 };
        const obj3 = { type: NativeChatUtils.ChatScrollType.FOCUS_ONLY, index: tmp13 };
      }
    }
    tmp4 = tmp11;
  }
  return tmp4;
}
export const findMessageRowIndex = function findMessageRowIndex(previousRows, startMessageId) {
  let closure_0 = startMessageId;
  const findIndexResult = previousRows.findIndex(
    (message) => null != message.message && message.message.id === focusTargetId,
  );
  return -1 !== findIndexResult ? findIndexResult : undefined;
};
