// === Module 20087: GuildSettingsModalIntegrationPermissionList ===

// Module 20087 (GuildSettingsModalIntegrationPermissionList)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import TableRowGroup from "TableRowGroup" /* 6140 */;
import getGuildPermissionNameDefault from "getGuildPermissionName" /* 18800 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18809 */;
import noop from "module_19" /* 19 */;

require = fn;
class PermissionItems {
  constructor(arg0) {
    guild = global.guild;
    ({ permissions, granted } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    XSmallIcon = undefined;
    ICON_FEEDBACK_CRITICAL = undefined;
    closure_1 = closure_6();
    items = [];
    items[0] = guild;
    closure_2 = XSmallIcon.useMemo(() => PermissionSpecUtilsDefault.getGuildPermissionSpecMap(guild), items);
    tmp = guild;
    tmp2 = closure_2;
    if (granted) {
      XSmallIcon = tmp(tmp2[4]).CheckmarkLargeIcon;
      tmp3 = tmp2;
      tmp4 = tmp;
    } else {
      XSmallIcon = tmp(tmp2[5]).XSmallIcon;
      tmp3 = tmp2;
      tmp4 = tmp;
    }
    tmp5 = closure_1;
    colors = closure_1(tmp3[6]).colors;
    if (granted) {
      ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
      tmp6 = tmp5;
    } else {
      ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
      tmp6 = tmp5;
    }
    obj = {
      spacing: tmp6(tmp3[6]).space.PX_12,
      children: permissions.map((item) => {
            const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: null };
            items = [React4(XSmallIcon, { size: "xs", color: ICON_FEEDBACK_CRITICAL }), React4(Text_Text.Text, { variant: "body-md/normal", style: permissionName.permissionName, children: getGuildPermissionNameDefault(item, closure_2) })];
            obj.children = items;
            return hasOwnProperty(Stack_Stack.Stack, obj, item.toString());
          })
    };
    return ICON_FEEDBACK_CRITICAL(tmp4(tmp3[7]).Stack, obj);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5043);
const timestampProducer = createStyles.createStyles({ permissionName: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPermissionList.tsx");

export default function GuildSettingsModalIntegrationPermissionList(permissions) {
  permissions = permissions.permissions;
  let tmp4 = null;
  if (0 !== permissions.length) {
    const obj = { spacing: nativeDefault.space.PX_8, children: null };
    const obj2 = { title: tmp };
    items = [React4(TableRowGroup.TableRowGroupTitle, obj2), ];
    const obj3 = { guild: tmp2, permissions, granted: tmp3 };
    items[1] = React4(PermissionItems, obj3);
    obj.children = items;
    tmp4 = hasOwnProperty(Stack_Stack.Stack, obj);
  }
  return tmp4;
};
export { PermissionItems };