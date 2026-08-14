// discord_app/modules/guild_instant_invites/native/InstantInviteIcons.tsx
import { Platform } from "get ActivityIndicator";
import { registerAsset } from "../../../../_runtime/09158_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09751_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09752_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09753_registerAsset.js";

const obj = {};
Object.defineProperty(obj, "more", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "share", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "copy", { get: () => registerAsset, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;