// === Module 16896: CommunityRequirementSatisfiedForm ===

// Module 16896 (CommunityRequirementSatisfiedForm)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let result = require("obj132").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/CommunityRequirementSatisfiedForm.tsx");

export default function CommunityRequirementSatisfiedForm(formSwitchDisabled) {
  formSwitchDisabled = formSwitchDisabled.formSwitchDisabled;
  let obj = formSwitchDisabled(16886);
  const enableCommunitySharedStyles = obj.useEnableCommunitySharedStyles();
  obj = { style: enableCommunitySharedStyles.communityRequirementSatisfiedFormWrapper, children: null };
  const items = [formSwitchDisabled.children, ];
  let tmp6 = null;
  if (formSwitchDisabled) {
    obj = { accessibilityRole: "button", style: null, onPress: null };
    obj[1] = enableCommunitySharedStyles.communityRequirementSatisfiedFormPressable;
    obj[2] = function onPress() {
      if (formSwitchDisabled) {
        const result = formSwitchDisabled(dependencyMap[3]).communityRequirementSatisfied();
        const obj = formSwitchDisabled(dependencyMap[3]);
      }
    };
    tmp6 = callback(formSwitchDisabled(5433).PressableOpacity, obj);
  }
  items[1] = tmp6;
  obj[1] = items;
  return callback(View, obj);
};