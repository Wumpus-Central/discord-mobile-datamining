// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { PressableCard } from "../../../design/components/Card/native/Card.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let closure_6;
let error;
const require = arg1;
function MotionOptionButton(isSelected) {
  let label;
  let onPress;
  isSelected = isSelected.isSelected;
  ({ label, onPress } = isSelected);
  const tmp = createCacheKey();
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
createCacheKey = { content: null, previewRow: null, buttonWrapper: null, optionCard: null, optionCardSelected: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignSelf: "center", gap: require("Themes").space.PX_8 };
let obj1 = { flexDirection: "row", alignSelf: "center", gap: require("Themes").space.PX_8 };
createCacheKey[2] = { marginTop: require("Themes").space.PX_8, paddingBottom: require("Themes").space.PX_16 };
createCacheKey[3] = { flex: 1, height: 64, alignItems: "center", justifyContent: "center" };
let obj2 = { marginTop: require("Themes").space.PX_8, paddingBottom: require("Themes").space.PX_16 };
createCacheKey[4] = { borderColor: require("Themes").colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { borderColor: require("Themes").colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default function CustomTypingIndicatorAnimationPickerSheet(onChange) {
  let emojis;
  let initialAnimation;
  onChange = onChange.onChange;
  let first;
  let dependencyMap;
  ({ emojis, initialAnimation } = onChange);
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState(initialAnimation), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = { value: null, label: null };
  const intl = onChange(1236).intl;
  obj[1] = intl.string(onChange(1236).t.PoWNfe);
  const items = [obj, , , ];
  obj = { value: onChange(14707).CustomTypingIndicatorAnimation.PULSE, label: null };
  const intl2 = onChange(1236).intl;
  obj[1] = intl2.string(first(3403)["gyL/ce"]);
  items[1] = obj;
  obj = { value: onChange(14707).CustomTypingIndicatorAnimation.RING, label: null };
  const intl3 = onChange(1236).intl;
  obj[1] = intl3.string(first(3403).EgekTm);
  items[2] = obj;
  const obj1 = { value: onChange(14707).CustomTypingIndicatorAnimation.WAVE, label: null };
  const intl4 = onChange(1236).intl;
  obj1[1] = intl4.string(first(3403)["8t5EiI"]);
  items[3] = obj1;
  const obj2 = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  const intl5 = onChange(1236).intl;
  obj2[1] = intl5.string(first(3403)["q+qHax"]);
  const obj3 = { style: tmp.previewRow, children: null };
  const obj4 = { config: null };
  const obj5 = { emojis, animation: first, typingSuggestion: null };
  obj5[2] = onChange(14707).CustomTypingIndicatorSuggestion.DEFAULT;
  obj4[0] = obj5;
  obj3[1] = callback2(first(14711), obj4);
  const items1 = [callback2(View, obj3), , ];
  const obj6 = { spacing: 8, children: null };
  const items2 = [items.slice(0, 2), items.slice(2, 4)];
  obj6[1] = items2.map((arr) => {
    const obj = { direction: "horizontal", spacing: 8, children: null };
    obj[2] = arr.map((label) => {
      let closure_0 = label;
      return outer1_6(outer1_9, {
        label: label.label,
        isSelected: closure_1 === label.value,
        onPress() {
          return outer1_2(label.value);
        }
      }, label.label);
    });
    return outer1_6(onChange(4733).Stack, obj, arg1);
  });
  items1[1] = callback2(onChange(4733).Stack, obj6);
  const obj7 = { style: tmp.buttonWrapper, children: null };
  const obj8 = {
    onPress() {
      onChange(first);
      first(4342).hideActionSheet();
    },
    text: null
  };
  const intl6 = onChange(1236).intl;
  obj8[1] = intl6.string(first(3403)["6ZxPAQ"]);
  obj7[1] = callback2(onChange(4745).Button, obj8);
  items1[2] = callback2(View, obj7);
  obj2[2] = items1;
  return callback3(onChange(7175).ActionSheet, obj2);
};