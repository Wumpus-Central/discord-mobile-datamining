// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SuggestedSearchRowDefault from "SuggestedSearchRow.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj = { text: { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((smartSearchQuery) => {
  const cResult = smartSearchQuery(suggestedSearches[6]).c(21);
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ topMargin, source } = smartSearchQuery);
  const tmp5 = closure_6();
  if (cResult[0] !== source) {
    const obj2 = { source, trackShown: true };
    cResult[0] = source;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const obj = smartSearchQuery(suggestedSearches[6]);
  const tmp4 = undefined !== topMargin && topMargin;
  suggestedSearches = smartSearchQuery(suggestedSearches[7]).useSuggestedSearches(smartSearchQuery, tmp6).suggestedSearches;
  if (0 === suggestedSearches.length) {
    return null;
  } else {
    let num3 = 0;
    if (tmp4) {
      num3 = source(tmp2[4]).space.PX_16;
    }
    if (cResult[2] !== num3) {
      const obj3 = { marginTop: num3 };
      cResult[2] = num3;
      cResult[3] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === tmp5.text) {
      if (cResult[5] === tmp8) {
        let tmp9 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(source(tmp2[9]).bzswFC);
        cResult[7] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp9) {
        const obj4 = { variant: "text-sm/semibold", color: "interactive-text-default", style: tmp9, children: tmp11 };
        cResult[8] = tmp9;
        cResult[9] = closure_4(tmp(tmp2[10]).Text, obj4);
        class Q {
          constructor(arg0, arg1) {
            obj = { suggestedSearch: smartSearchQuery, smartSearchQuery, suggestionSource: source, index: arg1, numSuggestedSearches: suggestedSearches.length };
            return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
          }
        }
        const tmp16 = closure_4(tmp(tmp2[10]).Text, obj4);
      }
      if (cResult[10] === smartSearchQuery) {
        if (cResult[11] === source) {
          if (cResult[12] === suggestedSearches) {
            if (cResult[18] === tmp14) {
              if (cResult[19] === tmp17) {
                let tmp21 = cResult[20];
              }
              return tmp21;
            }
            const items = [tmp14, cResult[13]];
            { children: null }.children = items;
            class Q {
              constructor(arg0, arg1) {
                obj = { suggestedSearch: smartSearchQuery, smartSearchQuery, suggestionSource: source, index: arg1, numSuggestedSearches: suggestedSearches.length };
                return jsx(closure_1(closure_2[11]), obj, smartSearchQuery.suggestionId);
              }
            }
            cResult[18] = tmp14;
            cResult[19] = cResult[13];
            cResult[20] = tmp24;
            tmp21 = tmp24;
            const obj5 = { children: null };
          }
        }
      }
      if (cResult[14] === smartSearchQuery) {
        if (cResult[15] === source) {
          if (cResult[16] === suggestedSearches.length) {
            let tmp18 = cResult[17];
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
  const tmpResult = smartSearchQuery(suggestedSearches[7]);
}) : ((smartSearchQuery) => {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const source = smartSearchQuery.source;
  let suggestedSearches;
  const tmp = closure_6();
  suggestedSearches = smartSearchQuery(suggestedSearches[7]).useSuggestedSearches(smartSearchQuery, { source, trackShown: true }).suggestedSearches;
  let tmp7Result = null;
  if (0 !== suggestedSearches.length) {
    const items = [tmp.text, ];
    let num = 0;
    if (flag) {
      num = source(tmp3[4]).space.PX_16;
    }
    const obj2 = { children: null };
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-default", style: null, children: null };
    const obj4 = { marginTop: num };
    items[1] = obj4;
    obj3.style = items;
    const intl = tmp2(tmp3[8]).intl;
    obj3.children = intl.string(source(tmp3[9]).bzswFC);
    const items1 = [closure_4(tmp2(tmp3[10]).Text, obj3), suggestedSearches.map((suggestedSearch, index) => React4(SuggestedSearchRowDefault, { suggestedSearch, smartSearchQuery, suggestionSource: source, index, numSuggestedSearches: suggestedSearches.length }, suggestedSearch.suggestionId))];
    obj2.children = items1;
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
}));