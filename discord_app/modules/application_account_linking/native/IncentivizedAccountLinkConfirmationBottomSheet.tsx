// discord_app/modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3341 from "../IncentivizedAccountLinking.messages.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import APNGDecorationNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import WindowLaunchIcon from "../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import _modDef16035 from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x.png.js";
import _modDef16036 from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x_animated.png.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsx = fn(21).jsx;
let c6 = 150;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function IncentivizedAccountLinkConfirmationBottomSheet() {
      const cResult = c.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        function handleTakeAction() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const obj2 = LinkingDefault;
          obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
        }
        cResult[2] = handleTakeAction;
        let tmp8 = handleTakeAction;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        function handleDismiss() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
        cResult[3] = handleDismiss;
        let tmp9 = handleDismiss;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        if (stateFromStores) {
          let obj2 = { source: null, style: null };
          const obj3 = { uri: _modDef16035 };
          obj2.source = obj3;
          const size = { width: v150, height: v150 };
          obj2.style = size;
          let tmp11Result = jsx(FastImageDefault, { source: null, style: null });
        } else {
          if (tmpResult2.isAndroid()) {
            const obj4 = { url: _modDef16036, style: null };
            const size1 = { width: v150, height: v150 };
            obj4.style = size1;
            tmp11Result = jsx(APNGDecorationNativeComponentDefault, { url: _modDef16036, style: null });
            const tmp12Result = APNGDecorationNativeComponentDefault;
          } else {
            const obj5 = { source: null, resizeMode: "contain", style: null };
            const obj6 = { uri: _modDef16036 };
            obj5.source = obj6;
            const size2 = { width: v150, height: v150 };
            obj5.style = size2;
            tmp11Result = jsx(FastImageDefault, { source: null, resizeMode: "contain", style: null });
            const tmp12Result2 = FastImageDefault;
          }
          tmpResult2 = PlatformUtils;
        }
        cResult[4] = stateFromStores;
        cResult[5] = tmp11Result;
      } else {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
          const intl = util.intl;
          obj7.text = intl.string(util.t.aRIFWD);
          const obj8 = { size: "sm", color: nativeDefault.colors.WHITE };
          obj7.icon = jsx(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: nativeDefault.colors.WHITE });
          obj7.onPress = tmp8;
          const tmp26 = jsx(components_Button_Button.Button, {
            text: null,
            icon: null,
            iconPosition: "end",
            size: "lg",
            onPress: null,
          });
          cResult[6] = tmp26;
          let tmp23 = tmp26;
        } else {
          tmp23 = cResult[6];
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(_modDef3341.ublzTG);
          const intl3 = util.intl;
          const stringResult1 = intl3.string(_modDef3341.JgM2xu);
          cResult[7] = stringResult;
          cResult[8] = stringResult1;
          let tmp28 = stringResult1;
          let tmp27 = stringResult;
        } else {
          tmp27 = cResult[7];
          tmp28 = cResult[8];
        }
        if (cResult[9] !== cResult[5]) {
          const obj9 = { title: tmp27, description: tmp28, actions: tmp23, illustration: tmp10, onDismiss: tmp9 };
          const tmp34 = jsx(PromoSheet.PromoSheet, {
            title: tmp27,
            description: tmp28,
            actions: tmp23,
            illustration: tmp10,
            onDismiss: tmp9,
          });
          cResult[9] = tmp10;
          cResult[10] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[10];
        }
        return tmp32;
      }
      const tmpResult = initialize;
    }
  : function IncentivizedAccountLinkConfirmationBottomSheet() {
      const items = [AccessibilityStore];
      if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
        let obj2 = { source: null, style: null };
        const obj3 = { uri: _modDef16035 };
        obj2.source = obj3;
        const size = { width: v150, height: v150 };
        obj2.style = size;
        let tmp3Result = jsx(FastImageDefault, { source: null, style: null });
        let tmp8 = importDefault;
        let tmp9 = jsx;
      } else {
        if (tmpResult.isAndroid()) {
          const obj4 = { url: _modDef16036, style: null };
          const size1 = { width: v150, height: v150 };
          obj4.style = size1;
          tmp3Result = jsx(APNGDecorationNativeComponentDefault, { url: _modDef16036, style: null });
          tmp8 = importDefault;
          tmp9 = jsx;
          const tmp4Result = APNGDecorationNativeComponentDefault;
        } else {
          const obj5 = { source: null, resizeMode: "contain", style: null };
          const obj6 = { uri: _modDef16036 };
          obj5.source = obj6;
          const size2 = { width: v150, height: v150 };
          obj5.style = size2;
          tmp3Result = jsx(FastImageDefault, { source: null, resizeMode: "contain", style: null });
          tmp8 = importDefault;
          tmp9 = jsx;
          const tmp4Result2 = FastImageDefault;
        }
        tmpResult = PlatformUtils;
      }
      const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
      const intl = util.intl;
      obj7.text = intl.string(util.t.aRIFWD);
      obj = initialize;
      obj7.icon = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(587).colors.WHITE });
      obj7.onPress = function handleTakeAction() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj2 = LinkingDefault;
        obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
      };
      const obj8 = { size: "sm", color: tmp8(587).colors.WHITE };
      const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
      const intl2 = util.intl;
      obj9.title = intl2.string(tmp8(3341).ublzTG);
      const intl3 = util.intl;
      obj9.description = intl3.string(tmp8(3341).JgM2xu);
      obj9.actions = tmp9(components_Button_Button.Button, obj7);
      obj9.illustration = tmp3Result;
      obj9.onDismiss = function handleDismiss() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      return tmp9(PromoSheet.PromoSheet, obj9);
    };
