// discord_app/modules/unique_usernames/useUsernameLiveCheck.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import UniqueUsernamesActionCreatorsDefault from "UniqueUsernamesActionCreators.tsx";
import UniqueUsernamesUtils from "UniqueUsernamesUtils.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import UniqueUsernamesStore from "UniqueUsernamesStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let closure_0;
      let closure_2;
      let closure_3;
      let first;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp9;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(18);
      let closure_1 = tmp4;
      dependencyMap = tmp5;
      react = tmp6;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function v() {
          return UniqueUsernamesStore.validate(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(573);
      stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [stateFromStores];
        class U {
          constructor() {
            return stateFromStores.isRateLimited();
          }
        }
        cResult[4] = items2;
        cResult[5] = U;
        tmp13 = U;
        tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult3 = tmp(573);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13);
      if (cResult[6] === (undefined !== arg2 && arg2)) {
        let tmp16;
        if (cResult[7] === (undefined !== arg3 && arg3)) {
          tmp16 = cResult[8];
        }
        let closure_6 = tmp16;
        if (cResult[9] === (undefined === arg1 || arg1)) {
          if (cResult[10] === tmp16) {
            if (cResult[11] === stateFromStores1) {
              if (cResult[12] === arg0) {
                let tmp18;
                let tmp19;
                if (cResult[13] === stateFromStores) {
                  tmp18 = cResult[14];
                  tmp19 = cResult[15];
                }
                const effect = react.useEffect(tmp19, tmp18);
                class U {
                  constructor() {
                    return stateFromStores.isRateLimited();
                  }
                }
                return tmp23;
              }
            }
          }
        }
        class U {
          constructor() {
            return stateFromStores.isRateLimited();
          }
        }
        const items3 = [tmp4, stateFromStores1, stateFromStores, arg0, tmp16];
        cResult[9] = undefined === arg1 || arg1;
        cResult[10] = tmp16;
        cResult[11] = stateFromStores1;
        cResult[12] = arg0;
        cResult[13] = stateFromStores;
        cResult[14] = items3;
        cResult[15] = tmp20;
        tmp19 = tmp20;
        tmp18 = items3;
      }
      const tmpResult4 = tmp(12);
      const debounceResult = tmpResult4.debounce((arg0) => {
        let str = "modal";
        const attemptUsername = UniqueUsernamesActionCreatorsDefault.attemptUsername;
        UniqueUsernamesActionCreatorsDefault;
        if (closure_2) {
          str = "registration";
        }
        return attemptUsername(arg0, str, closure_2, closure_3);
      }, 800);
      cResult[6] = undefined !== arg2 && arg2;
      cResult[7] = undefined !== arg3 && arg3;
      cResult[8] = debounceResult;
      tmp16 = debounceResult;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let flag2 = arg2;
      if (arg2 === undefined) {
        flag2 = false;
      }
      let flag3 = arg3;
      if (arg3 === undefined) {
        flag3 = false;
      }
      let stateFromStores;
      let obj = require("useStateFromStores");
      const items = [stateFromStores];
      const items1 = [arg0];
      stateFromStores = obj.useStateFromStores(items, () => UniqueUsernamesStore.validate(closure_0), items1);
      const items2 = [stateFromStores];
      const obj2 = require("useStateFromStores");
      const stateFromStores1 = obj2.useStateFromStores(items2, () => stateFromStores.isRateLimited());
      const items3 = [flag2, flag3];
      const memo = flag3.useMemo(() => {
        const obj = _mod12;
        return obj.debounce((arg0) => {
          let str = "modal";
          const attemptUsername = flag(flag2[6]).attemptUsername;
          flag(flag2[6]);
          if (closure_1_2) {
            str = "registration";
          }
          return attemptUsername(arg0, str, closure_1_2, flag3);
        }, 800);
      }, items3);
      const items4 = [flag, stateFromStores1, stateFromStores, arg0, memo];
      const effect = flag3.useEffect(() => {
        const tmp = flag && !stateFromStores1 && null == stateFromStores && "" !== closure_0;
        if (tmp) {
          memo(closure_0);
        }
      }, items4);
      const items5 = [stateFromStores];
      return flag3.useMemo(() => {
        let result;
        if (null != stateFromStores) {
          const obj = UniqueUsernamesUtils;
          result = obj.formatUsernameLiveCheckValidation(tmp);
        }
        return result;
      }, items5);
    };
let result = size.fileFinishedImporting("modules/unique_usernames/useUsernameLiveCheck.tsx");

export const useUsernameLiveCheck = tmp2;
