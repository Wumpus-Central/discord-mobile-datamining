// discord_app/modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettingsAccountBackupCodesDefault from "../../../user_settings/account/native/UserSettingsAccountBackupCodes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  const obj = { onGenerate: null, headerLabel: null };
  const intl = util.intl;
  obj.headerLabel = intl.format(util.t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
}
