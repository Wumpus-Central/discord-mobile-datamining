// === Module 13449: ShinyButton ===

// Module 13449 (ShinyButton)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let items = [{ rotate: "30deg" }];
let closure_8 = createCacheKey.createStyles({ shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: { width: 56, height: "500%", transform: items, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" }, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } });
let closure_9 = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = require("obj132").fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: closure_3, shineInnerStyle: closure_4 } = disabled);
  const merged = Object.assign(disabled, Object.create(null));
  let callback2;
  c9 = undefined;
  c10 = undefined;
  function handleLayout(nativeEvent) {
    callback(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = callback2();
  AppState = tmp2;
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  jsx = tmp3[1];
  let obj = disabled(shineDisabled[6]);
  let items = [first];
  callback2 = obj.useStateFromStores(items, () => first.useReducedMotion, []);
  [c9, c10] = callback(React.useState("active" === AppState.currentState), 2);
  const effect = React.useEffect(() => {
    closure_0 = closure_5.addEventListener("change", (event) => {
      callback("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const tmp5 = callback(React.useState("active" === AppState.currentState), 2);
  const fn = function p() {
    if (null == first) {
      let obj = { transform: null };
      const items = [{ translateX: -100 }];
      obj[0] = items;
    } else {
      obj = { translateX: null };
      const obj4 = disabled(shineDisabled[7]);
      const obj5 = disabled(shineDisabled[7]);
      const obj6 = disabled(shineDisabled[8]);
      const withTimingResult = disabled(shineDisabled[8]).withTiming(-100, { duration: 0 }, "animate-always");
      const obj7 = disabled(shineDisabled[7]);
      obj[0] = obj4.withRepeat(obj5.withSequence(withTimingResult, obj7.withDelay(750, disabled(shineDisabled[8]).withTiming(tmp + 100, { duration: 2000 }, "animate-always"))), -1);
      const items1 = [obj];
      obj[0] = items1;
      const obj8 = disabled(shineDisabled[8]);
    }
    return obj;
  };
  obj = { width: first, OFFSCREEN_OFFSET: 100, withRepeat: disabled(shineDisabled[7]).withRepeat, withSequence: disabled(shineDisabled[7]).withSequence, withTiming: disabled(shineDisabled[8]).withTiming, withDelay: disabled(shineDisabled[7]).withDelay, INITIAL_ANIMATION_DELAY: 750, ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 5550564727650;
  fn.__initData = c9;
  closure_11 = disabled(shineDisabled[7]).useAnimatedStyle(fn);
  obj = {};
  const obj2 = disabled(shineDisabled[7]);
  const merged1 = Object.assign(merged);
  let items1 = [disabled.style, tmp2.shinyButton];
  obj.style = items1;
  obj.disabled = disabled;
  obj.renderShine = function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!closure_1) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              let obj = { onLayout: null, style: null, children: null };
              obj[0] = handleLayout;
              const items = [closure_5.shineContainer, closure_11];
              obj[1] = items;
              obj = { style: null, children: null };
              const items1 = [closure_5.shine, closure_3];
              obj[0] = items1;
              obj = { style: null };
              const items2 = [closure_5.shineInner, closure_4];
              obj[0] = items2;
              obj[1] = callback(importDefault(shineDisabled[7]).View, obj);
              obj[2] = callback(importDefault(shineDisabled[7]).View, obj);
              tmp = callback(importDefault(shineDisabled[7]).View, obj);
            }
          }
        }
      }
    }
    return tmp;
  };
  return jsx(importDefault(shineDisabled[9]), {});
};