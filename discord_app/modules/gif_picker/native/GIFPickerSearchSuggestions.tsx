// discord_app/modules/gif_picker/native/GIFPickerSearchSuggestions.tsx
import { View } from "get ActivityIndicator";
import getFormatFromUrl from "getFormatFromUrl";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { suggestionsContainer: null, footerSuggestionsContainer: null, footerSuggestionsTitle: null };
obj = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_8 };
obj[0] = obj;
createCacheKey = { justifyContent: "flex-start", paddingVertical: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { marginBottom: require("Themes").space.PX_16, textAlign: "center" };
let closure_7 = createCacheKey.createStyles(obj);
const obj2 = { marginBottom: require("Themes").space.PX_16, textAlign: "center" };
const memoResult = importAllResult.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = callback3();
  let obj = onClickSuggestion(589);
  const items = [getFormatFromUrl];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.footerSuggestionsContainer;
    obj = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj[0] = tmp.footerSuggestionsTitle;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t["3JGJo2"]);
    const items1 = [callback(tmp2(4340).Text, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.suggestionsContainer;
    obj1[1] = stateFromStoresArray.map((arg0) => {
      let closure_0 = arg0;
      const obj = { size: "sm", variant: "secondary", hitSlop: null, text: null, onPress: null };
      obj[2] = outer1_1(outer1_2[5]).space.PX_8;
      obj[3] = arg0;
      obj[4] = function onPress() {
        return callback(callback);
      };
      return outer1_5(onClickSuggestion(outer1_2[9]).Button, obj, arg0);
    });
    items1[1] = callback(View, obj1);
    obj[1] = items1;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
});
const result = require("getFormatFromUrl").fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default memoResult;