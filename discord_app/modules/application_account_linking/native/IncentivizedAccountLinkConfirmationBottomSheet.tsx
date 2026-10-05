// discord_app/modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3269 from "../IncentivizedAccountLinking.messages.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import APNGDecorationNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx";
import PromoSheet2 from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import WindowLaunchIcon2 from "../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import _modDef15741 from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x.png.js";
import _modDef15742 from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x_animated.png.js";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let c7 = 150;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp22;
      let tmp26;
      let tmp27;
      let tmp31;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let useReducedMotion;
      let obj = react2;
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function u() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.IN_GAME_FEATURES));
        };
        cResult[2] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function f() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        };
        cResult[3] = fn3;
        tmp9 = fn3;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        let tmp11Result;
        if (stateFromStores) {
          size = { width: v150, height: v150 };
          tmp11Result = <Image source={{ uri: _modDef15741 }} style={size} />;
          const obj3 = { uri: _modDef15741 };
        } else {
          const tmpResult2 = PlatformUtils;
          if (tmpResult2.isAndroid()) {
            APNGDecorationNativeComponentDefault;
            const size1 = { width: v150, height: v150 };
            tmp11Result = <tmp12Result url={_modDef15742} style={size1} />;
          } else {
            const obj6 = { uri: _modDef15742 };
            FastImageDefault;
            const size2 = { width: v150, height: v150 };
            tmp11Result = <tmp12Result2 source={obj6} resizeMode="contain" style={size2} />;
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = tmp11Result;
        tmp10 = tmp11Result;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const Button = components_Button_Button.Button;
        const intl = intl4.intl;
        ({ size: "sm", color: nativeDefault.colors.WHITE });
        const WindowLaunchIcon = WindowLaunchIcon2.WindowLaunchIcon;
        const tmp25 = (
          <Button text={intl.string(intl4.t.aRIFWD)} icon={null} iconPosition="end" size="lg" onPress={tmp8} />
        );
        cResult[6] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult = intl2.string(_modDef3269.ublzTG);
        const intl3 = intl4.intl;
        const stringResult1 = intl3.string(_modDef3269.JgM2xu);
        cResult[7] = stringResult;
        cResult[8] = stringResult1;
        tmp27 = stringResult1;
        tmp26 = stringResult;
      } else {
        tmp26 = cResult[7];
        tmp27 = cResult[8];
      }
      if (cResult[9] !== tmp10) {
        const tmp33 = jsx(PromoSheet2.PromoSheet, {
          title: tmp26,
          description: tmp27,
          actions: tmp22,
          illustration: tmp10,
          onDismiss: tmp9,
        });
        cResult[9] = tmp10;
        cResult[10] = tmp33;
        tmp31 = tmp33;
      } else {
        tmp31 = cResult[10];
      }
      return tmp31;
    }
  : () => {
      let WindowLaunchIcon;
      let intl;
      let intl2;
      let intl3;
      let obj8;
      let tmp3Result;
      let tmp8;
      let tmp9;
      let tmp9Result;
      let useReducedMotion;
      let obj = get_initialized;
      const items = [AccessibilityStore];
      if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
        size = { width: v150, height: v150 };
        tmp3Result = <Image source={{ uri: _modDef15741 }} style={size} />;
        tmp8 = importDefault;
        tmp9 = jsx;
        const obj3 = { uri: _modDef15741 };
      } else {
        const tmpResult = PlatformUtils;
        if (tmpResult.isAndroid()) {
          APNGDecorationNativeComponentDefault;
          const size1 = { width: v150, height: v150 };
          tmp3Result = <tmp4Result url={_modDef15742} style={size1} />;
          tmp8 = importDefault;
          tmp9 = jsx;
        } else {
          const obj6 = { uri: _modDef15742 };
          FastImageDefault;
          const size2 = { width: v150, height: v150 };
          tmp3Result = <tmp4Result2 source={obj6} resizeMode="contain" style={size2} />;
          tmp8 = importDefault;
          tmp9 = jsx;
        }
      }
      const obj7 = {
        text: intl.string(intl4.t.aRIFWD),
        icon: tmp9(WindowLaunchIcon, obj8),
        iconPosition: "end",
        size: "lg",
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = HelpdeskUtilsDefault;
          openURL(obj2.getArticleURL(constants.IN_GAME_FEATURES));
        },
      };
      const Button = components_Button_Button.Button;
      intl = intl4.intl;
      obj8 = { size: "sm", color: tmp8(587).colors.WHITE };
      WindowLaunchIcon = WindowLaunchIcon2.WindowLaunchIcon;
      const obj9 = {
        title: intl2.string(tmp8(3269).ublzTG),
        description: intl3.string(tmp8(3269).JgM2xu),
        actions: tmp9Result,
        illustration: tmp3Result,
        onDismiss() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      };
      tmp9Result = tmp9(Button, obj7);
      const PromoSheet = PromoSheet2.PromoSheet;
      intl2 = intl4.intl;
      intl3 = intl4.intl;
      return tmp9(PromoSheet, obj9);
    };
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx",
);

export default tmp3;
