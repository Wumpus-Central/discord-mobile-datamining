// discord_app/modules/search/native/components/navigator/SearchNavigatorScreen.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useBaseAppContainerDimensionsDefault from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ArrowLargeLeftIcon from "../../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import NonCollapsableGestureDetector from "../../../../gesture_handlers/native/NonCollapsableGestureDetector.tsx";
import useSearchSuggestionsGesture from "../layout/autocomplete/useSearchSuggestionsGesture.tsx";
import SearchScreenSearchBarDefault from "../layout/SearchScreenSearchBar.tsx";
import SearchScreenLayoutDefault from "../layout/SearchScreenLayout.tsx";
import useSearchLayoutInsetTopDefault from "../../hooks/useSearchLayoutInsetTop.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, tabs: null, back: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.tabs = { flex: 1, marginTop: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj2.back = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchNavigatorScreen(navigation) {
      const cResult = c.c(31);
      navigation = navigation.navigation;
      const searchContext = navigation.route.params.searchContext;
      const tmp4 = closure_8();
      const searchSuggestionsGesture = useSearchSuggestionsGesture.useSearchSuggestionsGesture(searchContext);
      ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
      const width = useBaseAppContainerDimensionsDefault().width;
      const tmp7 = useSearchLayoutInsetTopDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["13/7kX"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
        const tmp12 = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj3);
        cResult[1] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === navigation.goBack) {
        if (cResult[3] === tmp4.back) {
          let tmp13 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = hasOwnProperty(ThemedGradientDefault, { absolute: true, wide: true, tall: true });
          cResult[5] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== tmp7) {
          const obj4 = { paddingTop: tmp7 };
          cResult[6] = tmp7;
          cResult[7] = obj4;
          let tmp18 = obj4;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] === tmp4.wrapper) {
          if (cResult[9] === tmp18) {
            let tmp19 = cResult[10];
          }
          if (cResult[11] === tmp13) {
            if (cResult[12] === searchContext) {
              let tmp20 = cResult[13];
            }
            if (cResult[14] === searchContext) {
              if (cResult[15] === width) {
                let tmp23 = cResult[16];
              }
              if (cResult[17] === tmp4.tabs) {
                if (cResult[18] === tmp23) {
                  let tmp26 = cResult[19];
                }
                if (cResult[20] === detectorRef) {
                  if (cResult[21] === tmp20) {
                    if (cResult[22] === tmp26) {
                      if (cResult[23] === tmp19) {
                        let tmp30 = cResult[24];
                      }
                      if (cResult[25] === gesture) {
                        if (cResult[26] === tmp30) {
                          let tmp34 = cResult[27];
                        }
                        if (cResult[28] === suggestionsContext) {
                          if (cResult[29] === tmp34) {
                            let tmp37 = cResult[30];
                          }
                          return tmp37;
                        }
                        const obj5 = { children: null };
                        const items = [tmp15];
                        const obj6 = { value: suggestionsContext, children: tmp34 };
                        items[1] = hasOwnProperty(useSearchSuggestionsGesture.SearchSuggestionsProvider, obj6);
                        obj5.children = items;
                        const tmp41 = timestampProducer(React5, obj5);
                        cResult[28] = suggestionsContext;
                        cResult[29] = tmp34;
                        cResult[30] = tmp41;
                        tmp37 = tmp41;
                      }
                      const obj7 = { gesture, children: tmp30 };
                      const tmp36 = hasOwnProperty(NonCollapsableGestureDetector.NonCollapsableGestureDetector, obj7);
                      cResult[25] = gesture;
                      cResult[26] = tmp30;
                      cResult[27] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                }
                const obj8 = { ref: detectorRef, style: tmp19, children: null };
                const items1 = [tmp20, tmp26];
                obj8.children = items1;
                const tmp33 = timestampProducer(View, obj8);
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
      const obj12 = {
        children: hasOwnProperty(Pressables.PressableOpacity, {
          style: tmp4.back,
          accessibilityLabel: first,
          accessibilityRole: "button",
          onPress: navigation.goBack,
          children: tmp10,
        }),
      };
      const tmp14 = hasOwnProperty(View, obj12);
      cResult[2] = navigation.goBack;
      cResult[3] = tmp4.back;
      cResult[4] = tmp14;
      tmp13 = tmp14;
      const obj13 = {
        style: tmp4.back,
        accessibilityLabel: first,
        accessibilityRole: "button",
        onPress: navigation.goBack,
        children: tmp10,
      };
    }
  : function SearchNavigatorScreen(navigation) {
      navigation = navigation.navigation;
      const searchContext = navigation.route.params.searchContext;
      const tmp = closure_8();
      importDefault = tmp;
      const searchSuggestionsGesture = navigation(17239).useSearchSuggestionsGesture(searchContext);
      ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
      const items = [navigation.goBack, tmp.back];
      let obj = navigation(17239);
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
      const obj3 = { value: suggestionsContext, children: null };
      const obj4 = { gesture, children: null };
      const obj5 = { ref: detectorRef, style: null, children: null };
      const items2 = [tmp.wrapper, { paddingTop: useSearchLayoutInsetTopDefault() }];
      obj5.style = items2;
      const items3 = [closure_5(SearchScreenSearchBarDefault, { searchContext, backButton: memo })];
      const tmp3 = useSearchLayoutInsetTopDefault();
      items3[1] = closure_5(View, {
        style: tmp.tabs,
        children: closure_5(SearchScreenLayoutDefault, {
          searchContext,
          width: useBaseAppContainerDimensionsDefault().width,
        }),
      });
      obj5.children = items3;
      obj4.children = closure_6(View, obj5);
      obj3.children = closure_5(navigation(16726).NonCollapsableGestureDetector, obj4);
      items1[1] = closure_5(navigation(17239).SearchSuggestionsProvider, obj3);
      obj2.children = items1;
      return closure_6(closure_7, obj2);
    };
