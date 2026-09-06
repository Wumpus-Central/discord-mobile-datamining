// discord_app/modules/search/native/components/navigator/SearchNavigatorScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useBaseAppContainerDimensionsDefault from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import ArrowLargeLeftIcon from "../../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import SearchScreenSearchBarDefault from "../layout/SearchScreenSearchBar.tsx";
import SearchScreenLayoutDefault from "../layout/SearchScreenLayout.tsx";
import useSearchLayoutInsetTopDefault from "../../hooks/useSearchLayoutInsetTop.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, tabs: null, back: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrapper = createStyles;
createStyles.tabs = { flex: 1, marginTop: nativeDefault.space.PX_16 };
let obj1 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
createStyles.back = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = closure_8();
  importDefault = tmp;
  let obj = navigation(16625);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  obj = { children: null };
  const memo = noop.useMemo(() => {
    let obj = { children: null };
    obj = { style: back.back, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj.onPress = navigation.goBack;
    obj = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    obj.children = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj);
    obj.children = hasOwnProperty(Pressables.PressableOpacity, obj);
    return hasOwnProperty(View, obj);
  }, items);
  const items1 = [closure_5(ThemedGradientDefault, { absolute: true, wide: true, tall: true })];
  obj = { gesture, children: null };
  const obj1 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: useSearchLayoutInsetTopDefault() }];
  obj1.style = items2;
  const items3 = [
    closure_5(SearchScreenSearchBarDefault, {
      searchContext,
      suggestionsDismissed: dismissed,
      setSuggestionsDismissed: setDismissed,
      onSuggestionsLayoutMesure: onLayoutMeasure,
      backButton: memo,
    }),
  ];
  const tmp3 = useSearchLayoutInsetTopDefault();
  items3[1] = closure_5(View, {
    style: tmp.tabs,
    children: closure_5(SearchScreenLayoutDefault, {
      searchContext,
      width: useBaseAppContainerDimensionsDefault().width,
    }),
  });
  obj1.children = items3;
  obj.children = closure_6(View, obj1);
  items1[1] = closure_5(navigation(16361).NonCollapsableGestureDetector, obj);
  obj.children = items1;
  return closure_6(closure_7, obj);
}
