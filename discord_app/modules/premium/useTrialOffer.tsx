// discord_app/modules/premium/useTrialOffer.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import emitChanges from "../../stores/billing/UserOfferStore.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/useTrialOffer.tsx");

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
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => closure_1_5.getUserTrialOffer(closure_0));
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
  const obj4 = React;
  const items1 = [closure_4];
  const stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => callback(stateFromStores[5]).isPremium(currentUser.getCurrentUser()));
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = closure_5.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj4.useEffect(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores.expiresAt) {
        const timeout = new callback(stateFromStores[6]).Timeout();
        if (null != stateFromStores) {
          let num = 0;
          if (null != stateFromStores.expiresAt) {
            const expiresAt = stateFromStores.expiresAt;
            const _Date = Date;
            const time = expiresAt.getTime();
            num = time - Date.now();
          }
          timeout.start(num, () => {
            if (!closure_1_2) {
              if (closure_1_1.hasExpired()) {
                closure_1_3(true);
              }
            }
            if (null != closure_1_1) {
              let num = 0;
              if (null != closure_1_1.expiresAt) {
                let expiresAt = closure_1_1.expiresAt;
                let _Date = Date;
                let time = expiresAt.getTime();
                num = time - Date.now();
              }
              if (closure_0 != null) {
                closure_0.start(num, () => {
                  if (!closure_1_2) {
                    if (closure_1_1.hasExpired()) {
                      closure_1_3(true);
                    }
                  }
                  if (null != closure_1_1) {
                    let num = 0;
                    if (null != closure_1_1.expiresAt) {
                      let expiresAt = closure_1_1.expiresAt;
                      let _Date = Date;
                      let time = expiresAt.getTime();
                      num = time - Date.now();
                    }
                    if (closure_0 != null) {
                      closure_0.start(num, () => {
                        if (!closure_1_2) {
                          if (closure_1_1.hasExpired()) {
                            closure_1_3(true);
                          }
                        }
                        if (null != closure_1_1) {
                          let num = 0;
                          if (null != closure_1_1.expiresAt) {
                            let expiresAt = closure_1_1.expiresAt;
                            let _Date = Date;
                            let time = expiresAt.getTime();
                            num = time - Date.now();
                          }
                          if (closure_0 != null) {
                            closure_0.start(num, () => { ... });
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
  let tmp8 = null;
  if (!first) {
    tmp8 = null;
    if (result) {
      tmp8 = stateFromStores;
    }
  }
  return tmp8;
};