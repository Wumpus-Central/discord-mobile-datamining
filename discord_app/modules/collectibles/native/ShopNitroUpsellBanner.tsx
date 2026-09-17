// === Module 15956: ShopNitroUpsellBanner ===

// Module 15956 (ShopNitroUpsellBanner)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useToken from "useToken" /* 4341 */;
import Text_Text from "Text/Text" /* 4636 */;
import Stack_Stack from "Stack/Stack" /* 5060 */;
import LinearGradientDefault from "LinearGradient" /* 5074 */;
import Card from "Card" /* 5695 */;
import XSmallIcon from "XSmallIcon" /* 5768 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10120 */;
import noop from "module_19" /* 19 */;

require = fn;
class ShopNitroUpsellBanner {
  constructor(arg0) {
    ({ isDarkTheme, dismiss } = global);
    tmp = closure_6();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp5 = closure_0;
    tmp4 = closure_1(closure_2[4]);
    obj = closure_0(closure_2[5]);
    tmp4Result = tmp4(obj.useToken(closure_1(closure_2[3]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
    alphaResult = tmp4Result.alpha(0.4);
    hexResult = alphaResult.hex();
    tmp7 = closure_1(closure_2[4]);
    obj4 = closure_0(closure_2[5]);
    tmp7Result = tmp7(obj4.useToken(closure_1(closure_2[3]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
    alphaResult1 = tmp7Result.alpha(0.4);
    hexResult1 = alphaResult1.hex();
    tmp10 = jsxs;
    callback = closure_3.useCallback(() => {
      const obj2 = { analyticsLocations: null };
      const obj = require("ActionSheetActionCreators");
      const items = [require("AnalyticsLocation").COLLECTIBLES_SHOP_INDEX_PAGE];
      obj2.analyticsLocations = items;
      obj.openLazy(require("asyncRequireImpl")(paths[7], paths.paths), "ShopNitroUpsellPromoSheet", obj2);
    }, []);
    items = [, ];
    items[0] = tmp.card;
    obj1 = { variant: "secondary", style: items, children: null };
    items[1] = isDarkTheme ? tmp.borderDark : tmp.borderLight;
    obj14 = { colors: null, start: null, end: null, style: null, pointerEvents: "none" };
    items1 = [, ];
    items1[0] = hexResult;
    items1[1] = hexResult1;
    obj14.colors = items1;
    tmp2Result = tmp2(tmp3[11]);
    obj14.start = tmp5(tmp3[12]).HorizontalGradient.START;
    obj14.end = tmp5(tmp3[12]).HorizontalGradient.END;
    obj14.style = tmp.gradientBackground;
    items2 = [, , ];
    items2[0] = jsx(tmp2Result, obj14);
    obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    intl = tmp5(tmp3[14]).intl;
    obj15.accessibilityLabel = intl.string(tmp5(tmp3[14]).t.WAI6xu);
    obj15.onPress = dismiss;
    obj15.style = tmp.closeButton;
    obj16 = { size: "md", color: tmp2(tmp3[3]).colors.ICON_DEFAULT };
    obj15.children = jsx(tmp5(tmp3[15]).XSmallIcon, obj16);
    items2[1] = jsx(tmp5(tmp3[13]).PressableOpacity, obj15);
    obj17 = { direction: "vertical", spacing: 16, children: null };
    obj18 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.text, children: null };
    intl2 = tmp5(tmp3[14]).intl;
    obj18.children = intl2.string(tmp5(tmp3[14]).t.WjOclf);
    items3 = [, ];
    items3[0] = jsx(tmp5(tmp3[17]).Text, obj18);
    obj19 = { text: null, onPress: null, size: "sm", shiny: false };
    tmp2Result1 = tmp2(tmp3[18]);
    intl3 = tmp5(tmp3[14]).intl;
    obj19.text = intl3.string(tmp5(tmp3[14]).t.pj0XBN);
    obj19.onPress = callback;
    items3[1] = jsx(tmp2Result1, obj19);
    obj17.children = items3;
    items2[2] = tmp10(tmp5(tmp3[16]).Stack, obj17);
    obj1.children = items2;
    return tmp10(closure_0(closure_2[10]).Card, obj1);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let obj2 = { card: { overflow: "hidden", padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16, borderWidth: 1 }, borderDark: null, borderLight: null, gradientBackground: null, text: null, closeButton: null };
let obj3 = { overflow: "hidden", padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16, borderWidth: 1 };
obj2.borderDark = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
let obj4 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj2.borderLight = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.gradientBackground = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
obj2.text = { marginRight: 24 };
obj2.closeButton = { position: "absolute", top: 8, right: 8 };
const timestampProducer = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellBanner.tsx");

export default ShopNitroUpsellBanner;
export { ShopNitroUpsellBanner };