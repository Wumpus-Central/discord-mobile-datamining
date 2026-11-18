// discord_app/modules/user_profile/hooks/useDisplayableBoardWidgets.tsx
import useUserProfileWidgetsDefault from "useUserProfileWidgets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export function useDisplayableBoardWidgets(id) {
  let flag = isEditing;
  if (isEditing === undefined) {
    flag = false;
  }
  let tmp = useUserProfileWidgetsDefault(id);
  importDefault = tmp;
  items = [tmp, flag];
  return noop.useMemo(
    () =>
      closure_1.filter((games) => {
        let tmp = closure_1_0;
        let tmp4 = games instanceof flag(dependencyMap[1]).ApplicationWidget;
        if (!tmp4) {
          let isGameWidgetResult = flag(dependencyMap[2]).isGameWidget(games);
          if (isGameWidgetResult) {
            if (!tmp) {
              tmp = games.games.length > 0;
            }
            isGameWidgetResult = tmp;
          }
          tmp4 = isGameWidgetResult;
          const tmp2Result = flag(dependencyMap[2]);
        }
        return tmp4;
      }),
    items,
  );
}
