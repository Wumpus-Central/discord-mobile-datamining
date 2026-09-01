// discord_app/modules/react_asset/native/native_required_assets.tsx
import set from "../../../../_runtime/00002_set.js";
import NATIVE_REQUIRED_ASSETS_ICONS from "native_required_assets_icons.tsx";
import NATIVE_REQUIRED_ASSETS_MISC from "native_required_assets_misc.tsx";

const merged = Object.assign(NATIVE_REQUIRED_ASSETS_ICONS.NATIVE_REQUIRED_ASSETS_ICONS);
const merged1 = Object.assign(NATIVE_REQUIRED_ASSETS_MISC.NATIVE_REQUIRED_ASSETS_MISC);
const result = set.fileFinishedImporting("modules/react_asset/native/native_required_assets.tsx");

export const NATIVE_REQUIRED_ASSETS = {};
