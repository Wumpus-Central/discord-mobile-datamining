// discord_app/design/components/Tabs/native/TabsGradient.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../../_runtime/05388_LinearGradient.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const HorizontalGradient = fn(1085).HorizontalGradient;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const SPRING_CONFIG = { mass: 1, damping: 30, stiffness: 250 };
const createStyles = fn(5091);
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
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGradientAnimatedStyle(visible) {
      _require = visible;
      const fn = function s() {
        let num = 0;
        if (visible.get()) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, closure_8) };
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = { withSpring: require("spring").withSpring, visible, SPRING_CONFIG };
      fn.__workletHash = 14959306962615;
      fn.__initData = __initData;
      return obj.useAnimatedStyle(fn);
    }
  : function useGradientAnimatedStyle(visible) {
      _require = visible;
      const fn = function s() {
        let num = 0;
        if (visible.get()) {
          num = 1;
        }
        return { opacity: spring.withSpring(num, closure_8) };
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = { withSpring: require("spring").withSpring, visible, SPRING_CONFIG };
      fn.__workletHash = 9616093623476;
      fn.__initData = __initData2;
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
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TabsGradient(state) {
      const cResult = c.c(19);
      state = state.state;
      const colors = state.colors;
      const scrollOffset = state.scrollOffset;
      const itemDimensions = state.itemDimensions;
      const pageWidth = state.pageWidth;
      const fn = function n() {
        value = itemDimensions.get();
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
      const derivedValue = ReanimatedRexport2.useDerivedValue(fn);
      const fn2 = function h() {
        let tmp = scrollOffset.get() > 0;
        if (tmp) {
          tmp = derivedValue.get() > pageWidth;
        }
        return tmp;
      };
      fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      fn2.__workletHash = 2192318560183;
      fn2.__initData = __initData4;
      const tmp3 = closure_12(ReanimatedRexport2.useDerivedValue(fn2));
      const fn3 = function f() {
        value = scrollOffset.get();
        return value < derivedValue.get() - pageWidth && derivedValue.get() > tmp2;
      };
      fn3.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      fn3.__workletHash = 10153920408340;
      fn3.__initData = __initData5;
      const tmp4 = closure_12(ReanimatedRexport2.useDerivedValue(fn3));
      const rect = closure_9();
      if (cResult[0] !== colors) {
        const items = [];
        HermesBuiltin.arraySpread(colors, 0);
        const reversed = items.reverse();
        cResult[0] = colors;
        cResult[1] = reversed;
        let tmp5 = reversed;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp3) {
        if (cResult[3] === rect.gradient) {
          if (cResult[4] === rect.left) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] === colors) {
            if (cResult[7] === tmp10) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp4) {
              if (cResult[10] === rect.gradient) {
                if (cResult[11] === rect.right) {
                  let tmp16 = cResult[12];
                }
                if (cResult[13] === tmp5) {
                  if (cResult[14] === tmp16) {
                    let tmp17 = cResult[15];
                  }
                  if (cResult[16] === tmp11) {
                    if (cResult[17] === tmp17) {
                      let tmp22 = cResult[18];
                    }
                    return tmp22;
                  }
                  const obj7 = { children: null };
                  const items1 = [tmp11, tmp17];
                  obj7.children = items1;
                  const tmp25 = timestampProducer(hasOwnProperty, obj7);
                  cResult[16] = tmp11;
                  cResult[17] = tmp17;
                  cResult[18] = tmp25;
                  tmp22 = tmp25;
                }
                const obj10 = { start: null, end: null, colors: null, style: null, pointerEvents: "none" };
                ({ START: obj6.start, END: obj6.end } = HorizontalGradient);
                obj10.colors = tmp5;
                obj10.style = tmp16;
                const tmp21 = React4(LinearGradient, obj10);
                cResult[13] = tmp5;
                cResult[14] = tmp16;
                cResult[15] = tmp21;
                tmp17 = tmp21;
              }
            }
            const items2 = [, ,];
            ({ right: arr3[0], gradient: arr3[1] } = rect);
            items2[2] = tmp4;
            cResult[9] = tmp4;
            cResult[10] = rect.gradient;
            cResult[11] = rect.right;
            cResult[12] = items2;
            tmp16 = items2;
          }
          const obj11 = { start: null, end: null, colors: null, style: null, pointerEvents: "none" };
          ({ START: obj5.start, END: obj5.end } = HorizontalGradient);
          obj11.colors = colors;
          obj11.style = tmp10;
          const tmp15 = React4(LinearGradient, obj11);
          cResult[6] = colors;
          cResult[7] = tmp10;
          cResult[8] = tmp15;
          tmp11 = tmp15;
        }
      }
      const items3 = [, ,];
      ({ left: arr2[0], gradient: arr2[1] } = rect);
      items3[2] = tmp3;
      cResult[2] = tmp3;
      cResult[3] = rect.gradient;
      cResult[4] = rect.left;
      cResult[5] = items3;
      tmp10 = items3;
    }
  : function TabsGradient(state) {
      state = state.state;
      const colors = state.colors;
      const scrollOffset = state.scrollOffset;
      const itemDimensions = state.itemDimensions;
      const pageWidth = state.pageWidth;
      const fn = function f() {
        value = itemDimensions.get();
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
      const derivedValue = ReanimatedRexport2.useDerivedValue(fn);
      const fn2 = function p() {
        let tmp = scrollOffset.get() > 0;
        if (tmp) {
          tmp = derivedValue.get() > pageWidth;
        }
        return tmp;
      };
      fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      fn2.__workletHash = 14441291265460;
      fn2.__initData = __initData7;
      const tmp2 = closure_12(ReanimatedRexport2.useDerivedValue(fn2));
      class W {
        constructor() {
          obj = closure_5;
          value = scrollOffset.get();
          tmp3 = value < closure_5.get() - pageWidth && obj.get() > tmp2;
          return tmp3;
        }
      }
      W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
      W.__workletHash = 6131269821593;
      W.__initData = __initData8;
      const tmp4 = closure_9();
      let items = [colors];
      const obj4 = { children: null };
      const obj5 = {
        start: HorizontalGradient.START,
        end: HorizontalGradient.END,
        colors,
        style: null,
        pointerEvents: "none",
      };
      const items1 = [, ,];
      ({ left: arr2[0], gradient: arr2[1] } = tmp4);
      items1[2] = tmp2;
      obj5.style = items1;
      const memo = noop.useMemo(() => {
        const items = [...colors];
        return items.reverse();
      }, items);
      const items2 = [React4(LinearGradient, obj5)];
      const obj6 = {
        start: HorizontalGradient.START,
        end: HorizontalGradient.END,
        colors: memo,
        style: null,
        pointerEvents: "none",
      };
      const items3 = [, ,];
      ({ right: arr4[0], gradient: arr4[1] } = tmp4);
      items3[2] = closure_12(ReanimatedRexport2.useDerivedValue(W));
      obj6.style = items3;
      items2[1] = React4(LinearGradient, obj6);
      obj4.children = items2;
      return timestampProducer(hasOwnProperty, obj4);
    };
