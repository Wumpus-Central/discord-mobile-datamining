// discord_app/modules/application_commands/native/ApplicationCommandItem.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import { AUTOCOMPLETE_ROW_HEIGHT } from "ApplicationCommandsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
  obj[1] = obj;
  obj[2] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.lg, marginRight: 16 };
  obj[3] = { flexDirection: "column", flexShrink: 1, alignSelf: "flex-end" };
  obj[4] = { paddingLeft: 16, marginLeft: "auto" };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/application_commands/native/ApplicationCommandItem.tsx");

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
        botId = section.botId;
      }
      if (null != botId) {
        return closure_1_5.getMember(tmp, section.botId);
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
  const intl = section(tmp2[11]).intl;
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
  items2[1] = callback(View, obj3);
  items2[2] = callback(section(stateFromStores[13]).Text, { style: tmp3.applicationCommandSectionName, variant: "eyebrow", color: "text-muted", children: name });
  obj[4] = items2;
  return callback(section(stateFromStores[10]).PressableOpacity, obj);
};