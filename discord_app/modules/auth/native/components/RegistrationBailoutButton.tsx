// discord_app/modules/auth/native/components/RegistrationBailoutButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const result = require("createCacheKey").fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  const obj = { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.CZ7wvG);
  obj[2] = require("../../../../design/void/native.tsx") /* Button */.Button.Sizes.MEDIUM;
  obj[3] = require("../../../../design/void/native.tsx") /* Button */.ButtonLooks.LINK;
  obj[4] = require("../../../../design/void/native.tsx") /* Button */.ButtonColors.LINK;
  obj[5] = callback().bail;
  obj[6] = onBail.onBail;
  return jsx(require("../../../../design/void/native.tsx") /* Button */.Button, { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null });
};