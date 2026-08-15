// discord_app/modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/16402_registerAsset.js";
import { Button } from "../../../../design/void/native.tsx";
import { set } from "../../../core/native/NativeView.tsx";

const require = arg1;
createCacheKey = { container: null, icon: null };
createCacheKey = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {};
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, source: null, size: null };
  obj[1] = registerAsset;
  obj[2] = Button.IconSizes.LARGE;
  obj[1] = jsx(Button.Icon, { style: tmp.icon, source: null, size: null });
  return jsx(set, { style: tmp.icon, source: null, size: null });
};