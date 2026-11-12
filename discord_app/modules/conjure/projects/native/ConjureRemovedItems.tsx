// === Module 13206: ConjureRemovedItems ===

// Module 13206 (ConjureRemovedItems)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5315 */;
import Text_Text from "Text/Text" /* 5866 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import TableCheckboxRow from "TableCheckboxRow" /* 7667 */;
import FormCheckbox from "FormCheckbox" /* 7668 */;
import TableRowGroup from "TableRowGroup" /* 7680 */;
import FolderIcon from "FolderIcon" /* 8007 */;
import AppsIcon from "AppsIcon" /* 8036 */;
import BotTagDefault from "BotTag" /* 10801 */;
import RobotIcon from "RobotIcon" /* 12586 */;
import noop from "module_19" /* 19 */;

require = fn;
function ItemIcon(kind) {
  kind = kind.kind;
  if ("channel" === kind) {
    return timestampProducer(AppsIcon.AppsIcon, { size: "sm", color: "text-subtle" });
  } else if ("app" === kind) {
    return timestampProducer(RobotIcon.RobotIcon, { size: "sm", color: "text-subtle" });
  } else if ("project" === kind) {
    return timestampProducer(FolderIcon.FolderIcon, { size: "sm", color: "text-subtle" });
  }
}
function ItemsBox(children) {
  ({ items, dimmed } = children);
  if (dimmed === undefined) {
    dimmed = false;
  }
  const tmp = closure_8();
  const items1 = [tmp.box, ];
  let boxDimmed = null;
  if (dimmed) {
    boxDimmed = tmp.boxDimmed;
  }
  let obj = { style: items1, children: null };
  items1[1] = boxDimmed;
  const obj2 = { spacing: 8, children: null };
  const items2 = [
    items.map((kind) => {
      const obj = { direction: "horizontal", spacing: 8, align: "center", children: null };
      items = [closure_1_6(ItemIcon, { kind: kind.kind }), closure_1_6(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: kind.label })];
      obj.children = items;
      return closure_1_7(Stack_Stack.Stack, obj, kind.key);
    }),
    children.children
  ];
  obj2.children = items2;
  obj.children = metroImportDefault(Stack_Stack.Stack, obj2);
  return timestampProducer(hasOwnProperty, obj);
}
function OptionalItemRow(arg0) {
  ({ item, checked } = arg0);
  ({ onChange: importDefault, disabled } = arg0);
  const tmp = closure_8();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  const obj2 = { accessibilityRole: checkboxA11yNative.accessibilityRole, accessibilityState: checkboxA11yNative.accessibilityState, accessibilityLabel: item.label, disabled, style: null, onPress: null, children: null };
  let boxDimmed = null;
  if (disabled) {
    boxDimmed = tmp.boxDimmed;
  }
  obj2.style = boxDimmed;
  obj2.onPress = function onPress() {
    return importDefault(!checked);
  };
  const obj3 = { direction: "horizontal", spacing: 8, align: "center", children: null };
  items = [timestampProducer(ItemIcon, { kind: item.kind }), timestampProducer(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", style: tmp.optionalLabel, children: item.label }), timestampProducer(FormCheckbox.FormCheckbox, { checked })];
  obj3.children = items;
  obj2.children = metroImportDefault(Stack_Stack.Stack, obj3);
  return timestampProducer(React4, obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { box: { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, boxDimmed: { opacity: 0.5 }, optionalLabel: { flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default function ConjureRemovedItems(items) {
  let optionalItems = items.optionalItems;
  if (optionalItems === undefined) {
    optionalItems = [];
  }
  const obj = { spacing: 8, children: null };
  const obj2 = { variant: "body-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef4079["+E2PqP"]);
  items = [timestampProducer(Text_Text.Text, obj2), ];
  items[1] = timestampProducer(ItemsBox, {
    items: items.items,
    children: optionalItems.map((item) => {
      const merged = Object.assign(item);
      return closure_1_6(OptionalItemRow, {}, item.item.key);
    })
  });
  obj.children = items;
  return metroImportDefault(Stack_Stack.Stack, obj);
};
export function formatWithAppTag(x6FvsZ, targetAppName) {
  const intl = util.intl;
  const obj = { app: null };
  const obj2 = { children: null };
  items = [targetAppName, " ", timestampProducer(BotTagDefault, {})];
  obj2.children = items;
  obj.app = metroImportDefault(noop.Fragment, obj2, "app");
  return intl.format(x6FvsZ, obj);
}
export function ConjureRemoveEverythingField(checked) {
  checked = checked.checked;
  ({ onChange, items } = checked);
  const obj = { spacing: 8, children: null };
  const obj2 = { hasIcons: false, children: null };
  const obj3 = { label: null, checked: null, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(_modDef4079.gKA9tU);
  obj3.checked = checked;
  obj3.onPress = onChange;
  obj2.children = timestampProducer(TableCheckboxRow.TableCheckboxRow, obj3);
  const items1 = [timestampProducer(TableRowGroup.TableRowGroup, obj2), timestampProducer(ItemsBox, { items, dimmed: !checked })];
  obj.children = items1;
  return metroImportDefault(Stack_Stack.Stack, obj);
}