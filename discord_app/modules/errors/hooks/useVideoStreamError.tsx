// === Module 12439: useVideoStreamError ===

// Module 12439 (useVideoStreamError)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import isAVErrorContextOfType from "isAVErrorContextOfType" /* 12440 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4529 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3, closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    if (closure_1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9668).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9668).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === MediaEngineContextTypes.STREAM) {
      let activeErrorsOfType = closure_1_3.getActiveErrorsOfType(callback(9668).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_1_3);
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  return type;
};
export const useVideoStreamErrorContext = function useVideoStreamErrorContext(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9668).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9668).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === MediaEngineContextTypes.STREAM) {
      let activeErrorsOfType = closure_1_3.getActiveErrorsOfType(callback(9668).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_1_3);
  });
};