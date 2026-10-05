// discord_app/design/components/Tabs/native/TabsGradient.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
const HorizontalGradient = Constants.HorizontalGradient;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const SPRING_CONFIG = { mass: 1, damping: 30, stiffness: 250 };
let closure_9 = createStyles.createStyles({
  gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 },
  left: { left: 0 },
  right: { right: 0 },
});
const __initData = {
  code: "function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}",
};
const __initData2 = {
  code: "function TabsGradientNativeTsx2(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      _require = visible;
      let obj = require("ReanimatedRexport");
      const fn = function s() {
        const withSpring = spring.withSpring;
        let num = 0;
        spring;
        if (visible.get()) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, SPRING_CONFIG) };
        return obj;
      };
      fn.__closure = { withSpring: require("spring").withSpring, visible, SPRING_CONFIG };
      fn.__workletHash = 14959306962615;
      fn.__initData = __initData;
      ({ withSpring: require("spring").withSpring, visible, SPRING_CONFIG });
      return obj.useAnimatedStyle(fn);
    }
  : (visible) => {
      _require = visible;
      let obj = require("ReanimatedRexport");
      const fn = function s() {
        const withSpring = spring.withSpring;
        let num = 0;
        spring;
        if (visible.get()) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, SPRING_CONFIG) };
        return obj;
      };
      fn.__closure = { withSpring: require("spring").withSpring, visible, SPRING_CONFIG };
      fn.__workletHash = 9616093623476;
      fn.__initData = __initData2;
      ({ withSpring: require("spring").withSpring, visible, SPRING_CONFIG });
      return obj.useAnimatedStyle(fn);
    };
const __initData3 = {
  code: "function TabsGradientNativeTsx3(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}",
};
const __initData4 = {
  code: "function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}",
};
const __initData5 = {
  code: "function TabsGradientNativeTsx5(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}",
};
const __initData6 = {
  code: "function TabsGradientNativeTsx6(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}",
};
const __initData7 = {
  code: "function TabsGradientNativeTsx7(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}",
};
const __initData8 = {
  code: "function TabsGradientNativeTsx8(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      let items1;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(19);
      state = state.state;
      const colors = state.colors;
      const scrollOffset = state.scrollOffset;
      const itemDimensions = state.itemDimensions;
      const pageWidth = state.pageWidth;
      const fn = function n() {
        const value = itemDimensions.get();
        return (
          value.reduce((acc, width) => {
            let num;
            if (width != null) {
              num = width.width;
            }
            if (num == null) {
              num = 0;
            }
            return acc + num;
          }, 0) +
          value.length * state.itemSpacing
        );
      };
      fn.__closure = { itemDimensions, state };
      fn.__workletHash = 14345525935302;
      fn.__initData = __initData3;
      const obj2 = ReanimatedRexport2;
      const derivedValue = obj2.useDerivedValue(fn);
      const fn2 = function h() {
        const tmp = scrollOffset.get() > 0 && derivedValue.get() > pageWidth;
        return tmp;
      };
      fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      fn2.__workletHash = 2192318560183;
      fn2.__initData = __initData4;
      const obj3 = ReanimatedRexport2;
      const tmp4 = closure_12(obj3.useDerivedValue(fn2));
      const fn3 = function f() {
        const value = scrollOffset.get();
        const tmp3 = value < derivedValue.get() - pageWidth && derivedValue.get() > tmp2;
        return tmp3;
      };
      fn3.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      fn3.__workletHash = 10153920408340;
      fn3.__initData = __initData5;
      const obj4 = ReanimatedRexport2;
      const tmp5 = closure_12(obj4.useDerivedValue(fn3));
      const rect = closure_9();
      if (cResult[0] !== colors) {
        const items = [];
        let num = 0;
        HermesBuiltin.arraySpread(items, colors, 0);
        const reversed = items.reverse();
        cResult[0] = colors;
        cResult[1] = reversed;
        tmp6 = reversed;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        if (cResult[3] === rect.gradient) {
          let tmp11;
          if (cResult[4] === rect.left) {
            tmp11 = cResult[5];
          }
          if (cResult[6] === colors) {
            let tmp12;
            if (cResult[7] === tmp11) {
              tmp12 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === rect.gradient) {
                let tmp17;
                if (cResult[11] === rect.right) {
                  tmp17 = cResult[12];
                }
                if (cResult[13] === tmp6) {
                  let tmp18;
                  if (cResult[14] === tmp17) {
                    tmp18 = cResult[15];
                  }
                  if (cResult[16] === tmp12) {
                    let tmp23;
                    if (cResult[17] === tmp18) {
                      tmp23 = cResult[18];
                    }
                    return tmp23;
                  }
                  const obj7 = { children: items1 };
                  items1 = [tmp12, tmp18];
                  const tmp26 = metroRequire(hasOwnProperty, obj7);
                  cResult[16] = tmp12;
                  cResult[17] = tmp18;
                  cResult[18] = tmp26;
                  tmp23 = tmp26;
                }
                const obj10 = { start: null, end: null, colors: tmp6, style: tmp17, pointerEvents: "none" };
                ({ START: obj6.start, END: obj6.end } = HorizontalGradient);
                const tmp22 = React3(LinearGradient, obj10);
                cResult[13] = tmp6;
                cResult[14] = tmp17;
                cResult[15] = tmp22;
                tmp18 = tmp22;
              }
            }
            const items2 = [, ,];
            ({ right: arr3[0], gradient: arr3[1] } = rect);
            items2[2] = tmp5;
            cResult[9] = tmp5;
            cResult[10] = rect.gradient;
            cResult[11] = rect.right;
            cResult[12] = items2;
            tmp17 = items2;
          }
          const obj11 = { start: null, end: null, colors, style: tmp11, pointerEvents: "none" };
          ({ START: obj5.start, END: obj5.end } = HorizontalGradient);
          const tmp16 = React3(LinearGradient, obj11);
          cResult[6] = colors;
          cResult[7] = tmp11;
          cResult[8] = tmp16;
          tmp12 = tmp16;
        }
      }
      const items3 = [, ,];
      ({ left: arr2[0], gradient: arr2[1] } = rect);
      items3[2] = tmp4;
      cResult[2] = tmp4;
      cResult[3] = rect.gradient;
      cResult[4] = rect.left;
      cResult[5] = items3;
      tmp11 = items3;
    }
  : (state) => {
      let items1;
      let items2;
      let items3;
      state = state.state;
      const colors = state.colors;
      const scrollOffset = state.scrollOffset;
      const itemDimensions = state.itemDimensions;
      const pageWidth = state.pageWidth;
      const fn = function f() {
        const value = itemDimensions.get();
        return (
          value.reduce((acc, width) => {
            let num;
            if (width != null) {
              num = width.width;
            }
            if (num == null) {
              num = 0;
            }
            return acc + num;
          }, 0) +
          value.length * state.itemSpacing
        );
      };
      fn.__closure = { itemDimensions, state };
      fn.__workletHash = 16849390127683;
      fn.__initData = __initData6;
      const obj = ReanimatedRexport2;
      const derivedValue = obj.useDerivedValue(fn);
      const fn2 = function p() {
        const tmp = scrollOffset.get() > 0 && derivedValue.get() > pageWidth;
        return tmp;
      };
      fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      fn2.__workletHash = 14441291265460;
      fn2.__initData = __initData7;
      const obj2 = ReanimatedRexport2;
      const tmp2 = closure_12(obj2.useDerivedValue(fn2));
      const obj3 = ReanimatedRexport2;
      class W {
        constructor() {
          const value = scrollOffset.get();
          const tmp3 = value < derivedValue.get() - pageWidth && derivedValue.get() > tmp2;
          return tmp3;
        }
      }
      W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      W.__workletHash = 6131269821593;
      W.__initData = __initData8;
      let tmp3 = closure_12(obj3.useDerivedValue(W));
      const tmp4 = closure_9();
      let items = [colors];
      const obj5 = {
        start: HorizontalGradient.START,
        end: HorizontalGradient.END,
        colors,
        style: items1,
        pointerEvents: "none",
      };
      items1 = [, ,];
      const obj4 = { children: items2 };
      ({ left: arr2[0], gradient: arr2[1] } = tmp4);
      items1[2] = tmp2;
      const memo = react.useMemo(() => {
        const items = [...colors];
        return items.reverse();
      }, items);
      items2 = [React3(LinearGradient, obj5)];
      const obj6 = {
        start: HorizontalGradient.START,
        end: HorizontalGradient.END,
        colors: memo,
        style: items3,
        pointerEvents: "none",
      };
      items3 = [, ,];
      ({ right: arr4[0], gradient: arr4[1] } = tmp4);
      items3[2] = tmp3;
      items2[1] = React3(LinearGradient, obj6);
      return metroRequire(hasOwnProperty, obj4);
    };
const result = size.fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default tmp3;
