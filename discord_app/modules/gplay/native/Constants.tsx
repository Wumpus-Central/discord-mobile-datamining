// === Module 5320: GPlayConnectionState ===

// Module 5320 (GPlayConnectionState)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/gplay/native/Constants.tsx");

export const GPlayConnectionState = { DISCONNECTED: 0, [0]: "DISCONNECTED", CONNECTING: 1, [1]: "CONNECTING", CONNECTED: 2, [2]: "CONNECTED", ERROR: 3, [3]: "ERROR" };
export const GPlayDowngradeCommand = { EXECUTE: 0, [0]: "EXECUTE", CLEAR: 1, [1]: "CLEAR" };
export const GPlayBillingResult = { BILLING_UNAVAILABLE: 3, [3]: "BILLING_UNAVAILABLE", BILLING_CLIENT_NOT_READY: 999, [999]: "BILLING_CLIENT_NOT_READY", DEVELOPER_ERROR: 5, [5]: "DEVELOPER_ERROR", ERROR: 6, [6]: "ERROR", FEATURE_NOT_SUPPORTED: -2, [-2]: "FEATURE_NOT_SUPPORTED", ITEM_ALREADY_OWNED: 7, [7]: "ITEM_ALREADY_OWNED", ITEM_NOT_OWNED: 8, [8]: "ITEM_NOT_OWNED", ITEM_UNAVAILABLE: 4, [4]: "ITEM_UNAVAILABLE", NETWORK_ERROR: 12, [12]: "NETWORK_ERROR", OK: 0, [0]: "OK", SERVICE_DISCONNECTED: -1, [-1]: "SERVICE_DISCONNECTED", SERVICE_TIMEOUT: -3, [-3]: "SERVICE_TIMEOUT", SERVICE_UNAVAILABLE: 2, [2]: "SERVICE_UNAVAILABLE", USER_CANCELED: 1, [1]: "USER_CANCELED" };
export const GPlayPurchaseState = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PURCHASED: 1, [1]: "PURCHASED", PENDING: 2, [2]: "PENDING" };
export const GPlaySkusType = { IN_APP: "in_app", SUBSCRIPTION: "subscription" };