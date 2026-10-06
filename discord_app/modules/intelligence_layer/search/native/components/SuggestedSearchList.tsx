// === Module 16825: SuggestedSearchList ===

// Module 16825 (SuggestedSearchList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 16827 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let smartSearchQuery;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { text: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((smartSearchQuery) => {
  let source;
  let suggestedSearches;
  let tmp6;
  let topMargin;
  let obj = smartSearchQuery(suggestedSearches[6]);
  const cResult = obj.c(21);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ topMargin, source } = smartSearchQuery);
  const tmp4 = undefined !== topMargin && topMargin;
  const tmp5 = closure_6();
  if (cResult[0] !== source) {
    const obj2 = { source, trackShown: true };
    cResult[0] = source;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = smartSearchQuery(suggestedSearches[7]);
  suggestedSearches = tmpResult.useSuggestedSearches(smartSearchQuery, tmp6).suggestedSearches;
  if (0 === suggestedSearches.length) {
    return null;
  } else {
    let tmp8;
    let num3 = 0;
    if (tmp4) {
      num3 = source(tmp2[4]).space.PX_16;
    }
    if (cResult[2] !== num3) {
      const obj3 = { marginTop: num3 };
      cResult[2] = num3;
      cResult[3] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === tmp5.text) {
      let tmp9;
      let tmp11;
      let tmp17;
      if (cResult[5] === tmp8) {
        tmp9 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(source(suggestedSearches[9]).bzswFC);
        cResult[7] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp9) {
        const obj4 = { variant: "text-sm/semibold", color: "interactive-text-default", style: tmp9, children: tmp11 };
        cResult[8] = tmp9;
        cResult[9] = closure_4(smartSearchQuery(suggestedSearches[10]).Text, obj4);
        closure_4(smartSearchQuery(suggestedSearches[10]).Text, obj4);
        class Q {
          constructor(arg0, arg1) {
            obj = { suggestedSearch: smartSearchQuery, smartSearchQuery, suggestionSource: source, index: arg1, numSuggestedSearches: suggestedSearches.length };
            return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
          }
        }
      }
      if (cResult[10] === smartSearchQuery) {
        if (cResult[11] === source) {
          if (cResult[12] === suggestedSearches) {
            tmp17 = cResult[13];
          }
          if (cResult[18] === tmp14) {
            let tmp20;
            if (cResult[19] === tmp17) {
              tmp20 = cResult[20];
            }
            return tmp20;
          }
          const items = [, ];
          items[0] = tmp14;
          items[1] = tmp17;
          class Q {
            constructor(arg0, arg1) {
              obj = { suggestedSearch: smartSearchQuery, smartSearchQuery, suggestionSource: source, index: arg1, numSuggestedSearches: suggestedSearches.length };
              return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
            }
          }
          cResult[18] = tmp14;
          cResult[19] = tmp17;
          cResult[20] = tmp23;
          tmp20 = tmp23;
        }
      }
      if (cResult[14] === smartSearchQuery) {
        if (cResult[15] === source) {
          let tmp18;
          if (cResult[16] === suggestedSearches.length) {
            tmp18 = cResult[17];
          }
          const mapped = suggestedSearches.map(tmp18);
          cResult[10] = smartSearchQuery;
          cResult[11] = source;
          cResult[12] = suggestedSearches;
          class Q {
            constructor(arg0, arg1) {
              obj = { suggestedSearch: smartSearchQuery, smartSearchQuery, suggestionSource: source, index: arg1, numSuggestedSearches: suggestedSearches.length };
              return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
            }
          }
          tmp17 = mapped;
        }
      }
      class Q {
        constructor(arg0, arg1) {
          obj = { suggestedSearch: smartSearchQuery, smartSearchQuery, suggestionSource: source, index: arg1, numSuggestedSearches: suggestedSearches.length };
          return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
        }
      }
      cResult[14] = smartSearchQuery;
      cResult[15] = source;
      cResult[16] = suggestedSearches.length;
      cResult[17] = Q;
      tmp18 = Q;
    }
    const items1 = [tmp5.text, tmp8];
    cResult[4] = tmp5.text;
    cResult[5] = tmp8;
    cResult[6] = items1;
    tmp9 = items1;
  }
}) : ((smartSearchQuery) => {
  let intl;
  let items1;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const source = smartSearchQuery.source;
  let suggestedSearches;
  const tmp = closure_6();
  let obj = smartSearchQuery(suggestedSearches[7]);
  suggestedSearches = obj.useSuggestedSearches(smartSearchQuery, { source, trackShown: true }).suggestedSearches;
  let tmp7Result = null;
  if (0 !== suggestedSearches.length) {
    const items = [tmp.text, ];
    let num = 0;
    const Text = tmp2(tmp3[10]).Text;
    if (flag) {
      num = source(tmp3[4]).space.PX_16;
    }
    const obj2 = { children: items1 };
    const obj4 = { marginTop: num };
    items[1] = obj4;
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: items, children: intl.string(source(suggestedSearches[9]).bzswFC) };
    intl = tmp2(tmp3[8]).intl;
    items1 = [
      closure_4(Text, obj3),
      suggestedSearches.map((suggestedSearch, index) => {
          const obj = { suggestedSearch, smartSearchQuery, suggestionSource: source, index, numSuggestedSearches: suggestedSearches.length };
          return React3(SuggestedSearchRowDefault, obj, suggestedSearch.suggestionId);
        })
    ];
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default memoResult;