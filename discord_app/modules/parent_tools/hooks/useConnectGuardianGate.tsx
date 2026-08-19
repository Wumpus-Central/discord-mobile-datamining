// === Module 16667: useConnectGuardianGate ===

// Module 16667 (useConnectGuardianGate)
import initialize from "initialize" /* 589 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  let obj = initialize;
  const items = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ linkCode: store.getLinkCode(), expiresAt: store.getLinkCodeExpiresAt() }));
  ({ linkCode, expiresAt } = stateFromStoresObject);
  [tmp3, require] = callback(React.useState(false), 2);
  const tmp4 = callback(React.useState(() => {
    const linkCodeExpiresAt = store.getLinkCodeExpiresAt();
    let tmp2 = null != store.getLinkCode() && null != linkCodeExpiresAt;
    if (tmp2) {
      const _Date = Date;
      tmp2 = linkCodeExpiresAt > Date.now();
    }
    return tmp2;
  }), 2);
  importDefault = tmp4[1];
  dependencyMap = React.useRef(0);
  callback = React.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    const callback = sum;
    callback(false);
    const linkCodeForCurrentUser = require(ref[4]).getLinkCodeForCurrentUser();
    const obj = require(ref[4]);
    linkCodeForCurrentUser.then((result) => {
      if (closure_0 === closure_1_2.current) {
        sum(false);
        closure_1_1(true);
      }
    }).catch((error) => {
      if (closure_0 === closure_1_2.current) {
        const linkCodeExpiresAt = closure_2_5.getLinkCodeExpiresAt();
        if (null != closure_2_5.getLinkCode()) {
          if (null != linkCodeExpiresAt) {
            const _Date = Date;
            if (linkCodeExpiresAt > Date.now()) {
              closure_1_1(true);
            }
          }
        }
        sum(true);
      }
    });
  }, []);
  useMountLayoutEffectDefault(callback);
  if (tmp3) {
    obj = { state: "error" };
  } else if (tmp4[0]) {
    if (null == linkCode) {
      obj = { state: "error" };
    }
    obj1 = { state: "gate", linkCode: null, expiresAt: null, refresh: null };
    obj1[1] = linkCode;
    obj1[2] = expiresAt;
    obj1[3] = callback;
    obj = obj1;
  } else {
    obj = { state: "loading" };
  }
  return obj;
};