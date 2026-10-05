// === Module 15692: UserSettingsDesignSystemAILoader ===

// Module 15692 (UserSettingsDesignSystemAILoader)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import Card_Card from "Card/Card" /* 5995 */;
import AILoader from "AILoader" /* 14209 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ ScrollView: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { padding: 16 }, row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } });
let closure_7 = [12, 16, 24];
let items = [{ color: "text-default", label: "text-default" }, { color: "text-subtle", label: "text-subtle" }];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let label;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  ({ label, children } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: label };
    const tmp7 = React3(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.row) {
      let tmp8;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.row, children: items };
  items = [tmp5, children];
  const tmp9 = hasOwnProperty(_false, obj3);
  cResult[2] = children;
  cResult[3] = tmp4.row;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let children;
  let label;
  ({ label, children } = arg0);
  const obj = { style: closure_6().row, children: items };
  items = [React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: label }), children];
  return hasOwnProperty(_false, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Stack;
  let Stack3;
  let first;
  let items1;
  let items2;
  let obj3;
  let obj6;
  let tmp10;
  let tmp15;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { children: hasOwnProperty(Stack, obj3) };
    const Card = Card_Card.Card;
    obj3 = { children: items };
    Stack = Stack_Stack.Stack;
    items = [
      React3(Text_Text.Text, { variant: "text-lg/bold", children: "Sizes" }),
      React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "`size` is the glyph size in pixels; the gap between slots scales with it. Default 16." }),
      closure_7.map((size) => {
          let obj2;
          const obj = { label: "" + size + "px", children: closure_1_4(AILoader.AILoader, obj2) };
          obj2 = { size };
          return closure_1_4(closure_1_9, obj, size);
        })
    ];
    const tmp9 = React3(Card, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { spacing: 24, children: items1 };
    items1 = [first, ];
    const Stack2 = Stack_Stack.Stack;
    const obj5 = { children: hasOwnProperty(Stack3, obj6) };
    const Card2 = Card_Card.Card;
    obj6 = { children: items2 };
    Stack3 = Stack_Stack.Stack;
    items2 = [
      React3(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }),
      React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any semantic text token. Defaults to `text-default`." }),
      items.map((color) => {
          const label = color.label;
          const obj = { label, children: closure_1_4(AILoader.AILoader, { color: color.color }) };
          return closure_1_4(closure_1_9, obj, label);
        })
    ];
    items1[1] = React3(Card2, obj5);
    const tmp14 = hasOwnProperty(Stack2, obj4);
    cResult[1] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== tmp4.container) {
    const obj7 = { contentContainerStyle: tmp4.container, children: tmp10 };
    const tmp18 = React3(React2, obj7);
    cResult[2] = tmp4.container;
    cResult[3] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
  }
  return tmp15;
}) : (() => {
  let Stack;
  let Stack2;
  let Stack3;
  let items1;
  let items2;
  let obj2;
  let obj4;
  let obj6;
  let obj = { contentContainerStyle: closure_6().container, children: hasOwnProperty(Stack, obj2) };
  obj2 = { spacing: 24, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { children: hasOwnProperty(Stack2, obj4) };
  const Card = Card_Card.Card;
  obj4 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Sizes" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "`size` is the glyph size in pixels; the gap between slots scales with it. Default 16." }),
    closure_7.map((size) => {
      let obj2;
      const obj = { label: "" + size + "px", children: closure_1_4(AILoader.AILoader, obj2) };
      obj2 = { size };
      return closure_1_4(closure_1_9, obj, size);
    })
  ];
  items1 = [React3(Card, obj3), ];
  const obj5 = { children: hasOwnProperty(Stack3, obj6) };
  const Card2 = Card_Card.Card;
  obj6 = { children: items2 };
  Stack3 = Stack_Stack.Stack;
  items2 = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }),
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any semantic text token. Defaults to `text-default`." }),
    items.map((color) => {
      const label = color.label;
      const obj = { label, children: closure_1_4(AILoader.AILoader, { color: color.color }) };
      return closure_1_4(closure_1_9, obj, label);
    })
  ];
  items1[1] = React3(Card2, obj5);
  return React3(React2, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAILoader.tsx");

export default tmp5;