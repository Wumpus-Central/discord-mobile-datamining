// discord_app/modules/premium/hooks/useDiscountOffer.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import emitChanges from "../../../stores/billing/UserOfferStore.tsx";
import GuildFeatures from "../PremiumConstants.tsx";

const require = fn;
({ PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: error } = GuildFeatures);
const result = require("obj132").fileFinishedImporting("modules/premium/hooks/useDiscountOffer.tsx");

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
  const items1 = [closure_4];
  const items2 = [first, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[5]).useStateFromStores(items1, () => callback(stateFromStores[6]).isPremium(currentUser.getCurrentUser()));
  const effect = obj3.useEffect(() => {
    let hasAcknowledgedResult;
    if (stateFromStores != null) {
      hasAcknowledgedResult = stateFromStores.hasAcknowledged();
    }
    if (hasAcknowledgedResult) {
      const timeout = new callback(stateFromStores[7]).Timeout();
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
          if (!closure_1_2) {
            if (closure_1_1.hasExpired()) {
              closure_1_3(true);
            }
          }
          let hasAcknowledgedResult;
          if (closure_1_1 != null) {
            hasAcknowledgedResult = closure_1_1.hasAcknowledged();
          }
          if (hasAcknowledgedResult) {
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
                let hasAcknowledgedResult;
                if (closure_1_1 != null) {
                  hasAcknowledgedResult = closure_1_1.hasAcknowledged();
                }
                if (hasAcknowledgedResult) {
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
                      let hasAcknowledgedResult;
                      if (closure_1_1 != null) {
                        hasAcknowledgedResult = closure_1_1.hasAcknowledged();
                      }
                      if (hasAcknowledgedResult) {
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