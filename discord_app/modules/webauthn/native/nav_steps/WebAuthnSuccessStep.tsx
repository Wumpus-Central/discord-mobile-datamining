// === Module 14678: WebAuthnSuccessStep ===

// Module 14678 (WebAuthnSuccessStep)
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14663 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14679 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
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
  obj = { onGenerate: null, headerLabel: null };
  const intl = navigation(1114).intl;
  obj.headerLabel = intl.format(navigation(1114).t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
};