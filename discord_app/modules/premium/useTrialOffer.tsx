// === Module 7171: useTrialOffer ===

// Module 7171 (useTrialOffer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import UserOfferStore from "UserOfferStore" /* 7172 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
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
export const useTrialOffer = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrialOffer(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserOfferStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return UserOfferStore.getUserTrialOffer(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp8 = first1(noop.useState(flag), 2);
  first1 = tmp8[0];
  noop = tmp8[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function p() {
      return closure_0(stateFromStores[7]).isPremium(currentUser.getCurrentUser());
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp11 = fn2;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const obj3 = noop;
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = UserOfferStore.canFractionalPremiumUserUseOffer();
  }
  if (cResult[5] === first1) {
    if (cResult[6] === stateFromStores) {
      let tmp16 = cResult[7];
      let tmp17 = cResult[8];
    }
    const effect = obj3.useEffect(tmp16, tmp17);
    let tmp19 = null;
    if (!first1) {
      tmp19 = null;
      if (result) {
        tmp19 = stateFromStores;
      }
    }
    return tmp19;
  }
  class E {
    constructor() {
      tmp = closure_1;
      if (null != closure_1) {
        if (tmp.hasAcknowledged) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = new.target;
          tmp5 = new.target;
          timeout = new closure_0(closure_1[8]).Timeout();
          tmp6 = timeout;
          closure_0 = timeout;
          if (null != tmp) {
            num = 0;
            if (null != tmp.expiresAt) {
              expiresAt = tmp.expiresAt;
              tmp8 = globalThis;
              _Date = Date;
              time = expiresAt.getTime();
              num = time - Date.now();
            }
            startResult = timeout.start(num, () => {
              if (!closure_2_2) {
                if (closure_2_1.hasExpired) {
                  closure_2_3(true);
                }
              }
              if (null != closure_2_1) {
                let num = 0;
                if (null != closure_2_1.expiresAt) {
                  let expiresAt = closure_2_1.expiresAt;
                  let _Date = Date;
                  let time = expiresAt.getTime();
                  num = time - Date.now();
                }
                if (closure_1_0 != null) {
                  closure_1_0.start(num, () => { ... });
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
  cResult[7] = E;
  cResult[8] = items2;
  tmp17 = items2;
  tmp16 = E;
  const tmpResult2 = require("initialize");
}) : (function useTrialOffer(arg0) {
  _require = arg0;
  const items = [UserOfferStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserOfferStore.getUserTrialOffer(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4 = first(noop.useState(flag), 2);
  first = tmp4[0];
  noop = tmp4[1];
  const obj = require("initialize");
  const obj3 = noop;
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => closure_0(stateFromStores[7]).isPremium(currentUser.getCurrentUser()));
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = UserOfferStore.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj3.useEffect(() => {
    if (null != stateFromStores) {
      if (stateFromStores.hasAcknowledged) {
        const timeout = new closure_0(stateFromStores[8]).Timeout();
        if (null != stateFromStores) {
          let num = 0;
          if (null != stateFromStores.expiresAt) {
            const expiresAt = stateFromStores.expiresAt;
            const _Date = Date;
            const time = expiresAt.getTime();
            num = time - Date.now();
          }
          timeout.start(num, () => {
            if (!closure_2_2) {
              if (closure_2_1.hasExpired) {
                closure_2_3(true);
              }
            }
            if (null != closure_2_1) {
              let num = 0;
              if (null != closure_2_1.expiresAt) {
                let expiresAt = closure_2_1.expiresAt;
                let _Date = Date;
                let time = expiresAt.getTime();
                num = time - Date.now();
              }
              if (closure_1_0 != null) {
                closure_1_0.start(num, () => {
                  if (!closure_2_2) {
                    if (closure_2_1.hasExpired) {
                      closure_2_3(true);
                    }
                  }
                  if (null != closure_2_1) {
                    let num = 0;
                    if (null != closure_2_1.expiresAt) {
                      let expiresAt = closure_2_1.expiresAt;
                      let _Date = Date;
                      let time = expiresAt.getTime();
                      num = time - Date.now();
                    }
                    if (closure_1_0 != null) {
                      closure_1_0.start(num, () => {
                        if (!closure_2_2) {
                          if (closure_2_1.hasExpired) {
                            closure_2_3(true);
                          }
                        }
                        if (null != closure_2_1) {
                          let num = 0;
                          if (null != closure_2_1.expiresAt) {
                            let expiresAt = closure_2_1.expiresAt;
                            let _Date = Date;
                            let time = expiresAt.getTime();
                            num = time - Date.now();
                          }
                          if (closure_1_0 != null) {
                            closure_1_0.start(num, () => { ... });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
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
});