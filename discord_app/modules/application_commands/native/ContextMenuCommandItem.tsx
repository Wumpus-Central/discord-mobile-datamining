// === Module 17327: ContextMenuCommandItem ===

// Module 17327 (ContextMenuCommandItem)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import FastImageDefault from "FastImage" /* 5799 */;
import TableRow from "TableRow" /* 5817 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 12482 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { commandIcon: null, loadingIcon: null, loadingName: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
obj2.commandIcon = size;
obj2.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingName = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default function ContextMenuCommandItem(item) {
  item = item.item;
  const section = item.section;
  ({ onPress, start, end } = item);
  const items = [item, ];
  let name;
  if (section != null) {
    name = section.name;
  }
  items[1] = name;
  const memo = noop.useMemo(() => {
    const type = item.type;
    const intl = util.intl;
    let name;
    if (section != null) {
      name = section.name;
    }
    return intl.formatToPlainString(util.t.Pk4Mz3, { applicationName: name, commandName: item.displayName });
  }, items);
  const tmp = closure_6();
  const tmp5 = item;
  const applicationCommandsIconSource = item(12482).getApplicationCommandsIconSource(section);
  const obj2 = { accessibilityLabel: memo, onPress, label: item.displayName, icon: null, trailing: null, start: null, end: null };
  let tmp8Result = null != applicationCommandsIconSource;
  if (tmp8Result) {
    const obj3 = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp8Result = jsx(section(5799), { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  obj2.icon = tmp8Result;
  obj2.trailing = jsx(tmp5(4700).SendMessageIcon, {});
  obj2.start = start;
  obj2.end = end;
  return jsx(item(5817).TableRow, { accessibilityLabel: memo, onPress, label: item.displayName, icon: null, trailing: null, start: null, end: null });
};
export const ContextMenuCommandLoadingItem = function ContextMenuCommandLoadingItem(arg0) {
  ({ start, end } = arg0);
  const tmp = closure_6();
  const obj = { label: null, icon: null, start: null, end: null };
  const obj2 = { style: null };
  const items = [tmp.loadingName, ];
  const obj3 = { width: "" + _modDef12.random(60, 80) + "%" };
  items[1] = obj3;
  obj2.style = items;
  obj.label = <View style={null} />;
  const obj5 = { style: null };
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj5.style = items1;
  obj.icon = <View style={null} />;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { label: null, icon: null, start: null, end: null });
};
export const ContextMenuCommandEmptyItem = function ContextMenuCommandEmptyItem(arg0) {
  ({ start, end } = arg0);
  const obj = { label: null, icon: null, start: null, end: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.YSNlV2);
  const obj2 = { style: null };
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = closure_6());
  obj2.style = items;
  obj.icon = <View style={null} />;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { label: null, icon: null, start: null, end: null });
};
export const ContextMenuCommandAppItem = function ContextMenuCommandAppItem(section) {
  section = section.section;
  ({ onPress, start, end } = section);
  const tmp = closure_6();
  const applicationCommandsIconSource = application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section);
  const obj2 = { onPress, label: section.name, icon: null, start: null, end: null, arrow: true };
  let tmp4Result = null != applicationCommandsIconSource;
  if (tmp4Result) {
    const obj3 = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp4Result = jsx(FastImageDefault, { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  obj2.icon = tmp4Result;
  obj2.start = start;
  obj2.end = end;
  return jsx(TableRow.TableRow, { onPress, label: section.name, icon: null, start: null, end: null, arrow: true });
};