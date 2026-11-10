// === Module 17359: HexagonCampaignThemeLegal ===

// Module 17359 (HexagonCampaignThemeLegal)
import nativeDefault from "native" /* 575 */;
import _modDef4413 from "module_4413" /* 4413 */;
import Text_Text from "Text/Text" /* 5753 */;
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore" /* 16825 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HexagonCampaignConstants = fn(5167);
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_4, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: hasOwnProperty } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
const obj2 = { legal: { textAlign: "center" }, legalWithLogo: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, logo: { width: 32, height: 32 }, legalText: { flex: 1 }, link: { textDecorationLine: "underline" } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignThemeLegal.tsx");

export default function HexagonCampaignThemeLegal(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  let flag = animatedStyles.showLogo;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  importDefault = tmp;
  dependencyMap = tmp2;
  let obj = { animated: null != animatedStyles, variant: "body-xs/medium", color: "text-muted", style: null, children: null };
  let headerSecondary;
  if (animatedStyles != null) {
    headerSecondary = animatedStyles.headerSecondary;
  }
  items = [headerSecondary, flag ? tmp.legalText : tmp.legal];
  obj.style = items;
  const intl = animatedStyles(1113).intl;
  obj.children = intl.format(_modDef4413.y2YmJv, {
    nonPremiumEndDate,
    premiumEndDate,
    learnMoreHook(children, arg1) {
      const obj = { animated, variant: "body-xs/medium", color: "text-link", style: null, accessibilityRole: "link", onPress: null, children: null };
      let tmp5;
      if (animated) {
        let headerPrimary;
        if (animatedStyles != null) {
          headerPrimary = animatedStyles.headerPrimary;
        }
        items = [headerPrimary, link.link];
        tmp5 = items;
      }
      obj.style = tmp5;
      obj.onPress = openHexagonCampaignLearnMore.openHexagonCampaignLearnMore;
      obj.children = children;
      return timestampProducer(Text_Text.Text, obj, arg1);
    }
  });
  const tmp3Result = closure_6(animatedStyles(5753).Text, obj);
  let tmp9 = tmp3Result;
  if (flag) {
    const obj3 = { style: tmp.legalWithLogo, children: null };
    const obj4 = { source: tmp7(17360), style: tmp.logo, resizeMode: "contain", accessible: false };
    const items1 = [closure_6(tmp7(5844), obj4), tmp3Result];
    obj3.children = items1;
    tmp9 = closure_7(View, obj3);
    const tmp7Result = tmp7(5844);
  }
  return tmp9;
};