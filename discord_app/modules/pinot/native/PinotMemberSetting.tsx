// === Module 17772: PinotMemberSetting ===

// Module 17772 (PinotMemberSetting)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import util from "util" /* 1125 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import _modDef3156 from "module_3156" /* 3156 */;
import Text_Text from "Text/Text" /* 5271 */;
import InlineNotice from "InlineNotice" /* 8011 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import PinotExperiment from "PinotExperiment" /* 11070 */;
import PinotMemberSettingState from "PinotMemberSettingState" /* 17773 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
    return intl.string(_modDef3156.M33rl6);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function PinotMemberSettingFooter() {
  const cResult = c.c(3);
  const tmp4 = closure_9();
  const locked = PinotMemberSettingState.usePinotMemberSettingState().locked;
  if (cResult[0] === locked) {
    if (cResult[1] === tmp4.footer) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES);
  const obj4 = { style: tmp4.footer, children: null };
  const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj5.children = intl.format(_modDef3156.V0EPTo, { learnMoreURL: articleURL });
  const items = [timestampProducer(Text_Text.Text, obj5), ];
  let tmp10Result = null;
  if (locked) {
    const obj6 = { type: "info", message: null, role: "none" };
    const intl2 = util.intl;
    const obj7 = { learnMoreURL: articleURL };
    obj6.message = intl2.format(_modDef3156.Z9bKIJ, obj7);
    tmp10Result = timestampProducer(InlineNotice.InlineNotice, obj6);
  }
  items[1] = tmp10Result;
  obj4.children = items;
  const tmp8Result = React5(View, obj4);
  cResult[0] = locked;
  cResult[1] = tmp4.footer;
  cResult[2] = tmp8Result;
  tmp5 = tmp8Result;
}) : (function PinotMemberSettingFooter() {
  const tmp = closure_9();
  const obj = PinotMemberSettingState;
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES);
  const obj3 = { style: tmp.footer, children: null };
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.format(_modDef3156.V0EPTo, { learnMoreURL: articleURL });
  const items = [timestampProducer(Text_Text.Text, obj4), ];
  let tmp8Result = null;
  if (obj.usePinotMemberSettingState().locked) {
    const obj5 = { type: "info", message: null, role: "none" };
    const intl2 = util.intl;
    const obj6 = { learnMoreURL: articleURL };
    obj5.message = intl2.format(_modDef3156.Z9bKIJ, obj6);
    tmp8Result = timestampProducer(InlineNotice.InlineNotice, obj5);
  }
  items[1] = tmp8Result;
  obj3.children = items;
  return React5(View, obj3);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj2 = { gap: nativeDefault.space.PX_12 };
let obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3156.M33rl6);
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
};
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberSetting.tsx");

export const PinotMemberSetting = toggle;
export const usePinotDataPrivacySections = ReactCompilerGating.isReactCompilerEnabled() ? (function usePinotDataPrivacySections() {
  const cResult = c.c(2);
  if (obj2.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy)) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { settings: null, subLabel: null };
      const items = [MobileUserSettings.PINOT_MEMBER_SETTING];
      obj3.settings = items;
      obj3.subLabel = timestampProducer(closure_10, {});
      const items1 = [obj3];
      cResult[1] = items1;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [];
      cResult[0] = items2;
      let first = items2;
    } else {
      first = cResult[0];
    }
    return first;
  }
  obj2 = PinotExperiment;
}) : (function usePinotDataPrivacySections() {
  if (obj.useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy)) {
    const obj2 = { settings: null, subLabel: null };
    const items = [MobileUserSettings.PINOT_MEMBER_SETTING];
    obj2.settings = items;
    obj2.subLabel = timestampProducer(closure_10, {});
    const items1 = [obj2];
    let items2 = items1;
  } else {
    items2 = [];
  }
  return items2;
});