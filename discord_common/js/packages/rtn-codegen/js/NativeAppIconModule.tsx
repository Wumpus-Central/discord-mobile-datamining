// === Module 12939: enforcing ===

// Module 12939 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeAppIconModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeAppIconModule.tsx");

export default enforcing;