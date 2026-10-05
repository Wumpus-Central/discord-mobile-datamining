// discord_app/modules/guild_progress/native/components/GuildProgressBar.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import GuildProgressUtils from "../GuildProgressUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let percent, set;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, progress: obj3 };
obj2 = {
  position: "relative",
  backgroundColor: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR,
  borderRadius: nativeDefault.radii.xs,
  height: 8,
};
createStyles = createStyles.createStyles;
obj3 = {
  position: "absolute",
  height: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.xs,
};
let closure_6 = createStyles(obj);
const __initData = {
  code: 'function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+"%"};}',
};
const __initData2 = {
  code: 'function GuildProgressBarTsx2(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+"%"};}',
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (percent) => {
      let obj = percent(576);
      const cResult = obj.c(13);
      const tmp = percent;
      percent = percent.percent;
      const style = percent.style;
      const tmp4 = closure_6();
      const obj2 = percent(4612);
      const sharedValue = obj2.useSharedValue(0);
      if (cResult[0] === percent) {
        let tmp6;
        let tmp7;
        if (cResult[1] === sharedValue) {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const effect = react.useEffect(tmp6, tmp7);
        const tmpResult = tmp(4612);
        class R {
          constructor() {
            const obj = { width: "" + sharedValue.get() + "%" };
            return obj;
          }
        }
        const obj3 = { percentWidth: sharedValue };
        R.__closure = obj3;
        R.__workletHash = 14122394499539;
        R.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(R);
        if (cResult[4] === style) {
          let tmp12;
          if (cResult[5] === tmp4.wrapper) {
            tmp12 = cResult[6];
          }
          if (cResult[7] === animatedStyle) {
            let tmp13;
            if (cResult[8] === tmp4.progress) {
              tmp13 = cResult[9];
            }
            if (cResult[10] === tmp12) {
              let tmp18;
              if (cResult[11] === tmp13) {
                tmp18 = cResult[12];
              }
              return tmp18;
            }
            class R {
              constructor() {
                const obj = { width: "" + sharedValue.get() + "%" };
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
              const obj = { width: "" + sharedValue.get() + "%" };
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
      }
      const fn = function u() {
        set = sharedValue.set;
        const obj = timing;
        const result = set(obj.withTiming(percent, timingPresets.timingSlow));
      };
      const items2 = [percent, sharedValue];
      cResult[0] = percent;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      cResult[3] = items2;
      tmp7 = items2;
      tmp6 = fn;
    }
  : (percent) => {
      percent = percent.percent;
      const style = percent.style;
      const tmp = closure_6();
      let obj = percent(4612);
      const sharedValue = obj.useSharedValue(0);
      const items = [percent, sharedValue];
      const effect = react.useEffect(() => {
        set = sharedValue.set;
        const obj = timing;
        const result = set(obj.withTiming(percent, timingPresets.timingSlow));
      }, items);
      const fn = function _() {
        const obj = { width: "" + sharedValue.get() + "%" };
        return obj;
      };
      fn.__closure = { percentWidth: sharedValue };
      fn.__workletHash = 17127431788560;
      fn.__initData = __initData2;
      const items1 = [tmp.wrapper, style];
      const obj2 = percent(4612);
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const items2 = [tmp.progress, animatedStyle];
      return <View style={items1}>{null}</View>;
    };
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default tmp3;
