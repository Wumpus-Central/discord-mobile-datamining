// discord_app/modules/conjure/publish/native/ConjurePublishStatusBadge.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ConjureHeaderIconButton from "../../shared/native/ConjureHeaderIconButton.tsx";
import ProgressCircleDefault from "../../../premium/native/components/ProgressCircle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = { dot: null, spinner: null };
let size = {
  width: fn(12384).CONJURE_HEADER_BADGE_SIZE,
  height: fn(12384).CONJURE_HEADER_BADGE_SIZE,
  borderRadius: fn(12384).CONJURE_HEADER_BADGE_SIZE / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.dot = size;
obj2.spinner = { width: 12, height: 12 };
let closure_6 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function ConjurePublishStatusBadgeTsx1(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+"deg"}]};}',
};
const __initData2 = {
  code: 'function ConjurePublishStatusBadgeTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+"deg"}]};}',
};
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishSpinner() {
      const cResult = sharedValue(576).c(12);
      const tmp4 = closure_6();
      let obj = sharedValue(576);
      const tmp = sharedValue;
      const token = sharedValue(5289).useToken(nativeDefault.colors.BACKGROUND_BRAND);
      let obj2 = sharedValue(5289);
      sharedValue = sharedValue(5086).useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const fn = function n() {
          const obj = ReanimatedRexport;
          const obj2 = timing;
          const result = sharedValue.set(
            obj.withRepeat(obj2.withTiming(360, { duration: 800, easing: ReanimatedRexport.Easing.linear }), -1, false),
          );
          return () => sharedValue(dependencyMap[9]).cancelAnimation(closure_1_0);
        };
        let items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp9 = items;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      const obj3 = sharedValue(5086);
      const fn2 = function p() {
        const obj = { transform: null };
        const items = [{ rotate: "" + sharedValue.get() + "deg" }];
        obj.transform = items;
        return obj;
      };
      fn2.__closure = { rotation: sharedValue };
      fn2.__workletHash = 16804123436708;
      fn2.__initData = __initData;
      const animatedStyle = tmp(5086).useAnimatedStyle(fn2);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === tmp4.spinner) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] === token) {
          if (cResult[7] === tmp4.spinner) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] === tmp12) {
            if (cResult[10] === tmp13) {
              let tmp16 = cResult[11];
            }
            return tmp16;
          }
          const obj4 = { style: tmp12, children: tmp13 };
          const tmp18 = jsx(ReanimatedRexportDefault.View, { style: tmp12, children: tmp13 });
          cResult[9] = tmp12;
          cResult[10] = tmp13;
          cResult[11] = tmp18;
          tmp16 = tmp18;
        }
        const obj5 = { percent: 70, size: 12, strokeWidth: 2, color: token, style: tmp4.spinner };
        const tmp15 = jsx(ProgressCircleDefault, {
          percent: 70,
          size: 12,
          strokeWidth: 2,
          color: token,
          style: tmp4.spinner,
        });
        cResult[6] = token;
        cResult[7] = tmp4.spinner;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const items1 = [tmp4.spinner, animatedStyle];
      cResult[3] = animatedStyle;
      cResult[4] = tmp4.spinner;
      cResult[5] = items1;
      tmp12 = items1;
      const tmpResult = tmp(5086);
    }
  : function ConjurePublishSpinner() {
      const tmp = closure_6();
      const token = sharedValue(5289).useToken(nativeDefault.colors.BACKGROUND_BRAND);
      let obj = sharedValue(5289);
      sharedValue = sharedValue(5086).useSharedValue(0);
      let items = [sharedValue];
      const effect = noop.useEffect(() => {
        const obj = ReanimatedRexport;
        const obj2 = timing;
        const result = sharedValue.set(
          obj.withRepeat(obj2.withTiming(360, { duration: 800, easing: ReanimatedRexport.Easing.linear }), -1, false),
        );
        return () => sharedValue(dependencyMap[9]).cancelAnimation(closure_1_0);
      }, items);
      let obj2 = sharedValue(5086);
      const fn = function _() {
        const obj = { transform: null };
        const items = [{ rotate: "" + sharedValue.get() + "deg" }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = { rotation: sharedValue };
      fn.__workletHash = 12889163918279;
      fn.__initData = __initData2;
      const animatedStyle = sharedValue(5086).useAnimatedStyle(fn);
      const obj4 = {
        style: null,
        children: jsx(ProgressCircleDefault, {
          percent: 70,
          size: 12,
          strokeWidth: 2,
          color: token,
          style: tmp.spinner,
        }),
      };
      const items1 = [tmp.spinner, animatedStyle];
      obj4.style = items1;
      return jsx(ReanimatedRexportDefault.View, {
        style: null,
        children: jsx(ProgressCircleDefault, {
          percent: 70,
          size: 12,
          strokeWidth: 2,
          color: token,
          style: tmp.spinner,
        }),
      });
    };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishStatusBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishStatusBadge(indicator) {
      const cResult = c.c(3);
      indicator = indicator.indicator;
      const tmp2 = closure_6();
      if (cResult[0] === indicator) {
        if (cResult[1] === tmp2) {
          return cResult[2];
        }
      }
      if ("publishing" === indicator) {
        let tmp5 = <closure_9 />;
      } else {
        const obj2 = { style: tmp2.dot };
        tmp5 = <View style={tmp2.dot} />;
      }
      cResult[0] = indicator;
      cResult[1] = tmp2;
      cResult[2] = tmp5;
    }
  : function ConjurePublishStatusBadge(indicator) {
      if ("publishing" === indicator.indicator) {
        let tmp4 = <closure_9 />;
      } else {
        const obj = { style: tmp.dot };
        tmp4 = <View style={tmp.dot} />;
      }
      return tmp4;
    };
export function conjurePublishBadgeSize(indicator) {
  let num = 12;
  if ("publishing" !== indicator) {
    num = ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE;
  }
  return num;
}
