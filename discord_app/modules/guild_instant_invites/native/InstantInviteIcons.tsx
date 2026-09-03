// === Module 10899: get more ===

// Module 10899 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10900) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10901) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10902) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9977) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;