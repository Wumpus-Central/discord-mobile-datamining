// discord_app/modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Constants from "../../Constants.tsx";
import SafetyTipsSectionDefault from "SafetyTipsSection.tsx";
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
let closure_4 = Constants.getInappropriateConversationsSafetyTips;
const jsx = Fragment.jsx;
let obj = { safetyTipsContainer: obj2 };
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let first;
      let onClose;
      let recipientId;
      let tmp13;
      let tmp7;
      let warningId;
      let warningType;
      const obj = react2;
      const cResult = obj.c(11);
      ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.EtNxi6);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        SafetyTipsSectionDefault;
        const intl2 = intl3.intl;
        const tmp12 = (
          <tmp10
            description={intl2.string(intl3.t.DJMZX6)}
            safetyTips={closure_4().map((children, index) =>
              jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index),
            )}
          />
        );
        cResult[1] = tmp12;
        tmp7 = tmp12;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.safetyTipsContainer) {
        const tmp16 = <View style={tmp4.safetyTipsContainer}>{tmp7}</View>;
        cResult[2] = tmp4.safetyTipsContainer;
        cResult[3] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === channelId) {
        if (cResult[5] === onClose) {
          if (cResult[6] === recipientId) {
            if (cResult[7] === tmp13) {
              if (cResult[8] === warningId) {
                let tmp17;
                if (cResult[9] === warningType) {
                  tmp17 = cResult[10];
                }
                return tmp17;
              }
            }
          }
        }
      }
      const tmp18 = jsx(SafetyToolsActionSheetWrapperDefault, {
        hasHeaderBack: true,
        recipientId,
        warningId,
        warningType,
        headerTitle: first,
        channelId,
        onClose,
        children: tmp13,
      });
      cResult[4] = channelId;
      cResult[5] = onClose;
      cResult[6] = recipientId;
      cResult[7] = tmp13;
      cResult[8] = warningId;
      cResult[9] = warningType;
      cResult[10] = tmp18;
      tmp17 = tmp18;
    }
  : (arg0) => {
      let arr;
      let channelId;
      let intl2;
      let onClose;
      let recipientId;
      let warningId;
      let warningType;
      ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
      const tmp = closure_6();
      SafetyToolsActionSheetWrapperDefault;
      const intl = intl3.intl;
      ({
        description: intl2.string(intl3.t.DJMZX6),
        safetyTips: arr.map((children, index) => jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index)),
      });
      SafetyTipsSectionDefault;
      intl2 = intl3.intl;
      arr = closure_4();
      return (
        <tmp2
          hasHeaderBack
          recipientId={recipientId}
          warningId={warningId}
          warningType={warningType}
          headerTitle={intl.string(intl3.t.EtNxi6)}
          channelId={channelId}
          onClose={onClose}
        >
          {null}
        </tmp2>
      );
    };
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default tmp3;
