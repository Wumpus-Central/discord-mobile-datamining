// === Module 12060: SubmittingOverlay ===

// Module 12060 (SubmittingOverlay)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import createStyles from "createStyles" /* 4560 */;
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
  let obj = submitting(4296);
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
  obj = { withSpring: submitting(4974).withSpring, submitting, SUBTLE_SPRING: submitting(4978).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: null, children: null };
  const items = [submitting.style, closure_4().ellipsis, animatedStyle];
  obj.style = items;
  if (submitting) {
    submitting = tmp5(submitting(4991).Ellipsis, { variant: "active", size: "md" });
  }
  obj.children = submitting;
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
};