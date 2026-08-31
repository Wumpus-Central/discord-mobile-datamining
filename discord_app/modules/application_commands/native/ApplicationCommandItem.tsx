// === Module 11936: ApplicationCommandItem ===

// Module 11936 (ApplicationCommandItem)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import { AUTOCOMPLETE_ROW_HEIGHT } from "AUTOCOMPLETE_ROW_HEIGHT" /* 10301 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { applicationCommandItem: null, highlightedApplicationCommandItem: null, applicationCommandIcon: null, applicationCommandDescriptionWrapper: null, applicationCommandSectionName: null };
  obj = { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
  obj[1] = obj;
  obj[2] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, marginRight: 16 };
  obj[3] = { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" };
  obj[4] = { paddingLeft: 16, marginLeft: "auto" };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

export default function ApplicationCommandItem(highlighted) {
  ({ command, section } = highlighted);
  ({ guildId: importDefault, showIcon } = highlighted);
  if (showIcon === undefined) {
    showIcon = true;
  }
  let flag = highlighted.highlighted;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let obj = section(stateFromStores[7]);
  const tmp3 = callback2(obj.useFontScale());
  obj1 = section(stateFromStores[8]);
  const items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => {
    if (null != closure_1) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return closure_1_5.getMember(tmp, tmp2.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = React.useMemo(() => section(stateFromStores[9]).getApplicationCommandsIconSource(section, stateFromStores), items1);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  obj = { accessibilityLabel: null, style: null, accessibilityRole: "button", onPress: null, children: null };
  const intl = tmp(tmp2[11]).intl;
  obj = { applicationName: name, commandDescription: command.displayDescription, commandName: command.displayName };
  obj[0] = intl.formatToPlainString(section(stateFromStores[11]).t.eo8b3e, obj);
  obj1 = {};
  const merged = Object.assign(tmp3.applicationCommandItem);
  const merged1 = Object.assign(flag ? tmp3.highlightedApplicationCommandItem : {});
  obj[1] = obj1;
  obj[3] = highlighted.onPress;
  if (showIcon) {
    showIcon = null != memo;
  }
  if (showIcon) {
    const obj2 = { style: null, source: null };
    obj2[0] = tmp3.applicationCommandIcon;
    obj2[1] = memo;
    showIcon = callback(importDefault(tmp2[12]), obj2);
  }
  const items2 = [showIcon, , ];
  const obj3 = { style: tmp3.applicationCommandDescriptionWrapper, children: null };
  const items3 = [callback(section(stateFromStores[13]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` }), callback(section(stateFromStores[13]).Text, { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: command.displayDescription })];
  obj3[1] = items3;
  items2[1] = closure_8(View, obj3);
  items2[2] = callback(section(stateFromStores[13]).Text, { style: tmp3.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name });
  obj[4] = items2;
  return closure_8(section(stateFromStores[10]).PressableOpacity, obj);
};