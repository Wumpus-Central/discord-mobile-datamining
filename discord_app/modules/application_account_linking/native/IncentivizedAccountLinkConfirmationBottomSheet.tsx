// discord_app/modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx";
import WindowLaunchIcon from "../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import metadataDefault from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x.png.js";
import metadataDefault2 from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x_animated.png.js";
import { Image } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import { HelpdeskArticles } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
let c7 = 150;
const result = require("obj132").fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj = initialize;
  const items = [closure_4];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    obj = { uri: null };
    obj[0] = metadataDefault;
    obj[0] = obj;
    obj1 = { width: null, height: null };
    obj1[0] = c7;
    obj1[1] = c7;
    obj[1] = obj1;
    let tmp3Result = <Image uri={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      let obj2 = { url: null, style: null };
      let tmp4Result = __INTERNAL_VIEW_CONFIGDefault;
      obj2[0] = metadataDefault2;
      const obj3 = { width: null, height: null };
      obj3[0] = c7;
      obj3[1] = c7;
      obj2[1] = obj3;
      tmp3Result = <tmp4Result url={null} style={null} />;
      tmp8 = importDefault;
      tmp9 = jsx;
    } else {
      const obj4 = { source: null, resizeMode: "contain", style: null };
      const obj5 = { uri: null };
      tmp4Result = preloadDefault;
      obj5[0] = metadataDefault2;
      obj4[0] = obj5;
      const obj6 = { width: null, height: null };
      obj6[0] = c7;
      obj6[1] = c7;
      obj4[2] = obj6;
      tmp3Result = <tmp4Result source={null} resizeMode="contain" style={null} />;
      tmp8 = importDefault;
      tmp9 = jsx;
    }
    tmpResult = obj132;
  }
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = getSystemLocale.intl;
  obj7[0] = intl.string(getSystemLocale.t.aRIFWD);
  obj7[1] = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(712).colors.WHITE });
  obj7[4] = function onPress() {
    callback(4342).hideActionSheet();
    const obj = callback(4342);
    const obj2 = callback(4090);
    obj2.openURL(callback(1993).getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj8 = { size: "sm", color: tmp8(712).colors.WHITE };
  const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = getSystemLocale.intl;
  obj9[0] = intl2.string(tmp8(2981).ublzTG);
  const intl3 = getSystemLocale.intl;
  obj9[1] = intl3.string(tmp8(2981).JgM2xu);
  obj9[2] = tmp9(Button.Button, obj7);
  obj9[3] = tmp3Result;
  obj9[4] = function onDismiss() {
    callback(4342).hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj9);
};