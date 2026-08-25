// discord_app/modules/user_profile/hooks/useDisplayableBoardWidgets.tsx
import toSubmission from "../UserProfileApplicationWidgetTypes.tsx";
import useUserProfileWidgetsDefault from "useUserProfileWidgets.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";

require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof toSubmission.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7236).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7229).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7229);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12665).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return React.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = closure_1.filter(closure_1_4);
    } else {
      found = [];
    }
    return found;
  }, items);
};