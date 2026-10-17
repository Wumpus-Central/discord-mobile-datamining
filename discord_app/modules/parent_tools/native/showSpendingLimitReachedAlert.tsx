// === Module 10361: showSpendingLimitReachedAlert ===

// Module 10361 (showSpendingLimitReachedAlert)
import BillingError from "BillingError" /* 4886 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5400 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5891 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7290 */;
import LayerActionCreators from "LayerActionCreators" /* 7573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    let tmp4 = billingError.code === BillingError.ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === BillingError.ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  activeLinkUserIds = activeLinkUserIds(8005).getActiveLinkUserIds();
  let obj = activeLinkUserIds(8005);
  const obj3 = { title: null, body: null, isDismissable: true };
  const intl = activeLinkUserIds(1128).intl;
  obj3.title = intl.string(activeLinkUserIds(1128).t.QJKKrT);
  const intl2 = activeLinkUserIds(1128).intl;
  obj3.body = intl2.string(activeLinkUserIds(1128).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    const obj4 = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1128).intl;
    obj4.confirmText = intl3.string(tmp(1128).t.GF9RCX);
    obj4.onConfirm = function onConfirm() {
      LayerActionCreators.popLayer();
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
    };
    const intl4 = tmp(1128).intl;
    obj4.cancelText = intl4.string(tmp(1128).t.L5eIZ2);
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  actions_AlertActionCreatorsDefault.show(obj3);
};