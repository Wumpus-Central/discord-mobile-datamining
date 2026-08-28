// discord_app/modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  let obj = formSwitchDisabled(17180);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  obj = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    obj = { accessibilityRole: "button", style: null, onPress: null };
    obj[1] = enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable;
    obj[2] = function onPress() {
      if (formSwitchDisabled) {
        const result = formSwitchDisabled(closure_1_1[3]).communityRequirementSatisfied();
        const obj = formSwitchDisabled(closure_1_1[3]);
      }
    };
    tmp6 = callback(formSwitchDisabled(5033).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[1] = items;
  return closure_4(View, obj);
};