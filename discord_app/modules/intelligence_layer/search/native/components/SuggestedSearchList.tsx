// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3911 from "../../SmartSearch.messages.js";
import SuggestedSearchRowDefault from "SuggestedSearchRow.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4866);
const obj = { text: { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { marginBottom: nativeDefault.space.PX_4, marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SuggestedSearchList.tsx",
);

export default noop.memo((smartSearchQuery) => {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  let flag = smartSearchQuery.topMargin;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const suggestedSearches = smartSearchQuery(16675).useSuggestedSearches(
    smartSearchQuery,
    smartSearchQuery.source,
  ).suggestedSearches;
  let tmp7Result = null;
  if (0 !== suggestedSearches.length) {
    const items = [tmp.text];
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
    obj3.children = intl.string(_modDef3911.bzswFC);
    const items1 = [
      closure_4(tmp2(4862).Text, obj3),
      suggestedSearches.map((suggestedSearch) =>
        React4(SuggestedSearchRowDefault, { suggestedSearch, smartSearchQuery }, suggestedSearch.suggestionId),
      ),
    ];
    obj2.children = items1;
    tmp7Result = closure_5(View, obj2);
  }
  return tmp7Result;
});
