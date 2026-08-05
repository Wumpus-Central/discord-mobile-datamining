// discord_app/modules/auth/native/useInitialRegistrationStep.tsx
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import hasConsented from "hasConsented";
import { resetRegistration } from "useRegistrationUIStore";

const require = arg1;
const result = require("hasConsented").fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const _require = arg0;
  const items = [hasConsented];
  const stateFromStores = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp2 = callback === callback(outer1_2[4]).getRegistrationSteps()[1];
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      const locationMetadata = stateFromStores(outer1_2[6]).getLocationMetadata();
      const obj2 = stateFromStores(outer1_2[6]);
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = React.useEffect(() => {
    if (callback === obj.getRegistrationSteps()[1]) {
      return () => {
        callback2();
        if (!authenticated.isAuthenticated()) {
          callback(table[6]).loginReset();
          const obj = callback(table[6]);
        }
      };
    }
    obj = callback(outer1_2[4]);
  }, items2);
};