// === Module 9644: BugReportStore ===

// Module 9644 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4705 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;