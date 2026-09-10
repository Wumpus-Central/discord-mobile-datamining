// === Module 9101: useDisplayableBoardWidgets ===

// Module 9101 (useDisplayableBoardWidgets)
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7674 */;
import UserProfilePersonalWidget from "UserProfilePersonalWidget" /* 7681 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7684 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 9103 */;
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
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(9102).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return noop.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = closure_1.filter(isNonEmptyBoardWidget);
    } else {
      found = [];
    }
    return found;
  }, items);
};