import { View } from "get ActivityIndicator";
import prototype from "prototype";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c5;
let closure_6;
let error;
const require = arg1;
function SearchFreezeContainer(visible) {
  let children;
  let containerStyle;
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = callback3();
  let obj = { manualFreeze: !visible, placeholder: null, children: null };
  const items = [containerStyle, ];
  obj = { style: items, "aria-hidden": !visible, children };
  items[1] = visible ? tmp.visible : tmp.hidden;
  obj[2] = closure_5(View, obj);
  return closure_5(importDefault(15481), obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
const memoResult = require("noop").memo((width) => {
  const searchContext = width.searchContext;
  const containerStyle = width.containerStyle;
  let obj = searchContext(589);
  const items = [prototype];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.isAutocompleteVisible(searchContext), items1);
  obj = { children: null };
  obj = { visible: !stateFromStores, containerStyle, children: callback(importDefault(15564), { searchContext, width: width.width }) };
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(importDefault(15648), { searchContext }) })];
  obj[0] = items2;
  return callback2(closure_6, obj);
});
const result = require("prototype").fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;