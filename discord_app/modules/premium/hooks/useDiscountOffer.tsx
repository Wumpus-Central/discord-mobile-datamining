// discord_app/modules/premium/hooks/useDiscountOffer.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import UserOfferStore from "../../../stores/billing/UserOfferStore.tsx";

const require = fn;
const PremiumConstants = fn(1373);
({ PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_7 } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

export default function useDiscountOffer(arg0, arg1) {
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
  const items2 = [first, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => closure_0(stateFromStores[6]).isPremium(currentUser.getCurrentUser()));
  const effect = obj3.useEffect(() => {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = obj.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new closure_0(stateFromStores[7]).Timeout();
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
          if (!closure_2_2) {
            if (closure_2_1.hasExpired()) {
              closure_2_3(true);
            }
          }
          let hasAcknowledgedResult;
          if (closure_2_1 != null) {
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
            if (closure_1_0 != null) {
              obj2.start(num, () => {
                if (!closure_2_2) {
                  if (closure_2_1.hasExpired()) {
                    closure_2_3(true);
                  }
                }
                let hasAcknowledgedResult;
                if (closure_2_1 != null) {
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
                  if (closure_1_0 != null) {
                    obj2.start(num, () => {
                      if (!closure_2_2) {
                        if (closure_2_1.hasExpired()) {
                          closure_2_3(true);
                        }
                      }
                      let hasAcknowledgedResult;
                      if (closure_2_1 != null) {
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
                        if (closure_1_0 != null) {
                          obj2.start(num, () => { ... });
                        }
                        obj2 = closure_1_0;
                      }
                    });
                  }
                  obj2 = closure_1_0;
                }
              });
            }
            obj2 = closure_1_0;
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