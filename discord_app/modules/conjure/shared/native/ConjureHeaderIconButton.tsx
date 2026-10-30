// === Module 12533: ConjureHeaderIconButton ===

// Module 12533 (ConjureHeaderIconButton)
import ClipView from "ClipView" /* 9487 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles((width) => {
  const obj = { button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" }, icon: { width: 24, height: 24 }, disabledIcon: { opacity: 0.5 }, badge: null };
  const size = { position: "absolute", left: 24 - width, top: 24 - width, width, height: width, alignItems: "center", justifyContent: "center" };
  obj.badge = size;
  return obj;
});
const androidRippleConfig = { borderless: true, radius: 20 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureHeaderIconButton.tsx");

export default function ConjureHeaderIconButton(ref) {
  ({ IconComponent, disabled, badge, badgeSize } = ref);
  ({ onPress, accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState } = ref);
  if (badgeSize === undefined) {
    badgeSize = 8;
  }
  const tmp = closure_7(badgeSize);
  let items = [badgeSize];
  const memo = noop.useMemo(() => {
    const point = { shape: ClipView.CutoutShape.Circle, x: null, y: null, size: badgeSize + 4 };
    const diff = 24 - badgeSize;
    const diff1 = diff - 2;
    point.x = diff1;
    point.y = diff1;
    const items = [point];
    return items;
  }, items);
  const obj = { ref: ref.ref, accessibilityRole: "button", accessibilityLabel, accessibilityActions, onAccessibilityAction, accessibilityState, disabled, onPress, activeOpacity: 0.6, androidRippleConfig, style: tmp.button, children: null };
  if (null != badge) {
    const obj2 = { style: tmp.icon, children: null };
    const obj3 = { cutouts: memo, style: null, children: null };
    const items1 = [tmp.icon, ];
    let disabledIcon2 = true === disabled;
    if (disabledIcon2) {
      disabledIcon2 = tmp.disabledIcon;
    }
    items1[1] = disabledIcon2;
    obj3.style = items1;
    obj3.children = closure_5(IconComponent, {});
    const items2 = [closure_5(ClipViewDefault, obj3), ];
    const obj4 = { style: tmp.badge, children: badge };
    items2[1] = closure_5(View, obj4);
    obj2.children = items2;
    let tmp3Result = closure_6(View, obj2);
  } else {
    const items3 = [tmp.icon, ];
    let disabledIcon = true === disabled;
    if (disabledIcon) {
      disabledIcon = tmp.disabledIcon;
    }
    const obj5 = { style: null, children: null };
    items3[1] = disabledIcon;
    obj5.style = items3;
    obj5.children = closure_5(IconComponent, {});
    tmp3Result = closure_5(View, obj5);
  }
  obj.children = tmp3Result;
  return closure_5(badgeSize(6974).PressableOpacity, obj);
};
export const CONJURE_HEADER_BADGE_SIZE = 8;