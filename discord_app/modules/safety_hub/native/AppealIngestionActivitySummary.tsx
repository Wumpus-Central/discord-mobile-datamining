// discord_app/modules/safety_hub/native/AppealIngestionActivitySummary.tsx
import c from "../../../../_runtime/00576_c.js";
import ClassificationEvidenceDefault from "ClassificationEvidence.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ activity: { marginBottom: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppealIngestionActivitySummary(flaggedContent) {
      const cResult = c.c(5);
      flaggedContent = flaggedContent.flaggedContent;
      const tmp3 = closure_5();
      if (cResult[0] !== flaggedContent) {
        const obj2 = { flaggedContent };
        const tmp7 = jsx(ClassificationEvidenceDefault, { flaggedContent });
        cResult[0] = flaggedContent;
        cResult[1] = tmp7;
        let tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp3.activity) {
        if (cResult[3] === tmp4) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = <View style={tmp3.activity}>{tmp4}</View>;
      cResult[2] = tmp3.activity;
      cResult[3] = tmp4;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp3.activity, children: tmp4 };
    }
  : function AppealIngestionActivitySummary(flaggedContent) {
      return (
        <View style={closure_5().activity}>
          {jsx(ClassificationEvidenceDefault, { flaggedContent: flaggedContent.flaggedContent })}
        </View>
      );
    };
