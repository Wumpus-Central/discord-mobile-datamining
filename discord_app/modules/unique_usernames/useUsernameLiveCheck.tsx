// discord_app/modules/unique_usernames/useUsernameLiveCheck.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import UniqueUsernamesActionCreatorsDefault from "UniqueUsernamesActionCreators.tsx";
import UniqueUsernamesUtils from "UniqueUsernamesUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UniqueUsernamesStore from "UniqueUsernamesStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/unique_usernames/useUsernameLiveCheck.tsx");

export const useUsernameLiveCheck = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      _require = arg0;
      const cResult = require("c").c(18);
      closure_1 = tmp4;
      dependencyMap = tmp5;
      noop = tmp6;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        cResult[0] = items;
        let first = items;
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
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const obj = require("c");
      stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [stateFromStores];
        class U {
          constructor() {
            return closure_4.isRateLimited();
          }
        }
        cResult[4] = items2;
        cResult[5] = U;
        let tmp13 = U;
        let tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp12, tmp13);
      if (cResult[6] === (undefined !== arg2 && arg2)) {
        if (cResult[7] === tmp6) {
          let tmp16 = cResult[8];
        }
        closure_6 = tmp16;
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp16) {
            if (cResult[11] === stateFromStores1) {
              if (cResult[12] === arg0) {
                if (cResult[13] === stateFromStores) {
                  let tmp18 = cResult[14];
                  let tmp19 = cResult[15];
                }
                const effect = noop.useEffect(tmp19, tmp18);
                class U {
                  constructor() {
                    return closure_4.isRateLimited();
                  }
                }
                return tmp23;
              }
            }
          }
        }
        class U {
          constructor() {
            return closure_4.isRateLimited();
          }
        }
        const items3 = [tmp4, stateFromStores1, stateFromStores, arg0, tmp16];
        cResult[9] = tmp4;
        cResult[10] = tmp16;
        cResult[11] = stateFromStores1;
        cResult[12] = arg0;
        cResult[13] = stateFromStores;
        cResult[14] = items3;
        cResult[15] = tmp20;
        tmp19 = tmp20;
        tmp18 = items3;
      }
      const tmpResult3 = require("useStateFromStores");
      const debounceResult = require("../../../_runtime/metro/00012__.js").debounce((arg0) => {
        let str = "modal";
        if (closure_2) {
          str = "registration";
        }
        return UniqueUsernamesActionCreatorsDefault.attemptUsername(arg0, str, closure_2, closure_3);
      }, 800);
      cResult[6] = undefined !== arg2 && arg2;
      cResult[7] = undefined !== arg3 && arg3;
      cResult[8] = debounceResult;
      tmp16 = debounceResult;
    }
  : (arg0) => {
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
      const items = [stateFromStores];
      const items1 = [arg0];
      stateFromStores = require("useStateFromStores").useStateFromStores(
        items,
        () => UniqueUsernamesStore.validate(closure_0),
        items1,
      );
      let obj = require("useStateFromStores");
      const items2 = [stateFromStores];
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () =>
        stateFromStores.isRateLimited(),
      );
      const items3 = [flag2, flag3];
      const memo = flag3.useMemo(
        () =>
          _mod12.debounce((arg0) => {
            let str = "modal";
            if (closure_1_2) {
              str = "registration";
            }
            return flag(flag2[6]).attemptUsername(arg0, str, closure_1_2, flag3);
          }, 800),
        items3,
      );
      const items4 = [flag, stateFromStores1, stateFromStores, arg0, memo];
      const effect = flag3.useEffect(() => {
        let tmp = flag;
        if (flag) {
          tmp = !stateFromStores1;
        }
        if (tmp) {
          tmp = null == stateFromStores;
        }
        if (tmp) {
          tmp = "" !== closure_0;
        }
        if (tmp) {
          memo(closure_0);
        }
      }, items4);
      const items5 = [stateFromStores];
      return flag3.useMemo(() => {
        let result;
        if (null != stateFromStores) {
          result = UniqueUsernamesUtils.formatUsernameLiveCheckValidation(tmp);
        }
        return result;
      }, items5);
    };
