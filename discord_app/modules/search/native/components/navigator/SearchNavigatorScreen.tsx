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
const createStyles = fn(4636);
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
  const searchSuggestionsGesture = navigation(16734).useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  let obj = navigation(16734);
  let obj2 = { children: null };
  const memo = noop.useMemo(() => {
    const obj = { children: null };
    const obj2 = {
      style: back.back,
      accessibilityLabel: null,
      accessibilityRole: "button",
      onPress: null,
      children: null,
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj2.onPress = navigation.goBack;
    obj2.children = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, {
      color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
    });
    obj.children = hasOwnProperty(Pressables.PressableOpacity, obj2);
    return hasOwnProperty(View, obj);
  }, items);
  const items1 = [closure_5(ThemedGradientDefault, { absolute: true, wide: true, tall: true })];
  const obj3 = { gesture, children: null };
  const obj4 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: useSearchLayoutInsetTopDefault() }];
  obj4.style = items2;
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
  obj4.children = items3;
  obj3.children = closure_6(View, obj4);
  items1[1] = closure_5(navigation(16459).NonCollapsableGestureDetector, obj3);
  obj2.children = items1;
  return closure_6(closure_7, obj2);
}
