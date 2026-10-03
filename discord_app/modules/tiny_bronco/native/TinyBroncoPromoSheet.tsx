// discord_app/modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3077 from "../TinyBronco.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const TINY_BRONCO_BLOG_URL = fn(9421).TINY_BRONCO_BLOG_URL;
const Constants = fn(1085);
({ HelpdeskArticles: metroRequire, UserSettingsSections: closure_7 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { illustration: null, actions: null };
let size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
obj2.illustration = size;
obj2.actions = { paddingVertical: 0 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = dismissOnce(576).c(36);
      closure_11();
      let obj = dismissOnce(576);
      const tmp = dismissOnce;
      const isVerifiedTeen = dismissOnce(5102).useIsVerifiedTeen();
      let obj2 = dismissOnce(5102);
      dismissOnce = dismissOnce(14527).useDismissOnce(markAsDismissed.markAsDismissed);
      if (cResult[0] !== dismissOnce) {
        const fn = function o() {
          dismissOnce(ContentDismissActionType.USER_DISMISS);
        };
        cResult[0] = dismissOnce;
        cResult[1] = fn;
      }
      if (cResult[2] !== dismissOnce) {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
            return;
          }
        }
        cResult[2] = dismissOnce;
        cResult[3] = N;
      } else {
        class N {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(closure_0(closure_2[13]).TINY_BRONCO_PROMO_SHEET_KEY);
            return;
          }
        }
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
        cResult[6] = dismissOnce;
        cResult[7] = tmp11;
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
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
        cResult[8] = M;
      } else {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
      }
      if (cResult[9] !== dismissOnce) {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
        cResult[9] = dismissOnce;
        cResult[10] = tmp14;
      } else {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
      }
      if (cResult[11] === tmp11) {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
      }
      const obj4 = { text: null, onPress: null };
      const intl = tmp(1126).intl;
      const obj3 = dismissOnce(14527);
      if (isVerifiedTeen) {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
        obj4.text = tmp15;
        obj4.onPress = tmp11;
        let tmp16 = obj4;
      } else {
        class M {
          constructor() {
            obj = closure_1_1(closure_1_2[14]);
            openUrlResult = obj.openUrl(closure_1_5);
            return;
          }
        }
        obj4.onPress = tmp14;
        tmp16 = obj4;
      }
      cResult[11] = tmp11;
      cResult[12] = tmp14;
      cResult[13] = isVerifiedTeen;
      cResult[14] = tmp16;
      tmp15 = _modDef3077;
    }
  : (markAsDismissed) => {
      let dismissOnce;
      const tmp = closure_11();
      const isVerifiedTeen = dismissOnce(5102).useIsVerifiedTeen();
      let obj = dismissOnce(5102);
      dismissOnce = dismissOnce(14527).useDismissOnce(markAsDismissed.markAsDismissed);
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
      const tmp13 = _modDef3077;
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
      let obj2 = dismissOnce(14527);
      obj4.illustration = closure_9(Image, { source: tmp14(14528), style: tmp.illustration, resizeMode: "contain" });
      const intl2 = tmp2(1126).intl;
      obj4.title = intl2.string(tmp14(3077).GdTVPF);
      const intl3 = tmp2(1126).intl;
      const format = intl3.format;
      const tmp14Result = tmp14(3077);
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
      const items5 = [closure_9(dismissOnce(5594).Button, { size: "lg", text: tmp15.text, onPress: tmp15.onPress })];
      const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
      const intl4 = tmp2(1126).intl;
      obj10.text = intl4.string(dismissOnce(1126).t["NX+WJN"]);
      obj10.onPress = callback1;
      items5[1] = closure_9(dismissOnce(5594).Button, obj10);
      obj8.children = items5;
      obj4.actions = closure_10(dismissOnce(5592).ButtonGroup, obj8);
      return closure_9(dismissOnce(10045).PromoSheet, obj4);
    };
