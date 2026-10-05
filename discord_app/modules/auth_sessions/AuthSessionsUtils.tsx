// discord_app/modules/auth_sessions/AuthSessionsUtils.tsx
import intl2 from "../../intl/index.native.tsx";
import _modDef4461 from "../../../_runtime/metro/04461__.js";
import react from "../../../_runtime/00019_react.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import AuthSessionsStore from "AuthSessionsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let authSessionIdHash;
      let sessions;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = authSessionIdHash(576);
      const cResult = obj.c(5);
      const tmp2 = authSessionIdHash;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthSessionsStore];
        const fn = function o() {
          return sessions.getSessions();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmp2Result = tmp2(504);
      const stateFromStoresObject = tmp2Result.useStateFromStoresObject(tmp5, tmp6);
      if (cResult[2] !== stateFromStoresObject) {
        let tmp18;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, stateFromStoresObject, 0);
        authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
        let first = null;
        if (null != authSessionIdHash) {
          const findIndexResult = items1.findIndex((id_hash) => id_hash.id_hash === authSessionIdHash);
          first = null;
          if (findIndexResult >= 0) {
            first = items1.splice(findIndexResult, 1)[0];
          }
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function _(approx_last_used_time, approx_last_used_time2) {
            approx_last_used_time = approx_last_used_time2.approx_last_used_time;
            approx_last_used_time2 = approx_last_used_time.approx_last_used_time;
            const valueOfResult = approx_last_used_time.valueOf();
            return valueOfResult - approx_last_used_time2.valueOf();
          };
          cResult[4] = fn2;
          tmp18 = fn2;
        } else {
          tmp18 = cResult[4];
        }
        const sorted = items1.sort(tmp18);
        const obj2 = { currentSession: first, otherSessions: items1 };
        cResult[2] = stateFromStoresObject;
        cResult[3] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : () => {
      let sessions;
      let stateFromStoresObject;
      const items = [AuthSessionsStore];
      const obj = stateFromStoresObject(504);
      stateFromStoresObject = obj.useStateFromStoresObject(items, () => sessions.getSessions());
      const items1 = [stateFromStoresObject];
      return react.useMemo(() => {
        const otherSessions = [...stateFromStoresObject];
        const authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
        let currentSession = null;
        if (null != authSessionIdHash) {
          const findIndexResult = otherSessions.findIndex((id_hash) => id_hash.id_hash === authSessionIdHash);
          currentSession = null;
          if (findIndexResult >= 0) {
            currentSession = otherSessions.splice(findIndexResult, 1)[0];
          }
        }
        const sorted = otherSessions.sort((approx_last_used_time, approx_last_used_time2) => {
          approx_last_used_time = approx_last_used_time2.approx_last_used_time;
          approx_last_used_time2 = approx_last_used_time.approx_last_used_time;
          const valueOfResult = approx_last_used_time.valueOf();
          return valueOfResult - approx_last_used_time2.valueOf();
        });
        return { currentSession, otherSessions };
      }, items1);
    };
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = tmp2;
export const formatDate = function formatDate(arg0) {
  let stringResult;
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.TXCmfL);
  } else {
    const obj = _modDef4461(arg0);
    stringResult = obj.fromNow();
  }
  return stringResult;
};
