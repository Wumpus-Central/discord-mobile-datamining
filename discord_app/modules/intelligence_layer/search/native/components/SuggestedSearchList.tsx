// === Module 18650: SuggestedSearchList ===

// Module 18650 (SuggestedSearchList)
import nativeDefault from "native" /* 575 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 18652 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
const obj = { text: { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default noop.memo(function SuggestedSearchList(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const source = smartSearchQuery.source;
  let suggestedSearches;
  const tmp = closure_6();
  suggestedSearches = smartSearchQuery(suggestedSearches[5]).useSuggestedSearches(smartSearchQuery, { source, trackShown: true }).suggestedSearches;
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
    const intl = tmp2(tmp3[7]).intl;
    obj3.children = intl.string(source(tmp3[8]).bzswFC);
    const items1 = [closure_4(tmp2(tmp3[6]).Text, obj3), suggestedSearches.map((suggestedSearch, index) => React4(SuggestedSearchRowDefault, { suggestedSearch, smartSearchQuery, suggestionSource: source, index, numSuggestedSearches: suggestedSearches.length }, suggestedSearch.suggestionId))];
    obj2.children = items1;
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
});