// === Module 7873: InviteTargetTypes ===

// Module 7873 (InviteTargetTypes)
import size from "module_2" /* 2 */;

const obj = { HIDDEN: new Set([3, 4, 5]), USER_CREATABLE: null, STORE_PAGE: null };
const set = new Set([3, 4, 5]);
obj.USER_CREATABLE = new Set([1, 2]);
const set1 = new Set([1, 2]);
obj.STORE_PAGE = new Set([3, 4]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/InviteTargetTypes.tsx");

export const InviteTargetTypes = { STREAM: 1, [1]: "STREAM", EMBEDDED_APPLICATION: 2, [2]: "EMBEDDED_APPLICATION", ROLE_SUBSCRIPTIONS_PURCHASE: 3, [3]: "ROLE_SUBSCRIPTIONS_PURCHASE", SERVER_JOIN_HIDDEN: 4, [4]: "SERVER_JOIN_HIDDEN", LINKED_LOBBY_CHANNEL: 5, [5]: "LINKED_LOBBY_CHANNEL" };
export const InviteTargetTypesSets = obj;