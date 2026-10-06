// discord_app/modules/search/native/components/navigator/SearchNavigatorScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import useBaseAppContainerDimensionsDefault from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import ArrowLargeLeftIcon2 from "../../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import NonCollapsableGestureDetector2 from "../../../../gesture_handlers/native/NonCollapsableGestureDetector.tsx";
import useSearchSuggestionsGesture from "../layout/autocomplete/useSearchSuggestionsGesture.tsx";
import SearchScreenSearchBarDefault from "../layout/SearchScreenSearchBar.tsx";
import SearchScreenLayoutDefault from "../layout/SearchScreenLayout.tsx";
import useSearchLayoutInsetTopDefault from "../../hooks/useSearchLayoutInsetTop.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let importDefault, navigation;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, tabs: obj3, back: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj4 = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (navigation) => {
      let detectorRef;
      let first;
      let gesture;
      let items;
      let items1;
      let obj13;
      let suggestionsContext;
      let tmp10;
      const obj = react2;
      const cResult = obj.c(31);
      navigation = navigation.navigation;
      const searchContext = navigation.route.params.searchContext;
      const tmp4 = closure_8();
      const obj2 = useSearchSuggestionsGesture;
      const searchSuggestionsGesture = obj2.useSearchSuggestionsGesture(searchContext);
      ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
      const width = useBaseAppContainerDimensionsDefault().width;
      const tmp7 = useSearchLayoutInsetTopDefault();
      const back = tmp4.back;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["13/7kX"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
        const ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
        const tmp12 = hasOwnProperty(ArrowLargeLeftIcon, obj3);
        cResult[1] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === navigation.goBack) {
        let tmp13;
        let tmp15;
        let tmp18;
        if (cResult[3] === tmp4.back) {
          tmp13 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = hasOwnProperty(ThemedGradientDefault, { absolute: true, wide: true, tall: true });
          cResult[5] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== tmp7) {
          const obj4 = { paddingTop: tmp7 };
          cResult[6] = tmp7;
          cResult[7] = obj4;
          tmp18 = obj4;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] === tmp4.wrapper) {
          let tmp19;
          if (cResult[9] === tmp18) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === tmp13) {
            let tmp20;
            if (cResult[12] === searchContext) {
              tmp20 = cResult[13];
            }
            if (cResult[14] === searchContext) {
              let tmp23;
              if (cResult[15] === width) {
                tmp23 = cResult[16];
              }
              if (cResult[17] === tmp4.tabs) {
                let tmp26;
                if (cResult[18] === tmp23) {
                  tmp26 = cResult[19];
                }
                if (cResult[20] === detectorRef) {
                  if (cResult[21] === tmp20) {
                    if (cResult[22] === tmp26) {
                      let tmp30;
                      if (cResult[23] === tmp19) {
                        tmp30 = cResult[24];
                      }
                      if (cResult[25] === gesture) {
                        let tmp34;
                        if (cResult[26] === tmp30) {
                          tmp34 = cResult[27];
                        }
                        if (cResult[28] === suggestionsContext) {
                          let tmp37;
                          if (cResult[29] === tmp34) {
                            tmp37 = cResult[30];
                          }
                          return tmp37;
                        }
                        const obj5 = { children: items };
                        items = [tmp15];
                        const obj6 = { value: suggestionsContext, children: tmp34 };
                        items[1] = hasOwnProperty(useSearchSuggestionsGesture.SearchSuggestionsProvider, obj6);
                        const tmp41 = metroRequire(metroImportDefault, obj5);
                        cResult[28] = suggestionsContext;
                        cResult[29] = tmp34;
                        cResult[30] = tmp41;
                        tmp37 = tmp41;
                      }
                      const obj7 = { gesture, children: tmp30 };
                      const tmp36 = hasOwnProperty(NonCollapsableGestureDetector2.NonCollapsableGestureDetector, obj7);
                      cResult[25] = gesture;
                      cResult[26] = tmp30;
                      cResult[27] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                }
                const obj8 = { ref: detectorRef, style: tmp19, children: items1 };
                items1 = [tmp20, tmp26];
                const tmp33 = metroRequire(View, obj8);
                cResult[20] = detectorRef;
                cResult[21] = tmp20;
                cResult[22] = tmp26;
                cResult[23] = tmp19;
                cResult[24] = tmp33;
                tmp30 = tmp33;
              }
              const obj9 = { style: tmp4.tabs, children: tmp23 };
              const tmp29 = hasOwnProperty(View, obj9);
              cResult[17] = tmp4.tabs;
              cResult[18] = tmp23;
              cResult[19] = tmp29;
              tmp26 = tmp29;
            }
            const obj10 = { searchContext, width };
            const tmp25 = hasOwnProperty(SearchScreenLayoutDefault, obj10);
            cResult[14] = searchContext;
            cResult[15] = width;
            cResult[16] = tmp25;
            tmp23 = tmp25;
          }
          const obj11 = { searchContext, backButton: tmp13 };
          const tmp22 = hasOwnProperty(SearchScreenSearchBarDefault, obj11);
          cResult[11] = tmp13;
          cResult[12] = searchContext;
          cResult[13] = tmp22;
          tmp20 = tmp22;
        }
        const items2 = [tmp4.wrapper, tmp18];
        cResult[8] = tmp4.wrapper;
        cResult[9] = tmp18;
        cResult[10] = items2;
        tmp19 = items2;
      }
      const obj12 = { children: hasOwnProperty(Pressables.PressableOpacity, obj13) };
      obj13 = {
        style: back,
        accessibilityLabel: first,
        accessibilityRole: "button",
        onPress: navigation.goBack,
        children: tmp10,
      };
      const tmp14 = hasOwnProperty(View, obj12);
      cResult[2] = navigation.goBack;
      cResult[3] = tmp4.back;
      cResult[4] = tmp14;
      tmp13 = tmp14;
    }
  : (navigation) => {
      let NonCollapsableGestureDetector;
      let back;
      let detectorRef;
      let gesture;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj5;
      let suggestionsContext;
      navigation = navigation.navigation;
      const searchContext = navigation.route.params.searchContext;
      const tmp = closure_8();
      importDefault = tmp;
      let obj = navigation(16810);
      const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
      ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
      const width = useBaseAppContainerDimensionsDefault().width;
      const items = [navigation.goBack, tmp.back];
      let obj2 = { children: items1 };
      const tmp3 = useSearchLayoutInsetTopDefault();
      const memo = react.useMemo(() => {
        let ArrowLargeLeftIcon;
        let PressableOpacity;
        let intl;
        let obj2;
        let obj3;
        const obj = { children: hasOwnProperty(PressableOpacity, obj2) };
        obj2 = {
          style: back.back,
          accessibilityLabel: intl.string(intl2.t["13/7kX"]),
          accessibilityRole: "button",
          onPress: navigation.goBack,
          children: hasOwnProperty(ArrowLargeLeftIcon, obj3),
        };
        PressableOpacity = Pressables.PressableOpacity;
        intl = intl2.intl;
        obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
        ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
        return hasOwnProperty(View, obj);
      }, items);
      items1 = [closure_5(ThemedGradientDefault, { absolute: true, wide: true, tall: true })];
      let obj3 = { value: suggestionsContext, children: closure_5(NonCollapsableGestureDetector, obj4) };
      const SearchSuggestionsProvider = navigation(16810).SearchSuggestionsProvider;
      obj4 = { gesture, children: closure_6(View, obj5) };
      obj5 = { ref: detectorRef, style: items2, children: items3 };
      items2 = [tmp.wrapper, { paddingTop: tmp3 }];
      NonCollapsableGestureDetector = navigation(16343).NonCollapsableGestureDetector;
      items3 = [closure_5(SearchScreenSearchBarDefault, { searchContext, backButton: memo })];
      const obj6 = { style: tmp.tabs, children: closure_5(SearchScreenLayoutDefault, { searchContext, width }) };
      items3[1] = closure_5(View, obj6);
      items1[1] = closure_5(SearchSuggestionsProvider, obj3);
      return closure_6(closure_7, obj2);
    };
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default tmp4;
