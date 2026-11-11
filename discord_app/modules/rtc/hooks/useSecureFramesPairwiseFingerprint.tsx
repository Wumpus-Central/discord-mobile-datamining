// discord_app/modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx
import SecureFramesBoundPairwiseFingerprint from "../SecureFramesBoundPairwiseFingerprint.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
const SecureFramesPairwiseFingerprintMode = { FROZEN: "frozen", LIVE: "live" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx");

export { SecureFramesPairwiseFingerprintMode };
export function useSecureFramesPairwiseFingerprint(userId) {
  userId = userId.userId;
  let FROZEN = userId.mode;
  if (FROZEN === undefined) {
    FROZEN = stateFromStores1.FROZEN;
  }
  let stateFromStores;
  let first;
  noop = undefined;
  let first1;
  items = [first1];
  stateFromStores = userId(stateFromStores[4]).useStateFromStores(items, () => first1.getId());
  FROZEN(stateFromStores[5])(
    stateFromStores !== userId,
    "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
  );
  const tmp4 = first(noop.useState(null), 2);
  first = tmp4[0];
  noop = tmp4[1];
  const tmp6 = first(noop.useState(false), 2);
  first1 = tmp6[0];
  closure_6 = tmp6[1];
  let obj = userId(stateFromStores[4]);
  const items1 = [closure_6];
  stateFromStores1 = userId(stateFromStores[4]).useStateFromStores(items1, () =>
    RTCConnectionStore.getSecureFramesRosterMapEntry(userId),
  );
  const obj2 = userId(stateFromStores[4]);
  const items2 = [closure_6];
  const stateFromStores2 = userId(stateFromStores[4]).useStateFromStores(items2, () =>
    RTCConnectionStore.getSecureFramesRosterMapEntry(stateFromStores),
  );
  const items3 = [userId];
  const callback = noop.useCallback(
    () => SecureFramesBoundPairwiseFingerprint.computeBoundPairwiseFingerprint(userId),
    items3,
  );
  noop.useRef(0);
  closure_11 = noop.useRef(null);
  noop.useRef(false);
  const items4 = [FROZEN, callback, stateFromStores1, stateFromStores2];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores1) {
      if (null != stateFromStores2) {
        if (FROZEN !== stateFromStores1.FROZEN) {
          ref2.current = true;
          const sum = ref.current + 1;
          ref.current = sum;
          userId = sum;
          const _setTimeout = setTimeout;
          closure_11.current = setTimeout(() => {
            closure_6(true);
            callback().then((result) => {
              if (closure_1_0 === ref.current) {
                if (null != result) {
                  closure_2_4(result);
                }
                closure_2_6(false);
              }
            });
          }, 0);
        }
      }
    }
  }, items4);
  const effect1 = noop.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    },
    [],
  );
  const items5 = [first, first1];
  return noop.useMemo(() => {
    let fingerprint;
    if (first != null) {
      fingerprint = first.fingerprint;
    }
    if (fingerprint == null) {
      fingerprint = null;
    }
    const obj = { fingerprint, fingerprintUserKey: null, loading: null };
    let fingerprintUserKey;
    if (first != null) {
      fingerprintUserKey = first.fingerprintUserKey;
    }
    if (fingerprintUserKey == null) {
      fingerprintUserKey = null;
    }
    obj.fingerprintUserKey = fingerprintUserKey;
    obj.loading = first1;
    return obj;
  }, items5);
}
