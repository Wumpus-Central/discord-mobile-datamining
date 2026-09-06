// === Module 14720: SettingsAgeGroupScreen ===

// Module 14720 (SettingsAgeGroupScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef2946 from "module_2946" /* 2946 */;
import Text_Text from "Text/Text" /* 4556 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import TinyBroncoAgeGroupHeader2 from "TinyBroncoAgeGroupHeader" /* 14721 */;
import noop from "module_19" /* 19 */;

require = fn;
function SettingsAgeGroupHeader() {
  let obj = { style: closure_9().headerContainer, children: null };
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef2946.PY4MA0);
  const items = [React5(Text_Text.Text, obj), ];
  obj = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj.children = intl2.format(_modDef2946["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = React5(Text_Text.Text, obj);
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const MobileUserSettings = fn(7975).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { headerContainer: null };
createStyles = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
createStyles.headerContainer = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  isTinyBroncoSettingsEnabled = isTinyBroncoSettingsEnabled(14682).useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = noop.useMemo(() => {
    let obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef2946["5Mi5TE"]);
    const items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    obj.settings = items;
    const items1 = [obj];
    obj.sections = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = TinyBroncoAgeGroupHeader2.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = SettingsAgeGroupHeader;
    }
    obj.ListHeaderComponent = TinyBroncoAgeGroupHeader;
    return obj.createList(obj);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
};