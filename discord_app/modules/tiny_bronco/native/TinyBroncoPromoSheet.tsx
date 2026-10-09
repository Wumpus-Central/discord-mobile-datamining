// discord_app/modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3149 from "../TinyBronco.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const TINY_BRONCO_BLOG_URL = fn(5934).TINY_BRONCO_BLOG_URL;
const Constants = fn(1085);
({ HelpdeskArticles: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { illustration: null, actions: null };
let size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
obj2.illustration = size;
obj2.actions = { paddingVertical: 0 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TinyBroncoPromoSheet(markAsDismissed) {
      const cResult = dismissOnce(576).c(36);
      closure_10();
      let obj = dismissOnce(576);
      const tmp = dismissOnce;
      const isVerifiedTeen = dismissOnce(5906).useIsVerifiedTeen();
      let obj2 = dismissOnce(5906);
      dismissOnce = dismissOnce(14916).useDismissOnce(markAsDismissed.markAsDismissed);
      if (cResult[0] !== dismissOnce) {
        const fn = function o() {
          dismissOnce(ContentDismissActionType.USER_DISMISS);
        };
        cResult[0] = dismissOnce;
        cResult[1] = fn;
      }
      if (cResult[2] !== dismissOnce) {
        class R {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            return;
          }
        }
        cResult[2] = dismissOnce;
        cResult[3] = R;
      } else {
        class R {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            return;
          }
        }
      }
      if (cResult[4] !== dismissOnce) {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_1(closure_2[13]);
            obj1 = { entryPoint: closure_0(closure_2[14]).AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
            result = obj2.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
        cResult[4] = dismissOnce;
        cResult[5] = N;
      } else {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_1(closure_2[13]);
            obj1 = { entryPoint: closure_0(closure_2[14]).AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
            result = obj2.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
      }
      if (cResult[6] !== dismissOnce) {
        class C {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_1(closure_2[13]);
            obj3 = closure_1(closure_2[15]);
            openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
            return;
          }
        }
        cResult[6] = dismissOnce;
        cResult[7] = C;
      } else {
        class C {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_1(closure_2[13]);
            obj3 = closure_1(closure_2[15]);
            openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
            return;
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_1(closure_2[13]);
            obj3 = closure_1(closure_2[15]);
            openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
            return;
          }
        }
        cResult[8] = tmp12;
      } else {
        class C {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_1(closure_2[13]);
            obj3 = closure_1(closure_2[15]);
            openUrlResult = obj2.openUrl(obj3.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
            return;
          }
        }
      }
      if (cResult[9] !== dismissOnce) {
        class M {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_0(closure_2[16]);
            obj1 = { screen: UserSettingsSections.AGE_GROUP };
            openUserSettingsResult = obj2.openUserSettings(obj1);
            return;
          }
        }
        cResult[9] = dismissOnce;
        cResult[10] = M;
      } else {
        class M {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_0(closure_2[16]);
            obj1 = { screen: UserSettingsSections.AGE_GROUP };
            openUserSettingsResult = obj2.openUserSettings(obj1);
            return;
          }
        }
      }
      if (cResult[11] === C) {
        class M {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_0(closure_2[16]);
            obj1 = { screen: UserSettingsSections.AGE_GROUP };
            openUserSettingsResult = obj2.openUserSettings(obj1);
            return;
          }
        }
      }
      const obj4 = { text: null, onPress: null };
      const intl = tmp(1126).intl;
      const obj3 = dismissOnce(14916);
      if (isVerifiedTeen) {
        class M {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_0(closure_2[16]);
            obj1 = { screen: UserSettingsSections.AGE_GROUP };
            openUserSettingsResult = obj2.openUserSettings(obj1);
            return;
          }
        }
        obj4.text = tmp14;
        obj4.onPress = C;
        let tmp15 = obj4;
      } else {
        class M {
          constructor() {
            tmp = closure_0(ContentDismissActionType.TAKE_ACTION);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[12]).TINY_BRONCO_PROMO_SHEET_KEY);
            obj2 = closure_0(closure_2[16]);
            obj1 = { screen: UserSettingsSections.AGE_GROUP };
            openUserSettingsResult = obj2.openUserSettings(obj1);
            return;
          }
        }
        obj4.onPress = M;
        tmp15 = obj4;
      }
      cResult[11] = C;
      cResult[12] = M;
      cResult[13] = isVerifiedTeen;
      cResult[14] = tmp15;
      tmp14 = _modDef3149;
    }
  : function TinyBroncoPromoSheet(markAsDismissed) {
      let dismissOnce;
      const tmp = closure_10();
      const isVerifiedTeen = dismissOnce(5906).useIsVerifiedTeen();
      let obj = dismissOnce(5906);
      dismissOnce = dismissOnce(14916).useDismissOnce(markAsDismissed.markAsDismissed);
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
      const obj5 = { source: null, style: null, resizeMode: "contain" };
      let obj2 = dismissOnce(14916);
      obj5.source = tmp14(14917);
      obj5.style = tmp.illustration;
      obj4.illustration = closure_8(tmp14(6163), obj5);
      const intl2 = tmp2(1126).intl;
      obj4.title = intl2.string(tmp14(3149).GdTVPF);
      const intl3 = tmp2(1126).intl;
      const format = intl3.format;
      const tmp14Result2 = tmp14(3149);
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
      const items5 = [closure_8(dismissOnce(5376).Button, { size: "lg", text: tmp15.text, onPress: tmp15.onPress })];
      const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
      const intl4 = tmp2(1126).intl;
      obj10.text = intl4.string(dismissOnce(1126).t["NX+WJN"]);
      obj10.onPress = callback1;
      items5[1] = closure_8(dismissOnce(5376).Button, obj10);
      obj8.children = items5;
      obj4.actions = closure_9(dismissOnce(5965).ButtonGroup, obj8);
      return closure_8(dismissOnce(10290).PromoSheet, obj4);
    };
