// discord_app/modules/parent_tools/hooks/useOnNewPendingRequest.tsx
import react_mod from "../../../../_runtime/00019_react.js";
import FamilyCenterStore_mod from "../FamilyCenterStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let react = react_mod;
let FamilyCenterStore = FamilyCenterStore_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      let ref;
      let ref2;
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp5;
      let tmp6;
      let tmp9;
      _require = current;
      let obj = require("react");
      const cResult = obj.c(10);
      const obj2 = require("useUserLinks");
      const pendingRequestCount = obj2.usePendingRequestCount();
      const tmp = _require;
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
      const tmpResult = tmp(stateFromStores[5]);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          if (!ref2.getAreLinkedUsersProcessed()) {
            const obj = pendingRequestCount(stateFromStores[6]);
            const linkedUsers = obj.fetchLinkedUsers();
            linkedUsers.catch(() => {});
          }
        };
        cResult[2] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[2];
      }
      pendingRequestCount(stateFromStores[7])(tmp9);
      react = react.useRef(current);
      if (cResult[3] !== current) {
        const fn3 = function _() {
          ref.current = current;
        };
        const items1 = [current];
        cResult[3] = current;
        cResult[4] = fn3;
        cResult[5] = items1;
        tmp12 = items1;
        tmp11 = fn3;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const effect = obj4.useEffect(tmp11, tmp12);
      FamilyCenterStore = obj4.useRef(null);
      if (cResult[6] === stateFromStores) {
        let tmp14;
        let tmp15;
        if (cResult[7] === pendingRequestCount) {
          tmp14 = cResult[8];
          tmp15 = cResult[9];
        }
        const effect1 = obj4.useEffect(tmp14, tmp15);
      }
      class R {
        constructor() {
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
      let ref;
      let ref2;
      let stateFromStores;
      _require = current;
      let obj = require("useUserLinks");
      const pendingRequestCount = obj.usePendingRequestCount();
      const items = [ref2];
      const obj2 = require("get initialized");
      stateFromStores = obj2.useStateFromStores(items, () => ref2.getAreLinkedUsersProcessed());
      pendingRequestCount(stateFromStores[7])(() => {
        if (!ref2.getAreLinkedUsersProcessed()) {
          const obj = pendingRequestCount(stateFromStores[6]);
          const linkedUsers = obj.fetchLinkedUsers();
          linkedUsers.catch(() => {});
        }
      });
      react = react.useRef(current);
      const items1 = [current];
      const effect = react.useEffect(() => {
        ref.current = current;
      }, items1);
      ref2 = react.useRef(null);
      const items2 = [stateFromStores, pendingRequestCount];
      const effect1 = react.useEffect(() => {
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
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useOnNewPendingRequest.tsx");

export default tmp2;
