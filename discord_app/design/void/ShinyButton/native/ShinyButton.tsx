// === Module 16589: ShinyButton/ShinyButton ===

// Module 16589 (ShinyButton/ShinyButton)
import Button_ButtonDefault from "Button/Button" /* 1190 */;
import _modDef1655 from "module_1655" /* 1655 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

const require = globalThis.__r;

const require = fn;
let AppState = fn(17).AppState;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = { shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: null, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } };
let size = { width: 56, height: "500%", transform: null, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
let items = [{ rotate: "30deg" }];
size.transform = items;
obj2.shine = size;
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function ShinyButtonTsx1(){let[width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION]=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};})" };
size = fn(2);
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  disabled = disabled.disabled;
  _require = disabled;
  ({ submitting: c1, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: c3, shineInnerStyle: c4 } = disabled);
  const merged = Object.assign(disabled, Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }));
  c8 = undefined;
  c9 = undefined;
  closure_10 = undefined;
  function handleLayout(nativeEvent) {
    _undefined5(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = c8();
  AppState = tmp2;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  c6 = tmp3[1];
  items = [c6];
  require("initialize").useStateFromStores(items, () => _undefined5.useReducedMotion, []);
  let obj = require("initialize");
  [c8, c9] = noop.useState("active" === AppState.currentState);
  const effect = noop.useEffect(() => {
    closure_0 = _undefined4.addEventListener("change", (event) => {
      closure_1_9("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const tmp5 = _slicedToArray(noop.useState("active" === AppState.currentState), 2);
  let items1 = [c9, tmp3[0], 100, require("module_1655").withRepeat, require("module_1655").withSequence, require("timing/timing").withTiming, require("module_1655").withDelay, 750, 2000];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  AppState = undefined;
  c6 = undefined;
  duration = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items1;
  class ShinyButtonTsx1 {
    constructor() {
      if (null == closure_0) {
        obj = { transform: null };
        obj1 = { translateX: null };
        tmp2 = closure_1;
        obj1.translateX = -closure_1;
        items = [];
        items[0] = obj1;
        obj.transform = items;
        obj6 = obj;
      } else {
        obj6 = { transform: null };
        obj7 = { translateX: null };
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp6 = closure_1;
        str = "animate-always";
        tmp8 = closure_5;
        tmp9 = closure_6;
        obj8 = { duration: null };
        tmp10 = closure_7;
        obj8.duration = closure_7;
        tmp7 = closure_4(-closure_1, { duration: 0 }, "animate-always");
        num = -1;
        obj7.translateX = closure_2(closure_3(tmp7, closure_5(closure_6, closure_4(tmp + closure_1, obj8, "animate-always"))), -1);
        items1 = [];
        items1[0] = obj7;
        obj6.transform = items1;
      }
      return obj6;
    }
  }
  let items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  ShinyButtonTsx1.__closure = items2;
  ShinyButtonTsx1.__workletHash = 1149292223259;
  ShinyButtonTsx1.__initData = tmp7;
  closure_10 = require("module_1655").useAnimatedStyle(ShinyButtonTsx1);
  let obj3 = {};
  let obj2 = require("module_1655");
  const merged1 = Object.assign(merged);
  const items3 = [disabled.style, tmp2.shinyButton];
  obj3.style = items3;
  obj3.disabled = disabled;
  obj3.renderShine = function renderShine() {
    let tmp = null;
    if (!c0) {
      tmp = null;
      if (!c1) {
        tmp = null;
        if (!c7) {
          tmp = null;
          if (!c2) {
            tmp = null;
            if (c8) {
              const obj = { onLayout: handleLayout, style: null, children: null };
              items = [_undefined4.shineContainer, closure_10];
              obj.style = items;
              const obj2 = { style: null, children: null };
              const items1 = [_undefined4.shine, c3];
              obj2.style = items1;
              const obj3 = { style: null };
              const items2 = [_undefined4.shineInner, c4];
              obj3.style = items2;
              obj2.children = jsx(_modDef1655.View, { style: null });
              obj.children = jsx(_modDef1655.View, { style: null, children: null });
              tmp = jsx(_modDef1655.View, { onLayout: handleLayout, style: null, children: null });
            }
          }
        }
      }
    }
    return tmp;
  };
  return duration(Button_ButtonDefault, obj3);
};