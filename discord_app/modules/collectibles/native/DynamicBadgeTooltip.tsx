// discord_app/modules/collectibles/native/DynamicBadgeTooltip.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useTooltip from "../../../design/components/Tooltip/native/useTooltip.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = ReactCompilerGating.isReactCompilerEnabled() ? (function DynamicBadgeTooltip(arg0) {
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
      class D {
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
      cResult[6] = D;
      cResult[7] = items;
      let tmp12 = items;
    } else {
      class D {
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
    const effect = noop.useEffect(D, tmp12);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          tmp = closure_1(() => { ... });
          return;
        }
      }
      cResult[8] = E;
    } else {
      class E {
        constructor() {
          tmp = closure_1(() => { ... });
          return;
        }
      }
    }
    if (cResult[9] === accessibilityLabel) {
      class E {
        constructor() {
          tmp = closure_1(() => { ... });
          return;
        }
      }
      return tmp15;
    }
    const obj3 = { ref, onPress: E, hitSlop, accessibilityRole: "button", accessibilityLabel, accessibilityHint: first1, children };
    const tmp18 = jsx(Pressables.PressableOpacity, { ref, onPress: E, hitSlop, accessibilityRole: "button", accessibilityLabel, accessibilityHint: first1, children });
    cResult[9] = accessibilityLabel;
    cResult[10] = children;
    cResult[11] = tmp18;
    tmp15 = tmp18;
    const tmpResult = useTooltip;
  }
  obj4 = { position: str, label: first1, visible, onPress: S };
  cResult[2] = str;
  cResult[3] = visible;
  cResult[4] = obj4;
}) : (function DynamicBadgeTooltip(tooltipPosition) {
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