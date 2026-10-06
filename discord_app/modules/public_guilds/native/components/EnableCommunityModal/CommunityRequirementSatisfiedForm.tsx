// === Module 17895: CommunityRequirementSatisfiedForm ===

// Module 17895 (CommunityRequirementSatisfiedForm)
import react_native from "react-native" /* 17 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let formSwitchDisabled;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((formSwitchDisabled) => {
  let items;
  let obj = formSwitchDisabled(576);
  const cResult = obj.c(7);
  const tmp = formSwitchDisabled;
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const children = formSwitchDisabled.children;
  const obj2 = formSwitchDisabled(17885);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  if (cResult[0] === enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable) {
    let tmp5;
    if (cResult[1] === formSwitchDisabled) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper) {
        let tmp8;
        if (cResult[5] === tmp5) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    const obj3 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: items };
    items = [children, tmp5];
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
            const obj = ToastUtils;
            const result = obj.communityRequirementSatisfied();
          }
        }
    };
    tmp6 = closure_3(tmp(5916).PressableOpacity, obj4);
  }
  cResult[0] = enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable;
  cResult[1] = formSwitchDisabled;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((formSwitchDisabled) => {
  let items;
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const children = formSwitchDisabled.children;
  let obj = formSwitchDisabled(17885);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  const obj2 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: items };
  items = [children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    const obj3 = {
      accessibilityRole: "button",
      style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
      onPress() {
          if (formSwitchDisabled) {
            const obj = ToastUtils;
            const result = obj.communityRequirementSatisfied();
          }
        }
    };
    tmp6 = closure_3(tmp(5916).PressableOpacity, obj3);
  }
  items[1] = tmp6;
  return closure_4(View, obj2);
});
let result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default tmp4;