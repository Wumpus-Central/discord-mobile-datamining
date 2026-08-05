import { metadata } from "../../../../discord_assets/assets/orbs/orb_coachmark_asset_2x.png.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { WindowLaunchIcon } from "../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import { PromoSheet } from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
// discord_app/modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx
import "messagesProxy";
import { Image } from "combined";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c7 = 150;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj = initialize /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    obj = { source: null, style: null };
    obj = { uri: null };
    obj[0] = metadata;
    obj[0] = obj;
    const obj1 = { width: null, height: null };
    obj1[0] = c7;
    obj1[1] = c7;
    obj[1] = obj1;
    let tmp3Result = <Image uri={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      let obj2 = { url: null, style: null };
      let tmp4Result = tmp4(8107);
      obj2[0] = tmp4(14747);
      const obj3 = { width: null, height: null };
      obj3[0] = c7;
      obj3[1] = c7;
      obj2[1] = obj3;
      tmp3Result = tmp3(tmp4Result, obj2);
      tmp8 = tmp4;
      tmp9 = tmp3;
    } else {
      const obj4 = { source: null, resizeMode: "contain", style: null };
      const obj5 = { uri: null };
      tmp4Result = tmp4(5236);
      obj5[0] = tmp4(14747);
      obj4[0] = obj5;
      const obj6 = { width: null, height: null };
      obj6[0] = c7;
      obj6[1] = c7;
      obj4[2] = obj6;
      tmp3Result = tmp3(tmp4Result, obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
    }
    tmpResult = tmp(500);
  }
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = tmp(1236).intl;
  obj7[0] = intl.string(getSystemLocale /* getSystemLocale */.t.aRIFWD);
  const obj8 = { size: "sm", color: null };
  obj8[1] = tmp8(712).colors.WHITE;
  obj7[1] = tmp9(WindowLaunchIcon /* WindowLaunchIcon */.WindowLaunchIcon, obj8);
  obj7[4] = function onPress() {
    callback(4253).hideActionSheet();
    const obj = callback(4253);
    const obj2 = callback(3982);
    obj2.openURL(callback(1945).getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = tmp(1236).intl;
  obj9[0] = intl2.string(tmp8(2931).ublzTG);
  const intl3 = tmp(1236).intl;
  obj9[1] = intl3.string(tmp8(2931).JgM2xu);
  obj9[2] = tmp9(Button /* Button */.Button, obj7);
  obj9[3] = tmp3Result;
  obj9[4] = function onDismiss() {
    callback(4253).hideActionSheet();
  };
  return tmp9(PromoSheet /* PromoSheet */.PromoSheet, obj9);
};