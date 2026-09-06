// === Module 13485: PremiumGroupFeaturesTableCard ===

// Module 13485 (PremiumGroupFeaturesTableCard)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import Text_Text from "Text/Text" /* 4556 */;
import ColorConstants from "ColorConstants" /* 7432 */;
import usePremiumGroupFeaturesTableCardTextDefault from "usePremiumGroupFeaturesTableCardText" /* 13486 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

class BetaPill {
  constructor() {
    tmp = closure_7();
    obj = { style: tmp.betaPill, children: null };
    obj = { variant: "text-xs/bold", style: tmp.betaText, children: null };
    intl = closure_0(closure_2[6]).intl;
    obj.children = intl.string(closure_0(closure_2[6]).t.oW0eUd);
    obj.children = jsx(closure_0(closure_2[5]).Text, obj);
    return jsx(View, obj);
  }
}
const View = _mod17.View;
const Gradients = ColorConstants.Gradients;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { premiumGroupCard: null, headerContainer: null, betaPill: null, betaText: null, title: null, description: null };
obj = { padding: 16, borderRadius: nativeDefault.radii.sm - 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", alignItems: "flex-start" };
obj.premiumGroupCard = obj;
obj.headerContainer = { display: "flex", flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 4 };
obj.betaPill = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
let obj1 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingBottom: 2 };
obj.betaText = { color: nativeDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
let obj2 = { color: nativeDefault.colors.BLACK, textAlign: "center", textTransform: "uppercase" };
obj.title = { color: nativeDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
const obj3 = { color: nativeDefault.colors.TEXT_DEFAULT, marginBottom: 16 };
obj.description = { color: nativeDefault.colors.TEXT_DEFAULT };
const React5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupFeaturesTableCard.tsx");

export default function PremiumGroupFeaturesTableCard(arg0) {
  ({ style, premiumGroupRole } = arg0);
  const tmp = closure_7();
  const tmp4 = usePremiumGroupFeaturesTableCardTextDefault(premiumGroupRole, false);
  if (null == tmp4) {
    return null;
  } else {
    ({ subheaderString, bodyString } = tmp4);
    let obj = { borderWidth: 2, direction: native.GradientBorder.Direction.HORIZONTAL, colors: Gradients.PREMIUM_TIER_2, borderRadius: tmp2(576).radii.sm, style, children: null };
    obj = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, locations: null, style: null, children: null };
    let obj2 = ColorUtils;
    const items = [obj2.hexWithOpacity("#8547C6", 0.15), , ];
    const tmp2Result = tmp2(4987);
    items[1] = ColorUtils.hexWithOpacity("#B845C1", 0.15);
    items[2] = ColorUtils.hexWithOpacity("#AB5D8A", 0.15);
    obj.colors = items;
    obj.locations = [0, 0.4996, 0.9593];
    obj.style = tmp.premiumGroupCard;
    obj = { style: tmp.headerContainer, children: null };
    const items1 = [hasOwnProperty(tmp2(9381), { width: 181, height: 16 }), hasOwnProperty(BetaPill, {})];
    obj.children = items1;
    const items2 = [timestampProducer(View, obj), , ];
    const obj1 = { variant: "text-sm/normal", style: tmp.title, children: subheaderString };
    items2[1] = hasOwnProperty(Text_Text.Text, obj1);
    obj2 = { variant: "text-sm/normal", style: tmp.description, children: bodyString };
    items2[2] = hasOwnProperty(Text_Text.Text, obj2);
    obj.children = items2;
    obj.children = timestampProducer(tmp2Result, obj);
    return hasOwnProperty(native.GradientBorder, obj);
  }
};
export { BetaPill };