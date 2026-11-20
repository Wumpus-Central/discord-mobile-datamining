// === Module 10229: useBoardWidgets ===

// Module 10229 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 10093 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 10230 */;
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