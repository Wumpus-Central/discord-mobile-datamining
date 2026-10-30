// discord_app/modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3125 from "../TinyBronco.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const TINY_BRONCO_BLOG_URL = fn(6731).TINY_BRONCO_BLOG_URL;
const Constants = fn(1072);
({ HelpdeskArticles: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { illustration: null, actions: null };
let size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
obj2.illustration = size;
obj2.actions = { paddingVertical: 0 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default function TinyBroncoPromoSheet(markAsDismissed) {
  let dismissOnce;
  const tmp = closure_10();
  const isVerifiedTeen = dismissOnce(6720).useIsVerifiedTeen();
  let obj = dismissOnce(6720);
  dismissOnce = dismissOnce(16566).useDismissOnce(markAsDismissed.markAsDismissed);
  const items = [dismissOnce];
  const items1 = [dismissOnce];
  const callback = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items2 = [dismissOnce];
  const callback1 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.USER_DISMISS);
    ActionSheetActionCreatorsDefault.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
  }, items1);
  const items3 = [dismissOnce];
  const callback2 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    ActionSheetActionCreatorsDefault.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    const obj2 = AgeVerificationActionCreatorsDefault;
    const result = obj2.showAgeVerificationGetStartedModal({
      entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER,
    });
  }, items2);
  const callback3 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    ActionSheetActionCreatorsDefault.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    const obj2 = AgeVerificationActionCreatorsDefault;
    obj2.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, items3);
  const items4 = [dismissOnce];
  const callback4 = noop.useCallback(() => {
    AgeVerificationActionCreatorsDefault.openUrl(TINY_BRONCO_BLOG_URL);
  }, []);
  const obj3 = { text: null, onPress: null };
  const callback5 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    ActionSheetActionCreatorsDefault.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    openUserSettings.openUserSettings({ screen: constants2.AGE_GROUP });
  }, items4);
  const intl = dismissOnce(1114).intl;
  const string = intl.string;
  const tmp13 = _modDef3125;
  if (isVerifiedTeen) {
    obj3.text = string(tmp13["+7NlgO"]);
    obj3.onPress = callback3;
    let tmp14 = importDefault;
    let tmp15 = obj3;
  } else {
    obj3.text = string(tmp13.jjpcno);
    obj3.onPress = callback5;
    tmp14 = importDefault;
    tmp15 = obj3;
  }
  const obj4 = { illustration: null, title: null, description: null, onDismiss: null, actions: null };
  const obj5 = { source: null, style: null, resizeMode: "contain" };
  let obj2 = dismissOnce(16566);
  obj5.source = tmp14(16567);
  obj5.style = tmp.illustration;
  obj4.illustration = closure_8(tmp14(5712), obj5);
  const intl2 = tmp2(1114).intl;
  obj4.title = intl2.string(tmp14(3125).GdTVPF);
  const intl3 = tmp2(1114).intl;
  const format = intl3.format;
  const tmp14Result2 = tmp14(3125);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    let formatResult = format(tmp14Result2["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result2.xuvWqy, obj7);
  }
  obj4.description = formatResult;
  obj4.onDismiss = callback;
  const obj8 = { size: "lg", style: tmp.actions, children: null };
  const items5 = [closure_8(dismissOnce(5629).Button, { size: "lg", text: tmp15.text, onPress: tmp15.onPress })];
  const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj10.text = intl4.string(dismissOnce(1114).t["NX+WJN"]);
  obj10.onPress = callback1;
  items5[1] = closure_8(dismissOnce(5629).Button, obj10);
  obj8.children = items5;
  obj4.actions = closure_9(dismissOnce(6761).ButtonGroup, obj8);
  return closure_8(dismissOnce(10817).PromoSheet, obj4);
}
