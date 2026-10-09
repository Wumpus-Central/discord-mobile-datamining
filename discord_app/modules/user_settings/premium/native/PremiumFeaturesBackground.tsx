// === Module 9015: PremiumFeaturesBackground ===

// Module 9015 (PremiumFeaturesBackground)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["premiumType", "opacity", "children", "style"];
const Gradients = fn(7145).Gradients;
const PremiumTypes = fn(1392).PremiumTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { cardContainer: { display: "flex", borderRadius: nativeDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { display: "flex", borderRadius: nativeDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesBackground(arg0) {
  const cResult = num7(576).c(17);
  if (cResult[0] !== arg0) {
    ({ premiumType, opacity, children, style } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = premiumType;
    cResult[3] = tmp11;
    cResult[4] = style;
    cResult[5] = opacity;
    let tmp8 = opacity;
    let tmp7 = style;
    let tmp6 = tmp11;
    let tmp5 = premiumType;
    let tmp4 = children;
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
    let PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  if (cResult[6] === PREMIUM_TIER_0) {
    if (cResult[7] === num7) {
      let tmp15 = cResult[8];
    }
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp12.cardContainer) {
        let tmp17 = cResult[11];
      }
      if (cResult[12] === tmp4) {
        if (cResult[13] === tmp15) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp17) {
              let tmp18 = cResult[16];
            }
            return tmp18;
          }
        }
      }
      const obj2 = { style: tmp17, colors: tmp15, start: tmp(1105).HorizontalGradient.START, end: tmp(1105).HorizontalGradient.END };
      const merged = Object.assign(tmp6);
      obj2.children = tmp4;
      const tmp25 = jsx(LinearGradientDefault, { style: tmp17, colors: tmp15, start: tmp(1105).HorizontalGradient.START, end: tmp(1105).HorizontalGradient.END });
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
      return _modDef683(item).alpha(num7).hex();
    });
  }
  cResult[6] = PREMIUM_TIER_0;
  cResult[7] = num7;
  cResult[8] = mapped;
  tmp15 = mapped;
  let obj = num7(576);
}) : (function PremiumFeaturesBackground(opacity) {
  let num = opacity.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ children, style } = opacity);
  const merged = Object.assign(opacity, Object.assign({ premiumType: 0, opacity: 0, children: 0, style: 0 }));
  if (opacity.premiumType === PremiumTypes.TIER_0) {
    let PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((item) => {
      const obj = _modDef683(item);
      return _modDef683(item).alpha(num).hex();
    });
  }
  let obj = { style: null, colors: mapped, start: null, end: null };
  const items = [closure_8().cardContainer, style];
  obj.style = items;
  const tmp2 = closure_8();
  obj.start = num(1105).HorizontalGradient.START;
  obj.end = num(1105).HorizontalGradient.END;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(LinearGradientDefault, { style: null, colors: mapped, start: null, end: null });
});