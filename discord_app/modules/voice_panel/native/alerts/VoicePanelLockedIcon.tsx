// === Module 17188: VoicePanelLockedIcon ===

// Module 17188 (VoicePanelLockedIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import setDefault from "set" /* 5589 */;
import registerAssetDefault from "registerAsset" /* 17189 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
createCacheKey = { container: null, icon: null };
createCacheKey = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {};
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE };
  obj[1] = jsx(Button.Icon, { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE });
  return jsx(setDefault, { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE });
};