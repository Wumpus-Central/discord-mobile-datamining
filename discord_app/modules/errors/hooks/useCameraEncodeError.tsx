// discord_app/modules/errors/hooks/useCameraEncodeError.tsx
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "isAVErrorContextOfType" /* 12440 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _initialize.useStateFromStores(items, () => {
    if (closure_1_2.getId() === callback) {
      const first = closure_1_3.getActiveErrorsOfType(callback(closure_1_1[3]).AVError.CAMERA_SEND_LOW_FPS)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type;
    }
  });
};