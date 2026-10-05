// discord_app/modules/multi_account/native/AccountSwitchingSpinnerModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import intl2 from "../../../intl/index.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({
  switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_4();
      const switchingSpinnerContainer = tmp4.switchingSpinnerContainer;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.n8qMH0);
        const tmp9 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[0] = stringResult;
        cResult[1] = tmp9;
        tmp5 = stringResult;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.switchingSpinnerContainer) {
        const tmp13 = (
          <View style={switchingSpinnerContainer} accessible accessibilityLabel={tmp5}>
            {tmp6}
          </View>
        );
        cResult[2] = tmp4.switchingSpinnerContainer;
        cResult[3] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : () => {
      const intl = intl2.intl;
      return (
        <View style={closure_4().switchingSpinnerContainer} accessible accessibilityLabel={intl.string(intl2.t.n8qMH0)}>
          {null}
        </View>
      );
    };
let obj = { animation: ConstantsIOS.ModalAnimation.FADE, closable: false };
tmp3.modalConfig = obj;
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default tmp3;
