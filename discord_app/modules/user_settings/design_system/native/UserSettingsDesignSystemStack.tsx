// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { padding: 16, flex: 1, alignItems: "center" }, block: obj2 };
obj2 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  height: 80,
  flex: 1,
};
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_6();
      if (cResult[0] !== tmp2.block) {
        const obj2 = { style: tmp2.block };
        const tmp6 = React3(React2, obj2);
        cResult[0] = tmp2.block;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_6().block };
      return React3(React2, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Stack;
      let Stack3;
      let Stack6;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj10;
      let obj13;
      let obj3;
      let obj6;
      let tmp10;
      let tmp15;
      let tmp16;
      let tmp20;
      let tmp25;
      let tmp26;
      let tmp30;
      let tmp35;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(11);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" });
        const tmp9 = React3(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "By default, stacks are vertical and have a spacing of 8.",
        });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: hasOwnProperty(Stack, obj3) };
        const Card = Card_Card.Card;
        obj3 = { children: items };
        items = [tmp5, tmp6];
        Stack = Stack_Stack.Stack;
        const obj4 = { children: items1 };
        const Stack2 = Stack_Stack.Stack;
        items1 = [React3(closure_7, {}), React3(closure_7, {})];
        items[2] = hasOwnProperty(Stack2, obj4);
        const tmp14 = React3(Card, obj2);
        cResult[2] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" });
        const tmp19 = React3(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8.",
        });
        cResult[3] = tmp18;
        cResult[4] = tmp19;
        tmp16 = tmp19;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[3];
        tmp16 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { children: hasOwnProperty(Stack3, obj6) };
        const Card2 = Card_Card.Card;
        obj6 = { children: items2 };
        items2 = [tmp15, tmp16];
        Stack3 = Stack_Stack.Stack;
        const obj7 = { spacing: 24, children: items3 };
        const Stack4 = Stack_Stack.Stack;
        items3 = [React3(closure_7, {}), React3(closure_7, {})];
        items2[2] = hasOwnProperty(Stack4, obj7);
        const tmp24 = React3(Card2, obj5);
        cResult[5] = tmp24;
        tmp20 = tmp24;
      } else {
        tmp20 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" });
        const tmp29 = React3(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical.",
        });
        cResult[6] = tmp28;
        cResult[7] = tmp29;
        tmp26 = tmp29;
        tmp25 = tmp28;
      } else {
        tmp25 = cResult[6];
        tmp26 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { spacing: 16, children: items4 };
        items4 = [tmp10, tmp20];
        const Stack5 = Stack_Stack.Stack;
        const obj9 = { children: hasOwnProperty(Stack6, obj10) };
        const Card3 = Card_Card.Card;
        obj10 = { children: items5 };
        items5 = [tmp25, tmp26];
        Stack6 = Stack_Stack.Stack;
        const obj11 = { direction: "horizontal", children: items6 };
        const Stack7 = Stack_Stack.Stack;
        items6 = [React3(closure_7, {}), React3(closure_7, {})];
        items5[2] = hasOwnProperty(Stack7, obj11);
        items4[2] = React3(Card3, obj9);
        const tmp34 = hasOwnProperty(Stack5, obj8);
        cResult[8] = tmp34;
        tmp30 = tmp34;
      } else {
        tmp30 = cResult[8];
      }
      if (cResult[9] !== tmp4.container) {
        const obj12 = { children: React3(React2, obj13) };
        obj13 = { style: tmp4.container, children: tmp30 };
        const tmp39 = React3(_false, obj12);
        cResult[9] = tmp4.container;
        cResult[10] = tmp39;
        tmp35 = tmp39;
      } else {
        tmp35 = cResult[10];
      }
      return tmp35;
    }
  : () => {
      let Stack;
      let Stack2;
      let Stack4;
      let Stack6;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj11;
      let obj2;
      let obj3;
      let obj5;
      let obj8;
      const obj = { children: React3(React2, obj2) };
      obj2 = { style: closure_6().container, children: hasOwnProperty(Stack, obj3) };
      obj3 = { spacing: 16, children: items2 };
      Stack = Stack_Stack.Stack;
      const obj4 = { children: hasOwnProperty(Stack2, obj5) };
      const Card = Card_Card.Card;
      obj5 = { children: items };
      Stack2 = Stack_Stack.Stack;
      items = [
        React3(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }),
        React3(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "By default, stacks are vertical and have a spacing of 8.",
        }),
      ];
      const obj6 = { children: items1 };
      const Stack3 = Stack_Stack.Stack;
      items1 = [React3(closure_7, {}), React3(closure_7, {})];
      items[2] = hasOwnProperty(Stack3, obj6);
      items2 = [React3(Card, obj4), ,];
      const obj7 = { children: hasOwnProperty(Stack4, obj8) };
      const Card2 = Card_Card.Card;
      obj8 = { children: items3 };
      Stack4 = Stack_Stack.Stack;
      items3 = [
        React3(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" }),
        React3(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8.",
        }),
      ];
      const obj9 = { spacing: 24, children: items4 };
      const Stack5 = Stack_Stack.Stack;
      items4 = [React3(closure_7, {}), React3(closure_7, {})];
      items3[2] = hasOwnProperty(Stack5, obj9);
      items2[1] = React3(Card2, obj7);
      const obj10 = { children: hasOwnProperty(Stack6, obj11) };
      const Card3 = Card_Card.Card;
      obj11 = { children: items5 };
      Stack6 = Stack_Stack.Stack;
      items5 = [
        React3(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" }),
        React3(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children:
            "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical.",
        }),
      ];
      const obj12 = { direction: "horizontal", children: items6 };
      const Stack7 = Stack_Stack.Stack;
      items6 = [React3(closure_7, {}), React3(closure_7, {})];
      items5[2] = hasOwnProperty(Stack7, obj12);
      items2[2] = React3(Card3, obj10);
      return React3(_false, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx",
);

export default tmp5;
