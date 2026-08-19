// === Module 14145: TwoFASetupScan ===

// Module 14145 (TwoFASetupScan)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { color: ThemesDefault.colors.TEXT_BRAND };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default function TwoFASetupScan(totpSecret) {
  totpSecret = totpSecret.totpSecret;
  const tmp = callback3();
  const tmp2 = callback(React.useState(false), 2);
  dependencyMap = tmp2[1];
  const items = [totpSecret];
  callback = React.useCallback(() => {
    dependencyMap(true);
    totpSecret(7167).copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  let obj = totpSecret(14143);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl = totpSecret(1236).intl;
  obj[1] = intl.string(totpSecret(1236).t["hg/+aT"]);
  const items2 = [callback2(totpSecret(1297).LegacyText, obj), , , ];
  obj1 = { style: items3, children: null };
  items3 = [, ];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  const intl2 = totpSecret(1236).intl;
  obj1[1] = intl2.string(totpSecret(1236).t["UQR+Qy"]);
  items2[1] = callback2(totpSecret(1297).LegacyText, obj1);
  items2[2] = callback2(totpSecret(4734).Text, { variant: "text-md/bold", style: { textAlign: "center" }, children: totpSecret });
  const obj2 = { accessibilityRole: "button", onPress: callback, children: null };
  const obj3 = { style: tmp.copy, children: null };
  const intl3 = totpSecret(1236).intl;
  const string = intl3.string;
  const t = totpSecret(1236).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  const obj4 = { children: null };
  obj3[1] = stringResult;
  obj2[2] = callback2(totpSecret(1297).LegacyText, obj3);
  items2[3] = callback2(totpSecret(5433).PressableOpacity, obj2);
  obj[2] = items2;
  obj4[0] = callback(totpSecret(6803).SafeAreaPaddingView, obj);
  return callback2(totpSecret(14139).TwoFASetupModalScreen, obj4);
};