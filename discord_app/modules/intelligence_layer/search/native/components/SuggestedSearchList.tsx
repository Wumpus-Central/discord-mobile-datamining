// === Module 16804: SuggestedSearchList ===

// Module 16804 (SuggestedSearchList)
import nativeDefault from "native" /* 587 */;
import _modDef3919 from "module_3919" /* 3919 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 16806 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj = { text: { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((smartSearchQuery) => {
  const cResult = smartSearchQuery(576).c(16);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const topMargin = smartSearchQuery.topMargin;
  let tmp4 = undefined !== topMargin;
  if (tmp4) {
    tmp4 = topMargin;
  }
  const tmp5 = closure_6();
  const obj = smartSearchQuery(576);
  const suggestedSearches = smartSearchQuery(16805).useSuggestedSearches(smartSearchQuery, smartSearchQuery.source).suggestedSearches;
  if (0 === suggestedSearches.length) {
    return null;
  } else {
    let num = 0;
    if (tmp4) {
      num = nativeDefault.space.PX_16;
    }
    if (cResult[0] !== num) {
      const obj2 = { marginTop: num };
      cResult[0] = num;
      cResult[1] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === tmp5.text) {
      if (cResult[3] === tmp7) {
        let tmp8 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3919.bzswFC);
        cResult[5] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: tmp8, children: tmp10 };
        const tmp15 = closure_4(tmp(4886).Text, obj3);
        cResult[6] = tmp8;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === smartSearchQuery) {
        if (cResult[9] === suggestedSearches) {
          if (cResult[13] === tmp13) {
            if (cResult[14] === tmp16) {
              let tmp20 = cResult[15];
            }
            return tmp20;
          }
          const obj4 = { children: null };
          const items = [tmp13, cResult[10]];
          obj4.children = items;
          const tmp23 = closure_5(View, obj4);
          cResult[13] = tmp13;
          cResult[14] = cResult[10];
          cResult[15] = tmp23;
          tmp20 = tmp23;
        }
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
    }
    const items1 = [tmp5.text, tmp7];
    cResult[2] = tmp5.text;
    cResult[3] = tmp7;
    cResult[4] = items1;
    tmp8 = items1;
  }
  const tmpResult = smartSearchQuery(16805);
}) : ((smartSearchQuery) => {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const suggestedSearches = smartSearchQuery(16805).useSuggestedSearches(smartSearchQuery, smartSearchQuery.source).suggestedSearches;
  let tmp7Result = null;
  if (0 !== suggestedSearches.length) {
    const items = [tmp.text, ];
    let num = 0;
    if (flag) {
      num = nativeDefault.space.PX_16;
    }
    const obj2 = { children: null };
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: null, children: null };
    const obj4 = { marginTop: num };
    items[1] = obj4;
    obj3.style = items;
    const intl = tmp2(1126).intl;
    obj3.children = intl.string(_modDef3919.bzswFC);
    const items1 = [closure_4(tmp2(4886).Text, obj3), suggestedSearches.map((suggestedSearch) => React4(SuggestedSearchRowDefault, { suggestedSearch, smartSearchQuery }, suggestedSearch.suggestionId))];
    obj2.children = items1;
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
}));