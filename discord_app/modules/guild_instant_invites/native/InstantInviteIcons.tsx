// === Module 10594: get more ===

// Module 10594 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10595) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10596) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10597) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9871) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;