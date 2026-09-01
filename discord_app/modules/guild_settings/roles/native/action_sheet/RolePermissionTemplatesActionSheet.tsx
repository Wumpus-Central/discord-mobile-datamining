// discord_app/modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import GuildSettingsRoleTemplateDefault from "../GuildSettingsRoleTemplate.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
createCacheKey = { templateContainer: null };
createCacheKey = { paddingVertical: 16, flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting(
  "modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx",
);

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
  obj = {
    header: jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title: null }),
    startExpanded: true,
    children: null,
  };
  obj = { style: tmp.templateContainer, children: jsx(GuildSettingsRoleTemplateDefault, obj1) };
  obj[2] = <View style={tmp.templateContainer}>{jsx(GuildSettingsRoleTemplateDefault, obj1)}</View>;
  return jsx(ActionSheet.ActionSheet, {
    style: tmp.templateContainer,
    children: jsx(GuildSettingsRoleTemplateDefault, obj1),
  });
}
