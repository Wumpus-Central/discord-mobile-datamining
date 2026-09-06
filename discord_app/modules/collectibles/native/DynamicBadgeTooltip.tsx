// discord_app/modules/collectibles/native/DynamicBadgeTooltip.tsx
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useTooltip from "../../../design/components/Tooltip/native/useTooltip.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const ref = noop.useRef(null);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const visible = tmp2[0];
  closure_2 = tmp2[1];
  const intl = util.intl;
  const stringResult = intl.string(util.t.dCou7i);
  c3 = stringResult;
  const onPress = noop.useCallback(() => {
    closure_2(false);
  }, []);
  const items = [str, stringResult, visible, onPress];
  const memo = noop.useMemo(() => ({ position: str, label, visible, onPress }), items);
  let obj = useTooltip;
  const tooltip = obj.useTooltip(ref, memo);
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
  obj = {
    ref,
    onPress: callback1,
    hitSlop,
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityHint: stringResult,
    children,
  };
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
