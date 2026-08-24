// discord_app/modules/search/native/components/layout/SearchScreenLayout.tsx
import jsxDefault from "../../../../panels/morphable/native/AppFreezer.tsx";
import NoSearchResultsScreenDefault from "../tabs/SearchTabsLayout.tsx";
import _modDef16042 from "autocomplete/AutocompleteScreen.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../stores/SearchQueryStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

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
  const items2 = [callback(SearchFreezeContainer, obj), callback(SearchFreezeContainer, { visible: stateFromStores, containerStyle, children: callback(_modDef16042, { searchContext }) })];
  obj[0] = items2;
  return callback2(closure_6, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;