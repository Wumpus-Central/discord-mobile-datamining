// === Module 14817: SettingsAgeGroupScreen ===

// Module 14817 (SettingsAgeGroupScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import _modDef2947 from "module_2947" /* 2947 */;
import Text_Text from "Text/Text" /* 4635 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8532 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import SettingLayoutDefault from "SettingLayout" /* 14786 */;
import TinyBroncoAgeGroupHeader2 from "TinyBroncoAgeGroupHeader" /* 14818 */;
import noop from "module_19" /* 19 */;

require = fn;
function SettingsAgeGroupHeader() {
  let obj = { style: closure_9().headerContainer, children: null };
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2947.PY4MA0);
  const items = [React5(Text_Text.Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef2947["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const MobileUserSettings = fn(8082).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { headerContainer: { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  isTinyBroncoSettingsEnabled = isTinyBroncoSettingsEnabled(14779).useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj3 = { label: null, settings: null };
    const intl = util.intl;
    obj3.label = intl.string(_modDef2947["5Mi5TE"]);
    const items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = TinyBroncoAgeGroupHeader2.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = SettingsAgeGroupHeader;
    }
    obj2.ListHeaderComponent = TinyBroncoAgeGroupHeader;
    return SettingBuilders.createList(obj2);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
};