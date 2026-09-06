// discord_app/modules/activities/utils/getIFrameSandboxAttributes.tsx
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
const result = size.fileFinishedImporting("modules/activities/utils/getIFrameSandboxAttributes.tsx");

export default function getIFrameSandboxAttributes(allowPopups) {
  let obj = closure_0;
  if (allowPopups.allowPopups) {
    const items = [,];
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp, 0);
    items[arraySpreadResult] = "allow-popups";
    items[arraySpreadResult + 1] = "allow-popups-to-escape-sandbox";
    obj = items;
  }
  return obj.join(" ");
}
