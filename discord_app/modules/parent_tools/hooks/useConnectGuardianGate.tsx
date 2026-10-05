// discord_app/modules/parent_tools/hooks/useConnectGuardianGate.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let catchPromise, dependencyMap, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let closure_1;
      let expiresAt;
      let first;
      let linkCode;
      let ref;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(10);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        const fn = function s() {
          const obj = {
            linkCode: FamilyCenterStore.getLinkCode(),
            expiresAt: FamilyCenterStore.getLinkCodeExpiresAt(),
          };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
      ({ linkCode, expiresAt } = stateFromStoresObject);
      [first, _require] = react.useState(false);
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
        tmp11 = fn2;
      } else {
        tmp11 = cResult[2];
      }
      importDefault = _slicedToArray(react.useState(tmp11), 2)[1];
      _slicedToArray(react.useState(tmp11), 2);
      dependencyMap = react.useRef(0);
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
      if (first) {
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
          cResult[4] = tmp17;
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
      return tmp17;
    }
  : () => {
      let closure_1;
      let expiresAt;
      let first;
      let linkCode;
      let obj2;
      let ref;
      let require;
      let tmp3;
      let obj = get_initialized;
      const items = [FamilyCenterStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = { linkCode: FamilyCenterStore.getLinkCode(), expiresAt: FamilyCenterStore.getLinkCodeExpiresAt() };
        return obj;
      });
      ({ linkCode, expiresAt } = stateFromStoresObject);
      let tmp2 = _slicedToArray(react.useState(false), 2);
      [tmp3, require] = tmp2;
      [first, importDefault] = react.useState(() => {
        const linkCodeExpiresAt = FamilyCenterStore.getLinkCodeExpiresAt();
        let tmp2 = null != FamilyCenterStore.getLinkCode() && null != linkCodeExpiresAt;
        if (tmp2) {
          const _Date = Date;
          tmp2 = linkCodeExpiresAt > Date.now();
        }
        return tmp2;
      });
      dependencyMap = react.useRef(0);
      const callback = react.useCallback(() => {
        const sum = ref.current + 1;
        ref.current = sum;
        const require = sum;
        require(false);
        const obj = require("FamilyCenterActionCreators");
        const linkCodeForCurrentUser = obj.getLinkCodeForCurrentUser();
        const nextPromise = linkCodeForCurrentUser.then(() => {
          if (closure_0 === ref.current) {
            _require(false);
            closure_1(true);
          }
        });
        nextPromise.catch(() => {
          if (closure_0 === ref.current) {
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
        obj2 = { state: "error" };
      } else if (first) {
        if (null != linkCode) {
          let obj4;
          if (null != expiresAt) {
            obj4 = { state: "gate", linkCode, expiresAt, refresh: callback };
            const obj3 = { state: "gate", linkCode, expiresAt, refresh: callback };
          }
          obj2 = obj4;
        }
        obj4 = { state: "error" };
      } else {
        obj2 = { state: "loading" };
      }
      return obj2;
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useConnectGuardianGate.tsx");

export const useConnectGuardianGate = tmp2;
