// === Module 15322: StackBlock ===

// Module 15322 (StackBlock)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4442 */;
import Stack from "Stack" /* 4891 */;
import PressableCard from "PressableCard" /* 5566 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function StackBlock() {
  return callback(closure_2, { style: callback3().block });
}
noopAll;
({ View: obj1, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { padding: 16, flex: 1, alignItems: "center" }, block: null };
createCacheKey = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, height: 80, flex: 1 };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemStack.tsx");

export default function UserSettingsDesignSystemStack() {
  let obj = { children: null };
  obj = { style: callback3().container, children: null };
  obj = { spacing: 16, children: null };
  obj1 = { children: null };
  const obj2 = { children: null };
  const items = [callback(Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "By default, stacks are vertical and have a spacing of 8." }), ];
  const obj3 = { children: null };
  const items1 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj3[0] = items1;
  items[2] = callback2(Stack.Stack, obj3);
  obj2[0] = items;
  obj1[0] = callback2(Stack.Stack, obj2);
  const items2 = [callback(PressableCard.Card, obj1), , ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items3 = [callback(Text.Text, { variant: "text-lg/bold", children: "Spacing" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the spacing with the spacing prop. The spacing prop uses our 4px-based spacing scale. By default, stacks are vertical and have a spacing of 8." }), ];
  const obj6 = { spacing: 24, children: null };
  const items4 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj6[1] = items4;
  items3[2] = callback2(Stack.Stack, obj6);
  obj5[0] = items3;
  obj4[0] = callback2(Stack.Stack, obj5);
  items2[1] = callback(PressableCard.Card, obj4);
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items5 = [callback(Text.Text, { variant: "text-lg/bold", children: "Horizontal" }), callback(Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can control the direction with the direction prop. The direction prop can be either horizontal or vertical." }), ];
  const obj9 = { direction: "horizontal", children: null };
  const items6 = [callback(StackBlock, {}), callback(StackBlock, {})];
  obj9[1] = items6;
  items5[2] = callback2(Stack.Stack, obj9);
  obj8[0] = items5;
  obj7[0] = callback2(Stack.Stack, obj8);
  items2[2] = callback(PressableCard.Card, obj7);
  obj[1] = items2;
  obj[1] = callback2(Stack.Stack, obj);
  obj[0] = callback(closure_2, obj);
  return callback(closure_3, obj);
};