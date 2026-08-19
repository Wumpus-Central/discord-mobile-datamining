// === Module 12294: isNonEmptyBoardWidget ===

// Module 12294 (isNonEmptyBoardWidget)
import items2 from "items" /* 5367 */;
import isFieldEmpty from "isFieldEmpty" /* 5375 */;
import toSubmission from "toSubmission" /* 5380 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 12296 */;
import noop from "noop" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof toSubmission.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof isFieldEmpty.UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = items2.isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = items2;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12295).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return React.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = closure_1.filter(isNonEmptyBoardWidget);
    } else {
      found = [];
    }
    return found;
  }, items);
};