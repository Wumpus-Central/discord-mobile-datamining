// === Module 14017: enforcing ===

// Module 14017 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeTouchEventAnalyticsModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeTouchEventAnalyticsModule.tsx");

export default enforcing;