// discord_app/modules/premium/useTrialOffer.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import UserStore from "../../stores/UserStore.tsx";
import UserOfferStore from "../../stores/billing/UserOfferStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, startResult, tmp3;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_3;
      let currentUser;
      let first;
      let first1;
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserOfferStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function f() {
          return UserOfferStore.getUserTrialOffer(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let flag;
      const useState = react.useState;
      const obj3 = react;
      if (stateFromStores != null) {
        flag = stateFromStores.hasExpired;
      }
      if (flag == null) {
        flag = false;
      }
      const tmp8 = first1(useState(flag), 2);
      first1 = tmp8[0];
      react = tmp8[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class T {
          constructor() {
            const obj = closure_0(stateFromStores[7]);
            return obj.isPremium(currentUser.getCurrentUser());
          }
        }
        cResult[3] = items1;
        cResult[4] = T;
        tmp11 = T;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
      if (stateFromStores1) {
        const result = UserOfferStore.canFractionalPremiumUserUseOffer();
      }
      if (cResult[5] === first1) {
        let tmp16;
        let tmp17;
        if (cResult[6] === stateFromStores) {
          tmp16 = cResult[7];
          tmp17 = cResult[8];
        }
        const effect = obj3.useEffect(tmp16, tmp17);
        class T {
          constructor() {
            const obj = closure_0(stateFromStores[7]);
            return obj.isPremium(currentUser.getCurrentUser());
          }
        }
        return null;
      }
      class U {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            if (tmp.hasAcknowledged) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              self = this;
              self2 = this;
              timeout = new closure_0(closure_1[8]).Timeout();
              tmp4 = timeout;
              closure_0 = timeout;
              if (null != tmp) {
                num = 0;
                if (null != tmp.expiresAt) {
                  expiresAt = tmp.expiresAt;
                  tmp6 = globalThis;
                  _Date = Date;
                  time = expiresAt.getTime();
                  num = time - Date.now();
                }
                startResult = timeout.start(num, () => {
                  if (!first1) {
                    if (stateFromStores.hasExpired) {
                      closure_3(true);
                    }
                  }
                  if (null != stateFromStores) {
                    let num = 0;
                    if (null != stateFromStores.expiresAt) {
                      const expiresAt = stateFromStores.expiresAt;
                      const _Date = Date;
                      const time = expiresAt.getTime();
                      num = time - Date.now();
                    }
                    if (timeout != null) {
                      timeout.start(num, f151368);
                    }
                  }
                });
              }
              return () => timeout.stop();
            }
          }
          return;
        }
      }
      const items2 = [first1, stateFromStores];
      cResult[5] = first1;
      cResult[6] = stateFromStores;
      cResult[7] = U;
      cResult[8] = items2;
      tmp17 = items2;
      tmp16 = U;
    }
  : (arg0) => {
      let closure_0;
      let closure_3;
      let currentUser;
      let first;
      let stateFromStores;
      _require = arg0;
      let obj = require("get initialized");
      const items = [UserOfferStore];
      const tmp2 = stateFromStores;
      stateFromStores = obj.useStateFromStores(items, () => UserOfferStore.getUserTrialOffer(closure_0));
      let flag;
      const useState = react.useState;
      const obj3 = react;
      const tmp = _require;
      if (stateFromStores != null) {
        flag = stateFromStores.hasExpired;
      }
      if (flag == null) {
        flag = false;
      }
      const tmp4 = first(useState(flag), 2);
      first = tmp4[0];
      react = tmp4[1];
      const items1 = [UserStore];
      const tmpResult = tmp(tmp2[6]);
      const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
        const obj = closure_0(stateFromStores[7]);
        return obj.isPremium(currentUser.getCurrentUser());
      });
      let result = !stateFromStores1;
      if (stateFromStores1) {
        result = UserOfferStore.canFractionalPremiumUserUseOffer();
      }
      const items2 = [first, stateFromStores];
      const effect = obj3.useEffect(function () {
        const f151369 = () => {
          if (!first) {
            if (stateFromStores.hasExpired) {
              closure_3(true);
            }
          }
          if (null != stateFromStores) {
            let num = 0;
            if (null != stateFromStores.expiresAt) {
              const expiresAt = stateFromStores.expiresAt;
              const _Date = Date;
              const time = expiresAt.getTime();
              num = time - Date.now();
            }
            if (timeout != null) {
              timeout.start(num, f151369);
            }
          }
        };
        if (null != stateFromStores) {
          if (stateFromStores.hasAcknowledged) {
            const self = this;
            const self2 = this;
            const timeout = new closure_0(stateFromStores[8]).Timeout();
            if (null != stateFromStores) {
              let num = 0;
              if (null != stateFromStores.expiresAt) {
                let expiresAt = stateFromStores.expiresAt;
                let _Date = Date;
                let time = expiresAt.getTime();
                num = time - Date.now();
              }
              timeout.start(num, f151369);
            }
            return () => timeout.stop();
          }
        }
      }, items2);
      let tmp9 = null;
      if (!first) {
        tmp9 = null;
        if (result) {
          tmp9 = stateFromStores;
        }
      }
      return tmp9;
    };
let result = size.fileFinishedImporting("modules/premium/useTrialOffer.tsx");

export const hasUserTrialOfferExpired = function hasUserTrialOfferExpired(hasExpired) {
  let flag;
  if (hasExpired != null) {
    flag = hasExpired.hasExpired;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useTrialOffer = tmp2;
