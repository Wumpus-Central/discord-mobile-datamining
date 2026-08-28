// === Module 8727: PersonalWidgetExpandCollapseProvider ===

// Module 8727 (PersonalWidgetExpandCollapseProvider)
import closure_0 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let context = importAllResult.createContext({
  isAnyFieldClipped: false,
  isExpanded: false,
  setAnyFieldClipped(id, arg1) {

  },
  setIsExpanded() {

  }
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/PersonalWidgetExpandCollapseContext.tsx");

export const PersonalWidgetExpandCollapseProvider = function PersonalWidgetExpandCollapseProvider(children) {
  let first;
  importAllResult = undefined;
  let first1;
  let redux;
  let first2;
  let callback;
  const tmp = first(importAllResult.useState(false), 2);
  first = tmp[0];
  importAllResult = tmp[1];
  const tmp3 = first(importAllResult.useState(false), 2);
  first1 = tmp3[0];
  redux = tmp3[1];
  first2 = first(importAllResult.useState(() => new Set()), 1)[0];
  const items = [first2];
  callback = importAllResult.useCallback((arg0, arg1) => {
    if (arg1) {
      obj.add(arg0);
      let tmp2 = obj;
    } else {
      obj.delete(arg0);
      tmp2 = obj;
    }
    callback(tmp2.size > 0);
  }, items);
  const items1 = [first, first1, callback];
  return first1(redux.Provider, { value: importAllResult.useMemo(() => ({ isExpanded: first, setIsExpanded: closure_1, isAnyFieldClipped: first1, setAnyFieldClipped: callback }), items1), children: children.children });
};
export const usePersonalWidgetExpandCollapse = function usePersonalWidgetExpandCollapse() {
  return importAllResult.useContext(closure_3);
};
export const usePersonalWidgetFieldClamp = function usePersonalWidgetFieldClamp(maxLines, children) {
  let callback = maxLines;
  const context = importAllResult.useContext(id);
  const setAnyFieldClipped = context.setAnyFieldClipped;
  id = importAllResult.useId();
  const tmp3 = callback(children.useState(null), 2);
  const first = tmp3[0];
  closure_5 = tmp3[1];
  const items = [first, children, id, maxLines, setAnyFieldClipped];
  const items1 = [id, setAnyFieldClipped];
  callback = importAllResult.useCallback((nativeEvent) => {
    if (first !== closure_1) {
      callback(tmp);
      setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
    }
  }, items);
  const effect = importAllResult.useEffect(() => () => callback(closure_3, false), items1);
  const obj = { onTextLayout: callback, lineClamp: null };
  let tmp7;
  if (first === children) {
    if (!context.isExpanded) {
      tmp7 = maxLines;
    }
  }
  obj[1] = tmp7;
  return obj;
};