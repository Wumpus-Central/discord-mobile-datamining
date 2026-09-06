// === Module 14676: KeyImage ===

// Module 14676 (KeyImage)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 576 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5692 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { container: null };
obj = { marginBottom: ThemesDefault.space.PX_8 };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return <View style={callback().container}>{jsx(AccountAgeTier10LargeBadge.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
};