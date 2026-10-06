// === Module 11514: AppealIngestionActivitySummary ===

// Module 11514 (AppealIngestionActivitySummary)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ClassificationEvidenceDefault from "ClassificationEvidence" /* 11515 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let flaggedContent;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ activity: { marginBottom: 16 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((flaggedContent) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  flaggedContent = flaggedContent.flaggedContent;
  const tmp3 = closure_5();
  if (cResult[0] !== flaggedContent) {
    const tmp7 = jsx(ClassificationEvidenceDefault, { flaggedContent });
    cResult[0] = flaggedContent;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.activity) {
    let tmp8;
    if (cResult[3] === tmp4) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = <View style={tmp3.activity}>{tmp4}</View>;
  cResult[2] = tmp3.activity;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((flaggedContent) => {
  flaggedContent = flaggedContent.flaggedContent;
  return <View style={closure_5().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent })}</View>;
});
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default tmp3;