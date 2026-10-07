// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: fn(7524).SEARCH_ROW_TAP_STATE_PADDING,
  },
  icon: null,
  labels: null,
  line: null,
};
let size = {
  width: 18,
  height: 18,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginRight: nativeDefault.space.PX_12,
};
obj2.icon = size;
obj2.labels = { flex: 1, height: fn(11982).SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center" };
const size1 = {
  height: 16,
  width: "72%",
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.line = size1;
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: "function SuggestedSearchSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function SuggestedSearchSkeletonTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: fn(7524).SEARCH_ROW_TAP_STATE_PADDING,
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = sharedValue(576).c(17);
      const tmp4 = closure_7();
      let obj = sharedValue(576);
      const tmp = sharedValue;
      sharedValue = sharedValue(4618).useSharedValue(0.4);
      if (cResult[0] !== sharedValue) {
        const fn = function o() {
          const obj = ReanimatedRexport;
          const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 700 }), -1, true));
        };
        const items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      const obj2 = sharedValue(4618);
      const fn2 = function p() {
        return { opacity: sharedValue.get() };
      };
      fn2.__closure = { opacity: sharedValue };
      fn2.__workletHash = 9760194902231;
      fn2.__initData = __initData;
      const animatedStyle = tmp(4618).useAnimatedStyle(fn2);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === tmp4.row) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] !== tmp4.icon) {
          const obj3 = { style: tmp4.icon };
          const tmp14 = closure_5(View, obj3);
          cResult[6] = tmp4.icon;
          cResult[7] = tmp14;
          let tmp11 = tmp14;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] !== tmp4.line) {
          const obj4 = { style: tmp4.line };
          const tmp18 = closure_5(View, obj4);
          cResult[8] = tmp4.line;
          cResult[9] = tmp18;
          let tmp15 = tmp18;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] === tmp4.labels) {
          if (cResult[11] === tmp15) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === tmp10) {
            if (cResult[14] === tmp11) {
              if (cResult[15] === tmp19) {
                let tmp23 = cResult[16];
              }
              return tmp23;
            }
          }
          const obj5 = { style: tmp10, "aria-hidden": true, children: null };
          const items1 = [tmp11, tmp19];
          obj5.children = items1;
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
      const tmpResult = tmp(4618);
    }
  : () => {
      const tmp = closure_7();
      sharedValue = sharedValue(4618).useSharedValue(0.4);
      const items = [sharedValue];
      const effect = noop.useEffect(() => {
        const obj = ReanimatedRexport;
        const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 700 }), -1, true));
      }, items);
      let obj = sharedValue(4618);
      const fn = function s() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 16042492079220;
      fn.__initData = __initData2;
      const animatedStyle = sharedValue(4618).useAnimatedStyle(fn);
      const obj3 = { style: null, "aria-hidden": true, children: null };
      const items1 = [tmp.row, animatedStyle];
      obj3.style = items1;
      const items2 = [closure_5(View, { style: tmp.icon })];
      const obj5 = { style: tmp.labels, children: closure_5(View, { style: tmp.line }) };
      items2[1] = closure_5(View, obj5);
      obj3.children = items2;
      return closure_6(ReanimatedRexportDefault.View, obj3);
    };
