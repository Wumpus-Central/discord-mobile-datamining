// discord_app/modules/safety_hub/native/AppealIngestionActivitySummary.tsx
import ClassificationEvidenceDefault from "ClassificationEvidence.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return (
    <View style={closure_4().activity}>
      {jsx(ClassificationEvidenceDefault, { flaggedContent: flaggedContent.flaggedContent })}
    </View>
  );
}
