// === Module 8487: PremiumFeaturesBackground ===

// Module 8487 (PremiumFeaturesBackground)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import ColorConstants from "ColorConstants" /* 6938 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let closure_3 = ["premiumType", "opacity", "children", "style"];
const Gradients = ColorConstants.Gradients;
const PremiumTypes = PremiumConstants.PremiumTypes;
const jsx = Fragment.jsx;
let obj = { cardContainer: obj2 };
obj2 = { display: "flex", borderRadius: nativeDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let PREMIUM_TIER_0;
  let children;
  let num7;
  let opacity;
  let premiumType;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = num7(576);
  const cResult = obj.c(17);
  if (cResult[0] !== arg0) {
    ({ premiumType, opacity, children, style } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = premiumType;
    cResult[3] = tmp11;
    cResult[4] = style;
    cResult[5] = opacity;
    tmp8 = opacity;
    tmp7 = style;
    tmp6 = tmp11;
    tmp5 = premiumType;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  num7 = 1;
  if (undefined !== tmp8) {
    num7 = tmp8;
  }
  const tmp12 = closure_8();
  if (tmp5 === PremiumTypes.TIER_0) {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  if (cResult[6] === PREMIUM_TIER_0) {
    let tmp15;
    if (cResult[7] === num7) {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp7) {
      let tmp17;
      if (cResult[10] === tmp12.cardContainer) {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp4) {
        if (cResult[13] === tmp15) {
          if (cResult[14] === tmp6) {
            let tmp18;
            if (cResult[15] === tmp17) {
              tmp18 = cResult[16];
            }
            return tmp18;
          }
        }
      }
      LinearGradientDefault;
      const merged = Object.assign(tmp6);
      const tmp25 = <tmp21 style={tmp17} colors={tmp15} start={num7(1105).HorizontalGradient.START} end={num7(1105).HorizontalGradient.END}>{tmp4}</tmp21>;
      cResult[12] = tmp4;
      cResult[13] = tmp15;
      cResult[14] = tmp6;
      cResult[15] = tmp17;
      cResult[16] = tmp25;
      tmp18 = tmp25;
    }
    const items = [tmp12.cardContainer, tmp7];
    cResult[9] = tmp7;
    cResult[10] = tmp12.cardContainer;
    cResult[11] = items;
    tmp17 = items;
  }
  let mapped = PREMIUM_TIER_0;
  if (num7 < 1) {
    mapped = PREMIUM_TIER_0.map((item) => {
      const obj = _modDef683(item);
      const alphaResult = obj.alpha(num7);
      return alphaResult.hex();
    });
  }
  cResult[6] = PREMIUM_TIER_0;
  cResult[7] = num7;
  cResult[8] = mapped;
  tmp15 = mapped;
}) : ((opacity) => {
  let PREMIUM_TIER_0;
  let children;
  let style;
  let num = opacity.opacity;
  const premiumType = opacity.premiumType;
  if (num === undefined) {
    num = 1;
  }
  ({ children, style } = opacity);
  const merged = Object.assign(opacity, Object.assign({ premiumType: 0, opacity: 0, children: 0, style: 0 }));
  const tmp2 = closure_8();
  if (premiumType === PremiumTypes.TIER_0) {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((item) => {
      const obj = _modDef683(item);
      const alphaResult = obj.alpha(num);
      return alphaResult.hex();
    });
  }
  const items = [tmp2.cardContainer, style];
  LinearGradientDefault;
  const merged1 = Object.assign(merged);
  return <tmp6 style={items} colors={mapped} start={num(1105).HorizontalGradient.START} end={num(1105).HorizontalGradient.END}>{children}</tmp6>;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default tmp3;