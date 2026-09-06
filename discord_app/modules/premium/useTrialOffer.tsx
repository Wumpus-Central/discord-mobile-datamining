// === Module 7449: useTrialOffer ===

// Module 7449 (useTrialOffer)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;

const require = fn;
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
export const useTrialOffer = function useTrialOffer(React3) {
  _require = React3;
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
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => React3(stateFromStores[5]).isPremium(currentUser.getCurrentUser()));
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = UserOfferStore.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj3.useEffect(() => {
    if (null != stateFromStores) {
      if (stateFromStores.hasAcknowledged) {
        const timeout = new React3(stateFromStores[6]).Timeout();
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
};