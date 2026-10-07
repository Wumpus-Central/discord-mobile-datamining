// discord_app/modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (formSwitchDisabled) => {
      const cResult = formSwitchDisabled(576).c(7);
      formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
      const children = formSwitchDisabled.children;
      let obj = formSwitchDisabled(576);
      const tmp = formSwitchDisabled;
      const enableCommunitySharedStyles = formSwitchDisabled(17885).useEnableCommunitySharedStyles();
      if (cResult[0] === enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable) {
        if (cResult[1] === formSwitchDisabled) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper) {
            if (cResult[5] === tmp5) {
              let tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
        const obj3 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
        const items = [children, tmp5];
        obj3.children = items;
        const tmp11 = closure_4(View, obj3);
        cResult[3] = children;
        cResult[4] = enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper;
        cResult[5] = tmp5;
        cResult[6] = tmp11;
        tmp8 = tmp11;
      }
      let tmp6 = null;
      if (formSwitchDisabled) {
        const obj4 = {
          accessibilityRole: "button",
          style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
          onPress() {
            if (formSwitchDisabled) {
              const result = ToastUtils.communityRequirementSatisfied();
            }
          },
        };
        tmp6 = closure_3(tmp(5916).PressableOpacity, obj4);
      }
      cResult[0] = enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable;
      cResult[1] = formSwitchDisabled;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = formSwitchDisabled(17885);
    }
  : (formSwitchDisabled) => {
      formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
      const enableCommunitySharedStyles = formSwitchDisabled(17885).useEnableCommunitySharedStyles();
      const obj2 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
      const items = [formSwitchDisabled.children];
      let tmp6 = null;
      if (formSwitchDisabled) {
        const obj3 = {
          accessibilityRole: "button",
          style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
          onPress() {
            if (formSwitchDisabled) {
              const result = ToastUtils.communityRequirementSatisfied();
            }
          },
        };
        tmp6 = closure_3(formSwitchDisabled(5916).PressableOpacity, obj3);
      }
      items[1] = tmp6;
      obj2.children = items;
      return closure_4(View, obj2);
    };
