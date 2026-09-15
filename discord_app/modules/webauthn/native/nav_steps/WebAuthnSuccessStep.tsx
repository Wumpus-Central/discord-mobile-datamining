// === Module 14775: WebAuthnSuccessStep ===

// Module 14775 (WebAuthnSuccessStep)
import NavigatorHeader from "NavigatorHeader" /* 5709 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14761 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14776 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        navigation.popToTop();
        const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  const obj2 = { onGenerate: null, headerLabel: null };
  let obj = navigation(1484);
  const intl = navigation(1115).intl;
  obj2.headerLabel = intl.format(navigation(1115).t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
};