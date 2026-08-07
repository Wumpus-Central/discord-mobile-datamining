// discord_app/modules/guild_instant_invites/native/InstantInviteIcons.tsx
import { Platform } from "get ActivityIndicator";
import { registerAsset } from "../../../../_runtime/09034_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09626_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09627_registerAsset.js";
import { registerAsset } from "../../../../_runtime/09628_registerAsset.js";

const obj = {};
Object.defineProperty(obj, "more", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "share", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => registerAsset, set: undefined });
Object.defineProperty(obj, "copy", { get: () => registerAsset, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;