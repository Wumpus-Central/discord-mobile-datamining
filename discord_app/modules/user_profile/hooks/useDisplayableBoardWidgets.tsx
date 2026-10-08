// === Module 13211: useDisplayableBoardWidgets ===

// Module 13211 (useDisplayableBoardWidgets)
import c from "c" /* 576 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7311 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7314 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7315 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 13212 */;
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayableBoardWidgets(arg0) {
  const cResult = c.c(2);
  const arr = useUserProfileWidgetsDefault(arg0);
  if (cResult[0] !== arr) {
    const found = arr.filter(isNonEmptyBoardWidget);
    cResult[0] = arr;
    cResult[1] = found;
    let tmp2 = found;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useDisplayableBoardWidgets(arg0) {
  const tmp = useUserProfileWidgetsDefault(arg0);
  closure_0 = tmp;
  const items = [tmp];
  return noop.useMemo(() => closure_0.filter(isNonEmptyBoardWidget), items);
});