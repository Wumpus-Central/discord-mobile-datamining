// discord_app/modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
import ExternalPipDefault from "ExternalPip.android.tsx";
import noop from "../../../_runtime/metro/00019__.js";

let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, current) {
  closure_0 = arg1;
  noop = noop.useRef(current);
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
}
