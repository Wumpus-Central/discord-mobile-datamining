// discord_app/modules/parent_tools/hooks/useOnNewPendingRequest.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      _require = current;
      const cResult = require("c").c(10);
      let obj = require("c");
      const tmp = _require;
      const pendingRequestCount = require("useUserLinks").usePendingRequestCount();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        const fn = function c() {
          return ref2.getAreLinkedUsersProcessed();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj2 = require("useUserLinks");
      stateFromStores = tmp(stateFromStores[5]).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          if (!ref2.getAreLinkedUsersProcessed()) {
            const linkedUsers = pendingRequestCount(stateFromStores[6]).fetchLinkedUsers();
            linkedUsers.catch(() => {});
            const obj = pendingRequestCount(stateFromStores[6]);
          }
        };
        cResult[2] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[2];
      }
      pendingRequestCount(stateFromStores[7])(tmp9);
      noop = noop.useRef(current);
      if (cResult[3] !== current) {
        const fn3 = function _() {
          closure_3.current = current;
        };
        const items1 = [current];
        cResult[3] = current;
        cResult[4] = fn3;
        cResult[5] = items1;
        let tmp12 = items1;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const effect = obj4.useEffect(tmp11, tmp12);
      FamilyCenterStore = obj4.useRef(null);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === pendingRequestCount) {
          let tmp14 = cResult[8];
          let tmp15 = cResult[9];
        }
        const effect1 = obj4.useEffect(tmp14, tmp15);
      }
      class R {
        constructor() {
          if (closure_2) {
            tmp = closure_4;
            tmp2 = null;
            if (null != closure_4.current) {
              tmp4 = closure_1;
              tmp.current = closure_1;
              if (closure_1 > tmp.current) {
                tmp5 = closure_3;
                currentResult = closure_3.current();
              }
            } else {
              tmp3 = closure_1;
              tmp.current = closure_1;
            }
          }
          return;
        }
      }
      const items2 = [stateFromStores, pendingRequestCount];
      cResult[6] = stateFromStores;
      cResult[7] = pendingRequestCount;
      cResult[8] = R;
      cResult[9] = items2;
      tmp15 = items2;
      tmp14 = R;
    }
  : (current) => {
      _require = current;
      const pendingRequestCount = require("useUserLinks").usePendingRequestCount();
      let obj = require("useUserLinks");
      const items = [ref2];
      stateFromStores = require("initialize").useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
      pendingRequestCount(stateFromStores[7])(() => {
        if (!ref2.getAreLinkedUsersProcessed()) {
          const linkedUsers = pendingRequestCount(stateFromStores[6]).fetchLinkedUsers();
          linkedUsers.catch(() => {});
          const obj = pendingRequestCount(stateFromStores[6]);
        }
      });
      noop = noop.useRef(current);
      const items1 = [current];
      const effect = noop.useEffect(() => {
        closure_3.current = current;
      }, items1);
      const obj2 = require("initialize");
      const items2 = [stateFromStores, pendingRequestCount];
      const effect1 = noop.useEffect(() => {
        if (stateFromStores) {
          if (null != ref2.current) {
            ref2.current = pendingRequestCount;
            if (pendingRequestCount > ref2.current) {
              ref.current();
            }
          } else {
            ref2.current = pendingRequestCount;
          }
        }
      }, items2);
    };
