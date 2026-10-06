// discord_app/modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3105 from "../TinyBronco.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import TinyBroncoConstants from "../TinyBroncoConstants.tsx";
import openTinyBroncoPromoSheet from "openTinyBroncoPromoSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let markAsDismissed;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let size;
const Image = react_native.Image;
const TINY_BRONCO_BLOG_URL = TinyBroncoConstants.TINY_BRONCO_BLOG_URL;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { illustration: size, actions: { paddingVertical: 0 } };
size = { width: 198, height: 132, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let dismissOnce;
      let tmp16;
      let obj = dismissOnce(576);
      const cResult = obj.c(36);
      markAsDismissed = markAsDismissed.markAsDismissed;
      closure_11();
      let obj2 = dismissOnce(5108);
      const isVerifiedTeen = obj2.useIsVerifiedTeen();
      let obj3 = dismissOnce(14547);
      const tmp = dismissOnce;
      dismissOnce = obj3.useDismissOnce(markAsDismissed);
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
            dismissOnce(ContentDismissActionType.USER_DISMISS);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
          }
        }
        cResult[2] = dismissOnce;
        cResult[3] = N;
      } else {
        class N {
          constructor() {
            dismissOnce(ContentDismissActionType.USER_DISMISS);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
          }
        }
      }
      if (cResult[4] !== dismissOnce) {
        class I {
          constructor() {
            dismissOnce(ContentDismissActionType.TAKE_ACTION);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
            const obj2 = AgeVerificationActionCreatorsDefault;
            const obj3 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER,
            };
            const result = obj2.showAgeVerificationGetStartedModal(obj3);
          }
        }
        cResult[4] = dismissOnce;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            dismissOnce(ContentDismissActionType.TAKE_ACTION);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
            const obj2 = AgeVerificationActionCreatorsDefault;
            const obj3 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER,
            };
            const result = obj2.showAgeVerificationGetStartedModal(obj3);
          }
        }
      }
      if (cResult[6] !== dismissOnce) {
        class I {
          constructor() {
            dismissOnce(ContentDismissActionType.TAKE_ACTION);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
            const obj2 = AgeVerificationActionCreatorsDefault;
            const obj3 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER,
            };
            const result = obj2.showAgeVerificationGetStartedModal(obj3);
          }
        }
        cResult[6] = dismissOnce;
        cResult[7] = tmp11;
      } else {
        class I {
          constructor() {
            dismissOnce(ContentDismissActionType.TAKE_ACTION);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
            const obj2 = AgeVerificationActionCreatorsDefault;
            const obj3 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER,
            };
            const result = obj2.showAgeVerificationGetStartedModal(obj3);
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
        cResult[8] = M;
      } else {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
      }
      if (cResult[9] !== dismissOnce) {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
        cResult[9] = dismissOnce;
        cResult[10] = tmp14;
      } else {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
      }
      if (cResult[11] === tmp11) {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
      }
      const obj4 = { text: null, onPress: null };
      const intl = tmp(1126).intl;
      _modDef3105;
      if (isVerifiedTeen) {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
        obj4.onPress = tmp11;
        tmp16 = obj4;
      } else {
        class M {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            obj.openUrl(TINY_BRONCO_BLOG_URL);
          }
        }
        obj4.onPress = tmp14;
        tmp16 = obj4;
      }
      cResult[11] = tmp11;
      cResult[12] = tmp14;
      cResult[13] = isVerifiedTeen;
      cResult[14] = tmp16;
    }
  : (markAsDismissed) => {
      let ButtonGroup;
      let formatResult;
      let intl2;
      let intl4;
      let items5;
      let obj5;
      let obj8;
      let tmp14;
      let tmp15;
      let dismissOnce;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_11();
      let obj = dismissOnce(5108);
      const isVerifiedTeen = obj.useIsVerifiedTeen();
      let obj2 = dismissOnce(14547);
      dismissOnce = obj2.useDismissOnce(markAsDismissed);
      const items = [dismissOnce];
      const items1 = [dismissOnce];
      const callback = react.useCallback(() => {
        dismissOnce(ContentDismissActionType.USER_DISMISS);
      }, items);
      const items2 = [dismissOnce];
      const callback1 = react.useCallback(() => {
        dismissOnce(ContentDismissActionType.USER_DISMISS);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
      }, items1);
      const items3 = [dismissOnce];
      const callback2 = react.useCallback(() => {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = AgeVerificationActionCreatorsDefault;
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.TINY_BRONCO_POPOVER };
        const result = obj2.showAgeVerificationGetStartedModal(obj3);
      }, items2);
      const callback3 = react.useCallback(() => {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
        AgeVerificationActionCreatorsDefault;
        const obj2 = HelpdeskUtilsDefault;
        openUrl(obj2.getArticleURL(metroRequire.TIGGER_PAWTECT_LEARN_MORE));
      }, items3);
      const items4 = [dismissOnce];
      const callback4 = react.useCallback(() => {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TINY_BRONCO_BLOG_URL);
      }, []);
      let obj3 = { text: null, onPress: null };
      const callback5 = react.useCallback(() => {
        dismissOnce(ContentDismissActionType.TAKE_ACTION);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openTinyBroncoPromoSheet.TINY_BRONCO_PROMO_SHEET_KEY);
        const obj2 = openUserSettings;
        const obj3 = { screen: metroImportDefault.AGE_GROUP };
        obj2.openUserSettings(obj3);
      }, items4);
      const intl = dismissOnce(1126).intl;
      const string = intl.string;
      const tmp13 = _modDef3105;
      if (isVerifiedTeen) {
        obj3.text = string(tmp13["+7NlgO"]);
        obj3.onPress = callback3;
        tmp14 = importDefault;
        tmp15 = obj3;
      } else {
        obj3.text = string(tmp13.jjpcno);
        obj3.onPress = callback5;
        tmp14 = importDefault;
        tmp15 = obj3;
      }
      const obj4 = {
        illustration: closure_9(Image, obj5),
        title: intl2.string(tmp14(3105).GdTVPF),
        description: formatResult,
        onDismiss: callback,
        actions: closure_10(ButtonGroup, obj8),
      };
      obj5 = { source: tmp14(14548), style: tmp.illustration, resizeMode: "contain" };
      const PromoSheet = tmp2(10058).PromoSheet;
      intl2 = tmp2(1126).intl;
      const intl3 = tmp2(1126).intl;
      const format = intl3.format;
      const tmp14Result = tmp14(3105);
      if (isVerifiedTeen) {
        const obj6 = { handleOnConfirmAgeHook: callback2 };
        formatResult = format(tmp14Result["Ga2z/E"], obj6);
      } else {
        const obj7 = { handleOnBlogHook: callback4 };
        formatResult = format(tmp14Result.xuvWqy, obj7);
      }
      obj8 = { size: "lg", style: tmp.actions, children: items5 };
      ButtonGroup = tmp2(5599).ButtonGroup;
      items5 = [,];
      const obj9 = { size: "lg", text: tmp15.text, onPress: tmp15.onPress };
      items5[0] = closure_9(dismissOnce(5601).Button, obj9);
      const obj10 = {
        size: "lg",
        variant: "secondary",
        text: intl4.string(dismissOnce(1126).t["NX+WJN"]),
        onPress: callback1,
      };
      const Button = tmp2(5601).Button;
      intl4 = tmp2(1126).intl;
      items5[1] = closure_9(Button, obj10);
      return closure_9(PromoSheet, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoPromoSheet.tsx");

export default tmp4;
