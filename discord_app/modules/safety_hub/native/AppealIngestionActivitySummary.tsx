// === Module 11983: AppealIngestionActivitySummary ===

// Module 11983 (AppealIngestionActivitySummary)
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 11984 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_4 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={closure_4().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent: flaggedContent.flaggedContent })}</View>;
};