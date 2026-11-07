// discord_app/modules/user_profile/native/useProfileCoachmarkPosition.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
