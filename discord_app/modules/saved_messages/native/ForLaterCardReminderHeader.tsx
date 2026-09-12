// === Module 13421: ForLaterCardReminderHeader ===

// Module 13421 (ForLaterCardReminderHeader)
import jsxProd from "jsxProd" /* 21 */;
import ClockIcon from "ClockIcon" /* 4599 */;
import SavedMessageUtils from "SavedMessageUtils" /* 11840 */;
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader" /* 12346 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let obj = SavedMessageUtils;
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj = { dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT };
  const dueInString = obj.useDueInString(obj);
  let tmp7 = null;
  if (null != savedMessage.saveData.dueAt) {
    obj = { IconComponent: ClockIcon.ClockIcon, label: tmp5, isCritical: tmp6, actions };
    tmp7 = jsx(ForLaterCardStatusHeader.ForLaterCardStatusHeader, { IconComponent: ClockIcon.ClockIcon, label: tmp5, isCritical: tmp6, actions });
  }
  return tmp7;
};