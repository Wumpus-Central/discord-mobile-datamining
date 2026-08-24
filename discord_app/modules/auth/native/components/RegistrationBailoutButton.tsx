// discord_app/modules/auth/native/components/RegistrationBailoutButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = require("set").fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  const obj = { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.CZ7wvG);
  obj[2] = Button.Button.Sizes.MEDIUM;
  obj[3] = Button.ButtonLooks.LINK;
  obj[4] = Button.ButtonColors.LINK;
  obj[5] = callback().bail;
  obj[6] = onBail.onBail;
  return jsx(Button.Button, { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null });
};