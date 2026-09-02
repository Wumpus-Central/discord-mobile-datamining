// === Module 663: enforcing ===

// Module 663 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeDeviceLocaleModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx");

export default enforcing;