// discord_app/modules/hexagon_campaign/native/HexagonCampaignThemeLegal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4280 from "../HexagonCampaign.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import openHexagonCampaignLearnMore from "openHexagonCampaignLearnMore.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HexagonCampaignConstants = fn(5029);
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_4, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: hasOwnProperty } =
  HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = {
  legal: { textAlign: "center" },
  legalWithLogo: { flexDirection: "row", gap: nativeDefault.space.PX_8 },
  logo: { width: 32, height: 32 },
  legalText: { flex: 1 },
  link: { textDecorationLine: "underline" },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignThemeLegal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HexagonCampaignThemeLegal(animatedStyles) {
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
              const intl = tmp(1125).intl;
              const obj2 = { nonPremiumEndDate, premiumEndDate, learnMoreHook: tmp7 };
              const formatResult = intl.format(legalWithLogo(4280).y2YmJv, obj2);
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
                    let tmp17 = cResult[13];
                  }
                  if (!tmp4) {
                    return tmp17;
                  } else {
                    if (cResult[14] !== legalWithLogo.logo) {
                      const obj3 = {
                        source: legalWithLogo(16654),
                        style: legalWithLogo.logo,
                        resizeMode: "contain",
                        accessible: false,
                      };
                      const tmp25 = closure_6(legalWithLogo(5705), obj3);
                      cResult[14] = legalWithLogo.logo;
                      cResult[15] = tmp25;
                      let tmp21 = tmp25;
                      const tmp24 = legalWithLogo(5705);
                    } else {
                      tmp21 = cResult[15];
                    }
                    if (cResult[16] === tmp17) {
                      if (cResult[17] === legalWithLogo.legalWithLogo) {
                      }
                    }
                    const obj4 = { style: legalWithLogo.legalWithLogo, children: null };
                    let items = [tmp21, tmp17];
                    obj4.children = items;
                    const tmp29 = closure_7(View, obj4);
                    cResult[16] = tmp17;
                    legalWithLogo = legalWithLogo.legalWithLogo;
                    cResult[17] = legalWithLogo;
                    cResult[18] = tmp21;
                    cResult[19] = tmp29;
                  }
                }
              }
            }
            const obj5 = { animated: tmp5, variant: "text-xs/medium", color: str, style: tmp11, children: tmp12 };
            const tmp19 = closure_6(tmp(5270).Text, obj5);
            cResult[9] = tmp5;
            cResult[10] = str;
            cResult[11] = tmp11;
            cResult[12] = tmp12;
            cResult[13] = tmp19;
            tmp17 = tmp19;
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
        const obj = {
          animated,
          variant: "text-xs/medium",
          color: "text-link",
          style: null,
          accessibilityRole: "link",
          onPress: null,
          children: null,
        };
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
    }
  : function HexagonCampaignThemeLegal(animatedStyles) {
      animatedStyles = animatedStyles.animatedStyles;
      let flag = animatedStyles.showLogo;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_8();
      importDefault = tmp;
      dependencyMap = tmp2;
      let obj = {
        animated: null != animatedStyles,
        variant: "text-xs/medium",
        color: "text-muted",
        style: null,
        children: null,
      };
      let headerSecondary;
      if (animatedStyles != null) {
        headerSecondary = animatedStyles.headerSecondary;
      }
      let items = [headerSecondary, flag ? tmp.legalText : tmp.legal];
      obj.style = items;
      const intl = animatedStyles(1125).intl;
      obj.children = intl.format(_modDef4280.y2YmJv, {
        nonPremiumEndDate,
        premiumEndDate,
        learnMoreHook(children, arg1) {
          const obj = {
            animated,
            variant: "text-xs/medium",
            color: "text-link",
            style: null,
            accessibilityRole: "link",
            onPress: null,
            children: null,
          };
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
        },
      });
      const tmp3Result = closure_6(animatedStyles(5270).Text, obj);
      let tmp9 = tmp3Result;
      if (flag) {
        const obj3 = { style: tmp.legalWithLogo, children: null };
        const obj4 = { source: tmp7(16654), style: tmp.logo, resizeMode: "contain", accessible: false };
        const items1 = [closure_6(tmp7(5705), obj4), tmp3Result];
        obj3.children = items1;
        tmp9 = closure_7(View, obj3);
        const tmp7Result = tmp7(5705);
      }
      return tmp9;
    };
