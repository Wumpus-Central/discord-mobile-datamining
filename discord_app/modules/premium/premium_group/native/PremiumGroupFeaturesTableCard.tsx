// === Module 12959: BetaPill ===

// Module 12959 (BetaPill)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import hexToRgba from "hexToRgba" /* 4228 */;
import Text from "Text" /* 4376 */;
import items3 from "items" /* 7039 */;
import usePremiumGroupFeaturesTableCardTextDefault from "usePremiumGroupFeaturesTableCardText" /* 12960 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

class BetaPill {
  constructor() {
    tmp = closure_7();
    obj = { style: tmp.betaPill, children: null };
    obj = { variant: "text-xs/bold", style: tmp.betaText, children: null };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t.oW0eUd);
    obj[1] = jsx(require("Text").Text, obj);
    return jsx(View, obj);
  }
}
const View = get_ActivityIndicator.View;
const Gradients = items3.Gradients;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { premiumGroupCard: null, headerContainer: null, betaPill: null, betaText: null, title: null, description: null };
obj = { padding: 16, borderRadius: ThemesDefault.radii.sm - 2, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" };
obj[0] = obj;
obj[1] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 };
obj[2] = { backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
let obj1 = { backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
obj[3] = { color: ThemesDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
let obj2 = { color: ThemesDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
obj[4] = { color: ThemesDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
const obj3 = { color: ThemesDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
obj[5] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let closure_7 = createCacheKey.createStyles(obj);
let obj4 = { color: ThemesDefault.colors.TEXT_DEFAULT };
const result = set.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default function PremiumGroupFeaturesTableCard(arg0) {
  ({ style, premiumGroupRole } = arg0);
  const tmp = callback3();
  const tmp4 = usePremiumGroupFeaturesTableCardTextDefault(premiumGroupRole, false);
  if (null == tmp4) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp4);
    let obj = { borderWidth: 2, direction: null, colors: null, borderRadius: null, style: null, children: null };
    obj[1] = Button.GradientBorder.Direction.HORIZONTAL;
    obj[2] = Gradients.PREMIUM_TIER_2;
    obj[3] = tmp2(712).radii.sm;
    obj[4] = style;
    obj = { start: null, end: null, colors: null, locations: null, style: null, children: null };
    obj[0] = { x: 0, y: 0 };
    obj[1] = { x: 1, y: 0 };
    let obj2 = hexToRgba;
    const items = [obj2.hexWithOpacity("#8547C6", 0.15), , ];
    const tmp2Result = tmp2(4826);
    items[1] = hexToRgba.hexWithOpacity("#B845C1", 0.15);
    const obj4 = hexToRgba;
    items[2] = hexToRgba.hexWithOpacity("#AB5D8A", 0.15);
    obj[2] = items;
    obj[3] = [0, 0.4996, 0.9593];
    obj[4] = tmp.premiumGroupCard;
    obj = { style: null, children: null };
    obj[0] = tmp.headerContainer;
    const items1 = [callback(tmp2(8773), { width: 181, height: 16 }), callback(BetaPill, {})];
    obj[1] = items1;
    const items2 = [callback2(View, obj), , ];
    obj1 = { variant: "text-sm/normal", style: null, children: null };
    obj1[1] = tmp.title;
    obj1[2] = subheaderString;
    items2[1] = callback(Text.Text, obj1);
    obj2 = { variant: "text-sm/normal", style: null, children: null };
    obj2[1] = tmp.description;
    obj2[2] = bodyString;
    items2[2] = callback(Text.Text, obj2);
    obj[5] = items2;
    obj[5] = callback2(tmp2Result, obj);
    return callback(Button.GradientBorder, obj);
  }
};
export { BetaPill };