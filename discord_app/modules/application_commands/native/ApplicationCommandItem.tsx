// === Module 12652: ApplicationCommandItem ===

// Module 12652 (ApplicationCommandItem)
import nativeDefault from "native" /* 576 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 12482 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AUTOCOMPLETE_ROW_HEIGHT = fn(10520).AUTOCOMPLETE_ROW_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { applicationCommandItem: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) }, highlightedApplicationCommandItem: null, applicationCommandIcon: null, applicationCommandDescriptionWrapper: null, applicationCommandSectionName: null };
  const obj2 = { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj.highlightedApplicationCommandItem = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
  const size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, marginRight: 16 };
  obj.applicationCommandIcon = size;
  obj.applicationCommandDescriptionWrapper = { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" };
  obj.applicationCommandSectionName = { paddingLeft: 16, marginLeft: "auto" };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

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
  const tmp3 = closure_9(section(stateFromStores[7]).useFontScale());
  const obj = section(stateFromStores[7]);
  const items = [GuildMemberStore];
  stateFromStores = section(stateFromStores[8]).useStateFromStores(items, () => {
    if (null != importDefault) {
      let botId;
      if (section != null) {
        botId = section.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = noop.useMemo(() => application_commands_ApplicationCommandUtils.getApplicationCommandsIconSource(section, stateFromStores), items1);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  const obj3 = { accessibilityLabel: null, style: null, accessibilityRole: "button", onPress: null, children: null };
  const intl = section(tmp2[11]).intl;
  obj3.accessibilityLabel = intl.formatToPlainString(section(stateFromStores[11]).t.eo8b3e, { applicationName: name, commandDescription: command.displayDescription, commandName: command.displayName });
  const merged = Object.assign(tmp3.applicationCommandItem);
  const merged1 = Object.assign(flag ? tmp3.highlightedApplicationCommandItem : {});
  obj3.style = {};
  obj3.onPress = highlighted.onPress;
  if (showIcon) {
    showIcon = null != memo;
  }
  if (showIcon) {
    const obj6 = { style: tmp3.applicationCommandIcon, source: memo };
    showIcon = closure_7(require("FastImage"), obj6);
  }
  const items2 = [showIcon, , ];
  const obj7 = { style: tmp3.applicationCommandDescriptionWrapper, children: null };
  const items3 = [closure_7(section(stateFromStores[13]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` }), closure_7(section(stateFromStores[13]).Text, { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: command.displayDescription })];
  obj7.children = items3;
  items2[1] = closure_8(View, obj7);
  items2[2] = closure_7(section(stateFromStores[13]).Text, { style: tmp3.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name });
  obj3.children = items2;
  return closure_8(section(stateFromStores[10]).PressableOpacity, obj3);
};