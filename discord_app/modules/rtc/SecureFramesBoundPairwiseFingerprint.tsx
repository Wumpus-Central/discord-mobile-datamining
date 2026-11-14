// discord_app/modules/rtc/SecureFramesBoundPairwiseFingerprint.tsx
import byteLengthDefault from "../../../_runtime/00206_byteLength.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

const require = fn;
function memoizedPairwiseFingerprint(id, secureFramesRosterMapEntry1, arg2, secureFramesRosterMapEntry) {
  items = [closure_7, id, , ,];
  let uint8Array = new Uint8Array(secureFramesRosterMapEntry1);
  items[2] = byteLengthDefault.fromByteArray(uint8Array);
  items[3] = arg2;
  const uint8Array1 = new Uint8Array(secureFramesRosterMapEntry);
  items[4] = byteLengthDefault.fromByteArray(uint8Array1);
  const joined = items.join(":");
  const value2 = map.get(joined);
  if (null != value2) {
    return value2;
  } else {
    if (MediaEngineStore.supports(Features.DAVE_PAIRWISE_FINGERPRINT)) {
      const mediaEngine = MediaEngineStore.getMediaEngine();
      const davePairwiseFingerprint = mediaEngine.generateDavePairwiseFingerprint(
        closure_7,
        secureFramesRosterMapEntry1,
        id,
        secureFramesRosterMapEntry,
        arg2,
      );
      let nextPromise = davePairwiseFingerprint.then((result) => {
        const uint8Array = new Uint8Array(result);
        return uint8Array;
      });
    } else {
      const obj4 = joined(10612);
      const _Uint8Array = Uint8Array;
      const uint8Array2 = new Uint8Array(secureFramesRosterMapEntry1);
      const _Uint8Array2 = Uint8Array;
      const uint8Array3 = new Uint8Array(secureFramesRosterMapEntry);
      nextPromise = obj4.generatePairwiseFingerprint(closure_7, uint8Array2, id, uint8Array3, arg2);
    }
    const nextPromise1 = nextPromise.then((result) => byteLengthDefault.fromByteArray(result));
    if (map.size >= 16) {
      value = map.keys().next().value;
      if (null != value) {
        map.delete(value);
      }
      const iter = map.keys();
    }
    const result = map.set(joined, nextPromise1);
    nextPromise1.catch(() => map.delete(joined));
    return nextPromise1;
  }
}
let closure_11 = async function _computeBoundPairwiseFingerprint(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp6;
          closure_130_0 = undefined;
          id = id.getId();
          const secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(closure_0);
          closure_130_0 = secureFramesRosterMapEntry;
          const secureFramesRosterMapEntry1 = RTCConnectionStore.getSecureFramesRosterMapEntry(id);
          if (null != secureFramesRosterMapEntry) {
            if (null != secureFramesRosterMapEntry1) {
              c3 = 1;
              value = {};
              c4 = 2;
              c5 = 1;
              const obj4 = {
                value: memoizedPairwiseFingerprint(
                  id,
                  secureFramesRosterMapEntry1,
                  closure_0,
                  secureFramesRosterMapEntry,
                ),
                done: false,
              };
              return obj4;
            }
          }
          c5 = 3;
          return { value: null, done: true };
        }
      } else if (1 === tmp6) {
        c3 = 0;
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        value.fingerprint = value;
        value.fingerprintUserKey = closure_130_0;
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp16) {
      if (tmp3 === c3) {
        c5 = tmp2;
        throw tmp16;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_7 = fn(10628).SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
const Features = fn(6075).Features;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesBoundPairwiseFingerprint.tsx");

export function computeBoundPairwiseFingerprint() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
