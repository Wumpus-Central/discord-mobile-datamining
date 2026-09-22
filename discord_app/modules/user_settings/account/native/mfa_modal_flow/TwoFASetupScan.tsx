// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  copy: { color: nativeDefault.colors.TEXT_BRAND },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default function TwoFASetupScan(totpSecret) {
  totpSecret = totpSecret.totpSecret;
  const tmp = closure_6();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp2[1];
  const items = [totpSecret];
  const callback = noop.useCallback(() => {
    closure_1(true);
    ClipboardUtils.copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  const twoFASetupStyles = totpSecret(15070).useTwoFASetupStyles();
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { style: null, children: null };
  const items1 = [,];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj3.style = items1;
  const intl = totpSecret(1115).intl;
  obj3.children = intl.string(totpSecret(1115).t["hg/+aT"]);
  const items2 = [closure_4(totpSecret(1177).LegacyText, obj3), , ,];
  const obj4 = { style: null, children: null };
  const items3 = [,];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  obj4.style = items3;
  const intl2 = totpSecret(1115).intl;
  obj4.children = intl2.string(totpSecret(1115).t["UQR+Qy"]);
  items2[1] = closure_4(totpSecret(1177).LegacyText, obj4);
  items2[2] = closure_4(totpSecret(4753).Text, {
    variant: "text-md/bold",
    style: { textAlign: "center" },
    children: totpSecret,
  });
  const obj5 = { accessibilityRole: "button", onPress: callback, children: null };
  const obj6 = { style: tmp.copy, children: null };
  const intl3 = totpSecret(1115).intl;
  const string = intl3.string;
  const t = totpSecret(1115).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  const obj7 = { children: null };
  obj6.children = stringResult;
  obj5.children = closure_4(totpSecret(1177).LegacyText, obj6);
  items2[3] = closure_4(totpSecret(5341).PressableOpacity, obj5);
  obj2.children = items2;
  obj7.children = closure_5(totpSecret(7370).SafeAreaPaddingView, obj2);
  return closure_4(totpSecret(15066).TwoFASetupModalScreen, obj7);
}
