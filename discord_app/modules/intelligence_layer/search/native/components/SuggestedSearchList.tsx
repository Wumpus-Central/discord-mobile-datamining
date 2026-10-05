// === Module 16804: SuggestedSearchList ===

// Module 16804 (SuggestedSearchList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3919 from "module_3919" /* 3919 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 16806 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
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
  let items;
  let obj = smartSearchQuery(576);
  const cResult = obj.c(16);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const topMargin = smartSearchQuery.topMargin;
  let tmp4 = undefined !== topMargin;
  const source = smartSearchQuery.source;
  if (tmp4) {
    tmp4 = topMargin;
  }
  const tmp5 = closure_6();
  const tmpResult = smartSearchQuery(16805);
  const suggestedSearches = tmpResult.useSuggestedSearches(smartSearchQuery, source).suggestedSearches;
  if (0 === suggestedSearches.length) {
    return null;
  } else {
    let tmp7;
    let num = 0;
    if (tmp4) {
      num = nativeDefault.space.PX_16;
    }
    if (cResult[0] !== num) {
      const obj2 = { marginTop: num };
      cResult[0] = num;
      cResult[1] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === tmp5.text) {
      let tmp8;
      let tmp10;
      let tmp13;
      if (cResult[3] === tmp7) {
        tmp8 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3919.bzswFC);
        cResult[5] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: tmp8, children: tmp10 };
        const tmp15 = closure_4(smartSearchQuery(4886).Text, obj3);
        cResult[6] = tmp8;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === smartSearchQuery) {
        let tmp16;
        if (cResult[9] === suggestedSearches) {
          tmp16 = cResult[10];
        }
        if (cResult[13] === tmp13) {
          let tmp19;
          if (cResult[14] === tmp16) {
            tmp19 = cResult[15];
          }
          return tmp19;
        }
        const obj4 = { children: items };
        items = [tmp13, tmp16];
        const tmp22 = closure_5(View, obj4);
        cResult[13] = tmp13;
        cResult[14] = tmp16;
        cResult[15] = tmp22;
        tmp19 = tmp22;
      }
      if (cResult[11] !== smartSearchQuery) {
        class Q {
          constructor(arg0) {
            obj = { suggestedSearch: smartSearchQuery, smartSearchQuery };
            return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
          }
        }
        cResult[11] = smartSearchQuery;
        cResult[12] = Q;
      } else {
        class Q {
          constructor(arg0) {
            obj = { suggestedSearch: smartSearchQuery, smartSearchQuery };
            return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
          }
        }
      }
      const mapped = suggestedSearches.map(Q);
      cResult[8] = smartSearchQuery;
      cResult[9] = suggestedSearches;
      cResult[10] = mapped;
      tmp16 = mapped;
    }
    const items1 = [tmp5.text, tmp7];
    cResult[2] = tmp5.text;
    cResult[3] = tmp7;
    cResult[4] = items1;
    tmp8 = items1;
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
  const tmp = closure_6();
  let obj = smartSearchQuery(16805);
  const suggestedSearches = obj.useSuggestedSearches(smartSearchQuery, source).suggestedSearches;
  let tmp7Result = null;
  if (0 !== suggestedSearches.length) {
    const items = [tmp.text, ];
    let num = 0;
    const Text = tmp2(4886).Text;
    if (flag) {
      num = nativeDefault.space.PX_16;
    }
    const obj2 = { children: items1 };
    const obj4 = { marginTop: num };
    items[1] = obj4;
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: items, children: intl.string(_modDef3919.bzswFC) };
    intl = tmp2(1126).intl;
    items1 = [
      closure_4(Text, obj3),
      suggestedSearches.map((suggestedSearch) => {
          const obj = { suggestedSearch, smartSearchQuery };
          return React3(SuggestedSearchRowDefault, obj, suggestedSearch.suggestionId);
        })
    ];
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default memoResult;