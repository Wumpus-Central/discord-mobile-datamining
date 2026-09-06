// === Module 15359: CustomTypingIndicatorAnimationPickerSheet ===

// Module 15359 (CustomTypingIndicatorAnimationPickerSheet)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import Card from "Card" /* 5607 */;
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
fn(4560);
let createStyles = { content: null, previewRow: null, optionCard: null, optionCardSelected: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.previewRow = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
createStyles.optionCard = { flex: 1, height: 64, alignItems: "center", justifyContent: "center" };
let obj1 = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
createStyles.optionCardSelected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default function CustomTypingIndicatorAnimationPickerSheet(onChange) {
  onChange = onChange.onChange;
  ({ emojis, initialAnimation } = onChange);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(initialAnimation), 2);
  const animation = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = { value: onChange(1379).TypingIndicatorAnimation.UNSPECIFIED, label: null };
  const intl = onChange(1114).intl;
  obj.label = intl.string(onChange(1114).t.PoWNfe);
  const items = [obj, , , ];
  obj = { value: onChange(1379).TypingIndicatorAnimation.PULSE, label: null };
  const intl2 = onChange(1114).intl;
  obj.label = intl2.string(animation(3549)["gyL/ce"]);
  items[1] = obj;
  obj = { value: onChange(1379).TypingIndicatorAnimation.RING, label: null };
  const intl3 = onChange(1114).intl;
  obj.label = intl3.string(animation(3549).EgekTm);
  items[2] = obj;
  const obj1 = { value: onChange(1379).TypingIndicatorAnimation.WAVE, label: null };
  const intl4 = onChange(1114).intl;
  obj1.label = intl4.string(animation(3549)["8t5EiI"]);
  items[3] = obj1;
  const obj2 = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  const intl5 = onChange(1114).intl;
  obj2.dismissAccessibilityLabel = intl5.string(animation(3549)["q+qHax"]);
  const obj3 = { style: tmp.previewRow, children: null };
  const obj4 = { config: null, size: 54 };
  const obj5 = { emojis, animation, typingSuggestion: onChange(1379).TypingSuggestion.UNSPECIFIED };
  obj4.config = obj5;
  obj3.children = closure_6(animation(11981), obj4);
  const items1 = [closure_6(View, obj3), ];
  const obj6 = { spacing: 8, children: null };
  const items2 = [items.slice(0, 2), items.slice(2, 4)];
  obj6.children = items2.map((arr, index) => timestampProducer(Stack_Stack.Stack, {
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
  items1[1] = closure_6(onChange(4973).Stack, obj6);
  obj2.children = items1;
  return closure_7(onChange(7198).ActionSheet, obj2);
};