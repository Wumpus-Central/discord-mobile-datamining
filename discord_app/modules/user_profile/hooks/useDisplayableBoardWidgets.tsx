// discord_app/modules/user_profile/hooks/useDisplayableBoardWidgets.tsx
import noop from "noop";
import { toSubmission } from "../UserProfileApplicationWidgetTypes.tsx";
import { useUserProfileWidgets } from "useUserProfileWidgets.tsx";

const require = arg1;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof toSubmission.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7159).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7152).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7152);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const result = require("isFieldEmpty").fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(12544).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgets(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return React.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = tmp2.filter(outer1_4);
    } else {
      found = [];
    }
    return found;
  }, items);
};