// === Module 10209: get more ===

// Module 10209 (get more)
import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10210) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10211) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10212) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(10213) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;