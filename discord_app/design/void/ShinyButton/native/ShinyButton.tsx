// discord_app/design/void/ShinyButton/native/ShinyButton.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../modules/a11y/AccessibilityStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let AppState = fn(17).AppState;
let jsx = fn(21).jsx;
fn(4560);
const createStyles = {
  shinyButton: { overflow: "hidden" },
  shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" },
  shine: null,
  shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" },
};
let size = {
  width: 56,
  height: "500%",
  transform: null,
  backgroundColor: "rgba(255,255,255,0.1)",
  top: "-100%",
  alignItems: "center",
};
let items = [{ rotate: "30deg" }];
size.transform = items;
createStyles.shine = size;
let closure_8 = createStyles.createStyles(createStyles);
let __initData = {
  code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}",
};
size = fn(2);
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: _slicedToArray, shineInnerStyle: noop } = disabled);
  const merged = Object.assign(
    disabled,
    Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }),
  );
  closure_8 = undefined;
  __initData = undefined;
  c10 = undefined;
  function handleLayout(nativeEvent) {
    closure_7(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = closure_8();
  AppState = tmp2;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const width = tmp3[0];
  jsx = tmp3[1];
  let obj = disabled(shineDisabled[6]);
  let items = [width];
  closure_8 = obj.useStateFromStores(items, () => first.useReducedMotion, []);
  [c9, c10] = _slicedToArray(noop.useState("active" === AppState.currentState), 2);
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
      let obj = { transform: null };
      const items = [{ translateX: -100 }];
      obj.transform = items;
    } else {
      obj = { transform: null };
      obj = { translateX: null };
      const obj4 = ReanimatedRexport;
      const obj5 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(-100, { duration: 0 }, "animate-always");
      const obj7 = ReanimatedRexport;
      obj.translateX = obj4.withRepeat(
        obj5.withSequence(
          withTimingResult,
          obj7.withDelay(750, timing.withTiming(tmp + 100, { duration: 2000 }, "animate-always")),
        ),
        -1,
      );
      const items1 = [obj];
      obj.transform = items1;
    }
    return obj;
  };
  obj = {
    width,
    OFFSCREEN_OFFSET: 100,
    withRepeat: disabled(shineDisabled[7]).withRepeat,
    withSequence: disabled(shineDisabled[7]).withSequence,
    withTiming: disabled(shineDisabled[8]).withTiming,
    withDelay: disabled(shineDisabled[7]).withDelay,
    INITIAL_ANIMATION_DELAY: 750,
    ANIMATION_DURATION: 2000,
  };
  fn.__closure = obj;
  fn.__workletHash = 5550564727650;
  fn.__initData = __initData;
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
      if (!closure_1_1) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              let obj = { onLayout: handleLayout, style: null, children: null };
              const items = [closure_5.shineContainer, closure_11];
              obj.style = items;
              obj = { style: null, children: null };
              const items1 = [closure_5.shine, _slicedToArray];
              obj.style = items1;
              obj = { style: null };
              const items2 = [closure_5.shineInner, noop];
              obj.style = items2;
              obj.children = jsx(ReanimatedRexportDefault.View, { style: null });
              obj.children = jsx(ReanimatedRexportDefault.View, { style: null });
              tmp = jsx(ReanimatedRexportDefault.View, { style: null });
            }
          }
        }
      }
    }
    return tmp;
  };
  return jsx(require("Button/Button"), {});
}
