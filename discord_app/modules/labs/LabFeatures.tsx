// === Module 8521: LabFeatures ===

// Module 8521 (LabFeatures)
import size from "module_2" /* 2 */;

const obj = { hide_icymi_tab: { description: "Hide ICYMI tab" }, go_back_to_regular_input: { description: "Go back to regular input" }, enable_native_markdown: { description: "Enable native markdown parser", defaultValue: true } };
const result = size.fileFinishedImporting("modules/labs/LabFeatures.tsx");

export default obj;
export function getLabFeatureDefaultValue(key10008) {
  let flag = obj[key10008].defaultValue;
  if (flag == null) {
    flag = false;
  }
  return flag;
}