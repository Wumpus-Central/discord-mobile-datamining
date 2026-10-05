// === Module 11674: SubmittingOverlay ===

// Module 11674 (SubmittingOverlay)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp3;

let obj2;
const jsx = Fragment.jsx;
let obj = { ellipsis: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
let closure_4 = createStyles.createStyles(obj);
const __initData = { code: "function SubmittingOverlayTsx1(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function SubmittingOverlayTsx2(){const{withSpring,submitting,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(submitting?1:0,SUBTLE_SPRING,'animate-always')};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((submitting) => {
  let obj = submitting(576);
  const cResult = obj.c(9);
  const tmp = submitting;
  submitting = submitting.submitting;
  const style = submitting.style;
  const tmp4 = closure_4();
  const obj2 = submitting(4612);
  class S {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[6]);
      num = 0;
      withSpring = tmp3.withSpring;
      if (submitting) {
        num = 1;
      }
      obj = { opacity: withSpring(num, tmp(tmp2[7]).SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  S.__closure = { withSpring: submitting(5597).withSpring, submitting, SUBTLE_SPRING: submitting(5598).SUBTLE_SPRING };
  S.__workletHash = 17050905766844;
  S.__initData = __initData;
  ({ withSpring: submitting(5597).withSpring, submitting, SUBTLE_SPRING: submitting(5598).SUBTLE_SPRING });
  const animatedStyle = obj2.useAnimatedStyle(S);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      let tmp6;
      let tmp7;
      if (cResult[2] === tmp4.ellipsis) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== submitting) {
        const tmp8 = submitting && jsx(tmp(5609).Ellipsis, { variant: "active", size: "md" });
        let num = 4;
        cResult[4] = submitting;
        cResult[5] = tmp8;
        tmp7 = tmp8;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const tmp13 = jsx(ReanimatedRexportDefault.View, { style: tmp6, children: tmp7 });
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      class S {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[6]);
          num = 0;
          withSpring = tmp3.withSpring;
          if (submitting) {
            num = 1;
          }
          obj = { opacity: withSpring(num, tmp(tmp2[7]).SUBTLE_SPRING, "animate-always") };
          return obj;
        }
      }
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const items = [style, tmp4.ellipsis, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = tmp4.ellipsis;
  cResult[3] = items;
  tmp6 = items;
}) : ((submitting) => {
  submitting = submitting.submitting;
  const style = submitting.style;
  const tmp = closure_4();
  let obj = submitting(4612);
  const fn = function u() {
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (submitting) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  fn.__closure = { withSpring: submitting(5597).withSpring, submitting, SUBTLE_SPRING: submitting(5598).SUBTLE_SPRING };
  fn.__workletHash = 15672049349439;
  fn.__initData = __initData2;
  ({ withSpring: submitting(5597).withSpring, submitting, SUBTLE_SPRING: submitting(5598).SUBTLE_SPRING });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [style, tmp.ellipsis, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  if (submitting) {
    submitting = jsx(tmp2(5609).Ellipsis, { variant: "active", size: "md" });
  }
  return <View style={items}>{submitting}</View>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/SubmittingOverlay.tsx");

export const SubmittingOverlay = tmp2;