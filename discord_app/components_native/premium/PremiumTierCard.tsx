// === Module 13391: PremiumTierCard ===

// Module 13391 (PremiumTierCard)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import Card_Card from "Card/Card" /* 6002 */;
import ColorConstants from "ColorConstants" /* 6951 */;
import AssetRegistryDefault from "AssetRegistry" /* 6955 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6956 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 7749 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10460 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13392 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13393 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, premiumType;

let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
const getPremiumGradientColor = ColorConstants.getPremiumGradientColor;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { header: { marginTop: 24, padding: 16 }, textLogoTier0: { width: 158, height: 32 }, textLogoTier1: { width: 185, height: 32 }, textLogoTier2: { width: 80, height: 32 }, wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 }, wumpusLogoTier0: { width: 83, height: 100 }, wumpusLogoTier1: { width: 86, height: 100 }, wumpusLogoTier2: { width: 133, height: 100 }, body: obj2 };
obj2 = { padding: 16, borderBottomRightRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs };
let closure_10 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  let children;
  let closure_1;
  let style;
  const obj = premiumType(576);
  const cResult = obj.c(50);
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp2 = closure_10();
  importDefault = tmp2;
  if (cResult[0] !== premiumType) {
    const fn = function n() {
      if (PremiumTypes.TIER_0 === premiumType) {
        return AssetRegistryDefault5;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        return AssetRegistryDefault6;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        return AssetRegistryDefault3;
      }
    };
    cResult[0] = premiumType;
    cResult[1] = fn;
  }
  if (cResult[2] !== premiumType) {
    class E {
      constructor() {
        if (PremiumTypes.TIER_0 === premiumType) {
          return AssetRegistryDefault;
        } else if (PremiumTypes.TIER_1 === premiumType) {
          return AssetRegistryDefault2;
        } else if (PremiumTypes.TIER_2 === premiumType) {
          return AssetRegistryDefault4;
        }
      }
    }
    cResult[2] = premiumType;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        if (PremiumTypes.TIER_0 === premiumType) {
          return AssetRegistryDefault;
        } else if (PremiumTypes.TIER_1 === premiumType) {
          return AssetRegistryDefault2;
        } else if (PremiumTypes.TIER_2 === premiumType) {
          return AssetRegistryDefault4;
        }
      }
    }
  }
  if (cResult[4] === premiumType) {
    class E {
      constructor() {
        if (PremiumTypes.TIER_0 === premiumType) {
          return AssetRegistryDefault;
        } else if (PremiumTypes.TIER_1 === premiumType) {
          return AssetRegistryDefault2;
        } else if (PremiumTypes.TIER_2 === premiumType) {
          return AssetRegistryDefault4;
        }
      }
    }
  }
  const fn2 = function b() {
    if (PremiumTypes.TIER_0 === premiumType) {
      return closure_1.textLogoTier0;
    } else if (PremiumTypes.TIER_1 === premiumType) {
      return closure_1.textLogoTier1;
    } else if (PremiumTypes.TIER_2 === premiumType) {
      return closure_1.textLogoTier2;
    }
  };
  cResult[4] = premiumType;
  cResult[5] = tmp2.textLogoTier0;
  cResult[6] = tmp2.textLogoTier1;
  cResult[7] = tmp2.textLogoTier2;
  cResult[8] = fn2;
}) : ((premiumType) => {
  let children;
  let obj2;
  let obj3;
  let style;
  let textLogoTier2;
  let tmp5Result;
  let tmp5Result2;
  let wumpusLogoTier2;
  premiumType = premiumType.premiumType;
  ({ children, style } = premiumType);
  const tmp = closure_10();
  const obj = { style: tmp.header, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: getPremiumGradientColor(premiumType), children: metroImportDefault(React3, obj2) };
  const tmp7 = LinearGradientDefault;
  obj2 = { accessible: true, accessibilityLabel: obj3.getPremiumTypeDisplayName(premiumType), accessibilityRole: "header", style: textLogoTier2, source: tmp5Result };
  obj3 = PremiumUtils;
  if (PremiumTypes.TIER_0 === premiumType) {
    textLogoTier2 = tmp.textLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    textLogoTier2 = tmp.textLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    textLogoTier2 = tmp.textLogoTier2;
  }
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result = AssetRegistryDefault5;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result = AssetRegistryDefault6;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result = AssetRegistryDefault3;
  }
  const items = [metroImportDefault(tmp7, obj), , ];
  const items1 = [tmp.wumpusLogo, ];
  if (PremiumTypes.TIER_0 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier0;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier1;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    wumpusLogoTier2 = tmp.wumpusLogoTier2;
  }
  const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: tmp5Result2 };
  items1[1] = wumpusLogoTier2;
  if (PremiumTypes.TIER_0 === premiumType) {
    tmp5Result2 = AssetRegistryDefault;
  } else if (PremiumTypes.TIER_1 === premiumType) {
    tmp5Result2 = AssetRegistryDefault2;
  } else if (PremiumTypes.TIER_2 === premiumType) {
    tmp5Result2 = AssetRegistryDefault4;
  }
  const obj5 = { children: items };
  items[1] = metroImportDefault(React3, obj4);
  const obj6 = { style: tmp.body, children };
  items[2] = metroImportDefault(_false, obj6);
  const children1 = React4(metroImportAll, obj5);
  return metroImportDefault(Card_Card.Card, { variant: "surface-high", style, children: children1 });
});
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default tmp5;