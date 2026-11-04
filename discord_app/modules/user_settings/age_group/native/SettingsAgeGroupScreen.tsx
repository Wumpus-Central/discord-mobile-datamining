// === Module 16860: SettingsAgeGroupScreen ===

// Module 16860 (SettingsAgeGroupScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import _modDef3223 from "module_3223" /* 3223 */;
import Text_Text from "Text/Text" /* 5761 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8095 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import SettingLayoutDefault from "SettingLayout" /* 16823 */;
import AgeNoticeAgeGroupHeader from "AgeNoticeAgeGroupHeader" /* 16861 */;
import noop from "module_19" /* 19 */;

require = fn;
function SettingsAgeGroupHeader() {
  let obj = { style: closure_9().headerContainer, children: null };
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.AGE_VERIFICATION_LEARN_MORE));
  }, []);
  const obj2 = { variant: "body-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3223.PY4MA0);
  items = [metroImportDefault(Text_Text.Text, obj2), ];
  const obj3 = { variant: "body-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3223["1DN29p"], { handleOnHelpUrlHook: callback });
  items[1] = metroImportDefault(Text_Text.Text, obj3);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const MobileUserSettings = fn(8573).MobileUserSettings;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { headerContainer: { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default function SettingsAgeGroupScreen() {
  isTinyBroncoSettingsEnabled = isTinyBroncoSettingsEnabled(16819).useIsTinyBroncoSettingsEnabled();
  items = [isTinyBroncoSettingsEnabled];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj3 = { label: null, settings: null };
    const intl = util.intl;
    obj3.label = intl.string(_modDef3223["5Mi5TE"]);
    items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    if (isTinyBroncoSettingsEnabled) {
      let TinyBroncoAgeGroupHeader = AgeNoticeAgeGroupHeader.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = SettingsAgeGroupHeader;
    }
    obj2.ListHeaderComponent = TinyBroncoAgeGroupHeader;
    return SettingBuilders.createList(obj2);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
};