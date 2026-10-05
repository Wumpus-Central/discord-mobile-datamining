// === Module 10097: GIFPickerSearchSuggestions ===

// Module 10097 (GIFPickerSearchSuggestions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10089 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onClickSuggestion;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { suggestionsContainer: obj2, footerSuggestionsContainer: obj3, footerSuggestionsTitle: obj4 };
obj2 = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onClickSuggestion) => {
  let footerSuggestionsContainer;
  let footerSuggestionsTitle;
  let items1;
  let suggestions;
  let tmp5;
  let tmp6;
  let obj = onClickSuggestion(576);
  const cResult = obj.c(17);
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GIFPickerViewStore];
    const fn = function f() {
      return suggestions.getSuggestions();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = onClickSuggestion(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp5, tmp6);
  if (0 === stateFromStoresArray.length) {
    return null;
  } else {
    let tmp8;
    let tmp10;
    const _Symbol = Symbol;
    ({ footerSuggestionsContainer, footerSuggestionsTitle } = tmp4);
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(onClickSuggestion(1126).t["3JGJo2"]);
      cResult[2] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== tmp4.footerSuggestionsTitle) {
      const obj2 = { style: footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: tmp8 };
      const tmp12 = closure_5(onClickSuggestion(4886).Text, obj2);
      cResult[3] = tmp4.footerSuggestionsTitle;
      cResult[4] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === onClickSuggestion) {
      let tmp14;
      if (cResult[6] === stateFromStoresArray) {
        tmp14 = cResult[7];
      }
      if (cResult[10] === tmp4.suggestionsContainer) {
        let tmp17;
        if (cResult[11] === tmp14) {
          tmp17 = cResult[12];
        }
        if (cResult[13] === tmp4.footerSuggestionsContainer) {
          if (cResult[14] === tmp10) {
            let tmp21;
            if (cResult[15] === tmp17) {
              tmp21 = cResult[16];
            }
            return tmp21;
          }
        }
        const obj3 = { style: footerSuggestionsContainer, children: items1 };
        items1 = [tmp10, tmp17];
        const tmp24 = closure_6(View, obj3);
        cResult[13] = tmp4.footerSuggestionsContainer;
        cResult[14] = tmp10;
        cResult[15] = tmp17;
        cResult[16] = tmp24;
        tmp21 = tmp24;
      }
      const obj4 = { style: tmp13, children: tmp14 };
      const tmp20 = closure_5(View, obj4);
      cResult[10] = tmp4.suggestionsContainer;
      cResult[11] = tmp14;
      cResult[12] = tmp20;
      tmp17 = tmp20;
    }
    if (cResult[8] !== onClickSuggestion) {
      class T {
        constructor(arg0) {
          closure_0 = onClickSuggestion;
          obj = { size: "sm", variant: "secondary", hitSlop: null, text: null, onPress: null };
          Button = onClickSuggestion(closure_1_2[11]).Button;
          obj.hitSlop = closure_1_1(closure_1_2[5]).space.PX_8;
          obj.text = onClickSuggestion;
          obj.onPress = function onPress() {
            return onClickSuggestion(closure_0);
          };
          return closure_1_5(Button, obj, onClickSuggestion);
        }
      }
      cResult[8] = onClickSuggestion;
      cResult[9] = T;
    } else {
      class T {
        constructor(arg0) {
          closure_0 = onClickSuggestion;
          obj = { size: "sm", variant: "secondary", hitSlop: null, text: null, onPress: null };
          Button = onClickSuggestion(closure_1_2[11]).Button;
          obj.hitSlop = closure_1_1(closure_1_2[5]).space.PX_8;
          obj.text = onClickSuggestion;
          obj.onPress = function onPress() {
            return onClickSuggestion(closure_0);
          };
          return closure_1_5(Button, obj, onClickSuggestion);
        }
      }
    }
    const mapped = stateFromStoresArray.map(T);
    cResult[5] = onClickSuggestion;
    cResult[6] = stateFromStoresArray;
    cResult[7] = mapped;
    tmp14 = mapped;
  }
}) : ((onClickSuggestion) => {
  let intl;
  let items1;
  let suggestions;
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = closure_7();
  let obj = onClickSuggestion(504);
  const items = [GIFPickerViewStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.footerSuggestionsContainer, children: items1 };
    const obj3 = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: intl.string(onClickSuggestion(1126).t["3JGJo2"]) };
    const Text = tmp2(4886).Text;
    intl = tmp2(1126).intl;
    items1 = [closure_5(Text, obj3), ];
    const obj4 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
          let closure_0 = text;
          const obj = {
            size: "sm",
            variant: "secondary",
            hitSlop: nativeDefault.space.PX_8,
            text,
            onPress() {
              return onClickSuggestion(closure_0);
            }
          };
          const Button = onClickSuggestion(dependencyMap[11]).Button;
          return closure_1_5(Button, obj, text);
        })
    };
    items1[1] = closure_5(View, obj4);
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
}));
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default memoResult;