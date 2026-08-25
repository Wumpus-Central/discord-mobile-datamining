// === Module 9840: get more ===

// Module 9840 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9841) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9842) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9843) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9242) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;