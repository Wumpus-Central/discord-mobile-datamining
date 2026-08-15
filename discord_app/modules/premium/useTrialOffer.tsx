// discord_app/modules/premium/useTrialOffer.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import emitChanges from "emitChanges";

const require = arg1;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/useTrialOffer.tsx");

export const hasUserTrialOfferExpired = function hasUserTrialOfferExpired(hasExpired) {
  let flag;
  if (hasExpired != null) {
    flag = hasExpired.hasExpired();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useTrialOffer = function useTrialOffer(closure_9) {
  const _require = closure_9;
  const items = [emitChanges];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_5.getUserTrialOffer(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.hasExpired();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp3 = first(React.useState(flag), 2);
  first = tmp3[0];
  React = tmp3[1];
  const obj = _require(stateFromStores[4]);
  const obj2 = emitChanges;
  const obj4 = React;
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => callback(stateFromStores[5]).isPremium(currentUser.getCurrentUser()));
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = obj2.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj4.useEffect(() => {
    if (null != stateFromStores) {
      if (null != tmp.expiresAt) {
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
            if (!outer1_2) {
              if (outer1_1.hasExpired()) {
                outer1_3(true);
              }
            }
            let tmp4 = outer1_1;
            if (null != outer1_1) {
              let num = 0;
              if (null != tmp4.expiresAt) {
                let expiresAt = tmp4.expiresAt;
                let _Date = Date;
                let time = expiresAt.getTime();
                num = time - Date.now();
              }
              if (closure_0 != null) {
                obj.start(num, () => {
                  if (!outer1_2) {
                    if (outer1_1.hasExpired()) {
                      outer1_3(true);
                    }
                  }
                  let tmp4 = outer1_1;
                  if (null != outer1_1) {
                    let num = 0;
                    if (null != tmp4.expiresAt) {
                      let expiresAt = tmp4.expiresAt;
                      let _Date = Date;
                      let time = expiresAt.getTime();
                      num = time - Date.now();
                    }
                    if (closure_0 != null) {
                      obj.start(num, () => {
                        if (!outer1_2) {
                          if (outer1_1.hasExpired()) {
                            outer1_3(true);
                          }
                        }
                        let tmp4 = outer1_1;
                        if (null != outer1_1) {
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
  let tmp8 = null;
  if (!first) {
    tmp8 = null;
    if (result) {
      tmp8 = stateFromStores;
    }
  }
  return tmp8;
};