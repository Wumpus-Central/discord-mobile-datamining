// === Module 13463: BugReportStore ===

// Module 13463 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5045 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;