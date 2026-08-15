// discord_app/modules/guild_instant_invites/native/InstantInviteIcons.tsx
import { Platform } from "get ActivityIndicator";
import { registerAsset } from "../../../../_runtime/09954_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09955_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09956_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09957_registerAsset.js";

const obj = {};
Object.defineProperty(obj, "more", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "share", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "copy", { get: () => registerAsset, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;