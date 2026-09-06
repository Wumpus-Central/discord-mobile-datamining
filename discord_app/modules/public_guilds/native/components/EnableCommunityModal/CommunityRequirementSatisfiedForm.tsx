// === Module 17675: CommunityRequirementSatisfiedForm ===

// Module 17675 (CommunityRequirementSatisfiedForm)
import ToastUtils from "ToastUtils" /* 4258 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  let obj = formSwitchDisabled(17665);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  obj = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    obj = {
      accessibilityRole: "button",
      style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
      onPress() {
          if (formSwitchDisabled) {
            const result = ToastUtils.communityRequirementSatisfied();
          }
        }
    };
    tmp6 = closure_3(formSwitchDisabled(5123).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  return closure_4(View, obj);
};