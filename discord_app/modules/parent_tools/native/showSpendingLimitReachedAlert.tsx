// discord_app/modules/parent_tools/native/showSpendingLimitReachedAlert.tsx
import V6OrEarlierAPIError from "../../../errors/index.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import LayerActionCreators from "../../../actions/LayerActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    let tmp4 = billingError.code === tmp(4240).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === tmp(4240).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  let obj = activeLinkUserIds(8645);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  let obj1 = actions_AlertActionCreatorsDefault;
  obj = { title: null, body: null, isDismissable: true };
  const intl = activeLinkUserIds(1114).intl;
  obj.title = intl.string(activeLinkUserIds(1114).t.QJKKrT);
  const intl2 = activeLinkUserIds(1114).intl;
  obj.body = intl2.string(activeLinkUserIds(1114).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    obj = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1114).intl;
    obj.confirmText = intl3.string(tmp(1114).t.GF9RCX);
    obj.onConfirm = function onConfirm() {
      let obj = LayerActionCreators;
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      ChannelActionCreatorsDefault.openPrivateChannel(obj);
    };
    const intl4 = tmp(1114).intl;
    obj.cancelText = intl4.string(tmp(1114).t.L5eIZ2);
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj1.show(obj);
};
