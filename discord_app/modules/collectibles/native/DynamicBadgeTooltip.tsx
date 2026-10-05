// discord_app/modules/collectibles/native/DynamicBadgeTooltip.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useTooltip from "../../../design/components/Tooltip/native/useTooltip.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let num, tmp;

const jsx = Fragment.jsx;
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let children;
      let first;
      let first1;
      let obj4;
      let tmp16;
      let tooltipPosition;
      const obj = react2;
      const cResult = obj.c(12);
      ({ children, accessibilityLabel, tooltipPosition } = arg0);
      let str = "bottom";
      if (undefined !== tooltipPosition) {
        str = tooltipPosition;
      }
      const ref = react.useRef(null);
      [first, dependencyMap] = react.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.dCou7i);
        cResult[0] = stringResult;
        first1 = stringResult;
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
        let tmp12;
        class S {
          constructor() {
            tmp = closure_1(false);
            return;
          }
        }
        const tmpResult = useTooltip;
        const tooltip = tmpResult.useTooltip(ref, obj4);
        if (cResult[5] !== first) {
          class E {
            constructor() {
              if (closure_0) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 2500;
                closure_0 = setTimeout(() => {
                  /* body not rendered: F143058 */
                }, 2500);
                return () => {
                  /* body not rendered: F143059 */
                };
              } else {
                return;
              }
            }
          }
          const items = [first];
          cResult[5] = first;
          cResult[6] = E;
          cResult[7] = items;
          tmp12 = items;
        } else {
          class E {
            constructor() {
              if (closure_0) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 2500;
                closure_0 = setTimeout(() => {
                  /* body not rendered: F143058 */
                }, 2500);
                return () => {
                  /* body not rendered: F143059 */
                };
              } else {
                return;
              }
            }
          }
          tmp12 = cResult[7];
        }
        const effect = react.useEffect(E, tmp12);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              if (closure_0) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 2500;
                closure_0 = setTimeout(() => {
                  /* body not rendered: F143058 */
                }, 2500);
                return () => {
                  /* body not rendered: F143059 */
                };
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
                closure_0 = setTimeout(() => {
                  /* body not rendered: F143058 */
                }, 2500);
                return () => {
                  /* body not rendered: F143059 */
                };
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
                closure_0 = setTimeout(() => {
                  /* body not rendered: F143058 */
                }, 2500);
                return () => {
                  /* body not rendered: F143059 */
                };
              } else {
                return;
              }
            }
          }
          return tmp16;
        }
        const tmp19 = jsx(Pressables.PressableOpacity, {
          ref,
          onPress: tmp15,
          hitSlop,
          accessibilityRole: "button",
          accessibilityLabel,
          accessibilityHint: first1,
          children,
        });
        cResult[9] = accessibilityLabel;
        cResult[10] = children;
        cResult[11] = tmp19;
        tmp16 = tmp19;
      }
      obj4 = { position: str, label: first1, visible: first, onPress: S };
      cResult[2] = str;
      cResult[3] = first;
      cResult[4] = obj4;
    }
  : (tooltipPosition) => {
      let accessibilityLabel;
      let children;
      let closure_2;
      let first;
      let str = tooltipPosition.tooltipPosition;
      ({ children, accessibilityLabel } = tooltipPosition);
      if (str === undefined) {
        str = "bottom";
      }
      first = undefined;
      closure_2 = undefined;
      const ref = react.useRef(null);
      [first, closure_2] = react.useState(false);
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.dCou7i);
      let c3 = stringResult;
      const callback = react.useCallback(() => {
        closure_2(false);
      }, []);
      const items = [str, stringResult, first, callback];
      const memo = react.useMemo(() => ({ position: str, label, visible, onPress }), items);
      const obj = useTooltip;
      const tooltip = obj.useTooltip(ref, memo);
      const items1 = [first];
      const effect = react.useEffect(() => {
        let closure_0;
        if (first) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => closure_1_2(false), 2500);
          return () => clearTimeout(closure_0);
        }
      }, items1);
      const callback1 = react.useCallback(() => {
        closure_2((arg0) => !arg0);
      }, []);
      return jsx(Pressables.PressableOpacity, {
        ref,
        onPress: callback1,
        hitSlop,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityHint: stringResult,
        children,
      });
    };
const result = size.fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = tmp2;
