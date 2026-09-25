// === Module 16655: SearchNavigatorScreen ===

// Module 16655 (SearchNavigatorScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4693 */;
import Pressables from "Pressables" /* 5428 */;
import ThemedGradientDefault from "ThemedGradient" /* 5430 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5935 */;
import SearchScreenSearchBarDefault from "SearchScreenSearchBar" /* 16408 */;
import SearchScreenLayoutDefault from "SearchScreenLayout" /* 16417 */;
import useSearchLayoutInsetTopDefault from "useSearchLayoutInsetTop" /* 16656 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, tabs: null, back: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.tabs = { flex: 1, marginTop: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj2.back = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = closure_8();
  importDefault = tmp;
  const searchSuggestionsGesture = navigation(16406).useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  let obj = navigation(16406);
  let obj2 = { children: null };
  const memo = noop.useMemo(() => {
    const obj = { children: null };
    const obj2 = { style: back.back, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj2.onPress = navigation.goBack;
    obj2.children = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
    obj.children = hasOwnProperty(Pressables.PressableOpacity, obj2);
    return hasOwnProperty(View, obj);
  }, items);
  const items1 = [closure_5(ThemedGradientDefault, { absolute: true, wide: true, tall: true }), ];
  const obj3 = { gesture, children: null };
  const obj4 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: useSearchLayoutInsetTopDefault() }];
  obj4.style = items2;
  const items3 = [closure_5(SearchScreenSearchBarDefault, { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: memo }), ];
  const tmp3 = useSearchLayoutInsetTopDefault();
  items3[1] = closure_5(View, { style: tmp.tabs, children: closure_5(SearchScreenLayoutDefault, { searchContext, width: useBaseAppContainerDimensionsDefault().width }) });
  obj4.children = items3;
  obj3.children = closure_6(View, obj4);
  items1[1] = closure_5(navigation(15973).NonCollapsableGestureDetector, obj3);
  obj2.children = items1;
  return closure_6(closure_7, obj2);
};