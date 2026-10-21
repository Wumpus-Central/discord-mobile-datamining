// === Module 15623: SKUTypes ===

// Module 15623 (SKUTypes)
import size from "module_2" /* 2 */;

const obj = { SKU_CREATE_CHOICES: new Set([2, 3, 5]), GIFTABLE: null, BUNDLES: null, SUBSCRIPTIONS: null };
const set = new Set([2, 3, 5]);
obj.GIFTABLE = new Set([1, 2, 3, 4, 5]);
const set1 = new Set([1, 2, 3, 4, 5]);
obj.BUNDLES = new Set([4, 6]);
const set2 = new Set([4, 6]);
obj.SUBSCRIPTIONS = new Set([5, 6]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/SKUTypes.tsx");

export const SKUTypes = { DURABLE_PRIMARY: 1, [1]: "DURABLE_PRIMARY", DURABLE: 2, [2]: "DURABLE", CONSUMABLE: 3, [3]: "CONSUMABLE", BUNDLE: 4, [4]: "BUNDLE", SUBSCRIPTION: 5, [5]: "SUBSCRIPTION", SUBSCRIPTION_GROUP: 6, [6]: "SUBSCRIPTION_GROUP" };
export const SKUTypesSets = obj;