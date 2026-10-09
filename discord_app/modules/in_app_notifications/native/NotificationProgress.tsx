// === Module 12570: NotificationProgress ===

// Module 12570 (NotificationProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { progress: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 }, progressContainerBottom: { width: "100%", position: "absolute", bottom: -1 } };
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent===\"number\"?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
const __initData2 = { code: "function NotificationProgressTsx2(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}" };
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProgressAnimation(percent) {
  const cResult = c.c(3);
  [width, closure_2] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(nativeEvent) {
      return closure_2(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  const fn2 = function y() {
    value = percent;
    if (typeof percent !== "number") {
      value = percent.get();
    }
    const obj2 = { transform: null };
    const items = [{ translateX: first * (value / 100) - first }];
    obj2.transform = items;
    return obj2;
  };
  fn2.__closure = { percent, width };
  fn2.__workletHash = 7122786095468;
  fn2.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn2);
  if (cResult[1] !== animatedStyle) {
    let obj2 = { animatedStyles: animatedStyle, handleLayout: first1 };
    cResult[1] = animatedStyle;
    cResult[2] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function useProgressAnimation(percent) {
  [width, closure_2] = noop.useState(0);
  const obj = { animatedStyles: null, handleLayout: null };
  const callback = noop.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
  const fn = function s() {
    value = percent;
    if (typeof percent !== "number") {
      value = percent.get();
    }
    const obj2 = { transform: null };
    const items = [{ translateX: first * (value / 100) - first }];
    obj2.transform = items;
    return obj2;
  };
  fn.__closure = { percent, width };
  fn.__workletHash = 16319973237775;
  fn.__initData = __initData2;
  obj.animatedStyles = ReanimatedRexport.useAnimatedStyle(fn);
  obj.handleLayout = callback;
  return obj;
});
ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationProgress(percent) {
  const cResult = c.c(7);
  const tmp3 = closure_7();
  ({ animatedStyles, handleLayout } = closure_10(percent.percent));
  if (cResult[0] === animatedStyles) {
    if (cResult[1] === tmp3.progress) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === handleLayout) {
      if (cResult[4] === tmp3.progressContainerBottom) {
        if (cResult[5] === tmp5) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { onLayout: handleLayout, style: tmp3.progressContainerBottom, children: tmp5 };
    const tmp10 = <View onLayout={handleLayout} style={tmp3.progressContainerBottom}>{tmp5}</View>;
    cResult[3] = handleLayout;
    cResult[4] = tmp3.progressContainerBottom;
    cResult[5] = tmp5;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
  const obj3 = { style: null };
  const items = [tmp3.progress, animatedStyles];
  obj3.style = items;
  const tmp6 = jsx(ReanimatedRexportDefault.View, { style: null });
  cResult[0] = animatedStyles;
  cResult[1] = tmp3.progress;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const tmp4 = closure_10(percent.percent);
}) : (function NotificationProgress(percent) {
  const tmp = closure_7();
  const tmp2 = closure_10(percent.percent);
  const obj = { onLayout: tmp2.handleLayout, style: tmp.progressContainerBottom, children: null };
  const obj2 = { style: null };
  const items = [tmp.progress, tmp2.animatedStyles];
  obj2.style = items;
  obj.children = jsx(ReanimatedRexportDefault.View, { style: null });
  return <View onLayout={tmp2.handleLayout} style={tmp.progressContainerBottom}>{null}</View>;
});