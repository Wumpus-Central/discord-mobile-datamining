// === Module 12130: SubmittingOverlay ===

// Module 12130 (SubmittingOverlay)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4341 */;
import spring from "spring" /* 5024 */;
import springPresets from "springPresets" /* 5028 */;
import createStyles from "createStyles" /* 4605 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { ellipsis: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
obj.ellipsis = obj;
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  let obj = submitting(4341);
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[4]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp(tmp2[5]).SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: submitting(5024).withSpring, submitting, SUBTLE_SPRING: submitting(5028).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: null, children: null };
  const items = [submitting.style, closure_4().ellipsis, animatedStyle];
  obj.style = items;
  if (submitting) {
    submitting = jsx(submitting(5041).Ellipsis, { variant: "active", size: "md" });
  }
  obj.children = submitting;
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
};