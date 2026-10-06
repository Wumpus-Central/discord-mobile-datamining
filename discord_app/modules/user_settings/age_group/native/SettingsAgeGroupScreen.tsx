// === Module 14551: SettingsAgeGroupScreen ===

// Module 14551 (SettingsAgeGroupScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3073 from "module_3073" /* 3073 */;
import Text_Text from "Text/Text" /* 4892 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8117 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14511 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import TinyBroncoAgeGroupHeader2 from "TinyBroncoAgeGroupHeader" /* 14552 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { headerContainer: obj2 };
obj2 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let items;
  let obj4;
  let tmp10;
  let tmp14;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3073.PY4MA0) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    const tmp9 = metroImportDefault(Text, obj2);
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(_modDef3073["1DN29p"], obj4) };
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    obj4 = { handleOnHelpUrlHook: first };
    const tmp13 = metroImportDefault(Text2, obj3);
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.headerContainer) {
    const obj5 = { style: tmp4.headerContainer, children: items };
    items = [tmp6, tmp10];
    const tmp17 = metroImportAll(View, obj5);
    cResult[3] = tmp4.headerContainer;
    cResult[4] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  return tmp14;
}) : (() => {
  let intl;
  let intl2;
  let items;
  const tmp = closure_9();
  let obj = { style: tmp.headerContainer, children: items };
  const callback = react.useCallback(() => {
    const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
    AgeVerificationActionCreatorsDefault;
    const obj = HelpdeskUtilsDefault;
    openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, []);
  const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(_modDef3073.PY4MA0) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(_modDef3073["1DN29p"], { handleOnHelpUrlHook: callback }) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = metroImportDefault(Text2, obj3);
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TinyBroncoAgeGroupHeader;
  let intl;
  let items;
  let items1;
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = TinyBroncoSettingsPredicate;
  const isTinyBroncoSettingsEnabled = obj2.useIsTinyBroncoSettingsEnabled();
  if (cResult[0] !== isTinyBroncoSettingsEnabled) {
    const obj3 = { sections: items1, ListHeaderComponent: TinyBroncoAgeGroupHeader };
    const obj4 = { label: intl.string(_modDef3073["5Mi5TE"]), settings: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl3.intl;
    items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    items1 = [obj4];
    if (isTinyBroncoSettingsEnabled) {
      TinyBroncoAgeGroupHeader = TinyBroncoAgeGroupHeader2.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = closure_10;
    }
    const list = createList(obj3);
    cResult[0] = isTinyBroncoSettingsEnabled;
    cResult[1] = list;
    tmp5 = list;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj5 = { node: tmp5 };
    const tmp13 = metroImportDefault(SettingLayoutDefault, obj5);
    cResult[2] = tmp5;
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  return tmp10;
}) : (() => {
  let isTinyBroncoSettingsEnabled;
  let obj = isTinyBroncoSettingsEnabled(14511);
  isTinyBroncoSettingsEnabled = obj.useIsTinyBroncoSettingsEnabled();
  let items = [isTinyBroncoSettingsEnabled];
  const node = react.useMemo(() => {
    let TinyBroncoAgeGroupHeader;
    let intl;
    let items;
    let items1;
    const obj = { sections: items1, ListHeaderComponent: TinyBroncoAgeGroupHeader };
    const obj2 = { label: intl.string(_modDef3073["5Mi5TE"]), settings: items };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl3.intl;
    items = [, , ];
    ({ AGE_GROUP_CONFIRM: arr[0], AGE_GROUP_RESET: arr[1], AGE_GROUP_CONFIRM_ACCOUNT_STATUS: arr[2] } = MobileUserSettings);
    items1 = [obj2];
    if (isTinyBroncoSettingsEnabled) {
      TinyBroncoAgeGroupHeader = TinyBroncoAgeGroupHeader2.TinyBroncoAgeGroupHeader;
    } else {
      TinyBroncoAgeGroupHeader = closure_10;
    }
    return createList(obj);
  }, items);
  return closure_7(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupScreen.tsx");

export default tmp3;