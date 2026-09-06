// === Module 10184: BugReportStore ===

// Module 10184 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4429 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;