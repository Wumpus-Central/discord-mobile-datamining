import _slicedToArray from "_slicedToArray";
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import emitChanges from "emitChanges";

const require = arg1;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/premium/useTrialOffer.tsx");

export const hasUserTrialOfferExpired = function hasUserTrialOfferExpired(expires_at) {
  let tmp = null != expires_at && null != expires_at.expires_at;
  if (tmp) {
    const _Date = Date;
    const _Date2 = Date;
    const timestamp = Date.now();
    tmp = timestamp > Date.parse(expires_at.expires_at);
  }
  return tmp;
};
export const useTrialOffer = function useTrialOffer(closure_9) {
  const _require = closure_9;
  const items = [emitChanges];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_5.getUserTrialOffer(closure_0));
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = null != stateFromStores.expires_at;
  }
  if (tmp4) {
    let _Date = Date;
    let _Date2 = Date;
    const timestamp = Date.now();
    tmp4 = timestamp > Date.parse(stateFromStores.expires_at);
  }
  const tmp7 = first(React.useState(tmp4), 2);
  first = tmp7[0];
  React = tmp7[1];
  const obj = _require(stateFromStores[4]);
  const obj2 = emitChanges;
  const obj3 = React;
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => callback(stateFromStores[5]).isPremium(currentUser.getCurrentUser()));
  let result = !stateFromStores1;
  if (stateFromStores1) {
    result = obj2.canFractionalPremiumUserUseOffer();
  }
  const items2 = [first, stateFromStores];
  const effect = obj3.useEffect(() => {
    if (null != stateFromStores) {
      if (null != tmp.expires_at) {
        const timeout = new callback(stateFromStores[6]).Timeout();
        if (null != tmp) {
          let num = 0;
          if (null != tmp.expires_at) {
            const _Date = Date;
            const _Date2 = Date;
            const parsed = Date.parse(tmp.expires_at);
            num = parsed - Date.now();
          }
          timeout.start(num, () => {
            if (!outer1_2) {
              let tmp = outer1_1;
              let tmp3 = null != outer1_1 && null != tmp.expires_at;
              if (tmp3) {
                let _Date = Date;
                let _Date2 = Date;
                let timestamp = Date.now();
                tmp3 = timestamp > Date.parse(tmp.expires_at);
              }
              if (tmp3) {
                outer1_3(true);
              }
            }
            let tmp8 = outer1_1;
            if (null != outer1_1) {
              let num = 0;
              if (null != tmp8.expires_at) {
                let _Date3 = Date;
                let _Date4 = Date;
                let parsed = Date.parse(tmp8.expires_at);
                num = parsed - Date.now();
              }
              if (closure_0 != null) {
                obj.start(num, () => {
                  if (!outer1_2) {
                    let tmp = outer1_1;
                    let tmp3 = null != outer1_1 && null != tmp.expires_at;
                    if (tmp3) {
                      let _Date = Date;
                      let _Date2 = Date;
                      let timestamp = Date.now();
                      tmp3 = timestamp > Date.parse(tmp.expires_at);
                    }
                    if (tmp3) {
                      outer1_3(true);
                    }
                  }
                  let tmp8 = outer1_1;
                  if (null != outer1_1) {
                    let num = 0;
                    if (null != tmp8.expires_at) {
                      let _Date3 = Date;
                      let _Date4 = Date;
                      let parsed = Date.parse(tmp8.expires_at);
                      num = parsed - Date.now();
                    }
                    if (closure_0 != null) {
                      obj.start(num, () => {
                        if (!outer1_2) {
                          let tmp = outer1_1;
                          let tmp3 = null != outer1_1 && null != tmp.expires_at;
                          if (tmp3) {
                            let _Date = Date;
                            let _Date2 = Date;
                            let timestamp = Date.now();
                            tmp3 = timestamp > Date.parse(tmp.expires_at);
                          }
                          if (tmp3) {
                            outer1_3(true);
                          }
                        }
                        let tmp8 = outer1_1;
                        if (null != outer1_1) {
                          let num = 0;
                          if (null != tmp8.expires_at) {
                            let _Date3 = Date;
                            let _Date4 = Date;
                            let parsed = Date.parse(tmp8.expires_at);
                            num = parsed - Date.now();
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
  let tmp12 = null;
  if (!first) {
    tmp12 = null;
    if (result) {
      tmp12 = stateFromStores;
    }
  }
  return tmp12;
};