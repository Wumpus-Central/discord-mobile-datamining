// === Module 14676: KeyImage ===

// Module 14676 (KeyImage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 5692 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { container: null };
obj = { marginBottom: nativeDefault.space.PX_8 };
obj.container = obj;
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return <View style={closure_4().container}>{jsx(native.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
};