// === Module 12772: ForLaterCardReminderHeader ===

// Module 12772 (ForLaterCardReminderHeader)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import _savedMessageJumpToMessage from "_savedMessageJumpToMessage" /* 11276 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let obj = _savedMessageJumpToMessage;
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj = { dueAt, now: throttledNow, type: tmp(11276).DueInStringTypes.SHORT };
  const dueInString = obj.useDueInString(obj);
  let tmp7 = null;
  if (null != savedMessage.saveData.dueAt) {
    obj = { IconComponent: null, label: null, isCritical: null, actions: null };
    obj[0] = tmp(4343).ClockIcon;
    obj[1] = tmp5;
    obj[2] = tmp6;
    obj[3] = actions;
    tmp7 = jsx(tmp(11579).ForLaterCardStatusHeader, { IconComponent: null, label: null, isCritical: null, actions: null });
  }
  return tmp7;
};