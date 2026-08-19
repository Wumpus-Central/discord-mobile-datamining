// discord_app/modules/user_profile/hooks/useDisplayableBoardWidgets.tsx
import items2 from "../UserProfileGameWidgetTypes.tsx";
import isFieldEmpty from "../UserProfilePersonalWidget.tsx";
import toSubmission from "../UserProfileApplicationWidgetTypes.tsx";
import useUserProfileWidgetsDefault from "useUserProfileWidgets.tsx";
import noop from "../../../../_runtime/00019_noop.js";

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