// === Module 10326: ? ===

// Module 10326
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "getFormatFromUrl" /* 10318 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { suggestionsContainer: null, footerSuggestionsContainer: null, footerSuggestionsTitle: null };
obj = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
createCacheKey = { justifyContent: "flex-start", paddingVertical: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { marginBottom: ThemesDefault.space.PX_16, textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
const obj2 = { marginBottom: ThemesDefault.space.PX_16, textAlign: "center" };
const memoResult = importAllResult.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = callback3();
  let obj = onClickSuggestion(589);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.footerSuggestionsContainer;
    obj = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj[0] = tmp.footerSuggestionsTitle;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t["3JGJo2"]);
    const items1 = [callback(tmp2(4444).Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.suggestionsContainer;
    obj1[1] = stateFromStoresArray.map((text) => {
      closure_0 = text;
      return closure_1_5(onClickSuggestion(closure_1_2[9]).Button, {
        size: "sm",
        variant: "secondary",
        hitSlop: closure_1_1(closure_1_2[5]).space.PX_8,
        text,
        onPress() {
          return text(text);
        }
      }, text);
    });
    items1[1] = callback(View, obj1);
    obj[1] = items1;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
});
const result = require("set").fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default memoResult;