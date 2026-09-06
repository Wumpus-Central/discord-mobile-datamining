// discord_app/modules/guild_instant_invites/native/InstantInviteIcons.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { registerAsset } from "../../../../_runtime/09860_registerAsset.js";
import { registerAsset } from "../../../../_runtime/10938_registerAsset.js";
import { registerAsset } from "../../../../_runtime/10939_registerAsset.js";
import { registerAsset } from "../../../../_runtime/10940_registerAsset.js";

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "share", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "copy", { get: () => registerAsset, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
