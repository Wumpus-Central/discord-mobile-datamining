// discord_app/modules/saved_messages/native/ForLaterCardReminderHeader.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import SavedMessageUtils from "../SavedMessageUtils.tsx";
import ForLaterCardStatusHeader from "ForLaterCardStatusHeader.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    tmp7 = jsx(ForLaterCardStatusHeader.ForLaterCardStatusHeader, {
      IconComponent: ClockIcon.ClockIcon,
      label: tmp5,
      isCritical: tmp6,
      actions,
    });
  }
  return tmp7;
};
