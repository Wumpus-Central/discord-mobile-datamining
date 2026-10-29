// discord_app/modules/parent_tools/native/showSpendingLimitReachedAlert.tsx
import _modDef2536 from "../FamilyCenter.messages.js";
import BillingError from "../../../errors/BillingError.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import V6OrEarlierAPIError from "../../../errors/index.tsx";
import LayerActionCreators from "../../../actions/LayerActionCreators.tsx";
import openLinkedUsersChannelDefault from "../openLinkedUsersChannel.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  activeLinkUserIds = activeLinkUserIds(8180).getActiveLinkUserIds();
  const obj = activeLinkUserIds(8180);
  const obj3 = { title: null, body: null, isDismissable: true };
  let intl = activeLinkUserIds(1125).intl;
  obj3.title = intl.string(activeLinkUserIds(1125).t.QJKKrT);
  const intl2 = activeLinkUserIds(1125).intl;
  obj3.body = intl2.string(activeLinkUserIds(1125).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    const obj4 = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1125).intl;
    obj4.confirmText = intl3.string(tmp(1125).t.GF9RCX);
    obj4.onConfirm = function onConfirm() {
      return openLinkedUsersChannelDefault(activeLinkUserIds, LayerActionCreators.popLayer, () => {
        const intl = activeLinkUserIds(1125).intl;
        return activeLinkUserIds(5700).presentFailedToast(
          intl.formatToPlainString(_modDef2536.D1BwNC, { count: length.length }),
        );
      });
    };
    const intl4 = tmp(1125).intl;
    obj4.cancelText = intl4.string(tmp(1125).t.L5eIZ2);
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  actions_AlertActionCreatorsDefault.show(obj3);
}
