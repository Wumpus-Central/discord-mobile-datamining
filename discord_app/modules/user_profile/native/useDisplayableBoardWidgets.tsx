// === Module 14676: useDisplayableBoardWidgets ===

// Module 14676 (useDisplayableBoardWidgets)
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useDisplayableBoardWidgets.tsx");

export function useDisplayableBoardWidgets(id) {
  let flag = isEditing;
  if (isEditing === undefined) {
    flag = false;
  }
  let boardWidgets;
  boardWidgets = flag(boardWidgets[1]).useBoardWidgets(id);
  items = [boardWidgets, flag];
  return noop.useMemo(() => {
    if (flag) {
      let found = boardWidgets;
    } else {
      found = boardWidgets.filter((games) => {
        const isGameWidgetResult = flag(boardWidgets[2]).isGameWidget(games);
        let tmp2 = !isGameWidgetResult;
        if (isGameWidgetResult) {
          tmp2 = games.games.length > 0;
        }
        return tmp2;
      });
    }
    return found;
  }, items);
}