// discord_app/modules/safety_hub/native/AppealIngestionActivitySummary.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { ClassificationEvidence } from "ClassificationEvidence.tsx";

let closure_4 = createCacheKey.createStyles({ activity: { marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default function AppealIngestionActivitySummary(flaggedContent) {
  return <View style={callback().activity}>{jsx(ClassificationEvidence, { flaggedContent: arg0.flaggedContent })}</View>;
};