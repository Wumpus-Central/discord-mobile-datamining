// discord_app/modules/labs/LabFeatures.tsx
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  hide_icymi_tab: { description: "Hide ICYMI tab" },
  go_back_to_regular_input: { description: "Go back to regular input" },
  enable_native_markdown: { description: "Enable native markdown parser", defaultValue: true },
};
const result = size.fileFinishedImporting("modules/labs/LabFeatures.tsx");

export default obj;
export const getLabFeatureDefaultValue = function getLabFeatureDefaultValue(key10008) {
  let flag = obj[key10008].defaultValue;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
