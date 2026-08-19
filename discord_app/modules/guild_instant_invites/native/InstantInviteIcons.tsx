// === Module 9953: get more ===

// Module 9953 (get more)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9954) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9955) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9956) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9957) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = obj132.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;