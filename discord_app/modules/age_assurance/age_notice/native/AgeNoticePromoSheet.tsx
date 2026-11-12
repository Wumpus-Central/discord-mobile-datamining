// === Module 17122: AgeNoticePromoSheet ===

// Module 17122 (AgeNoticePromoSheet)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import _modDef3305 from "module_3305" /* 3305 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6770 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import openAgeNoticePromoSheet from "openAgeNoticePromoSheet" /* 17121 */;
import noop from "module_19" /* 19 */;

require = fn;
const AGE_NOTICE_BLOG_URL = fn(6778).AGE_NOTICE_BLOG_URL;
const Constants = fn(1072);
({ HelpdeskArticles: hasOwnProperty, UserSettingsSections: closure_6 } = Constants);
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { illustration: null, actions: null };
let size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
obj2.illustration = size;
obj2.actions = { paddingVertical: 0 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticePromoSheet.tsx");

export default function AgeNoticePromoSheet(markAsDismissed) {
  let dismissOnce;
  const tmp = closure_10();
  const isVerifiedTeen = dismissOnce(6767).useIsVerifiedTeen();
  let obj = dismissOnce(6767);
  dismissOnce = dismissOnce(17123).useDismissOnce(markAsDismissed.markAsDismissed);
  items = [dismissOnce];
  const items1 = [dismissOnce];
  const callback = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items2 = [dismissOnce];
  const callback1 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.USER_DISMISS);
    ActionSheetActionCreatorsDefault.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
  }, items1);
  const items3 = [dismissOnce];
  const callback2 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    ActionSheetActionCreatorsDefault.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
    const obj2 = AgeVerificationActionCreatorsDefault;
    const result = obj2.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AGE_NOTICE_POPOVER });
  }, items2);
  const callback3 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    ActionSheetActionCreatorsDefault.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
    const obj2 = AgeVerificationActionCreatorsDefault;
    obj2.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.AGE_VERIFICATION_LEARN_MORE));
  }, items3);
  const items4 = [dismissOnce];
  const callback4 = noop.useCallback(() => {
    AgeVerificationActionCreatorsDefault.openUrl(AGE_NOTICE_BLOG_URL);
  }, []);
  const obj3 = { text: null, onPress: null };
  const callback5 = noop.useCallback(() => {
    dismissOnce(ContentDismissActionType.TAKE_ACTION);
    ActionSheetActionCreatorsDefault.hideActionSheet(openAgeNoticePromoSheet.AGE_NOTICE_PROMO_SHEET_KEY);
    openUserSettings.openUserSettings({ screen: constants2.AGE_GROUP });
  }, items4);
  const intl = dismissOnce(1113).intl;
  const string = intl.string;
  const tmp13 = _modDef3305;
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
  let obj2 = dismissOnce(17123);
  obj5.source = tmp14(17124);
  obj5.style = tmp.illustration;
  obj4.illustration = closure_8(tmp14(5957), obj5);
  const intl2 = tmp2(1113).intl;
  obj4.title = intl2.string(tmp14(3305).GdTVPF);
  const intl3 = tmp2(1113).intl;
  const format = intl3.format;
  const tmp14Result2 = tmp14(3305);
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
  const items5 = [closure_8(dismissOnce(5873).Button, { size: "lg", text: tmp15.text, onPress: tmp15.onPress }), ];
  const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1113).intl;
  obj10.text = intl4.string(dismissOnce(1113).t["NX+WJN"]);
  obj10.onPress = callback1;
  items5[1] = closure_8(dismissOnce(5873).Button, obj10);
  obj8.children = items5;
  obj4.actions = closure_9(dismissOnce(6888).ButtonGroup, obj8);
  return closure_8(dismissOnce(10644).PromoSheet, obj4);
};