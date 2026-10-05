// _runtime/00415_useAndroidRippleForView.js
import react2 from "00019_react.js";
import processColorDefault from "00050_processColor.js";

const useMemo = react2.useMemo;

export default function useAndroidRippleForView(arg0, arg1) {
  let closure_4;
  let foreground;
  let rippleCornerRadius;
  let obj = arg0;
  let closure_0 = arg1;
  if (arg0 == null) {
    obj = {};
  }
  const color = obj.color;
  const borderless = obj.borderless;
  const radius = obj.radius;
  ({ cornerRadius: closure_4, foreground } = obj);
  const alpha = obj.alpha;
  const items = [alpha, borderless, color, foreground, radius, arg1];
  return radius(() => {
    let obj3;
    let ref;
    let tmp4;
    if (null == color) {
      if (null == borderless) {
        if (null == radius) {
          return null;
        }
      }
    }
    const obj = {
      type: "RippleAndroid",
      color: processColorDefault(color),
      borderless: true === borderless,
      rippleRadius: radius,
      rippleCornerRadius,
      alpha: tmp4,
    };
    tmp4 = alpha;
    if (alpha == null) {
      tmp4 = null;
    }
    if (true === foreground) {
      obj3 = { nativeForegroundAndroid: obj };
      const obj2 = { nativeForegroundAndroid: obj };
    } else {
      obj3 = { nativeBackgroundAndroid: obj };
    }
    return {
      viewProps: obj3,
      onPressIn(nativeEvent) {
        const current = ref.current;
        if (null != current) {
          const Commands = ref(borderless[2]).Commands;
          let num = nativeEvent.nativeEvent.locationX;
          const hotspotUpdate = Commands.hotspotUpdate;
          if (num == null) {
            num = 0;
          }
          let num2 = nativeEvent.nativeEvent.locationY;
          if (num2 == null) {
            num2 = 0;
          }
          hotspotUpdate(current, num, num2);
          const Commands2 = ref(borderless[2]).Commands;
          Commands2.setPressed(current, true);
        }
      },
      onPressMove(nativeEvent) {
        const current = ref.current;
        if (null != current) {
          const Commands = ref(borderless[2]).Commands;
          let num = nativeEvent.nativeEvent.locationX;
          const hotspotUpdate = Commands.hotspotUpdate;
          if (num == null) {
            num = 0;
          }
          let num2 = nativeEvent.nativeEvent.locationY;
          if (num2 == null) {
            num2 = 0;
          }
          hotspotUpdate(current, num, num2);
        }
      },
      onPressOut(arg0) {
        const current = ref.current;
        if (null != current) {
          const Commands = ref(borderless[2]).Commands;
          Commands.setPressed(current, false);
        }
      },
    };
  }, items);
}
