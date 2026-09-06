// === Module 9595: useVideoStreamError ===

// Module 9595 (useVideoStreamError)
import AVError from "AVError" /* 9110 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 9596 */;

require = fn;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [AVErrorStore, AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() !== closure_1) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (closure_0 === MediaEngineContextTypes.STREAM) {
      let activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = AVErrorStore);
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  return type;
};
export const useVideoStreamErrorContext = function useVideoStreamErrorContext(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [AVErrorStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() !== closure_1) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (closure_0 === MediaEngineContextTypes.STREAM) {
      let activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = AVErrorStore);
  });
};