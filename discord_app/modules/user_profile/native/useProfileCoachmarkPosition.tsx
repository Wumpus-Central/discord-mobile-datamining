// === Module 19453: useProfileCoachmarkPosition ===

// Module 19453 (useProfileCoachmarkPosition)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const PX_64 = nativeDefault.space.PX_64;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useProfileCoachmarkPosition.tsx");

export default function useProfileCoachmarkPosition(arg0, arg1) {
  closure_1 = arg1;
  const height = useWindowDimensionsDefault().height;
  let rect = useSafeAreaInsetsDefault();
  [rect2, dependencyMap] = noop.useState(null);
  items = [arg0, arg1, height];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, top, arg2, arg3) => {
          if (0 !== arg3) {
            const rect = { top, bottom: top + arg3 };
            closure_1_2(rect);
          }
        });
      }
    }
  }, items);
  if (null == rect2) {
    return "bottom";
  } else {
    let str = "bottom";
    if (height - obj.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
      str = "top";
    }
    return str;
  }
  const tmp2 = _slicedToArray(noop.useState(null), 2);
};