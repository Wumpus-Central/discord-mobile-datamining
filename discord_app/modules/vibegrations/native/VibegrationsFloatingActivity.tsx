// === Module 17048: VibegrationsFloatingActivity ===

// Module 17048 (VibegrationsFloatingActivity)
import nativeDefault from "native" /* 576 */;
import _modDef3678 from "module_3678" /* 3678 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { root: null, pill: null, pillMain: null, checklistButton: null, panel: null, label: null };
const rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center" };
obj2.root = rect;
obj2.pill = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
let obj3 = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
obj2.pillMain = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.checklistButton = { paddingLeft: nativeDefault.space.PX_12 };
let obj5 = { paddingLeft: nativeDefault.space.PX_12 };
obj2.panel = { maxWidth: "100%", marginBottom: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 4 };
obj2.label = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function VibegrationsFloatingActivityTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFloatingActivity.tsx");

export default function VibegrationsFloatingActivity(arg0) {
  ({ line, todos } = arg0);
  let sharedValue;
  importDefault = undefined;
  ({ onJumpToActivity, bottom, agents } = arg0);
  const tmp = closure_8();
  sharedValue = sharedValue(4492).useSharedValue(0);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(1, { duration: 150 }));
    return () => sharedValue(dependencyMap[6]).cancelAnimation(closure_1_0);
  }, items);
  const obj = sharedValue(4492);
  class S {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  S.__closure = { opacity: sharedValue };
  S.__workletHash = 13383549561987;
  S.__initData = __initData;
  const animatedStyle = sharedValue(4492).useAnimatedStyle(S);
  const obj2 = sharedValue(4492);
  [tmp8, c1] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, { bottom }, animatedStyle];
  obj3.style = items1;
  let tmp12 = null;
  if (tmp8) {
    tmp12 = null;
    if (null != todos) {
      const obj4 = { style: tmp.panel, children: null };
      const obj5 = { todos, agents, announceProgress: false };
      obj4.children = closure_6(tmp11(17032), obj5);
      tmp12 = closure_6(View, obj4);
    }
  }
  const items2 = [tmp12, ];
  const obj6 = { style: tmp.pill, children: null };
  const obj7 = { style: tmp.pillMain, accessibilityRole: "button", accessibilityLabel: null, hitSlop: 8, onPress: null, children: null };
  const intl = tmp2(1115).intl;
  obj7.accessibilityLabel = intl.formatToPlainString(_modDef3678.Sk4CzQ, { activity: line });
  obj7.onPress = onJumpToActivity;
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items3 = [closure_6(sharedValue(10407).MagicWandIcon, { size: "xs", color: nativeDefault.colors.TEXT_BRAND }), ];
  const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  items3[1] = closure_6(View, { style: tmp.label, children: closure_6(sharedValue(4752).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: line }) });
  obj7.children = items3;
  const items4 = [closure_7(sharedValue(5334).PressableOpacity, obj7), ];
  if (null == todos) {
    items4[1] = null;
    obj6.children = items4;
    items2[1] = closure_7(View, obj6);
    obj3.children = items2;
    return closure_7(ReanimatedRexportDefault.View, obj3);
  } else {
    const obj10 = { style: tmp.checklistButton, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, hitSlop: 8, onPress: null, children: null };
    const obj11 = { expanded: tmp8 };
    obj10.accessibilityState = obj11;
    const intl2 = tmp2(1115).intl;
    obj10.accessibilityLabel = intl2.string(tmp11(3678).OZIOl8);
    obj10.onPress = callback;
    let colors = tmp11(576).colors;
    const obj12 = { size: "xs", color: tmp8 ? colors.TEXT_BRAND : colors.TEXT_MUTED };
    colors = closure_6(tmp2(5750).ClipboardListIcon, obj12);
    obj10.children = colors;
    closure_6(tmp2(5334).PressableOpacity, obj10);
  }
  const obj9 = { style: tmp.label, children: closure_6(sharedValue(4752).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: line }) };
};