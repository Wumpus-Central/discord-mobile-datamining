// === Module 10273: BugReportStore ===

// Module 10273 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4476 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;