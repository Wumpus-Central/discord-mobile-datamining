import fetchFingerprint from "fetchFingerprint";
import isAVErrorContextOfType from "isAVErrorContextOfType";
import { MediaEngineContextTypes } from "DesktopSources";

const require = arg1;
const result = require("DesktopSources").fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [isAVErrorContextOfType, fetchFingerprint];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let getActiveErrorsOfType;
    let getActiveErrorsOfType2;
    if (outer1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(9091).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(9091).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === outer1_4.STREAM) {
      let activeErrorsOfType = outer1_3.getActiveErrorsOfType(callback(9091).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = outer1_3);
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  return type;
};
export const useVideoStreamErrorContext = function useVideoStreamErrorContext(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [isAVErrorContextOfType, fetchFingerprint];
  return _require(589).useStateFromStores(items, () => {
    let getActiveErrorsOfType;
    let getActiveErrorsOfType2;
    if (outer1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(9091).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(9091).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === outer1_4.STREAM) {
      let activeErrorsOfType = outer1_3.getActiveErrorsOfType(callback(9091).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = outer1_3);
  });
};