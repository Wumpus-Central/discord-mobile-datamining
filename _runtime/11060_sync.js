// _runtime/11060_sync.js
import _mod17 from "metro/00017__.js";

const RNIapIosSk2 = _mod17.NativeModules.RNIapIosSk2;

export const sync = () => RNIapIosSk2.sync();
export const isEligibleForIntroOffer = (arg0) => RNIapIosSk2.isEligibleForIntroOffer(arg0);
export const subscriptionStatus = (arg0) => RNIapIosSk2.subscriptionStatus(arg0);
export const currentEntitlement = (arg0) => RNIapIosSk2.currentEntitlement(arg0);
export const latestTransaction = (arg0) => RNIapIosSk2.latestTransaction(arg0);
export const beginRefundRequest = (arg0) => RNIapIosSk2.beginRefundRequest(arg0);
export const showManageSubscriptions = () => RNIapIosSk2.showManageSubscriptions();
export const finishTransaction = (arg0) => RNIapIosSk2.finishTransaction(arg0);
