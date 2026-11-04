// === Module 12606: SubmittingOverlay ===

// Module 12606 (SubmittingOverlay)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5771 */;
import springPresets from "springPresets" /* 5772 */;
import ButtonEllipsis from "ButtonEllipsis" /* 5781 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

const jsx = jsxProd.jsx;
const obj = { ellipsis: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" } };
let closure_4 = createStyles.createStyles(obj);
let closure_5 = { code: "(function SubmittingOverlayTsx1(){let[withSpring,submitting,SUBTLE_SPRING]=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};})" };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  const tmp = closure_4();
  items = [closure_5, spring_spring.withSpring, submitting, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class SubmittingOverlayTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  SubmittingOverlayTsx1.__closure = items1;
  SubmittingOverlayTsx1.__workletHash = 16951680167717;
  SubmittingOverlayTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(SubmittingOverlayTsx1);
  const obj2 = { style: null, children: null };
  const items2 = [submitting.style, tmp.ellipsis, animatedStyle];
  obj2.style = items2;
  if (submitting) {
    submitting = jsx(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
  }
  obj2.children = submitting;
  return jsx(_modDef1652.View, { style: null, children: null });
}