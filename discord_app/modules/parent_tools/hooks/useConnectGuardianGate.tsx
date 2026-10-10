// === Module 18153: useConnectGuardianGate ===

// Module 18153 (useConnectGuardianGate)
import initialize from "initialize" /* 504 */;
import useMountEffectDefault from "useMountEffect" /* 5396 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = ReactCompilerGating.isReactCompilerEnabled() ? (function useConnectGuardianGate() {
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function l() {
      return { linkCode: FamilyCenterStore.getLinkCode(), expiresAt: FamilyCenterStore.getLinkCodeExpiresAt() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, tmp5);
  ({ linkCode, expiresAt } = stateFromStoresObject);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  _require = tmp9[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c() {
      const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
      let tmp2 = null != FamilyCenterStore.getLinkCode() && null != linkCodeExpiresAt;
      if (tmp2) {
        const _Date = Date;
        tmp2 = linkCodeExpiresAt > Date.now();
      }
      return tmp2;
    };
    cResult[2] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = require("initialize");
  importDefault = _slicedToArray(noop.useState(tmp10), 2)[1];
  dependencyMap = noop.useRef(0);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        sum = closure_2.current + 1;
        closure_2.current = sum;
        closure_0 = sum;
        tmp2 = closure_0(false);
        obj = closure_0(closure_2[6]);
        linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
        nextPromise = linkCodeForCurrentUser.then(() => {
          if (sum === ref.current) {
            sum(false);
            closure_1(true);
          }
        });
        catchPromise = nextPromise.catch(() => {
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
            sum(true);
          }
        });
        return;
      }
    }
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        sum = closure_2.current + 1;
        closure_2.current = sum;
        closure_0 = sum;
        tmp2 = closure_0(false);
        obj = closure_0(closure_2[6]);
        linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
        nextPromise = linkCodeForCurrentUser.then(() => {
          if (sum === ref.current) {
            sum(false);
            closure_1(true);
          }
        });
        catchPromise = nextPromise.catch(() => {
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
            sum(true);
          }
        });
        return;
      }
    }
  }
  useMountEffectDefault(S);
  if (tmp9[0]) {
    class S {
      constructor() {
        sum = closure_2.current + 1;
        closure_2.current = sum;
        closure_0 = sum;
        tmp2 = closure_0(false);
        obj = closure_0(closure_2[6]);
        linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
        nextPromise = linkCodeForCurrentUser.then(() => {
          if (sum === ref.current) {
            sum(false);
            closure_1(true);
          }
        });
        catchPromise = nextPromise.catch(() => {
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
            sum(true);
          }
        });
        return;
      }
    }
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          sum = closure_2.current + 1;
          closure_2.current = sum;
          closure_0 = sum;
          tmp2 = closure_0(false);
          obj = closure_0(closure_2[6]);
          linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
          nextPromise = linkCodeForCurrentUser.then(() => {
            if (sum === ref.current) {
              sum(false);
              closure_1(true);
            }
          });
          catchPromise = nextPromise.catch(() => {
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
              sum(true);
            }
          });
          return;
        }
      }
      cResult[4] = tmp15;
    } else {
      class S {
        constructor() {
          sum = closure_2.current + 1;
          closure_2.current = sum;
          closure_0 = sum;
          tmp2 = closure_0(false);
          obj = closure_0(closure_2[6]);
          linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
          nextPromise = linkCodeForCurrentUser.then(() => {
            if (sum === ref.current) {
              sum(false);
              closure_1(true);
            }
          });
          catchPromise = nextPromise.catch(() => {
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
              sum(true);
            }
          });
          return;
        }
      }
    }
  } else {
    class S {
      constructor() {
        sum = closure_2.current + 1;
        closure_2.current = sum;
        closure_0 = sum;
        tmp2 = closure_0(false);
        obj = closure_0(closure_2[6]);
        linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
        nextPromise = linkCodeForCurrentUser.then(() => {
          if (sum === ref.current) {
            sum(false);
            closure_1(true);
          }
        });
        catchPromise = nextPromise.catch(() => {
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
            sum(true);
          }
        });
        return;
      }
    }
  }
  const tmp8Result = _slicedToArray(noop.useState(tmp10), 2);
}) : (function useConnectGuardianGate() {
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
        _require(false);
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
        _require(true);
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
});