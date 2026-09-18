// === Module 14891: KeyImage ===

// Module 14891 (KeyImage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 5862 */;
import createStyles from "createStyles" /* 4722 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return <View style={closure_4().container}>{jsx(native.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
};