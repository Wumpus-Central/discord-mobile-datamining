// === Module 7449: hasUserTrialOfferExpired ===

// Module 7449 (hasUserTrialOfferExpired)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import closure_5 from "emitChanges" /* 7450 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/useTrialOffer.tsx");

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
export const useTrialOffer = function useTrialOffer(closure_9) {
  const _require = closure_9;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => closure_1_5.getUserTrialOffer(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4 = first(React.useState(flag), 2);
  first = tmp4[0];
  React = tmp4[1];
  const obj = _require(stateFromStores[4]);
  const obj2 = closure_5;
  const obj3 = React;
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [closure_4];
  const stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => callback(stateFromStores[5]).isPremium(currentUser.getCurrentUser()));
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = obj2.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj3.useEffect(() => {
    if (null != stateFromStores) {
      if (tmp.hasAcknowledged) {
        const timeout = new callback(stateFromStores[6]).Timeout();
        if (null != tmp) {
          let num = 0;
          if (null != tmp.expiresAt) {
            const expiresAt = tmp.expiresAt;
            const _Date = Date;
            const time = expiresAt.getTime();
            num = time - Date.now();
          }
          timeout.start(num, () => {
            if (!closure_1_2) {
              if (closure_1_1.hasExpired) {
                closure_1_3(true);
              }
            }
            if (null != closure_1_1) {
              let num = 0;
              if (null != tmp4.expiresAt) {
                let expiresAt = tmp4.expiresAt;
                let _Date = Date;
                let time = expiresAt.getTime();
                num = time - Date.now();
              }
              if (closure_0 != null) {
                obj.start(num, () => {
                  if (!closure_1_2) {
                    if (closure_1_1.hasExpired) {
                      closure_1_3(true);
                    }
                  }
                  if (null != closure_1_1) {
                    let num = 0;
                    if (null != tmp4.expiresAt) {
                      let expiresAt = tmp4.expiresAt;
                      let _Date = Date;
                      let time = expiresAt.getTime();
                      num = time - Date.now();
                    }
                    if (closure_0 != null) {
                      obj.start(num, () => {
                        if (!closure_1_2) {
                          if (closure_1_1.hasExpired) {
                            closure_1_3(true);
                          }
                        }
                        if (null != closure_1_1) {
                          let num = 0;
                          if (null != tmp4.expiresAt) {
                            let expiresAt = tmp4.expiresAt;
                            let _Date = Date;
                            let time = expiresAt.getTime();
                            num = time - Date.now();
                          }
                          if (closure_0 != null) {
                            obj.start(num, () => { ... });
                          }
                          obj = closure_0;
                        }
                      });
                    }
                    obj = closure_0;
                  }
                });
              }
              obj = closure_0;
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