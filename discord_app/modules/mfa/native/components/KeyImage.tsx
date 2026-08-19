// discord_app/modules/mfa/native/components/KeyImage.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import registerAssetDefault from "../../../../../_runtime/14097_registerAsset.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const Image = get_ActivityIndicator.Image;
const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles({ icon: { width: 128, height: 128, marginBottom: 8 } });
const result = obj132.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  const obj = { source: registerAssetDefault, style: callback().icon };
  return <Image source={registerAssetDefault} style={callback().icon} />;
};