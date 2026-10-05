// discord_app/modules/safety_hub/native/AppealIngestionSpam.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import native from "../../../design/void/native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import AppealIngestionModal from "AppealIngestionModal.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(6);
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(native.LegacyText, { children: "TODO - SPAM" });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.container) {
        const tmp10 = jsx(common_SafeAreaView.SafeAreaPaddingView, {
          bottom: true,
          style: tmp4.container,
          children: first,
        });
        cResult[1] = tmp4.container;
        cResult[2] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        let tmp11;
        if (cResult[4] === tmp8) {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const AppealIngestionModalScreen = AppealIngestionModal.AppealIngestionModalScreen;
      const tmp12 = <AppealIngestionModalScreen>{null}</AppealIngestionModalScreen>;
      cResult[3] = tmp4.container;
      cResult[4] = tmp8;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : () => {
      const tmp = closure_4();
      const AppealIngestionModalScreen = AppealIngestionModal.AppealIngestionModalScreen;
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      return <AppealIngestionModalScreen>{null}</AppealIngestionModalScreen>;
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default tmp3;
