// discord_app/modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import registerAssetDefault from "../../../../../_runtime/16682_registerAsset.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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