// discord_app/modules/search/native/components/navigator/SearchNavigatorScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useBaseAppContainerDimensionsDefault from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import getMixedGradientColorDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import _modDef15849 from "../layout/SearchScreenSearchBar.tsx";
import SearchFreezeContainerDefault from "../layout/SearchScreenLayout.tsx";
import useSearchLayoutInsetTopDefault from "../../hooks/useSearchLayoutInsetTop.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, marginTop: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_12 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = callback3();
  importDefault = tmp;
  let obj = navigation(15847);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  const memo = React.useMemo(() => {
    let obj = { style: lib.back, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = navigation(dependencyMap[9]).intl;
    obj[1] = intl.string(navigation(dependencyMap[9]).t["13/7kX"]);
    obj[3] = navigation.goBack;
    obj = { color: lib(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj[4] = closure_1_5(navigation(dependencyMap[10]).ArrowLargeLeftIcon, obj);
    obj[0] = closure_1_5(navigation(dependencyMap[8]).PressableOpacity, obj);
    return closure_1_5(View, obj);
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