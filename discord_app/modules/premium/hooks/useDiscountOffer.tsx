// discord_app/modules/premium/hooks/useDiscountOffer.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import UserOfferStore from "../../../stores/billing/UserOfferStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, startResult, tmp4;

let react = react_mod;
const CHURN_DISCOUNT_IDS = PremiumConstants.CHURN_DISCOUNT_IDS;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_3;
      let currentUser;
      let first;
      let first1;
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp6;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserOfferStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function p() {
          return UserOfferStore.getUserDiscountOffer(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        let flag;
        if (stateFromStores != null) {
          flag = stateFromStores.hasExpired();
        }
        if (flag == null) {
          flag = false;
        }
        cResult[3] = stateFromStores;
        cResult[4] = flag;
        tmp7 = flag;
      } else {
        tmp7 = cResult[4];
      }
      const tmp9 = first1(react.useState(tmp7), 2);
      first1 = tmp9[0];
      const obj4 = react;
      react = tmp9[1];
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        const fn2 = function x() {
          const obj = closure_0(stateFromStores[8]);
          return obj.isPremium(currentUser.getCurrentUser());
        };
        cResult[5] = items1;
        cResult[6] = fn2;
        tmp12 = fn2;
        tmp11 = items1;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp12);
      if (cResult[7] === first1) {
        let tmp16;
        let tmp17;
        if (cResult[8] === stateFromStores) {
          tmp16 = cResult[9];
          tmp17 = cResult[10];
        }
        const effect = obj4.useEffect(tmp16, tmp17);
        let tmp19 = null;
        if (!first1) {
          if (stateFromStores1) {
            const tmp20 = arg1;
            if (!tmp20) {
              tmp19 = null;
            }
          }
          tmp19 = stateFromStores;
        }
        return tmp19;
      }
      class E {
        constructor() {
          obj = closure_1;
          hasAcknowledgedResult = undefined;
          if (closure_1 != null) {
            hasAcknowledgedResult = obj.hasAcknowledged();
          }
          if (hasAcknowledgedResult) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            self = this;
            self2 = this;
            timeout = new closure_0(closure_1[9]).Timeout();
            tmp4 = timeout;
            closure_0 = timeout;
            hasAcknowledgedResult1 = undefined;
            if (obj != null) {
              hasAcknowledgedResult1 = obj.hasAcknowledged();
            }
            if (hasAcknowledgedResult1) {
              num = 0;
              if (null != obj.expiresAt) {
                expiresAt = obj.expiresAt;
                tmp7 = globalThis;
                _Date = Date;
                time = expiresAt.getTime();
                num = time - Date.now();
              }
              startResult = timeout.start(num, () => {
                if (!first1) {
                  if (stateFromStores.hasExpired()) {
                    closure_3(true);
                  }
                }
                let hasAcknowledgedResult;
                if (stateFromStores != null) {
                  hasAcknowledgedResult = stateFromStores.hasAcknowledged();
                }
                if (hasAcknowledgedResult) {
                  let num = 0;
                  if (null != stateFromStores.expiresAt) {
                    const expiresAt = stateFromStores.expiresAt;
                    const _Date = Date;
                    const time = expiresAt.getTime();
                    num = time - Date.now();
                  }
                  if (timeout != null) {
                    timeout.start(num, f151302);
                  }
                }
              });
            }
            return () => timeout.stop();
          } else {
            return;
          }
        }
      }
      const items2 = [first1, stateFromStores];
      cResult[7] = first1;
      cResult[8] = stateFromStores;
      cResult[9] = E;
      cResult[10] = items2;
      tmp17 = items2;
      tmp16 = E;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_3;
      let currentUser;
      let first;
      let stateFromStores;
      _require = arg0;
      let obj = require("get initialized");
      const items = [UserOfferStore];
      const tmp2 = stateFromStores;
      stateFromStores = obj.useStateFromStores(items, () => UserOfferStore.getUserDiscountOffer(closure_0));
      let flag;
      const useState = react.useState;
      const obj3 = react;
      const tmp = _require;
      if (stateFromStores != null) {
        flag = stateFromStores.hasExpired();
      }
      if (flag == null) {
        flag = false;
      }
      const tmp3 = first(useState(flag), 2);
      first = tmp3[0];
      react = tmp3[1];
      const items1 = [UserStore];
      const tmpResult = tmp(tmp2[7]);
      const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
        const obj = closure_0(stateFromStores[8]);
        return obj.isPremium(currentUser.getCurrentUser());
      });
      const items2 = [first, stateFromStores];
      const hasItem = CHURN_DISCOUNT_IDS.includes(arg0);
      const effect = obj3.useEffect(function () {
        const f151303 = () => {
          if (!first) {
            if (stateFromStores.hasExpired()) {
              closure_3(true);
            }
          }
          let hasAcknowledgedResult;
          if (stateFromStores != null) {
            hasAcknowledgedResult = stateFromStores.hasAcknowledged();
          }
          if (hasAcknowledgedResult) {
            let num = 0;
            if (null != stateFromStores.expiresAt) {
              const expiresAt = stateFromStores.expiresAt;
              const _Date = Date;
              const time = expiresAt.getTime();
              num = time - Date.now();
            }
            if (timeout != null) {
              timeout.start(num, f151303);
            }
          }
        };
        let hasAcknowledgedResult;
        if (stateFromStores != null) {
          hasAcknowledgedResult = stateFromStores.hasAcknowledged();
        }
        if (hasAcknowledgedResult) {
          const self = this;
          const self2 = this;
          const timeout = new closure_0(stateFromStores[9]).Timeout();
          let hasAcknowledgedResult1;
          if (stateFromStores != null) {
            hasAcknowledgedResult1 = stateFromStores.hasAcknowledged();
          }
          if (hasAcknowledgedResult1) {
            let num = 0;
            if (null != stateFromStores.expiresAt) {
              let expiresAt = stateFromStores.expiresAt;
              let _Date = Date;
              let time = expiresAt.getTime();
              num = time - Date.now();
            }
            timeout.start(num, f151303);
          }
          return () => timeout.stop();
        }
      }, items2);
      let tmp8 = null;
      if (!first) {
        if (stateFromStores1) {
          const tmp9 = arg1;
          if (!tmp9) {
            tmp8 = null;
          }
        }
        tmp8 = stateFromStores;
      }
      return tmp8;
    };
const result = size.fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default tmp2;
