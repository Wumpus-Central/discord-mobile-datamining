// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import HappeningNowCardDefault from "HappeningNowCard.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const HAPPENING_NOW_CONTENT_HEIGHT = fn(15566).HAPPENING_NOW_CONTENT_HEIGHT;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  placeholderContainer: { flexDirection: "row", alignItems: "center" },
  placeholderIcon: null,
  placeholderContent: null,
  placeholderText: null,
  placeholderTextTop: null,
  placeholderTextBottom: null,
};
let size = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.placeholderIcon = size;
obj2.placeholderContent = { flex: 1 };
obj2.placeholderText = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.placeholderTextTop = { width: "75%" };
obj2.placeholderTextBottom = { width: "50%", marginTop: 8 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}",
};
const __initData = {
  code: "function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let closure_10 = {
  code: "function HappeningNowCardPlaceholderTsx3(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}",
};
const __initData2 = {
  code: "function HappeningNowCardPlaceholderTsx4(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBlinkStyle(duration) {
      const cResult = duration(sharedValue[7]).c(5);
      duration = duration.duration;
      const endOpacity = duration.endOpacity;
      let obj = duration(sharedValue[7]);
      const tmp = duration;
      const tmp2 = sharedValue;
      sharedValue = duration(sharedValue[8]).useSharedValue(duration.startOpacity);
      if (cResult[0] === duration) {
        if (cResult[1] === endOpacity) {
          if (cResult[2] === sharedValue) {
            let tmp5 = cResult[3];
            let tmp6 = cResult[4];
          }
          const effect = noop.useEffect(tmp5, tmp6);
          const fn2 = function c() {
            return { opacity: sharedValue.get() };
          };
          const obj3 = { opacity: sharedValue };
          fn2.__closure = obj3;
          fn2.__workletHash = 17547739379389;
          fn2.__initData = __initData;
          return tmp(tmp2[8]).useAnimatedStyle(fn2);
        }
      }
      let fn = function n() {
        const fn = function t() {
          const obj = duration(sharedValue[8]);
          const obj2 = duration(sharedValue[9]);
          const result = closure_1_2.set(
            obj.withRepeat(
              obj2.withTiming(endOpacity, { duration, easing: duration(sharedValue[8]).Easing.ease }),
              -1,
              true,
            ),
          );
        };
        let obj = ReanimatedRexport;
        fn.__closure = {
          opacity: sharedValue,
          withRepeat: ReanimatedRexport.withRepeat,
          withTiming: timing.withTiming,
          endOpacity,
          duration,
          Easing: ReanimatedRexport.Easing,
        };
        fn.__workletHash = 14338250108016;
        fn.__initData = __initData;
        obj.runOnUI(fn)();
      };
      const items = [sharedValue, duration, endOpacity];
      cResult[0] = duration;
      cResult[1] = endOpacity;
      cResult[2] = sharedValue;
      cResult[3] = fn;
      cResult[4] = items;
      tmp6 = items;
      tmp5 = fn;
      let obj2 = duration(sharedValue[8]);
    }
  : function useBlinkStyle(duration) {
      duration = duration.duration;
      const endOpacity = duration.endOpacity;
      let sharedValue;
      sharedValue = duration(sharedValue[8]).useSharedValue(duration.startOpacity);
      const items = [sharedValue, duration, endOpacity];
      const effect = noop.useEffect(() => {
        const fn = function t() {
          const obj = duration(sharedValue[8]);
          const obj2 = duration(sharedValue[9]);
          const result = closure_1_2.set(
            obj.withRepeat(
              obj2.withTiming(endOpacity, { duration, easing: duration(sharedValue[8]).Easing.ease }),
              -1,
              true,
            ),
          );
        };
        let obj = ReanimatedRexport;
        fn.__closure = {
          opacity: sharedValue,
          withRepeat: ReanimatedRexport.withRepeat,
          withTiming: timing.withTiming,
          endOpacity,
          duration,
          Easing: ReanimatedRexport.Easing,
        };
        fn.__workletHash = 4508222783922;
        fn.__initData = __initData;
        obj.runOnUI(fn)();
      }, items);
      let obj = duration(sharedValue[8]);
      let fn = function c() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 10998194043259;
      fn.__initData = __initData2;
      return duration(sharedValue[8]).useAnimatedStyle(fn);
    };
ReactCompilerGating = fn(558);
let obj3 = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx",
);

export const HappeningNowCardPlaceholder = ReactCompilerGating.isReactCompilerEnabled()
  ? function HappeningNowCardPlaceholder(panelVariant) {
      const cResult = c.c(24);
      panelVariant = panelVariant.panelVariant;
      let tmp3 = undefined !== panelVariant;
      if (tmp3) {
        tmp3 = panelVariant;
      }
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { duration: 1000, startOpacity: 0.3, endOpacity: 0.6 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp6 = closure_12(first);
      let str = "medium";
      if (panelVariant.fullWidth) {
        str = "full";
      }
      if (cResult[1] === tmp6) {
        if (cResult[2] === tmp4.placeholderContainer) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.placeholderIcon) {
          const obj3 = { style: tmp4.placeholderIcon };
          const tmp11 = hasOwnProperty(View, obj3);
          cResult[4] = tmp4.placeholderIcon;
          cResult[5] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] === tmp4.placeholderText) {
          if (cResult[7] === tmp4.placeholderTextTop) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] === tmp4.placeholderText) {
            if (cResult[10] === tmp4.placeholderTextBottom) {
              let tmp16 = cResult[11];
            }
            if (cResult[12] === tmp4.placeholderContent) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp16) {
                  let tmp20 = cResult[15];
                }
                if (cResult[16] === tmp7) {
                  if (cResult[17] === tmp8) {
                    if (cResult[18] === tmp20) {
                      let tmp24 = cResult[19];
                    }
                    if (cResult[20] === tmp3) {
                      if (cResult[21] === str) {
                        if (cResult[22] === tmp24) {
                          let tmp28 = cResult[23];
                        }
                        return tmp28;
                      }
                    }
                    const obj4 = { width: str, panelVariant: tmp3, children: tmp24 };
                    const tmp31 = hasOwnProperty(HappeningNowCardDefault, obj4);
                    cResult[20] = tmp3;
                    cResult[21] = str;
                    cResult[22] = tmp24;
                    cResult[23] = tmp31;
                    tmp28 = tmp31;
                  }
                }
                const obj5 = { style: tmp7, children: null };
                const items = [tmp8, tmp20];
                obj5.children = items;
                const tmp27 = timestampProducer(ReanimatedRexportDefault.View, obj5);
                cResult[16] = tmp7;
                cResult[17] = tmp8;
                cResult[18] = tmp20;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
            }
            const obj6 = { style: tmp4.placeholderContent, children: null };
            const items1 = [tmp12, tmp16];
            obj6.children = items1;
            const tmp23 = timestampProducer(View, obj6);
            cResult[12] = tmp4.placeholderContent;
            cResult[13] = tmp12;
            cResult[14] = tmp16;
            cResult[15] = tmp23;
            tmp20 = tmp23;
          }
          const obj7 = { style: null };
          const items2 = [,];
          ({ placeholderText: arr3[0], placeholderTextBottom: arr3[1] } = tmp4);
          obj7.style = items2;
          const tmp19 = hasOwnProperty(View, obj7);
          cResult[9] = tmp4.placeholderText;
          cResult[10] = tmp4.placeholderTextBottom;
          cResult[11] = tmp19;
          tmp16 = tmp19;
        }
        const obj8 = { style: null };
        const items3 = [,];
        ({ placeholderText: arr2[0], placeholderTextTop: arr2[1] } = tmp4);
        obj8.style = items3;
        const tmp15 = hasOwnProperty(View, obj8);
        cResult[6] = tmp4.placeholderText;
        cResult[7] = tmp4.placeholderTextTop;
        cResult[8] = tmp15;
        tmp12 = tmp15;
      }
      const items4 = [tmp6, tmp4.placeholderContainer];
      cResult[1] = tmp6;
      cResult[2] = tmp4.placeholderContainer;
      cResult[3] = items4;
      tmp7 = items4;
    }
  : function HappeningNowCardPlaceholder(panelVariant) {
      let flag = panelVariant.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      let str = "medium";
      const tmp2 = closure_12({ duration: 1000, startOpacity: 0.3, endOpacity: 0.6 });
      if (panelVariant.fullWidth) {
        str = "full";
      }
      const obj = { width: str, panelVariant: flag, children: null };
      const obj2 = { style: null, children: null };
      const items = [tmp2, tmp.placeholderContainer];
      obj2.style = items;
      const items1 = [hasOwnProperty(View, { style: tmp.placeholderIcon })];
      const obj4 = { style: tmp.placeholderContent, children: null };
      const obj5 = { style: null };
      const items2 = [,];
      ({ placeholderText: arr3[0], placeholderTextTop: arr3[1] } = tmp);
      obj5.style = items2;
      const items3 = [hasOwnProperty(View, obj5)];
      const obj6 = { style: null };
      const items4 = [,];
      ({ placeholderText: arr5[0], placeholderTextBottom: arr5[1] } = tmp);
      obj6.style = items4;
      items3[1] = hasOwnProperty(View, obj6);
      obj4.children = items3;
      items1[1] = timestampProducer(View, obj4);
      obj2.children = items1;
      obj.children = timestampProducer(ReanimatedRexportDefault.View, obj2);
      return hasOwnProperty(HappeningNowCardDefault, obj);
    };
