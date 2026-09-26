// === Module 13414: QRScannerNativeComponent ===

// Module 13414 (QRScannerNativeComponent)
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDQRScanner", directEventTypes: { topQRCodeFound: { registrationName: "onQRCodeFound" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onQRCodeFound: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = {};
const value = module_65.get("DCDQRScanner", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };