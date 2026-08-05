// discord_app/modules/mfa/native/components/KeyImage.tsx
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/13890_registerAsset.js";

let closure_4 = createCacheKey.createStyles({ icon: { width: 128, height: 128, marginBottom: 8 } });
const result = require("createCacheKey").fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  const obj = { source: null, style: null };
  obj[0] = registerAsset;
  obj[1] = callback().icon;
  return <Image source={null} style={null} />;
};