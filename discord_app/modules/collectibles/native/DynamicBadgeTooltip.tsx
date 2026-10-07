// === Module 12986: DynamicBadgeTooltip ===

// Module 12986 (DynamicBadgeTooltip)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 5916 */;
import useTooltip from "useTooltip" /* 9896 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ children, accessibilityLabel, tooltipPosition } = arg0);
  let str = "bottom";
  if (undefined !== tooltipPosition) {
    str = tooltipPosition;
  }
  const ref = noop.useRef(null);
  [visible, dependencyMap] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.dCou7i);
    cResult[0] = stringResult;
    let first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        tmp = closure_1(false);
        return;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        tmp = closure_1(false);
        return;
      }
    }
  }
  if (cResult[2] === str) {
    class S {
      constructor() {
        tmp = closure_1(false);
        return;
      }
    }
    const tooltip = useTooltip.useTooltip(ref, obj4);
    if (cResult[5] !== visible) {
      class E {
        constructor() {
          if (closure_0) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 2500;
            closure_0 = setTimeout(() => { ... }, 2500);
            return () => { ... };
          } else {
            return;
          }
        }
      }
      const items = [visible];
      cResult[5] = visible;
      cResult[6] = E;
      cResult[7] = items;
      let tmp12 = items;
    } else {
      class E {
        constructor() {
          if (closure_0) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 2500;
            closure_0 = setTimeout(() => { ... }, 2500);
            return () => { ... };
          } else {
            return;
          }
        }
      }
      tmp12 = cResult[7];
    }
    const effect = noop.useEffect(E, tmp12);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          if (closure_0) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 2500;
            closure_0 = setTimeout(() => { ... }, 2500);
            return () => { ... };
          } else {
            return;
          }
        }
      }
      cResult[8] = tmp15;
    } else {
      class E {
        constructor() {
          if (closure_0) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 2500;
            closure_0 = setTimeout(() => { ... }, 2500);
            return () => { ... };
          } else {
            return;
          }
        }
      }
    }
    if (cResult[9] === accessibilityLabel) {
      class E {
        constructor() {
          if (closure_0) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 2500;
            closure_0 = setTimeout(() => { ... }, 2500);
            return () => { ... };
          } else {
            return;
          }
        }
      }
      return tmp16;
    }
    const obj3 = { ref, onPress: tmp15, hitSlop, accessibilityRole: "button", accessibilityLabel, accessibilityHint: first1, children };
    const tmp19 = jsx(Pressables.PressableOpacity, { ref, onPress: tmp15, hitSlop, accessibilityRole: "button", accessibilityLabel, accessibilityHint: first1, children });
    cResult[9] = accessibilityLabel;
    cResult[10] = children;
    cResult[11] = tmp19;
    tmp16 = tmp19;
    const tmpResult = useTooltip;
  }
  obj4 = { position: str, label: first1, visible, onPress: S };
  cResult[2] = str;
  cResult[3] = visible;
  cResult[4] = obj4;
}) : ((tooltipPosition) => {
  let str = tooltipPosition.tooltipPosition;
  ({ children, accessibilityLabel } = tooltipPosition);
  if (str === undefined) {
    str = "bottom";
  }
  visible = undefined;
  closure_2 = undefined;
  const ref = noop.useRef(null);
  [visible, closure_2] = noop.useState(false);
  const intl = util.intl;
  const stringResult = intl.string(util.t.dCou7i);
  c3 = stringResult;
  const onPress = noop.useCallback(() => {
    closure_2(false);
  }, []);
  const items = [str, stringResult, visible, onPress];
  const memo = noop.useMemo(() => ({ position: str, label, visible, onPress }), items);
  const tooltip = useTooltip.useTooltip(ref, memo);
  const items1 = [visible];
  const effect = noop.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 2500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_2((arg0) => !arg0);
  }, []);
  return jsx(Pressables.PressableOpacity, { ref, onPress: callback1, hitSlop, accessibilityRole: "button", accessibilityLabel, accessibilityHint: stringResult, children });
});