// === Module 9785: useReadableSecureFramesFingerprint ===

// Module 9785 (useReadableSecureFramesFingerprint)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx");

export const useReadableSecureFramesFingerprint = function useReadableSecureFramesFingerprint(fingerprintBase64) {
  fingerprintBase64 = fingerprintBase64.fingerprintBase64;
  const chunkSize = fingerprintBase64.chunkSize;
  const desiredLength = fingerprintBase64.desiredLength;
  const items = [chunkSize, fingerprintBase64, desiredLength];
  const memo = React.useMemo(() => {
    if (null != fingerprintBase64) {
      if ("" !== tmp) {
        const obj = chunkSize(desiredLength[1]);
        const toByteArrayResult = chunkSize(desiredLength[1]).toByteArray(tmp);
        const str5 = fingerprintBase64(desiredLength[2]).generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
        if (null == str5) {
          return null;
        } else {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          const regExp = new RegExp(".{1," + tmp14 + "}", "g");
          const match = str5.match(regExp);
          let arr = null;
          if (null != match) {
            const _Array = Array;
            arr = Array.from(match);
          }
          return arr;
        }
        const obj2 = fingerprintBase64(desiredLength[2]);
        tmp14 = chunkSize;
      }
    }
    return null;
  }, items);
  if (null != fingerprintBase64) {
    if ("" !== fingerprintBase64) {
      if (null == memo) {
        const _Error = Error;
        error = new Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
        throw error;
      }
    }
  }
  return memo;
};