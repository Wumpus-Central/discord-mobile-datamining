// === Module 14553: KeyImage ===

// Module 14553 (KeyImage)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import registerAssetDefault from "registerAsset" /* 14554 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const Image = get_ActivityIndicator.Image;
const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles({ icon: { width: 128, height: 128, marginBottom: 8 } });
const result = set.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  const obj = { source: registerAssetDefault, style: callback().icon };
  return <Image source={registerAssetDefault} style={callback().icon} />;
};