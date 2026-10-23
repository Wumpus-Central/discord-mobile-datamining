// === Module 16363: HexagonCampaignThemeLegal ===

// Module 16363 (HexagonCampaignThemeLegal)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5232 */;
import FastImageDefault from "FastImage" /* 5667 */;
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore" /* 15845 */;
import _modDef16364 from "module_16364" /* 16364 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HexagonCampaignConstants = fn(4994);
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_4, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: hasOwnProperty } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { legal: { textAlign: "center" }, legalWithLogo: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, logo: { width: 32, height: 32 }, legalText: { flex: 1 }, link: { textDecorationLine: "underline" } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignThemeLegal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignThemeLegal(animatedStyles) {
  const cResult = animatedStyles(576).c(20);
  animatedStyles = animatedStyles.animatedStyles;
  const showLogo = animatedStyles.showLogo;
  let legalWithLogo = closure_8();
  dependencyMap = tmp5;
  let headerPrimary;
  if (animatedStyles != null) {
    headerPrimary = animatedStyles.headerPrimary;
  }
  if (cResult[0] === headerPrimary) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === legalWithLogo.link) {
        let tmp7 = cResult[3];
      }
      let headerSecondary;
      if (animatedStyles != null) {
        headerSecondary = animatedStyles.headerSecondary;
      }
      const tmp10 = tmp4 ? legalWithLogo.legalText : legalWithLogo.legal;
      if (cResult[4] === headerSecondary) {
        if (cResult[5] === tmp10) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const intl = tmp(1128).intl;
          const obj2 = { nonPremiumEndDate, premiumEndDate, learnMoreHook: tmp7 };
          const formatResult = intl.format(tmp(1128).t.y2YmJv, obj2);
          cResult[7] = tmp7;
          cResult[8] = formatResult;
          let tmp12 = formatResult;
        } else {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === str) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === tmp12) {
                let tmp16 = cResult[13];
              }
              if (!tmp4) {
                return tmp16;
              } else {
                if (cResult[14] !== legalWithLogo.logo) {
                  const obj3 = { source: legalWithLogo(16364), style: legalWithLogo.logo, resizeMode: "contain", accessible: false };
                  const tmp24 = closure_6(legalWithLogo(5667), obj3);
                  cResult[14] = legalWithLogo.logo;
                  cResult[15] = tmp24;
                  let tmp20 = tmp24;
                  const tmp23 = legalWithLogo(5667);
                } else {
                  tmp20 = cResult[15];
                }
                if (cResult[16] === tmp16) {
                  if (cResult[17] === legalWithLogo.legalWithLogo) {
                  }
                }
                const obj4 = { style: legalWithLogo.legalWithLogo, children: null };
                let items = [tmp20, tmp16];
                obj4.children = items;
                const tmp28 = closure_7(View, obj4);
                cResult[16] = tmp16;
                legalWithLogo = legalWithLogo.legalWithLogo;
                cResult[17] = legalWithLogo;
                cResult[18] = tmp20;
                cResult[19] = tmp28;
              }
            }
          }
        }
        const obj5 = { animated: tmp5, variant: "text-xs/medium", color: str, style: tmp11, children: tmp12 };
        const tmp18 = closure_6(tmp(5232).Text, obj5);
        cResult[9] = tmp5;
        cResult[10] = str;
        cResult[11] = tmp11;
        cResult[12] = tmp12;
        cResult[13] = tmp18;
        tmp16 = tmp18;
      }
      const items1 = [headerSecondary, tmp10];
      cResult[4] = headerSecondary;
      cResult[5] = tmp10;
      cResult[6] = items1;
      tmp11 = items1;
    }
  }
  let headerPrimary1;
  if (animatedStyles != null) {
    headerPrimary1 = animatedStyles.headerPrimary;
  }
  function learnMoreHook(children, arg1) {
    const obj = { animated, variant: "text-xs/medium", color: "text-link", style: null, accessibilityRole: "link", onPress: null, children: null };
    let tmp5;
    if (animated) {
      let headerPrimary;
      if (animatedStyles != null) {
        headerPrimary = animatedStyles.headerPrimary;
      }
      const items = [headerPrimary, legalWithLogo.link];
      tmp5 = items;
    }
    obj.style = tmp5;
    obj.onPress = openHexagonCampaignLearnMore.openHexagonCampaignLearnMore;
    obj.children = children;
    return timestampProducer(Text_Text.Text, obj, arg1);
  }
  cResult[0] = headerPrimary1;
  cResult[1] = null != animatedStyles;
  cResult[2] = legalWithLogo.link;
  cResult[3] = learnMoreHook;
  tmp7 = learnMoreHook;
  let obj = animatedStyles(576);
}) : (function HexagonCampaignThemeLegal(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  let flag = animatedStyles.showLogo;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  importDefault = tmp;
  dependencyMap = tmp2;
  let obj = { animated: null != animatedStyles, variant: "text-xs/medium", color: "text-muted", style: null, children: null };
  let headerSecondary;
  if (animatedStyles != null) {
    headerSecondary = animatedStyles.headerSecondary;
  }
  let items = [headerSecondary, flag ? tmp.legalText : tmp.legal];
  obj.style = items;
  const intl = tmp4(1128).intl;
  obj.children = intl.format(animatedStyles(1128).t.y2YmJv, {
    nonPremiumEndDate,
    premiumEndDate,
    learnMoreHook(children, arg1) {
      const obj = { animated, variant: "text-xs/medium", color: "text-link", style: null, accessibilityRole: "link", onPress: null, children: null };
      let tmp5;
      if (animated) {
        let headerPrimary;
        if (animatedStyles != null) {
          headerPrimary = animatedStyles.headerPrimary;
        }
        const items = [headerPrimary, link.link];
        tmp5 = items;
      }
      obj.style = tmp5;
      obj.onPress = openHexagonCampaignLearnMore.openHexagonCampaignLearnMore;
      obj.children = children;
      return timestampProducer(Text_Text.Text, obj, arg1);
    }
  });
  const tmp3Result = closure_6(animatedStyles(5232).Text, obj);
  let tmp8 = tmp3Result;
  if (flag) {
    const obj3 = { style: tmp.legalWithLogo, children: null };
    const obj4 = { source: _modDef16364, style: tmp.logo, resizeMode: "contain", accessible: false };
    const items1 = [closure_6(FastImageDefault, obj4), tmp3Result];
    obj3.children = items1;
    tmp8 = closure_7(View, obj3);
  }
  return tmp8;
});