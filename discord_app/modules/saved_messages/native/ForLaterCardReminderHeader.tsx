// === Module 12667: ForLaterCardReminderHeader ===

// Module 12667 (ForLaterCardReminderHeader)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import ClockIcon2 from "ClockIcon" /* 5051 */;
import SavedMessageUtils from "SavedMessageUtils" /* 12656 */;
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader" /* 12668 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterCardReminderHeader(arg0) {
  let ClockIcon = dependencyMap;
  const cResult = c.c(7);
  ({ savedMessage, throttledNow, actions } = arg0);
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  if (cResult[0] === dueAt) {
    if (cResult[1] === throttledNow) {
      let tmp4 = cResult[2];
    }
    const dueInString = SavedMessageUtils.useDueInString(tmp4);
    ({ dueInText, isOverdue } = dueInString);
    if (null == savedMessage.saveData.dueAt) {
      return null;
    } else {
      if (cResult[3] === actions) {
        if (cResult[4] === dueInText) {
        }
      }
      const obj2 = { IconComponent: null, label: null, isCritical: null, actions: null };
      ClockIcon = ClockIcon2.ClockIcon;
      obj2.IconComponent = ClockIcon;
      obj2.label = dueInText;
      obj2.isCritical = isOverdue;
      obj2.actions = actions;
      const tmp9 = jsx(ForLaterCardStatusHeader.ForLaterCardStatusHeader, { IconComponent: null, label: null, isCritical: null, actions: null });
      cResult[3] = actions;
      cResult[4] = dueInText;
      cResult[5] = isOverdue;
      cResult[6] = tmp9;
    }
    const tmpResult = SavedMessageUtils;
  }
  const obj3 = { dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT };
  cResult[0] = dueAt;
  cResult[1] = throttledNow;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function ForLaterCardReminderHeader(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  const obj = SavedMessageUtils;
  const dueInString = obj.useDueInString({ dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT });
  let tmp7 = null;
  if (null != savedMessage.saveData.dueAt) {
    const obj3 = { IconComponent: ClockIcon2.ClockIcon, label: tmp5, isCritical: tmp6, actions };
    tmp7 = jsx(ForLaterCardStatusHeader.ForLaterCardStatusHeader, { IconComponent: ClockIcon2.ClockIcon, label: tmp5, isCritical: tmp6, actions });
  }
  return tmp7;
});