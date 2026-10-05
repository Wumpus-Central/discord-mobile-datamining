// === Module 15685: UserSettingsDesignSystemSheets ===

// Module 15685 (UserSettingsDesignSystemSheets)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Card from "Card" /* 5995 */;
import TextInput from "TextInput" /* 6098 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheetRow from "ActionSheetRow" /* 6697 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import PromoSheet from "PromoSheet" /* 10045 */;
import _modDef15686 from "module_15686" /* 15686 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function showDemoPromoSheet() {
  ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_12), "promo-sheet-demo");
}
const ScrollView = fn(17).ScrollView;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(36);
  [tmp5, tmp6] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const first = tmp7[0];
  const tmp9 = _slicedToArray(noop.useState("Header title"), 2);
  const first1 = tmp9[0];
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp12, tmp13] = noop.useState("Header subtitle");
  require = tmp13;
  const tmp11 = _slicedToArray(noop.useState("Header subtitle"), 2);
  [tmp15, tmp16] = noop.useState("Reset");
  importDefault = tmp16;
  if (cResult[0] === tmp15) {
    if (cResult[1] === first) {
      let tmp18 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      let tmp22 = tmp5;
      if (tmp5) {
        const obj2 = { onPress: NOOP };
        tmp22 = React5(tmp(6696).ActionSheetCloseButton, obj2);
      }
      cResult[3] = tmp5;
      cResult[4] = tmp22;
      let tmp21 = tmp22;
    } else {
      tmp21 = cResult[4];
    }
    if (cResult[5] === tmp12) {
      if (cResult[6] === tmp18) {
        if (cResult[7] === tmp21) {
          if (cResult[10] !== first1) {
            const obj3 = { value: first1, onChange: tmp9[1], label: "Title" };
            const tmp30 = React5(tmp(6098).TextInput, obj3);
            cResult[10] = first1;
            cResult[11] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function b() {
              return tmp13("");
            };
            cResult[12] = fn;
            let tmp32 = fn;
          } else {
            tmp32 = cResult[12];
          }
          if (cResult[13] !== tmp12) {
            const obj4 = { value: tmp12, onChange: tmp13, label: "Subtitle", maxLength: 100, clearable: true, onClear: tmp32 };
            const tmp35 = React5(tmp(6098).TextInput, obj4);
            cResult[13] = tmp12;
            cResult[14] = tmp35;
            let tmp33 = tmp35;
          } else {
            tmp33 = cResult[14];
          }
          if (cResult[15] === tmp28) {
            if (cResult[16] === tmp33) {
              let tmp36 = cResult[17];
            }
            if (cResult[18] !== first) {
              const obj5 = { value: first, onValueChange: tmp7[1], label: "Show Leading" };
              const tmp41 = React5(tmp(6697).ActionSheetSwitchRow, obj5);
              cResult[18] = first;
              cResult[19] = tmp41;
              let tmp39 = tmp41;
            } else {
              tmp39 = cResult[19];
            }
            if (cResult[20] !== tmp5) {
              const obj6 = { value: tmp5, onValueChange: tmp6, label: "Show Trailing" };
              const tmp44 = React5(tmp(6697).ActionSheetSwitchRow, obj6);
              cResult[20] = tmp5;
              cResult[21] = tmp44;
              let tmp42 = tmp44;
            } else {
              tmp42 = cResult[21];
            }
            if (cResult[22] === tmp39) {
              if (cResult[23] === tmp42) {
                let tmp45 = cResult[24];
              }
              const _Symbol2 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                class N {
                  constructor() {
                    return closure_1("");
                  }
                }
                cResult[25] = N;
              } else {
                class N {
                  constructor() {
                    return closure_1("");
                  }
                }
              }
              if (cResult[26] === tmp15) {
                class N {
                  constructor() {
                    return closure_1("");
                  }
                }
                if (cResult[29] === tmp45) {
                  class N {
                    constructor() {
                      return closure_1("");
                    }
                  }
                }
                const obj7 = { spacing: 24, children: null };
                const items = [tmp36, tmp45, tmp50];
                obj7.children = items;
                const tmp55 = closure_1_8(tmp(5593).Stack, obj7);
                cResult[29] = tmp45;
                cResult[30] = tmp50;
                cResult[31] = tmp36;
                cResult[32] = tmp55;
              }
              const obj8 = { value: tmp15, onChange: tmp16, label: "Leading", disabled: !first, clearable: true, onClear: N };
              const tmp52 = React5(tmp(6098).TextInput, obj8);
              cResult[26] = tmp15;
              cResult[27] = !first;
              cResult[28] = tmp52;
            }
            const obj9 = { hasIcons: false, children: null };
            const items1 = [tmp39, tmp42];
            obj9.children = items1;
            const tmp47 = closure_1_8(tmp(6697).ActionSheetRow.Group, obj9);
            cResult[22] = tmp39;
            cResult[23] = tmp42;
            cResult[24] = tmp47;
            tmp45 = tmp47;
          }
          const obj10 = { children: null };
          const items2 = [tmp28, tmp33];
          obj10.children = items2;
          const tmp38 = closure_1_8(tmp(5593).Stack, obj10);
          cResult[15] = tmp28;
          cResult[16] = tmp33;
          cResult[17] = tmp38;
          tmp36 = tmp38;
        }
      }
    }
    const obj11 = { title: first1, subtitle: tmp12, leading: tmp18, trailing: tmp21 };
    const tmp27 = React5(tmp(6644).BottomSheetTitleHeader, obj11);
    cResult[5] = tmp12;
    cResult[6] = tmp18;
    cResult[7] = tmp21;
    cResult[8] = first1;
    cResult[9] = tmp27;
  }
  let tmp19 = first;
  if (first) {
    class N {
      constructor() {
        return closure_1("");
      }
    }
    const obj12 = { onPress: NOOP, label: tmp15 };
    tmp19 = React5(tmp(9195).ActionSheetHeaderPressableText, obj12);
  }
  cResult[0] = tmp15;
  cResult[1] = first;
  cResult[2] = tmp19;
  tmp18 = tmp19;
  const tmp14 = _slicedToArray(noop.useState("Reset"), 2);
}) : (() => {
  [tmp2, tmp3] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = _slicedToArray(noop.useState("Header title"), 2);
  const first1 = tmp6[0];
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp9, tmp10] = noop.useState("Header subtitle");
  require = tmp10;
  const tmp8 = _slicedToArray(noop.useState("Header subtitle"), 2);
  [tmp12, tmp13] = noop.useState("Reset");
  importDefault = tmp13;
  const obj = { title: first1, subtitle: null, leading: null, trailing: null };
  let tmp17;
  if ("" !== tmp9) {
    tmp17 = tmp9;
  }
  obj.subtitle = tmp17;
  let tmp14Result = first;
  if (first) {
    const obj2 = { onPress: NOOP, label: tmp12 };
    tmp14Result = React5(tmp15(9195).ActionSheetHeaderPressableText, obj2);
  }
  obj.leading = tmp14Result;
  let tmp14Result2 = tmp2;
  if (tmp2) {
    const obj3 = { onPress: NOOP };
    tmp14Result2 = React5(tmp15(6696).ActionSheetCloseButton, obj3);
  }
  const obj4 = { header: React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp14Result2;
  const obj5 = { spacing: 24, children: null };
  const obj6 = { children: null };
  const items = [
    React5(TextInput.TextInput, { value: first1, onChange: tmp6[1], label: "Title" }),
    React5(TextInput.TextInput, {
      value: tmp9,
      onChange: tmp10,
      label: "Subtitle",
      maxLength: 100,
      clearable: true,
      onClear() {
        return tmp10("");
      }
    })
  ];
  obj6.children = items;
  const items1 = [closure_1_8(Stack_Stack.Stack, obj6), , ];
  const obj8 = { hasIcons: false, children: null };
  const items2 = [React5(ActionSheetRow.ActionSheetSwitchRow, { value: first, onValueChange: tmp4[1], label: "Show Leading" }), React5(ActionSheetRow.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  obj8.children = items2;
  items1[1] = closure_1_8(ActionSheetRow.ActionSheetRow.Group, obj8);
  items1[2] = React5(TextInput.TextInput, {
    value: tmp12,
    onChange: tmp13,
    label: "Leading",
    disabled: !first,
    clearable: true,
    onClear() {
      return tmp13("");
    }
  });
  obj5.children = items1;
  obj4.children = closure_1_8(Stack_Stack.Stack, obj5);
  return React5(ActionSheet.ActionSheet, obj4);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      size: "lg",
      onPress() {
          return ActionSheetActionCreatorsDefault.hideActionSheet("promo-sheet-demo");
        },
      text: null
    };
    const intl = util.intl;
    obj2.text = intl.string(util.t.BddRzS);
    const tmp6 = React5(components_Button_Button.Button, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { graphic: null, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
    const obj4 = { type: "image", src: null, aspectRatio: "16/9" };
    const obj5 = { uri: _modDef15686 };
    obj4.src = obj5;
    obj3.graphic = obj4;
    obj3.actions = first;
    const tmp10 = React5(PromoSheet.PromoSheet, obj3);
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (() => {
  const obj = {
    size: "lg",
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("promo-sheet-demo");
    },
    text: null
  };
  const intl = util.intl;
  obj.text = intl.string(util.t.BddRzS);
  const obj2 = { graphic: null, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
  const obj3 = { type: "image", src: null, aspectRatio: "16/9" };
  const tmp = React5(components_Button_Button.Button, obj);
  obj3.src = { uri: _modDef15686 };
  obj2.graphic = obj3;
  obj2.actions = tmp;
  return React5(PromoSheet.PromoSheet, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = React5(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" });
    const tmp9 = React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const obj3 = { children: null };
    const items = [tmp5, tmp6, ];
    const obj4 = {
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
        },
      text: "Show Action Sheet"
    };
    items[2] = React5(components_Button_Button.Button, obj4);
    obj3.children = items;
    obj2.children = closure_1_8(Stack_Stack.Stack, obj3);
    const tmp13 = React5(Card.Card, obj2);
    cResult[2] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { children: null };
    const items1 = [tmp10, ];
    const obj6 = { children: null };
    const obj7 = { children: null };
    const items2 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), ];
    const obj8 = { onPress: showDemoPromoSheet, text: "Show Promo Sheet" };
    items2[2] = React5(components_Button_Button.Button, obj8);
    obj7.children = items2;
    obj6.children = closure_1_8(Stack_Stack.Stack, obj7);
    items1[1] = React5(Card.Card, obj6);
    obj5.children = items1;
    const tmp18 = closure_1_8(Stack_Stack.Stack, obj5);
    cResult[3] = tmp18;
    let tmp14 = tmp18;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.container) {
    const obj9 = { contentContainerStyle: tmp4.container, children: tmp14 };
    const tmp22 = React5(ScrollView, obj9);
    cResult[4] = tmp4.container;
    cResult[5] = tmp22;
    let tmp19 = tmp22;
  } else {
    tmp19 = cResult[5];
  }
  return tmp19;
}) : (() => {
  const obj = { contentContainerStyle: closure_9().container, children: null };
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items = [
    React5(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }),
    React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }),
    React5(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
      },
      text: "Show Action Sheet"
    })
  ];
  obj4.children = items;
  obj3.children = closure_1_8(Stack_Stack.Stack, obj4);
  const items1 = [React5(Card.Card, obj3), ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items2 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), React5(components_Button_Button.Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" })];
  obj7.children = items2;
  obj6.children = closure_1_8(Stack_Stack.Stack, obj7);
  items1[1] = React5(Card.Card, obj6);
  obj2.children = items1;
  obj.children = closure_1_8(Stack_Stack.Stack, obj2);
  return React5(ScrollView, obj);
});