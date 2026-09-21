// === Module 13440: DynamicBadgeTooltip ===

// Module 13440 (DynamicBadgeTooltip)
import util from "util" /* 1115 */;
import Pressables from "Pressables" /* 5339 */;
import useTooltip from "useTooltip" /* 11395 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = function DynamicBadgeTooltip(tooltipPosition) {
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
};