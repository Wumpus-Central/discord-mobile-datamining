// discord_app/modules/user_profile/native/useBoardWidgets.tsx
import useUserProfileWidgetsDefault from "../hooks/useUserProfileWidgets.tsx";
import BoardWidgetUtils from "BoardWidgetUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useBoardWidgets.tsx");

export function useBoardWidgets(stateFromStores) {
  const tmp = useUserProfileWidgetsDefault(stateFromStores);
  closure_0 = tmp;
  items = [tmp];
  return noop.useMemo(() => closure_0.filter(BoardWidgetUtils.isBoardWidget), items);
}
