// === Module 7732: useDiscountOffer ===

// Module 7732 (useDiscountOffer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import UserOfferStore from "UserOfferStore" /* 6959 */;

const require = globalThis.__r;

const require = fn;
const CHURN_DISCOUNT_IDS = fn(1379).CHURN_DISCOUNT_IDS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserOfferStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return UserOfferStore.getUserDiscountOffer(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
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
    let tmp7 = flag;
  } else {
    tmp7 = cResult[4];
  }
  const tmp9 = first1(noop.useState(tmp7), 2);
  first1 = tmp9[0];
  noop = tmp9[1];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function x() {
      return closure_0(stateFromStores[8]).isPremium(currentUser.getCurrentUser());
    };
    cResult[5] = items1;
    cResult[6] = fn2;
    let tmp12 = fn2;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const obj4 = noop;
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp11, tmp12);
  if (cResult[7] === first1) {
    if (cResult[8] === stateFromStores) {
      let tmp16 = cResult[9];
      let tmp17 = cResult[10];
    }
    const effect = obj4.useEffect(tmp16, tmp17);
    let tmp19 = null;
    if (!first1) {
      if (stateFromStores1) {
        if (!arg1) {
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
        tmp4 = new.target;
        tmp5 = new.target;
        timeout = new closure_0(closure_1[9]).Timeout();
        tmp6 = timeout;
        closure_0 = timeout;
        hasAcknowledgedResult1 = undefined;
        if (obj != null) {
          hasAcknowledgedResult1 = obj.hasAcknowledged();
        }
        if (hasAcknowledgedResult1) {
          num = 0;
          if (null != obj.expiresAt) {
            expiresAt = obj.expiresAt;
            tmp9 = globalThis;
            _Date = Date;
            time = expiresAt.getTime();
            num = time - Date.now();
          }
          startResult = timeout.start(num, () => {
            if (!closure_2_2) {
              if (closure_2_1.hasExpired()) {
                closure_2_3(true);
              }
            }
            let hasAcknowledgedResult;
            if (closure_2_1 != null) {
              hasAcknowledgedResult = closure_2_1.hasAcknowledged();
            }
            if (hasAcknowledgedResult) {
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
  const tmpResult2 = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  const items = [UserOfferStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserOfferStore.getUserDiscountOffer(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp3 = first(noop.useState(flag), 2);
  first = tmp3[0];
  noop = tmp3[1];
  const obj = require("initialize");
  const obj3 = noop;
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => closure_0(stateFromStores[8]).isPremium(currentUser.getCurrentUser()));
  const items2 = [first, stateFromStores];
  const hasItem = CHURN_DISCOUNT_IDS.includes(arg0);
  const effect = obj3.useEffect(() => {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = stateFromStores.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new closure_0(stateFromStores[9]).Timeout();
      let hasAcknowledgedResult1;
      if (stateFromStores != null) {
        hasAcknowledgedResult1 = stateFromStores.hasAcknowledged();
      }
      if (hasAcknowledgedResult1) {
        let num = 0;
        if (null != stateFromStores.expiresAt) {
          const expiresAt = stateFromStores.expiresAt;
          const _Date = Date;
          const time = expiresAt.getTime();
          num = time - Date.now();
        }
        timeout.start(num, () => {
          if (!closure_2_2) {
            if (closure_2_1.hasExpired()) {
              closure_2_3(true);
            }
          }
          let hasAcknowledgedResult;
          if (closure_2_1 != null) {
            hasAcknowledgedResult = closure_2_1.hasAcknowledged();
          }
          if (hasAcknowledgedResult) {
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
                  if (closure_2_1.hasExpired()) {
                    closure_2_3(true);
                  }
                }
                let hasAcknowledgedResult;
                if (closure_2_1 != null) {
                  hasAcknowledgedResult = closure_2_1.hasAcknowledged();
                }
                if (hasAcknowledgedResult) {
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
                        if (closure_2_1.hasExpired()) {
                          closure_2_3(true);
                        }
                      }
                      let hasAcknowledgedResult;
                      if (closure_2_1 != null) {
                        hasAcknowledgedResult = closure_2_1.hasAcknowledged();
                      }
                      if (hasAcknowledgedResult) {
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
  }, items2);
  let tmp8 = null;
  if (!first) {
    if (stateFromStores1) {
      if (!arg1) {
        tmp8 = null;
      }
    }
    tmp8 = stateFromStores;
  }
  return tmp8;
});