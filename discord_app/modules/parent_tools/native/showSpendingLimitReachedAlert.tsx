// discord_app/modules/parent_tools/native/showSpendingLimitReachedAlert.tsx
import BillingError from "../../../errors/BillingError.tsx";
import V6OrEarlierAPIError from "../../../errors/index.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import LayerActionCreators from "../../../actions/LayerActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  activeLinkUserIds = activeLinkUserIds(8105).getActiveLinkUserIds();
  let obj = activeLinkUserIds(8105);
  const obj3 = { title: null, body: null, isDismissable: true };
  const intl = activeLinkUserIds(1115).intl;
  obj3.title = intl.string(activeLinkUserIds(1115).t.QJKKrT);
  const intl2 = activeLinkUserIds(1115).intl;
  obj3.body = intl2.string(activeLinkUserIds(1115).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    const obj4 = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1115).intl;
    obj4.confirmText = intl3.string(tmp(1115).t.GF9RCX);
    obj4.onConfirm = function onConfirm() {
      LayerActionCreators.popLayer();
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
    };
    const intl4 = tmp(1115).intl;
    obj4.cancelText = intl4.string(tmp(1115).t.L5eIZ2);
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  actions_AlertActionCreatorsDefault.show(obj3);
};
