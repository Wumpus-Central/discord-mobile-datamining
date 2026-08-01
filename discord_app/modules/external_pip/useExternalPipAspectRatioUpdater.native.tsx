// === Module 15937: useExternalPipAspectRatioUpdater ===

// Module 15937 (useExternalPipAspectRatioUpdater)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, stateFromStores) {
  let closure_0 = arg1;
  let closure_1 = stateFromStores;
  React = React.useRef(stateFromStores);
  const insertionEffect = React.useInsertionEffect(() => {
    noop.current = closure_1;
  });
  const items = [arg1];
  const effect = React.useEffect(() => {
    lib = lib.getTargetDimensions(ref.current);
    lib(stateFromStores[1]).setPipAspectRatio(lib.width, lib.height);
    return lib.subscribeFromItem(() => {
      let height;
      let width;
      targetDimensions = targetDimensions.getTargetDimensions(outer1_2.current);
      ({ width, height } = targetDimensions);
      let tmp2 = width === obj.width;
      if (tmp2) {
        tmp2 = height === obj.height;
      }
      if (!tmp2) {
        obj = { width: null, height: null };
        obj[0] = width;
        obj[1] = height;
        targetDimensions(table[1]).setPipAspectRatio(width, height);
        const obj2 = targetDimensions(table[1]);
      }
    });
  }, items);
};