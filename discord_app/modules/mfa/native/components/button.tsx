// discord_app/modules/mfa/native/components/button.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(Button.Button, { size: "lg" });
};