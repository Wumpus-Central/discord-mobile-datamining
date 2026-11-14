// === Module 18464: UserSettingsDesignSystemDragHandle ===

// Module 18464 (UserSettingsDesignSystemDragHandle)
import nativeDefault from "native" /* 575 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import Text_Text from "Text/Text" /* 5929 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import TableRow from "TableRow" /* 7443 */;
import Card from "Card" /* 7445 */;
import DragHandle from "DragHandle" /* 7447 */;
import TableRowGroup from "TableRowGroup" /* 7746 */;
import SettingsIcon from "SettingsIcon" /* 10569 */;
import noop from "module_19" /* 19 */;

require = fn;
function HandleLabel(arg0) {
  ({ children, overlay } = arg0);
  let color = "text-default";
  if (true === overlay) {
    color = "text-overlay-light";
  }
  return timestampProducer(Text_Text.Text, { variant: "body-sm/semibold", color, children });
}
function VariantDemo(variant) {
  variant = variant.variant;
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { style: tmp.handleWithLabel, children: null };
  items = [timestampProducer(DragHandle.DragHandle, { variant }), timestampProducer(HandleLabel, { overlay: "overlay" === variant, children: "Static" })];
  obj2.children = items;
  const items1 = [metroImportDefault(React4, obj2), ];
  const obj3 = { style: tmp.handleWithLabel, children: null };
  const items2 = [timestampProducer(DragHandle.DragHandle, { variant, onPress: NOOP }), timestampProducer(HandleLabel, { overlay: "overlay" === variant, children: "Pressable" })];
  obj3.children = items2;
  items1[1] = metroImportDefault(React4, obj3);
  obj.children = items1;
  const tmp7 = metroImportDefault(React5, obj);
  let str = "Default";
  if ("overlay" === variant) {
    str = "Overlay";
  }
  const children = [timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "text-strong", children: str }), ];
  if ("overlay" === variant) {
    const obj5 = { style: tmp.handles, start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, colors, children: tmp7 };
    let tmp5Result = timestampProducer(LinearGradientDefault, obj5);
  } else {
    const obj6 = { style: tmp.handles, children: tmp7 };
    tmp5Result = timestampProducer(React4, obj6);
  }
  children[1] = tmp5Result;
  return metroImportDefault(Stack_Stack.Stack, { spacing: 8, children });
}
function InContextDemo() {
  const tmp = closure_10();
  const obj = { spacing: 12, children: null };
  const obj2 = { title: "Draggable TableRow", description: "The handle has its own press handlers, so it renders the pressable version.", hasIcons: true, isSortable: true, children: null };
  const obj3 = { draggable: true, icon: timestampProducer(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon }), label: "Boost your Server", subLabel: "Unlock perks for the entire community", onPress: NOOP };
  items = [timestampProducer(TableRow.TableRow, obj3), ];
  const obj5 = { draggable: true, dragHandlePressableProps: { onPress: NOOP }, icon: null, label: "Boost your Server", subLabel: "Unlock perks for the entire community" };
  const obj4 = { IconComponent: SettingsIcon.SettingsIcon };
  obj5.icon = timestampProducer(TableRow.TableRow.Icon, { IconComponent: SettingsIcon.SettingsIcon });
  items[1] = timestampProducer(TableRow.TableRow, obj5);
  obj2.children = items;
  const items1 = [metroImportDefault(TableRowGroup.TableRowGroup, obj2), timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "text-strong", style: tmp.heading, children: "TableRows outside of a group" }), , , , , ];
  const obj8 = { children: null };
  const items2 = [timestampProducer(TableRow.TableRow, { draggable: true, label: "Boost your Server", subLabel: "Unlock perks for the entire community", onPress: NOOP, start: true }), timestampProducer(TableRow.TableRow, { draggable: true, dragHandlePressableProps: { onPress: NOOP }, label: "Boost your Server", subLabel: "Unlock perks for the entire community", end: true })];
  obj8.children = items2;
  items1[2] = metroImportDefault(React4, obj8);
  items1[3] = timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "text-strong", style: tmp.heading, children: "Card" });
  const obj10 = { draggable: true, dragHandlePressableProps: { onPress: NOOP }, label: "Boost your Server", subLabel: "Unlock perks for the entire community", end: true };
  const obj11 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.heading, children: "Card" };
  const obj6 = { IconComponent: SettingsIcon.SettingsIcon };
  const obj7 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.heading, children: "TableRows outside of a group" };
  const obj9 = { draggable: true, label: "Boost your Server", subLabel: "Unlock perks for the entire community", onPress: NOOP, start: true };
  items1[4] = timestampProducer(Card.Card, { draggable: true, onPress: NOOP, children: timestampProducer(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Draggable, tappable Card" }) });
  const obj12 = { draggable: true, onPress: NOOP, children: timestampProducer(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Draggable, tappable Card" }) };
  items1[5] = timestampProducer(Card.Card, { draggable: true, dragHandlePressableProps: { onPress: NOOP }, children: timestampProducer(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Draggable, non-tappable Card" }) });
  const obj13 = { draggable: true, dragHandlePressableProps: { onPress: NOOP }, children: timestampProducer(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Draggable, non-tappable Card" }) };
  items1[6] = timestampProducer(Card.Card, { children: timestampProducer(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: "Card without a drag handle" }) });
  obj.children = items1;
  return metroImportDefault(Stack_Stack.Stack, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const NOOP = fn(1072).NOOP;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const colors = ["purple", "orange"];
const createStyles = fn(5306);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, handles: null, handleWithLabel: null, heading: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.handles = { flexDirection: "row", alignItems: "center", gap: 24, padding: 16, borderRadius: nativeDefault.radii.md };
let obj4 = { flexDirection: "row", alignItems: "center", gap: 24, padding: 16, borderRadius: nativeDefault.radii.md };
obj2.handleWithLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.heading = { marginBlockStart: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemDragHandle.tsx");

export default function UserSettingsDesignSystemDragHandle() {
  const obj = { contentContainerStyle: closure_10().container, children: null };
  const obj2 = { spacing: 24, children: null };
  items = [timestampProducer(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: "The handle is static unless it gets a press handler (onPress, onPressIn, onPressOut or onLongPress)." }), timestampProducer(VariantDemo, { variant: "default" }), timestampProducer(VariantDemo, { variant: "overlay" }), timestampProducer(InContextDemo, {})];
  obj2.children = items;
  obj.children = metroImportDefault(Stack_Stack.Stack, obj2);
  return timestampProducer(React3, obj);
};