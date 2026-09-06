// discord_app/modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import PasskeyUpsellActionCreatorsDefault from "../PasskeyUpsellActionCreators.tsx";
import UserSettingsAccountBackupCodesDefault from "../../../user_settings/account/native/UserSettingsAccountBackupCodes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
      }),
    };
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null, headerLabel: null };
  const intl = navigation(1114).intl;
  obj.headerLabel = intl.format(navigation(1114).t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
}
