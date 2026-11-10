// === Module 11228: BugReportStore ===

// Module 11228 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5329 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;