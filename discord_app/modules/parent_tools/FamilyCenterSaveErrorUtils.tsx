// === Module 17228: FamilyCenterSaveErrorUtils ===

// Module 17228 (FamilyCenterSaveErrorUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_4 = async function _showToastIfSaveFails() {
  c2 = 0;
  c4 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_1 = tmp3;
    await value;
    if (1 === tmp7) {
      c3 = 0;
      closure_129_0(closure_129_1[2]).showFailedToast(closure_129_3.FAMILY_CENTER_TEEN_SETTINGS_SAVE_ERROR);
      c4 = 3;
      closure_129_0(closure_129_1[2]);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  })();
};
const SafetyToastType = fn(6847).SafetyToastType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterSaveErrorUtils.tsx");

export function showToastIfSaveFails() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}