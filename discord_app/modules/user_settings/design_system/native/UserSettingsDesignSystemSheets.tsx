// === Module 15699: UserSettingsDesignSystemSheets ===

// Module 15699 (UserSettingsDesignSystemSheets)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Card_Card from "Card/Card" /* 6002 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6105 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheetCloseButton from "ActionSheetCloseButton" /* 6703 */;
import ActionSheetRow from "ActionSheetRow" /* 6704 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import ActionSheetHeaderPressableText from "ActionSheetHeaderPressableText" /* 9230 */;
import PromoSheet2 from "PromoSheet" /* 10058 */;
import _modDef15700 from "module_15700" /* 15700 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportAll;
let metroImportDefault;
function showDemoPromoSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(() => Promise.resolve(closure_1_12), "promo-sheet-demo");
}
const ScrollView = react_native.ScrollView;
const NOOP = Constants.NOOP;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let first1;
  let items;
  let items1;
  let items2;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(36);
  [tmp5, tmp6] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, tmp9] = react.useState(false);
  [first1, tmp12] = react.useState("Header title");
  [tmp14, tmp15] = react.useState("Header subtitle");
  let closure_0 = tmp15;
  _slicedToArray(react.useState("Header subtitle"), 2);
  [tmp17, tmp18] = react.useState("Reset");
  importDefault = tmp18;
  _slicedToArray(react.useState("Reset"), 2);
  if (cResult[0] === tmp17) {
    let tmp20;
    let tmp23;
    if (cResult[1] === first) {
      tmp20 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      let tmp24 = tmp5;
      if (tmp24) {
        const obj2 = { onPress: NOOP };
        tmp24 = metroImportDefault(ActionSheetCloseButton.ActionSheetCloseButton, obj2);
      }
      cResult[3] = tmp5;
      cResult[4] = tmp24;
      tmp23 = tmp24;
    } else {
      tmp23 = cResult[4];
    }
    if (cResult[5] === tmp14) {
      if (cResult[6] === tmp20) {
        if (cResult[7] === tmp23) {
          let tmp30;
          let tmp34;
          let tmp35;
          if (cResult[10] !== first1) {
            const obj3 = { value: first1, onChange: tmp12, label: "Title" };
            const tmp32 = metroImportDefault(TextInput_TextInput.TextInput, obj3);
            cResult[10] = first1;
            cResult[11] = tmp32;
            tmp30 = tmp32;
          } else {
            tmp30 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function b() {
              return tmp15("");
            };
            cResult[12] = fn;
            tmp34 = fn;
          } else {
            tmp34 = cResult[12];
          }
          if (cResult[13] !== tmp14) {
            const obj4 = { value: tmp14, onChange: tmp15, label: "Subtitle", maxLength: 100, clearable: true, onClear: tmp34 };
            const tmp37 = metroImportDefault(TextInput_TextInput.TextInput, obj4);
            cResult[13] = tmp14;
            cResult[14] = tmp37;
            tmp35 = tmp37;
          } else {
            tmp35 = cResult[14];
          }
          if (cResult[15] === tmp30) {
            let tmp38;
            let tmp41;
            let tmp44;
            if (cResult[16] === tmp35) {
              tmp38 = cResult[17];
            }
            if (cResult[18] !== first) {
              const obj5 = { value: first, onValueChange: tmp9, label: "Show Leading" };
              const tmp43 = metroImportDefault(ActionSheetRow.ActionSheetSwitchRow, obj5);
              cResult[18] = first;
              cResult[19] = tmp43;
              tmp41 = tmp43;
            } else {
              tmp41 = cResult[19];
            }
            if (cResult[20] !== tmp5) {
              const obj6 = { value: tmp5, onValueChange: tmp6, label: "Show Trailing" };
              const tmp46 = metroImportDefault(ActionSheetRow.ActionSheetSwitchRow, obj6);
              cResult[20] = tmp5;
              cResult[21] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[21];
            }
            if (cResult[22] === tmp41) {
              let tmp47;
              if (cResult[23] === tmp44) {
                tmp47 = cResult[24];
              }
              const _Symbol2 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                class N {
                  constructor() {
                    return tmp18("");
                  }
                }
                cResult[25] = N;
              } else {
                class N {
                  constructor() {
                    return tmp18("");
                  }
                }
              }
              if (cResult[26] === tmp17) {
                class N {
                  constructor() {
                    return tmp18("");
                  }
                }
                if (cResult[29] === tmp47) {
                  class N {
                    constructor() {
                      return tmp18("");
                    }
                  }
                }
                const obj7 = { spacing: 24, children: items };
                items = [tmp38, tmp47, tmp52];
                cResult[29] = tmp47;
                cResult[30] = tmp52;
                cResult[31] = tmp38;
                cResult[32] = metroImportAll(Stack_Stack.Stack, obj7);
                const tmp57 = metroImportAll(Stack_Stack.Stack, obj7);
              }
              const obj8 = { value: tmp17, onChange: tmp18, label: "Leading", disabled: !first, clearable: true, onClear: N };
              cResult[26] = tmp17;
              cResult[27] = !first;
              cResult[28] = metroImportDefault(TextInput_TextInput.TextInput, obj8);
              const tmp54 = metroImportDefault(TextInput_TextInput.TextInput, obj8);
            }
            const obj9 = { hasIcons: false, children: items1 };
            items1 = [tmp41, tmp44];
            const tmp49 = metroImportAll(ActionSheetRow.ActionSheetRow.Group, obj9);
            cResult[22] = tmp41;
            cResult[23] = tmp44;
            cResult[24] = tmp49;
            tmp47 = tmp49;
          }
          const obj10 = { children: items2 };
          items2 = [tmp30, tmp35];
          const tmp40 = metroImportAll(Stack_Stack.Stack, obj10);
          cResult[15] = tmp30;
          cResult[16] = tmp35;
          cResult[17] = tmp40;
          tmp38 = tmp40;
        }
      }
    }
    const obj11 = { title: first1, subtitle: tmp14, leading: tmp20, trailing: tmp23 };
    cResult[5] = tmp14;
    cResult[6] = tmp20;
    cResult[7] = tmp23;
    cResult[8] = first1;
    cResult[9] = metroImportDefault(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj11);
    const tmp29 = metroImportDefault(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj11);
  }
  let tmp21 = first;
  if (tmp21) {
    class N {
      constructor() {
        return tmp18("");
      }
    }
    const obj12 = { onPress: NOOP, label: tmp17 };
    tmp21 = metroImportDefault(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj12);
  }
  cResult[0] = tmp17;
  cResult[1] = first;
  cResult[2] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  let Stack;
  let first;
  let first1;
  let items;
  let items1;
  let items2;
  let obj5;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp16Result;
  let tmp16Result2;
  let tmp19;
  let tmp2;
  let tmp3;
  let tmp6;
  let tmp9;
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, tmp6] = react.useState(false);
  [first1, tmp9] = react.useState("Header title");
  [tmp11, tmp12] = react.useState("Header subtitle");
  let closure_0 = tmp12;
  _slicedToArray(react.useState("Header subtitle"), 2);
  [tmp14, tmp15] = react.useState("Reset");
  let closure_1 = tmp15;
  _slicedToArray(react.useState("Reset"), 2);
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj = { title: first1, subtitle: tmp19, leading: tmp16Result, trailing: tmp16Result2 };
  tmp19 = undefined;
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  if ("" !== tmp11) {
    tmp19 = tmp11;
  }
  tmp16Result = first;
  if (tmp16Result) {
    const obj2 = { onPress: NOOP, label: tmp14 };
    tmp16Result = metroImportDefault(ActionSheetHeaderPressableText.ActionSheetHeaderPressableText, obj2);
  }
  tmp16Result2 = tmp2;
  if (tmp16Result2) {
    const obj3 = { onPress: NOOP };
    tmp16Result2 = metroImportDefault(ActionSheetCloseButton.ActionSheetCloseButton, obj3);
  }
  const obj4 = { header: metroImportDefault(BottomSheetTitleHeader, obj), children: metroImportAll(Stack, obj5) };
  obj5 = { spacing: 24, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj6 = { children: items };
  const Stack2 = Stack_Stack.Stack;
  items = [metroImportDefault(TextInput_TextInput.TextInput, { value: first1, onChange: tmp9, label: "Title" }), ];
  const obj7 = {
    value: tmp11,
    onChange: tmp12,
    label: "Subtitle",
    maxLength: 100,
    clearable: true,
    onClear() {
      return tmp12("");
    }
  };
  items[1] = metroImportDefault(TextInput_TextInput.TextInput, obj7);
  items1 = [metroImportAll(Stack2, obj6), , ];
  const obj8 = { hasIcons: false, children: items2 };
  const Group = ActionSheetRow.ActionSheetRow.Group;
  items2 = [metroImportDefault(ActionSheetRow.ActionSheetSwitchRow, { value: first, onValueChange: tmp6, label: "Show Leading" }), metroImportDefault(ActionSheetRow.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  items1[1] = metroImportAll(Group, obj8);
  const obj9 = {
    value: tmp14,
    onChange: tmp15,
    label: "Leading",
    disabled: !first,
    clearable: true,
    onClear() {
      return tmp15("");
    }
  };
  items1[2] = metroImportDefault(TextInput_TextInput.TextInput, obj9);
  return metroImportDefault(ActionSheet, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let obj4;
  let obj5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      size: "lg",
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet("promo-sheet-demo");
        },
      text: intl.string(intl2.t.BddRzS)
    };
    const Button = components_Button_Button.Button;
    intl = intl2.intl;
    const tmp6 = metroImportDefault(Button, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { graphic: obj4, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: first };
    obj4 = { type: "image", src: obj5, aspectRatio: "16/9" };
    obj5 = { uri: _modDef15700 };
    const PromoSheet = PromoSheet2.PromoSheet;
    const tmp10 = metroImportDefault(PromoSheet, obj3);
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (() => {
  let intl;
  let obj3;
  let obj4;
  let tmp;
  let obj = {
    size: "lg",
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet("promo-sheet-demo");
    },
    text: intl.string(intl2.t.BddRzS)
  };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  const obj2 = { graphic: obj3, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: tmp };
  obj3 = { type: "image", src: obj4, aspectRatio: "16/9" };
  obj4 = { uri: _modDef15700 };
  tmp = metroImportDefault(Button, obj);
  const PromoSheet = PromoSheet2.PromoSheet;
  return metroImportDefault(PromoSheet, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Stack;
  let Stack3;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj7;
  let tmp10;
  let tmp14;
  let tmp19;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" });
    const tmp9 = metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: metroImportAll(Stack, obj3) };
    const Card = Card_Card.Card;
    obj3 = { children: items };
    items = [tmp5, tmp6, ];
    Stack = Stack_Stack.Stack;
    const obj4 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
        },
      text: "Show Action Sheet"
    };
    items[2] = metroImportDefault(components_Button_Button.Button, obj4);
    const tmp13 = metroImportDefault(Card, obj2);
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { children: items1 };
    items1 = [tmp10, ];
    const Stack2 = Stack_Stack.Stack;
    const obj6 = { children: metroImportAll(Stack3, obj7) };
    const Card2 = Card_Card.Card;
    obj7 = { children: items2 };
    Stack3 = Stack_Stack.Stack;
    items2 = [metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), ];
    const obj8 = { onPress: showDemoPromoSheet, text: "Show Promo Sheet" };
    items2[2] = metroImportDefault(components_Button_Button.Button, obj8);
    items1[1] = metroImportDefault(Card2, obj6);
    const tmp18 = metroImportAll(Stack2, obj5);
    cResult[3] = tmp18;
    tmp14 = tmp18;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.container) {
    const obj9 = { contentContainerStyle: tmp4.container, children: tmp14 };
    const tmp22 = metroImportDefault(ScrollView, obj9);
    cResult[4] = tmp4.container;
    cResult[5] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[5];
  }
  return tmp19;
}) : (() => {
  let Stack;
  let Stack2;
  let Stack3;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj4;
  let obj7;
  let obj = { contentContainerStyle: closure_9().container, children: metroImportAll(Stack, obj2) };
  obj2 = { children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { children: metroImportAll(Stack2, obj4) };
  const Card = Card_Card.Card;
  obj4 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }), ];
  const obj5 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
    },
    text: "Show Action Sheet"
  };
  items[2] = metroImportDefault(components_Button_Button.Button, obj5);
  items1 = [metroImportDefault(Card, obj3), ];
  const obj6 = { children: metroImportAll(Stack3, obj7) };
  const Card2 = Card_Card.Card;
  obj7 = { children: items2 };
  Stack3 = Stack_Stack.Stack;
  items2 = [metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), ];
  const obj8 = { onPress: showDemoPromoSheet, text: "Show Promo Sheet" };
  items2[2] = metroImportDefault(components_Button_Button.Button, obj8);
  items1[1] = metroImportDefault(Card2, obj6);
  return metroImportDefault(ScrollView, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default tmp3;