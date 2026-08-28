// discord_app/modules/parent_tools/native/showSpendingLimitReachedAlert.tsx
import set from "../../../../_runtime/00002_set.js";
import V6OrEarlierAPIError from "../../../errors/index.tsx";
import _modDef4823 from "../../../actions/native/AlertActionCreators.tsx";

const result = set.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    let tmp4 = billingError.code === tmp(4130).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === tmp(4130).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  let obj = activeLinkUserIds(8713);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  obj1 = _modDef4823;
  obj = { title: null, body: null, isDismissable: true };
  const intl = activeLinkUserIds(1236).intl;
  obj[0] = intl.string(activeLinkUserIds(1236).t.QJKKrT);
  const intl2 = activeLinkUserIds(1236).intl;
  obj[1] = intl2.string(activeLinkUserIds(1236).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    obj = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1236).intl;
    obj[0] = intl3.string(tmp(1236).t.GF9RCX);
    obj[1] = function onConfirm() {
      let obj = activeLinkUserIds(closure_1_2[5]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      closure_1_1(closure_1_2[6]).openPrivateChannel(obj);
    };
    const intl4 = tmp(1236).intl;
    obj[2] = intl4.string(tmp(1236).t.L5eIZ2);
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj1.show(obj);
};