// === Module 13329: __INTERNAL_VIEW_CONFIG ===

// Module 13329 (__INTERNAL_VIEW_CONFIG)
import obj132 from "obj132" /* 2 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = {};
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onQRCodeFound: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDQRScanner", () => obj);
const result = obj132.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;