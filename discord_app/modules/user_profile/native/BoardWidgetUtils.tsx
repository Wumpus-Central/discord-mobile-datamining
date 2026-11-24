// === Module 14502: BoardWidgetUtils ===

// Module 14502 (BoardWidgetUtils)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6045 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6048 */;
import WidgetUtils from "WidgetUtils" /* 14395 */;
import size from "module_2" /* 2 */;

function isBoardWidget(widget) {
  let isGameWidgetResult = widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!isGameWidgetResult) {
    isGameWidgetResult = UserProfileGameWidgetTypes.isGameWidget(widget);
    const tmpResult = UserProfileGameWidgetTypes;
  }
  return isGameWidgetResult;
}
let result = size.fileFinishedImporting("modules/user_profile/native/BoardWidgetUtils.tsx");

export { isBoardWidget };
export function reorderBoardWidgets(arg0, arg1) {
  const result = WidgetUtils.reorderMovableWidgets(isBoardWidget, arg0, arg1);
}