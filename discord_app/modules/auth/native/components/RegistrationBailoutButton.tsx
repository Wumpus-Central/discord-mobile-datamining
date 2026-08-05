// discord_app/modules/auth/native/components/RegistrationBailoutButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = require("createCacheKey").fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

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