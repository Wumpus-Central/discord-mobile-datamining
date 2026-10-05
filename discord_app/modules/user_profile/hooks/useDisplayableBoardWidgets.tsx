// discord_app/modules/user_profile/hooks/useDisplayableBoardWidgets.tsx
import react2 from "../../../../_runtime/00576_react.js";
import UserProfileGameWidgetTypes from "../UserProfileGameWidgetTypes.tsx";
import UserProfileApplicationWidgetTypes from "../UserProfileApplicationWidgetTypes.tsx";
import UserProfilePersonalWidget from "../UserProfilePersonalWidget.tsx";
import useUserProfileWidgetsDefault from "useUserProfileWidgets.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof UserProfilePersonalWidget.UserProfilePersonalWidget;
    if (!tmp4) {
      const tmpResult = UserProfileGameWidgetTypes;
      tmp4 = tmpResult.isGameWidget(games) && games.games.length > 0;
      const isGameWidgetResult = tmpResult.isGameWidget(games) && games.games.length > 0;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(2);
      const arr = useUserProfileWidgetsDefault(arg0);
      if (cResult[0] !== arr) {
        const found = arr.filter(isNonEmptyBoardWidget);
        cResult[0] = arr;
        cResult[1] = found;
        tmp2 = found;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      const tmp = useUserProfileWidgetsDefault(arg0);
      let closure_0 = tmp;
      const items = [tmp];
      return react.useMemo(() => closure_0.filter(isNonEmptyBoardWidget), items);
    };
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = tmp2;
