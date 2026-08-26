// === Module 7277: enforcing ===

// Module 7277 (enforcing)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const TurboModuleRegistry = get_ActivityIndicator.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("NativeMetricMonitorModule");
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NativeMetricMonitorModule.tsx");

export default enforcing;