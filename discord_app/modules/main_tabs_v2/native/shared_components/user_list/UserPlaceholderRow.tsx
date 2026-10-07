// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles((height) => {
  const obj = { row: { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height }, rowInner: null, rowHeaderWrapper: null, placeholderAvatar: null, placeholderText: null };
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height };
  obj.rowInner = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.rowHeaderWrapper = { alignItems: "center", flexDirection: "row" };
  const size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.placeholderAvatar = size;
  const obj3 = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.placeholderText = { height: 20, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  return obj;
});
const __initData = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function UserPlaceholderRowTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(576).c(28);
  ({ animate, row, height } = arg0);
  let tmp4 = undefined === animate || animate;
  if (undefined === height) {
    height = nativeDefault.space.PX_48;
  }
  const tmp6 = closure_8(height);
  let obj = sharedValue(576);
  sharedValue = sharedValue(4618).useSharedValue(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = sharedValue(4618);
  if (tmp4) {
    tmp4 = !tmpResult3.useStateFromStores(tmp8, tmp9);
  }
  importDefault = tmp4;
  if (cResult[2] === sharedValue) {
    if (cResult[3] === tmp4) {
      let tmp11 = cResult[4];
      let tmp12 = cResult[5];
    }
    const effect = noop.useEffect(tmp11, tmp12);
    class I {
      constructor() {
        obj = { opacity: closure_0.get() };
        return obj;
      }
    }
    let obj2 = { opacity: sharedValue };
    I.__closure = obj2;
    I.__workletHash = 10137317865125;
    I.__initData = __initData;
    const animatedStyle = tmp(4618).useAnimatedStyle(I);
    if (cResult[6] === animatedStyle) {
      if (cResult[7] === tmp6.row) {
        let tmp17 = cResult[8];
      }
      if (cResult[9] !== tmp6.placeholderAvatar) {
        { style: null }.style = tmp6.placeholderAvatar;
        class I {
          constructor() {
            obj = { opacity: closure_0.get() };
            return obj;
          }
        }
        cResult[9] = tmp6.placeholderAvatar;
        cResult[10] = tmp21;
        let tmp18 = tmp21;
        let obj3 = { style: null };
      } else {
        tmp18 = cResult[10];
      }
      ({ rowInner, rowHeaderWrapper } = tmp6);
      class I {
        constructor() {
          obj = { opacity: closure_0.get() };
          return obj;
        }
      }
      if (cResult[11] !== row) {
        const _Math = Math;
        let result = 10000 * Math.sin(row);
        const _Math2 = Math;
        class I {
          constructor() {
            obj = { opacity: closure_0.get() };
            return obj;
          }
        }
        const sum = 40 * (result - Math.floor(result)) + 40;
        cResult[11] = row;
        cResult[12] = sum;
        let tmp23 = sum;
      } else {
        tmp23 = cResult[12];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp23 + "%";
      if (cResult[13] !== combined) {
        let obj4 = { width: combined };
        cResult[13] = combined;
        class I {
          constructor() {
            obj = { opacity: closure_0.get() };
            return obj;
          }
        }
        cResult[14] = obj4;
        let tmp27 = obj4;
      } else {
        tmp27 = cResult[14];
      }
      if (cResult[15] === tmp6.placeholderText) {
        if (cResult[16] === tmp27) {
          let tmp28 = cResult[17];
        }
        if (cResult[18] === tmp6.rowHeaderWrapper) {
          if (cResult[19] === tmp28) {
            let tmp32 = cResult[20];
          }
          if (cResult[21] === tmp6.rowInner) {
            if (cResult[22] === tmp32) {
              let tmp37 = cResult[23];
            }
            if (cResult[24] === tmp37) {
              if (cResult[25] === tmp17) {
                if (cResult[26] === tmp18) {
                  let tmp42 = cResult[27];
                }
                return tmp42;
              }
            }
            class I {
              constructor() {
                obj = { opacity: closure_0.get() };
                return obj;
              }
            }
            tmp45[0] = tmp17;
            const items1 = [tmp18, tmp37];
            tmp45[2] = items1;
            const tmp46 = closure_7(ReanimatedRexportDefault.View, tmp45);
            cResult[24] = tmp37;
            cResult[25] = tmp17;
            cResult[26] = tmp18;
            cResult[27] = tmp46;
            tmp42 = tmp46;
          }
          class I {
            constructor() {
              obj = { opacity: closure_0.get() };
              return obj;
            }
          }
          tmp40[0] = rowInner;
          tmp40[1] = tmp32;
          const tmp41 = closure_6(View, tmp40);
          cResult[21] = tmp6.rowInner;
          cResult[22] = tmp32;
          cResult[23] = tmp41;
          tmp37 = tmp41;
        }
        class I {
          constructor() {
            obj = { opacity: closure_0.get() };
            return obj;
          }
        }
        tmp35[0] = rowHeaderWrapper;
        tmp35[1] = tmp28;
        const tmp36 = closure_6(View, tmp35);
        cResult[18] = tmp6.rowHeaderWrapper;
        cResult[19] = tmp28;
        cResult[20] = tmp36;
        tmp32 = tmp36;
      }
      let obj5 = { style: null };
      const items2 = [tmp22, tmp27];
      obj5.style = items2;
      const tmp31 = closure_6(View, obj5);
      cResult[15] = tmp6.placeholderText;
      cResult[16] = tmp27;
      cResult[17] = tmp31;
      tmp28 = tmp31;
    }
    const items3 = [tmp6.row, animatedStyle];
    cResult[6] = animatedStyle;
    cResult[7] = tmp6.row;
    cResult[8] = items3;
    tmp17 = items3;
    const tmpResult4 = tmp(4618);
  }
  const fn2 = function b() {
    if (closure_1) {
      const obj = ReanimatedRexport;
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTimingResult = timing.withTiming(0.3, obj4);
      const obj6 = { duration: 2 * timingPresets.timingSlowDuration };
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, timing.withTiming(1, obj6)), -1, true));
    } else {
      const result1 = set(1);
    }
  };
  const items4 = [tmp4, sharedValue];
  cResult[2] = sharedValue;
  cResult[3] = tmp4;
  cResult[4] = fn2;
  cResult[5] = items4;
  tmp12 = items4;
  tmp11 = fn2;
  tmpResult3 = sharedValue(504);
}) : ((animate) => {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  ({ height, row } = animate);
  if (height === undefined) {
    height = flag(587).space.PX_48;
  }
  let sharedValue;
  flag = undefined;
  const tmp3 = closure_8(height);
  sharedValue = sharedValue(4618).useSharedValue(1);
  let obj = sharedValue(4618);
  const tmp4 = sharedValue;
  const items = [AccessibilityStore];
  if (flag) {
    flag = !obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = noop.useEffect(() => {
    if (flag) {
      const obj = ReanimatedRexport;
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTimingResult = timing.withTiming(0.3, obj4);
      const obj6 = { duration: 2 * timingPresets.timingSlowDuration };
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, timing.withTiming(1, obj6)), -1, true));
    } else {
      const result1 = set(1);
    }
  }, items1);
  obj2 = sharedValue(504);
  class S {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  S.__closure = { opacity: sharedValue };
  S.__workletHash = 4335136835878;
  S.__initData = __initData2;
  const animatedStyle = tmp4(4618).useAnimatedStyle(S);
  let obj3 = { style: null, collapsable: false, children: null };
  const items2 = [tmp3.row, animatedStyle];
  obj3.style = items2;
  const items3 = [closure_6(View, { style: tmp3.placeholderAvatar }), ];
  let obj5 = { style: tmp3.rowInner, children: null };
  let obj6 = { style: tmp3.rowHeaderWrapper, children: null };
  const obj7 = { style: null };
  const items4 = [tmp3.placeholderText, ];
  const obj8 = { width: null };
  let result = 10000 * Math.sin(row);
  obj8.width = "" + 40 * (result - Math.floor(result)) + 40 + "%";
  items4[1] = obj8;
  obj7.style = items4;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_6(View, obj6);
  items3[1] = closure_6(View, obj5);
  obj3.children = items3;
  return closure_7(flag(4618).View, obj3);
}));