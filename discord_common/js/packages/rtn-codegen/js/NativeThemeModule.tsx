// === Module 13908: enforcing ===

// Module 13908 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeThemeModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx");

export default enforcing;