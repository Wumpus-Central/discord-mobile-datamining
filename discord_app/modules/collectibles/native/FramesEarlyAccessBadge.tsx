// === Module 13133: FramesEarlyAccessBadge ===

// Module 13133 (FramesEarlyAccessBadge)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import LayerScope from "LayerScope" /* 7156 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 8830 */;
import useTooltip from "useTooltip" /* 11128 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
fn(4560);
let createStyles = { pillBase: null, pillDark: null, pillLight: null, text: null };
createStyles = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.round, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.pillBase = createStyles;
createStyles.pillDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
let obj1 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
createStyles.pillLight = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const obj2 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
createStyles.text = { marginLeft: nativeDefault.space.PX_8, textTransform: "uppercase" };
let closure_10 = createStyles.createStyles(createStyles);
function BadgeWithTooltip(tooltipPosition) {
  tooltipPosition = tooltipPosition.tooltipPosition;
  const tmp3 = closure_10();
  const ref = noop.useRef(null);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const visible = tmp5[0];
  closure_2 = tmp5[1];
  const intl = util.intl;
  const stringResult = intl.string(util.t["L9B+ZZ"]);
  c3 = stringResult;
  const onPress = noop.useCallback(() => {
    closure_2(false);
  }, []);
  const items = [tooltipPosition, stringResult, visible, onPress];
  const memo = noop.useMemo(() => ({ position: tooltipPosition, label, visible, onPress }), items);
  let obj = useTooltip;
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [visible];
  const effect = noop.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_2(false);
      }, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_2((arg0) => !arg0);
  }, []);
  const tmp2 = useThemeDefault();
  const isThemeDarkResult = shared.isThemeDark(tmp2);
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl2 = tmp7(1114).intl;
  const stringResult1 = intl2.string(util.t["1m6qcO"]);
  obj = { ref, onPress: callback1, hitSlop, accessibilityRole: "button", accessibilityLabel: stringResult1, accessibilityHint: stringResult, style: null, children: null };
  const items2 = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  obj.style = items2;
  const items3 = [React5(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: str }), ];
  obj = { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult1 };
  items3[1] = React5(Text_Text.Text, obj);
  obj.children = items3;
  return React6(hasOwnProperty, obj);
}
function StaticBadge() {
  const tmp3 = closure_10();
  let obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl = tmp4(1114).intl;
  const stringResult = intl.string(util.t["1m6qcO"]);
  obj = { accessibilityLabel: stringResult, style: null, children: null };
  const items = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  obj.style = items;
  const items1 = [React5(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: str }), ];
  obj = { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult };
  items1[1] = React5(Text_Text.Text, obj);
  obj.children = items1;
  return React6(timestampProducer, obj);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FramesEarlyAccessBadge.tsx");

export default function _default(tooltipPosition) {
  let str = tooltipPosition.tooltipPosition;
  if (str === undefined) {
    str = "top";
  }
  let flag = tooltipPosition.inheritLayerScope;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tooltipPosition.disablePressable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = useCanPurchaseFrames;
  if (!obj.useIsProfileFramesEarlyAccessPhase(tooltipPosition.location)) {
    return null;
  } else if (flag2) {
    let tmp3Result = tmp3(StaticBadge, {});
  } else if (flag) {
    obj = { tooltipPosition: str };
    tmp3Result = tmp3(BadgeWithTooltip, obj);
  } else {
    obj = { zIndex: 3, children: null };
    const obj1 = { tooltipPosition: str };
    obj.children = tmp3(BadgeWithTooltip, obj1);
    tmp3Result = tmp3(LayerScope.LayerScope, obj);
  }
};