// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, copy: null };
createStyles = { color: nativeDefault.colors.TEXT_BRAND };
createStyles.copy = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
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
  let obj = totpSecret(14786);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: null, children: null };
  const items1 = [,];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  obj.style = items1;
  const intl = totpSecret(1114).intl;
  obj.children = intl.string(totpSecret(1114).t["hg/+aT"]);
  const items2 = [closure_4(totpSecret(1178).LegacyText, obj), , ,];
  const obj1 = { style: null, children: null };
  const items3 = [,];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  obj1.style = items3;
  const intl2 = totpSecret(1114).intl;
  obj1.children = intl2.string(totpSecret(1114).t["UQR+Qy"]);
  items2[1] = closure_4(totpSecret(1178).LegacyText, obj1);
  items2[2] = closure_4(totpSecret(4556).Text, {
    variant: "text-md/bold",
    style: { textAlign: "center" },
    children: totpSecret,
  });
  const obj2 = { accessibilityRole: "button", onPress: callback, children: null };
  const obj3 = { style: tmp.copy, children: null };
  const intl3 = totpSecret(1114).intl;
  const string = intl3.string;
  const t = totpSecret(1114).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  const obj4 = { children: null };
  obj3.children = stringResult;
  obj2.children = closure_4(totpSecret(1178).LegacyText, obj3);
  items2[3] = closure_4(totpSecret(5123).PressableOpacity, obj2);
  obj.children = items2;
  obj4.children = closure_5(totpSecret(7123).SafeAreaPaddingView, obj);
  return closure_4(totpSecret(14782).TwoFASetupModalScreen, obj4);
}
