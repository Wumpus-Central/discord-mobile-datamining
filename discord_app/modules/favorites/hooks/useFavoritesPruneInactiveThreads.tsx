// === Module 18712: useFavoritesPruneInactiveThreads ===

// Module 18712 (useFavoritesPruneInactiveThreads)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6625 */;
import FavoriteStore from "FavoriteStore" /* 4994 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesPruneInactiveThreads.tsx");

export default function useFavoritesPruneInactiveThreads() {
  items = [GatewayConnectionStore];
  stateFromStores = stateFromStores(stateFromStores1[4]).useStateFromStores(items, () => connected.isConnected());
  let obj = stateFromStores(stateFromStores1[4]);
  const items1 = [FavoriteStore];
  stateFromStores1 = stateFromStores(stateFromStores1[4]).useStateFromStores(items1, () => pruneInactiveThreads.pruneInactiveThreads);
  const items2 = [stateFromStores, stateFromStores1];
  const effect = noop.useEffect(() => {
    closure_0 = async function _prune() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c2 = 1;
              c1 = 2;
              v3 = 1;
              const obj5 = { value: v3(c1[5]).pruneInactiveFavoriteThreads(), done: false };
              return obj5;
            }
          } else if (1 === tmp6) {
            c2 = 0;
            v3 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          if (tmp3 === c2) {
            v3 = tmp2;
            throw tmp9;
          } else {
            c1 = tmp;
          }
        }
      }
    };
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = stateFromStores1;
    }
    if (tmp) {
      (function prune() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items2);
};