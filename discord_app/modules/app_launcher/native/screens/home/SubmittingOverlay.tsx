// === Module 12211: SubmittingOverlay ===

// Module 12211 (SubmittingOverlay)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4376 */;
import spring from "spring" /* 5061 */;
import springPresets from "springPresets" /* 5065 */;
import createStyles from "createStyles" /* 4640 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { ellipsis: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" } };
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  const tmp = closure_4();
  const tmp2 = submitting;
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[4]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, tmp(tmp2[5]).SUBTLE_SPRING, "animate-always") };
      return obj1;
    }
  }
  let obj = submitting(4376);
  S.__closure = { withSpring: submitting(5061).withSpring, submitting, SUBTLE_SPRING: submitting(5065).SUBTLE_SPRING };
  S.__workletHash = 492443733468;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  const obj3 = { style: null, children: null };
  const items = [submitting.style, tmp.ellipsis, animatedStyle];
  obj3.style = items;
  if (submitting) {
    submitting = jsx(tmp2(5078).Ellipsis, { variant: "active", size: "md" });
  }
  obj3.children = submitting;
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
};