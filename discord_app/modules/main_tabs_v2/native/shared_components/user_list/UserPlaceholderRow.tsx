// === Module 9503: UserPlaceholderRow ===

// Module 9503 (UserPlaceholderRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let importDefault;

let metroImportDefault;
let metroRequire;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((height) => {
  const obj = { row: { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height }, rowInner: { marginHorizontal: nativeDefault.space.PX_16, flex: 1 }, rowHeaderWrapper: { alignItems: "center", flexDirection: "row" }, placeholderAvatar: size, placeholderText: { height: 20, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  ({ paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height });
  ({ marginHorizontal: nativeDefault.space.PX_16, flex: 1 });
  size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ height: 20, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj;
});
const __initData = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function UserPlaceholderRowTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animate;
  let closure_1;
  let height;
  let items2;
  let row;
  let rowHeaderWrapper;
  let rowInner;
  let sharedValue;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let obj = sharedValue(576);
  const cResult = obj.c(28);
  ({ animate, row, height } = arg0);
  let tmp4 = undefined === animate || animate;
  if (undefined === height) {
    height = nativeDefault.space.PX_48;
  }
  const tmp6 = closure_8(height);
  const tmpResult = sharedValue(4618);
  sharedValue = tmpResult.useSharedValue(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult3 = sharedValue(504);
  if (tmp4) {
    tmp4 = !tmpResult3.useStateFromStores(tmp8, tmp9);
  }
  importDefault = tmp4;
  if (cResult[2] === sharedValue) {
    let tmp11;
    let tmp12;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    const effect = react.useEffect(tmp11, tmp12);
    const tmpResult4 = sharedValue(4618);
    class I {
      constructor() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      }
    }
    let obj2 = { opacity: sharedValue };
    I.__closure = obj2;
    I.__workletHash = 10137317865125;
    I.__initData = __initData;
    const animatedStyle = tmpResult4.useAnimatedStyle(I);
    if (cResult[6] === animatedStyle) {
      let tmp17;
      let tmp18;
      let tmp23;
      let tmp27;
      if (cResult[7] === tmp6.row) {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== tmp6.placeholderAvatar) {
        class I {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        cResult[9] = tmp6.placeholderAvatar;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[10];
      }
      ({ rowInner, rowHeaderWrapper } = tmp6);
      class I {
        constructor() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        }
      }
      if (cResult[11] !== row) {
        const _Math = Math;
        let result = 10000 * Math.sin(row);
        const _Math2 = Math;
        class I {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        const sum = 40 * (result - Math.floor(result)) + 40;
        cResult[11] = row;
        cResult[12] = sum;
        tmp23 = sum;
      } else {
        tmp23 = cResult[12];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp23 + "%";
      if (cResult[13] !== combined) {
        const obj4 = { width: combined };
        cResult[13] = combined;
        class I {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        cResult[14] = obj4;
        tmp27 = obj4;
      } else {
        tmp27 = cResult[14];
      }
      if (cResult[15] === tmp6.placeholderText) {
        let tmp28;
        if (cResult[16] === tmp27) {
          tmp28 = cResult[17];
        }
        if (cResult[18] === tmp6.rowHeaderWrapper) {
          let tmp32;
          if (cResult[19] === tmp28) {
            tmp32 = cResult[20];
          }
          if (cResult[21] === tmp6.rowInner) {
            let tmp37;
            if (cResult[22] === tmp32) {
              tmp37 = cResult[23];
            }
            if (cResult[24] === tmp37) {
              if (cResult[25] === tmp17) {
                let tmp42;
                if (cResult[26] === tmp18) {
                  tmp42 = cResult[27];
                }
                return tmp42;
              }
            }
            class I {
              constructor() {
                const obj = { opacity: sharedValue.get() };
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
              const obj = { opacity: sharedValue.get() };
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
            const obj = { opacity: sharedValue.get() };
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
      const obj5 = { style: items2 };
      items2 = [tmp22, tmp27];
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
  }
  const fn2 = function b() {
    if (closure_1) {
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming = timing.withTiming;
      timing;
      const withTimingResult = withTiming(0.3, obj);
      const obj2 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming2 = timing.withTiming;
      timing;
      const result = set(withRepeat(withSequence(withTimingResult, withTiming2(1, obj2)), -1, true));
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
}) : ((animate) => {
  let height;
  let items2;
  let items3;
  let items4;
  let obj6;
  let obj7;
  let result;
  let row;
  let useReducedMotion;
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
  let obj = sharedValue(4618);
  const tmp4 = sharedValue;
  sharedValue = obj.useSharedValue(1);
  let obj2 = sharedValue(504);
  const items = [AccessibilityStore];
  if (flag) {
    flag = !obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = react.useEffect(() => {
    if (flag) {
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming = timing.withTiming;
      timing;
      const withTimingResult = withTiming(0.3, obj);
      const obj2 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTiming2 = timing.withTiming;
      timing;
      const result = set(withRepeat(withSequence(withTimingResult, withTiming2(1, obj2)), -1, true));
    } else {
      const result1 = set(1);
    }
  }, items1);
  const tmp4Result = tmp4(4618);
  class S {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  S.__closure = { opacity: sharedValue };
  S.__workletHash = 4335136835878;
  S.__initData = __initData2;
  const animatedStyle = tmp4Result.useAnimatedStyle(S);
  const obj3 = { style: items2, collapsable: false, children: items3 };
  items2 = [tmp3.row, animatedStyle];
  const obj4 = { style: tmp3.placeholderAvatar };
  View = flag(4618).View;
  items3 = [closure_6(View, obj4), ];
  const obj5 = { style: tmp3.rowInner, children: closure_6(View, obj6) };
  obj6 = { style: tmp3.rowHeaderWrapper, children: closure_6(View, obj7) };
  obj7 = { style: items4 };
  items4 = [tmp3.placeholderText, ];
  const obj8 = { width: "" + 40 * (result - Math.floor(result)) + 40 + "%" };
  result = 10000 * Math.sin(row);
  items4[1] = obj8;
  items3[1] = closure_6(View, obj5);
  return closure_7(View, obj3);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default memoResult;