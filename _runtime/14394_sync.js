// === Module 14394: sync ===

// Module 14394 (sync)
import _mod17 from "module_17" /* 17 */;

const RNIapIosSk2 = _mod17.NativeModules.RNIapIosSk2;

export () => RNIapIosSk2.sync()
export (arg0) => RNIapIosSk2.isEligibleForIntroOffer(arg0)
export (arg0) => RNIapIosSk2.subscriptionStatus(arg0)
export (arg0) => RNIapIosSk2.currentEntitlement(arg0)
export (arg0) => RNIapIosSk2.latestTransaction(arg0)
export (arg0) => RNIapIosSk2.beginRefundRequest(arg0)
export () => RNIapIosSk2.showManageSubscriptions()
export (arg0) => RNIapIosSk2.finishTransaction(arg0)