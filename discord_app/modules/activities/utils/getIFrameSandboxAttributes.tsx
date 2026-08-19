// === Module 12475: getIFrameSandboxAttributes ===

// Module 12475 (getIFrameSandboxAttributes)
import obj132 from "obj132" /* 2 */;

let closure_0 = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
const result = obj132.fileFinishedImporting("modules/activities/utils/getIFrameSandboxAttributes.tsx");

export default function getIFrameSandboxAttributes(allowPopups) {
  let obj = closure_0;
  if (allowPopups.allowPopups) {
    const items = [, ];
    const arraySpreadResult = HermesBuiltin.arraySpread(closure_0, 0);
    items[arraySpreadResult] = "allow-popups";
    items[arraySpreadResult + 1] = "allow-popups-to-escape-sandbox";
    obj = items;
  }
  return obj.join(" ");
};