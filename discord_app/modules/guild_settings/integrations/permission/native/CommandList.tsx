// discord_app/modules/guild_settings/integrations/permission/native/CommandList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildSettingsModalIntegrationEmptyCardDefault from "../../native/GuildSettingsModalIntegrationEmptyCard.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5043);
let closure_5 = createStyles.createStyles({ title: { marginBottom: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/CommandList.tsx");

export default function CommandList(onPressCommand) {
  onPressCommand = onPressCommand.onPressCommand;
  let TableRowGroup = onPressCommand;
  let obj = dependencyMap;
  const tmp = closure_5();
  const integrationPermissionCommandSearch = onPressCommand(20089).useIntegrationPermissionCommandSearch();
  ({ results, isLoaded } = integrationPermissionCommandSearch);
  if (isLoaded) {
    if (0 !== tmp4) {
      const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
      const obj4 = { title: null, style: null };
      const intl2 = TableRowGroup(1112).intl;
      obj4.title = intl2.string(TableRowGroup(1112).t["0hKkS+"]);
      obj4.style = tmp.title;
      items = [closure_3(TableRowGroup(6140).TableRowGroupTitle, obj4), ,];
      const obj5 = { size: "md", accessibilityLabel: null, onChange: null };
      const intl3 = TableRowGroup(1112).intl;
      obj5.accessibilityLabel = intl3.string(TableRowGroup(1112).t["5h0QOP"]);
      obj5.onChange = tmp3;
      items[1] = closure_3(TableRowGroup(7406).SearchBar, obj5);
      if (results.length > 0) {
        TableRowGroup = TableRowGroup(6140).TableRowGroup;
        obj = {
          hasIcons: true,
          children: results.map((type) => {
            closure_0 = type;
            if (type.type === onPressCommand(2118).ApplicationCommandType.CHAT) {
              let PaperIcon = onPressCommand(12151).SlashBoxIcon;
            } else {
              PaperIcon = onPressCommand(9045).PaperIcon;
            }
            const obj = {
              icon: closure_1_3(onPressCommand(6144).TableRow.Icon, { IconComponent: PaperIcon }),
              label: onPressCommand(8185).commandName(type.type, type.displayName),
              trailing: null,
              arrow: true,
              onPress: null,
            };
            let permissions = type.permissions;
            if (permissions == null) {
              permissions = {};
            }
            let tmpResult;
            if (Object.keys(permissions).length > 0) {
              const obj2 = { text: null };
              const intl = onPressCommand(1112).intl;
              obj2.text = intl.string(onPressCommand(1112).t.jH4B9O);
              tmpResult = closure_1_3(onPressCommand(6158).TableRowTrailingText, obj2);
            }
            obj.trailing = tmpResult;
            obj.onPress = function onPress() {
              return onPressCommand(closure_0);
            };
            return closure_1_3(onPressCommand(6144).TableRow, obj, type.id);
          }),
        };
        let tmp10Result = closure_3(TableRowGroup, obj);
      } else {
        const obj6 = { text: null };
        const intl4 = TableRowGroup(1112).intl;
        obj6.text = intl4.string(TableRowGroup(1112).t["Xe+fJM"]);
        tmp10Result = closure_3(GuildSettingsModalIntegrationEmptyCardDefault, obj6);
        const tmp9Result = GuildSettingsModalIntegrationEmptyCardDefault;
      }
      items[2] = tmp10Result;
      obj3.children = items;
      closure_4(TableRowGroup(6115).Stack, obj3);
    }
  }
  let obj2 = onPressCommand(20089);
  let intl = TableRowGroup(1112).intl;
  const string = intl.string;
  const t = TableRowGroup(1112).t;
  if (isLoaded) {
    let text = string(t["x78c+J"]);
  } else {
    text = string(t.NyYbcx);
  }
  return closure_3(GuildSettingsModalIntegrationEmptyCardDefault, { text });
}
