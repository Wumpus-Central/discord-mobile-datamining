// _runtime/metro/10769__.js
import Layouts5 from "../10770_Layouts.js";
import noop from "00019__.js";

require = arg1;

export const useLayoutConfig = function useLayoutConfig(size) {
  size = size.size;
  const vertical = size.vertical;
  const items = [, , ,];
  ({ mode: arr[0], modeConfig: arr[1] } = size);
  items[2] = size;
  items[3] = vertical;
  return vertical.useMemo(() => {
    const obj = { size, vertical };
    const mode = size.mode;
    if ("parallax" === mode) {
      const Layouts4 = Layouts5.Layouts;
      return Layouts4.parallax(obj, size.modeConfig);
    } else if ("horizontal-stack" === mode) {
      const Layouts3 = Layouts5.Layouts;
      return Layouts3.horizontalStack(size.modeConfig);
    } else if ("vertical-stack" === mode) {
      const Layouts2 = Layouts5.Layouts;
      return Layouts2.verticalStack(size.modeConfig);
    } else {
      const Layouts = Layouts5.Layouts;
      return Layouts.normal(obj);
    }
  }, items);
};
