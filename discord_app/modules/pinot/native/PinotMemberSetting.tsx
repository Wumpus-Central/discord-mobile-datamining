// === Module 17887: PinotMemberSetting ===

// Module 17887 (PinotMemberSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef3160 from "module_3160" /* 3160 */;
import Text_Text from "Text/Text" /* 5624 */;
import InlineNotice from "InlineNotice" /* 8025 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import PinotExperiment from "PinotExperiment" /* 9055 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 11327 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

function PinotMemberSettingFooter() {
  const tmp = closure_9();
  const obj = PinotMemberSettingState;
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.DISCOVERABLE_CONTENT_ON_THE_WEB);
  const obj3 = { style: tmp.footer, children: null };
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.format(_modDef3160.V0EPTo, { learnMoreURL: articleURL });
  const items = [timestampProducer(Text_Text.Text, obj4), ];
  let tmp8Result = null;
  if (obj.usePinotMemberSettingState().locked) {
    const obj5 = { type: "info", message: null, role: "none" };
    const intl2 = util.intl;
    const obj6 = { learnMoreURL: articleURL };
    obj5.message = intl2.format(_modDef3160.Z9bKIJ, obj6);
    tmp8Result = timestampProducer(InlineNotice.InlineNotice, obj5);
  }
  items[1] = tmp8Result;
  obj3.children = items;
  return React5(View, obj3);
}
const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const mobile_user_settings_data_and_privacy = "mobile_user_settings_data_and_privacy";
let obj = { footer: { gap: nativeDefault.space.PX_12 } };
let closure_9 = createStyles.createStyles(obj);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3160.M33rl6);
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
    const items = [MobileUserSettings.PINOT_MEMBER_SETTING];
    obj2.settings = items;
    obj2.subLabel = timestampProducer(PinotMemberSettingFooter, {});
    const items1 = [obj2];
    let items2 = items1;
  } else {
    items2 = [];
  }
  return items2;
}