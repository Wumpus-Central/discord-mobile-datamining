// === Module 18215: CommunityRequirementSatisfiedForm ===

// Module 18215 (CommunityRequirementSatisfiedForm)
import ToastUtils from "ToastUtils" /* 4522 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const enableCommunitySharedStyles = formSwitchDisabled(18205).useEnableCommunitySharedStyles();
  const obj2 = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    const obj3 = {
      accessibilityRole: "button",
      style: enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable,
      onPress() {
          if (formSwitchDisabled) {
            const result = ToastUtils.communityRequirementSatisfied();
          }
        }
    };
    tmp6 = closure_3(formSwitchDisabled(5427).PressableOpacity, obj3);
  }
  items[1] = tmp6;
  obj2.children = items;
  return closure_4(View, obj2);
};