// === Module 13592: ForLaterCardReminderHeader ===

// Module 13592 (ForLaterCardReminderHeader)
import jsxProd from "jsxProd" /* 21 */;
import ClockIcon from "ClockIcon" /* 4718 */;
import SavedMessageUtils from "SavedMessageUtils" /* 11962 */;
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader" /* 12468 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
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
    const obj3 = { IconComponent: ClockIcon.ClockIcon, label: tmp5, isCritical: tmp6, actions };
    tmp7 = jsx(ForLaterCardStatusHeader.ForLaterCardStatusHeader, { IconComponent: ClockIcon.ClockIcon, label: tmp5, isCritical: tmp6, actions });
  }
  return tmp7;
};