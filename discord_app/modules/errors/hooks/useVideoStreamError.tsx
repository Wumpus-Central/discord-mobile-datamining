// === Module 9763: useVideoStreamError ===

// Module 9763 (useVideoStreamError)
import AVError from "AVError" /* 9765 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 9764 */;

const require = globalThis.__r;

require = fn;
const MediaEngineContextTypes = fn(4852).MediaEngineContextTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [AVErrorStore, AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() !== closure_1) {
      const items = [];
      HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0));
      items[Symbol.iterator]();
      const arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
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
      HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0));
      items[Symbol.iterator]();
      const arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
    }
    if (closure_0 === MediaEngineContextTypes.STREAM) {
      let activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = AVErrorStore);
  });
};