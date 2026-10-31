// discord_app/modules/conjure/projects/native/ConjureRemovedItems.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import FolderIcon from "../../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import BotTagDefault from "../../../applications/native/BotTag.tsx";
import RobotIcon from "../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const items1 = [tmp.box];
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
      const items = [
        closure_1_6(ItemIcon, { kind: kind.kind }),
        closure_1_6(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: kind.label }),
      ];
      obj.children = items;
      return closure_1_7(Stack_Stack.Stack, obj, kind.key);
    }),
    children.children,
  ];
  obj2.children = items2;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(hasOwnProperty, obj);
}
function OptionalItemRow(arg0) {
  ({ item, checked } = arg0);
  ({ onChange: importDefault, disabled } = arg0);
  const tmp = closure_8();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  const obj2 = {
    accessibilityRole: checkboxA11yNative.accessibilityRole,
    accessibilityState: checkboxA11yNative.accessibilityState,
    accessibilityLabel: item.label,
    disabled,
    style: null,
    onPress: null,
    children: null,
  };
  let boxDimmed = null;
  if (disabled) {
    boxDimmed = tmp.boxDimmed;
  }
  obj2.style = boxDimmed;
  obj2.onPress = function onPress() {
    return importDefault(!checked);
  };
  const obj3 = { direction: "horizontal", spacing: 8, align: "center", children: null };
  const items = [
    timestampProducer(ItemIcon, { kind: item.kind }),
    timestampProducer(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      style: tmp.optionalLabel,
      children: item.label,
    }),
    timestampProducer(FormCheckbox.FormCheckbox, { checked }),
  ];
  obj3.children = items;
  obj2.children = React5(Stack_Stack.Stack, obj3);
  return timestampProducer(React4, obj2);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  box: {
    padding: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  boxDimmed: { opacity: 0.5 },
  optionalLabel: { flex: 1 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemovedItems.tsx");

export default function ConjureRemovedItems(items) {
  const optionalItem = items.optionalItem;
  const obj = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef3868["+E2PqP"]);
  items = [timestampProducer(Text_Text.Text, obj)];
  const obj2 = { items: items.items, children: null };
  let tmp2Result = null;
  if (null != optionalItem) {
    const obj3 = {};
    const merged = Object.assign(optionalItem);
    tmp2Result = timestampProducer(OptionalItemRow, obj3);
  }
  const obj4 = { spacing: 8, children: null };
  obj2.children = tmp2Result;
  items[1] = timestampProducer(ItemsBox, obj2);
  obj4.children = items;
  return React5(Stack_Stack.Stack, obj4);
}
export function formatWithAppTag(HmNT_r, targetAppName) {
  const intl = util.intl;
  const obj = { app: null };
  const obj2 = { children: null };
  const items = [targetAppName, " ", timestampProducer(BotTagDefault, {})];
  obj2.children = items;
  obj.app = React5(noop.Fragment, obj2, "app");
  return intl.format(HmNT_r, obj);
}
export function ConjureRemoveEverythingField(checked) {
  checked = checked.checked;
  ({ onChange, items } = checked);
  const obj = { spacing: 8, children: null };
  const obj2 = { hasIcons: false, children: null };
  const obj3 = { label: null, checked: null, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(_modDef3868.gKA9tU);
  obj3.checked = checked;
  obj3.onPress = onChange;
  obj2.children = timestampProducer(TableCheckboxRow.TableCheckboxRow, obj3);
  const items1 = [
    timestampProducer(TableRowGroup.TableRowGroup, obj2),
    timestampProducer(ItemsBox, { items, dimmed: !checked }),
  ];
  obj.children = items1;
  return React5(Stack_Stack.Stack, obj);
}
