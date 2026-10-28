// discord_app/modules/conjure/shared/native/ConjureHeaderIconButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5004);
let closure_7 = createStyles.createStyles((width) => {
  const obj = {
    button: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
    icon: { width: 24, height: 24 },
    disabledIcon: { opacity: 0.5 },
    badge: null,
  };
  const size = {
    position: "absolute",
    left: 24 - width,
    top: 24 - width,
    width,
    height: width,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.badge = size;
  return obj;
});
const androidRippleConfig = { borderless: true, radius: 20 };
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureHeaderIconButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureHeaderIconButton(arg0) {
      const cResult = c.c(20);
      ({
        IconComponent,
        onPress,
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        badge,
        badgeSize,
        ref,
      } = arg0);
      let num = 8;
      let num2 = 8;
      if (undefined !== badgeSize) {
        num2 = badgeSize;
      }
      const tmp4 = closure_7(num2);
      if (cResult[0] !== num2) {
        const point = { shape: null, x: null, y: null, size: null };
        const diff = 24 - num2;
        point.shape = ClipView.CutoutShape.Circle;
        const diff1 = diff - 2;
        point.x = diff1;
        point.y = diff1;
        point.size = num2 + 4;
        const items = [point];
        cResult[0] = num2;
        cResult[1] = items;
        icon = items;
      } else {
        icon = cResult[1];
      }
      if (cResult[2] === IconComponent) {
        if (cResult[3] === badge) {
          if (cResult[4] === icon) {
            if (cResult[5] === disabled) {
              if (cResult[6] === tmp4.badge) {
                if (cResult[7] === tmp4.disabledIcon) {
                  if (cResult[8] === tmp4.icon) {
                    if (cResult[10] === accessibilityActions) {
                      if (cResult[11] === accessibilityLabel) {
                        if (cResult[12] === accessibilityState) {
                          if (cResult[13] === disabled) {
                            if (cResult[14] === onAccessibilityAction) {
                              if (cResult[15] === onPress) {
                                if (cResult[16] === ref) {
                                  if (cResult[17] === tmp4.button) {
                                    if (cResult[18] === tmp7) {
                                      let tmp16 = cResult[19];
                                    }
                                    return tmp16;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj2 = {
                      ref,
                      accessibilityRole: "button",
                      accessibilityLabel,
                      accessibilityActions,
                      onAccessibilityAction,
                      accessibilityState,
                      disabled,
                      onPress,
                      activeOpacity: 0.6,
                      androidRippleConfig,
                      style: tmp4.button,
                      children: cResult[9],
                    };
                    const tmp19 = hasOwnProperty(Pressables.PressableOpacity, obj2);
                    cResult[10] = accessibilityActions;
                    cResult[11] = accessibilityLabel;
                    cResult[12] = accessibilityState;
                    cResult[13] = disabled;
                    cResult[14] = onAccessibilityAction;
                    cResult[15] = onPress;
                    cResult[16] = ref;
                    cResult[17] = tmp4.button;
                    cResult[18] = cResult[9];
                    cResult[19] = tmp19;
                    tmp16 = tmp19;
                  }
                }
              }
            }
          }
        }
      }
      if (null != badge) {
        const obj3 = { style: tmp4.icon, children: null };
        const obj4 = { cutouts: icon, style: null, children: null };
        const items1 = [tmp4.icon];
        let disabledIcon2 = true === disabled;
        if (disabledIcon2) {
          disabledIcon2 = tmp4.disabledIcon;
        }
        items1[1] = disabledIcon2;
        obj4.style = items1;
        obj4.children = hasOwnProperty(IconComponent, {});
        const items2 = [hasOwnProperty(ClipViewDefault, obj4)];
        const obj5 = { style: tmp4.badge, children: badge };
        items2[1] = hasOwnProperty(View, obj5);
        obj3.children = items2;
        let tmp8Result = timestampProducer(View, obj3);
      } else {
        const items3 = [tmp4.icon];
        let disabledIcon = true === disabled;
        if (disabledIcon) {
          disabledIcon = tmp4.disabledIcon;
        }
        const obj6 = { style: null, children: null };
        items3[1] = disabledIcon;
        obj6.style = items3;
        obj6.children = hasOwnProperty(IconComponent, {});
        tmp8Result = hasOwnProperty(View, obj6);
      }
      cResult[2] = IconComponent;
      cResult[3] = badge;
      cResult[4] = icon;
      cResult[5] = disabled;
      cResult[6] = tmp4.badge;
      ({ disabledIcon: tmp3[7], icon } = tmp4);
      cResult[num] = icon;
      num = 9;
      cResult[9] = tmp8Result;
    }
  : function ConjureHeaderIconButton(ref) {
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
      const obj = {
        ref: ref.ref,
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityActions,
        onAccessibilityAction,
        accessibilityState,
        disabled,
        onPress,
        activeOpacity: 0.6,
        androidRippleConfig,
        style: tmp.button,
        children: null,
      };
      if (null != badge) {
        const obj2 = { style: tmp.icon, children: null };
        const obj3 = { cutouts: memo, style: null, children: null };
        const items1 = [tmp.icon];
        let disabledIcon2 = true === disabled;
        if (disabledIcon2) {
          disabledIcon2 = tmp.disabledIcon;
        }
        items1[1] = disabledIcon2;
        obj3.style = items1;
        obj3.children = closure_5(IconComponent, {});
        const items2 = [closure_5(ClipViewDefault, obj3)];
        const obj4 = { style: tmp.badge, children: badge };
        items2[1] = closure_5(View, obj4);
        obj2.children = items2;
        let tmp3Result = closure_6(View, obj2);
      } else {
        const items3 = [tmp.icon];
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
      return closure_5(badgeSize(6944).PressableOpacity, obj);
    };
export const CONJURE_HEADER_BADGE_SIZE = 8;
