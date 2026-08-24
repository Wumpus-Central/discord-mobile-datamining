// === Module 16081: SearchNavigatorScreen ===

// Module 16081 (SearchNavigatorScreen)
import ThemesDefault from "Themes" /* 712 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4234 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 9091 */;
import _modDef15849 from "module_15849" /* 15849 */;
import SearchFreezeContainerDefault from "SearchFreezeContainer" /* 15860 */;
import useSearchLayoutInsetTopDefault from "useSearchLayoutInsetTop" /* 16082 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { wrapper: null, tabs: null, back: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, marginTop: ThemesDefault.space.PX_16 };
let obj1 = { flex: 1, marginTop: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_12 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj2 = { marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  importDefault = undefined;
  const tmp = callback3();
  importDefault = tmp;
  let obj = navigation(15847);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  obj = { children: null };
  const memo = React.useMemo(() => {
    let obj = { children: null };
    obj = { style: lib.back, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = navigation(closure_1_2[9]).intl;
    obj[1] = intl.string(navigation(closure_1_2[9]).t["13/7kX"]);
    obj[3] = navigation.goBack;
    obj = { color: lib(closure_1_2[4]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj[4] = closure_1_5(navigation(closure_1_2[10]).ArrowLargeLeftIcon, obj);
    obj[0] = closure_1_5(navigation(closure_1_2[8]).PressableOpacity, obj);
    return closure_1_5(closure_1_4, obj);
  }, items);
  const items1 = [callback(getMixedGradientColorDefault, { absolute: true, wide: true, tall: true }), ];
  obj = { gesture, children: null };
  obj1 = { style: items2, children: null };
  items2 = [tmp.wrapper, { paddingTop: useSearchLayoutInsetTopDefault() }];
  const items3 = [callback(_modDef15849, { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: memo }), ];
  const tmp3 = useSearchLayoutInsetTopDefault();
  items3[1] = callback(View, { style: tmp.tabs, children: callback(SearchFreezeContainerDefault, { searchContext, width: useBaseAppContainerDimensionsDefault().width }) });
  obj1[1] = items3;
  obj[1] = callback2(View, obj1);
  items1[1] = callback(navigation(15624).NonCollapsableGestureDetector, obj);
  obj[0] = items1;
  return callback2(closure_7, obj);
};