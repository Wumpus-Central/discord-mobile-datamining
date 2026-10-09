// discord_app/modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx
import byteLengthDefault from "../../../../_runtime/00206_byteLength.js";
import c from "../../../../_runtime/00576_c.js";
import _mod8794 from "../../../../discord_common/js/packages/libdave/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useReadableSecureFramesFingerprint.tsx");

export const useReadableSecureFramesFingerprint = ReactCompilerGating.isReactCompilerEnabled()
  ? function useReadableSecureFramesFingerprint(arg0) {
      const cResult = c.c(4);
      ({ fingerprintBase64, chunkSize, desiredLength } = arg0);
      if (cResult[0] === chunkSize) {
        if (cResult[1] === desiredLength) {
          if (cResult[2] === fingerprintBase64) {
            let tmp4 = cResult[3];
          }
          if (null != fingerprintBase64) {
            if ("" !== fingerprintBase64) {
              if (null == tmp4) {
                const _Error = Error;
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
          const toByteArrayResult = byteLengthDefault.toByteArray(fingerprintBase64);
          const str7 = _mod8794.generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
          tmp5 = null;
          if (null != str7) {
            const _RegExp = RegExp;
            const _HermesInternal = HermesInternal;
            const regExp = new RegExp(".{1," + chunkSize + "}", "g");
            const match = str7.match(regExp);
            let arr = null;
            if (null != match) {
              const _Array = Array;
              arr = Array.from(match);
            }
            tmp5 = arr;
          }
          const tmpResult = _mod8794;
        }
      }
      cResult[0] = chunkSize;
      cResult[1] = desiredLength;
      cResult[2] = fingerprintBase64;
      cResult[3] = tmp5;
      tmp4 = tmp5;
    }
  : function useReadableSecureFramesFingerprint(fingerprintBase64) {
      fingerprintBase64 = fingerprintBase64.fingerprintBase64;
      const chunkSize = fingerprintBase64.chunkSize;
      const desiredLength = fingerprintBase64.desiredLength;
      const items = [chunkSize, fingerprintBase64, desiredLength];
      const memo = noop.useMemo(() => {
        if (null != fingerprintBase64) {
          if ("" !== fingerprintBase64) {
            const toByteArrayResult = byteLengthDefault.toByteArray(fingerprintBase64);
            const str5 = _mod8794.generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize);
            if (null == str5) {
              return null;
            } else {
              const _RegExp = RegExp;
              const _HermesInternal = HermesInternal;
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
            const error = new Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
            throw error;
          }
        }
      }
      return memo;
    };
