// discord_app/modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { ActionSheet } from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { width } from "../GuildSettingsRoleTemplate.tsx";

let c5;
let closure_6;
const require = arg1;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
createCacheKey = { templateContainer: null };
createCacheKey = { paddingVertical: 16, flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("ME").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  let importDefault;
  let require;
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  const effect = React.useEffect(() => {
    let obj = callback(table[6]);
    obj = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  let obj = { title: null };
  let intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.KgCkoQ);
  const tmp = createCacheKey();
  obj = { header: jsx(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null };
  obj = { style: tmp.templateContainer, children: null };
  obj[1] = jsx(width, {
    onSelect(arg0) {
      let closure_0 = arg0;
      if (closure_0) {
        let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false };
        const intl = outer1_0(outer1_2[10]).intl;
        obj[0] = intl.string(outer1_0(outer1_2[10]).t.MVdkgB);
        const intl2 = outer1_0(outer1_2[10]).intl;
        obj[1] = intl2.string(outer1_0(outer1_2[10]).t.LpogjK);
        const intl3 = outer1_0(outer1_2[10]).intl;
        obj[2] = intl3.string(outer1_0(outer1_2[10]).t["ETE/oC"]);
        const intl4 = outer1_0(outer1_2[10]).intl;
        obj[3] = intl4.string(outer1_0(outer1_2[10]).t.p89ACt);
        obj[4] = function onConfirm() {
          outer1_1(callback);
          outer1_1(outer1_2[7]).hideActionSheet();
          const obj = outer1_1(outer1_2[7]);
          const result = callback(outer1_2[8]).roleTemplateAppliedToast();
        };
        obj[5] = function onCancel() {
          callback2(table[7]).hideActionSheet();
        };
        outer1_1(outer1_2[13]).show(obj);
        const obj3 = outer1_1(outer1_2[13]);
      } else {
        callback(arg0);
        obj = outer1_1(outer1_2[7]);
        obj.hideActionSheet();
        let result = outer1_0(outer1_2[8]).roleTemplateAppliedToast();
        const obj2 = outer1_0(outer1_2[8]);
      }
    },
    location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
    guildId: guildId.guildId
  });
  obj[2] = <View style={tmp.templateContainer}>{null}</View>;
  return jsx(ActionSheet /* ActionSheet */.ActionSheet, { style: tmp.templateContainer, children: null });
};