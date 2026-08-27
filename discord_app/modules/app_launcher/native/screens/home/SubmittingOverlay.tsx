// === Module 11549: SubmittingOverlay ===

// Module 11549 (SubmittingOverlay)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import _modDef4185 from "module_4185" /* 4185 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const jsx = jsxProd.jsx;
let obj = { ellipsis: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
let closure_5 = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const result = set.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = function SubmittingOverlay(submitting) {
  submitting = submitting.submitting;
  let obj = submitting(4185);
  class S {
    constructor() {
      tmp = submitting;
      tmp2 = closure_1_2;
      obj = submitting(closure_1_2[4]);
      num = 0;
      if (submitting) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, tmp(tmp2[5]).SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  obj = { withSpring: submitting(4879).withSpring, submitting, SUBTLE_SPRING: submitting(4883).SUBTLE_SPRING };
  S.__closure = obj;
  S.__workletHash = 492443733468;
  S.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: items, children: null };
  items = [submitting.style, callback().ellipsis, animatedStyle];
  if (submitting) {
    submitting = tmp5(submitting(4896).Ellipsis, { variant: "active", size: "md" });
  }
  obj[1] = submitting;
  return jsx(_modDef4185.View, { style: items, children: null });
};