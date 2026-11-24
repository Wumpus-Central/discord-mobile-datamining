// === Module 14501: useBoardWidgets ===

// Module 14501 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14391 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 14502 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useBoardWidgets.tsx");

export function useBoardWidgets(stateFromStores) {
  const tmp = useUserProfileWidgetsDefault(stateFromStores);
  closure_0 = tmp;
  items = [tmp];
  return noop.useMemo(() => closure_0.filter(BoardWidgetUtils.isBoardWidget), items);
}