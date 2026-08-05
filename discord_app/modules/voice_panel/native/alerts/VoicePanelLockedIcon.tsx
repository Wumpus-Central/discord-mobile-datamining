// discord_app/modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

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
  obj[1] = require("../../../../../_runtime/16128_registerAsset.js");
  obj[2] = require("../../../../design/void/native.tsx") /* Button */.IconSizes.LARGE;
  obj[1] = jsx(require("../../../../design/void/native.tsx") /* Button */.Icon, { style: tmp.icon, source: null, size: null });
  return jsx(require("../../../core/native/NativeView.tsx"), { style: tmp.icon, source: null, size: null });
};