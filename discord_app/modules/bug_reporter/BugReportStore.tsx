// === Module 10127: zustandStore ===

// Module 10127 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4241 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ isReportOpen: false }));
const result = set.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;