// discord_app/modules/safety_hub/native/AppealIngestionActivitySummary.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import ClassificationEvidenceDefault from "ClassificationEvidence.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let flaggedContent;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ activity: { marginBottom: 16 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (flaggedContent) => {
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
    }
  : (flaggedContent) => {
      flaggedContent = flaggedContent.flaggedContent;
      return <View style={closure_5().activity}>{jsx(ClassificationEvidenceDefault, { flaggedContent })}</View>;
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionActivitySummary.tsx");

export default tmp3;
