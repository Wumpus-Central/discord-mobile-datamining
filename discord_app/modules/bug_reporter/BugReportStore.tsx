// discord_app/modules/bug_reporter/BugReportStore.tsx
import ZustandStore from "../../lib/ZustandStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
