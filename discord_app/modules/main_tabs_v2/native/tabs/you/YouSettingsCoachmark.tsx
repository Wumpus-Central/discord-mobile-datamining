// discord_app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
import useCoachmark from "../../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import useConsoleConnectionCoachmark from "../../../../connections/console_coachmark/native/useConsoleConnectionCoachmark.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx");

export default function YouSettingsCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
}
export function useYouSettingsCoachmark(disabled) {
  disabled = disabled.disabled;
  let consoleConnectionCoachmark = useConsoleConnectionCoachmark.useConsoleConnectionCoachmark({ disabled });
  if (consoleConnectionCoachmark == null) {
    consoleConnectionCoachmark = obj2.useReferralProgramCoachmark({ disabled });
  }
  if (consoleConnectionCoachmark == null) {
    consoleConnectionCoachmark = null;
  }
  return consoleConnectionCoachmark;
}
