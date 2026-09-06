// === Module 15673: MFAButton ===

// Module 15673 (MFAButton)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 4975 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(Button.Button, { size: "lg" });
};