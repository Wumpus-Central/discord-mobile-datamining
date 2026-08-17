// discord_common/js/shared/shared-constants/EntitlementTenantFulfillmentStatus.tsx
import set from "set" /* 2 */;

const obj = { ELIGIBLE_FOR_ATTEMPTS: null, ELIGIBLE_FOR_FULFILLMENT: null };
let set = new Set([2, 5, 9]);
obj[0] = set;
obj[1] = new Set([2, 9]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/EntitlementTenantFulfillmentStatus.tsx");

export const EntitlementTenantFulfillmentStatus = { UNKNOWN: 0, [0]: "UNKNOWN", FULFILLMENT_NOT_NEEDED: 1, [1]: "FULFILLMENT_NOT_NEEDED", FULFILLMENT_NEEDED: 2, [2]: "FULFILLMENT_NEEDED", FULFILLED: 3, [3]: "FULFILLED", FULFILLMENT_FAILED: 4, [4]: "FULFILLMENT_FAILED", UNFULFILLMENT_NEEDED: 5, [5]: "UNFULFILLMENT_NEEDED", UNFULFILLED: 6, [6]: "UNFULFILLED", UNFULFILLMENT_FAILED: 7, [7]: "UNFULFILLMENT_FAILED", UNFULFILLMENT_NEEDED_MANUAL: 8, [8]: "UNFULFILLMENT_NEEDED_MANUAL", INITIAL_FULFILLMENT_NEEDED: 9, [9]: "INITIAL_FULFILLMENT_NEEDED" };
export const EntitlementTenantFulfillmentStatusSets = obj;