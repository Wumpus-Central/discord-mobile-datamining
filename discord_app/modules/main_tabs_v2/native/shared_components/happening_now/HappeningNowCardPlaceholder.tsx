// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import HappeningNowCardDefault from "HappeningNowCard.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const ReanimatedRexportDefault = ReanimatedRexport;
let panelVariant;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  placeholderContainer: { flexDirection: "row", alignItems: "center" },
  placeholderIcon: size,
  placeholderContent: { flex: 1 },
  placeholderText: obj2,
  placeholderTextTop: { width: "75%" },
  placeholderTextBottom: { width: "50%", marginTop: 8 },
};
size = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles = createStyles.createStyles;
obj2 = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (duration) => {
      let sharedValue;
      let tmp = duration;
      let obj = duration(sharedValue[7]);
      const cResult = obj.c(5);
      duration = duration.duration;
      const endOpacity = duration.endOpacity;
      const startOpacity = duration.startOpacity;
      let obj2 = duration(sharedValue[8]);
      const tmp2 = sharedValue;
      sharedValue = obj2.useSharedValue(startOpacity);
      if (cResult[0] === duration) {
        if (cResult[1] === endOpacity) {
          let tmp5;
          let tmp6;
          if (cResult[2] === sharedValue) {
            tmp5 = cResult[3];
            tmp6 = cResult[4];
          }
          const effect = react.useEffect(tmp5, tmp6);
          const fn2 = function c() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          };
          const obj3 = { opacity: sharedValue };
          fn2.__closure = obj3;
          fn2.__workletHash = 17547739379389;
          fn2.__initData = __initData;
          const tmpResult = tmp(tmp2[8]);
          return tmpResult.useAnimatedStyle(fn2);
        }
      }
      let fn = function n() {
        let obj = ReanimatedRexport;
        const fn = function t() {
          const withRepeat = duration(sharedValue[8]).withRepeat;
          duration(sharedValue[8]);
          const obj = duration(sharedValue[9]);
          const obj2 = { duration, easing: duration(sharedValue[8]).Easing.ease };
          const result = set(withRepeat(obj.withTiming(endOpacity, obj2), -1, true));
        };
        let obj2 = {
          opacity: sharedValue,
          withRepeat: ReanimatedRexport.withRepeat,
          withTiming: timing.withTiming,
          endOpacity,
          duration,
          Easing: ReanimatedRexport.Easing,
        };
        fn.__closure = obj2;
        fn.__workletHash = 14338250108016;
        fn.__initData = __initData;
        const tmp = obj.runOnUI(fn)();
      };
      const items = [sharedValue, duration, endOpacity];
      cResult[0] = duration;
      cResult[1] = endOpacity;
      cResult[2] = sharedValue;
      cResult[3] = fn;
      cResult[4] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : (duration) => {
      duration = duration.duration;
      const endOpacity = duration.endOpacity;
      let sharedValue;
      const startOpacity = duration.startOpacity;
      let obj = duration(sharedValue[8]);
      sharedValue = obj.useSharedValue(startOpacity);
      const items = [sharedValue, duration, endOpacity];
      const effect = react.useEffect(() => {
        let obj = ReanimatedRexport;
        const fn = function t() {
          const withRepeat = duration(sharedValue[8]).withRepeat;
          duration(sharedValue[8]);
          const obj = duration(sharedValue[9]);
          const obj2 = { duration, easing: duration(sharedValue[8]).Easing.ease };
          const result = set(withRepeat(obj.withTiming(endOpacity, obj2), -1, true));
        };
        let obj2 = {
          opacity: sharedValue,
          withRepeat: ReanimatedRexport.withRepeat,
          withTiming: timing.withTiming,
          endOpacity,
          duration,
          Easing: ReanimatedRexport.Easing,
        };
        fn.__closure = obj2;
        fn.__workletHash = 4508222783922;
        fn.__initData = __initData;
        const tmp = obj.runOnUI(fn)();
      }, items);
      let obj2 = duration(sharedValue[8]);
      let fn = function c() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 10998194043259;
      fn.__initData = __initData2;
      return obj2.useAnimatedStyle(fn);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (panelVariant) => {
      let first;
      let items;
      let items1;
      let items2;
      let items3;
      const obj = react2;
      const cResult = obj.c(24);
      panelVariant = panelVariant.panelVariant;
      let tmp3 = undefined !== panelVariant;
      const fullWidth = panelVariant.fullWidth;
      if (tmp3) {
        tmp3 = panelVariant;
      }
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { duration: 1000, startOpacity: 0.3, endOpacity: 0.6 };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp6 = closure_12(first);
      let str = "medium";
      if (fullWidth) {
        str = "full";
      }
      if (cResult[1] === tmp6) {
        let tmp7;
        let tmp8;
        if (cResult[2] === tmp4.placeholderContainer) {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4.placeholderIcon) {
          const obj3 = { style: tmp4.placeholderIcon };
          const tmp11 = hasOwnProperty(View, obj3);
          cResult[4] = tmp4.placeholderIcon;
          cResult[5] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] === tmp4.placeholderText) {
          let tmp12;
          if (cResult[7] === tmp4.placeholderTextTop) {
            tmp12 = cResult[8];
          }
          if (cResult[9] === tmp4.placeholderText) {
            let tmp16;
            if (cResult[10] === tmp4.placeholderTextBottom) {
              tmp16 = cResult[11];
            }
            if (cResult[12] === tmp4.placeholderContent) {
              if (cResult[13] === tmp12) {
                let tmp20;
                if (cResult[14] === tmp16) {
                  tmp20 = cResult[15];
                }
                if (cResult[16] === tmp7) {
                  if (cResult[17] === tmp8) {
                    let tmp24;
                    if (cResult[18] === tmp20) {
                      tmp24 = cResult[19];
                    }
                    if (cResult[20] === tmp3) {
                      if (cResult[21] === str) {
                        let tmp28;
                        if (cResult[22] === tmp24) {
                          tmp28 = cResult[23];
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
                const obj5 = { style: tmp7, children: items };
                items = [tmp8, tmp20];
                const tmp27 = metroRequire(ReanimatedRexportDefault.View, obj5);
                cResult[16] = tmp7;
                cResult[17] = tmp8;
                cResult[18] = tmp20;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
            }
            const obj6 = { style: tmp4.placeholderContent, children: items1 };
            items1 = [tmp12, tmp16];
            const tmp23 = metroRequire(View, obj6);
            cResult[12] = tmp4.placeholderContent;
            cResult[13] = tmp12;
            cResult[14] = tmp16;
            cResult[15] = tmp23;
            tmp20 = tmp23;
          }
          const obj7 = { style: items2 };
          items2 = [,];
          ({ placeholderText: arr3[0], placeholderTextBottom: arr3[1] } = tmp4);
          const tmp19 = hasOwnProperty(View, obj7);
          cResult[9] = tmp4.placeholderText;
          cResult[10] = tmp4.placeholderTextBottom;
          cResult[11] = tmp19;
          tmp16 = tmp19;
        }
        const obj8 = { style: items3 };
        items3 = [,];
        ({ placeholderText: arr2[0], placeholderTextTop: arr2[1] } = tmp4);
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
  : (panelVariant) => {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj2;
      let flag = panelVariant.panelVariant;
      const fullWidth = panelVariant.fullWidth;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      let str = "medium";
      const tmp2 = closure_12({ duration: 1000, startOpacity: 0.3, endOpacity: 0.6 });
      const tmp6 = HappeningNowCardDefault;
      if (fullWidth) {
        str = "full";
      }
      const obj = { width: str, panelVariant: flag, children: metroRequire(View, obj2) };
      obj2 = { style: items, children: items1 };
      items = [tmp2, tmp.placeholderContainer];
      const obj3 = { style: tmp.placeholderIcon };
      View = ReanimatedRexportDefault.View;
      items1 = [hasOwnProperty(View, obj3)];
      const obj5 = { style: items2 };
      items2 = [,];
      const obj4 = { style: tmp.placeholderContent, children: items3 };
      ({ placeholderText: arr3[0], placeholderTextTop: arr3[1] } = tmp);
      items3 = [hasOwnProperty(View, obj5)];
      const obj6 = { style: items4 };
      items4 = [,];
      ({ placeholderText: arr5[0], placeholderTextBottom: arr5[1] } = tmp);
      items3[1] = hasOwnProperty(View, obj6);
      items1[1] = metroRequire(View, obj4);
      return hasOwnProperty(tmp6, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx",
);

export const HappeningNowCardPlaceholder = tmp4;
