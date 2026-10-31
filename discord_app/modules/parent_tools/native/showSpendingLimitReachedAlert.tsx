// === Module 10569: showSpendingLimitReachedAlert ===

// Module 10569 (showSpendingLimitReachedAlert)
import _modDef2538 from "module_2538" /* 2538 */;
import BillingError from "BillingError" /* 4834 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6446 */;
import LayerActionCreators from "LayerActionCreators" /* 7760 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10570 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    let tmp4 = billingError.code === BillingError.ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === BillingError.ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
export function showSpendingLimitReachedAlert() {
  activeLinkUserIds = activeLinkUserIds(8369).getActiveLinkUserIds();
  const obj = activeLinkUserIds(8369);
  const obj3 = { title: null, body: null, isDismissable: true };
  let intl = activeLinkUserIds(1113).intl;
  obj3.title = intl.string(activeLinkUserIds(1113).t.QJKKrT);
  const intl2 = activeLinkUserIds(1113).intl;
  obj3.body = intl2.string(activeLinkUserIds(1113).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    const obj4 = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1113).intl;
    obj4.confirmText = intl3.string(tmp(1113).t.GF9RCX);
    obj4.onConfirm = function onConfirm() {
      return openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
        const intl = activeLinkUserIds(1113).intl;
        return activeLinkUserIds(5711).presentFailedToast(intl.formatToPlainString(_modDef2538.D1BwNC, { count: length.length }));
      });
    };
    const intl4 = tmp(1113).intl;
    obj4.cancelText = intl4.string(tmp(1113).t.L5eIZ2);
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  actions_AlertActionCreatorsDefault.show(obj3);
}