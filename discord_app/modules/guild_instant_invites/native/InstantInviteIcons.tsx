// discord_app/modules/guild_instant_invites/native/InstantInviteIcons.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { registerAsset } from "../../../../_runtime/09954_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09955_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09956_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09957_registerAsset.js";

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "share", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "copy", { get: () => registerAsset, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;