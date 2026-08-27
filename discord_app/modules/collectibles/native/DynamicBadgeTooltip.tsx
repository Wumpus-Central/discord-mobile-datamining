// === Module 12446: DynamicBadgeTooltip ===

// Module 12446 (DynamicBadgeTooltip)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_5 = { top: 14, bottom: 14, left: 14, right: 14 };
const result = require("set").fileFinishedImporting("modules/collectibles/native/DynamicBadgeTooltip.tsx");

export const DynamicBadgeTooltip = function DynamicBadgeTooltip(tooltipPosition) {
  let str = tooltipPosition.tooltipPosition;
  ({ children, accessibilityLabel } = tooltipPosition);
  if (str === undefined) {
    str = "bottom";
  }
  let first;
  let callback;
  let React;
  callback = undefined;
  const ref = React.useRef(null);
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const intl = str(first[3]).intl;
  const stringResult = intl.string(str(first[3]).t.dCou7i);
  React = stringResult;
  callback = React.useCallback(() => {
    callback(false);
  }, []);
  const items = [str, stringResult, first, callback];
  const memo = React.useMemo(() => ({ position: str, label: c3, visible: first, onPress: callback }), items);
  let obj = str(first[4]);
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [first];
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(false), 2500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = React.useCallback(() => {
    callback((arg0) => !arg0);
  }, []);
  obj = { ref, onPress: callback1, hitSlop: closure_5, accessibilityRole: "button", accessibilityLabel, accessibilityHint: stringResult, children };
  return callback(str(first[5]).PressableOpacity, obj);
};