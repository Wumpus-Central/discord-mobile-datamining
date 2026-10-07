// discord_app/modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SafetyTipsSectionDefault from "SafetyTipsSection.tsx";
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(9797).getInappropriateConversationsSafetyTips;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { safetyTipsContainer: { marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(11);
      ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.EtNxi6);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { description: null, safetyTips: null };
        const intl2 = util.intl;
        obj2.description = intl2.string(util.t.DJMZX6);
        obj2.safetyTips = closure_4().map((children, index) =>
          jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index),
        );
        const tmp12 = <tmp10 description={null} safetyTips={null} />;
        cResult[1] = tmp12;
        let tmp7 = tmp12;
        const arr = closure_4();
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.safetyTipsContainer) {
        const obj3 = { style: tmp4.safetyTipsContainer, children: tmp7 };
        const tmp16 = <View style={tmp4.safetyTipsContainer}>{tmp7}</View>;
        cResult[2] = tmp4.safetyTipsContainer;
        cResult[3] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === channelId) {
        if (cResult[5] === onClose) {
          if (cResult[6] === recipientId) {
            if (cResult[7] === tmp13) {
              if (cResult[8] === warningId) {
                if (cResult[9] === warningType) {
                  let tmp17 = cResult[10];
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
      ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
      const obj = {
        hasHeaderBack: true,
        recipientId,
        warningId,
        warningType,
        headerTitle: null,
        channelId: null,
        onClose: null,
        children: null,
      };
      const tmp = closure_6();
      const intl = util.intl;
      obj.headerTitle = intl.string(util.t.EtNxi6);
      obj.channelId = channelId;
      obj.onClose = onClose;
      const obj2 = { style: tmp.safetyTipsContainer, children: null };
      const obj3 = { description: null, safetyTips: null };
      const intl2 = util.intl;
      obj3.description = intl2.string(util.t.DJMZX6);
      obj3.safetyTips = closure_4().map((children, index) =>
        jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index),
      );
      obj2.children = <tmp3 description={null} safetyTips={null} />;
      obj.children = <View style={tmp.safetyTipsContainer}>{null}</View>;
      return (
        <tmp2
          hasHeaderBack
          recipientId={recipientId}
          warningId={warningId}
          warningType={warningType}
          headerTitle={null}
          channelId={null}
          onClose={null}
        >
          {null}
        </tmp2>
      );
    };
