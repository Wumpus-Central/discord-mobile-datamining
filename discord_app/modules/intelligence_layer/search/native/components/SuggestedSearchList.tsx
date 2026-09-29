// === Module 16639: SuggestedSearchList ===

// Module 16639 (SuggestedSearchList)
import nativeDefault from "native" /* 576 */;
import _modDef3881 from "module_3881" /* 3881 */;
import SuggestedSearchRowDefault from "SuggestedSearchRow" /* 16641 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
const obj = { text: { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx");

export default noop.memo((smartSearchQuery) => {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const suggestedSearches = smartSearchQuery(16640).useSuggestedSearches(smartSearchQuery, smartSearchQuery.source).suggestedSearches;
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
    const intl = tmp2(1115).intl;
    obj3.children = intl.string(_modDef3881.bzswFC);
    const items1 = [closure_4(tmp2(4832).Text, obj3), suggestedSearches.map((suggestedSearch) => React4(SuggestedSearchRowDefault, { suggestedSearch, smartSearchQuery }, suggestedSearch.suggestionId))];
    obj2.children = items1;
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
});