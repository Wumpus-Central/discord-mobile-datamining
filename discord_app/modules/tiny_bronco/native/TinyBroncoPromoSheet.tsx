// === Module 14807: TinyBroncoPromoSheet ===

// Module 14807 (TinyBroncoPromoSheet)
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import _modDef3149 from "module_3149" /* 3149 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet" /* 14806 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const TINY_BRONCO_BLOG_URL = fn(5933).TINY_BRONCO_BLOG_URL;
const Constants = fn(1085);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { illustration: null, actions: null };
let size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
obj2.illustration = size;
obj2.actions = { paddingVertical: 0 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TinyBroncoPromoSheet(markAsDismissed) {
  const cResult = dismissOnce(576).c(36);
  closure_11();
  let obj = dismissOnce(576);
  const tmp = dismissOnce;
  const isVerifiedTeen = dismissOnce(5905).useIsVerifiedTeen();
  let obj2 = dismissOnce(5905);
  dismissOnce = dismissOnce(14808).useDismissOnce(markAsDismissed.markAsDismissed);
  if (cResult[0] !== dismissOnce) {
    const fn = function s() {
      dismissOnce(ContentDismissActionType.USER_DISMISS);
    };
    cResult[0] = dismissOnce;
    cResult[1] = fn;
  }
  if (cResult[2] !== dismissOnce) {
    const fn2 = function h() {
      dismissOnce(ContentDismissActionType.USER_DISMISS);
      ActionSheetActionCreatorsDefault.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
    };
    cResult[2] = dismissOnce;
    cResult[3] = fn2;
  }
  if (cResult[4] !== dismissOnce) {
    class I {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj1 = { entryPoint: closure_0(closure_2[15]).AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        result = obj2.showAgeVerificationGetStartedModal(obj1);
        return;
      }
    }
    cResult[4] = dismissOnce;
    cResult[5] = I;
  } else {
    class I {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj1 = { entryPoint: closure_0(closure_2[15]).AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        result = obj2.showAgeVerificationGetStartedModal(obj1);
        return;
      }
    }
  }
  if (cResult[6] !== dismissOnce) {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
    cResult[6] = dismissOnce;
    cResult[7] = B;
  } else {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
    cResult[8] = tmp12;
  } else {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
  }
  if (cResult[9] !== dismissOnce) {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
    cResult[9] = dismissOnce;
    cResult[10] = tmp14;
  } else {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
  }
  if (cResult[11] === B) {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
  }
  const obj4 = { text: null, onPress: null };
  const intl = tmp(1126).intl;
  const obj3 = dismissOnce(14808);
  if (isVerifiedTeen) {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
    obj4.text = tmp15;
    obj4.onPress = B;
    let tmp16 = obj4;
  } else {
    class B {
      constructor() {
        tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
        obj2 = closure_1(closure_2[14]);
        obj3 = closure_1(closure_2[16]);
        openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
        return;
      }
    }
    obj4.onPress = tmp14;
    tmp16 = obj4;
  }
  cResult[11] = B;
  cResult[12] = tmp14;
  cResult[13] = isVerifiedTeen;
  cResult[14] = tmp16;
  tmp15 = _modDef3149;
}) : (function TinyBroncoPromoSheet(markAsDismissed) {
  let dismissOnce;
  const tmp = closure_11();
  const isVerifiedTeen = dismissOnce(5905).useIsVerifiedTeen();
  let obj = dismissOnce(5905);
  dismissOnce = dismissOnce(14808).useDismissOnce(markAsDismissed.markAsDismissed);
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
    const result = obj2.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER });
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
  const intl = dismissOnce(1126).intl;
  const string = intl.string;
  const tmp13 = _modDef3149;
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
  let obj2 = dismissOnce(14808);
  obj4.illustration = closure_9(Image, { source: tmp14(14809), style: tmp.illustration, resizeMode: "contain" });
  const intl2 = tmp2(1126).intl;
  obj4.title = intl2.string(tmp14(3149).GdTVPF);
  const intl3 = tmp2(1126).intl;
  const format = intl3.format;
  const tmp14Result = tmp14(3149);
  if (isVerifiedTeen) {
    const obj6 = { handleOnConfirmAgeHook: callback2 };
    let formatResult = format(tmp14Result["Ga2z/E"], obj6);
  } else {
    const obj7 = { handleOnBlogHook: callback4 };
    formatResult = format(tmp14Result.xuvWqy, obj7);
  }
  obj4.description = formatResult;
  obj4.onDismiss = callback;
  const obj8 = { size: "lg", style: tmp.actions, children: null };
  const items5 = [closure_9(dismissOnce(5375).Button, { size: "lg", text: tmp15.text, onPress: tmp15.onPress }), ];
  const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1126).intl;
  obj10.text = intl4.string(dismissOnce(1126).t["NX+WJN"]);
  obj10.onPress = callback1;
  items5[1] = closure_9(dismissOnce(5375).Button, obj10);
  obj8.children = items5;
  obj4.actions = closure_10(dismissOnce(5963).ButtonGroup, obj8);
  return closure_9(dismissOnce(10303).PromoSheet, obj4);
});