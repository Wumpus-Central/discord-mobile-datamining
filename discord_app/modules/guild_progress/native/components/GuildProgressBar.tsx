// === Module 13792: GuildProgressBar ===

// Module 13792 (GuildProgressBar)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { wrapper: { position: "relative", backgroundColor: fn(12130).PROGRESS_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xs, height: 8 }, progress: null };
let obj3 = { position: "relative", backgroundColor: fn(12130).PROGRESS_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xs, height: 8 };
obj2.progress = { position: "absolute", height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles.createStyles(obj2);
const __initData = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const __initData2 = { code: "function GuildProgressBarTsx2(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const ReactCompilerGating = fn(558);
let obj4 = { position: "absolute", height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.xs };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((percent) => {
  const cResult = percent(576).c(13);
  percent = percent.percent;
  const style = percent.style;
  const tmp4 = closure_6();
  const obj = percent(576);
  const tmp = percent;
  const sharedValue = percent(4612).useSharedValue(0);
  if (cResult[0] === percent) {
    if (cResult[1] === sharedValue) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    class R {
      constructor() {
        obj = { width: "" + closure_1.get() + "%" };
        return obj;
      }
    }
    const obj3 = { percentWidth: sharedValue };
    R.__closure = obj3;
    R.__workletHash = 14122394499539;
    R.__initData = __initData;
    const animatedStyle = tmp(4612).useAnimatedStyle(R);
    if (cResult[4] === style) {
      if (cResult[5] === tmp4.wrapper) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] === animatedStyle) {
        if (cResult[8] === tmp4.progress) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === tmp12) {
          if (cResult[11] === tmp13) {
            let tmp18 = cResult[12];
          }
          return tmp18;
        }
        class R {
          constructor() {
            obj = { width: "" + closure_1.get() + "%" };
            return obj;
          }
        }
        tmp21[0] = tmp12;
        tmp21[1] = tmp13;
        const tmp22 = <View {...tmp21} />;
        cResult[10] = tmp12;
        cResult[11] = tmp13;
        cResult[12] = tmp22;
        tmp18 = tmp22;
      }
      class R {
        constructor() {
          obj = { width: "" + closure_1.get() + "%" };
          return obj;
        }
      }
      const items = [tmp4.progress, animatedStyle];
      tmp16[0] = items;
      const tmp17 = jsx(sharedValue(4612).View, tmp16);
      cResult[7] = animatedStyle;
      cResult[8] = tmp4.progress;
      cResult[9] = tmp17;
      tmp13 = tmp17;
    }
    const items1 = [tmp4.wrapper, style];
    cResult[4] = style;
    cResult[5] = tmp4.wrapper;
    cResult[6] = items1;
    tmp12 = items1;
    const tmpResult = tmp(4612);
  }
  const fn = function u() {
    const result = sharedValue.set(timing.withTiming(percent, timingPresets.timingSlow));
  };
  const items2 = [percent, sharedValue];
  cResult[0] = percent;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp7 = items2;
  tmp6 = fn;
  const obj2 = percent(4612);
}) : ((percent) => {
  percent = percent.percent;
  const tmp = closure_6();
  const sharedValue = percent(4612).useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(percent, timingPresets.timingSlow));
  }, items);
  const obj = percent(4612);
  const fn = function _() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 17127431788560;
  fn.__initData = __initData2;
  const obj3 = { style: null, children: null };
  const items1 = [tmp.wrapper, percent.style];
  obj3.style = items1;
  const animatedStyle = percent(4612).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items2 = [tmp.progress, animatedStyle];
  obj4.style = items2;
  obj3.children = jsx(sharedValue(4612).View, { style: null });
  return <View style={null}>{null}</View>;
});