// === Module 17089: useExternalPipAspectRatioUpdater ===

// Module 17089 (useExternalPipAspectRatioUpdater)
import ExternalPipDefault from "ExternalPip" /* 9610 */;
import noop from "module_19" /* 19 */;

let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, set) {
  closure_0 = arg1;
  const current = set;
  noop = noop.useRef(set);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_2.current = current;
  });
  const items = [arg1];
  const effect = noop.useEffect(() => {
    size = size.getTargetDimensions(ref.current);
    size(current[1]).setPipAspectRatio(size.width, size.height);
    return size.subscribeFromItem(() => {
      const targetDimensions = size.getTargetDimensions(ref.current);
      ({ width, height } = targetDimensions);
      let tmp2 = width === size.width;
      if (tmp2) {
        tmp2 = height === size.height;
      }
      if (!tmp2) {
        size = { width, height };
        ExternalPipDefault.setPipAspectRatio(width, height);
      }
    });
  }, items);
};