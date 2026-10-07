// discord_app/components_native/premium/PremiumTierCard.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../_runtime/05612_LinearGradient.js";
import Card from "../../design/components/Card/native/Card.native.tsx";
import _modDef6955 from "../../../_runtime/metro/06955__.js";
import _modDef6956 from "../../../_runtime/metro/06956__.js";
import _modDef7749 from "../../../_runtime/metro/07749__.js";
import _modDef10460 from "../../../_runtime/metro/10460__.js";
import _modDef13392 from "../../../_runtime/metro/13392__.js";
import _modDef13393 from "../../../_runtime/metro/13393__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const getPremiumGradientColor = fn(6951).getPremiumGradientColor;
const PremiumTypes = fn(1379).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  header: { marginTop: 24, padding: 16 },
  textLogoTier0: { width: 158, height: 32 },
  textLogoTier1: { width: 185, height: 32 },
  textLogoTier2: { width: 80, height: 32 },
  wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 },
  wumpusLogoTier0: { width: 83, height: 100 },
  wumpusLogoTier1: { width: 86, height: 100 },
  wumpusLogoTier2: { width: 133, height: 100 },
  body: {
    padding: 16,
    borderBottomRightRadius: nativeDefault.radii.xs,
    borderBottomLeftRadius: nativeDefault.radii.xs,
  },
};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = {
  padding: 16,
  borderBottomRightRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumType) => {
      const cResult = premiumType(576).c(50);
      premiumType = premiumType.premiumType;
      ({ children, style } = premiumType);
      const tmp2 = closure_10();
      importDefault = tmp2;
      if (cResult[0] !== premiumType) {
        const fn = function n() {
          if (PremiumTypes.TIER_0 === premiumType) {
            return _modDef13392;
          } else if (PremiumTypes.TIER_1 === premiumType) {
            return _modDef13393;
          } else if (PremiumTypes.TIER_2 === premiumType) {
            return _modDef7749;
          }
        };
        cResult[0] = premiumType;
        cResult[1] = fn;
      }
      if (cResult[2] !== premiumType) {
        class E {
          constructor() {
            tmp = premiumType;
            tmp2 = PremiumTypes;
            if (PremiumTypes.TIER_0 === premiumType) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              return closure_1(closure_2[12]);
            } else if (tmp2.TIER_1 === tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              return closure_1(closure_2[13]);
            } else if (tmp2.TIER_2 === tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              return closure_1(closure_2[14]);
            } else {
              return;
            }
          }
        }
        cResult[2] = premiumType;
        cResult[3] = E;
      } else {
        class E {
          constructor() {
            tmp = premiumType;
            tmp2 = PremiumTypes;
            if (PremiumTypes.TIER_0 === premiumType) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              return closure_1(closure_2[12]);
            } else if (tmp2.TIER_1 === tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              return closure_1(closure_2[13]);
            } else if (tmp2.TIER_2 === tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              return closure_1(closure_2[14]);
            } else {
              return;
            }
          }
        }
      }
      if (cResult[4] === premiumType) {
        class E {
          constructor() {
            tmp = premiumType;
            tmp2 = PremiumTypes;
            if (PremiumTypes.TIER_0 === premiumType) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              return closure_1(closure_2[12]);
            } else if (tmp2.TIER_1 === tmp) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              return closure_1(closure_2[13]);
            } else if (tmp2.TIER_2 === tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              return closure_1(closure_2[14]);
            } else {
              return;
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
      const obj = premiumType(576);
    }
  : (premiumType) => {
      premiumType = premiumType.premiumType;
      ({ children, style } = premiumType);
      const tmp = closure_10();
      const obj = {
        style: tmp.header,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: getPremiumGradientColor(premiumType),
        children: null,
      };
      const obj2 = {
        accessible: true,
        accessibilityLabel: null,
        accessibilityRole: "header",
        style: null,
        source: null,
      };
      const tmp7 = LinearGradientDefault;
      obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
      if (PremiumTypes.TIER_0 === premiumType) {
        let textLogoTier2 = tmp.textLogoTier0;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        textLogoTier2 = tmp.textLogoTier1;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        textLogoTier2 = tmp.textLogoTier2;
      }
      obj2.style = textLogoTier2;
      if (PremiumTypes.TIER_0 === premiumType) {
        let tmp5Result = _modDef13392;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        tmp5Result = _modDef13393;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        tmp5Result = _modDef7749;
      }
      obj2.source = tmp5Result;
      obj.children = React5(React4, obj2);
      const items = [React5(tmp7, obj), ,];
      const items1 = [tmp.wumpusLogo];
      if (PremiumTypes.TIER_0 === premiumType) {
        let wumpusLogoTier2 = tmp.wumpusLogoTier0;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        wumpusLogoTier2 = tmp.wumpusLogoTier1;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        wumpusLogoTier2 = tmp.wumpusLogoTier2;
      }
      const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
      items1[1] = wumpusLogoTier2;
      if (PremiumTypes.TIER_0 === premiumType) {
        let tmp5Result2 = _modDef6955;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        tmp5Result2 = _modDef6956;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        tmp5Result2 = _modDef10460;
      }
      const obj5 = { children: null };
      obj4.source = tmp5Result2;
      items[1] = React5(React4, obj4);
      items[2] = React5(React3, { style: tmp.body, children });
      obj5.children = items;
      const children1 = options(closure_1_8, obj5);
      return React5(Card.Card, { variant: "surface-high", style, children: children1 });
    };
