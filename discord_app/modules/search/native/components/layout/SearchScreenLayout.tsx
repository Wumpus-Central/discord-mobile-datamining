// === Module 16151: SearchFreezeContainer ===

// Module 16151 (SearchFreezeContainer)
import jsxDefault from "jsx" /* 16041 */;
import NoSearchResultsScreenDefault from "NoSearchResultsScreen" /* 16152 */;
import _modDef16236 from "module_16236" /* 16236 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "prototype" /* 11842 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
function SearchFreezeContainer(visible) {
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = callback3();
  let obj = { manualFreeze: !visible, placeholder: null, children: null };
  const items = [containerStyle, ];
  obj = { style: items, "aria-hidden": !visible, children };
  items[1] = visible ? tmp.visible : tmp.hidden;
  obj[2] = closure_5(View, obj);
  return closure_5(jsxDefault, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const memoResult = importAllResult.memo((width) => {
  const searchContext = width.searchContext;
  const containerStyle = width.containerStyle;
  let obj = searchContext(589);
  const items = [closure_4];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.isAutocompleteVisible(searchContext), items1);
  obj = { children: null };
  obj = { visible: !stateFromStores, containerStyle, children: callback(NoSearchResultsScreenDefault, { searchContext, width: width.width }) };
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(_modDef16236, { searchContext }) })];
  obj[0] = items2;
  return callback2(closure_6, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;