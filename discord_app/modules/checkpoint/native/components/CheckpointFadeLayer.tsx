// === Module 14300: CheckpointFadeLayer ===

// Module 14300 (CheckpointFadeLayer)
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import useStableCallbackDefault from "useStableCallback" /* 7790 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 14266 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const Easing = fn(1655).Easing;
let closure_7 = Easing.inOut(fn(1655).Easing.quad);
let closure_8 = { code: "(function CheckpointFadeLayerTsx1(finished){let[visible,runOnJS,handleEnterComplete,handleExitComplete]=this.__closure;if(finished!==true)return;if(visible)runOnJS(handleEnterComplete)();else runOnJS(handleExitComplete)();})" };
let closure_9 = { code: "(function CheckpointFadeLayerTsx2(){let[opacity,hiddenScale,scale]=this.__closure;return{opacity:opacity.get(),transform:hiddenScale===1?undefined:[{scale:scale.get()}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointFadeLayer.tsx");

export default function CheckpointFadeLayer(visible) {
  visible = visible.visible;
  _require = visible;
  const enter = visible.enter;
  importDefault = enter;
  ({ exit: c2, keepMounted } = visible);
  if (keepMounted === undefined) {
    keepMounted = false;
  }
  let flag = visible.mountAfterDelay;
  if (flag === undefined) {
    flag = false;
  }
  let num = visible.hiddenScale;
  if (num === undefined) {
    num = 1;
  }
  ({ onExitComplete: AccessibilityStore, children } = visible);
  let sharedValue;
  let sharedValue1;
  let first;
  closure_10 = undefined;
  let first1;
  closure_12 = undefined;
  closure_13 = undefined;
  closure_14 = undefined;
  let context;
  let first2;
  closure_17 = undefined;
  closure_18 = undefined;
  flag = undefined;
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  let obj = require("initialize");
  let num2 = 0;
  if (visible) {
    num2 = 1;
  }
  sharedValue = require("module_1655").useSharedValue(num2);
  let obj2 = require("module_1655");
  let num3 = 1;
  if (!visible) {
    num3 = num;
  }
  sharedValue1 = require("module_1655").useSharedValue(num3);
  const tmp6 = keepMounted(num.useState(visible), 2);
  first = tmp6[0];
  closure_10 = tmp6[1];
  const tmp8 = keepMounted(num.useState(visible), 2);
  first1 = tmp8[0];
  closure_12 = tmp8[1];
  const tmpResult = require("module_1655");
  let currentWhen = require("usePrevious").useCurrentWhen({ value: children, shouldUpdate: visible });
  closure_13 = useStableCallbackDefault(() => {
    closure_10(false);
    if (AccessibilityStore != null) {
      AccessibilityStore();
    }
  });
  closure_14 = num.useCallback(() => closure_12(true), []);
  context = num.useContext(CheckpointStepHeaderRefContextDefault);
  const tmp13 = keepMounted(num.useState(null), 2);
  first2 = tmp13[0];
  closure_17 = tmp13[1];
  let items1 = [first1, first2, context];
  const callback = num.useCallback((arg0) => {
    closure_0 = arg0;
    closure_17(arg0);
    return () => closure_17((arg0) => {
      let tmp = null;
      if (arg0 !== closure_1_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const effect = num.useEffect(() => {
    if (first1) {
      if (null != first2) {
        if (null != context) {
          closure_0 = tmp3(tmp);
          return () => {
            if (typeof closure_0 === "function") {
              tmp();
            } else {
              context(null);
            }
          };
        }
      }
    }
  }, items1);
  let tmp17 = visible;
  if (visible) {
    tmp17 = !first;
  }
  if (tmp17) {
    tmp17 = !keepMounted;
  }
  closure_18 = tmp17;
  if (flag) {
    flag = !stateFromStores;
  }
  const items2 = [tmp17, flag, enter.delay];
  const effect1 = obj4.useEffect(() => {
    if (closure_18) {
      if (flag) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_1_10(true), _undefined2.delay);
        return () => clearTimeout(closure_0);
      } else {
        closure_10(true);
      }
    }
  }, items2);
  num.useRef(visible);
  const items3 = [visible, first];
  const effect2 = obj4.useEffect(() => {
    if (!closure_18) {
      if (ref.current !== c0) {
        ref.current = tmp;
        if (tmp) {
          closure_10(true);
        } else {
          closure_12(false);
        }
        const tmp10 = tmp ? c1 : c2;
        num = 0;
        if (!stateFromStores) {
          if (tmp) {
            if (!keepMounted) {
              num = 0;
            }
          }
          num = tmp10.delay;
        }
        const obj = { duration: tmp10.duration, easing };
        const obj3 = timing_timing;
        let num2 = 0;
        if (tmp) {
          num2 = 1;
        }
        items = [closure_8, tmp, _mod1655.runOnJS, closure_14, closure_13];
        c0 = undefined;
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        [tmp22, tmp23, tmp24, tmp25, tmp26] = items;
        class CheckpointFadeLayerTsx1 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              if (closure_0) {
                tmp5 = closure_2;
                tmp6 = tmp2(closure_2)();
              } else {
                tmp3 = closure_3;
                tmp4 = tmp2(closure_3)();
              }
            }
            return;
          }
        }
        const items1 = [tmp23, tmp24, tmp25, tmp26];
        CheckpointFadeLayerTsx1.__closure = items1;
        CheckpointFadeLayerTsx1.__workletHash = 11865216228706;
        CheckpointFadeLayerTsx1.__initData = tmp22;
        const result = sharedValue.set(_mod1655.withDelay(num, obj3.withTiming(num2, obj, "respect-motion-settings", CheckpointFadeLayerTsx1)));
        let num4 = 1;
        if (1 !== num) {
          const tmp16Result = _mod1655;
          if (!tmp) {
            num4 = tmp32;
          }
          const result1 = sharedValue1.set(tmp16Result.withDelay(num, timing_timing.withTiming(num4, obj)));
          const tmp16Result2 = timing_timing;
        }
      } else {
        let tmp2 = tmp;
        if (!tmp) {
          tmp2 = !first;
        }
        if (!tmp2) {
          tmp2 = keepMounted;
        }
        if (!tmp2) {
          closure_10(false);
        }
      }
    }
  }, items3);
  require("module_1655");
  const items4 = [first, sharedValue, num, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp21, tmp22, tmp23, tmp24] = items4;
  class CheckpointFadeLayerTsx2 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      tmp = undefined;
      if (1 !== closure_1) {
        obj1 = { scale: null };
        tmp2 = closure_2;
        obj1.scale = closure_2.get();
        items = [];
        items[0] = obj1;
        tmp = items;
      }
      obj.transform = tmp;
      return obj;
    }
  }
  const items5 = [tmp22, tmp23, tmp24];
  CheckpointFadeLayerTsx2.__closure = items5;
  CheckpointFadeLayerTsx2.__workletHash = 17126880187642;
  CheckpointFadeLayerTsx2.__initData = tmp21;
  if (first) {
    let obj3 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items6 = [visible.style, tmp25];
    obj3.style = items6;
    let str = "none";
    if (visible) {
      str = "auto";
    }
    obj3.pointerEvents = str;
    obj3.accessibilityElementsHidden = !visible;
    let str2 = "no-hide-descendants";
    if (visible) {
      str2 = "auto";
    }
    obj3.importantForAccessibility = str2;
    const obj5 = { value: callback, children: null };
    if (visible) {
      currentWhen = children;
    }
    obj5.children = currentWhen;
    obj3.children = stateFromStores(tmp11(14266).Provider, obj5);
    let tmp27Result = tmp27(tmp11(1655).View, obj3);
  } else {
    tmp27Result = null;
  }
  return tmp27Result;
};