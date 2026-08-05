import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
// discord_app/modules/mfa/native/components/button.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(Button /* Button */.Button, { size: "lg" });
};