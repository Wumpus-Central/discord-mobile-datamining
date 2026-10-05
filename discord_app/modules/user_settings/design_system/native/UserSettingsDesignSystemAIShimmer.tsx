// === Module 15694: UserSettingsDesignSystemAIShimmer ===

// Module 15694 (UserSettingsDesignSystemAIShimmer)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Card_Card from "Card/Card" /* 5995 */;
import AIShimmer from "AIShimmer" /* 14213 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children, onChange;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, buttonRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, stage: { minHeight: 28, justifyContent: "center" } });
const text = ["Reading the channel", "Finding the highlights", "Writing it up"];
const options = ["text-xs/normal", "text-sm/normal", "text-md/normal", "text-lg/semibold"];
const options2 = ["text-default", "text-subtle"];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  let tmp4;
  let value;
  let obj = require("react");
  const cResult = obj.c(10);
  ({ options, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  const tmp2 = closure_8();
  if (cResult[0] === onChange) {
    if (cResult[1] === options) {
      if (cResult[2] === value) {
        tmp4 = cResult[3];
      }
      if (cResult[7] === tmp2.buttonRow) {
        let tmp7;
        if (cResult[8] === tmp4) {
          tmp7 = cResult[9];
        }
        return tmp7;
      }
      const obj2 = { style: tmp3, children: tmp4 };
      const tmp10 = closure_6(closure_5, obj2);
      cResult[7] = tmp2.buttonRow;
      cResult[8] = tmp4;
      cResult[9] = tmp10;
      tmp7 = tmp10;
    }
  }
  if (cResult[4] === onChange) {
    let tmp5;
    if (cResult[5] === value) {
      tmp5 = cResult[6];
    }
    const mapped = options.map(tmp5);
    cResult[0] = onChange;
    cResult[1] = options;
    cResult[2] = value;
    cResult[3] = mapped;
    tmp4 = mapped;
  }
  const fn = function l(text) {
    let closure_0 = text;
    let str = "secondary";
    const Button = require("components/Button/Button").Button;
    if (text === closure_0) {
      str = "primary";
    }
    const obj = {
      size: "sm",
      variant: str,
      text,
      onPress() {
        return onChange(closure_0);
      }
    };
    return closure_1_6(Button, obj, text);
  };
  cResult[4] = onChange;
  cResult[5] = value;
  cResult[6] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  ({ options, value: require, onChange: dependencyMap } = arg0);
  let obj = {
    style: closure_8().buttonRow,
    children: options.map((text) => {
      require = text;
      let str = "secondary";
      const Button = components_Button_Button.Button;
      if (text === require) {
        str = "primary";
      }
      const obj = {
        size: "sm",
        variant: str,
        text,
        onPress() {
          return dependencyMap(closure_0);
        }
      };
      return closure_1_6(Button, obj, text);
    })
  };
  return closure_6(closure_5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp2 = closure_8();
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === tmp2.stage) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: tmp2.stage, children };
  const tmp4 = metroRequire(hasOwnProperty, obj2);
  cResult[0] = children;
  cResult[1] = tmp2.stage;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((children) => {
  const obj = { style: closure_8().stage, children: children.children };
  return metroRequire(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let first1;
  let first2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let obj14;
  let obj18;
  let obj20;
  let obj22;
  let obj4;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp25;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(40);
  const tmp4 = closure_8();
  const ref = react.useRef(null);
  [first, tmp8] = react.useState("text-md/normal");
  [first1, tmp11] = react.useState("text-default");
  [first2, tmp14] = react.useState("text-subtle");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Variant" });
    const tmp19 = metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any Mana text variant. The glyph band scales with the font size. Default `text-md/normal`." });
    cResult[0] = tmp18;
    cResult[1] = tmp19;
    tmp15 = tmp18;
    tmp16 = tmp19;
  } else {
    [tmp15, tmp16] = cResult;
  }
  if (cResult[2] !== first) {
    const obj2 = { options, value: first, onChange: tmp8 };
    const tmp24 = metroRequire(closure_12, obj2);
    cResult[2] = first;
    cResult[3] = tmp24;
    tmp20 = tmp24;
  } else {
    tmp20 = cResult[3];
  }
  if (cResult[4] !== first) {
    const obj3 = { children: metroRequire(AIShimmer.AIShimmer, obj4) };
    obj4 = { text, variant: first };
    const tmp29 = metroRequire(closure_13, obj3);
    cResult[4] = first;
    cResult[5] = tmp29;
    tmp25 = tmp29;
  } else {
    tmp25 = cResult[5];
  }
  if (cResult[6] === tmp20) {
    let tmp30;
    let tmp34;
    let tmp33;
    let tmp32;
    let tmp39;
    let tmp44;
    let tmp47;
    if (cResult[7] === tmp25) {
      tmp30 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp36 = metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" });
      const tmp37 = metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The text and moving glyph band can use different colors." });
      const tmp38 = metroRequire(Text_Text.Text, { variant: "text-md/medium", children: "Text color" });
      cResult[9] = tmp36;
      cResult[10] = tmp37;
      cResult[11] = tmp38;
      tmp34 = tmp38;
      tmp33 = tmp37;
      tmp32 = tmp36;
    } else {
      tmp32 = cResult[9];
      tmp33 = cResult[10];
      tmp34 = cResult[11];
    }
    if (cResult[12] !== first1) {
      const obj5 = { options: options2, value: first1, onChange: tmp11 };
      const tmp43 = metroRequire(closure_12, obj5);
      cResult[12] = first1;
      cResult[13] = tmp43;
      tmp39 = tmp43;
    } else {
      tmp39 = cResult[13];
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp46 = metroRequire(Text_Text.Text, { variant: "text-md/medium", children: "Glyph color" });
      cResult[14] = tmp46;
      tmp44 = tmp46;
    } else {
      tmp44 = cResult[14];
    }
    if (cResult[15] !== first2) {
      const obj6 = { options: options2, value: first2, onChange: tmp14 };
      const tmp51 = metroRequire(closure_12, obj6);
      cResult[15] = first2;
      cResult[16] = tmp51;
      tmp47 = tmp51;
    } else {
      tmp47 = cResult[16];
    }
    if (cResult[17] === first1) {
      let tmp52;
      if (cResult[18] === first2) {
        tmp52 = cResult[19];
      }
      if (cResult[20] === tmp47) {
        if (cResult[21] === tmp52) {
          let tmp57;
          let tmp62;
          let tmp61;
          let tmp67;
          let tmp70;
          let tmp73;
          let tmp77;
          let tmp82;
          if (cResult[22] === tmp39) {
            tmp57 = cResult[23];
          }
          const _Symbol3 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp64 = metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Manual Trigger" });
            const obj7 = { variant: "text-md/medium", color: "text-subtle", children: ["`delay=", null, "` turns off automatic changes. Use play() to run the next animation."] };
            const tmp66 = metroImportDefault(Text_Text.Text, obj7);
            cResult[24] = tmp64;
            cResult[25] = tmp66;
            tmp62 = tmp66;
            tmp61 = tmp64;
          } else {
            tmp61 = cResult[24];
            tmp62 = cResult[25];
          }
          const _Symbol4 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = {
              size: "sm",
              variant: "secondary",
              text: "play()",
              onPress() {
                          const current = ref.current;
                          let playResult;
                          if (current != null) {
                            playResult = current.play();
                          }
                          return playResult;
                        }
            };
            const tmp69 = metroRequire(components_Button_Button.Button, obj8);
            cResult[26] = tmp69;
            tmp67 = tmp69;
          } else {
            tmp67 = cResult[26];
          }
          const _Symbol5 = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = {
              size: "sm",
              variant: "secondary",
              text: "stop()",
              onPress() {
                          const current = ref.current;
                          let stopResult;
                          if (current != null) {
                            stopResult = current.stop();
                          }
                          return stopResult;
                        }
            };
            const tmp72 = metroRequire(components_Button_Button.Button, obj9);
            cResult[27] = tmp72;
            tmp70 = tmp72;
          } else {
            tmp70 = cResult[27];
          }
          if (cResult[28] !== tmp4.buttonRow) {
            const obj10 = { style: tmp4.buttonRow, children: items };
            items = [tmp67, tmp70];
            const tmp76 = metroImportDefault(hasOwnProperty, obj10);
            cResult[28] = tmp4.buttonRow;
            cResult[29] = tmp76;
            tmp73 = tmp76;
          } else {
            tmp73 = cResult[29];
          }
          const _Symbol6 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            const obj11 = { children: metroRequire(AIShimmer.AIShimmer, obj12) };
            obj12 = { ref, text, delay: null };
            const tmp81 = metroRequire(closure_13, obj11);
            cResult[30] = tmp81;
            tmp77 = tmp81;
          } else {
            tmp77 = cResult[30];
          }
          if (cResult[31] !== tmp73) {
            const obj13 = { children: metroImportDefault(Stack_Stack.Stack, obj14) };
            const Card3 = Card_Card.Card;
            obj14 = { children: items1 };
            items1 = [tmp61, tmp62, tmp73, tmp77];
            const tmp85 = metroRequire(Card3, obj13);
            cResult[31] = tmp73;
            cResult[32] = tmp85;
            tmp82 = tmp85;
          } else {
            tmp82 = cResult[32];
          }
          if (cResult[33] === tmp57) {
            if (cResult[34] === tmp82) {
              let tmp86;
              if (cResult[35] === tmp30) {
                tmp86 = cResult[36];
              }
              if (cResult[37] === tmp4.container) {
                let tmp89;
                if (cResult[38] === tmp86) {
                  tmp89 = cResult[39];
                }
                return tmp89;
              }
              const obj15 = { contentContainerStyle: tmp4.container, children: tmp86 };
              const tmp92 = metroRequire(React3, obj15);
              cResult[37] = tmp4.container;
              cResult[38] = tmp86;
              cResult[39] = tmp92;
              tmp89 = tmp92;
            }
          }
          const obj16 = { spacing: 24, children: items2 };
          items2 = [tmp30, tmp57, tmp82];
          const tmp88 = metroImportDefault(Stack_Stack.Stack, obj16);
          cResult[33] = tmp57;
          cResult[34] = tmp82;
          cResult[35] = tmp30;
          cResult[36] = tmp88;
          tmp86 = tmp88;
        }
      }
      const obj17 = { children: metroImportDefault(Stack_Stack.Stack, obj18) };
      const Card2 = Card_Card.Card;
      obj18 = { children: items3 };
      items3 = [tmp32, tmp33, tmp34, tmp39, tmp44, tmp47, tmp52];
      const tmp60 = metroRequire(Card2, obj17);
      cResult[20] = tmp47;
      cResult[21] = tmp52;
      cResult[22] = tmp39;
      cResult[23] = tmp60;
      tmp57 = tmp60;
    }
    const obj19 = { children: metroRequire(AIShimmer.AIShimmer, obj20) };
    obj20 = { text, color: first1, glyphColor: first2 };
    const tmp56 = metroRequire(closure_13, obj19);
    cResult[17] = first1;
    cResult[18] = first2;
    cResult[19] = tmp56;
    tmp52 = tmp56;
  }
  const obj21 = { children: metroImportDefault(Stack_Stack.Stack, obj22) };
  const Card = Card_Card.Card;
  obj22 = { children: items4 };
  items4 = [tmp15, tmp16, tmp20, tmp25];
  const tmp31 = metroRequire(Card, obj21);
  cResult[6] = tmp20;
  cResult[7] = tmp25;
  cResult[8] = tmp31;
  tmp30 = tmp31;
}) : (() => {
  let Stack;
  let Stack2;
  let Stack3;
  let Stack4;
  let first;
  let first1;
  let first2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj15;
  let obj2;
  let obj20;
  let obj4;
  let obj7;
  let obj9;
  let tmp11;
  let tmp5;
  let tmp8;
  const tmp = closure_8();
  const ref = react.useRef(null);
  [first, tmp5] = react.useState("text-md/normal");
  [first1, tmp8] = react.useState("text-default");
  [first2, tmp11] = react.useState("text-subtle");
  const obj = { contentContainerStyle: tmp.container, children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { children: metroImportDefault(Stack2, obj4) };
  const Card = Card_Card.Card;
  obj4 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Variant" }), metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any Mana text variant. The glyph band scales with the font size. Default `text-md/normal`." }), , ];
  const obj5 = { options, value: first, onChange: tmp5 };
  items[2] = metroRequire(closure_12, obj5);
  const obj6 = { children: metroRequire(AIShimmer.AIShimmer, obj7) };
  obj7 = { text, variant: first };
  items[3] = metroRequire(closure_13, obj6);
  items1 = [metroRequire(Card, obj3), , ];
  const obj8 = { children: metroImportDefault(Stack3, obj9) };
  const Card2 = Card_Card.Card;
  obj9 = { children: items2 };
  Stack3 = Stack_Stack.Stack;
  items2 = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }), metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The text and moving glyph band can use different colors." }), metroRequire(Text_Text.Text, { variant: "text-md/medium", children: "Text color" }), , , , ];
  const obj10 = { options: options2, value: first1, onChange: tmp8 };
  items2[3] = metroRequire(closure_12, obj10);
  items2[4] = metroRequire(Text_Text.Text, { variant: "text-md/medium", children: "Glyph color" });
  const obj11 = { options: options2, value: first2, onChange: tmp11 };
  items2[5] = metroRequire(closure_12, obj11);
  const obj12 = { children: metroRequire(AIShimmer.AIShimmer, obj13) };
  obj13 = { text, color: first1, glyphColor: first2 };
  items2[6] = metroRequire(closure_13, obj12);
  items1[1] = metroRequire(Card2, obj8);
  const obj14 = { children: metroImportDefault(Stack4, obj15) };
  const Card3 = Card_Card.Card;
  obj15 = { children: items3 };
  Stack4 = Stack_Stack.Stack;
  items3 = [metroRequire(Text_Text.Text, { variant: "text-lg/bold", children: "Manual Trigger" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["`delay=", null, "` turns off automatic changes. Use play() to run the next animation."] }), , ];
  const obj16 = { style: tmp.buttonRow, children: items4 };
  items4 = [, ];
  const obj17 = {
    size: "sm",
    variant: "secondary",
    text: "play()",
    onPress() {
      const current = ref.current;
      let playResult;
      if (current != null) {
        playResult = current.play();
      }
      return playResult;
    }
  };
  items4[0] = metroRequire(components_Button_Button.Button, obj17);
  const obj18 = {
    size: "sm",
    variant: "secondary",
    text: "stop()",
    onPress() {
      const current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    }
  };
  items4[1] = metroRequire(components_Button_Button.Button, obj18);
  items3[2] = metroImportDefault(hasOwnProperty, obj16);
  const obj19 = { children: metroRequire(AIShimmer.AIShimmer, obj20) };
  obj20 = { ref, text, delay: null };
  items3[3] = metroRequire(closure_13, obj19);
  items1[2] = metroRequire(Card3, obj14);
  return metroRequire(React3, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAIShimmer.tsx");

export default tmp4;