// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_2 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, copy: null };
createCacheKey = { color: ThemesDefault.colors.TEXT_BRAND };
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx",
);

export default function TwoFASetupScan(totpSecret) {
  totpSecret = totpSecret.totpSecret;
  dependencyMap = undefined;
  const tmp = callback3();
  const tmp2 = callback(React.useState(false), 2);
  dependencyMap = tmp2[1];
  const items = [totpSecret];
  callback = React.useCallback(() => {
    dependencyMap(true);
    totpSecret(5990).copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  let obj = totpSecret(14630);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: items1, children: null };
  items1 = [,];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl = totpSecret(1233).intl;
  obj[1] = intl.string(totpSecret(1233).t["hg/+aT"]);
  const items2 = [callback2(totpSecret(1296).LegacyText, obj), , ,];
  obj1 = { style: items3, children: null };
  items3 = [,];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  const intl2 = totpSecret(1233).intl;
  obj1[1] = intl2.string(totpSecret(1233).t["UQR+Qy"]);
  items2[1] = callback2(totpSecret(1296).LegacyText, obj1);
  items2[2] = callback2(totpSecret(4474).Text, {
    variant: "text-md/bold",
    style: { textAlign: "center" },
    children: totpSecret,
  });
  const obj2 = { accessibilityRole: "button", onPress: callback, children: null };
  const obj3 = { style: tmp.copy, children: null };
  const intl3 = totpSecret(1233).intl;
  const string = intl3.string;
  const t = totpSecret(1233).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  const obj4 = { children: null };
  obj3[1] = stringResult;
  obj2[2] = callback2(totpSecret(1296).LegacyText, obj3);
  items2[3] = callback2(totpSecret(5077).PressableOpacity, obj2);
  obj[2] = items2;
  obj4[0] = closure_5(totpSecret(5562).SafeAreaPaddingView, obj);
  return callback2(totpSecret(14626).TwoFASetupModalScreen, obj4);
}
