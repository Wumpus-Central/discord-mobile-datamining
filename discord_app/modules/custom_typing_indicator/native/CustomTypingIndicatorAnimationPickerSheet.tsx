// === Module 15571: CustomTypingIndicatorAnimationPickerSheet ===

// Module 15571 (CustomTypingIndicatorAnimationPickerSheet)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4718 */;
import Stack_Stack from "Stack/Stack" /* 5142 */;
import Card from "Card" /* 5777 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MotionOptionButton(isSelected) {
  isSelected = isSelected.isSelected;
  ({ label, onPress } = isSelected);
  const tmp = closure_8();
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
  obj.border = str;
  obj.accessibilityState = { checked: isSelected };
  obj.children = timestampProducer(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: label });
  return timestampProducer(Card.Card, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, previewRow: null, optionCard: null, optionCardSelected: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.previewRow = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.optionCard = { flex: 1, height: 64, alignItems: "center", justifyContent: "center" };
let obj4 = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.optionCardSelected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default function CustomTypingIndicatorAnimationPickerSheet(onChange) {
  onChange = onChange.onChange;
  animation = undefined;
  dependencyMap = undefined;
  ({ emojis, initialAnimation } = onChange);
  const tmp = closure_8();
  [animation, dependencyMap] = noop.useState(initialAnimation);
  const obj = { value: onChange(1380).TypingIndicatorAnimation.UNSPECIFIED, label: null };
  const intl = onChange(1115).intl;
  obj.label = intl.string(onChange(1115).t.PoWNfe);
  const items = [obj, , , ];
  const obj2 = { value: onChange(1380).TypingIndicatorAnimation.PULSE, label: null };
  const intl2 = onChange(1115).intl;
  obj2.label = intl2.string(animation(3678)["gyL/ce"]);
  items[1] = obj2;
  const obj3 = { value: onChange(1380).TypingIndicatorAnimation.RING, label: null };
  const intl3 = onChange(1115).intl;
  obj3.label = intl3.string(animation(3678).EgekTm);
  items[2] = obj3;
  const obj4 = { value: onChange(1380).TypingIndicatorAnimation.WAVE, label: null };
  const intl4 = onChange(1115).intl;
  obj4.label = intl4.string(animation(3678)["8t5EiI"]);
  items[3] = obj4;
  const obj5 = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  const intl5 = onChange(1115).intl;
  obj5.dismissAccessibilityLabel = intl5.string(animation(3678)["q+qHax"]);
  const obj6 = { style: tmp.previewRow, children: null };
  const obj7 = { config: null, size: 54 };
  const obj8 = { emojis, animation, typingSuggestion: onChange(1380).TypingSuggestion.UNSPECIFIED };
  obj7.config = obj8;
  obj6.children = closure_6(animation(12223), obj7);
  const items1 = [closure_6(View, obj6), ];
  const obj9 = { spacing: 8, children: null };
  const items2 = [items.slice(0, 2), items.slice(2, 4)];
  obj9.children = items2.map((arr, index) => timestampProducer(Stack_Stack.Stack, {
    direction: "horizontal",
    spacing: 8,
    children: arr.map((label) => closure_1_6(closure_1_9, {
      label: label.label,
      isSelected: closure_1 === label.value,
      onPress() {
        value = label.value;
        closure_2_2(value);
        onChange(value);
      }
    }, label.label))
  }, index));
  items1[1] = closure_6(onChange(5142).Stack, obj9);
  obj5.children = items1;
  return closure_7(onChange(7393).ActionSheet, obj5);
};