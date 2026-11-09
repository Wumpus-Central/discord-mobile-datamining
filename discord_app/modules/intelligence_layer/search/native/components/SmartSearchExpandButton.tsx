// === Module 19125: SmartSearchExpandButton ===

// Module 19125 (SmartSearchExpandButton)
import nativeDefault from "native" /* 575 */;
import _modDef4249 from "module_4249" /* 4249 */;
import HapticUtils from "HapticUtils" /* 5376 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
const createStyles = fn(5140);
let closure_10 = createStyles.createStyles((backgroundColor) => {
  const obj = { block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" }, pill: { height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" }, surface: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.borderRadius = nativeDefault.radii.round;
  obj3.backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  obj.surface = obj3;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default noop.memo(function SmartSearchExpandButton(arg0) {
  ({ isCollapsed, onPress } = arg0);
  const tmp3 = closure_10(onPress(19124).useSearchHostSurfaceColor());
  if (isCollapsed) {
    let ChevronSmallUpIcon = onPress(11555).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = onPress(15750).ChevronSmallUpIcon;
  }
  items = [onPress];
  const obj2 = { style: tmp3.block, hitSlop: rect, children: null };
  const obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items);
  const intl = onPress(1113).intl;
  const tmp10 = _modDef4249;
  if (isCollapsed) {
    let FKLBbW = tmp10.NuTbB9;
    let tmp11 = importDefault;
  } else {
    FKLBbW = tmp10.FKLBbW;
    tmp11 = importDefault;
  }
  obj3.accessibilityLabel = intl.string(FKLBbW);
  obj3.onPress = callback;
  const items1 = [closure_7(closure_6, { style: tmp3.surface, pointerEvents: "none" }), ];
  const obj = onPress(19124);
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items1[1] = closure_7(ChevronSmallUpIcon, { size: "sm", color: tmp11(575).colors.INTERACTIVE_ICON_DEFAULT });
  obj3.children = items1;
  obj2.children = closure_8(closure_4, obj3);
  return closure_7(closure_6, obj2);
});