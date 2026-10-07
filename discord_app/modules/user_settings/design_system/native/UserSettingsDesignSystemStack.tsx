// === Module 15689: UserSettingsDesignSystemStack ===

// Module 15689 (UserSettingsDesignSystemStack)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import Card from "Card" /* 6002 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { padding: 16, flex: 1, alignItems: "center" }, block: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 } };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_6();
  if (cResult[0] !== tmp2.block) {
    const obj2 = { style: tmp2.block };
    const tmp6 = React4(React2, obj2);
    cResult[0] = tmp2.block;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => React4(React2, { style: closure_6().block }));
ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(11);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" });
    const tmp9 = React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks are vertical and have a spacing of 8." });
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
    const obj4 = { children: null };
    const items1 = [React4(closure_7, {}), React4(closure_7, {})];
    obj4.children = items1;
    items[2] = hasOwnProperty(Stack_Stack.Stack, obj4);
    obj3.children = items;
    obj2.children = hasOwnProperty(Stack_Stack.Stack, obj3);
    const tmp14 = React4(Card.Card, obj2);
    cResult[2] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" });
    const tmp19 = React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8." });
    cResult[3] = tmp18;
    cResult[4] = tmp19;
    let tmp16 = tmp19;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { children: null };
    const obj6 = { children: null };
    const items2 = [tmp15, tmp16, ];
    const obj7 = { spacing: 24, children: null };
    const items3 = [React4(closure_7, {}), React4(closure_7, {})];
    obj7.children = items3;
    items2[2] = hasOwnProperty(Stack_Stack.Stack, obj7);
    obj6.children = items2;
    obj5.children = hasOwnProperty(Stack_Stack.Stack, obj6);
    const tmp24 = React4(Card.Card, obj5);
    cResult[5] = tmp24;
    let tmp20 = tmp24;
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp28 = React4(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" });
    const tmp29 = React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical." });
    cResult[6] = tmp28;
    cResult[7] = tmp29;
    let tmp26 = tmp29;
    let tmp25 = tmp28;
  } else {
    tmp25 = cResult[6];
    tmp26 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { spacing: 16, children: null };
    const items4 = [tmp10, tmp20, ];
    const obj9 = { children: null };
    const obj10 = { children: null };
    const items5 = [tmp25, tmp26, ];
    const obj11 = { direction: "horizontal", children: null };
    const items6 = [React4(closure_7, {}), React4(closure_7, {})];
    obj11.children = items6;
    items5[2] = hasOwnProperty(Stack_Stack.Stack, obj11);
    obj10.children = items5;
    obj9.children = hasOwnProperty(Stack_Stack.Stack, obj10);
    items4[2] = React4(Card.Card, obj9);
    obj8.children = items4;
    const tmp34 = hasOwnProperty(Stack_Stack.Stack, obj8);
    cResult[8] = tmp34;
    let tmp30 = tmp34;
  } else {
    tmp30 = cResult[8];
  }
  if (cResult[9] !== tmp4.container) {
    const obj12 = { children: null };
    const obj13 = { style: tmp4.container, children: tmp30 };
    obj12.children = React4(React2, obj13);
    const tmp39 = React4(React3, obj12);
    cResult[9] = tmp4.container;
    cResult[10] = tmp39;
    let tmp35 = tmp39;
  } else {
    tmp35 = cResult[10];
  }
  return tmp35;
}) : (() => {
  const obj = { children: null };
  const obj2 = { style: closure_6().container, children: null };
  const obj3 = { spacing: 16, children: null };
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks are vertical and have a spacing of 8." }), ];
  const obj6 = { children: null };
  const items1 = [React4(closure_7, {}), React4(closure_7, {})];
  obj6.children = items1;
  items[2] = hasOwnProperty(Stack_Stack.Stack, obj6);
  obj5.children = items;
  obj4.children = hasOwnProperty(Stack_Stack.Stack, obj5);
  const items2 = [React4(Card.Card, obj4), , ];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items3 = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Spacing" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8." }), ];
  const obj9 = { spacing: 24, children: null };
  const items4 = [React4(closure_7, {}), React4(closure_7, {})];
  obj9.children = items4;
  items3[2] = hasOwnProperty(Stack_Stack.Stack, obj9);
  obj8.children = items3;
  obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
  items2[1] = React4(Card.Card, obj7);
  const obj10 = { children: null };
  const obj11 = { children: null };
  const items5 = [React4(Text_Text.Text, { variant: "text-lg/bold", children: "Horizontal" }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical." }), ];
  const obj12 = { direction: "horizontal", children: null };
  const items6 = [React4(closure_7, {}), React4(closure_7, {})];
  obj12.children = items6;
  items5[2] = hasOwnProperty(Stack_Stack.Stack, obj12);
  obj11.children = items5;
  obj10.children = hasOwnProperty(Stack_Stack.Stack, obj11);
  items2[2] = React4(Card.Card, obj10);
  obj3.children = items2;
  obj2.children = hasOwnProperty(Stack_Stack.Stack, obj3);
  obj.children = React4(React2, obj2);
  return React4(React3, obj);
});