// === Module 415: useAndroidRippleForView ===

// Module 415 (useAndroidRippleForView)
import noopAll from "noop" /* 19 */;
import { useMemo } from "noop" /* 19 */;

const require = fn;
noopAll;

export default function useAndroidRippleForView(arg0, arg1) {
  let obj = arg0;
  closure_0 = arg1;
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
    if (null == color) {
      if (null == borderless) {
        if (null == radius) {
          return null;
        }
      }
    }
    let obj = { type: "RippleAndroid", color: color(borderless[1])(color), borderless: true === borderless, rippleRadius: radius, rippleCornerRadius: closure_4, alpha: null };
    let tmp4 = alpha;
    if (alpha == null) {
      tmp4 = null;
    }
    obj[5] = tmp4;
    if (true === foreground) {
      obj = { nativeForegroundAndroid: null };
      obj[0] = obj;
    } else {
      obj = { nativeBackgroundAndroid: null };
      obj[0] = obj;
    }
    return {
      viewProps: obj,
      onPressIn(nativeEvent) {
        const current = ref.current;
        if (null != current) {
          const Commands = closure_1_0(borderless[2]).Commands;
          let num = nativeEvent.nativeEvent.locationX;
          if (num == null) {
            num = 0;
          }
          let num2 = nativeEvent.nativeEvent.locationY;
          if (num2 == null) {
            num2 = 0;
          }
          Commands.hotspotUpdate(current, num, num2);
          const Commands2 = closure_1_0(borderless[2]).Commands;
          Commands2.setPressed(current, true);
        }
      },
      onPressMove(nativeEvent) {
        const current = ref.current;
        if (null != current) {
          const Commands = closure_1_0(borderless[2]).Commands;
          let num = nativeEvent.nativeEvent.locationX;
          if (num == null) {
            num = 0;
          }
          let num2 = nativeEvent.nativeEvent.locationY;
          if (num2 == null) {
            num2 = 0;
          }
          Commands.hotspotUpdate(current, num, num2);
        }
      },
      onPressOut(arg0) {
        const current = ref.current;
        if (null != current) {
          const Commands = closure_1_0(borderless[2]).Commands;
          Commands.setPressed(current, false);
        }
      }
    };
  }, items);
};