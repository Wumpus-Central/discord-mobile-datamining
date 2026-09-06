// discord_app/modules/parent_tools/hooks/useConnectGuardianGate.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = function useConnectGuardianGate() {
  let obj = initialize;
  const items = [FamilyCenterStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    linkCode: FamilyCenterStore.getLinkCode(),
    expiresAt: FamilyCenterStore.getLinkCodeExpiresAt(),
  }));
  ({ linkCode, expiresAt } = stateFromStoresObject);
  [tmp3, require] = _slicedToArray(noop.useState(false), 2);
  const tmp4 = _slicedToArray(
    noop.useState(() => {
      const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
      let tmp2 = null != FamilyCenterStore.getLinkCode() && null != linkCodeExpiresAt;
      if (tmp2) {
        const _Date = Date;
        tmp2 = linkCodeExpiresAt > Date.now();
      }
      return tmp2;
    }),
    2,
  );
  importDefault = tmp4[1];
  dependencyMap = noop.useRef(0);
  const callback = noop.useCallback(() => {
    const sum = ref.current + 1;
    ref.current = sum;
    closure_0 = sum;
    closure_0(false);
    const linkCodeForCurrentUser = require("FamilyCenterActionCreators").getLinkCodeForCurrentUser();
    const obj = require("FamilyCenterActionCreators");
    linkCodeForCurrentUser
      .then(() => {
        if (sum === ref.current) {
          require(false);
          closure_1(true);
        }
      })
      .catch(() => {
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
    obj = { state: "error" };
  } else if (tmp4[0]) {
    if (null == linkCode) {
      obj = { state: "error" };
    }
    const obj1 = { state: "gate", linkCode, expiresAt, refresh: callback };
    obj = obj1;
  } else {
    obj = { state: "loading" };
  }
  return obj;
};
