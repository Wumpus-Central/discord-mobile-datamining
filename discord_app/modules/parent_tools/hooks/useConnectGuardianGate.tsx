import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useMountLayoutEffect } from "../../../hooks/useMountEffect.tsx";
// discord_app/modules/parent_tools/hooks/useConnectGuardianGate.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  let expiresAt;
  let linkCode;
  let require;
  let tmp3;
  let obj = initialize /* initialize */;
  const items = [freshTeenActivityWithMap];
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
  const importDefault = tmp4[1];
  const dependencyMap = React.useRef(0);
  callback = React.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    const callback = sum;
    callback(false);
    const linkCodeForCurrentUser = outer1_0(ref[4]).getLinkCodeForCurrentUser();
    const obj = outer1_0(ref[4]);
    linkCodeForCurrentUser.then(() => {
      if (closure_0 === outer1_2.current) {
        sum(false);
        outer1_1(true);
      }
    }).catch(() => {
      if (closure_0 === outer1_2.current) {
        const linkCodeExpiresAt = outer2_5.getLinkCodeExpiresAt();
        if (null != outer2_5.getLinkCode()) {
          if (null != linkCodeExpiresAt) {
            const _Date = Date;
            if (linkCodeExpiresAt > Date.now()) {
              outer1_1(true);
            }
          }
        }
        sum(true);
      }
    });
  }, []);
  useMountLayoutEffect(callback);
  if (tmp3) {
    obj = { state: "error" };
  } else if (tmp4[0]) {
    if (null == linkCode) {
      obj = { state: "error" };
    }
    const obj1 = { state: "gate", linkCode: null, expiresAt: null, refresh: null };
    obj1[1] = linkCode;
    obj1[2] = expiresAt;
    obj1[3] = callback;
    obj = obj1;
  } else {
    obj = { state: "loading" };
  }
  return obj;
};