// === Module 16401: VoicePanelLockedIcon ===

// Module 16401 (VoicePanelLockedIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import obj132Default from "obj132" /* 7190 */;
import registerAssetDefault from "registerAsset" /* 16402 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {};
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = callback();
  const obj = { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE };
  obj[1] = jsx(Button.Icon, { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE });
  return jsx(obj132Default, { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE });
};