// === Module 14624: useBoardWidgets ===

// Module 14624 (useBoardWidgets)
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14514 */;
import BoardWidgetUtils from "BoardWidgetUtils" /* 14625 */;
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