// discord_app/modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx
import CodeRowDefault from "../../../user_settings/account/native/UserSettingsAccountBackupCodes.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(dependencyMap[3]).getHeaderCloseButton(() => {
        closure_0.popToTop();
        const result = closure_1_1(closure_1_2[4]).closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null, headerLabel: null };
  const intl = navigation(1236).intl;
  obj[1] = intl.format(navigation(1236).t.iVTs6i, {});
  return jsx(CodeRowDefault, { onGenerate: null, headerLabel: null });
};