// === Module 16131: UserSettingsDesignSystemAILoader ===

// Module 16131 (UserSettingsDesignSystemAILoader)
import Text_Text from "Text/Text" /* 4753 */;
import Stack_Stack from "Stack/Stack" /* 5185 */;
import Card from "Card" /* 5826 */;
import AILoader from "AILoader" /* 14409 */;
import noop from "module_19" /* 19 */;

require = fn;
function DemoRow(arg0) {
  ({ label, children } = arg0);
  const obj = { style: closure_6().row, children: null };
  items = [React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: label }), children];
  obj.children = items;
  return hasOwnProperty(React3, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let closure_6 = createStyles.createStyles({ container: { padding: 16 }, row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } });
let closure_7 = [12, 16, 24];
let items = [{ color: "text-default", label: "text-default" }, { color: "text-subtle", label: "text-subtle" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAILoader.tsx");

export default function UserSettingsDesignSystemAILoader() {
  let obj = { contentContainerStyle: closure_6().container, children: null };
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const obj4 = { children: null };
  items = [
    React4(Text_Text.Text, { variant: "text-lg/bold", children: "Sizes" }),
    React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "`size` is the glyph size in pixels; the gap between slots scales with it. Default 16." }),
    closure_7.map((size) => {
      const obj = { label: "" + size + "px", children: closure_1_4(AILoader.AILoader, { size }) };
      return closure_1_4(DemoRow, obj, size);
    })
  ];
  obj4.children = items;
  obj3.children = hasOwnProperty(Stack_Stack.Stack, obj4);
  const items1 = [React4(Card.Card, obj3), ];
  const obj5 = { children: null };
  const obj6 = { children: null };
  const items2 = [
    React4(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }),
    React4(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any semantic text token. Defaults to `text-default`." }),
    items.map((color) => {
      const label = color.label;
      return closure_1_4(DemoRow, { label, children: closure_1_4(AILoader.AILoader, { color: color.color }) }, label);
    })
  ];
  obj6.children = items2;
  obj5.children = hasOwnProperty(Stack_Stack.Stack, obj6);
  items1[1] = React4(Card.Card, obj5);
  obj2.children = items1;
  obj.children = hasOwnProperty(Stack_Stack.Stack, obj2);
  return React4(React2, obj);
};