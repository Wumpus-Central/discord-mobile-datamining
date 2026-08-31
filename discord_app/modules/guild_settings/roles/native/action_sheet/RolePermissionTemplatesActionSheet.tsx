// === Module 17181: RolePermissionTemplatesActionSheet ===

// Module 17181 (RolePermissionTemplatesActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5589 */;
import ActionSheet from "ActionSheet" /* 5957 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 17161 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
createCacheKey = { templateContainer: null };
createCacheKey = { paddingVertical: 16, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  const effect = React.useEffect(() => {
    let obj = callback(table[6]);
    obj = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  let obj = { title: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.KgCkoQ);
  const tmp = callback();
  obj = { header: jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null };
  obj = { style: tmp.templateContainer, children: jsx(GuildSettingsRoleTemplateDefault, obj1) };
  obj[2] = <View style={tmp.templateContainer}>{jsx(GuildSettingsRoleTemplateDefault, obj1)}</View>;
  return jsx(ActionSheet.ActionSheet, { style: tmp.templateContainer, children: jsx(GuildSettingsRoleTemplateDefault, obj1) });
};