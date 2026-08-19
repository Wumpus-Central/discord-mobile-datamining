// === Module 16353: useCameraEncodeError ===

// Module 16353 (useCameraEncodeError)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import isAVErrorContextOfType from "isAVErrorContextOfType" /* 12440 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_2.getId() === callback) {
      const first = closure_1_3.getActiveErrorsOfType(callback(dependencyMap[3]).AVError.CAMERA_SEND_LOW_FPS)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type;
    }
  });
};