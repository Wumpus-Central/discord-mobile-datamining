// === Module 15196: CustomTypingIndicatorAnimationPickerSheet ===

// Module 15196 (CustomTypingIndicatorAnimationPickerSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import Card from "Card" /* 6002 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, previewRow: null, optionCard: null, optionCardSelected: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.previewRow = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.optionCard = { flex: 1, height: 64, alignItems: "center", justifyContent: "center" };
let obj4 = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.optionCardSelected = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ label, isSelected, onPress } = arg0);
  const tmp4 = closure_8();
  let optionCardSelected = isSelected;
  if (isSelected) {
    optionCardSelected = tmp4.optionCardSelected;
  }
  if (cResult[0] === tmp4.optionCard) {
    if (cResult[1] === optionCardSelected) {
      let tmp5 = cResult[2];
    }
    let str = "faint";
    if (isSelected) {
      str = "none";
    }
    if (cResult[3] !== isSelected) {
      const obj2 = { checked: isSelected };
      cResult[3] = isSelected;
      cResult[4] = obj2;
      let tmp6 = obj2;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== label) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: label };
      const tmp9 = timestampProducer(Text_Text.Text, obj3);
      cResult[5] = label;
      cResult[6] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] === onPress) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === str) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp7) {
              let tmp10 = cResult[12];
            }
            return tmp10;
          }
        }
      }
    }
    const obj4 = { style: tmp5, onPress, border: str, accessibilityRole: "togglebutton", accessibilityState: tmp6, children: tmp7 };
    const tmp12 = timestampProducer(Card.Card, obj4);
    cResult[7] = onPress;
    cResult[8] = tmp5;
    cResult[9] = str;
    cResult[10] = tmp6;
    cResult[11] = tmp7;
    cResult[12] = tmp12;
    tmp10 = tmp12;
  }
  const items = [tmp4.optionCard, optionCardSelected];
  cResult[0] = tmp4.optionCard;
  cResult[1] = optionCardSelected;
  cResult[2] = items;
  tmp5 = items;
}) : ((isSelected) => {
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
});
ReactCompilerGating = fn(558);
let obj5 = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((initialAnimation) => {
  let map = onChange;
  let Stack = dependencyMap;
  const cResult = onChange(576).c(29);
  ({ emojis, onChange } = initialAnimation);
  let previewRow = closure_8();
  let num = 2;
  [content, dependencyMap] = noop.useState(initialAnimation.initialAnimation);
  if (cResult[0] === emojis) {
    if (cResult[1] === onChange) {
      if (cResult[2] === content) {
        if (cResult[3] === previewRow.content) {
          if (cResult[4] === previewRow.previewRow) {
            if (cResult[19] === cResult[5]) {
              if (cResult[20] === tmp5) {
                if (cResult[21] === tmp6) {
                  let tmp27 = cResult[22];
                }
                if (cResult[23] === tmp4) {
                  if (cResult[24] === tmp7) {
                    if (cResult[25] === tmp8) {
                      if (cResult[26] === tmp9) {
                        if (cResult[27] === tmp27) {
                          let tmp30 = cResult[28];
                        }
                        return tmp30;
                      }
                    }
                  }
                }
                const obj2 = { contentStyles: tmp7, dismissAccessibilityLabel: tmp8, children: null };
                const items = [tmp9, tmp27];
                obj2.children = items;
                const tmp32 = closure_7(tmp4, obj2);
                cResult[23] = tmp4;
                cResult[24] = tmp7;
                cResult[25] = tmp8;
                cResult[26] = tmp9;
                cResult[27] = tmp27;
                cResult[28] = tmp32;
                tmp30 = tmp32;
              }
            }
            const obj3 = { spacing: cResult[7], children: cResult[8] };
            const tmp29 = closure_6(cResult[5], obj3);
            cResult[19] = cResult[5];
            cResult[20] = cResult[7];
            cResult[21] = cResult[8];
            cResult[22] = tmp29;
            tmp27 = tmp29;
          }
        }
      }
    }
  }
  const obj4 = { value: map(1385).TypingIndicatorAnimation.UNSPECIFIED, label: null };
  const intl = map(1126).intl;
  obj4.label = intl.string(map(1126).t.PoWNfe);
  const items1 = [obj4, , , ];
  const obj5 = { value: map(1385).TypingIndicatorAnimation.PULSE, label: null };
  const intl2 = map(1126).intl;
  obj5.label = intl2.string(content(3755)["gyL/ce"]);
  items1[1] = obj5;
  const obj6 = { value: map(1385).TypingIndicatorAnimation.RING, label: null };
  const intl3 = map(1126).intl;
  obj6.label = intl3.string(content(3755).EgekTm);
  items1[2] = obj6;
  const obj7 = { value: map(1385).TypingIndicatorAnimation.WAVE, label: null };
  const intl4 = map(1126).intl;
  obj7.label = intl4.string(content(3755)["8t5EiI"]);
  items1[3] = obj7;
  const ActionSheet = map(6708).ActionSheet;
  const content2 = previewRow.content;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = map(1126).intl;
    const stringResult = intl5.string(tmp10(3755)["q+qHax"]);
    cResult[12] = stringResult;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[12];
  }
  if (cResult[13] === emojis) {
    if (cResult[14] === content) {
      let tmp13 = cResult[15];
    }
    if (cResult[16] === previewRow.previewRow) {
      if (cResult[17] === tmp13) {
        let tmp16 = cResult[18];
      }
      Stack = map(5600).Stack;
      const items2 = [items1.slice(0, num), items1.slice(num, 4)];
      map = items2.map;
      const mapped = map((arr, arg1) => timestampProducer(Stack_Stack.Stack, {
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
      }, arg1));
      cResult[0] = emojis;
      cResult[1] = onChange;
      cResult[num] = content;
      content = previewRow.content;
      cResult[3] = content;
      previewRow = previewRow.previewRow;
      cResult[4] = previewRow;
      cResult[5] = Stack;
      cResult[6] = ActionSheet;
      cResult[7] = 8;
      cResult[8] = mapped;
      cResult[9] = content2;
      cResult[10] = tmp11;
      num = 11;
      cResult[11] = tmp16;
    }
    const obj8 = { style: previewRow.previewRow, children: tmp13 };
    const tmp19 = closure_6(View, obj8);
    cResult[16] = previewRow.previewRow;
    cResult[17] = tmp13;
    cResult[18] = tmp19;
    tmp16 = tmp19;
  }
  const obj9 = { config: null, size: 54 };
  const obj10 = { emojis, animation: content, typingSuggestion: null };
  const obj = onChange(576);
  obj10.typingSuggestion = map(1385).TypingSuggestion.UNSPECIFIED;
  obj9.config = obj10;
  const tmp15 = closure_6(content(11608), obj9);
  cResult[13] = emojis;
  cResult[14] = content;
  cResult[15] = tmp15;
  tmp13 = tmp15;
  const tmp10Result = content(11608);
}) : ((onChange) => {
  onChange = onChange.onChange;
  animation = undefined;
  dependencyMap = undefined;
  ({ emojis, initialAnimation } = onChange);
  const tmp = closure_8();
  [animation, dependencyMap] = noop.useState(initialAnimation);
  const obj = { value: onChange(1385).TypingIndicatorAnimation.UNSPECIFIED, label: null };
  const intl = onChange(1126).intl;
  obj.label = intl.string(onChange(1126).t.PoWNfe);
  const items = [obj, , , ];
  const obj2 = { value: onChange(1385).TypingIndicatorAnimation.PULSE, label: null };
  const intl2 = onChange(1126).intl;
  obj2.label = intl2.string(animation(3755)["gyL/ce"]);
  items[1] = obj2;
  const obj3 = { value: onChange(1385).TypingIndicatorAnimation.RING, label: null };
  const intl3 = onChange(1126).intl;
  obj3.label = intl3.string(animation(3755).EgekTm);
  items[2] = obj3;
  const obj4 = { value: onChange(1385).TypingIndicatorAnimation.WAVE, label: null };
  const intl4 = onChange(1126).intl;
  obj4.label = intl4.string(animation(3755)["8t5EiI"]);
  items[3] = obj4;
  const obj5 = { contentStyles: tmp.content, dismissAccessibilityLabel: null, children: null };
  const intl5 = onChange(1126).intl;
  obj5.dismissAccessibilityLabel = intl5.string(animation(3755)["q+qHax"]);
  const obj6 = { style: tmp.previewRow, children: null };
  const obj7 = { config: null, size: 54 };
  const obj8 = { emojis, animation, typingSuggestion: onChange(1385).TypingSuggestion.UNSPECIFIED };
  obj7.config = obj8;
  obj6.children = closure_6(animation(11608), obj7);
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
  items1[1] = closure_6(onChange(5600).Stack, obj9);
  obj5.children = items1;
  return closure_7(onChange(6708).ActionSheet, obj5);
});