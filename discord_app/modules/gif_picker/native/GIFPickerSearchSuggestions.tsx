// discord_app/modules/gif_picker/native/GIFPickerSearchSuggestions.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GIFPickerViewStore from "../../../stores/views/GIFPickerViewStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let obj = { suggestionsContainer: null, footerSuggestionsContainer: null, footerSuggestionsTitle: null };
obj = { justifyContent: "center", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.suggestionsContainer = obj;
const createStyles = { justifyContent: "flex-start", paddingVertical: nativeDefault.space.PX_16 };
obj.footerSuggestionsContainer = createStyles;
obj.footerSuggestionsTitle = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const obj2 = { marginBottom: nativeDefault.space.PX_16, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerSearchSuggestions.tsx");

export default noop.memo(function GIFPickerSearchSuggestions(onClickSuggestion) {
  onClickSuggestion = onClickSuggestion.onClickSuggestion;
  const tmp = closure_7();
  let obj = onClickSuggestion(504);
  const items = [GIFPickerViewStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.footerSuggestionsContainer, children: null };
    obj = { style: tmp.footerSuggestionsTitle, variant: "text-md/medium", color: "text-default", children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t["3JGJo2"]);
    const items1 = [closure_5(tmp2(4556).Text, obj)];
    const obj1 = {
      style: tmp.suggestionsContainer,
      children: stateFromStoresArray.map((text) => {
        closure_0 = text;
        return closure_1_5(
          onClickSuggestion(4975).Button,
          {
            size: "sm",
            variant: "secondary",
            hitSlop: nativeDefault.space.PX_8,
            text,
            onPress() {
              return onClickSuggestion(closure_0);
            },
          },
          text,
        );
      }),
    };
    items1[1] = closure_5(View, obj1);
    obj.children = items1;
    tmp4 = closure_6(View, obj);
  }
  return tmp4;
});
