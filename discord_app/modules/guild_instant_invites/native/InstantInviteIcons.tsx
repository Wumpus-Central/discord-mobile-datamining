// === Module 10636: get more ===

// Module 10636 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10637) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10638) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10639) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9912) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;