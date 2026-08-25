// discord_app/modules/guild_instant_invites/native/InstantInviteIcons.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { registerAsset } from "../../../../_runtime/09242_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09841_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09842_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09843_registerAsset.js";

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "share", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "copy", { get: () => registerAsset, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;