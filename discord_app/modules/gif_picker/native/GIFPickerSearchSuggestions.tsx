// discord_app/modules/gif_picker/native/GIFPickerSearchSuggestions.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GIFPickerViewStore from "../../../stores/views/GIFPickerViewStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj = { suggestionsContainer: { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 }, footerSuggestionsContainer: null, footerSuggestionsTitle: null };
let obj3 = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.footerSuggestionsContainer = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
obj.footerSuggestionsTitle = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj5 = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GIFPickerSearchSuggestions(onClickSuggestion) {
  const cResult = onClickSuggestion(576).c(17);
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GIFPickerViewStore];
    class S {
      constructor() {
        return closure_1_4.getSuggestions();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = onClickSuggestion(576);
  const stateFromStoresArray = onClickSuggestion(504).useStateFromStoresArray(tmp5, S);
  if (0 === stateFromStoresArray.length) {
    return null;
  } else {
    const _Symbol = Symbol;
    ({ footerSuggestionsContainer, footerSuggestionsTitle } = tmp4);
    class S {
      constructor() {
        return closure_1_4.getSuggestions();
      }
    }
    if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t["3JGJo2"]);
      class S {
        constructor() {
          return closure_1_4.getSuggestions();
        }
      }
      cResult[2] = stringResult;
    }
    if (cResult[3] !== tmp4.footerSuggestionsTitle) {
      const obj2 = { style: footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: null };
      class S {
        constructor() {
          return closure_1_4.getSuggestions();
        }
      }
      const tmp12 = closure_5(tmp(5087).Text, obj2);
      cResult[3] = tmp4.footerSuggestionsTitle;
      cResult[4] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === onClickSuggestion) {
      if (cResult[6] === stateFromStoresArray) {
        if (cResult[10] === tmp4.suggestionsContainer) {
          if (cResult[11] === tmp14) {
            let tmp18 = cResult[12];
          }
          if (cResult[13] === tmp4.footerSuggestionsContainer) {
            if (cResult[14] === tmp10) {
              if (cResult[15] === tmp18) {
                let tmp21 = cResult[16];
              }
              return tmp21;
            }
          }
          class S {
            constructor() {
              return closure_1_4.getSuggestions();
            }
          }
          const obj3 = { style: footerSuggestionsContainer, children: null };
          const items1 = [tmp10, tmp18];
          obj3.children = items1;
          const tmp23 = closure_6(View, obj3);
          cResult[13] = tmp4.footerSuggestionsContainer;
          cResult[14] = tmp10;
          cResult[15] = tmp18;
          cResult[16] = tmp23;
          tmp21 = tmp23;
        }
        class S {
          constructor() {
            return closure_1_4.getSuggestions();
          }
        }
        const obj4 = { style: tmp13, children: cResult[7] };
        const tmp20 = closure_5(View, obj4);
        cResult[10] = tmp4.suggestionsContainer;
        cResult[11] = cResult[7];
        cResult[12] = tmp20;
        tmp18 = tmp20;
      }
    }
    if (cResult[8] !== onClickSuggestion) {
      class T {
        constructor(arg0) {
          closure_0 = onClickSuggestion;
          obj = { size: "sm", variant: "secondary", hitSlop: closure_1_1(closure_1_2[5]).space.PX_8, text: onClickSuggestion, onPress() { ... } };
          return closure_1_5(onClickSuggestion(closure_1_2[11]).Button, obj, onClickSuggestion);
        }
      }
      cResult[8] = onClickSuggestion;
      class S {
        constructor() {
          return closure_1_4.getSuggestions();
        }
      }
      cResult[9] = T;
    } else {
      class T {
        constructor(arg0) {
          closure_0 = onClickSuggestion;
          obj = { size: "sm", variant: "secondary", hitSlop: closure_1_1(closure_1_2[5]).space.PX_8, text: onClickSuggestion, onPress() { ... } };
          return closure_1_5(onClickSuggestion(closure_1_2[11]).Button, obj, onClickSuggestion);
        }
      }
    }
    const mapped = stateFromStoresArray.map(T);
    cResult[5] = onClickSuggestion;
    cResult[6] = stateFromStoresArray;
    cResult[7] = mapped;
  }
  const tmpResult = onClickSuggestion(504);
}) : (function GIFPickerSearchSuggestions(onClickSuggestion) {
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = closure_7();
  const items = [GIFPickerViewStore];
  const stateFromStoresArray = onClickSuggestion(504).useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj2 = { style: tmp.footerSuggestionsContainer, children: null };
    const obj3 = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: null };
    const intl = tmp2(1126).intl;
    obj3.children = intl.string(tmp2(1126).t["3JGJo2"]);
    const items1 = [closure_5(tmp2(5087).Text, obj3), ];
    const obj4 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
          closure_0 = text;
          return closure_1_5(onClickSuggestion(5376).Button, {
            size: "sm",
            variant: "secondary",
            hitSlop: nativeDefault.space.PX_8,
            text,
            onPress() {
              return onClickSuggestion(closure_0);
            }
          }, text);
        })
    };
    items1[1] = closure_5(View, obj4);
    obj2.children = items1;
    tmp4 = closure_6(View, obj2);
  }
  return tmp4;
}));