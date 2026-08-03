// === Module 16831: NATIVE_REQUIRED_ASSETS ===

// Module 16831 (NATIVE_REQUIRED_ASSETS)
const merged = Object.assign(require("NATIVE_REQUIRED_ASSETS_ICONS").NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(require("NATIVE_REQUIRED_ASSETS_MISC").NATIVE_REQUIRED_ASSETS_MISC);
const result = require("set").fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};