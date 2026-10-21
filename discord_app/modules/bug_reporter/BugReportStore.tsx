// === Module 13687: BugReportStore ===

// Module 13687 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5145 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;