// === Module 16879: SearchScreenLayout ===

// Module 16879 (SearchScreenLayout)
import AppFreezerDefault from "AppFreezer" /* 16682 */;
import SearchTabsLayoutDefault from "SearchTabsLayout" /* 16880 */;
import AutocompleteScreenDefault from "AutocompleteScreen" /* 16972 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12491 */;

const require = fn;
function SearchFreezeContainer(visible) {
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = closure_8();
  const obj = { manualFreeze: !visible, placeholder: null, children: null };
  const items = [containerStyle, visible ? tmp.visible : tmp.hidden];
  obj.children = hasOwnProperty(View, { style: items, "aria-hidden": !visible, children });
  return hasOwnProperty(AppFreezerDefault, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let closure_8 = createStyles.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default noop.memo((width) => {
  const searchContext = width.searchContext;
  const containerStyle = width.containerStyle;
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => SearchQueryStore.isAutocompleteVisible(searchContext), items1);
  const obj2 = { children: null };
  const obj = searchContext(504);
  const items2 = [closure_5(SearchFreezeContainer, { visible: !stateFromStores, containerStyle, children: closure_5(SearchTabsLayoutDefault, { searchContext, width: width.width }) }), ];
  const obj3 = { visible: !stateFromStores, containerStyle, children: closure_5(SearchTabsLayoutDefault, { searchContext, width: width.width }) };
  items2[1] = closure_5(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: closure_5(AutocompleteScreenDefault, { searchContext }) });
  obj2.children = items2;
  return closure_7(closure_6, obj2);
});