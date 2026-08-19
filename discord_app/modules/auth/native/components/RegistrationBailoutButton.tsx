// === Module 15241: RegistrationBailoutButton ===

// Module 15241 (RegistrationBailoutButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_3 = createCacheKey.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = require("obj132").fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

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