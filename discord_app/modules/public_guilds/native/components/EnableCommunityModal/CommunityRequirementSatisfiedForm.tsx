// discord_app/modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx",
);

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  const enableCommunitySharedStyles = formSwitchDisabled(17917).useEnableCommunitySharedStyles();
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
    tmp6 = closure_3(formSwitchDisabled(5210).PressableOpacity, obj3);
  }
  items[1] = tmp6;
  obj2.children = items;
  return closure_4(View, obj2);
}
