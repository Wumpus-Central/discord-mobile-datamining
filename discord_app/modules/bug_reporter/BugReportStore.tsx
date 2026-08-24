// discord_app/modules/bug_reporter/BugReportStore.tsx
import set from "../../../_runtime/00002_set.js";
import defaultStatesAreEqual from "../../lib/ZustandStore.tsx";

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ isReportOpen: false }));
const result = set.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;