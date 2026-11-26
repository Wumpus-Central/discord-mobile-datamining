// === Module 10689: BugReportStore ===

// Module 10689 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5232 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;