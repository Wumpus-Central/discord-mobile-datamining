import { Platform } from "get ActivityIndicator";

const obj = {};
Object.defineProperty(obj, "more", { get: () => require(9610) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(9611) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(9612) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9016) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = require("registerAsset").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;