// discord_app/modules/application_commands/native/ApplicationCommandValidationUtils.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/application_commands/native/ApplicationCommandValidationUtils.tsx");

export const getFirstInvalidOption = function getFirstInvalidOption(activeCommand, first2) {
  const options = activeCommand.options;
  if (null == options) {
    return null;
  } else {
    for (const item10010 of options) {
      let tmp4 = arg1[item10010.name];
      let tmp3 = item10010;
      if (item10010.required) {
        let tmp5 = tmp4;
        if (null == tmp4) {
          let tmp10 = obj;
          obj.return();
          return item10010;
        }
      }
      let tmp6 = tmp4;
      if (null != tmp4) {
        let tmp7 = tmp4;
        if (!tmp4.success) {
          let tmp8 = item10010;
          let tmp9 = obj;
          obj.return();
          return tmp3;
        }
      }
      continue;
    }
    return null;
  }
};
