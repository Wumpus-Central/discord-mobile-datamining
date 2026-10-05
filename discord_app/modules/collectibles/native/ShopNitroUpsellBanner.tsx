// discord_app/modules/collectibles/native/ShopNitroUpsellBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import intl5 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import Card_Card from "../../../design/components/Card/native/Card.native.tsx";
import XSmallIcon2 from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import NitroUpsellButtonDefault from "../../premium/components/native/NitroUpsellButton.tsx";
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
class ShopNitroUpsellBanner {
  constructor(arg0) {
    let XSmallIcon;
    let buttonVariant;
    let dismiss;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let isDarkTheme;
    let items1;
    let items2;
    let obj6;
    let paths;
    let tmp11Result;
    ({ isDarkTheme, dismiss, buttonVariant } = arg0);
    const tmp = closure_6();
    const tmp4 = _modDef683;
    let obj = useToken;
    const tmp4Result = tmp4(obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
    const alphaResult = tmp4Result.alpha(0.3);
    const hexResult = alphaResult.hex();
    const tmp7 = _modDef683;
    const obj4 = useToken;
    const tmp7Result = tmp7(obj4.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
    const alphaResult1 = tmp7Result.alpha(0.3);
    const hexResult1 = alphaResult1.hex();
    const callback = react.useCallback(() => {
      let intl;
      let intl2;
      let items;
      const openLazy = require("ActionSheetActionCreators").openLazy;
      const obj = {
        analyticsLocations: items,
        title: intl.string(require("intl").t.GZWBoL),
        description: intl2.string(require("intl").t["2+/rrF"]),
      };
      require("ActionSheetActionCreators");
      items = [];
      const tmp2 = require("asyncRequire")(paths[7], paths.paths);
      items[0] = require("AnalyticsLocation").COLLECTIBLES_SHOP_INDEX_PAGE;
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      openLazy(tmp2, "ShopNitroUpsellPromoSheet", obj);
    }, []);
    let items = [tmp.card];
    const obj2 = { variant: "secondary", style: items, children: items2 };
    items[1] = isDarkTheme ? tmp.borderDark : tmp.borderLight;
    const Card = Card_Card.Card;
    const obj3 = {
      colors: items1,
      start: ConstantsIOS.HorizontalGradient.START,
      end: ConstantsIOS.HorizontalGradient.END,
      style: tmp.gradientBackground,
      pointerEvents: "none",
    };
    items1 = [hexResult, hexResult1];
    const tmp2Result = LinearGradientDefault;
    items2 = [React3(tmp2Result, obj3), ,];
    const obj5 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl5.t.WAI6xu),
      onPress: dismiss,
      style: tmp.closeButton,
      children: React3(XSmallIcon, obj6),
    };
    const PressableOpacity = native.PressableOpacity;
    intl = intl5.intl;
    obj6 = { size: "md", color: nativeDefault.colors.ICON_DEFAULT };
    XSmallIcon = XSmallIcon2.XSmallIcon;
    items2[1] = React3(PressableOpacity, obj5);
    const Stack = Stack_Stack.Stack;
    const obj7 = {
      variant: "text-sm/medium",
      color: "mobile-text-heading-primary",
      style: tmp.text,
      children: intl2.string(intl5.t.WjOclf),
    };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    const items3 = [React3(Text, obj7)];
    if (buttonVariant === MobileNitroUpsellInShopFeedExperiment.NitroUpsellBannerButtonVariant.LEARN_MORE) {
      const obj8 = { variant: "primary", size: "sm", text: intl4.string(intl5.t.hvVgAZ), onPress: callback };
      const Button = components_Button_Button.Button;
      intl4 = intl5.intl;
      tmp11Result = React3(Button, obj8);
    } else {
      const obj9 = { text: intl3.string(intl5.t.pj0XBN), onPress: callback, size: "sm", shiny: false };
      const tmp2Result2 = NitroUpsellButtonDefault;
      intl3 = intl5.intl;
      tmp11Result = React3(tmp2Result2, obj9);
    }
    items3[1] = tmp11Result;
    items2[2] = hasOwnProperty(Stack, { direction: "vertical", spacing: 16, children: items3 });
    return hasOwnProperty(Card, obj2);
  }
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  card: obj2,
  borderDark: obj3,
  borderLight: obj4,
  gradientBackground: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 },
  text: { marginRight: 24 },
  closeButton: { position: "absolute", top: 8, right: 8 },
};
obj2 = {
  overflow: "hidden",
  padding: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_8,
  marginHorizontal: nativeDefault.space.PX_16,
  borderWidth: 1,
};
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const metroRequire = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellBanner.tsx");

export default ShopNitroUpsellBanner;
export { ShopNitroUpsellBanner };
