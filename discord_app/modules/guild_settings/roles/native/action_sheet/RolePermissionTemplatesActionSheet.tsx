// === Module 16854: RolePermissionTemplatesActionSheet ===

// Module 16854 (RolePermissionTemplatesActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4093 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import obj132Default from "obj132" /* 4827 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 16834 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
const createCacheKey = { paddingVertical: 16, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  const effect = React.useEffect(() => {
    callback(table[6]);
    const obj = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  let obj = { title: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.KgCkoQ);
  const tmp = callback();
  { header: jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null };
  obj = { style: tmp.templateContainer, children: jsx(GuildSettingsRoleTemplateDefault, obj1) };
  obj[2] = <View style={tmp.templateContainer}>{jsx(GuildSettingsRoleTemplateDefault, obj1)}</View>;
  return jsx(ActionSheet.ActionSheet, { style: tmp.templateContainer, children: jsx(GuildSettingsRoleTemplateDefault, obj1) });
};