// discord_app/modules/search/native/components/layout/SearchScreenLayout.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import AppFreezerDefault from "../../../../panels/morphable/native/AppFreezer.tsx";
import SearchTabsLayoutDefault from "../tabs/SearchTabsLayout.tsx";
import AutocompleteScreenDefault from "autocomplete/AutocompleteScreen.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import SearchQueryStore from "../../stores/SearchQueryStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let searchContext;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let containerStyle;
      let visible;
      const obj = react2;
      const cResult = obj.c(10);
      ({ visible, children, containerStyle } = arg0);
      const tmp3 = closure_8();
      const tmp5 = visible ? tmp3.visible : tmp3.hidden;
      if (cResult[0] === containerStyle) {
        let tmp6;
        if (cResult[1] === tmp5) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp6) {
            let tmp8;
            if (cResult[5] === !visible) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === !visible) {
              let tmp12;
              if (cResult[8] === tmp8) {
                tmp12 = cResult[9];
              }
              return tmp12;
            }
            const obj2 = { manualFreeze: !visible, placeholder: null, children: tmp8 };
            const tmp15 = hasOwnProperty(AppFreezerDefault, obj2);
            cResult[7] = !visible;
            cResult[8] = tmp8;
            cResult[9] = tmp15;
            tmp12 = tmp15;
          }
        }
        const obj3 = { style: tmp6, "aria-hidden": !visible, children };
        const tmp11 = hasOwnProperty(View, obj3);
        cResult[3] = children;
        cResult[4] = tmp6;
        cResult[5] = !visible;
        cResult[6] = tmp11;
        tmp8 = tmp11;
      }
      const items = [containerStyle, tmp5];
      cResult[0] = containerStyle;
      cResult[1] = tmp5;
      cResult[2] = items;
      tmp6 = items;
    }
  : (visible) => {
      let children;
      let containerStyle;
      let obj2;
      visible = visible.visible;
      ({ children, containerStyle } = visible);
      const tmp = closure_8();
      const items = [containerStyle];
      const obj = { manualFreeze: !visible, placeholder: null, children: hasOwnProperty(View, obj2) };
      obj2 = { style: items, "aria-hidden": !visible, children };
      items[1] = visible ? tmp.visible : tmp.hidden;
      const tmp3 = AppFreezerDefault;
      return hasOwnProperty(tmp3, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let containerStyle;
        let first;
        let items2;
        let tmp6;
        let tmp7;
        let width;
        const obj = searchContext(576);
        const cResult = obj.c(20);
        const tmp = searchContext;
        searchContext = searchContext.searchContext;
        ({ containerStyle, width } = searchContext);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SearchQueryStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== searchContext) {
          const fn = function c() {
            return SearchQueryStore.isAutocompleteVisible(searchContext);
          };
          const items1 = [searchContext];
          cResult[1] = searchContext;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp7 = items1;
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
        if (cResult[4] === searchContext) {
          let tmp10;
          if (cResult[5] === width) {
            tmp10 = cResult[6];
          }
          if (cResult[7] === containerStyle) {
            if (cResult[8] === !stateFromStores) {
              let tmp12;
              let tmp16;
              if (cResult[9] === tmp10) {
                tmp12 = cResult[10];
              }
              if (cResult[11] !== searchContext) {
                const obj2 = { searchContext };
                const tmp19 = closure_5(AutocompleteScreenDefault, obj2);
                cResult[11] = searchContext;
                cResult[12] = tmp19;
                tmp16 = tmp19;
              } else {
                tmp16 = cResult[12];
              }
              if (cResult[13] === containerStyle) {
                if (cResult[14] === stateFromStores) {
                  let tmp20;
                  if (cResult[15] === tmp16) {
                    tmp20 = cResult[16];
                  }
                  if (cResult[17] === tmp12) {
                    let tmp24;
                    if (cResult[18] === tmp20) {
                      tmp24 = cResult[19];
                    }
                    return tmp24;
                  }
                  const obj3 = { children: items2 };
                  items2 = [tmp12, tmp20];
                  const tmp27 = closure_7(closure_6, obj3);
                  cResult[17] = tmp12;
                  cResult[18] = tmp20;
                  cResult[19] = tmp27;
                  tmp24 = tmp27;
                }
              }
              const obj4 = { visible: stateFromStores, containerStyle, children: tmp16 };
              const tmp23 = closure_5(closure_9, obj4);
              cResult[13] = containerStyle;
              cResult[14] = stateFromStores;
              cResult[15] = tmp16;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
          }
          const obj5 = { visible: !stateFromStores, containerStyle, children: tmp10 };
          const tmp15 = closure_5(closure_9, obj5);
          cResult[7] = containerStyle;
          cResult[8] = !stateFromStores;
          cResult[9] = tmp10;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
        const tmp11 = closure_5(SearchTabsLayoutDefault, { searchContext, width });
        cResult[4] = searchContext;
        cResult[5] = width;
        cResult[6] = tmp11;
        tmp10 = tmp11;
      }
    : (searchContext) => {
        let items2;
        searchContext = searchContext.searchContext;
        const containerStyle = searchContext.containerStyle;
        const width = searchContext.width;
        const items = [SearchQueryStore];
        const items1 = [searchContext];
        const obj = searchContext(504);
        const stateFromStores = obj.useStateFromStores(
          items,
          () => SearchQueryStore.isAutocompleteVisible(searchContext),
          items1,
        );
        const obj2 = { children: items2 };
        items2 = [,];
        const obj3 = {
          visible: !stateFromStores,
          containerStyle,
          children: closure_5(SearchTabsLayoutDefault, { searchContext, width }),
        };
        items2[0] = closure_5(closure_9, obj3);
        const obj4 = {
          visible: stateFromStores,
          containerStyle,
          children: closure_5(AutocompleteScreenDefault, { searchContext }),
        };
        items2[1] = closure_5(closure_9, obj4);
        return closure_7(closure_6, obj2);
      },
);
const result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default memoResult;
