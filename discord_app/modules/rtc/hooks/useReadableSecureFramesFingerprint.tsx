// === Module 9387: useReadableSecureFramesFingerprint ===

// Module 9387 (useReadableSecureFramesFingerprint)
import byteLengthDefault from "byteLength" /* 206 */;
import react2 from "react" /* 576 */;
import _mod9363 from "module_9363" /* 9363 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let chunkSize;
  let desiredLength;
  let fingerprintBase64;
  const obj = react2;
  const cResult = obj.c(4);
  ({ fingerprintBase64, chunkSize, desiredLength } = arg0);
  if (cResult[0] === chunkSize) {
    if (cResult[1] === desiredLength) {
      let tmp4;
      if (cResult[2] === fingerprintBase64) {
        tmp4 = cResult[3];
      }
      if (null != fingerprintBase64) {
        if ("" !== fingerprintBase64) {
          if (null == tmp4) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
            throw error;
          }
        }
      }
      return tmp4;
    }
  }
  let tmp5 = null;
  if (null != fingerprintBase64) {
    tmp5 = null;
    if ("" !== fingerprintBase64) {
      const obj2 = byteLengthDefault;
      const toByteArrayResult = obj2.toByteArray(fingerprintBase64);
      const tmpResult = _mod9363;
      const str7 = tmpResult.generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
      tmp5 = null;
      if (null != str7) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const regExp = new RegExp(".{1," + chunkSize + "}", "g");
        const match = str7.match(regExp);
        let arr = null;
        if (null != match) {
          const _Array = Array;
          arr = Array.from(match);
        }
        tmp5 = arr;
      }
    }
  }
  cResult[0] = chunkSize;
  cResult[1] = desiredLength;
  cResult[2] = fingerprintBase64;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : (function(fingerprintBase64) {
  fingerprintBase64 = fingerprintBase64.fingerprintBase64;
  const chunkSize = fingerprintBase64.chunkSize;
  const desiredLength = fingerprintBase64.desiredLength;
  const items = [chunkSize, fingerprintBase64, desiredLength];
  const memo = react.useMemo(function() {
    if (null != fingerprintBase64) {
      if ("" !== fingerprintBase64) {
        const obj = byteLengthDefault;
        const toByteArrayResult = obj.toByteArray(fingerprintBase64);
        const obj2 = _mod9363;
        const str5 = obj2.generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
        if (null == str5) {
          return null;
        } else {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const regExp = new RegExp(".{1," + chunkSize + "}", "g");
          const match = str5.match(regExp);
          let arr = null;
          if (null != match) {
            const _Array = Array;
            arr = Array.from(match);
          }
          return arr;
        }
      }
    }
    return null;
  }, items);
  if (null != fingerprintBase64) {
    if ("" !== fingerprintBase64) {
      if (null == memo) {
        const _Error = Error;
        let self = this;
        let self2 = this;
        const error = new Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
        throw error;
      }
    }
  }
  return memo;
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx");

export const useReadableSecureFramesFingerprint = tmp2;