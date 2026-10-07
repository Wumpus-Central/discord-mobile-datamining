// discord_app/modules/auth_sessions/AuthSessionsUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import AuthSessionsStore from "AuthSessionsStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsUtils.tsx");

export const useAuthSessions = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = authSessionIdHash(576).c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthSessionsStore];
        const fn = function o() {
          return sessions.getSessions();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = authSessionIdHash(576);
      const stateFromStoresObject = authSessionIdHash(504).useStateFromStoresObject(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresObject) {
        const items1 = [];
        HermesBuiltin.arraySpread(stateFromStoresObject, 0);
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
            return approx_last_used_time.valueOf() - approx_last_used_time2.valueOf();
          };
          cResult[4] = fn2;
          let tmp16 = fn2;
        } else {
          tmp16 = cResult[4];
        }
        const sorted = items1.sort(tmp16);
        const obj2 = { currentSession: first, otherSessions: items1 };
        cResult[2] = stateFromStoresObject;
        cResult[3] = obj2;
      } else {
        return cResult[3];
      }
      const tmpResult = authSessionIdHash(504);
    }
  : () => {
      const items = [AuthSessionsStore];
      stateFromStoresObject = stateFromStoresObject(504).useStateFromStoresObject(items, () => sessions.getSessions());
      const items1 = [stateFromStoresObject];
      return noop.useMemo(() => {
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
          return approx_last_used_time.valueOf() - approx_last_used_time2.valueOf();
        });
        return { currentSession, otherSessions };
      }, items1);
    };
export const formatDate = function formatDate(arg0) {
  const timestamp = Date.now();
  if ((timestamp - arg0.valueOf()) / 1000 / 60 / 60 < 1) {
    const intl = util.intl;
    let stringResult = intl.string(util.t.TXCmfL);
  } else {
    stringResult = _modDef4467(arg0).fromNow();
    const obj = _modDef4467(arg0);
  }
  return stringResult;
};
