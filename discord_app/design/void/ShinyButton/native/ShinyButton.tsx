// === Module 14172: ShinyButton/ShinyButton ===

// Module 14172 (ShinyButton/ShinyButton)
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let AppState = fn(17).AppState;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: null, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } };
let size = { width: 56, height: "500%", transform: null, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
let items = [{ rotate: "30deg" }];
size.transform = items;
obj2.shine = size;
let closure_8 = createStyles.createStyles(obj2);
let __initData = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
size = fn(2);
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: _slicedToArray, shineInnerStyle: noop } = disabled);
  const merged = Object.assign(disabled, Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }));
  width = undefined;
  jsx = undefined;
  closure_8 = undefined;
  __initData = undefined;
  c10 = undefined;
  function handleLayout(nativeEvent) {
    closure_7(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = closure_8();
  AppState = tmp2;
  [width, jsx] = noop.useState(null);
  let items = [width];
  closure_8 = disabled(shineDisabled[6]).useStateFromStores(items, () => first.useReducedMotion, []);
  let obj = disabled(shineDisabled[6]);
  [c9, c10] = noop.useState("active" === AppState.currentState);
  const effect = noop.useEffect(() => {
    closure_0 = closure_5.addEventListener("change", (event) => {
      closure_1_10("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const tmp5 = _slicedToArray(noop.useState("active" === AppState.currentState), 2);
  const fn = function p() {
    if (null == first) {
      const obj = { transform: null };
      const items = [{ translateX: -100 }];
      obj.transform = items;
      let obj2 = obj;
    } else {
      obj2 = { transform: null };
      const obj3 = { translateX: null };
      const obj4 = ReanimatedRexport;
      const obj5 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(-100, { duration: 0 }, "animate-always");
      const obj7 = ReanimatedRexport;
      obj3.translateX = obj4.withRepeat(obj5.withSequence(withTimingResult, obj7.withDelay(750, timing.withTiming(tmp + 100, { duration: 2000 }, "animate-always"))), -1);
      const items1 = [obj3];
      obj2.transform = items1;
    }
    return obj2;
  };
  let obj2 = disabled(shineDisabled[7]);
  fn.__closure = { width, OFFSCREEN_OFFSET: 100, withRepeat: disabled(shineDisabled[7]).withRepeat, withSequence: disabled(shineDisabled[7]).withSequence, withTiming: disabled(shineDisabled[8]).withTiming, withDelay: disabled(shineDisabled[7]).withDelay, INITIAL_ANIMATION_DELAY: 750, ANIMATION_DURATION: 2000 };
  fn.__workletHash = 5550564727650;
  fn.__initData = __initData;
  closure_11 = obj2.useAnimatedStyle(fn);
  let obj4 = {};
  let obj3 = { width, OFFSCREEN_OFFSET: 100, withRepeat: disabled(shineDisabled[7]).withRepeat, withSequence: disabled(shineDisabled[7]).withSequence, withTiming: disabled(shineDisabled[8]).withTiming, withDelay: disabled(shineDisabled[7]).withDelay, INITIAL_ANIMATION_DELAY: 750, ANIMATION_DURATION: 2000 };
  const merged1 = Object.assign(merged);
  let items1 = [disabled.style, tmp2.shinyButton];
  obj4.style = items1;
  obj4.disabled = disabled;
  obj4.renderShine = function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!closure_1_1) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              const obj = { onLayout: handleLayout, style: null, children: null };
              const items = [closure_5.shineContainer, closure_11];
              obj.style = items;
              const obj2 = { style: null, children: null };
              const items1 = [closure_5.shine, _slicedToArray];
              obj2.style = items1;
              const obj3 = { style: null };
              const items2 = [closure_5.shineInner, noop];
              obj3.style = items2;
              obj2.children = jsx(ReanimatedRexportDefault.View, { style: null });
              obj.children = jsx(ReanimatedRexportDefault.View, { style: null, children: null });
              tmp = jsx(ReanimatedRexportDefault.View, { onLayout: handleLayout, style: null, children: null });
            }
          }
        }
      }
    }
    return tmp;
  };
  return jsx(require("Button/Button"), {});
};