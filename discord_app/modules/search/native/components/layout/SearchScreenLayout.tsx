// === Module 15860: SearchFreezeContainer ===

// Module 15860 (SearchFreezeContainer)
import jsxDefault from "jsx" /* 15778 */;
import NoSearchResultsScreenDefault from "NoSearchResultsScreen" /* 15861 */;
import _modDef15945 from "module_15945" /* 15945 */;
import { View } from "get ActivityIndicator" /* 17 */;
import prototype from "prototype" /* 11510 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
function SearchFreezeContainer(visible) {
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = callback3();
  const items = [containerStyle, ];
  const obj = { style: items, "aria-hidden": !visible, children };
  items[1] = visible ? tmp.visible : tmp.hidden;
  obj[2] = callback(View, obj);
  return callback(jsxDefault, obj);
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
  obj = { visible: !stateFromStores, containerStyle, children: callback(NoSearchResultsScreenDefault, { searchContext, width: width.width }) };
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(_modDef15945, { searchContext }) })];
  obj[0] = items2;
  return callback2(closure_6, obj);
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;