// === Module 8659: PersonalWidgetExpandCollapseContext ===

// Module 8659 (PersonalWidgetExpandCollapseContext)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let redux = noop.createContext({
  isAnyFieldClipped: false,
  isExpanded: false,
  setAnyFieldClipped() {

  },
  setIsExpanded() {

  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/PersonalWidgetExpandCollapseContext.tsx");

export const PersonalWidgetExpandCollapseProvider = function PersonalWidgetExpandCollapseProvider(children) {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const isExpanded = tmp[0];
  const setIsExpanded = tmp[1];
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp3[0];
  redux = tmp3[1];
  const first2 = _slicedToArray(noop.useState(() => new Set()), 1)[0];
  const items = [first2];
  const setAnyFieldClipped = noop.useCallback((arg0, arg1) => {
    if (arg1) {
      obj.add(arg0);
      let tmp2 = obj;
    } else {
      obj.delete(arg0);
      tmp2 = obj;
    }
    closure_3(tmp2.size > 0);
  }, items);
  const items1 = [isExpanded, first1, setAnyFieldClipped];
  return <redux.Provider value={noop.useMemo(() => ({ isExpanded, setIsExpanded, isAnyFieldClipped: first1, setAnyFieldClipped }), items1)}>{arg0.children}</redux.Provider>;
};
export const usePersonalWidgetExpandCollapse = function usePersonalWidgetExpandCollapse() {
  return noop.useContext(closure_3);
};
export const usePersonalWidgetFieldClamp = function usePersonalWidgetFieldClamp(maxLines, children) {
  closure_0 = maxLines;
  closure_1 = children;
  const context = noop.useContext(closure_3);
  const setAnyFieldClipped = context.setAnyFieldClipped;
  const id = noop.useId();
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const first = tmp3[0];
  closure_5 = tmp3[1];
  const items = [first, children, id, maxLines, setAnyFieldClipped];
  const items1 = [id, setAnyFieldClipped];
  const callback = noop.useCallback((nativeEvent) => {
    if (first !== closure_1) {
      closure_5(tmp);
      setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
    }
  }, items);
  const effect = noop.useEffect(() => () => setAnyFieldClipped(id, false), items1);
  const obj = { onTextLayout: callback, lineClamp: null };
  let tmp7;
  if (first === children) {
    if (!context.isExpanded) {
      tmp7 = maxLines;
    }
  }
  obj.lineClamp = tmp7;
  return obj;
};