// === Module 7626: useDiscountOffer ===

// Module 7626 (useDiscountOffer)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "emitChanges" /* 7421 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const require = arg1;
({ PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: error } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default function useDiscountOffer(arg0, arg1) {
  const _require = arg0;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => closure_1_5.getUserDiscountOffer(closure_0));
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
  const obj = _require(stateFromStores[5]);
  const obj3 = React;
  const tmp = _require;
  const tmp2 = stateFromStores;
  const items1 = [closure_4];
  const items2 = [first, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[5]).useStateFromStores(items1, () => callback(stateFromStores[6]).isPremium(currentUser.getCurrentUser()));
  const effect = obj3.useEffect(() => {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = obj.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new callback(stateFromStores[7]).Timeout();
      let hasAcknowledgedResult1;
      if (obj != null) {
        hasAcknowledgedResult1 = obj.hasAcknowledged();
      }
      if (hasAcknowledgedResult1) {
        let num = 0;
        if (null != obj.expiresAt) {
          const expiresAt = obj.expiresAt;
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
          let hasAcknowledgedResult;
          if (closure_1_1 != null) {
            hasAcknowledgedResult = obj.hasAcknowledged();
          }
          if (hasAcknowledgedResult) {
            let num = 0;
            if (null != obj.expiresAt) {
              let expiresAt = obj.expiresAt;
              let _Date = Date;
              let time = expiresAt.getTime();
              num = time - Date.now();
            }
            if (closure_0 != null) {
              obj2.start(num, () => {
                if (!closure_1_2) {
                  if (closure_1_1.hasExpired()) {
                    closure_1_3(true);
                  }
                }
                let hasAcknowledgedResult;
                if (closure_1_1 != null) {
                  hasAcknowledgedResult = obj.hasAcknowledged();
                }
                if (hasAcknowledgedResult) {
                  let num = 0;
                  if (null != obj.expiresAt) {
                    let expiresAt = obj.expiresAt;
                    let _Date = Date;
                    let time = expiresAt.getTime();
                    num = time - Date.now();
                  }
                  if (closure_0 != null) {
                    obj2.start(num, () => {
                      if (!closure_1_2) {
                        if (closure_1_1.hasExpired()) {
                          closure_1_3(true);
                        }
                      }
                      let hasAcknowledgedResult;
                      if (closure_1_1 != null) {
                        hasAcknowledgedResult = obj.hasAcknowledged();
                      }
                      if (hasAcknowledgedResult) {
                        let num = 0;
                        if (null != obj.expiresAt) {
                          let expiresAt = obj.expiresAt;
                          let _Date = Date;
                          let time = expiresAt.getTime();
                          num = time - Date.now();
                        }
                        if (closure_0 != null) {
                          obj2.start(num, () => { ... });
                        }
                        obj2 = closure_0;
                      }
                    });
                  }
                  obj2 = closure_0;
                }
              });
            }
            obj2 = closure_0;
          }
        });
      }
      return () => timeout.stop();
    }
  }, items2);
  let tmp7 = null;
  if (!first) {
    if (stateFromStores1) {
      if (!arg1) {
        if (arg0 !== closure_6) {
          tmp7 = null;
        }
      }
    }
    tmp7 = stateFromStores;
  }
  return tmp7;
};