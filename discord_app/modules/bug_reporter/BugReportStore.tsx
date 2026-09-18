// === Module 10424: BugReportStore ===

// Module 10424 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4592 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;