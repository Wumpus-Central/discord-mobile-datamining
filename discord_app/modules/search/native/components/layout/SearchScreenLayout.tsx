// === Module 17250: SearchScreenLayout ===

// Module 17250 (SearchScreenLayout)
import c from "c" /* 576 */;
import AppFreezerDefault from "AppFreezer" /* 16890 */;
import SearchTabsLayoutDefault from "SearchTabsLayout" /* 17251 */;
import AutocompleteScreenDefault from "AutocompleteScreen" /* 17361 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12004 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ hidden: { opacity: 0 }, visible: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchFreezeContainer(arg0) {
  const cResult = c.c(10);
  ({ visible, children, containerStyle } = arg0);
  const tmp3 = closure_8();
  const tmp5 = visible ? tmp3.visible : tmp3.hidden;
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === tmp7) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp8) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
        const obj2 = { manualFreeze: tmp4, placeholder: null, children: tmp8 };
        const tmp15 = hasOwnProperty(AppFreezerDefault, obj2);
        cResult[7] = tmp4;
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
}) : (function SearchFreezeContainer(visible) {
  visible = visible.visible;
  ({ children, containerStyle } = visible);
  const tmp = closure_8();
  const obj = { manualFreeze: !visible, placeholder: null, children: null };
  const items = [containerStyle, visible ? tmp.visible : tmp.hidden];
  obj.children = hasOwnProperty(View, { style: items, "aria-hidden": !visible, children });
  return hasOwnProperty(AppFreezerDefault, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenLayout.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SearchScreenLayout(searchContext) {
  const cResult = searchContext(576).c(20);
  searchContext = searchContext.searchContext;
  ({ containerStyle, width } = searchContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchQueryStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = searchContext(576);
  const stateFromStores = searchContext(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === searchContext) {
    if (cResult[5] === width) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] === containerStyle) {
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp10) {
          let tmp12 = cResult[10];
        }
        if (cResult[11] !== searchContext) {
          const obj2 = { searchContext };
          const tmp19 = closure_5(AutocompleteScreenDefault, obj2);
          cResult[11] = searchContext;
          cResult[12] = tmp19;
          let tmp16 = tmp19;
        } else {
          tmp16 = cResult[12];
        }
        if (cResult[13] === containerStyle) {
          if (cResult[14] === stateFromStores) {
            if (cResult[15] === tmp16) {
              let tmp20 = cResult[16];
            }
            if (cResult[17] === tmp12) {
              if (cResult[18] === tmp20) {
                let tmp24 = cResult[19];
              }
              return tmp24;
            }
            const obj3 = { children: null };
            const items2 = [tmp12, tmp20];
            obj3.children = items2;
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
    const obj5 = { visible: tmp9, containerStyle, children: tmp10 };
    const tmp15 = closure_5(closure_9, obj5);
    cResult[7] = containerStyle;
    cResult[8] = tmp9;
    cResult[9] = tmp10;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  const tmp11 = closure_5(SearchTabsLayoutDefault, { searchContext, width });
  cResult[4] = searchContext;
  cResult[5] = width;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const tmpResult = searchContext(504);
}) : (function SearchScreenLayout(width) {
  const searchContext = width.searchContext;
  const containerStyle = width.containerStyle;
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => SearchQueryStore.isAutocompleteVisible(searchContext), items1);
  const obj2 = { children: null };
  const obj = searchContext(504);
  const items2 = [closure_5(closure_9, { visible: !stateFromStores, containerStyle, children: closure_5(SearchTabsLayoutDefault, { searchContext, width: width.width }) }), ];
  const obj3 = { visible: !stateFromStores, containerStyle, children: closure_5(SearchTabsLayoutDefault, { searchContext, width: width.width }) };
  items2[1] = closure_5(closure_9, { visible: stateFromStores, containerStyle, children: closure_5(AutocompleteScreenDefault, { searchContext }) });
  obj2.children = items2;
  return closure_7(closure_6, obj2);
}));