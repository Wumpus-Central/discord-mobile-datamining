// discord_app/modules/application_commands/native/ContextMenuCommandItem.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import application_commands_ApplicationCommandUtils from "ApplicationCommandUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { commandIcon: null, loadingIcon: null, loadingName: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
createStyles.commandIcon = size;
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.loadingIcon = createStyles;
createStyles.loadingName = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 24,
  borderRadius: nativeDefault.radii.md,
};
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default function ContextMenuCommandItem(item) {
  item = item.item;
  const section = item.section;
  ({ onPress, start, end } = item);
  const items = [item];
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
  let obj = item(12231);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = {
    accessibilityLabel: memo,
    onPress,
    label: item.displayName,
    icon: null,
    trailing: null,
    start: null,
    end: null,
  };
  let tmp8Result = null != applicationCommandsIconSource;
  if (tmp8Result) {
    obj = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp8Result = jsx(section(5587), { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  obj.icon = tmp8Result;
  obj.trailing = jsx(item(4505).SendMessageIcon, {});
  obj.start = start;
  obj.end = end;
  return jsx(item(5605).TableRow, {
    accessibilityLabel: memo,
    onPress,
    label: item.displayName,
    icon: null,
    trailing: null,
    start: null,
    end: null,
  });
}
export const ContextMenuCommandLoadingItem = function ContextMenuCommandLoadingItem(arg0) {
  ({ start, end } = arg0);
  const tmp = closure_6();
  let obj = { label: null, icon: null, start: null, end: null };
  obj = { style: null };
  const items = [tmp.loadingName];
  obj = { width: "" + _modDef12.random(60, 80) + "%" };
  items[1] = obj;
  obj.style = items;
  obj.label = <View width={"" + _modDef12.random(60, 80) + "%"} />;
  const obj1 = { style: null };
  const items1 = [,];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj1.style = items1;
  obj.icon = <View style={null} />;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { width: "" + _modDef12.random(60, 80) + "%" });
};
export const ContextMenuCommandEmptyItem = function ContextMenuCommandEmptyItem(arg0) {
  ({ start, end } = arg0);
  let obj = { label: null, icon: null, start: null, end: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.YSNlV2);
  obj = { style: null };
  const items = [,];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = closure_6());
  obj.style = items;
  obj.icon = <View style={null} />;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { style: null });
};
export const ContextMenuCommandAppItem = function ContextMenuCommandAppItem(section) {
  section = section.section;
  ({ onPress, start, end } = section);
  let obj = application_commands_ApplicationCommandUtils;
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { onPress, label: section.name, icon: null, start: null, end: null, arrow: true };
  let tmp4Result = null != applicationCommandsIconSource;
  if (tmp4Result) {
    obj = { style: tmp.commandIcon, source: applicationCommandsIconSource };
    tmp4Result = jsx(FastImageDefault, { style: tmp.commandIcon, source: applicationCommandsIconSource });
  }
  obj.icon = tmp4Result;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { onPress, label: section.name, icon: null, start: null, end: null, arrow: true });
};
