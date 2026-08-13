// discord_app/modules/application_commands/native/ContextMenuCommandItem.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { apply } from "../../../../_runtime/00012_apply.js";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { TableRowInner } from "../../../design/components/TableRow/native/TableRow.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getApplicationCommandsIconSource } from "ApplicationCommandUtils.tsx";

const require = arg1;
createCacheKey = { commandIcon: null, loadingIcon: null, loadingName: null };
createCacheKey = { width: 32, height: 32, borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
const obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: require("Themes").radii.md };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: require("Themes").radii.md };
const result = require("jsxProd").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

export default function ContextMenuCommandItem(item) {
  let end;
  let onPress;
  let start;
  item = item.item;
  const section = item.section;
  ({ onPress, start, end } = item);
  const items = [item, ];
  let name;
  if (section != null) {
    name = section.name;
  }
  items[1] = name;
  const memo = React.useMemo(() => {
    const type = item.type;
    const intl = tmp2(tmp3[7]).intl;
    let name;
    if (section != null) {
      name = section.name;
    }
    return intl.formatToPlainString(item(outer1_2[7]).t.Pk4Mz3, { applicationName: name, commandName: item.displayName });
  }, items);
  let obj = item(11658);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { accessibilityLabel: memo, onPress, label: item.displayName, icon: null, trailing: null, start: null, end: null };
  let tmp8Result = null != applicationCommandsIconSource;
  if (tmp8Result) {
    obj = { style: null, source: null };
    obj[0] = tmp.commandIcon;
    obj[1] = applicationCommandsIconSource;
    tmp8Result = tmp8(section(5308), obj);
  }
  obj[3] = tmp8Result;
  obj[4] = jsx(item(4288).SendMessageIcon, {});
  obj[5] = start;
  obj[6] = end;
  return jsx(item(5414).TableRow, { accessibilityLabel: memo, onPress, label: item.displayName, icon: null, trailing: null, start: null, end: null });
};
export const ContextMenuCommandLoadingItem = function ContextMenuCommandLoadingItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const tmp = createCacheKey();
  let obj = { label: null, icon: null, start: null, end: null };
  obj = { style: null };
  const items = [tmp.loadingName, ];
  obj = { width: null };
  obj[0] = "" + apply.random(60, 80) + "%";
  items[1] = obj;
  obj[0] = items;
  obj[0] = <View width={null} />;
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj[1] = <View style={items1} />;
  obj[2] = start;
  obj[3] = end;
  return jsx(TableRowInner.TableRow, { width: null });
};
export const ContextMenuCommandEmptyItem = function ContextMenuCommandEmptyItem(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const obj = { label: null, icon: null, start: null, end: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.YSNlV2);
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = createCacheKey());
  obj[1] = <View style={items} />;
  obj[2] = start;
  obj[3] = end;
  return jsx(TableRowInner.TableRow, { label: null, icon: null, start: null, end: null });
};
export const ContextMenuCommandAppItem = function ContextMenuCommandAppItem(section) {
  let end;
  let onPress;
  let start;
  section = section.section;
  ({ onPress, start, end } = section);
  let obj = getApplicationCommandsIconSource;
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { onPress, label: section.name, icon: null, start: null, end: null, arrow: true };
  let tmp4Result = null != applicationCommandsIconSource;
  if (tmp4Result) {
    obj = { style: null, source: null };
    obj[0] = tmp.commandIcon;
    obj[1] = applicationCommandsIconSource;
    tmp4Result = tmp4(preload, obj);
  }
  obj[2] = tmp4Result;
  obj[3] = start;
  obj[4] = end;
  return jsx(TableRowInner.TableRow, { onPress, label: section.name, icon: null, start: null, end: null, arrow: true });
};