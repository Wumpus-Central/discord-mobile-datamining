// === Module 16737: SmartSearchExpandButton ===

// Module 16737 (SmartSearchExpandButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3911 from "module_3911" /* 3911 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 10818 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13310 */;
import useSearchHostSurface from "useSearchHostSurface" /* 16736 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
const createStyles = fn(4866);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" }, pill: { height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" }, surface: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.borderRadius = nativeDefault.radii.round;
  obj3.backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  obj.surface = obj3;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default noop.memo((isCollapsed) => {
  isCollapsed = isCollapsed.isCollapsed;
  const tmp3 = closure_9(useSearchHostSurface.useSearchHostSurfaceColor());
  if (isCollapsed) {
    let ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  const obj2 = { style: tmp3.block, hitSlop: rect, children: null };
  const obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  const tmp9 = _modDef3911;
  if (isCollapsed) {
    let FKLBbW = tmp9.NuTbB9;
    let tmp10 = importDefault;
  } else {
    FKLBbW = tmp9.FKLBbW;
    tmp10 = importDefault;
  }
  obj3.accessibilityLabel = intl.string(FKLBbW);
  obj3.onPress = isCollapsed.onPress;
  const items = [timestampProducer(hasOwnProperty, { style: tmp3.surface, pointerEvents: "none" }), ];
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items[1] = timestampProducer(ChevronSmallUpIcon, { size: "sm", color: tmp10(576).colors.INTERACTIVE_ICON_DEFAULT });
  obj3.children = items;
  obj2.children = React5(React3, obj3);
  return timestampProducer(hasOwnProperty, obj2);
});