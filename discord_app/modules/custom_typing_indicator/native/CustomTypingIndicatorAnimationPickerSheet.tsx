// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableCard from "../../../design/components/Card/native/Card.native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function MotionOptionButton(isSelected) {
  isSelected = isSelected.isSelected;
  ({ label, onPress } = isSelected);
  const tmp = callback4();
  const items = [tmp.optionCard, ];
  let optionCardSelected = isSelected;
  if (isSelected) {
    optionCardSelected = tmp.optionCardSelected;
  }
  const obj = { style: items, onPress, border: null, accessibilityRole: "togglebutton", accessibilityState: null, children: null };
  items[1] = optionCardSelected;
  let str = "faint";
  if (isSelected) {
    str = "none";
  }
  obj[2] = str;
  obj[4] = { checked: isSelected };
  obj[5] = closure_6(Text.Text, { variant: "text-md/medium", color: "text-default", children: label });
  return closure_6(PressableCard.Card, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, previewRow: null, optionCard: null, optionCardSelected: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", paddingVertical: ThemesDefault.space.PX_24 };
createCacheKey[2] = { flex: 1, height: 64, alignItems: "center", justifyContent: "center" };
let obj1 = { alignSelf: "center", paddingVertical: ThemesDefault.space.PX_24 };
createCacheKey[3] = { borderColor: ThemesDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderColor: ThemesDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default function CustomTypingIndicatorAnimationPickerSheet(onChange) {
  onChange = onChange.onChange;
  let first;
  dependencyMap = undefined;
  ({ emojis, initialAnimation } = onChange);
  const tmp = callback4();
  const tmp2 = callback(React.useState(initialAnimation), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = { value: onChange(1938).TypingIndicatorAnimation.UNSPECIFIED, label: null };
  const intl = onChange(1236).intl;
  obj[1] = intl.string(onChange(1236).t.PoWNfe);
  const items = [obj, , , ];
  obj = { value: onChange(1938).TypingIndicatorAnimation.PULSE, label: null };
  const intl2 = onChange(1236).intl;
  obj[1] = intl2.string(first(3471)["gyL/ce"]);
  items[1] = obj;
  obj = { value: onChange(1938).TypingIndicatorAnimation.RING, label: null };
  const intl3 = onChange(1236).intl;
  obj[1] = intl3.string(first(3471).EgekTm);
  items[2] = obj;
  obj1 = { value: onChange(1938).TypingIndicatorAnimation.WAVE, label: null };
  const intl4 = onChange(1236).intl;
  obj1[1] = intl4.string(first(3471)["8t5EiI"]);
  items[3] = obj1;
  const obj2 = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  const intl5 = onChange(1236).intl;
  obj2[1] = intl5.string(first(3471)["q+qHax"]);
  const obj3 = { style: tmp.previewRow, children: null };
  const obj4 = { config: null, size: 54 };
  const obj5 = { emojis, animation: first, typingSuggestion: onChange(1938).TypingSuggestion.UNSPECIFIED };
  obj4[0] = obj5;
  obj3[1] = callback2(first(11472), obj4);
  const items1 = [callback2(View, obj3), ];
  const obj6 = { spacing: 8, children: null };
  const items2 = [items.slice(0, 2), items.slice(2, 4)];
  obj6[1] = items2.map((arr) => closure_1_6(onChange(table[13]).Stack, {
    direction: "horizontal",
    spacing: 8,
    children: arr.map((label) => {
      closure_0 = label;
      return closure_1_6(closure_1_9, {
        label: label.label,
        isSelected: closure_1 === label.value,
        onPress() {
          const value = label.value;
          closure_1_2(value);
          label(value);
        }
      }, label.label);
    })
  }, arg1));
  items1[1] = callback2(onChange(4878).Stack, obj6);
  obj2[2] = items1;
  return callback3(onChange(5941).ActionSheet, obj2);
};