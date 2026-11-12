// === Module 18427: PinotMemberSetting ===

// Module 18427 (PinotMemberSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import _modDef3337 from "module_3337" /* 3337 */;
import Text_Text from "Text/Text" /* 5866 */;
import InlineNotice from "InlineNotice" /* 8094 */;
import PinotExperiment from "PinotExperiment" /* 8103 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 12241 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

function PinotMemberSettingFooter() {
  const tmp = closure_9();
  const obj = PinotMemberSettingState;
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.DISCOVERABLE_CONTENT_ON_THE_WEB);
  const obj3 = { style: tmp.footer, children: null };
  const obj4 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.format(_modDef3337.V0EPTo, { learnMoreURL: articleURL });
  items = [timestampProducer(Text_Text.Text, obj4), ];
  let tmp8Result = null;
  if (obj.usePinotMemberSettingState().locked) {
    const obj5 = { type: "info", message: null, role: "none" };
    const intl2 = util.intl;
    const obj6 = { learnMoreURL: articleURL };
    obj5.message = intl2.format(_modDef3337.Z9bKIJ, obj6);
    tmp8Result = timestampProducer(InlineNotice.InlineNotice, obj5);
  }
  items[1] = tmp8Result;
  obj3.children = items;
  return metroImportDefault(View, obj3);
}
const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const mobile_user_settings_data_and_privacy = "mobile_user_settings_data_and_privacy";
let obj = { footer: { gap: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3337.M33rl6);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return PinotExperiment.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy);
  },
  useValue() {
    return !PinotMemberSettingState.usePinotMemberSettingState().optedOut;
  },
  onValueChange(arg0) {
    const PinotMemberOptedOut = PinotMemberSettingState.PinotMemberOptedOut;
    PinotMemberOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    return PinotMemberSettingState.usePinotMemberSettingState().locked;
  }
});
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberSetting.tsx");

export const PinotMemberSetting = toggle;
export function usePinotDataPrivacySections() {
  if (obj.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy)) {
    const obj2 = { settings: null, subLabel: null };
    items = [MobileUserSettings.PINOT_MEMBER_SETTING];
    obj2.settings = items;
    obj2.subLabel = timestampProducer(PinotMemberSettingFooter, {});
    const items1 = [obj2];
    let items2 = items1;
  } else {
    items2 = [];
  }
  return items2;
}