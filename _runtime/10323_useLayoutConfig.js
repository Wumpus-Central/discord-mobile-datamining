// === Module 10323: useLayoutConfig ===

// Module 10323 (useLayoutConfig)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useLayoutConfig = function useLayoutConfig(size) {
  closure_0 = size;
  size = size.size;
  const vertical = size.vertical;
  const items = [, , , ];
  ({ mode: arr[0], modeConfig: arr[1] } = size);
  items[2] = size;
  items[3] = vertical;
  return vertical.useMemo(() => {
    const obj = { size, vertical };
    const mode = size.mode;
    if ("parallax" === mode) {
      const Layouts4 = size(size[1]).Layouts;
      return Layouts4.parallax(obj, tmp.modeConfig);
    } else if ("horizontal-stack" === mode) {
      const Layouts3 = size(size[1]).Layouts;
      return Layouts3.horizontalStack(tmp.modeConfig);
    } else if ("vertical-stack" === mode) {
      const Layouts2 = size(size[1]).Layouts;
      return Layouts2.verticalStack(tmp.modeConfig);
    } else {
      const Layouts = size(size[1]).Layouts;
      return Layouts.normal(obj);
    }
  }, items);
};