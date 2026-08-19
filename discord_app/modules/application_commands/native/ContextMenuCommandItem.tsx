// === Module 16085: ContextMenuCommandItem ===

// Module 16085 (ContextMenuCommandItem)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import preloadDefault from "preload" /* 5449 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import getApplicationCommandsIconSource from "getApplicationCommandsIconSource" /* 11392 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
const createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, height: 24, borderRadius: ThemesDefault.radii.md };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandItem.tsx");

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
  const memo = React.useMemo(() => {
    const type = item.type;
    const intl = item(dependencyMap[7]).intl;
    let name;
    if (section != null) {
      name = section.name;
    }
    return intl.formatToPlainString(item(dependencyMap[7]).t.Pk4Mz3, { applicationName: name, commandName: item.displayName });
  }, items);
  let obj = item(11392);
  const applicationCommandsIconSource = obj.getApplicationCommandsIconSource(section);
  obj = { accessibilityLabel: memo, onPress, label: item.displayName, icon: null, trailing: null, start: null, end: null };
  let tmp8Result = null != applicationCommandsIconSource;
  if (tmp8Result) {
    obj = { style: null, source: null };
    obj[0] = tmp.commandIcon;
    obj[1] = applicationCommandsIconSource;
    tmp8Result = jsx(section(5449), { style: null, source: null });
  }
  obj[3] = tmp8Result;
  obj[4] = jsx(item(4320).SendMessageIcon, {});
  obj[5] = start;
  obj[6] = end;
  return jsx(item(6291).TableRow, { accessibilityLabel: memo, onPress, label: item.displayName, icon: null, trailing: null, start: null, end: null });
};
export const ContextMenuCommandLoadingItem = function ContextMenuCommandLoadingItem(arg0) {
  ({ start, end } = arg0);
  const tmp = callback();
  const items = [tmp.loadingName, ];
  const obj = { width: "" + applyDefault.random(60, 80) + "%" };
  items[1] = obj;
  obj[0] = items;
  obj[0] = <View width={"" + applyDefault.random(60, 80) + "%"} />;
  const items1 = [, ];
  ({ commandIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
  obj[1] = <View style={items1} />;
  obj[2] = start;
  obj[3] = end;
  return jsx(TableRowInner.TableRow, { width: "" + applyDefault.random(60, 80) + "%" });
};
export const ContextMenuCommandEmptyItem = function ContextMenuCommandEmptyItem(arg0) {
  ({ start, end } = arg0);
  const obj = { label: null, icon: null, start: null, end: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.YSNlV2);
  const items = [, ];
  ({ commandIcon: arr[0], loadingIcon: arr[1] } = callback());
  obj[1] = <View style={items} />;
  obj[2] = start;
  obj[3] = end;
  return jsx(TableRowInner.TableRow, { label: null, icon: null, start: null, end: null });
};
export const ContextMenuCommandAppItem = function ContextMenuCommandAppItem(section) {
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
    tmp4Result = jsx(preloadDefault, { style: null, source: null });
  }
  obj[2] = tmp4Result;
  obj[3] = start;
  obj[4] = end;
  return jsx(TableRowInner.TableRow, { onPress, label: section.name, icon: null, start: null, end: null, arrow: true });
};