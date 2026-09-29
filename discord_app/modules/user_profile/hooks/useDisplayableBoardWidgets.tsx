// === Module 12629: useDisplayableBoardWidgets ===

// Module 12629 (useDisplayableBoardWidgets)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7202 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7209 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7212 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 12630 */;
import noop from "module_19" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof UserProfilePersonalWidget.UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = UserProfileGameWidgetTypes.isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = UserProfileGameWidgetTypes;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  const tmp = useUserProfileWidgetsDefault(id);
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => closure_0.filter(isNonEmptyBoardWidget), items);
};