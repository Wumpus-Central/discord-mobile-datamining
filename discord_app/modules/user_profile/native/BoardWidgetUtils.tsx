// discord_app/modules/user_profile/native/BoardWidgetUtils.tsx
import UserProfileGameWidgetTypes from "../UserProfileGameWidgetTypes.tsx";
import UserProfileApplicationWidgetTypes from "../UserProfileApplicationWidgetTypes.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
