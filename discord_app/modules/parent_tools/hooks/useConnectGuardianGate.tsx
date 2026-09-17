// === Module 17705: useConnectGuardianGate ===

// Module 17705 (useConnectGuardianGate)
import initialize from "initialize" /* 504 */;
import useMountEffectDefault from "useMountEffect" /* 5079 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7651 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  const items = [FamilyCenterStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ linkCode: FamilyCenterStore.getLinkCode(), expiresAt: FamilyCenterStore.getLinkCodeExpiresAt() }));
  ({ linkCode, expiresAt } = stateFromStoresObject);
  [tmp3, require] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(() => {
    const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
    let tmp2 = null != FamilyCenterStore.getLinkCode() && null != linkCodeExpiresAt;
    if (tmp2) {
      const _Date = Date;
      tmp2 = linkCodeExpiresAt > Date.now();
    }
    return tmp2;
  }), 2);
  importDefault = tmp4[1];
  dependencyMap = noop.useRef(0);
  const callback = noop.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    closure_0 = sum;
    closure_0(false);
    const linkCodeForCurrentUser = require("FamilyCenterActionCreators").getLinkCodeForCurrentUser();
    const obj = require("FamilyCenterActionCreators");
    linkCodeForCurrentUser.then(() => {
      if (sum === ref.current) {
        require(false);
        closure_1(true);
      }
    }).catch(() => {
      if (sum === ref.current) {
        const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
        if (null != FamilyCenterStore.getLinkCode()) {
          if (null != linkCodeExpiresAt) {
            const _Date = Date;
            if (linkCodeExpiresAt > Date.now()) {
              closure_1(true);
            }
          }
        }
        require(true);
      }
    });
  }, []);
  useMountEffectDefault(callback);
  if (tmp3) {
    let obj2 = { state: "error" };
  } else if (tmp4[0]) {
    if (null == linkCode) {
      const obj3 = { state: "error" };
    }
    const obj4 = { state: "gate", linkCode, expiresAt, refresh: callback };
  } else {
    obj2 = { state: "loading" };
  }
  return obj2;
};