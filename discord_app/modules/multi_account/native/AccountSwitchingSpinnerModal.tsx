// discord_app/modules/multi_account/native/AccountSwitchingSpinnerModal.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_4 = createStyles.createStyles({
  switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AccountSwitchingSpinnerModal() {
      const cResult = c.c(4);
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.n8qMH0);
        const tmp9 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
        cResult[0] = stringResult;
        cResult[1] = tmp9;
        tmp5 = stringResult;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.switchingSpinnerContainer) {
        const obj2 = {
          style: tmp4.switchingSpinnerContainer,
          accessible: true,
          accessibilityLabel: tmp5,
          children: tmp6,
        };
        const tmp13 = (
          <View style={tmp4.switchingSpinnerContainer} accessible accessibilityLabel={tmp5}>
            {tmp6}
          </View>
        );
        cResult[2] = tmp4.switchingSpinnerContainer;
        cResult[3] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : function AccountSwitchingSpinnerModal() {
      const obj = {
        style: closure_4().switchingSpinnerContainer,
        accessible: true,
        accessibilityLabel: null,
        children: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.n8qMH0);
      obj.children = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      return (
        <View style={closure_4().switchingSpinnerContainer} accessible accessibilityLabel={null}>
          {null}
        </View>
      );
    };
tmp3.modalConfig = { animation: fn(1105).ModalAnimation.FADE, closable: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default tmp3;
