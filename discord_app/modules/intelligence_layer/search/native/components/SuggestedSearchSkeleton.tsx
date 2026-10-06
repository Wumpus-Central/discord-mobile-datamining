// === Module 16892: SuggestedSearchSkeleton ===

// Module 16892 (SuggestedSearchSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import SmartSearchConstants from "SmartSearchConstants" /* 11982 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
const SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT = SmartSearchConstants.SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT;
const SEARCH_ROW_TAP_STATE_PADDING = SearchConstants.SEARCH_ROW_TAP_STATE_PADDING;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, icon: size, labels: { flex: 1, height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center" }, line: size1 };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: SEARCH_ROW_TAP_STATE_PADDING };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: nativeDefault.space.PX_12 };
size1 = { height: 16, width: "72%", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
const __initData = { code: "function SuggestedSearchSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function SuggestedSearchSkeletonTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let sharedValue;
  let tmp6;
  let tmp7;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(17);
  const tmp4 = closure_7();
  const obj2 = sharedValue(4618);
  sharedValue = obj2.useSharedValue(0.4);
  if (cResult[0] !== sharedValue) {
    const fn = function o() {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj = timing;
      const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  const fn2 = function p() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 9760194902231;
  fn2.__initData = __initData;
  const tmpResult = tmp(4618);
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[3] === animatedStyle) {
    let tmp10;
    let tmp11;
    let tmp15;
    if (cResult[4] === tmp4.row) {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== tmp4.icon) {
      const obj3 = { style: tmp4.icon };
      const tmp14 = closure_5(View, obj3);
      cResult[6] = tmp4.icon;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] !== tmp4.line) {
      const obj4 = { style: tmp4.line };
      const tmp18 = closure_5(View, obj4);
      cResult[8] = tmp4.line;
      cResult[9] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp4.labels) {
      let tmp19;
      if (cResult[11] === tmp15) {
        tmp19 = cResult[12];
      }
      if (cResult[13] === tmp10) {
        if (cResult[14] === tmp11) {
          let tmp23;
          if (cResult[15] === tmp19) {
            tmp23 = cResult[16];
          }
          return tmp23;
        }
      }
      const obj5 = { style: tmp10, "aria-hidden": true, children: items1 };
      items1 = [tmp11, tmp19];
      const tmp26 = closure_6(ReanimatedRexportDefault.View, obj5);
      cResult[13] = tmp10;
      cResult[14] = tmp11;
      cResult[15] = tmp19;
      cResult[16] = tmp26;
      tmp23 = tmp26;
    }
    const obj6 = { style: tmp4.labels, children: tmp15 };
    const tmp22 = closure_5(View, obj6);
    cResult[10] = tmp4.labels;
    cResult[11] = tmp15;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  const items2 = [tmp4.row, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.row;
  cResult[5] = items2;
  tmp10 = items2;
}) : (() => {
  let items1;
  let items2;
  let obj6;
  let sharedValue;
  const tmp = closure_7();
  let obj = sharedValue(4618);
  sharedValue = obj.useSharedValue(0.4);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function s() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 16042492079220;
  fn.__initData = __initData2;
  const obj2 = sharedValue(4618);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items1, "aria-hidden": true, children: items2 };
  items1 = [tmp.row, animatedStyle];
  const obj4 = { style: tmp.icon };
  View = ReanimatedRexportDefault.View;
  items2 = [closure_5(View, obj4), ];
  const obj5 = { style: tmp.labels, children: closure_5(View, obj6) };
  obj6 = { style: tmp.line };
  items2[1] = closure_5(View, obj5);
  return closure_6(View, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx");

export default tmp4;