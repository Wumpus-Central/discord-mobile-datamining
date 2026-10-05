// === Module 15181: CustomTypingIndicatorAnimationPickerSheet ===

// Module 15181 (CustomTypingIndicatorAnimationPickerSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import Card_Card from "Card/Card" /* 5995 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, previewRow: obj3, optionCard: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" }, optionCardSelected: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", paddingVertical: nativeDefault.space.PX_24 };
obj4 = { borderColor: nativeDefault.colors.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE, borderWidth: 2 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isSelected;
  let label;
  let onPress;
  const obj = react2;
  const cResult = obj.c(13);
  ({ label, isSelected, onPress } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === tmp4.optionCard) {
    let tmp6;
    let tmp7;
    let tmp8;
    if (cResult[1] === (isSelected && tmp4.optionCardSelected)) {
      tmp6 = cResult[2];
    }
    let str = "faint";
    if (isSelected) {
      str = "none";
    }
    if (cResult[3] !== isSelected) {
      const obj2 = { checked: isSelected };
      cResult[3] = isSelected;
      cResult[4] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== label) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: label };
      const tmp10 = metroRequire(Text_Text.Text, obj3);
      cResult[5] = label;
      cResult[6] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[6];
    }
    if (cResult[7] === onPress) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === str) {
          if (cResult[10] === tmp7) {
            let tmp11;
            if (cResult[11] === tmp8) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
      }
    }
    const obj4 = { style: tmp6, onPress, border: str, accessibilityRole: "togglebutton", accessibilityState: tmp7, children: tmp8 };
    const tmp13 = metroRequire(Card_Card.Card, obj4);
    cResult[7] = onPress;
    cResult[8] = tmp6;
    cResult[9] = str;
    cResult[10] = tmp7;
    cResult[11] = tmp8;
    cResult[12] = tmp13;
    tmp11 = tmp13;
  }
  const items = [tmp4.optionCard, isSelected && tmp4.optionCardSelected];
  cResult[0] = tmp4.optionCard;
  cResult[1] = isSelected && tmp4.optionCardSelected;
  cResult[2] = items;
  tmp6 = items;
}) : ((isSelected) => {
  let label;
  let onPress;
  let str;
  isSelected = isSelected.isSelected;
  ({ label, onPress } = isSelected);
  const tmp = closure_8();
  const items = [tmp.optionCard, ];
  let optionCardSelected = isSelected;
  const Card = Card_Card.Card;
  if (isSelected) {
    optionCardSelected = tmp.optionCardSelected;
  }
  items[1] = optionCardSelected;
  const obj = { style: items, onPress, border: str, accessibilityRole: "togglebutton", accessibilityState: { checked: isSelected }, children: metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: label }) };
  str = "faint";
  if (isSelected) {
    str = "none";
  }
  return metroRequire(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialAnimation) => {
  let animation;
  let closure_2;
  let emojis;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let num;
  let obj10;
  let onChange;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = onChange(576);
  const cResult = obj.c(29);
  ({ emojis, onChange } = initialAnimation);
  initialAnimation = initialAnimation.initialAnimation;
  const tmp4 = closure_8();
  [animation, dependencyMap] = react.useState(initialAnimation);
  if (cResult[0] === emojis) {
    if (cResult[1] === onChange) {
      if (cResult[2] === animation) {
        if (cResult[3] === tmp4.content) {
          if (cResult[4] === tmp4.previewRow) {
            tmp7 = cResult[5];
            tmp8 = cResult[6];
            num = cResult[7];
            tmp9 = cResult[8];
            tmp10 = cResult[9];
            tmp11 = cResult[10];
            tmp12 = cResult[11];
          }
          if (cResult[19] === tmp7) {
            if (cResult[20] === num) {
              let tmp24;
              if (cResult[21] === tmp9) {
                tmp24 = cResult[22];
              }
              if (cResult[23] === tmp8) {
                if (cResult[24] === tmp10) {
                  if (cResult[25] === tmp11) {
                    if (cResult[26] === tmp12) {
                      let tmp27;
                      if (cResult[27] === tmp24) {
                        tmp27 = cResult[28];
                      }
                      return tmp27;
                    }
                  }
                }
              }
              const obj2 = { contentStyles: tmp10, dismissAccessibilityLabel: tmp11, children: items };
              items = [tmp12, tmp24];
              const tmp29 = closure_7(tmp8, obj2);
              cResult[23] = tmp8;
              cResult[24] = tmp10;
              cResult[25] = tmp11;
              cResult[26] = tmp12;
              cResult[27] = tmp24;
              cResult[28] = tmp29;
              tmp27 = tmp29;
            }
          }
          const obj3 = { spacing: num, children: tmp9 };
          const tmp26 = closure_6(tmp7, obj3);
          cResult[19] = tmp7;
          cResult[20] = num;
          cResult[21] = tmp9;
          cResult[22] = tmp26;
          tmp24 = tmp26;
        }
      }
    }
  }
  const obj4 = { value: onChange(1385).TypingIndicatorAnimation.UNSPECIFIED, label: intl.string(onChange(1126).t.PoWNfe) };
  intl = onChange(1126).intl;
  const items1 = [obj4, , , ];
  const obj5 = { value: onChange(1385).TypingIndicatorAnimation.PULSE, label: intl2.string(animation(3725)["gyL/ce"]) };
  intl2 = onChange(1126).intl;
  items1[1] = obj5;
  const obj6 = { value: onChange(1385).TypingIndicatorAnimation.RING, label: intl3.string(animation(3725).EgekTm) };
  intl3 = onChange(1126).intl;
  items1[2] = obj6;
  const obj7 = { value: onChange(1385).TypingIndicatorAnimation.WAVE, label: intl4.string(animation(3725)["8t5EiI"]) };
  intl4 = onChange(1126).intl;
  items1[3] = obj7;
  const ActionSheet = onChange(6701).ActionSheet;
  const content = tmp4.content;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = onChange(1126).intl;
    const stringResult = intl5.string(animation(3725)["q+qHax"]);
    cResult[12] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[12];
  }
  if (cResult[13] === emojis) {
    let tmp16;
    if (cResult[14] === animation) {
      tmp16 = cResult[15];
    }
    if (cResult[16] === tmp4.previewRow) {
      let tmp19;
      if (cResult[17] === tmp16) {
        tmp19 = cResult[18];
      }
      let Stack = onChange(5593).Stack;
      const items2 = [items1.slice(0, 2), items1.slice(2, 4)];
      const mapped = items2.map((arr, index) => {
        let obj = {
          direction: "horizontal",
          spacing: 8,
          children: arr.map((label) => {
            const obj = {
              label: label.label,
              isSelected: closure_1 === label.value,
              onPress() {
                const value = label.value;
                closure_2_2(value);
                onChange(value);
              }
            };
            return closure_1_6(closure_1_9, obj, label.label);
          })
        };
        const Stack = Stack_Stack.Stack;
        return metroRequire(Stack, obj, index);
      });
      cResult[0] = emojis;
      cResult[1] = onChange;
      cResult[2] = animation;
      ({ content: tmp3[3], previewRow: tmp3[4] } = tmp4);
      cResult[5] = Stack;
      cResult[6] = ActionSheet;
      cResult[7] = 8;
      cResult[8] = mapped;
      cResult[9] = content;
      cResult[10] = tmp14;
      cResult[11] = tmp19;
      tmp12 = tmp19;
      tmp11 = tmp14;
      tmp10 = content;
      tmp9 = mapped;
      num = 8;
      tmp8 = ActionSheet;
      tmp7 = Stack;
    }
    const obj8 = { style: tmp4.previewRow, children: tmp16 };
    const tmp22 = closure_6(View, obj8);
    cResult[16] = tmp4.previewRow;
    cResult[17] = tmp16;
    cResult[18] = tmp22;
    tmp19 = tmp22;
  }
  const obj9 = { config: obj10, size: 54 };
  obj10 = { emojis, animation, typingSuggestion: onChange(1385).TypingSuggestion.UNSPECIFIED };
  const tmp13Result = animation(11595);
  const tmp18 = closure_6(tmp13Result, obj9);
  cResult[13] = emojis;
  cResult[14] = animation;
  cResult[15] = tmp18;
  tmp16 = tmp18;
}) : ((onChange) => {
  let animation;
  let closure_2;
  let emojis;
  let initialAnimation;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj7;
  let obj8;
  let tmp4;
  onChange = onChange.onChange;
  animation = undefined;
  dependencyMap = undefined;
  ({ emojis, initialAnimation } = onChange);
  const tmp = closure_8();
  [animation, dependencyMap] = react.useState(initialAnimation);
  let obj = { value: onChange(1385).TypingIndicatorAnimation.UNSPECIFIED, label: intl.string(onChange(1126).t.PoWNfe) };
  intl = onChange(1126).intl;
  const items = [obj, , , ];
  const obj2 = { value: onChange(1385).TypingIndicatorAnimation.PULSE, label: intl2.string(animation(3725)["gyL/ce"]) };
  intl2 = onChange(1126).intl;
  items[1] = obj2;
  const obj3 = { value: onChange(1385).TypingIndicatorAnimation.RING, label: intl3.string(animation(3725).EgekTm) };
  intl3 = onChange(1126).intl;
  items[2] = obj3;
  const obj4 = { value: onChange(1385).TypingIndicatorAnimation.WAVE, label: intl4.string(animation(3725)["8t5EiI"]) };
  intl4 = onChange(1126).intl;
  items[3] = obj4;
  const obj5 = { contentStyles: tmp.content, dismissAccessibilityLabel: intl5.string(animation(3725)["q+qHax"]), children: items1 };
  const ActionSheet = onChange(6701).ActionSheet;
  intl5 = onChange(1126).intl;
  const obj6 = { style: tmp.previewRow, children: closure_6(tmp4, obj7) };
  obj7 = { config: obj8, size: 54 };
  obj8 = { emojis, animation, typingSuggestion: onChange(1385).TypingSuggestion.UNSPECIFIED };
  tmp4 = animation(11595);
  items1 = [closure_6(View, obj6), ];
  const obj9 = {
    spacing: 8,
    children: items2.map((arr, index) => {
      let obj = {
        direction: "horizontal",
        spacing: 8,
        children: arr.map((label) => {
          const obj = {
            label: label.label,
            isSelected: closure_1 === label.value,
            onPress() {
              const value = label.value;
              closure_2_2(value);
              onChange(value);
            }
          };
          return closure_1_6(closure_1_9, obj, label.label);
        })
      };
      const Stack = Stack_Stack.Stack;
      return metroRequire(Stack, obj, index);
    })
  };
  let Stack = onChange(5593).Stack;
  items2 = [items.slice(0, 2), items.slice(2, 4)];
  items1[1] = closure_6(Stack, obj9);
  return closure_7(ActionSheet, obj5);
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnimationPickerSheet.tsx");

export default tmp4;