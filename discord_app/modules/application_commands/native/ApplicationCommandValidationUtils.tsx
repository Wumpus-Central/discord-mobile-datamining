// === Module 12157: application_commands/ApplicationCommandValidationUtils ===

// Module 12157 (application_commands/ApplicationCommandValidationUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandValidationUtils.tsx");

export const getFirstInvalidOption = function getFirstInvalidOption(activeCommand, first2) {
  const options = activeCommand.options;
  if (null == options) {
    return null;
  } else {
    for (const item10010 of options) {
      let tmp4 = arg1[item10010.name];
      let tmp3 = item10010;
      if (item10010.required) {
        if (null == tmp4) {
          obj.return();
          return item10010;
        }
      }
      if (null != tmp4) {
        if (!tmp4.success) {
          obj.return();
          return tmp3;
        }
      }
      continue;
    }
    return null;
  }
};